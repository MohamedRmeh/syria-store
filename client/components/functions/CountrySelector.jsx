import React, { useState, useEffect, useCallback } from "react";

// بيانات الدول
const countries = [
  { code: "+963", name: "سوريا", iso2: "SY" },
  { code: "+20", name: "مصر", iso2: "EG" },
  { code: "+971", name: "الإمارات", iso2: "AE" },
  { code: "+965", name: "الكويت", iso2: "KW" },
  { code: "+49", name: "ألمانيا", iso2: "DE" },
  { code: "+90", name: "تركيا", iso2: "TR" },
  { code: "+46", name: "السويد", iso2: "SE" },
  { code: "+43", name: "النمسا", iso2: "AT" },
  { code: "+45", name: "الدنمارك", iso2: "DK" },
  { code: "+44", name: "المملكة المتحدة", iso2: "GB" },
  { code: "+1", name: "الولايات المتحدة الأمريكية", iso2: "US" },
];

// رابط العلم بناءً على كود ISO
const getFlagUrl = (iso2) => `https://flagcdn.com/w40/${iso2.toLowerCase()}.png`;

// مكون اختيار الدولة
const CountrySelector = ({ selectedCode, onSelectCode, userType, choseCountry }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // تثبيت دالة تغيير الدولة باستخدام useCallback
  const handleSelectName = useCallback(
    (name) => {
      if (userType !== "مستفيد") {
        onSelectCode(name);
      }
      setIsDropdownOpen(false);
    },
    [userType, onSelectCode]
  );

  // تعيين الدولة إلى "سوريا" إذا كان المستخدم "مستفيد"
  useEffect(() => {
    if (userType === "مستفيد" && selectedCode !== "سوريا") {
      onSelectCode("سوريا");
    }
  }, [userType, selectedCode, onSelectCode]);

  const selectedCountry = countries.find((country) => country.name === selectedCode);

  return (
    <>
      <div
        className={`${
          choseCountry ? "w-full" : ""
        } bg-white px-4 h-[48px] rounded-md shadow-md flex items-center border select-none border-slate-300 cursor-pointer ${
          userType === "مستفيد" ? "pointer-events-none" : ""
        }`}
        onClick={() => userType !== "مستفيد" && setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedCountry && (
          <div className="flex items-center gap-2">
            <img
              src={getFlagUrl(selectedCountry.iso2)}
              alt={selectedCountry.name}
              className="w-4 h-3"
            />
            <p className="text-slate-700">{selectedCountry.name}</p>
          </div>
        )}
      </div>

      {isDropdownOpen && userType !== "مستفيد" && (
        <div className="absolute top-[60px] left-0 w-full bg-white border rounded-md shadow-lg z-10 max-h-[200px] overflow-y-auto">
          {countries.map((country) => (
            <div
              key={country.code}
              className="flex items-center px-5 py-2  hover:bg-slate-200 cursor-pointer"
              onClick={() => handleSelectName(country.name)}
            >
              <img src={getFlagUrl(country.iso2)} alt={country.name} className="w-4 h-3 ml-2 " />
              {country.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CountrySelector;
