import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Tooltip from '@material-ui/core/Tooltip';

export default function InputLoadFile(props) {
	const { id, register, error, onChange, labelShow = true } = props;

	const [nameFile, setNameFile] = useState('');

	const { t } = useTranslation();
	const selectFile = [];
	const hiddenFileInput = useRef(null);

	const errorMessage = error ? t(`form.${error.message}`) : null;
	const label = props.label ?? t(`form.${id}_label`);
	const labelShowClass = labelShow ? 'col-lg-9' : 'col-lg-12';

	const handleClick = () => {
		hiddenFileInput.current.click();
	};

	const handleChange = (event) => {
		const fileUploaded = event.target.files[0];
		setNameFile(fileUploaded.name);
		selectFile.push(fileUploaded);
	};

	const handleRemoveFile = (event) => {
		setNameFile('');
		selectFile.splice(0, 1);
	};

	return (
		<>
			<div className="form-help input-group mb-2">
				{labelShow ? (
					<label className="col-lg-3 self-center m-0">{label}</label>
				) : (
					''
				)}
				<div
					className={
						`${labelShowClass} input-group input-group-items` +
						(error ? ' error' : '')
					}
				>
					<button className="btn-primary" type="button" onClick={handleClick}>
						{t('action.upload')}
					</button>
					<input
						id={id}
						type="file"
						{...register}
						ref={hiddenFileInput}
						onChange={(e) => {
							handleChange(e); // método propio del componente
							onChange && onChange(e); // método propio del formulario o vista
							register?.onChange(e); // método de hook form register
						}}
						hidden
					/>
					<div className="flex flex-column self-center p-1">
						<span className="mb-0 truncate small">{nameFile}</span>
					</div>
					{nameFile && (
						<Tooltip title="Eliminar">
							<button type="button" className="pl-0" onClick={handleRemoveFile}>
								<i className="icon-remove h4 danger"></i>
							</button>
						</Tooltip>
					)}
				</div>
				{errorMessage && (
					<small className="form-error relative">{errorMessage}</small>
				)}
			</div>
		</>
	);
}
