export { openPopup, closePopup, closePopupEvt };

function openPopup(popup) {
  popup.classList.add("popup_is-animated", "popup_is-opened");
  document.addEventListener("keydown", closePopupEvt);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupEvt);
}

function closePopupEvt(evt) {
  if (
    evt.target.classList.contains("popup__close") ||
    evt.target.classList.contains("popup_is-opened") ||
    evt.key === "Escape"
  ) {
    closePopup(document.querySelector(".popup_is-opened"));
  }
}
