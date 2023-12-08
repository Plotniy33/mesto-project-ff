export { openPopup, closePopup, closePopupByClick, closePopupByEsc };

function openPopup(popup) {
  popup.classList.add("popup_is-animated", "popup_is-opened");
  document.addEventListener("keydown", closePopupByClick);
  document.addEventListener("keydown", closePopupByEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupByClick);
  document.removeEventListener("keydown", closePopupByEsc);
}

function closePopupByClick(evt) {
  if (
    evt.target.classList.contains("popup__close") ||
    evt.target.classList.contains("popup_is-opened")
  ) {
    closePopup(document.querySelector(".popup_is-opened"));
  }
}

function closePopupByEsc(evt) {
  if (evt.key === "Escape") {
    const popupIsOpened = document.querySelector(".popup_is-opened");
    closePopup(popupIsOpened);
  }
}
