import React, { useState, createContext, useContext, useMemo } from "react";

const DEFAULT_LANG = "en";

const LangContext = createContext({
  state: DEFAULT_LANG,
  setLang: (_lang: string) => {},
});

export function useLangContext() {
  return useContext(LangContext);
}

interface ProviderProps {}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [state, setState] = useState(DEFAULT_LANG);

  function setLang(lang: string) {
    setState(lang);
  }

  return (
    <LangContext.Provider
      value={useMemo(
        () => ({
          state,
          setLang,
        }),
        [state]
      )}
    >
      {children}
    </LangContext.Provider>
  );
};
