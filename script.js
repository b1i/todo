let form  = document.getElementById("form");
let input = document.getElementById("input");
let msg   = document.getElementById("msg");
let posts = document.getElementById("posts");


form.addEventListener("submit",(e) => {
    e.preventDefault();
    console.log(input.value);
    formValidation();
    input.innerText = "";
    
})


let formValidation = (e) =>{
    if(input.value === ""){ 
        msg.innerText = "Post cannot be blank"      
    }else{
        msg.innerText = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => { 
    data["text"] = input.value;
    console.log(data);
    createPost();

};

let createPost = () => {
    posts.innerHTML += `<div>
    <p>${data.text}</p>
    <span class="options">
        <i onClick = "deletePost(this)" class="fa-solid fa-trash-can"></i>
        <i onClick = "editPost(this)" class="fa-solid fa-pen-to-square"></i>
    </span>
</div>`;

input.value = "";
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};