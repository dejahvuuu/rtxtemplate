export default function RadioButton(props) {
	const {
		id,
		value,
		checkedValue,
		label,
		register,
		handleChange,
		onChange,
		onClick,
	} = props;
	return (
		<>
			<div className="form-check">
				<input
					id={id ?? value}
					type="radio"
					className="form-check-input"
					value={value}
					onClick={onClick}
					checked={checkedValue === value}
					{...register}
					onChange={(e) => {
						handleChange(e);
						if (onChange) {
							onChange(e); // método propio
						}
						if (register) {
							register.onChange(e); // método de hook form register
						}
					}}
				/>
				<label className="form-check-label semibold" htmlFor={id ?? value}>
					{label}
				</label>
			</div>
		</>
	);
}
