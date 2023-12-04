function validateForm() {
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated')
    }, false)
  })
}


function tick_mark(){
  document.getElementById("submit").innerHTML="<i class='fa-solid fa-circle-check' style='color: #9bfda2;'></i>";
}





// // When the user scrolls down 50px from the top of the document, resize the header's font size
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   
//     document.getElementById("name_pic").style.width= "180px";
//     document.getElementById("name_pic").style.height= "80px";
//     document.getElementById("pic").style.display= "none";
//     document.getElementById("designatn").style.display= "none";
//     document.getElementById("name_pic").style.position="sticky";


//   } 
//   else {
   
//     document.getElementById("name_pic").style.width= "280px";
//     document.getElementById("name_pic").style.height= "180px";
//     document.getElementById("name_pic").style.display= "block";
//     document.getElementById("name_pic").style.margin= "auto";
    
//     document.getElementById("pic").style.display= "block";
//     document.getElementById("designatn").style.display= "inline";





//

