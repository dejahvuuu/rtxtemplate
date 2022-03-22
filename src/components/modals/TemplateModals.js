import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Portal from './Portal';

import ModalButton from '../button/ModalButton';

export default function TemplateModals({
	icon,
	title,
	msgModal,
	buttons,
	close,
	width = 470,
}) {
	const [showModal, setShowModal] = useState(true);

	const { t } = useTranslation();

	icon === undefined && (icon = 'icon-warning-info');
	title === undefined && (title = t('translation:modal_template.error.title'));
	msgModal === undefined &&
		(msgModal = t('translation:modal_template.error.msgModal'));

	const functionToClose = close ? close : () => setShowModal(false);
	const alignButtons = buttons?.length > 1 ? 'justify-between' : 'justify-end';

	const defaultButton = {
		type: 'close',
		function: functionToClose,
		label: t('message.understood'),
		style: 'btn-primary',
	};

	return (
		<Portal>
			<Modal open={showModal}>
				<div
					style={{ width: `${width}px` }}
					className="modal-contain py-3 px-5"
				>
					{icon && (
						<div className="stylized-icon center mb-2">
							<i
								className={`flex justify-center items-center ${icon} primary`}
							></i>
						</div>
					)}
					{title && <h5 className="mb-2">{title}</h5>}
					{msgModal && <div className="modal-text h-auto">{msgModal}</div>}
					<div className={`flex items-center mt-3 ${alignButtons}`}>
						{buttons ? (
							buttons.map((element, i) => {
								return <ModalButton defineButton={element} key={i} />;
							})
						) : (
							<ModalButton defineButton={defaultButton} />
						)}
					</div>
				</div>
			</Modal>
		</Portal>
	);
}
