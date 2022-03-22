import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function InputTextField(props) {
	const {
		id,
		type,
		value,
		placeholder,
		register,
		error,
		onChange,
		optional,
		disabled,
		className,
	} = props;
	const { t } = useTranslation();
	const [inputValue, setInputValue] = useState(value);

	const errorMessage = error ? t(`form.${error.message}`) : null;
	const label = props.label ?? t(`form.${id}_label`);

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<>
			<div
				className={
					className ? `form-floating mb-3 ${className}` : 'form-floating mb-3'
				}
			>
				<input
					id={id}
					type={type ?? 'text'}
					value={inputValue}
					className={
						'form-control' +
						(optional ? ' optional' : '') +
						(error ? ' error' : '')
					}
					placeholder={placeholder ?? label}
					{...register}
					onChange={(e) => {
						handleChange(e); // método del componente
						onChange && onChange(e); // método propio
						register?.onChange(e); // método de hook form register
					}}
					disabled={disabled}
				/>
				<label className="truncate" htmlFor={id}>
					{label}
				</label>
				{errorMessage && <small className="form-error">{errorMessage}</small>}
				{optional && (
					<div className="form-optional absolute">
						<small>{t('form.optional_label')}</small>
					</div>
				)}
			</div>
		</>
	);
}
