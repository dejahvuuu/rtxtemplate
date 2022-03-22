import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ContexConfig } from '../../config/ContexConfig';

export default function LangButton() {
	const { i18n } = useTranslation();
	const { config } = useContext(ContexConfig);
	const { activeTenant, language, supportedLang } = config;
	const [currentLang, currentTenant = 'DEFAULT'] = localStorage
		.getItem('i18nextLng')
		.split('-');
	const [support, setSupport] = useState(
		supportedLang.includes(currentLang.substring(0, 2)) &&
			currentTenant.toLowerCase() === activeTenant
			? currentLang.substring(0, 2)
			: language
	);
	const nextLang = support === 'es' ? 'en' : 'es';

	useEffect(() => {
		if (
			`${currentLang}-${currentTenant}` ===
			`${support}-${activeTenant.toUpperCase()}`
		)
			return;

		const setLang =
			activeTenant === 'default'
				? support
				: `${support}-${activeTenant.toUpperCase()}`;
		localStorage.setItem('i18nextLng', setLang);
		i18n.changeLanguage();
	}, [currentLang, currentTenant, support, activeTenant, i18n]);

	const handleLanguage = () => {
		setSupport(nextLang);
	};

	return (
		<div className="btn-lang">
			<div className="btn-lang-img">
				<button onClick={handleLanguage}>
					<img src={`/images/lang/${nextLang}.png`} alt={nextLang} />
					<span className="text">{nextLang}</span>
				</button>
			</div>
		</div>
	);
}
