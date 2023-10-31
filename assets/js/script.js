
const buttons = document.querySelectorAll(".all-btn");
const button1 = document.getElementById("first-btn")

/* let id_test = buttons[0].getAttribute('id') */

console.log(id_test)

buttons.forEach(button => {
    button.addEventListener('click', event => {
        console.log('knapp tryckt på');
        button.classList.toggle('hidden');
        button.setAttribute('style', 'background-color: yellow;');

        /* chang all other numbers that are not clicked */
        for(var i = 0; i < buttons.length; i++){
            if(event.currentTarget != buttons[i]){ // check here
              buttons[i].style.backgroundColor = "red";
            }
          }


      });
    });