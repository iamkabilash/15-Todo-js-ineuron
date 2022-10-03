const input = document.querySelector(".input");
const add = document.querySelector(".addButton");
const container = document.querySelector(".container");
const deleteButton = document.querySelector(".deleteButton");

function createTodo() {
    if(input.value !== ""){
        const item = document.createElement("div");
        item.classList.add("item");
        container.appendChild(item);

        const item_input = document.createElement("div");
        item_input.classList.add("item_input");
        item_input.innerText = input.value;

        const buttons = document.createElement("div");

        const editButton = document.createElement("button");
        editButton.innerText = "EDIT";
        editButton.classList.add("editButton")
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "DELETE";
        deleteButton.classList.add("deleteButton")
        deleteButton.setAttribute("onclick", "deleteTodo()");

        buttons.appendChild(editButton);
        buttons.appendChild(deleteButton);

        item.appendChild(item_input);
        item.appendChild(buttons);

        input.value = "";
    }
}

function deleteTodo() {
    const item = document.querySelector(".item");
    item.remove();
}

add.addEventListener("click", createTodo);