import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ userName: "", userAge: "", userEmail: "", userPassword: "" });
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1>CONTACT SECTION</h1>
          <div className="hero-divider"><span>★</span></div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="userAge"
            placeholder="userAge"
            value={formData.userAge}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="userEmail"
            placeholder="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="userPassword"
            placeholder="userPassword"
            value={formData.userPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="contact-btn">send Message</button>
        </form>
      </div>
    </section>
  );
}
