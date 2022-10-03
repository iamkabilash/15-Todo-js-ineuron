const input = document.querySelector(".input");
const add = document.querySelector(".addButton");
const container = document.querySelector(".container");

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
        editButton.setAttribute("onclick", "editTodo()");

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
    document.activeElement.parentElement.parentElement.remove();
}

function editTodo() {
    let oldTodo = document.activeElement.parentElement.parentElement.firstChild.innerText;
    document.activeElement.parentElement.parentElement.remove();
    input.value = oldTodo;
    input.focus();
}

add.addEventListener("click", createTodo);

