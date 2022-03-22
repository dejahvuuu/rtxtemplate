import { Link } from 'react-router-dom';

export default function ModalButton({ defineButton }) {
	const typeButton = {
		close: (
			<button
				className={`${defineButton.style}`}
				onClick={defineButton.function}
			>
				{defineButton.label}
			</button>
		),
		redirect: (
			<Link
				className={`${defineButton.style} btn-small`}
				to={defineButton.url || '/'}
			>
				{defineButton.label}
			</Link>
		),
		submit: (
			<button
				type="submit"
				className={`${defineButton.style}`}
				form={defineButton.form}
			>
				{defineButton.label}
			</button>
		),
	};

	return typeButton[`${defineButton.type}`];
}
