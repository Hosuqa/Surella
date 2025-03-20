// import React, { useState } from "react";
// import { FaXmark } from "react-icons/fa6";
// import { FaTrash } from "react-icons/fa6";
// import categoriesDataRaw from "../../products.json";
// import "./Modal.css";

// // Definicje typów - dokładne typowanie na podstawie struktury JSON
// type SizeData = [number, number]; // Ensure sizes are tuples of two numbers

// interface WidthDataColors {
//   colors: string[];
//   sizes: SizeData[];
// }

// interface WidthDataType {
//   type: string;
//   sizes: SizeData[];
// }

// type WidthDataItem = WidthDataColors | WidthDataType;


// interface HeightMap {
//   [height: string]: {
//       width: WidthDataItem[];
//   };
// }


// interface TextProduct { // Nowy interfejs dla produktów z polem "text"
//   text: string;
// }

// interface ProductCategoryMap {
//   [product: string]: HeightMap | TextProduct; // ProductCategoryMap może przechowywać HeightMap LUB TextProduct
// }


// interface CategoryData {
//   wewnętrzne: ProductCategoryMap;
//   zewnętrzne: {
//       [product: string]: TextProduct; // zewnętrzne produkty mają TextProduct
//   };
//   moskitiery: {
//       [product: string]: ProductCategoryMap[string] | TextProduct; // moskitiery mogą mieć oba typy: ProductCategoryMap[string] (czyli HeightMap) LUB TextProduct
//   };
// }

// const categoriesData: CategoryData = categoriesDataRaw as unknown as CategoryData; // Convert to unknown first

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
//   const [activeTab, setActiveTab] = useState<string>("wewnętrzne");
//   const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
//   const [selectedHeight, setSelectedHeight] = useState<string | null>(null);
//   const [selectedWidthData, setSelectedWidthData] = useState<WidthDataItem[] | null>(null); // Typujemy selectedWidthData jako tablicę WidthDataItem lub null
//   const [selectedOptionType, setSelectedOptionType] = useState<string | null>(null);
//   const [selectedWidthValue, setSelectedWidthValue] = useState<string | null>(null);


//   const resetSelections = () => {
//     setSelectedHeight(null);
//     setSelectedWidthData(null);
//     setSelectedWidthValue(null); // Resetuj selectedWidthValue
//     setSelectedOptionType(null);
//   };
  
//   const canAddToQuote = (): boolean => {
//     if (activeTab === "wewnętrzne") {
//         return !!selectedProduct && !!selectedHeight && !!selectedWidthValue && !!selectedOptionType; // Wszystkie opcje muszą być wybrane
//     } else if (activeTab === "moskitiery") {
//         // Logika dla moskitier -  dostosuj warunki w zależności od produktów w "moskitiery"
//         if (selectedProduct === "Moskitiera dachowa rolowana") { // Przykładowa logika dla "Moskitiera dachowa rolowana" - dostosuj!
//             return !!selectedProduct && !!selectedHeight && !!selectedWidthValue && !!selectedOptionType; // Załóżmy, że dla tej moskitiery też wymagane są wszystkie opcje
//         } else {
//             return !!selectedProduct; // Dla innych moskitier (z tekstem) wystarczy wybrany produkt
//         }
//     }
//     return false; // Dla pozostałych zakładek (zewnętrzne) - zawsze false
// };

// const [cartItems, setCartItems] = useState<any[]>([]); // Stan dla elementów koszyka, początkowo pusta tablica

// const handleAddToCart = () => {
//   if (!canAddToQuote()) {
//     return; // Nic nie rób, jeśli nie można dodać do wyceny (chociaż przycisk powinien być nieaktywny)
//   }

//   if (activeTab === "wewnętrzne" || activeTab === "moskitiery") {
//     const productDetails = {
//       tab: activeTab,
//       product: selectedProduct,
//       height: selectedHeight,
//       width: selectedWidthValue,
//       optionType: selectedOptionType, // Możesz chcieć rozróżnić 'type' i 'color' jeśli to potrzebne
//     };

//     const price = calculatePrice(productDetails); // Funkcja do wyliczania ceny (Krok 3)

//     const cartItem = {
//       ...productDetails,
//       price: price,
//       quantity: 1, // Początkowa ilość to 1
//     };

