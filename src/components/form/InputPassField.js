import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Popper, ClickAwayListener } from '@material-ui/core';

import InputTextField from './InputTextField';

export default function InputPassField(props) {
	const { id, register, error, className, additionalInfo = false } = props;

	const [passwordShown, setPasswordShown] = useState(false);
	const [openPopper, setOpenPopper] = useState(false);
	const [arrowRef, setArrowRef] = useState(null);
	const [anchorEl, setAnchorEl] = useState(null);

	const { t } = useTranslation();

	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	const handleClickPopper = () => {
		setOpenPopper(true);
		return null;
	};

	function PassStrength(props) {
		return (
			<div className="popper-contain p-2">
				{Object.entries(props.object).map(([key, value]) => (
					<li key={key}>{value}</li>
				))}
			</div>
		);
	}

	const handleClickAway = () => {
		setOpenPopper(false);
	};

	return (
		<>
			<div
				className={className ? `form-floating ${className}` : 'form-floating'}
			>
				<ClickAwayListener onClickAway={handleClickAway}>
					<div
						onClick={handleClickPopper}
						ref={setAnchorEl}
						variant="contained"
					>
						<InputTextField
							className="relative"
							id={id}
							type={passwordShown ? 'text' : 'password'}
							register={register}
							error={error}
						/>
						<div className="form-floting-eye absolute">
							<span
								title={
									passwordShown
										? t('input.password.toggle_visible')
										: t('input.password.toggle_hidden')
								}
							>
								<i
									className={
										passwordShown ? 'icon-eye-close h2' : 'icon-eye h2'
									}
									onClick={togglePasswordVisiblity}
								></i>
							</span>
						</div>

						{additionalInfo && (
							<Popper
								open={openPopper}
								className="popper"
								anchorEl={anchorEl}
								placement="right"
								disablePortal={false}
								modifiers={[
									{
										name: 'flip',
										enabled: true,
										options: {
											altBoundary: true,
											rootBoundary: 'document',
											fallbackPlacements: ['top', 'right'],
										},
									},
									{
										name: 'preventOverflow',
										enabled: true,
										options: {
											altAxis: true,
											altBoundary: true,
											tether: true,
											rootBoundary: 'document',
										},
									},
									{
										name: 'arrow',
										enabled: true,
										options: {
											element: arrowRef,
										},
									},
								]}
							>
								<span className="MuiPopper-arrow" ref={setArrowRef} />
								<PassStrength
									object={t('message.password_strength_list', {
										returnObjects: true,
									})}
								/>
							</Popper>
						)}
					</div>
				</ClickAwayListener>
			</div>
		</>
	);
}
