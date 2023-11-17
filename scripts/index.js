// @todo: Темплейт карточки

const cardTemlate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

function createCard(el, delCard) {
  const cardElement = cardTemlate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').setAttribute('src', el.link);
    cardElement.querySelector('.card__image').setAttribute('alt', el.name);
    cardElement.querySelector('.card__title').textContent = el.name;

  const btnDel = cardElement.querySelector('.card__delete-button');
    btnDel.addEventListener('click', delCard);

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
