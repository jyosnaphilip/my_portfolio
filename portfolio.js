


(function () {
  
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
          const submitBtn=document.getElementById("submit");
          submitBtn.innerHTML="<i class='fa-solid fa-circle-check' style='color: #9bfda2;'></i>";
          submitBtn.innerHTML+="<span class='t-font p-2'>  Message sent!</span>";
        
          setTimeout(function () {
            
            window.location.reload();
            
          }, 4000);
          
        }
  
        form.classList.add('was-validated');
      }, false);
    });
  })();
  



function scroll_header(){
  window.scrollTo(0,300);
}