//     setCartItems([...cartItems, cartItem]); // Dodaj nowy element do koszyka
//     resetSelections(); // Resetuj opcje po dodaniu do koszyka
//   }
// };

// const calculatePrice = (productDetails: any): number => { // Uzupełnij typ argumentu productDetails
//   let price = 0;

//   if (productDetails.tab === "wewnętrzne") {
//     const widthDataArray = categoriesData.wewnętrzne[productDetails.product]?.height[productDetails.height]?.width;
//     if (widthDataArray) {
//       widthDataArray.forEach((widthData: WidthDataItem) => { // Iteruj po widthData w tablicy
//         if ((widthData as WidthDataType).type === productDetails.optionType || (widthData as WidthDataColors).colors?.includes(productDetails.optionType)) { // Sprawdź typ LUB kolor
//           widthData.sizes.forEach((size: SizeData) => {
//             if (size[0] === Number(productDetails.width)) {
//               price = size[1];
//             }
//           });
//         }
//       });
//     }
//   } else if (productDetails.tab === "moskitiery" && productDetails.product === "Moskitiera dachowa rolowana") { // Dostosuj logikę ceny dla moskitier, jeśli inna
//     const widthDataArray = categoriesData.moskitiery[productDetails.product]?.height[productDetails.height]?.width;
//     if (widthDataArray) {
//       widthDataArray.forEach((widthData: WidthDataItem) => {
//         widthData.sizes.forEach((size: SizeData) => {
//           if (size[0] === Number(productDetails.width)) {
//             price = size[1];
//           }
//         });
//       });
//     }
//   }
//   return price;
// };

// const incrementQuantity = (itemIndex: number) => {
//   const updatedCartItems = cartItems.map((item, index) => {
//     if (index === itemIndex) {
//       return { ...item, quantity: item.quantity + 1 }; // Zwiększ ilość o 1
//     }
//     return item;
//   });
//   setCartItems(updatedCartItems); // Zaktualizuj stan koszyka
// };

// const decrementQuantity = (itemIndex: number) => {
//   const updatedCartItems = [...cartItems];
//   const itemToUpdate = updatedCartItems[itemIndex];

//   if (itemToUpdate) {
//     const newQuantity = itemToUpdate.quantity - 1;

//     if (newQuantity < 1) {
//       updatedCartItems.splice(itemIndex, 1);
//     } else {
//       const updatedItem = { ...itemToUpdate, quantity: newQuantity };
//       updatedCartItems[itemIndex] = updatedItem;
//     }

//     setCartItems(updatedCartItems);
//   }
// };

// const clearCart = () => {
//   setCartItems([]); // Ustaw stan koszyka na pustą tablicę, czyszcząc koszyk
// };

// const removeItemFromCart = (itemIndex: number) => {
//   const updatedCartItems = cartItems.filter((_, index) => index !== itemIndex); // Użyj filter, aby odfiltrować element o danym indeksie
//   setCartItems(updatedCartItems); // Zaktualizuj stan koszyka nową tablicą (bez usuniętego elementu)
// };

// const calculateCartTotal = (): number => {
//   return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
// };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-10">
//       <div className="bg-white p-6 shadow-lg w-fit  ">
//         <div className="flex justify-between items-center border-b pb-4">
//           <h2 className="text-2xl font-bold">Kalkulator</h2>
//           <FaXmark className="cursor-pointer w-8 h-8" onClick={onClose} />
//         </div>

