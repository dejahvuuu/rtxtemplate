import { useTranslation } from 'react-i18next';
import { Box, Drawer } from '@mui/material';

import NavGroup from './NavStructure/NavGroup';

export default function Sidebar({ window, open, action, collapse }) {
	const { t } = useTranslation();

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box component="nav" sx={{ width: { lg: '310px' }, flexShrink: { sm: 0 } }}>
			<Drawer
				container={container}
				variant="temporary"
				open={open}
				onClose={action}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: { xs: 'block', lg: 'none' },
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: '310px',
					},
				}}
			>
				<NavGroup collapse={collapse} />
			</Drawer>
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: 'none', lg: 'block' },
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: '310px',
					},
				}}
				open
			>
				<div className="flex items-center justify-center mt-lg-4 mb-lg-3 mt-2">
					<img
						className="brand-img"
						src="./images/tenant/tnx/tnx_color.svg"
						alt={t('message.alt_logo')}
					/>
				</div>

				<NavGroup collapse={collapse} />
			</Drawer>
		</Box>
	);
}
