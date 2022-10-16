function validate() {
   let email = document.getElementById('email');
   email.addEventListener('change', dynamicValidation);


   function dynamicValidation() {
        let pattern = /\b[a-z]+@[a-z]+.[a-z]+/g;
        let emailInput = email.value;

        if(!emailInput.match(pattern)) {
            email.classList.add('error');
        } else {
            email.classList.remove('error');
        }
   }
}