//         {/* Zakładki */}
//         <div className="flex gap-10 justify-center mt-4">
//           {Object.keys(categoriesData).map((tab) => (
//             <button
//               key={tab}
//               className={`pb-2 text-lg font-semibold border-b-[3px] ${
//                 activeTab === tab ? "text-surella-500 border-surella-500" : "text-gray-500 border-transparent"
//               }`}
//               onClick={() => {
//                 setActiveTab(tab);
//                 resetSelections(); // Resetuj selekcje przy zmianie zakładki
//                 setSelectedProduct(null); // Dodatkowo resetuj produkt
//               }}
//             >
//               {tab.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         <div className="mt-6 grid grid-cols-2 gap-8 w-[1100px]">
//           {/* Lewa kolumna – wybór produktu oraz (opcje kalkulatora lub komunikat) */}
//           <div className="bg-slate-100 p-4 min-h-[436px] overflow-y-auto flex flex-col">
//             <h3 className="text-surella-800 mb-2 text-xl font-bold">Wybierz produkt:</h3>
//             {/* Wybierz produkt */}
//             <select
//               className="w-full p-2 border border-gray-300 "
//               value={selectedProduct || ""}
//               onChange={(e) => {
//                 setSelectedProduct(e.target.value);
//                 resetSelections();
//               }}
//             >
//               <option value="">Wybierz produkt</option>
//               {Object.keys(categoriesData[activeTab]).map((product) => (
//                 <option key={product} value={product}>
//                   {product}
//                 </option>
//               ))}
//             </select>
//             {activeTab === "zewnętrzne" && selectedProduct && categoriesData.zewnętrzne[selectedProduct]?.text && (
//                 // Dla tab "zewnętrzne" wyświetlamy komunikat z pliku JSON dla wybranego produktu
//                 <div className="mt-4 p-4 bg-gray-200 border border-gray-300 ">
//                     <p>{categoriesData.zewnętrzne[selectedProduct].text}</p>
//                 </div>
//             )}
//             {activeTab === "zewnętrzne" && selectedProduct && !categoriesData.zewnętrzne[selectedProduct]?.text && (
//                 //Fallback if text is missing but product is selected (optional handling)
//                 <div className="mt-4 p-4 bg-gray-200 border border-gray-300 ">
//                     <p>Tekst dla produktu {selectedProduct} niedostępny.</p>
//                 </div>
//             )}
//             {activeTab === "zewnętrzne" && !selectedProduct && (
//                 // Komunikat gdy produkt nie jest wybrany
//                 <div className="mt-4 p-4 bg-gray-200 border border-gray-300 ">
//                     <p>Wybierz produkt z kategorii "zewnętrzne", aby zobaczyć informacje.</p>
//                 </div>
//             )}
//               {activeTab === "moskitiery"  &&(
//                   <>
//                       {/* Sprawdź, czy produkt moskitiery ma 'height' - jeśli tak, to kalkulator, jeśli nie - to komunikat tekstowy */}
//                       {selectedProduct && categoriesData.moskitiery[selectedProduct]?.height ? (
//                           <>
//                               {/* Wysokość - Sekcja kalkulatora dla moskitier z 'height' */}
//                               <div className="mt-4">
//                                   <h4 className="text-lg font-bold">Wysokość:</h4>
//                                   <select
//                                       className="w-full p-2 border border-gray-300 "
//                                       disabled={!selectedProduct}
//                                       value={selectedHeight || ""}
//                                       onChange={(e) => {
//                                           setSelectedHeight(e.target.value);
//                                           setSelectedWidthData(null);
//                                           setSelectedWidthValue(null);
//                                           setSelectedOptionType(null);
//                                       }}
//                                   >
//                                       <option value="">Wybierz wysokość</option>
//                                       {selectedProduct && categoriesData.moskitiery[selectedProduct]?.height && Object.keys(categoriesData.moskitiery[selectedProduct].height).map((height) => (
//                                           <option key={height} value={height}>{height}</option>
//                                       ))}
//                                   </select>
//                               </div>
//                               <>
//                                   {/* Szerokość - Sekcja kalkulatora dla moskitier z 'height' */}
//                                   <div className="mt-4">
//                                       <h4 className="text-lg font-bold">Szerokość:</h4>
//                                       <select
//                                           className="w-full p-2 border border-gray-300 "
//                                           disabled={!selectedHeight}
//                                           value={selectedWidthValue || ""}
//                                           onChange={(e) => {
//                                               const chosenWidth = e.target.value;
//                                               setSelectedWidthValue(chosenWidth);

