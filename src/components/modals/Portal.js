import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
	const pointOfMount = document.getElementById('portal');
	const elementSource = document.createElement('div');

	useEffect(() => {
		pointOfMount.appendChild(elementSource);
		return () => pointOfMount.removeChild(elementSource);
	}, [pointOfMount, elementSource]);

	return createPortal(children, elementSource);
}

export default Portal
