function openPopup(popup) {
  popup.classList.add("popup_is-animated");
  setTimeout(() => {
    popup.classList.add("popup_is-opened");
  }, 1);
  popup.addEventListener("mousedown", closePopupByClick);
  document.addEventListener("keydown", closePopupByEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  popup.removeEventListener("mousedown", closePopupByClick);
  document.removeEventListener("keydown", closePopupByEsc);
}

function closePopupByClick(evt) {
  if (
    evt.target.classList.contains("popup__close") ||
    evt.target.classList.contains("popup_is-opened")
  ) {
    closePopup(evt.currentTarget);
  }
}

function closePopupByEsc(evt) {
  if (evt.key === "Escape") {
    const popupIsOpened = document.querySelector(".popup_is-opened");
    closePopup(popupIsOpened);
  }
}

export { openPopup, closePopup, closePopupByClick, closePopupByEsc };