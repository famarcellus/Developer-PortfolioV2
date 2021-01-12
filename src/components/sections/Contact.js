import React from "react"
import emailjs from "emailjs-com"

function Contact() {

    const handleSubmit = event => {
        event.preventDefault();
         // generate a five digit number for the contact_number variable
         this.contact_number.value = Math.random() * 100000 | 0;
         // these IDs from the previous steps
         emailjs.sendForm("default_service", 'template_xhx5our', event.target)
           .then(function() {
             console.log('SUCCESS!');
             }, function(error) {
               console.log('FAILED...', error);
       });
    }
    

    return (
        <section id="contact-section">
            <h1 className="title">Interested in having me work for your company? Please send me a message below!</h1>
            <form id="contact-form">
                <input type="hidden" name="contact_number" />
                <label>Email</label>
                    <input type="email" name="user_email" placeholder="Enter your Email" autoComplete="off"/>
                <label className="message-title">Message</label>
                    <textarea name="message" placeholder="Enter your message here!"></textarea>
                <input type="submit" value="Send Message" onSubmit={handleSubmit} />
            </form>
        </section>
    )
}

export default Contact;