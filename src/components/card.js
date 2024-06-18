// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
function createCard(dataCard, deleteCard, openImagePopup, likeCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardTitle.textContent = dataCard.name;
  cardImage.src = dataCard.link;
  cardImage.alt = dataCard.name;

  cardDeleteButton.addEventListener("click", deleteCard);
  cardImage.addEventListener("click", openImagePopup);
  cardLikeButton.addEventListener("click", likeCard);

  return cardElement;
}

// Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest(".card").remove();
}

// Функция лайка карточки
function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

export { createCard, deleteCard, likeCard };
