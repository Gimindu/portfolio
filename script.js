/* ===============================navbar================================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};


/* =============================== for the form ================================== */

let submit = document.getElementById("submit");
submit.addEventListener('click',()=>{

    alert("message send");
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body=`name: ${name} \n email: ${email}\n phone number: ${number}\n message: ${message} `;

    const link = document.createElement('a');
    link.href = `mailto:gimindu.20220282@iit.ac.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.body.append(link);
    link.click();
    document.body.remove(link);
    window.location.href = "contact.html"
})

/* =============================== scroll reaveal ================================== */

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });