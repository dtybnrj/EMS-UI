const DashboardCard = ({ title, value }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-700 text-2xl">{value}</p>
      </div>
    );
  };
  
  export default DashboardCard;
  