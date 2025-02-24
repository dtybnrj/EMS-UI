const InputField = ({ label, type, name, value, onChange }) => {
    return (
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
    );
  };
  
  export default InputField;
  