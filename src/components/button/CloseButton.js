import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import TemplateModals from '../modals/TemplateModals';

export default function CloseButton({ url, confirmToClose = true }) {
	const [showModal, setShowModal] = useState(false);
	const { t } = useTranslation();

	const handleClick = () => {
		setShowModal(true);
	};

	const close = () => {
		setShowModal(false);
	};

	const buttonsInModal = [
		{
			type: 'close',
			function: close,
			label: t('action.close'),
			style: 'btn-outline',
		},
		{
			type: 'redirect',
			url: '/',
			label: t('action.exit'),
			style: 'btn-error',
		},
	];

	return (
		<div className="container-icon-close">
			{showModal && (
				<TemplateModals
					icon="icon-warning-info"
					title={t('translation:modal_template.closeRegister.title')}
					msgModal={t('translation:modal_template.closeRegister.msgModal')}
					buttons={buttonsInModal}
					close={close}
				/>
			)}
			{confirmToClose ? (
				<span onClick={handleClick}>
					<i className="icon-close h3"></i>
				</span>
			) : (
				<Link to={url || '/'}>
					<i className="icon-close h3"></i>
				</Link>
			)}
		</div>
	);
}
