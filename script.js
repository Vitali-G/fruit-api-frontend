const fruitForm = document.querySelector("#inputSection form");
const fruitList = document.querySelector('#fruitSection ul');
// console.log(fruitForm)

fruitForm.addEventListener("submit", extractFruit);
// (e) - Event object - a special object you have access to every time you add an evenlistener to an object

function extractFruit(e) {
    e.preventDefault();
    let fruitInput = e.target.fruitInput.value;
    // console.log(e.target[0].value);
    // console.log(e.target.fruitInput.value);
    if(fruitInput) {
        addFruit(fruitInput);
    }
    
    // clear input in the form
    e.target.fruitInput.value = "";
    // or
    e.target.reset();
};

function addFruit(fruit) {
    //create list item
    const li = document.createElement('li');
    //assign test to list item
    li.textContent = fruit;

    //append list item to HTML list
    fruitList.appendChild(li);
    //add event listener to remove item, call remove function. Run this only once
    li.addEventListener("click", removeFruit, {once : true});
};


function removeFruit(e) {
    e.target.remove()
};