//                                               const foundWidthDataArray = categoriesData.moskitiery[selectedProduct]?.height[selectedHeight]?.width.filter(
//                                                   (wd: any) => wd.sizes.some((size: any) => size[0].toString() === chosenWidth)
//                                               );
//                                               setSelectedWidthData(foundWidthDataArray || null);
//                                               setSelectedOptionType(null);
//                                           }}
//                                       >
//                                           <option value="">Wybierz szerokość</option>
//                                           {selectedHeight && selectedProduct && (() => {
//                                               const uniqueWidths = new Set<number>();
//                                               categoriesData.moskitiery[selectedProduct]?.height[selectedHeight]?.width.forEach((widthData: any) => {
//                                                   widthData.sizes.forEach(([width, /*price*/] : SizeData) => {
//                                                       uniqueWidths.add(width);
//                                                   });
//                                               });
//                                               return Array.from(uniqueWidths).map((width) => (
//                                                   <option key={width} value={width.toString()}>{width}</option>
//                                               ));
//                                           })()}
//                                       </select>
//                                   </div>
//                                   {/* Dynamiczny selekt Kolor/Typ - Sekcja kalkulatora dla moskitier z 'height' */}
//                                   {selectedWidthData && (() => {
//                                       const uniqueTypes = new Set<string>();
//                                       const hasColors = selectedWidthData.some((wd: WidthDataItem) => (wd as WidthDataColors).colors);

//                                       selectedWidthData.forEach((widthData: WidthDataItem) => {
//                                           if ((widthData as WidthDataType).type) {
//                                               uniqueTypes.add((widthData as WidthDataType).type);
//                                           }
//                                       });

//                                       if (uniqueTypes.size > 0) {
//                                           return (
//                                               <div className="mt-4" key="type-selector">
//                                                   <h4 className="text-lg font-bold">Typ:</h4>
//                                                   <select
//                                                       className="w-full p-2 border border-gray-300 "
//                                                       value={selectedOptionType || ""}
//                                                       onChange={(e) => setSelectedOptionType(e.target.value)}
//                                                       disabled={!selectedWidthData}
//                                                   >
//                                                       <option value="">Wybierz typ</option>
//                                                       {Array.from(uniqueTypes).map((type) => (
//                                                           <option key={type} value={type}>{type}</option>
//                                                       ))}
//                                                   </select>
//                                               </div>
//                                           );
//                                       } else if (hasColors) {
//                                           return (
//                                               <div className="mt-4" key="color-selector">
//                                                   <h4 className="text-lg font-bold">Kolor:</h4>
//                                                   <select
//                                                       className="w-full p-2 border border-gray-300 "
//                                                       value={selectedOptionType || ""}
//                                                       onChange={(e) => setSelectedOptionType(e.target.value)}
//                                                       disabled={!selectedWidthData}
//                                                   >
//                                                       <option value="">Wybierz kolor</option>
//                                                       {selectedWidthData.flatMap((wd: WidthDataItem) => ((wd as WidthDataColors).colors || [])).map((color, index) => (
//                                                           <option key={`${color}-${index}`} value={color}>{color}</option>
//                                                       ))}
//                                                   </select>
//                                               </div>
//                                           );
//                                       } else {
//                                           return null;
//                                       }
//                                   })()}
//                               </>
//                           </>
//                       ) : (
//                           // Dla produktów moskitiery bez 'height' wyświetlamy komunikat tekstowy
//                           selectedProduct && categoriesData.moskitiery[selectedProduct]?.text && (
//                               <div className="mt-4 p-4 bg-gray-200 border border-gray-300 ">
//                                   <p>{categoriesData.moskitiery[selectedProduct].text}</p>
//                               </div>
//                           )
//                       )}
//                       {activeTab === "moskitiery" && !selectedProduct && (
//                           // Komunikat gdy produkt nie jest wybrany w "moskitiery"
//                           <div className="mt-4 p-4 bg-gray-200 border border-gray-300 ">
//                               <p>Wybierz produkt z kategorii "moskitiery", aby zobaczyć informacje.</p>
//                           </div>
//                       )}
//                   </>
//               )}

