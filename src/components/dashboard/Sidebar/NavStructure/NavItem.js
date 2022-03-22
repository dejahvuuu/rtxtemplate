import { Link, useRouteMatch } from 'react-router-dom';

export default function NavItem({
	to,
	icon,
	label,
	activeExact,
	bgActive = false,
}) {
	return (
		<LinkActive
			to={to}
			label={label}
			icon={icon}
			activeExact={activeExact}
			bgActive={bgActive}
		/>
	);
}

function LinkActive({ to, icon, label, activeExact, bgActive }) {
	let match = useRouteMatch({
		path: to,
		exact: activeExact,
	});

	return (
		<div className={match ? (bgActive ? 'active' : '') : ''}>
			<Link to={to}>
				<div
					className={`flex items-center py-1 px-3 ${
						match ? 'primary' : 'text'
					}`}
				>
					{icon && <i className={`h3 pr-2 ${icon}`}></i>}
					<span className="semibold">{label}</span>
				</div>
			</Link>
		</div>
	);
}
