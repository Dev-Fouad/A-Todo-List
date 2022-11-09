let  addform = document.querySelector('.add')
let list = document.querySelector('.todos')


let  generateTemplate = (todo) => {

    let html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `

    list.innerHTML += html 
}

addform.addEventListener('click' , (e) => {

    e.preventDefault();

    let todo = addform.add.value.trim()
    console.log(todo);

    if(todo.length){
        generateTemplate(todo)
        // addform.reset()
    }
})

// Delete todos
list.addEventListener('click' , e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})