//             {activeTab === "wewnętrzne"  &&(
//               <>
//                 {/* Wysokość */}
//                 <div className="mt-4">
//                   <h4 className="text-lg font-bold">Wysokość:</h4>
//                   <select
//                     className="w-full p-2 border border-gray-300 "
//                     disabled={!selectedProduct}
//                     value={selectedHeight || ""}
//                     onChange={(e) => {
//                       setSelectedHeight(e.target.value);
//                       setSelectedWidthData(null);
//                       setSelectedWidthValue(null); // Resetuj selectedWidthValue przy zmianie wysokości
//                       setSelectedOptionType(null);
//                     }}
//                   >
//                     <option value="">Wybierz wysokość</option>
//                     {selectedProduct && categoriesData.wewnętrzne[selectedProduct]?.height && Object.keys(categoriesData.wewnętrzne[selectedProduct].height).map((height) => (
//                       <option key={height} value={height}>{height}</option>
//                     ))}
//                   </select>
//                 </div>
//                   <>
//                     {/* Szerokość */}
//                     <div className="mt-4">
//                       <h4 className="text-lg font-bold">Szerokość:</h4>
//                       <select
//                         className="w-full p-2 border border-gray-300 "
//                         disabled={!selectedHeight}
//                         value={selectedWidthValue || ""} // Ustaw value na selectedWidthValue
//                         onChange={(e) => {
//                           const chosenWidth = e.target.value;
//                           setSelectedWidthValue(chosenWidth); // Aktualizuj selectedWidthValue

//                           // Znajdź WSZYSTKIE pasujące widthData na podstawie wybranej szerokości - UŻYJ FILTER
//                           const foundWidthDataArray = categoriesData.wewnętrzne[selectedProduct]?.height[selectedHeight]?.width.filter( // Zmieniamy find na filter
//                             (wd: any) => wd.sizes.some((size: any) => size[0].toString() === chosenWidth) // Dodajemy typowanie dla wd i size
//                           );
//                           setSelectedWidthData(foundWidthDataArray || null);
//                           setSelectedOptionType(null);
//                         }}
//                       >
//                         <option value="">Wybierz szerokość</option>
//                         {selectedHeight && selectedProduct && (() => {
//                           const uniqueWidths = new Set<number>();
//                           categoriesData.wewnętrzne[selectedProduct]?.height[selectedHeight]?.width.forEach((widthData: any) => { // Dodajemy typowanie dla widthData
//                             widthData.sizes.forEach(([width, /*price*/] : SizeData) => { // Dodajemy typowanie dla width i price, usuwamy nieużywane price
//                               uniqueWidths.add(width);
//                             });
//                           });
//                           return Array.from(uniqueWidths).map((width) => (
//                             <option key={width} value={width.toString()}>{width}</option>
//                           ));
//                         })()}
//                       </select>
//                     </div>
//                       {/* Dynamiczny selekt Kolor/Typ - Renderuj jeden selekt TYPU lub KOLORU */}
//                       {selectedWidthData && (() => {
//                         const uniqueTypes = new Set<string>();
//                         const hasColors = selectedWidthData.some((wd: WidthDataItem) => (wd as WidthDataColors).colors);

//                         selectedWidthData.forEach((widthData: WidthDataItem) => {
//                           if ((widthData as WidthDataType).type) {
//                             uniqueTypes.add((widthData as WidthDataType).type);
//                           }
//                         });

//                         if (uniqueTypes.size > 0) {
//                           return (
//                             <div className="mt-4" key="type-selector">
//                               <h4 className="text-lg font-bold">Typ:</h4>
//                               <select
//                                 className="w-full p-2 border border-gray-300 "
//                                 value={selectedOptionType || ""}
//                                 onChange={(e) => setSelectedOptionType(e.target.value)}
//                                 disabled={!selectedWidthData}
//                               >
//                                 <option value="">Wybierz typ</option>
//                                 {Array.from(uniqueTypes).map((type) => (
//                                   <option key={type} value={type}>{type}</option>
//                                 ))}
//                               </select>
//                             </div>
//                           );
//                         } else if (hasColors) {
//                           return (
//                             <div className="mt-4" key="color-selector">
//                               <h4 className="text-lg font-bold">Kolor:</h4>
//                               <select
//                                 className="w-full p-2 border border-gray-300 "
//                                 value={selectedOptionType || ""}
//                                 onChange={(e) => setSelectedOptionType(e.target.value)}
//                                 disabled={!selectedWidthData}
//                               >
//                                 <option value="">Wybierz kolor</option>
//                                 {selectedWidthData.flatMap((wd: WidthDataItem) => ((wd as WidthDataColors).colors || [])).map((color, index) => (
//                                   <option key={`${color}-${index}`} value={color}>{color}</option>
//                                 ))}
//                               </select>
//                             </div>
//                           );
//                         } else {
//                           return null;
//                         }
//                       })()}
//                   </>
//               </>
//             )}

