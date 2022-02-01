var phoneInput = document.getElementById("shipping_phone");
var phoneInputVal = phoneInput.value;
phoneInput.setAttribute("aria-required", "true");
document.querySelector("label[for='shipping_phone'").innerHTML = "<span>Phone</span>";
document.querySelector(".ch-accept-button").addEventListener("click", function(){
  console.log(phoneInput);
  alert(phoneInput.value);
  if (phoneInput.value == "") {
    phoneInput.parentElement.classList.add("ch-invalid");
    phoneInput.parentElement.querySelector(".text-danger").innerHTML = "<span>Phone Is Required</span>";
  }
  else {
    phoneInput.parentElement.classList.remove("ch-invalid");
    phoneInput.parentElement.querySelector(".text-danger").innerHTML = "<span></span>";
  }
  
  var phoneInputTemp = phoneInput.value;
  var phoneInputTemp = phoneInputTemp.replace(/[^A-Z0-9]/ig, "");
  
  if (!/^\d{3}\d{3}\d{4}$/.test(phoneInputTemp)) {
         phoneInput.parentElement.classList.add("ch-invalid");
           phoneInput.parentElement.querySelector(".text-danger").innerHTML = "<span>Invalid Phone Number</span>";
  }
    else {
         phoneInput.parentElement.classList.remove("ch-invalid");
         phoneInput.parentElement.querySelector(".text-danger").innerHTML = "<span></span>";
    }


});

phoneInput.addEventListener('change', (event) => {
  phoneInput.parentElement.classList.remove("ch-invalid");
    phoneInput.parentElement.querySelector(".text-danger").innerHTML = "<span></span>";
});