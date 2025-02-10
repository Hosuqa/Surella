import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import categoriesDataRaw from "../../products.json";
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
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-10">
      <div className="bg-white p-6 shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl font-bold">Kalkulator</h2>
          <FaXmark className="cursor-pointer w-8 h-8" onClick={onClose} />
        </div>

        {/* Zakładki */}
        <div className="flex gap-10 justify-center mt-4">
          {Object.keys(categoriesData).map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-lg font-semibold border-b-2 ${
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

        <div className="mt-6 grid grid-cols-2 gap-8 ">
          {/* Lewa kolumna – wybór produktu oraz (opcje kalkulatora lub komunikat) */}
          <div className="bg-slate-100 p-4 h-[420px] max-h-[420px] overflow-y-auto flex flex-col">
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
                  <p className="text-gray-800 text-lg font-semibold">
                    PRODUKTY 200MM 20KM CZARNY
                  </p>
                  <p className="text-gray-900 font-bold">MILION zł</p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
