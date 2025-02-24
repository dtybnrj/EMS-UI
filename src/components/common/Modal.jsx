const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <button className="absolute top-2 right-2" onClick={onClose}>X</button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  