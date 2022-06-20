import React, { useContext, useEffect } from "react";
import { AppContext } from "./organisms/Context";

const PageLoaded = () => {
	const { pageLoaded, setPageLoaded } = useContext(AppContext);
	useEffect(() => {
		window.scrollTo(0, 0);
		setPageLoaded(true);
	}, [pageLoaded]);
	return null;
};

export default PageLoaded;
