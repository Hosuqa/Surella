import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineMinusSm } from "react-icons/hi";
import categoriesData from "../../products.json";
import { IoIosArrowDown } from "react-icons/io";
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Categories {
  zewnętrzne: string[];
  wewnętrzne: string[];
  moskitiery: string[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<keyof Categories>("zewnętrzne");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const activeContent = categoriesData[activeTab as keyof Categories];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-56">
      <div className="bg-white p-6 shadow-lg w-full">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl font-bold">Kalkulator</h2>
          <FaXmark className="cursor-pointer w-8 h-8" onClick={onClose} />
        </div>

        <div className="flex gap-10 justify-center mt-4">
          {Object.keys(categoriesData).map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-lg font-semibold ${
                activeTab === tab ? "text-surella-500 border-b-2 border-surella-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab as keyof Categories)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-8">
          <div className="bg-slate-100 p-4 ">
            <h3 className="text-surella-800 text-lg mb-2">Podaj rodzaj:</h3>
            <div className="relative">
              <div 
                className="custom-select w-full rounded-none p-4 bg-surella-700 text-white cursor-pointer flex justify-between items-center" 
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Wybierz rodzaj</span>
                <IoIosArrowDown className="text-white right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
              {dropdownOpen && (
                <div className="absolute w-full bg-white shadow-md mt-1">
                  {activeContent.map((item, index) => (
                    <div key={index} className="p-4 hover:bg-surella-500 cursor-pointer" onClick={() => setDropdownOpen(false)}>{item}</div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="mt-4 text-surella-800">
              <p className=" mb-1">Wysokość</p>
              <div className="flex items-center gap-2">
                <HiOutlineMinusSm className=" cursor-pointer h-6 w-6" />
                <input type="text" className=" text-black w-full p-2 " />
                <IoMdAdd className=" cursor-pointer h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 text-surella-800">
              <p className=" mb-1">Szerokość</p>
              <div className="flex items-center gap-2">
                <HiOutlineMinusSm className=" cursor-pointer h-6 w-6" />
                <input type="text" className=" text-black w-full p-2 " />
                <IoMdAdd className=" cursor-pointer h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 text-surella-800">
              <p className=" mb-1">Kolor</p>
              <div className="flex items-center gap-2">
                <HiOutlineMinusSm className=" cursor-pointer h-6 w-6" />
                <input type="text" className=" text-black w-full p-2 " />
                <IoMdAdd className=" cursor-pointer h-6 w-6" />
              </div>
            </div>
          </div>
          
          <div className="text-center bg-slate-100">
            <p className="text-gray-500">Twoja szacowana wycena to:</p>
            <p className="text-surella-500 text-3xl font-bold">235,00 zł</p>
            <button className="bg-surella-500 text-white px-6 py-2 mt-4 ">Kontakt</button>
          </div>
          <div className="bg-slate-100">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
