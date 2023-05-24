const input = document.getElementById('todoInputForm');
const Btn = document.getElementById('todoInputBtn');
const cardsList = document.querySelector('.todo_cards')


Btn.addEventListener("click", e => {
    e.preventDefault();
    const div = document.createElement("div");
    div.classList.add("col-12", "col-md-6", "col-lg-4", "cards_todo");
    const card = `
    <div class="card">
    <div class="card-header">
        ${input.value}
    </div>
    <div class="card-body">
        <a href="#" class="btn btn-outline-danger cancel_btn">Cancel</a>
        <a href="#" class="btn btn-outline-success done_btn">Done</a>
    </div>
    </div>`
    div.innerHTML = card;
    cardsList.appendChild(div);
    input.value = "";
})

cardsList.addEventListener("click", event => {
    const item = event.target;
    item.classList.forEach(element => {
        if (element == "cancel_btn") {
            const todo = item.parentElement.parentElement.parentElement;
            todo.remove();
        }
        if (element == "done_btn") {
            const todo = item.parentElement.parentElement;
            console.log(todo)
            todo.classList.toggle("text-bg-dark")
            todo.style.opacity = 0.7;
        }
    });
})