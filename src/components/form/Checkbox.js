import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Checkbox(props) {
	const { id, checked, register, error, onChange } = props;

	const { t } = useTranslation();
	const [isChecked, setIsChecked] = useState(checked ? true : false);
	const errorMessage = error ? t(`form.${error.message}`) : null;
	const label = props.label ?? t(`form.${id}_label`);

	return (
		<>
			<div className="form-check">
				<input
					type="checkbox"
					id={id}
					checked={isChecked}
					className="form-check-input"
					{...register}
					onChange={(e) => {
						setIsChecked(!isChecked);
						onChange && onChange(e); // método propio
						register?.onChange(e); // método de hook form register
					}}
				/>
				<label className="form-check-label bold" htmlFor={id}>
					{label}
				</label>
				{errorMessage && (
					<small className="form-error block">{errorMessage}</small>
				)}
			</div>
		</>
	);
}
