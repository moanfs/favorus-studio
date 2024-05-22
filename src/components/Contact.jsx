import { useState } from "react"

export default function Contact(){
    const [isActive, setIsActive] = useState(false);
    const toggleContacts = () => {
        setIsActive(!isActive);
      };

    return(
        <div className="whatsapp-container">
            {isActive && (
            <div className="whatsapp-contacts-container">
                <div className="whatsapp-header">
                    <h3>Hallo</h3>
                    <p>Click on one of our Admin below to chat on WhatsApp</p>
                </div>
                <div className="whatsapp-contact-list">
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-contact">
                        <i className="bi bi-whatsapp whatsapp-contact-icon"></i>
                        <span>Admin 1</span>
                    </a>
                    <a href="https://wa.me/0987654321" target="_blank" rel="noopener noreferrer" className="whatsapp-contact">
                        <i className="bi bi-whatsapp whatsapp-contact-icon"></i>
                        <span>Admin 2</span>
                    </a>
                </div>
            </div>
            )}
            <button className="whatsapp-button" onClick={toggleContacts}>
            {isActive ? '✕' :  <i className="bi bi-whatsapp whatsapp-icon"></i>}
            </button>
      </div>
    )
}