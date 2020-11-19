// 1a
const button1 = document.querySelector('#one');

// 1b
button1.onclick = () => alert("You Clicked Button One");

// 2a
const button2 = document.querySelector('#two');

// 2b
button2.addEventListener('dblclick', () => {
    alert('You DOUBLE Clicked The Second Button!!!')
});

// BONUS
// 3a
const form = document.querySelector('form');

//  3b
form.addEventListener('submit', () => {
    const username = form.elements.username.value;
    alert(username);
});

// 4a
const darMode = document.querySelector('#dm');

// 4b
const allElements = document.querySelectorAll('*');
console.log(allElements);
darkMode.addEventListener('click', () => {
    for (element of allElements){
        element.classList.toggle('dark-mode');
    }
});
