const input = document.querySelector("#favchap");
const bookList = document.querySelector(".list");
const inputBtn = document.querySelector("#input__btn");

inputBtn.addEventListener("click", () => {
  if (input.value.trim()) {
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const deleteBtn = document.createElement("button");

    listText.textContent = input.value.trim();
    deleteBtn.textContent = "❌";
    deleteBtn.ariaLabel = `Remove ${input.value.trim()}`;
    listItem.append(listText, deleteBtn);
    bookList.append(listItem);

    input.focus();

    deleteBtn.addEventListener("click", () => {
      deleteBtn.closest(listItem.tagName).remove();
      input.focus();
    });
    input.value = "";
  }
});
