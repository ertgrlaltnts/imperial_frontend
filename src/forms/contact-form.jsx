import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [disableButton, setDisableButton] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setDisableButton(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "360f945e-ee68-404d-969c-0e735605b4ef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Mesajınız gönderildi",
        text: "Sizlere en kısa sürede geri dönüş sağlayacağız.",
        icon: "success",
        confirmButtonColor: "#022746",
        confirmButtonText: "Tamam",
      });
    }
    setDisableButton(false);
  };

  return (
    <>
      <form id="contact-form" onSubmit={onSubmit}>
        <div className="row tp-gx-10">
          <div className="col-md-6">
            <input
              type="hidden"
              name="subject"
              value="Websitenizden yeni bir mesaj geldi"
            />

            <div className="tp-contact-input">
              <input
                name="name"
                type="text"
                placeholder="Adınız & Soyadınız*"
                id="name"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="email"
                type="email"
                placeholder="Email Adresiniz*"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="phone"
                id="phone"
                type="text"
                placeholder="Telefon Numaranız*"
                required
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="tp-contact-input">
              <textarea
                name="message"
                placeholder="Mesajınızı Yazınız..."
                id="message"
              ></textarea>
            </div>
          </div>
          <div className="tp-contact-btn mt-10">
            <button type="submit" className="tp-btn">
              Mesajı Gönder
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
