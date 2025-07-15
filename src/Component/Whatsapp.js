// src/Component/Whatsapp.js
import React from 'react';
import './Whatsapp.css'; // Pastikan kamu pisah CSS atau import manual kalau di layout.css

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/6285782982390"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp.png"
        alt="Chat via WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default Whatsapp;
