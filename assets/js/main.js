// const dropDown = document.getElementById('firstDropdown');


// function showFirstDropdown(){
//     dropDown.style.display = 'block';
//     document.addEventListener('click',hideDropdown);
// }

// function hideDropdown(event){
//     if (!dropDown.contains(event.target) && event.target !== document.querySelector('.form-control')) {
//         dropDown.style.display = 'none';
//         document.removeEventListener('click', hideDropdown);
//       }
// }

// const secondDropDown = document.getElementById('secondDropdown');

// function showSecondDropdown(){
//     secondDropDown.style.display = 'block';
//     document.addEventListener('click',hideSecondDropdown);
// }

// function hideSecondDropdown(event){
//     if (!secondDropDown.contains(event.target) && event.target !== document.querySelector('.form-control.p-2')) {
//         secondDropDown.style.display = 'none';
//         document.removeEventListener('click', hideSecondDropdown);
//     }
// }


// const input1 = document.querySelector('.input-group input[aria-describedby="basic-addon1"]');
// const input2 = document.querySelector('.input-group input[aria-label="Server"]');
// const dropdown1 = document.querySelector('#firstDropdown');
// const dropdown2 = document.querySelector('#secondDropdown');

// // open dropdown when input is clicked
// input1.addEventListener('click', function() {
//   dropdown1.classList.toggle('show');
// });

// input2.addEventListener('click', function() {
//   dropdown2.classList.toggle('show');
// });

// // close dropdown when clicked outside
// document.addEventListener('click', function(e) {
//   if (!input1.contains(e.target)) {
//     dropdown1.classList.remove('show');
//   }
//   if (!input2.contains(e.target)) {
//     dropdown2.classList.remove('show');
//   }
// });

  
// const input1 = document.querySelector('.input-group input[aria-describedby="basic-addon1"]');
// const input2 = document.querySelector('.input-group input[aria-label="Server"]');
// const dropdown1 = document.querySelector('#firstDropdown');
// const dropdown2 = document.querySelector('#secondDropdown');

// // open dropdown when input is clicked
// input1.addEventListener('click', function() {
//   dropdown1.classList.toggle('show');
// });

// input2.addEventListener('click', function() {
//   dropdown2.classList.toggle('show');
// });

// // close dropdown when clicked outside
// document.addEventListener('click', function(e) {
//   if (!input1.contains(e.target)) {
//     dropdown1.classList.remove('show');
//   }
//   if (!input2.contains(e.target)) {
//     dropdown2.classList.remove('show');
//   }
// });



var firstDropdown = document.getElementById("firstDropdown");
var secondDropdown = document.getElementById("secondDropdown");
var input1 = document.querySelector(".inpgrp input[type='text']");
var input2 = document.querySelectorAll(".inpgrp input[type='text']")[1];

input1.addEventListener("click", function () {
    if (firstDropdown.style.display === "block") {
        firstDropdown.style.display = "none";
    } else {
        firstDropdown.style.display = "block";
        secondDropdown.style.display = "none";
    }
});

input2.addEventListener("click", function () {
    if (secondDropdown.style.display === "block") {
        secondDropdown.style.display = "none";
    } else {
        secondDropdown.style.display = "block";
        firstDropdown.style.display = "none";
    }
});

document.addEventListener("click", function (e) {
    if (!e.target.closest(".inpgrp")) {
        firstDropdown.style.display = "none";
        secondDropdown.style.display = "none";
    }
});

