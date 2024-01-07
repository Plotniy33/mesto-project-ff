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

function request(url, options) {
  return fetch(`${config.baseUrl}` + url, options).then(testResponse);
}

const getInitialCards = () => {
  return request("/cards", {
    headers: config.headers,
  });
};

const getUserInfo = () => {
  return request("/users/me", {
    headers: config.headers,
  });
};

const editUserInfo = (userName, userAbout) => {
  return request("/users/me", {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: userName,
      about: userAbout,
    }),
  });
};

const addNewCard = (placeName, placeLink) => {
  return request("/cards", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: placeName,
      link: placeLink,
    }),
  });
};

const putLike = (cardId) => {
  return request(`/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  });
};

const delLike = (cardId) => {
  return request(`/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  });
};

const delCardUser = (cardId) => {
  return request(`/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  });
};

const updateUserAvatar = (avaLink) => {
  return request("/users/me/avatar", {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({ avatar: avaLink }),
  });
};

export {
  getInitialCards,
  getUserInfo,
  editUserInfo,
  addNewCard,
  putLike,
  delLike,
  delCardUser,
  updateUserAvatar,
};
