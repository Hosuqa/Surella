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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-56">
      <div className="bg-white p-6 shadow-lg w-full">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl font-bold">Kalkulator</h2>
          <FaXmark className="cursor-pointer w-8 h-8" onClick={onClose} />
        </div>
        {/* Navigacja */}
        <div className="flex gap-10 justify-center mt-4 ">
          {Object.keys(categoriesData).map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-lg font-semibold border-b-2 ${
                activeTab === tab ? "text-surella-500 border-b-2 border-surella-500" : "text-gray-500 border-transparent"
              }`}
              onClick={() => setActiveTab(tab as keyof Categories)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-8">
          {/* pierwsza kolumna */}
          <div className="bg-slate-100 p-4 max-h-[360px] overflow-y-auto">
            <h3 className="text-surella-800 mb-2 text-xl font-bold">Podaj rodzaj:</h3>
            <div className="relative">
              <div 
                className="custom-select w-full rounded-none px-4 py-3 bg-surella-600 text-white cursor-pointer flex justify-between items-center" 
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Wybierz rodzaj</span>
                <IoIosArrowDown className="text-white right-4 pointer-events-none" />
              </div>
              {dropdownOpen && (
                <div className="absolute w-full bg-white shadow-md ">
                  <div className="p-4 hover:bg-slate-200 cursor-pointer">AA</div>
                  <div className="p-4 hover:bg-slate-200 cursor-pointer">CC</div>
                  <div className="p-4 hover:bg-slate-200 cursor-pointer">EE</div>
                </div>
              )}
            </div>
            
            <div className="mt-4 text-surella-800">
              <p className=" mb-1">Wysokość</p>
              <div className="flex items-center gap-2">
                <div className="bg-white h-10 w-10 flex items-center justify-center">
                  <HiOutlineMinusSm className=" cursor-pointer h-6 w-6" />
                </div>
                <input type="number" className=" text-black p-2 flex-grow" />
                <div className="bg-white h-10 w-10 flex items-center justify-center">
                  <IoMdAdd className=" cursor-pointer h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="mt-4 text-surella-800">
              <p className=" mb-1">Szerokość</p>
              <div className="flex items-center gap-2">
                <div className="bg-white h-10 w-10 flex items-center justify-center">
                  <HiOutlineMinusSm className=" cursor-pointer h-6 w-6" />
                </div>
                <input type="number" className=" text-black p-2 flex-grow" />
                <div className="bg-white h-10 w-10 flex items-center justify-center">
                  <IoMdAdd className=" cursor-pointer h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="mt-4 text-surella-800">
              <p className=" mb-1">Wysokość</p>
              <div className="flex items-center gap-2">
                <div className="bg-white h-10 w-10 flex items-center justify-center">
                  <HiOutlineMinusSm className=" cursor-pointer h-6 w-6" />
                </div>
                <input type="number" className=" text-black p-2 flex-grow" />
                <div className="bg-white h-10 w-10 flex items-center justify-center">
                  <IoMdAdd className=" cursor-pointer h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="mt-4 text-surella-800">
              <p className=" mb-1">Szerokość</p>
              <div className="flex items-center gap-2">
                <div className="bg-white h-10 w-10 flex items-center justify-center">
                  <HiOutlineMinusSm className=" cursor-pointer h-6 w-6" />
                </div>
                <input type="number" className=" text-black p-2 flex-grow" />
                <div className="bg-white h-10 w-10 flex items-center justify-center">
                  <IoMdAdd className=" cursor-pointer h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
          {/* druga kolumna */}
          <div className="text-center bg-slate-100">
            <div className="flex justify-center ">
              <button className="bg-surella-600 text-white px-20 py-2 ">Dodaj do wyceny</button>
            </div>

          </div>
          {/* trzecia kolumna */}
          <div className="bg-slate-100 p-4 flex flex-col justify-between">
            <div className="gap-2 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-surella-800">Twój koszyk:</h2>
                <div className="flex items-center justify-center cursor-pointer">
                  <p className="text-xs text-center text-surella-800">Usuń wsyztko</p>
                </div>
              </div>
                <div className="flex justify-between items-center bg-slate-200 px-4 py-3">
                  <div>
                    <p className="text-gray-800 text-lg font-semibold">Roeltka</p>
                    <p className="text-sm">20 milaridów cm </p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-gray-800 flex font-semibold">213,00 PLN</p>
                      <div className="flex">
                        <div className=" h-8 w-8 flex items-center justify-center">
                          <HiOutlineMinusSm className=" cursor-pointer h-6 w-6" />
                        </div>
                        <div className="h-8 w-8 flex items-center justify-center">2</div>
                        <div className="h-8 w-8 flex items-center justify-center">
                          <IoMdAdd className=" cursor-pointer h-6 w-6" />
                        </div>
                      </div>
                      </div>
                      <div className="w-[2px] mx-3 h-10 bg-black"></div>
                      <div className="h-8 w-8 flex items-center justify-center">
                          <IoMdAdd className=" cursor-pointer h-6 w-6 bg-blue-900" />
                      </div>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-slate-200 px-4 py-3">
                  <div>
                    <p className="text-gray-800 text-lg font-semibold">MoskitEoira</p>
                    <p className="text-sm">203 cm zielona</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-gray-800 flex font-semibold">2133,00 PLN</p>
                      <div className="flex">
                        <div className=" h-8 w-8 flex items-center justify-center">
                          <HiOutlineMinusSm className=" cursor-pointer h-6 w-6" />
                        </div>
                        <div className="h-8 w-8 flex items-center justify-center">42</div>
                        <div className="h-8 w-8 flex items-center justify-center">
                          <IoMdAdd className=" cursor-pointer h-6 w-6" />
                        </div>
                      </div>
                      </div>
                      <div className="w-[2px] mx-3 h-10 bg-black"></div>
                      <div className="h-8 w-8 flex items-center justify-center">
                          <IoMdAdd className=" cursor-pointer h-6 w-6 bg-blue-900" />
                      </div>
                  </div>
                </div>
              {/* <button
                className="px-4 py-2 bg-slate-300 hover:bg-gray-300 text-gray-800"
              >
                Wyczyść koszyk
              </button> */}
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-surella-800">Twoja szacowana Cena to:</h3>
              <p className="text-3xl font-bold text-surella-800">222 zł</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-4 mt-4 flex justify-between items-center">
          <p>NIe mozesz znalesc wez sie tutaj skontaktuj cyk masz przycisk tutaj patrz tam w prawo</p>
          <div className="flex justify-center ">
            <button className="bg-surella-700 text-white px-32 py-2 ">Kontakt</button>
          </div>
        </div>
        <div>
          <p className="text-slate-500 text-sm mt-4">* pamaietaj ze to pogladowo jest mordeczko wiec bez spiny prosze bo jest duzo roznych okien dzieki</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
