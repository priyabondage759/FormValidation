const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const mobile = document.getElementById("phone");
const pswd = document.getElementById("password");
const cpswd = document.getElementById("cpswd");

// addevent listener on submit using

formVal.addEventListener("submit", (event) => {
    event.preventDefault();
    validate();
})

const isEmail = (emailVal)=>{
    var atsymbol = emailVal.indexOf("@");
    if(atsymbol<1)
    return false;
    var dotsymbol = emailVal.lastIndexOf(".");
    if(dotsymbol<= atsymbol + 3)
    return false;
    if(dotsymbol === emailVal.length - 1)
    return false;
    return true;
}

const validate = () => {
    const usernameval = username.value.trim();
    const emailVal = email.value.trim();
    const mobileVal = mobile.value.trim();
    const passwordval = pswd.value.trim();
    const confirmval = cpswd.value.trim();
    //Validate username
    if (usernameval === "") {
        setErrorMsg(username, "username cannot be blank");
    } else if (usernameval.length <= 3) {
        setErrorMsg(username, "username must be min 4 char");
    } else {
        setSuccessMsg(username);
    }

    //validate email
    if (emailVal === "") {
        setErrorMsg(email, "username cannot be blank");
    } else if (!isEmail(emailVal)) {
        setErrorMsg(emailVal, "email must be proper");
    } else {
        setSuccessMsg(email);
    }

    //Validate mobile no.
    if (mobileVal === "") {
        setErrorMsg(mobile, "phone number cannot be blank");
    } else if (mobileVal.length != 10) {
        setErrorMsg(mobile, "mobile must be 10digits");
    } else {
        setSuccessMsg(mobile);
    }

    //validate password
    if (passwordval === "") {
        setErrorMsg(pswd, "password cannot be blank");
    } else if (passwordval.length <= 5) {
        setErrorMsg(pswd, "username must be strong 6 alphachar");
    } else {
        setSuccessMsg(passwordval);
    }

    //validate Confirm password
    if (confirmval === "") {
        setErrorMsg(cpswd, "password cannot be blank");
    } else if (passwordval != confirmval) {
        setErrorMsg(pswd, "password not matched");
    } else {
        setSuccessMsg(confirmval);
    }

    //set error msg funcion

    function setErrorMsg(input , errormsgs){
        const formcontrol = document.getElementById("form-control");
        const errormsgs = formcontrol.querySelector("div");
        formcontrol.className = "form-control error"
        errormsgs.innerText = errormsgs;

    }


}