import React, { useState } from "react";
import "../styles/global.css";

function Contact() {
  const scriptURL = "https://script.google.com/macros/s/AKfycbyRkjvooVYruVaBNRKMJGpIUsmE1SK0EGbGTBPhmLhMBO3MUFs__l3h7MNakBSZPtKI/exec";

  const [formData, setFormData] = useState({
    NAME: "",
    EMAIL: "",
    CONTACT_NUMBER: "",
    SUBJECT: "",
    MESSAGE: "",
  });

  const [message, setMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.NAME || !formData.EMAIL || !formData.CONTACT_NUMBER) {
      setMessage("❌ Please fill in all required fields.");
      setPopupVisible(true);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formDataObj,
        mode: "cors",
      });

      const text = await response.text(); // Read raw text response

      try {
        const result = JSON.parse(text); // Try parsing as JSON
        if (result.result === "success") {
          setMessage("✅ Thank you! Your form has been submitted successfully.");
        } else {
          setMessage(`❌ Error: ${result.error}`);
        }
      } catch (jsonError) {
        setMessage("❌ Server response was not valid JSON.");
      }
    } catch (error) {
      setMessage("❌ Network error. Please try again later.");
    }

    setPopupVisible(true);
    setIsSubmitting(false);
    setFormData({ NAME: "", EMAIL: "", CONTACT_NUMBER: "", SUBJECT: "", MESSAGE: "" });
  };

  return (
    <section className="contact-content" id="contact">
      <div className="container">
        <div className="contact-title">
          <h4>Contact Me</h4>
          <p>Get In Touch</p>
        </div>

        <div className="contact">
          <form name="contact-form" id="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="NAME" placeholder="Name" value={formData.NAME} onChange={handleChange} required />
            <input type="email" name="EMAIL" placeholder="Email" value={formData.EMAIL} onChange={handleChange} required />
            <input type="number" name="CONTACT_NUMBER" placeholder="Contact Number" value={formData.CONTACT_NUMBER} onChange={handleChange} required />
            <input type="text" name="SUBJECT" placeholder="Subject (Optional)" value={formData.SUBJECT} onChange={handleChange} />
            <textarea name="MESSAGE" placeholder="Message (Optional)" value={formData.MESSAGE} onChange={handleChange}></textarea>

            <input type="submit" value={isSubmitting ? "Submitting..." : "Submit"} className="submit" disabled={isSubmitting} />
          </form>
        </div>
      </div>

      {/* Popup Message */}
      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <p>{message}</p>
            <button onClick={() => setPopupVisible(false)}>OK</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
