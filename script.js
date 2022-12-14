// ELEMENTS
let  addform = document.querySelector('.add')
let list = document.querySelector('.todos')
let search = document.querySelector('.search input')


// THE FUNCTION 
let  generateTemplate = (todo) => {

    let html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `

    list.innerHTML += html 
}

// ADDING TODOS
addform.addEventListener('click' , (e) => {

    e.preventDefault();

    let todo = addform.add.value.trim()
    console.log(todo);

    if(todo.length){
        generateTemplate(todo)
        addform.reset()
    }
})



// Delete todos
list.addEventListener('click' , e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }

});


// FILTERING THE SEARCH INPUT
let filterTodos = (term) => {

    Array.from(list.children)
    filter((todo) =>  !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) = todo.classList.add('filtered'))

    Array.from(list.children)
    .filter((todo) =>  todo.textContent.toLowerCase().includes(term))
    .forEach((todo) = todo.classList.remove('filtered'))

};


// Keyup Event
search.addEventListener('keyup' , () => {
    let term = search.value.trim().toLowercase();
    filterTodos(term)
})
