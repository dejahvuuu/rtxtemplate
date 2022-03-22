import { Accordion, AccordionSummary } from '@mui/material';

export default function NavCollapse({
	icon,
	label,
	children,
	onChange,
	condition,
	id,
}) {
	return (
		<>
			<Accordion
				expanded={condition}
				onChange={onChange}
				className={`${condition ? 'primary active' : 'text'}`}
			>
				<AccordionSummary aria-controls={id} id={id}>
					<div className="flex items-center justify-between w-100 py-1 px-3">
						<div className="flex items-center">
							<i className={`h3 pr-2 ${icon}`}></i>
							<span className="semibold">{label}</span>
						</div>
						<i
							className={
								condition ? 'icon-arrow primary' : 'icon-arrow rotate270'
							}
						></i>
					</div>
				</AccordionSummary>

				<div className="active submenu pl-5">{children}</div>
			</Accordion>
		</>
	);
}
