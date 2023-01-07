let input = document.querySelector(".inputTodo");
let todoWrapper = document.querySelector(".todosWrapper");
let todoCounter = 1;
input.addEventListener('keyup', (e) => {
        if (e.code === 'Enter' && input.value !== '') {

        let todo = document.createElement('div')
        let todoId = document.createElement('div')
        let todoTitle = document.createElement('div')
        let todoClose = document.createElement('div')

        todo.appendChild(todoId)
        todo.appendChild(todoTitle)
        todo.appendChild(todoClose)
        todoWrapper.appendChild(todo)

        todo.classList.add('todo');
        todoId.classList.add('todoId');
        todoTitle.classList.add('todoTitle');
        todoClose.classList.add('todoCloseButton');

        let todoContent = input.value;
        todoTitle.textContent = todoContent;
        todoId.textContent = todoCounter++;
        todoClose.textContent = "x"
        input.value = '';

        todoClose.addEventListener('click',(e) => {
            e.target.parentElement.style.display = 'none'
        })
        
        todoTitle.addEventListener('click',(e) => {
            e.target.parentElement.style.textDecoration = 'line-through'
        })
    }
})

console.log(e.code)
