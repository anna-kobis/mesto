import "../pages/index.css";
import { createCard, deleteCard, likeCard } from "../components/card.js";
import {
  openModal,
  closeModal,
  closeModalByOverlay,
} from "../components/modal.js";
import { initialCards } from "../components/cards.js";

// DOM узлы
// Профиль
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileEditButton = document.querySelector(".profile__edit-button");

// Карточки
const cardAddButton = document.querySelector(".profile__add-button");
const cardList = document.querySelector(".places__list");

// Модальные окна
const popups = document.querySelectorAll(".popup");
const closeButtons = document.querySelectorAll(".popup__close");

// Окно редактирования профиля
const profileEditPopup = document.querySelector(".popup_type_edit");
const profileForm = document.forms["edit-profile"];
const profileNameInput = profileForm.elements.name;
const profileDescriptionInput = profileForm.elements.description;

// Окно добавления карточки
const cardAddPopup = document.querySelector(".popup_type_new-card");
const cardForm = document.forms["new-place"];
const cardNameInput = cardForm.elements["place-name"];
const cardLinkInput = cardForm.elements.link;

// Окно просмотра картинки
const cardViewPopup = document.querySelector(".popup_type_image");
const cardViewPopupImage = cardViewPopup.querySelector(".popup__image");
const cardViewPopupCaption = cardViewPopup.querySelector(".popup__caption");

// Функция открытия картинки карточки
function openImagePopup(evt) {
  cardViewPopupImage.src = evt.target.src;
  cardViewPopupImage.alt = evt.target.alt;
  cardViewPopupCaption.textContent = evt.target.alt;
  openModal(cardViewPopup);
}

// Функция редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditPopup);
}

// Функция добавления карточки из формы
function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const card = { name: cardNameInput.value, link: cardLinkInput.value };

  cardList.prepend(createCard(card, deleteCard, openImagePopup, likeCard));
  closeModal(cardAddPopup);
  cardForm.reset();
}

// Вывести карточки на страницу
initialCards.forEach((card) => {
  cardList.append(createCard(card, deleteCard, openImagePopup, likeCard));
});

// Слушатели открытия модальных окон
profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditPopup);
});

cardAddButton.addEventListener("click", () => {
  openModal(cardAddPopup);
});

// Слушатели закрытия модальных окон
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeModal(button.closest(".popup"));
  });
});

popups.forEach((popup) => {
  popup.addEventListener("click", closeModalByOverlay);
});

// Слушатель редактирования профиля
profileForm.addEventListener("submit", handleProfileFormSubmit);

// Слушатель добавления карточки
cardForm.addEventListener("submit", handleCardFormSubmit);
