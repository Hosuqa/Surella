import React from "react";
import { FaXmark } from "react-icons/fa6";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null; 
    return (
        <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-44">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full h-full">
                <div className="flex justify-between">
                    <h2 className="text-xl font-bold mb-4">Kalkualtor</h2>
                    <FaXmark className="cursor-pointer w-10 h-10"onClick={onClose}/>
                </div>
            </div>
        </div>
    );
};

export default Modal;
