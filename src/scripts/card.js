export { createCard, delCard, likeCard, openCard };
import { cardTemlate } from "./index.js";
import { openPopup } from "./modal.js";

const popupImg = document.querySelector(".popup_type_image");
const popupPic = popupImg.querySelector(".popup__image");
const popupCaption = popupImg.querySelector(".popup__caption");

function openCard(card) {
  popupPic.src = card.link;
  popupPic.alt = card.name;
  popupCaption.textContent = card.name;
  openPopup(popupImg);
}

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

  cardImage.addEventListener("click", function () {
    openCard(el);
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
