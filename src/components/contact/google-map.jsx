import React from "react";

const GoogleMap = ({ data }) => {
  return (
    <>
      <div className="tp-contact-map-area">
        <div className="tp-contact-map">
          <iframe
            src={data}
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width="600"
            height="450"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;