//             {/* Przycisk dodania do wyceny – tylko dla tab "wewnętrzne" */}
//             {(activeTab === "wewnętrzne" || activeTab === "moskitiery") && ( // Wyświetlaj przycisk w "wewnętrzne" i "moskitiery"
//                 <div className="mt-auto">
//                   <button
//                       className={`text-white px-4 py-2 w-full ${canAddToQuote() ? 'bg-surella-600 hover:bg-surella-700' : 'bg-slate-300 cursor-not-allowed'}`}
//                       disabled={!canAddToQuote()}
//                       onClick={handleAddToCart} // DODAJ onClick={handleAddToCart}
//                   >
//                       Dodaj do wyceny
//                   </button>
//                 </div>
//             )}
//           </div>

//             {/* Prawa kolumna – koszyk */}
//             <div className="bg-slate-100 p-4">
//                 <h2 className="text-xl font-bold text-surella-800">Twój koszyk:</h2>
//                 {cartItems.map((item, index) => ( // Mapuj po cartItems
//                     <div className="bg-slate-200 px-4 py-3 mt-2 flex justify-between items-center" key={`cart-item-${index}`}> {/* Dodaj key */}
//                         <div className="flex flex-col">
//                             <p className="text-gray-800 text-xl font-bold">
//                                 {item.product} {/* Nazwa produktu */}
//                             </p>
//                             <p>
//                                 {item.height}MM {item.width}MM {item.optionType} {/* Opcje produktu */}
//                             </p>
//                         </div>
//                         <div className="flex items-center">
//                           <div className="flex flex-col items-center ">
//                             <p className="text-gray-900 text-lg font-bold">{item.price * item.quantity} PLN</p> {/* Wyświetlaj cenę pomnożoną przez ilość */}
//                             <div className="flex items-center border border-gray-300 -lg px-2 py-1"> {/* Dodano border i -lg */}
//                             <button
//                                   className="text-gray-700 px-2 hover:text-surella-500 focus:outline-none"
//                                   onClick={() => decrementQuantity(index)} // WAŻNE: onClick={() => decrementQuantity(index)}
//                               >
//                                   −
//                               </button>
//                                 <span className="mx-2 font-semibold">{item.quantity}</span>
//                                 <button
//                                     className="text-gray-700 px-2 hover:text-surella-500 focus:outline-none" // Dodano style hover i focus
//                                     onClick={() => incrementQuantity(index)} // Podłącz funkcję incrementQuantity
//                                 >
//                                     +
//                                 </button>
//                             </div>
//                         </div>                        
//                       </div>
//                         <div className="h-12 w-[3px] bg-black"></div>
//                           <FaTrash
//                               className="m-4 h-5 w-5 cursor-pointer hover:text-red-500" // Dodano cursor-pointer i hover:text-red-500 dla interakcji
//                               onClick={() => removeItemFromCart(index)} // PODŁĄCZ onClick={() => removeItemFromCart(index)}
//                           />                      
//                         </div>
//                 ))}
//                 {cartItems.length === 0 && (
//                     <div className="mt-2 p-4 bg-slate-200  text-center">
//                         Koszyk jest pusty.
//                     </div>
//                 )}
//                 {/* Przycisk "Wyczyść koszyk" (opcjonalnie) - jeśli go masz, suma powinna być PONIŻEJ tego przycisku */}
//                 {cartItems.length > 0 && (
//                     <div className="mt-6 border-t pt-4">
//                         <button
//                             className="bg-red-500 hover:bg-red-700 text-white px-4 py-2  focus:outline-none"
//                             onClick={clearCart}
//                         >
//                             Wyczyść koszyk
//                         </button>
//                     </div>
//                 )}
//                 {/* SUMA KOSZYKA - DODAJEMY TUTAJ */}
//                 {cartItems.length > 0 && (
//                     <div className="mt-6 font-bold text-xl text-gray-900 text-right">
//                         Suma: {calculateCartTotal()} PLN
//                     </div>
//                 )}
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;