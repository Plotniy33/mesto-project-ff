import { initialCards, createCard, delCard, likeCard } from "./cards.js";
import { openPopup, closePopup } from "./modal.js";
import "../pages/index.css";
export {};

const placesList = document.querySelector(".places__list");

const popups = document.querySelectorAll(".popup");

const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");

const btnEditProfile = document.querySelector(".profile__edit-button");
const btnAddNewPlace = document.querySelector(".profile__add-button");

const editForm = document.forms["edit-profile"];
const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__description");

const newPlaceForm = document.forms["new-place"];
const newPlaceName = newPlaceForm.elements["place-name"];
const newPlaceLink = newPlaceForm.elements.link;

popups.forEach(function (popup) {
  popup.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup_is-opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});

btnEditProfile.addEventListener("click", () => {
  openPopup(popupEdit);
  editForm.name.value = profileName.textContent;
  editForm.description.value = profileDesc.textContent;
});

btnAddNewPlace.addEventListener("click", () => {
  openPopup(popupNewCard);
  console.log("edfv");
});

initialCards.forEach(function (cardElement) {
  const newCard = createCard(cardElement, delCard, likeCard, openPopup);
  placesList.append(newCard);
});
