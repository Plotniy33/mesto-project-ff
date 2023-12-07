export { createCard, delCard, likeCard };
import { cardTemlate } from "./index.js";

const popupImg = document.querySelector(".popup_type_image");
const popupPic = popupImg.querySelector(".popup__image");
const popupCaption = popupImg.querySelector(".popup__caption");

function createCard(el, delCard, likeCard, callback) {
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

  cardImage.addEventListener("click", function () {
    popupPic.src = cardImage.src;
    popupPic.alt = cardImage.alt;
    popupCaption.textContent = cardDescription.textContent;
    callback(popupImg);
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
