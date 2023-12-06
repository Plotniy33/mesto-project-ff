import { createCard, delCard, likeCard } from "./cards.js";
import { openPopup } from "./modal.js";
import {
  newPlaceForm,
  newPlaceName,
  newPlaceLink,
  placesList,
  handleFormSubmit,
} from "./index.js";

newPlaceForm.addEventListener("submit", (evt) => {
  const addedCard = createCard(
    { name: newPlaceName.value, link: newPlaceLink.value },
    delCard,
    likeCard,
    openPopup
  );
  placesList.prepend(addedCard);
  handleFormSubmit(evt);
});
