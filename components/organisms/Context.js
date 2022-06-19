import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
	const [appLang, setAppLang] = useState("EN");
	return (
		<AppContext.Provider value={{ appLang, setAppLang }}>
			{children}
		</AppContext.Provider>
	);
};

export default ContextProvider;
