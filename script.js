/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */


const input = document.getElementById("input");
const items = document.getElementById("items");

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const inputValue = input.value;

        if (inputValue) {
            addItem(inputValue);
            input.value = "";
        }
    }
});

function addItem(text) {
    const item = document.createElement("div");
    item.className = "item";
    item.textContent = text;

    item.addEventListener("click", () => {
        item.classList.toggle("done");
    });

    items.appendChild(item);
}