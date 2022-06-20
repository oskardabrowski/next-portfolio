import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
	const [appLang, setAppLang] = useState("EN");
	const [pageLoaded, setPageLoaded] = useState(false);
	const [redirectPath, setRedirectPath] = useState({
		action: false,
		path: "",
	});
	return (
		<AppContext.Provider
			value={{
				appLang,
				setAppLang,
				pageLoaded,
				setPageLoaded,
				redirectPath,
				setRedirectPath,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default ContextProvider;
