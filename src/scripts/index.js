export { cardTemplate };

import {
  getInitialCards,
  getUserInfo,
  editUserInfo,
  addingNewCard,
  updateUserAvatar,
} from "./api.js";
import { enableValidation, clearVlidation } from "./validation.js";
import { createCard, delCard, likeCard } from "./card.js";
import {
  openPopup,
  closePopup,
  closePopupByClick,
  closePopupByEsc,
} from "./modal.js";
import "../pages/index.css";

const cardTemplate = document.querySelector("#card-template").content;

const placesList = document.querySelector(".places__list");

const popups = document.querySelectorAll(".popup");

const profileAva = document.querySelector(".profile__image");
const popupEditProfileAva = document.querySelector(".popup_type_edit-avatar");
const editAvaForm = popupEditProfileAva.querySelector(".popup__form");
const avaFormInput = editAvaForm.querySelector(".popup__input_type_url");
const btnEditAva = editAvaForm.querySelector(".popup__button");

const popupImg = document.querySelector(".popup_type_image");
const popupPic = popupImg.querySelector(".popup__image");
const popupCaption = popupImg.querySelector(".popup__caption");

const btnEditProfile = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup_type_edit");
const editForm = document.forms["edit-profile"];
const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__description");
const btnSaveProfileEdit = editForm.querySelector(".popup__button");
const profileNameInput = editForm.elements.name;
const profileDescinput = editForm.elements.description;

const btnAddNewPlace = document.querySelector(".profile__add-button");
const popupNewCard = document.querySelector(".popup_type_new-card");
const newPlaceForm = document.forms["new-place"];
const newPlaceName = newPlaceForm.elements["place-name"];
const btnNewPlaceAdd = newPlaceForm.querySelector(".popup__button");
const newPlaceLink = newPlaceForm.elements.link;

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

let userId;

enableValidation(validationConfig);

popups.forEach(function (popup) {
  popup.addEventListener("click", closePopupByClick);
  popup.addEventListener("click", closePopupByEsc);
});

function openCard(card) {
  popupPic.src = card.link;
  popupPic.alt = card.name;
  popupCaption.textContent = card.name;
  openPopup(popupImg);
}

btnEditProfile.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescinput.value = profileDesc.textContent;
  openPopup(popupEdit);
  clearVlidation(popupEdit, validationConfig);
});

editForm.addEventListener("submit", submitProfileForm);

function submitProfileForm(evt) {
  evt.preventDefault();
  loading(true, btnSaveProfileEdit);
  editUserInfo(profileNameInput.value, profileDescinput.value)
    .then((data) => {
      profileName.textContent = data.name;
      profileDesc.textContent = data.about;
      closePopup(evt.target.closest(".popup"));
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      loading(false, btnSaveProfileEdit);
    });
}

btnAddNewPlace.addEventListener("click", () => {
  newPlaceForm.reset();
  openPopup(popupNewCard);
  clearVlidation(newPlaceForm, validationConfig);
});

newPlaceForm.addEventListener("submit", addingCardUser);

function addingCardUser(evt) {
  evt.preventDefault();
  loading(true, btnNewPlaceAdd);
  addingNewCard(newPlaceName.value, newPlaceLink.value)
    .then((data) => {
      const addedCard = createCard(data, userId, delCard, likeCard, openCard);
      placesList.prepend(addedCard);
      closePopup(evt.target.closest(".popup"));
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      loading(false, btnNewPlaceAdd);
    });
}

profileAva.addEventListener("click", () => {
  editAvaForm.reset();
  openPopup(popupEditProfileAva);
  clearVlidation(editAvaForm, validationConfig);
});

editAvaForm.addEventListener("submit", submitAvaForm);

function submitAvaForm(evt) {
  evt.preventDefault();
  loading(true, btnEditAva);
  updateUserAvatar(avaFormInput.value)
    .then((data) => {
      profileAva.style.backgroundImage = `url('${data.avatar}')`;
      closePopup(evt.target.closest(".popup"));
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      loading(false, btnEditAva);
    });
}

Promise.all([getInitialCards(), getUserInfo()])
  .then(([cardsData, profileData]) => {
    userId = profileData._id;
    profileName.textContent = profileData.name;
    profileDesc.textContent = profileData.about;
    profileAva.style.backgroundImage = `url(\\${profileData.avatar})`;

    cardsData.forEach(function (cardElement) {
      const newCard = createCard(
        cardElement,
        userId,
        delCard,
        likeCard,
        openCard
      );
      placesList.append(newCard);
    });
  })
  .catch((err) => {
    console.error(`Ошибка: ${err}`);
  });

const loading = (isLoading, button) => {
  button.textContent = isLoading ? "Сохранение..." : "Сохранить";
};
