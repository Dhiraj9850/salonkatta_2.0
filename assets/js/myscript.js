
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

// for open modal below 800px 
$('#buttonModal').on('click',function(){
     if($(document).width() <= 800) {
        $('#searchModal').modal('show');
     }
})

$('#locationModal').on('click',function(){
    if($(document).width() <= 800){
        $('#placeModal').modal('show');
    }
})


