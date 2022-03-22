import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function AlertsModals() {
	const [isOpen, setIsOpen] = useState(true);
	const { t } = useTranslation();

	const handleModalClose = (e) => {
		setIsOpen(false);
	};

	return (
		<div className={isOpen === true ? 'flex modalAlert' : 'hide'}>
			<div className="modalAlert-icon flex items-center justify-center">
				<i className="icon-information primary h3"></i>
			</div>
			<div className="modalAlert-info flex">
				<small className="self-center py-1 pl-1">
					<Trans
						i18nKey="notification.continue_registration_process"
						values={{ name: t('sign_in.login') }}
					>
						Si tuviste que salir mientras hacías tu proceso de registro, puedes
						continuarlo ingresando en <b>"{t('sign_in.login')}"</b> con el
						correo electrónico y contraseña con qué iniciaste el registro.
					</Trans>
				</small>
				<button
					type="button"
					className="modalAlert-close"
					onClick={handleModalClose}
				>
					&times;
				</button>
			</div>
		</div>
	);
}
