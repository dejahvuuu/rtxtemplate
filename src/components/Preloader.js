import { CircularProgress, Stack } from '@material-ui/core';

export default function Preloader({ bgColor = 'rgba(0,0,0,.2)' }) {
	return (
		<Stack
			className="spinner"
			sx={{ backgroundColor: bgColor }}
			direction="row"
		>
			<CircularProgress color="inherit" size="5rem" />
		</Stack>
	);
}
