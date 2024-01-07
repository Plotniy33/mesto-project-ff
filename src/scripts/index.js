import {
  cardTemplate,
  placesList,
  profileAva,
  popupEditProfileAva,
  editAvaForm,
  avaFormInput,
  popupImg,
  popupPic,
  popupCaption,
  btnEditProfile,
  popupEdit,
  editForm,
  profileName,
  profileDesc,
  profileNameInput,
  profileDescinput,
  btnAddNewPlace,
  popupNewCard,
  newPlaceForm,
  newPlaceName,
  newPlaceLink,
  validationConfig
} from "./constants.js";

import {
  getInitialCards,
  getUserInfo,
  editUserInfo,
  addNewCard,
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
import { changeButtonText } from "./utils.js"
import "../pages/index.css";


let userId;

enableValidation(validationConfig);

// popups.forEach(function (popup) {
//   popup.addEventListener("click", closePopupByClick);
//   popup.addEventListener("click", closePopupByEsc);
// });

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

function submitProfileForm(evt) {
  evt.preventDefault();
  changeButtonText(true, evt.submitter);
  editUserInfo(profileNameInput.value, profileDescinput.value)
    .then((data) => {
      profileName.textContent = data.name;
      profileDesc.textContent = data.about;
      closePopup(popupEdit);
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      changeButtonText(false, evt.submitter);
    });
}

editForm.addEventListener("submit", submitProfileForm);


btnAddNewPlace.addEventListener("click", () => {
  newPlaceForm.reset();
  openPopup(popupNewCard);
  clearVlidation(newPlaceForm, validationConfig);
});

function submitCardUser(evt) {
  evt.preventDefault();
  changeButtonText(true, evt.submitter);
  addNewCard(newPlaceName.value, newPlaceLink.value)
    .then((data) => {
      const addedCard = createCard(data, userId, delCard, likeCard, openCard);
      placesList.prepend(addedCard);
      closePopup(popupNewCard);
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      changeButtonText(false, evt.submitter);
    });
}

newPlaceForm.addEventListener("submit", submitCardUser);


profileAva.addEventListener("click", () => {
  editAvaForm.reset();
  openPopup(popupEditProfileAva);
  clearVlidation(editAvaForm, validationConfig);
});

function submitAvaForm(evt) {
  evt.preventDefault();
  changeButtonText(true, evt.submitter);
  updateUserAvatar(avaFormInput.value)
    .then((data) => {
      profileAva.style.backgroundImage = `url('${data.avatar}')`;
      closePopup(popupEditProfileAva);
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      changeButtonText(false, evt.submitter);
    });
}

editAvaForm.addEventListener("submit", submitAvaForm);


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


export { cardTemplate };