export {
  getInitialCards,
  getUserInfo,
  editUserInfo,
  addingNewCard,
  putLike,
  delLike,
  delCardUser,
  updateUserAvatar,
};

const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/wff-cohort-3",
  headers: {
    authorization: "a50e3a9c-4b1a-4eff-b4ae-05a27926bc6d",
    "Content-Type": "application/json",
  },
};

const testResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => testResponse(res));
};

const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((res) => testResponse(res));
};

const editUserInfo = (userName, userAbout) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: userName,
      about: userAbout,
    }),
  }).then((res) => testResponse(res));
};

const addingNewCard = (placeName, placeLink) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: placeName,
      link: placeLink,
    }),
  }).then((res) => testResponse(res));
};

const putLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then((res) => testResponse(res));
};

const delLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => testResponse(res));
};

const delCardUser = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => testResponse(res));
};

const updateUserAvatar = (avaLink) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({ avatar: avaLink }),
  }).then((res) => testResponse(res));
};
