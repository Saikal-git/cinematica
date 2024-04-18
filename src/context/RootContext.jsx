import React, { useState } from "react";
import { LanguageContext } from ".";

const RootContext = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const [favorite, setFavorite] = useState([]);
  return (
    <LanguageContext.Provider
      value={{
        isDark,
        setIsDark,
        language,
        setLanguage,
        favorite,
        setFavorite,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default RootContext;
