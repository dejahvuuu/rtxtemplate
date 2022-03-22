import { Box, Card } from '@mui/material';

export default function StatusCard({
	icon,
	label,
	mount,
	status,
	statusMovements,
}) {
	return (
		<Box className="ui-shadow mx-lg-1 my-1 mx-auto" sx={{ width: 288 }}>
			<Card className="flex items-center ui-border p-1" variant="outlined">
				<i className={`${icon} primary h1 pr-1`}></i>
				<div className="w-100">
					<span className="mb-1">{label}</span>
					<div className="flex justify-between items-center">
						<h5 className="mb-0 text">{mount}</h5>
						<div className={`status ui-border ${statusMovements}`}>
							<div className="px-1">
								<i className={`icon-${statusMovements} pr-1 white`}></i>
								<small className="white">{status}</small>
							</div>
						</div>
					</div>
				</div>
			</Card>
		</Box>
	);
}
