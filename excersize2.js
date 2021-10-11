//target
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


//Task 2 :this function is to display alert box in window.
function task2HeaderColorChange(event){

    event.target.classList.toggle("text-danger");
}

function task2PopupVowels(event){
    const character = event.key;
    if(character.match(/[aeiouAEIOU]/)&&character.length===1 ){     //match the character from {a,e,i,o,u}
        alert("Vowels is pressing");
    }
}


//Task 3 :this function is display prime numbers.
function setPrimeNumberList(event) {
    let primeNum = [];
    event.preventDefault();     //stop the default html event.
    let checkNum = Number(document.getElementById("task_3_number").value);
    if(checkNum === 0 || checkNum == 1){
        primeNum.push("No prime number");
    }
    else if(checkNum === 2){
        primeNum.push(2);
    }
    else{
        primeNum.push(2);
        for(let i = 3 ; i <= checkNum ; i+=2){
            primeNum.some((num)=>i % num==0) ? "" : primeNum.push(i);       //check whether nunmber is divisible by previous prime number or not.
        }
    } 
    document.getElementById("task_3_show_prime_number_list").innerHTML = primeNum;
  }


//Task 4 : this function is to display message for key code.
function showKeycodeAndCheckVowels(event){
    const task4Input = document.getElementById("task_4_input");
    const showKeyCode = document.getElementById("show_key_code");
    event.key.length===1? showKeyCode.textContent =  event.keyCode:"" ;    //display code of pressing key.
    event.key.match(/[aeiouAEIOU]/) && event.key.length === 1 ? 
    (task4Input.style.backgroundColor = "red") && (alert("Vowel is pressed: ")  + showKeyCode.textContent) : 
    task4Input.style.backgroundColor = "white";      //if vowel pressed script display message and background will be red.
}


//Task 5: this function is display odd numbers.
function displayOddNumbers(event){
    event.preventDefault();
    const odd_num = document.getElementById("task_5_number").value;
    let arr = [];
    for(let i = 1 ; i < odd_num ; i+=2){
        arr.push(i);        //push an element in an array.
    }
    document.getElementById("task_5_show_odd_number").innerHTML = "Odd number is: "+arr;
}