import React from "react"

function Contact() {

    const handleSubmit = event => {
        event.preventDefault();
      }

    return (
        <section id="contact-section">
            <h1 className="title">Interested in having me work for your company? Please send me a message below!</h1>
            <form id="contact-form">
                <input type="hidden" name="contact_number" />
                <label>Email</label>
                    <input type="email" name="user_email" />
                <label>Message</label>
                    <textarea name="message"></textarea>
                <input type="submit" value="Send" />
            </form>
        </section>
    )
}

export default Contact;