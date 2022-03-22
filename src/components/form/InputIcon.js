import Tooltip from '@material-ui/core/Tooltip';

export default function InputIcon(props) {
	const { title, icon, onClick } = props;

	return (
		<Tooltip title={title}>
			<button type="button" onClick={onClick}>
				<i className={icon}></i>
			</button>
		</Tooltip>
	);
}
