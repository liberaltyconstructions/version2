
import React, { useRef } from "react";
import "./Contact.css"
import { contacts } from "../../data"
import emailjs from '@emailjs/browser';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gwlm7lt', 'template_dfz6wq9', form.current, 'CNgvf4sblRYlYG23N')
            .then((result) => {
                console.log(result.text);
                // Handle success (e.g., show a success message)
            }, (error) => {
                console.log(error.text);
                // Handle error (e.g., show an error message)
            });
        
        // Clear the form
        e.target.reset();
    };

    // Function to generate appropriate links based on contact type
    const getContactLink = (contact) => {
        switch (contact.name) {
            case "Email":
                return `mailto:${contact.value}`;
            case "Phone Number":
                // Extract the first phone number for the link
                const phoneNumber = contact.value.split('||')[0].trim().replace(/\s+/g, '');
                return `tel:${phoneNumber}`;
            case "Address":
                // Create Google Maps link
                const encodedAddress = encodeURIComponent(contact.value);
                return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
            default:
                return "#";
        }
    };

    // Function to get appropriate button text
    const getButtonText = (contact) => {
        switch (contact.name) {
            case "Email":
                return "Send Email";
            case "Phone Number":
                return "Call Now";
            case "Address":
                return "View on Map";
            default:
                return "Contact Us";
        }
    };

    return(
        <section id="contact">
            <h1 className="titleContact"> Contact <span className="g-text"> Us</span></h1>
            <h3 className="sub__title">Send us your queries</h3>

            <div className="container">
                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form__top">
                        <h1 className="title">
                            <span className="g-text">
                                Join forces with us !
                            </span>
                        </h1>
                        <p className="text__muted">
                        We build with precision and passion, creating structures that stand the test of time. It's as straightforward as that!
                        </p>
                    </div>
                    <div className="contact__form__middle">
                        <div className="row">
                            <input type="text" placeholder="First name" name="firstname" className="control" />
                            <input type="text" placeholder="Last name" name="lastname" className="control" />
                        </div>
                        <div className="row">
                            <input type="email" placeholder="Email" name="email" className="control" />
                            <input type="tel" placeholder="Phone number" name="phone" className="control" />
                        </div>
                        <textarea name="message" cols={30} rows={10} placeholder="Message" className="control" id=""></textarea>
                    </div>
                    <div className="contact__form__bottom">
                        <button type="submit" className="btn btn__primary">Send Now</button>
                    </div>
                </form>
                <div className="contact__options">
                    {
                        contacts.map((contact,index) =>(
                            <div className="option" key={index}>
                                <div className="icon__container">
                                    {contact.icon}
                                </div>
                                <h3 className="name"> {contact.name} </h3>
                                <h4 className="text__muted">{contact.value}</h4>
                                <div>
                                    <a 
                                        href={getContactLink(contact)} 
                                        className="btn btn__primary"
                                        target={contact.name === "Address" ? "_blank" : "_self"}
                                        rel={contact.name === "Address" ? "noopener noreferrer" : ""}
                                    >
                                        {getButtonText(contact)}
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Contact;