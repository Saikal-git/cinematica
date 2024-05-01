import React, { useEffect, useState } from "react";
import { LanguageContext } from ".";

const RootContext = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const [favorite, setFavorite] = useState([]);

  const getFavorite = () => {
    let fav = JSON.parse(localStorage.getItem("favorite")) || [];
    setFavorite(fav)
  };
  useEffect(() => {
    getFavorite()
  }, [])
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
