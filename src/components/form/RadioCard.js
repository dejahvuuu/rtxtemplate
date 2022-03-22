export default function RadioCard(props) {
	const {
		id,
		value,
		checkedValue,
		label,
		register,
		handleChange,
		onChange,
		icon,
	} = props;

	return (
		<div className="form-radio-card">
			<label className="card form-card-label" htmlFor={id ?? value}>
				<div className="flex self-end form-check">
					<input
						id={id ?? value}
						className="form-check-input"
						type="radio"
						value={value}
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
				</div>
				<div className="card-image">
					<div className="stylized-icon mb-2">
						<i
							className={`flex justify-center items-center ${icon} primary`}
						></i>
					</div>
				</div>
				<div className="flex justify-center items-center center px-2">
					<p>{label}</p>
				</div>
			</label>
		</div>
	);
}
