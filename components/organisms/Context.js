import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
	const [appLang, setAppLang] = useState("EN");
	const [pageLoaded, setPageLoaded] = useState(false);
	return (
		<AppContext.Provider
			value={{ appLang, setAppLang, pageLoaded, setPageLoaded }}
		>
			{children}
		</AppContext.Provider>
	);
};

export default ContextProvider;
