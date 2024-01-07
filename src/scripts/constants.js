const cardTemplate = document.querySelector("#card-template").content;

const placesList = document.querySelector(".places__list");


const profileAva = document.querySelector(".profile__image");
const popupEditProfileAva = document.querySelector(".popup_type_edit-avatar");
const editAvaForm = popupEditProfileAva.querySelector(".popup__form");
const avaFormInput = editAvaForm.querySelector(".popup__input_type_url");

const popupImg = document.querySelector(".popup_type_image");
const popupPic = popupImg.querySelector(".popup__image");
const popupCaption = popupImg.querySelector(".popup__caption");

const btnEditProfile = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup_type_edit");
const editForm = document.forms["edit-profile"];
const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__description");
const profileNameInput = editForm.elements.name;
const profileDescinput = editForm.elements.description;

const btnAddNewPlace = document.querySelector(".profile__add-button");
const popupNewCard = document.querySelector(".popup_type_new-card");
const newPlaceForm = document.forms["new-place"];
const newPlaceName = newPlaceForm.elements["place-name"];
const newPlaceLink = newPlaceForm.elements.link;

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export {
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
};
