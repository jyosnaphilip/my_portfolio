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

function scroll_header(){
  window.scrollTo(0,300);
}


