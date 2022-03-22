import React, { useState, Children, isValidElement, cloneElement } from 'react';
import { useTranslation } from 'react-i18next';

export default function RadioGroup({ children, ...props }) {
	const { defaultValue, label, register, error, onChange, className, variant } =
		props;
	const [checkedValue, setValue] = useState(defaultValue);

	const { t } = useTranslation();
	const errorMessage = error ? t(`form.${error.message}`) : null;

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const childrenWithProps = Children.map(children, (child) => {
		if (isValidElement(child)) {
			return cloneElement(child, {
				checkedValue,
				register,
				handleChange,
				onChange,
			});
		}

		return child;
	});

	function SetClass(value) {
		switch (value) {
			case 'card':
				return 'radio-card-group';
			case 'inline':
				return 'radio-group-inline';
			default:
				return 'radio-group';
		}
	}

	return (
		<>
			<div
				className={
					className
						? `form-radio-group mb-3 ${className}`
						: 'form-radio-group mb-3'
				}
			>
				{label && <label>{label}</label>}
				<div className={SetClass(variant)}>{childrenWithProps}</div>
				{errorMessage && <small className="form-error">{errorMessage}</small>}
			</div>
		</>
	);
}
