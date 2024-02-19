const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const contactForm = document.getElementById("contactForm");
function validate(){
    let mail = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if(mail.match(regx)){
        console.log("fhdjaklgf");
        if(message === ""){
            alert("Please don't send me empty messages");
        }
    }
    else{
        alert("Incorrect email");
    }
    contactForm.reset();
}