const Button = ({ text, onClick, type = "button", className }) => {
    return (
      <button
        type={type}
        className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  