const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const regex = /\D+/g;

    const value = input.value;

    const newLi = document.createElement("li");

    const newName = document.createElement("span");
    
    if(regex.test(value)){
        newLi.classList.add("guest")
        newName.textContent = value.match(regex);
    }else{
        alert("Padrão não encontrado, digite corretamente!");
    }

    newLi.append(newName);
    ul.append(newLi);
});



