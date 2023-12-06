export { initialCards, createCard, delCard, likeCard };
import {} from "./index.js";

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const cardTemlate = document.querySelector("#card-template").content;

const popupImg = document.querySelector(".popup_type_image");
const popupPic = popupImg.querySelector(".popup__image");
const popupCaption = popupImg.querySelector(".popup__caption");

function createCard(el, delCard, likeCard, openCard) {
  const cardElement = cardTemlate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardDescription = cardElement.querySelector(".card__title");

  cardImage.src = el.link;
  cardImage.alt = el.name;
  cardDescription.textContent = el.name;

  const btnDel = cardElement.querySelector(".card__delete-button");
  btnDel.addEventListener("click", delCard);

  const btnLike = cardElement.querySelector(".card__like-button");
  btnLike.addEventListener("click", likeCard);

  cardImage.addEventListener("click", () => {
    popupPic.src = cardImage.src;
    popupPic.alt = cardImage.alt;
    popupCaption.textContent = cardDescription.textContent;
    openCard(popupImg);
  });

  return cardElement;
}

function delCard(evt) {
  const item = evt.target.closest(".card");
  item.remove();
}

function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}
