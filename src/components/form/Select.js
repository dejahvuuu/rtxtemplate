import { useTranslation } from 'react-i18next';

export default function Select(props) {
	const {
		id,
		defaultValue,
		placeholder,
		register,
		error,
		onChange,
		className,
		options = [],
	} = props;
	const { t } = useTranslation();
	const errorMessage = error ? t(`form.${error.message}`) : null;
	const label = props.label ?? t(`form.${id}_label`);
	const optionLabel =
		props.optionLabel ?? t('translation:form.selectOption_label');

	return (
		<>
			<div
				className={
					className ? `form-floating mb-3 ${className}` : 'form-floating mb-3'
				}
			>
				<select
					id={id}
					className={error ? 'form-select error' : 'form-select'}
					defaultValue={defaultValue}
					placeholder={placeholder ?? label}
					{...register}
					onChange={(e) => {
						if (onChange) {
							onChange(e); // método propio
						}
						if (register) {
							register.onChange(e); // método de hook form register
						}
					}}
				>
					<option value="" disabled>
						{optionLabel}
					</option>

					{options.map((option, index) => (
						<option value={option.value} key={index}>
							{option.text}
						</option>
					))}
				</select>
				<label htmlFor={id}>{label}</label>
				{errorMessage && <small className="form-error">{errorMessage}</small>}
			</div>
		</>
	);
}
