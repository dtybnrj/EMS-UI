const Table = ({ columns, data }) => {
    return (
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((col) => (
              <th key={col} className="p-2">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              {Object.values(row).map((val, idx) => (
                <td key={idx} className="p-2">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  