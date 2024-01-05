export { createCard, delCard, likeCard };
import { cardTemplate } from "./index.js";
import { putLike, delLike, delCardUser } from "./api.js";

function createCard(el, userId, delCard, likeCard, openCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardDescription = cardElement.querySelector(".card__title");
  const cardLikeCounter = cardElement.querySelector(".card__like-counter");

  cardImage.src = el.link;
  cardImage.alt = el.name;
  cardDescription.textContent = el.name;
  cardLikeCounter.textContent = el.likes.length;

  const btnDel = cardElement.querySelector(".card__delete-button");

  if (el.owner._id === userId) {
    btnDel.addEventListener("click", () => {
      delCard(el._id, cardElement);
    });
  } else {
    btnDel.remove();
  }

  const btnLike = cardElement.querySelector(".card__like-button");
  btnLike.addEventListener("click", (evt) => {
    likeCard(evt, el._id, cardElement);
  });

  const liked = el.likes.some((like) => like._id === userId);
  if (liked) {
    btnLike.classList.add("card__like-button_is-active");
  }

  cardImage.addEventListener("click", function () {
    openCard(el);
  });

  return cardElement;
}

function delCard(cardId, cardElement) {
  delCardUser(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.err(`Ошибка: ${err}`);
    });
}

function likeCard(evt, cardId, cardElement) {
  const cardLikedCounter = cardElement.querySelector(".card__like-counter");
  if (evt.target.classList.contains("card__like-button_is-active")) {
    delLike(cardId)
      .then((card) => {
        evt.target.classList.remove("card__like-button_is-active");
        cardLikedCounter.textContent = card.likes.length;
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  } else {
    putLike(cardId)
      .then((card) => {
        evt.target.classList.add("card__like-button_is-active");
        cardLikedCounter.textContent = card.likes.length;
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }
}
