const addForm = document.querySelector('.add');
const list    = document.querySelector('.todos');
const input   = document.querySelector('.redo')
const search  = document.querySelector('.search input')


const generateTemaplate = todo => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
             <i class="fa-solid fa-pen-to-square edit"></i>
             <span class="text-light">${todo}</span>
             <i class="far fa-trash-alt delete"></i>
        </li>`;

    list.innerHTML += html;

}; 

addForm.addEventListener('submit', e =>{

    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemaplate(todo);
        addForm.reset();
    }

});


// delete  todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    };
});

// edit todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('edit')){
       
        input.value = e.target.nextElementSibling.innerHTML;
        e.target.parentElement.remove()

    };
});


// search functionality
const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo)  => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};


// key event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
