export { openPopup, closePopup, escPopup };

function openPopup(popup) {
  popup.classList.add("popup_is-animated", "popup_is-opened");
  document.addEventListener("keydown", escPopup);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", escPopup);
}

function escPopup(evt) {
  if (evt.key === "Escape") {
    const popupIsOpened = document.querySelector(".popup_is-opened");
    closePopup(popupIsOpened);
  }
}


