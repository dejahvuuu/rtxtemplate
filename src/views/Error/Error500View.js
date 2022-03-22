import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LangButton from '../../components/button/LangButton';

export default function Error500View() {
	const { t } = useTranslation();

	const toDoList = Object.entries(
		t('translation:error_500.to_do_list', {
			returnObjects: true,
		})
	);

	return (
		<>
			<div className="flex items-center justify-center process-container px-5">
				<div>
					<div className="stylized-icon mb-2">
						<i className="flex justify-center items-center icon-error500 primary"></i>
					</div>
					<small>{t('translation:message.error_code', { code: '500' })}</small>
					<h2 className="primary mb-0">
						{t('translation:message.oops_title')}
					</h2>
					<p className="mb-3 bold">{t('translation:error_500.message')}</p>
					<p>
						<small className="mb-2">
							{t('translation:error_500.meantime_you_can')}
						</small>
					</p>
					<ul>
						{toDoList.map(([key, value], i, arr) => (
							<li key={i} className={arr[i + 1] ? 'mb-2' : 'mb-3'}>
								<small>{value}</small>
							</li>
						))}
					</ul>
					<div className="flex items-center justify-start">
						<Link to="/" className="btn btn-primary">
							{t('translation:action.back_to_home')}
						</Link>
					</div>
				</div>
			</div>
			<LangButton />
		</>
	);
}
