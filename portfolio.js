function validateForm() {
    var x = document.forms["form"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
    else{
        submit_val("submit");
    }
  }

  function submit_val(tag){
    tag.innerHTML= "<i class='fa fa-check tick' ></i>";
    tag.removeAttribute("style");
}
