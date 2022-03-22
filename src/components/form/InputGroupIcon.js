export default function InputGroupIcon(props) {
	const { id, placeholder, disabled, children } = props;

	return (
		<>
			<input
				id={id}
				type="text"
				className="form-add form-control bold"
				placeholder={placeholder}
				disabled={disabled}
			/>
			{children}
		</>
	);
}
