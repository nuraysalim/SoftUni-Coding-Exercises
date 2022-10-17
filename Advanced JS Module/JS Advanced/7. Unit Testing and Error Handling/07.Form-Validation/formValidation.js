function validate() {
    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', validating);
    let form = document.getElementById('registerForm');
    let validMessage = document.getElementById('valid');
    let isCompany = document.getElementById("company");
    isCompany.addEventListener('change', checkbox);
    let companyInfo = document.getElementById("companyInfo");

    function checkbox() {
        if(isCompany.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }
    
    function validating(e) {
        e.preventDefault();
        let username = document.getElementById('username');
        let usernamePattern = /^[A-Za-z0-9]{3,20}$/g;
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirm-password");
        let passPattern = /^[\w]{5,15}$/g;
        let email = document.getElementById("email");
        let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/g;
        let companyNumber = document.getElementById("companyNumber");


        validateUsername(username.value, usernamePattern);
        validatePassword(password.value, confirmPassword.value, passPattern);
        validateEmail(email.value, emailPattern);
        if(isCompany.checked) {
            validateCompanyInfo(companyNumber.value);
        }

        let finalForm = Array.from(form.elements).slice(1).map(x => x.style.borderColor);

        if(!finalForm.some(x => x == 'red')) {
            validMessage.style.display = 'block';
        } else {
            validMessage.style.display = 'none';
        }
        
        function validateUsername(nickname, pattern) {
            if(!nickname.match(pattern)) {
                document.getElementById('username').style.borderColor = "red";
            } else {
                username.style.border = "none";
            }
        }
        
        function validatePassword(pass, confirmPass, pattern) {
            if(pass !== confirmPass) {
                password.style.borderColor = "red";
                confirmPassword.style.borderColor = "red";
                return;
            }
            
            if(!pass.match(pattern)) {
                password.style.borderColor = "red";
                confirmPassword.style.borderColor = "red";
            } else {
                password.style.border = "none";
                confirmPassword.style.border = "none";
            };
        }
        
        function validateEmail(emailAdress, pattern) { debugger;
            if(!emailAdress.match(pattern)) {
                email.style.borderColor = "red";
            } else {
                email.style.border = "none";
            }
        }

        function validateCompanyInfo(number) {
             debugger;
            if(number < 1000 || number > 9999) {
                companyNumber.style.borderColor = "red";
            } else {
                companyNumber.style.border = "none";
            }
        }
    }
}
