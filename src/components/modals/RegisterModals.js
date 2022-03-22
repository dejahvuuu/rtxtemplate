import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import TemplateModals from '../modals/TemplateModals';

export default function RegisterModals() {
	const [showModalRegister, setShowModalRegister] = useState(true);
	const [showModalInfo, setShowModalInfo] = useState(false);
	const [showModalDocument, setShowModalDocument] = useState(false);
	const { t } = useTranslation();

	const instructionsModalRegister = Object.entries(
		t('translation:register_modal_welcome.instructions', {
			returnObjects: true,
		})
	);

	const instructionsModalInfo = Object.entries(
		t('translation:register_modal_document.instructions', {
			returnObjects: true,
		})
	);

	const instructionsModalDocument = Object.entries(
		t('translation:register_modal_upload.instructions', {
			returnObjects: true,
		})
	);

	const buttonsModalRegister = [
		{
			type: 'close',
			function: () => setShowModalRegister(false),
			label: t('action.close'),
			style: 'btn-outline',
		},
		{
			type: 'close',
			function: () => {
				setShowModalRegister(false);
				setShowModalInfo(true);
			},
			label: t('translation:navigation.next'),
			style: 'btn-primary',
		},
	];

	const buttonsModalInfo = [
		{
			type: 'close',
			function: () => {
				setShowModalInfo(false);
				setShowModalDocument(true);
			},
			label: t('translation:navigation.next'),
			style: 'btn-primary',
		},
	];

	const buttonsModalDocument = [
		{
			type: 'close',
			function: () => setShowModalDocument(!showModalDocument),
			label: t('translation:action.start'),
			style: 'btn-primary',
		},
	];

	return (
		<>
			{showModalRegister && (
				<TemplateModals
					icon="icon-welcome"
					title={t('translation:register_modal_welcome.title')}
					msgModal={instructionsModalRegister.map(([key, value]) => {
						if (key === '0') {
							return (
								<p key={key}>
									<b>{value}</b>
								</p>
							);
						} else {
							return (
								<p key={key}>
									<Trans
										i18nKey={`translation:register_modal_welcome.instructions.${key}`}
									>
										<b>Message:</b> {value}.
									</Trans>
								</p>
							);
						}
					})}
					buttons={buttonsModalRegister}
					close={() => setShowModalRegister(false)}
				/>
			)}

			{showModalInfo && (
				<TemplateModals
					icon="icon-document"
					title={t('translation:register_modal_document.title')}
					msgModal={instructionsModalInfo.map(([key, value]) => {
						return (
							<p key={key}>
								<Trans
									i18nKey={`translation:register_modal_document.instructions.${key}`}
								>
									<b>Message:</b> {value}.
								</Trans>
							</p>
						);
					})}
					buttons={buttonsModalInfo}
					close={() => setShowModalRegister(false)}
				/>
			)}

			{showModalDocument && (
				<TemplateModals
					icon="icon-upload"
					title={t('translation:register_modal_upload.title')}
					msgModal={
						<>
							<p>{t('translation:register_modal_upload.paragraph')}</p>
							<ul className="vinieta p-0 mb-2">
								{instructionsModalDocument.map(([key, value]) => {
									return (
										<li className="bold mb-0" key={key}>
											{value}
										</li>
									);
								})}
							</ul>
						</>
					}
					buttons={buttonsModalDocument}
					close={() => setShowModalRegister(false)}
				/>
			)}
		</>
	);
}
