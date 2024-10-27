
const UserTypeSelector = ({
  userType,
  setUserType,
  handleHelpClick,
  showHelp,
}) => {
  return (
    <div className="w-full sm:w-[80%] flex flex-col">
      <div className="flex flex-wrap gap-5 items-center">


          <button
            type="button"
            className={`px-4 py-2 rounded-md shadow-md ${
              userType === "مستفيد"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setUserType("مستفيد")}
          >
            مستفيد
          </button>



        <div className="flex gap-2">
          <button
            type="button"
            className={`px-4 py-2 rounded-md shadow-md ${
              userType === "معين"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setUserType("معين")}
          >
            معين
          </button>
          <button
            type="button"
            className="px-2 py-2 text-gray-500"
            onClick={() => handleHelpClick("معين")}
          >
            ؟
          </button>
        </div>
        
        {showHelp === "معين" && (
          <p className="text-gray-600 text-sm">
            يجب عليك اختيار "معين" إذا كنت ترغب في تقديم المساعدة للآخرين واذا
            كنت ترغب بلأستفادة من خدماتنا وشراء الاحتياجات الخاصة وتسديد فواتيرك
            من المعين فعليك اختيار "مستفيد"
          </p>
        )}
      </div>
    </div>
  );
};

export default UserTypeSelector;
