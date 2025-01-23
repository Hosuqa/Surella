import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"wewnętrzne" | "zewnętrzne" | "moskitiery">("wewnętrzne");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-44">
      <div className="bg-white p-6 shadow-lg w-full h-full">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Kalkulator</h2>
          <FaXmark className="cursor-pointer w-10 h-10" onClick={onClose} />
        </div>
        <div className="flex justify-center gap-10 mt-4">
          <button
            className={`pb-2 ${activeTab === "wewnętrzne" ? "text-surella-500 border-b-2 border-surella-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("wewnętrzne")}
          >
            OSŁONY WEWNĘTRZNE
          </button>
          <button
            className={`pb-2 ${activeTab === "zewnętrzne" ? "text-surella-500 border-b-2 border-surella-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("zewnętrzne")}
          >
            OSŁONY ZEWNĘTRZNE
          </button>
          <button
            className={`pb-2 ${activeTab === "moskitiery" ? "text-surella-500 border-b-2 border-surella-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("moskitiery")}
          >
            Moskitiery
            </button>
        </div>
        <div className="flex justify-center items-center gap-4">
            <div className="mt-6 ">
            {activeTab === "wewnętrzne" ? (
                <div className="w-44 h-44 bg-surella-800">wewnętrzne</div>
            ) : activeTab === "zewnętrzne" ? (
                <div className="w-44 h-44 bg-surella-700">zewnętrzne</div>
            ) : (
                <div className="w-44 h-44 bg-surella-600">moskitiery</div>
            )}
            </div>

            <div className="mt-6 text-center">
            <p className="text-gray-500">TWOJA SZACOWANA WYCENA TO:</p>
            <p className="text-surella-500 text-2xl font-bold">15</p>
            <button className="bg-surella-500 text-white px-6 py-2 mt-4">KONTAKT</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
