import React, { useState } from "react"
import emailjs from "emailjs-com"

function Contact() {

    function EnableModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "block"; 
        modal.focus();
    }

    function CloseModal() {
        document.getElementById("myModal").style.display = "none";
    }

    function ResetInputFields() {
        setContact({
            user_email: "",
            message: ""
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
         // generate a five digit number for the contact_number variable
        //  event.target.contact_number.value = Math.random() * 100000 | 0;
         // these IDs from the previous steps
         emailjs.sendForm("default_service", "template_199av6s", event.target, process.env.GATSBY_EMAIL_USER_ID)
           .then(function() {
             console.log('SUCCESS!');
             EnableModal();
             ResetInputFields();
             }, function(error) {
               console.log('FAILED...', error);
       });
    }

    const [contact, setContact] = useState({
        user_email: "",
        message: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }
    
    

    return (
        <section id="contact-section" className="no-focus" onClick={CloseModal} tabIndex="0">
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={CloseModal}>&times;</span>
                    <p>Message was sent successfully!</p>
                </div>
            </div>
            <h1 className="title">Interested in having me work for your company? Please send me a message below!</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <input type="hidden" name="contact_number" />
                <label for="user_email">Email</label>
                <input type="email" name="user_email" placeholder="Enter your Email" onChange={handleChange} value={contact.user_email}/>
                <label className="message-title" for="message">Message</label>
                <textarea name="message" placeholder="Enter your message here!" onChange={handleChange} value={contact.message}></textarea>
                <input type="submit" value="Send Message"/>
            </form>
        </section>
    )
}

export default Contact;