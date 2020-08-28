import React, { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
	useLayoutEffect(() => {
		if (title) {
			document.title = title;
		} else {
			document.title = 'Valshe Dates | Dating For Serious People App';
		}
	}, [title]);
};

export default useDocumentTitle;
