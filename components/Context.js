import React, { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
	const alertIsGood = "Done is good";
	return (
		<AppContext.Provider value={{ alertIsGood }}>
			{children}
		</AppContext.Provider>
	);
};

export default ContextProvider;
