const changeButtonText = (isLoading, button) => {
  button.textContent = isLoading ? "Сохранение..." : "Сохранить";
};

export { changeButtonText };
