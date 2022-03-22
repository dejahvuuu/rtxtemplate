import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import TemplateModals from '../../components/modals/TemplateModals';
import InputTextField from '../../components/form/InputTextField';

export default function AuthorizationModal({ activeModalInfo }) {
	const [showModalAuthorize, setShowModalAuthorize] = useState(true);
	const [showModalConfirm, setShowModalConfirm] = useState(false);
	const { t } = useTranslation();

	const buttonsModalAuthorize = [
		{
			type: 'close',
			function: () => setShowModalAuthorize(false),
			label: t('action.close'),
			style: 'btn-outline',
		},
		{
			type: 'close',
			function: () => {
				setShowModalAuthorize(false);
				setShowModalConfirm(true);
			},
			label: t('translation:navigation.next'),
			style: 'btn-primary',
		},
	];

	const buttonsModalConfirm = [
		{
			type: 'close',
			function: () => {
				setShowModalConfirm(false);
			},
			label: t('translation:message.understood'),
			style: 'btn-primary',
		},
	];

	return (
		<>
			{showModalAuthorize && (
				<TemplateModals
					icon={false}
					title={t('translation:modal_template.authorizePassword.title')}
					msgModal={
						<InputTextField
							id="authorizeBulk"
							// value={values?.AuthorizeBulk}
							// register={register('AuthorizeBulk')}
							// error={errors.AuthorizeBulk}
						/>
					}
					buttons={buttonsModalAuthorize}
					close={() => setShowModalAuthorize(false)}
				/>
			)}

			{activeModalInfo && showModalConfirm && (
				<TemplateModals
					icon="icon-confirm"
					title={t('translation:modal_template.bulkConfirm.title')}
					msgModal={t('translation:modal_template.bulkConfirm.msgModal')}
					buttons={buttonsModalConfirm}
					close={() => setShowModalAuthorize(false)}
				/>
			)}
		</>
	);
}
