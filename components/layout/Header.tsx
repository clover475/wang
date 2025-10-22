"use client";
import { useState } from "react";
import Image from "next/image";
import ContactModal from "../common/ContactModal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className=" fixed top-0 left-0 right-0 bg-gradient-to-r from-[#0f2262] to-[#1033b8] z-50">
      <div className="max-w-[1440px] w-full mx-auto h-20 flex items-center justify-between px-12">
        <div className="flex items-center">
          <Image src="/logo.png" alt="AlcanTARA" width={120} height={40} className="h-8 w-auto" />
          <span className="text-white text-xl font-medium pl-4">AlcanTARA</span>
        </div>
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-30 h-10 px-4 py-2 text-center text-white border border-white rounded-full hover:bg-white hover:text-[#0A1A3B] transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}
