import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import TemplateModals from '../../../modals/TemplateModals';
import NavCollapse from './NavCollapse';
import NavItem from './NavItem';

export default function NavGroup({ collapse }) {
	const { t } = useTranslation();
	const [expanded, setExpanded] = useState(collapse);
	const [showModal, setShowModal] = useState(false);

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
			label: t('translation:action.close'),
			style: 'btn-outline',
		},
		{
			type: 'redirect',
			url: '/',
			label: t('translation:action.exit'),
			style: 'btn-error',
		},
	];

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	return (
		<>
			<NavItem
				to="/dashboard"
				icon="icon-home"
				label="Inicio"
				bgActive={true}
			/>

			<NavCollapse
				condition={expanded === 'issued'}
				onChange={handleChange('issued')}
				id="issued"
				icon="icon-issued"
				label="Emisión"
			>
				<NavItem to="/issued" label="Emitir" />
				<NavItem to="/issued-authorization" label="Autorización de emisiones" />
			</NavCollapse>

			<NavCollapse
				condition={expanded === 'recharge'}
				onChange={handleChange('recharge')}
				id="recharge"
				icon="icon-money"
				label="Recargas/Desembolsos"
			>
				<NavItem to="/recharges" label="Recargas" />
				<NavItem
					to="/recharge-authorization"
					label="Autorización de recargas"
				/>
			</NavCollapse>

			<NavCollapse
				condition={expanded === 'account'}
				onChange={handleChange('account')}
				id="account"
				icon="icon-card"
				label="Cuentas y Tarjetas"
			>
				<NavItem
					to="/account-management"
					label="Gestión cuentas y subcuentas"
				/>
				<NavItem to="/lock-unlock" label="Bloqueo y desbloqueo" />
			</NavCollapse>

			<NavCollapse
				condition={expanded === 'report'}
				onChange={handleChange('report')}
				id="report"
				icon="icon-statistics"
				label="Reportes"
			>
				<NavItem to="/account-status" label="Estado de cuenta" />
				<NavItem to="/income-reports" label="Reportes de ingresos" />
				<NavItem to="/closing-balance" label="Saldos al cierre" />
			</NavCollapse>

			<NavCollapse
				condition={expanded === 'settings'}
				onChange={handleChange('settings')}
				id="settings"
				icon="icon-settings"
				label="Configuraciones"
			>
				<NavItem to="/user-creation" label="Creación de usuarios" />
				<NavItem to="/change-password" label="Cambio de contraseña" />
			</NavCollapse>

			<NavItem
				to="/support"
				icon="icon-contact"
				label="Soporte"
				bgActive={true}
			/>

			<div className="mb-0 mt-auto px-0 pointer" onClick={handleClick}>
				<div className="flex items-center py-1 px-3 text">
					<div className="flex items-center">
						<i className="icon-exit h3 pr-2"></i>
						<span className="semibold text">Cerrar sesión</span>
					</div>
				</div>
			</div>

			{showModal && (
				<TemplateModals
					icon="icon-exit"
					title={t('translation:modal_template.exit.title')}
					msgModal={false}
					buttons={buttonsInModal}
					close={close}
				/>
			)}
		</>
	);
}
