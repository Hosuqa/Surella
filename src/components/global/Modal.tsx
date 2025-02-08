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
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedHeight, setSelectedHeight] = useState<string | null>(null);
  const [selectedWidth, setSelectedWidth] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [cart, setCart] = useState<any[]>([]);

  const handleSelectProduct = (product: string) => {
    setSelectedProduct(product);
    setSelectedHeight(null);
    setSelectedWidth(null);
    setSelectedColor(null);
    setSelectedPrice(null);
  };

  const handleAddToCart = () => {
    // Dodajemy do koszyka tylko gdy kalkulator obsługuje wycenę (tab "wewnętrzne")
    if (
      activeTab === "wewnętrzne" &&
      selectedProduct &&
      selectedHeight &&
      selectedWidth &&
      selectedColor &&
      selectedPrice !== null
    ) {
      setCart([
        ...cart,
        { product: selectedProduct, height: selectedHeight, width: selectedWidth, color: selectedColor, price: selectedPrice },
      ]);
    }
  };

  const productData = selectedProduct ? categoriesData[activeTab]?.[selectedProduct] : undefined;

  // Logika dot. kalkulatora – tylko dla tab "wewnętrzne"
  const heightOptions = activeTab === "wewnętrzne" && productData ? Object.keys(productData["height"] || {}) : [];
  const widthGroups =
    activeTab === "wewnętrzne" && selectedHeight ? productData?.["height"]?.[selectedHeight]?.["width"] || [] : [];
  const widthOptions: number[] =
      activeTab === "wewnętrzne" ? Array.from(new Set(widthGroups.flatMap((group: any) => group.sizes.map((s: number[]) => s[0])))) : [];
  const matchingWidthGroups =
    activeTab === "wewnętrzne" && widthGroups && selectedWidth
      ? widthGroups.filter((group: any) => group.sizes.some((s: number[]) => s[0] === selectedWidth))
      : [];
  const colorOptions =
    activeTab === "wewnętrzne" && matchingWidthGroups
      ? Array.from(new Set(matchingWidthGroups.flatMap((group: any) => group.colors || [])))
      : [];

  const handleSelectWidth = (width: number) => {
    setSelectedWidth(width);
    setSelectedColor(null);
    setSelectedPrice(null);
  };

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);

    if (activeTab === "wewnętrzne" && selectedHeight) {
      const widthGroups = productData?.["height"]?.[selectedHeight]?.["width"] || [];
      const matchingGroup = widthGroups.find((group: any) => group.colors.includes(color));
      if (matchingGroup) {
        const priceEntry = matchingGroup.sizes.find((s: number[]) => s[0] === selectedWidth);
        setSelectedPrice(priceEntry ? priceEntry[1] : null);
      } else {
        setSelectedPrice(null);
      }
    }
  };

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
                setSelectedProduct(null);
                setSelectedHeight(null);
                setSelectedWidth(null);
                setSelectedColor(null);
                setSelectedPrice(null);
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
              onChange={(e) => handleSelectProduct(e.target.value)}
              value={selectedProduct || ""}
            >
              <option value="">Wybierz produkt</option>
              {Object.keys(categoriesData[activeTab]).map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>

            {selectedProduct && activeTab === "zewnętrzne" && productData?.text && (
              // Dla tab "zewnętrzne" wyświetlamy jedynie komunikat z pliku JSON
              <div className="mt-4 p-4 bg-gray-200 border border-gray-300 rounded">
                <p>{productData.text}</p>
              </div>
            )}

            {selectedProduct && activeTab === "wewnętrzne" && (
              <>
                <div className="mt-4">
                  <h4 className="text-lg font-bold">Wysokość:</h4>
                  <select
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={(e) => setSelectedHeight(e.target.value)}
                    value={selectedHeight || ""}
                  >
                    <option value="">Wybierz wysokość</option>
                    {heightOptions.map((height) => (
                      <option key={height} value={height}>
                        {height}
                      </option>
                    ))}
                  </select>
                </div>
                {selectedHeight && (
                  <>
                    <div className="mt-4">
                      <h4 className="text-lg font-bold">Szerokość:</h4>
                      <select
                        className="w-full p-2 border border-gray-300 rounded"
                        onChange={(e) => handleSelectWidth(parseInt(e.target.value))}
                        value={selectedWidth || ""}
                      >
                        <option value="">Wybierz szerokość</option>
                        {widthOptions.map((width: number) => (
                          <option key={width} value={width}>
                            {width}
                          </option>
                        ))}
                      </select>
                    </div>
                    {selectedWidth && (
                      <div className="mt-4">
                        <h4 className="text-lg font-bold">Kolor:</h4>
                        <select
                          className="w-full p-2 border border-gray-300 rounded"
                          onChange={(e) => handleSelectColor(e.target.value)}
                          value={selectedColor || ""}
                        >
                          <option value="">Wybierz kolor</option>
                          {(colorOptions as string[]).map((color: string) => (
                            <option key={color} value={color}>
                              {color}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </>
                )}
              </>
            )}

            {/* Przycisk dodania do wyceny – tylko dla tab "wewnętrzne" */}
            {activeTab === "wewnętrzne" && (
              <div className="mt-auto">
                <button
                  className="bg-surella-600 text-white px-4 py-2 w-full disabled:bg-slate-300"
                  onClick={handleAddToCart}
                  disabled={!selectedHeight || !selectedWidth || !selectedColor}
                  title={
                    !selectedHeight || !selectedWidth || !selectedColor
                      ? "Wybierz wszystkie opcje, aby dodać do wyceny"
                      : ""
                  }
                >
                  Dodaj do wyceny
                </button>
              </div>
            )}
          </div>

          {/* Prawa kolumna – koszyk */}
          <div className="bg-slate-100 p-4">
            <h2 className="text-xl font-bold text-surella-800">Twój koszyk:</h2>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="bg-slate-200 px-4 py-3 mt-2 flex justify-between items-center">
                  <p className="text-gray-800 text-lg font-semibold">
                    {item.product} - {item.height}cm x {item.width}cm, {item.color}
                  </p>
                  <p className="text-gray-900 font-bold">{item.price} zł</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Koszyk jest pusty.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
