export {initialCards, createCard, delCard };
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
    }
];





// @todo: Темплейт карточки

const cardTemlate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

function createCard(el, delCard, likedCard) {
  const cardElement = cardTemlate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').setAttribute('src', el.link);
    cardElement.querySelector('.card__image').setAttribute('alt', el.name);
    cardElement.querySelector('.card__title').textContent = el.name;

  const btnDel = cardElement.querySelector('.card__delete-button');
    btnDel.addEventListener('click', delCard);

  const btnLike = cardElement.querySelector('.card__like-button'); 
    btnLike.addEventListener('click', function(evt) {
      evt.target.classList.toggle('card__like-button_is-active');
    });

  return cardElement;
}

// @todo: Функция удаления карточки

function delCard(evt) {
  const item = evt.target.closest('.card');
  item.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function (cardElement) {
  const card = createCard(cardElement, delCard);
  placesList.append(card);
});



