// Функция открытия модального окна
function openModal(popup) {
  popup.classList.add("popup_is-animated");

  setTimeout(() => {
    popup.classList.add("popup_is-opened");
  }, 0);

  document.addEventListener("keydown", closeModalByEsc);
}

// Функции закрытия модального окна
function closeModal(popup) {
  popup.classList.remove("popup_is-opened");

  setTimeout(() => {
    popup.classList.remove("popup_is-animated");
  }, 600);

  document.removeEventListener("keydown", closeModalByEsc);
}

function closeModalByOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.target);
  }
}

function closeModalByEsc(evt) {
  if (evt.key === "Escape") {
    closeModal(document.querySelector(".popup_is-opened"));
  }
}

export { openModal, closeModal, closeModalByOverlay };
