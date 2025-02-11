import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import categoriesDataRaw from "../../products.json";
import { FaTrash } from "react-icons/fa6";
import "./Modal.css";
interface ProductCategory {
  [category: string]: {
    [product: string]: any;
  };
}

const categoriesData: ProductCategory = categoriesDataRaw as ProductCategory;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>("wewnętrzne");
 

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-10">
      <div className="bg-white p-6 shadow-lg w-fit  ">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl font-bold">Kalkulator</h2>
          <FaXmark className="cursor-pointer w-8 h-8" onClick={onClose} />
        </div>

        {/* Zakładki */}
        <div className="flex gap-10 justify-center mt-4">
          {Object.keys(categoriesData).map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-lg font-semibold border-b-[3px] ${
                activeTab === tab ? "text-surella-500 border-surella-500" : "text-gray-500 border-transparent"
              }`}
              onClick={() => {
                setActiveTab(tab);
              }}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-8 w-[1100px]">
          {/* Lewa kolumna – wybór produktu oraz (opcje kalkulatora lub komunikat) */}
          <div className="bg-slate-100 p-4 min-h-[436px] overflow-y-auto flex flex-col">
            <h3 className="text-surella-800 mb-2 text-xl font-bold">Wybierz produkt:</h3>
            <select
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Wybierz produkt</option>
              {Object.keys(categoriesData[activeTab]).map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>

            {activeTab === "zewnętrzne" &&  (
              // Dla tab "zewnętrzne" wyświetlamy jedynie komunikat z pliku JSON
              <div className="mt-4 p-4 bg-gray-200 border border-gray-300 rounded">
                <p>PRODUKT</p>
              </div>
            )}

            {activeTab === "moskitiery" && (
              // Dla tab "zewnętrzne" wyświetlamy jedynie komunikat z pliku JSON
              <div className="mt-4 p-4 bg-gray-200 border border-gray-300 rounded">
                <p>productData</p>
              </div>
            )}

            {activeTab === "wewnętrzne"  &&(
              <>
                <div className="mt-4">
                  <h4 className="text-lg font-bold">Wysokość:</h4>
                  <select
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Wybierz wysokość</option>
                      <option>
                        100
                      </option>
                  </select>
                </div>
                  <>
                    <div className="mt-4">
                      <h4 className="text-lg font-bold">Szerokość:</h4>
                      <select
                        className="w-full p-2 border border-gray-300 rounded">
                        <option value="">Wybierz szerokość</option>
                          <option >
                            200                           
                          </option>
                      </select>
                    </div>
                      <div className="mt-4">
                        <h4 className="text-lg font-bold">Kolor:</h4>
                        <select
                          className="w-full p-2 border border-gray-300 rounded">
                          <option value="">Wybierz kolor</option>
                            <option >
                              color
                            </option>
                        </select>
                      </div>
                  </>
              </>
            )}

            {/* Przycisk dodania do wyceny – tylko dla tab "wewnętrzne" */}
            {activeTab === "wewnętrzne" && (
              <div className="mt-auto">
                <button
                  className="bg-surella-600 text-white px-4 py-2 w-full disabled:bg-slate-300">
                  Dodaj do wyceny
                </button>
              </div>
            )}
          </div>

          {/* Prawa kolumna – koszyk */}
          <div className="bg-slate-100 p-4">
            <h2 className="text-xl font-bold text-surella-800">Twój koszyk:</h2>
            <div className="bg-slate-200 px-4 py-3 mt-2 flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-gray-800 text-xl font-bold">
                  PRODUKTY
                </p>
                <p>
                200MM 20KM CZARNY
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center ">
                  <p className="text-gray-900 text-lg font-bold">342 PLN</p>
                  <div className="flex items-center border -lg px-2 py-1">
                    <button className="text-gray-700 px-2" >−</button>
                    <span className="mx-2 font-semibold">22</span>
                    <button className="text-gray-700 px-2" >+</button>
                  </div>
                </div>
                <div className="h-12 w-[3px] bg-black"></div>
                <FaTrash className="m-4 h-5 w-5"/>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
