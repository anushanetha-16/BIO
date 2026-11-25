// Wait until full page loads
window.addEventListener("DOMContentLoaded", function(){

    // Smooth scroll
    function scrollToSection(id){
        document.getElementById(id).scrollIntoView({
            behavior:"smooth"
        });
    }
    window.scrollToSection = scrollToSection;

    // Typing effect
    const text = "Anusha Gujjari";
    let i = 0;

    function type(){
        if(i < text.length){
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    }
    

    
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Replace with your WhatsApp number (91 + 10-digit mobile number)
            const phoneNumber = "917995749462";

            const text = `Hello Anusha! New Portfolio Message:\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

            window.open(whatsappURL, "_blank");
            form.reset();
        });
    }

});