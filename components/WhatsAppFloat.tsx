"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phoneNumber = "923093305243"; // WhatsApp format without + or spaces
  const message = "Hello Suhail! I found your portfolio and would like to connect.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle
        size={28}
        className="group-hover:rotate-12 transition-transform duration-300"
      />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
        1
      </span>
    </a>
  );
}
