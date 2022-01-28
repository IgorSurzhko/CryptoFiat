import React from 'react';

// reactstrap components
import { Dropdown, Badge } from 'reactstrap';
import { ThemeContext, themes } from '../../contexts/ThemeContext';
import { backgroundColors } from '../../contexts/BackgroundColorContext';

function FixedPlugin(props) {
	return (
		<>
			{props.showState && <div onClick={props.onShow} className="authModalOverlay"></div>}

			<div className="fixed-plugin">
				<Dropdown isOpen={props.showState} toggle={() => {}}>
					<ul className="dropdown-menu show">
						<li className="header-title">SIDEBAR BACKGROUND</li>
						<li className="adjustments-line">
							<div className="badge-colors text-center">
								<Badge
									color="primary"
									className={
										props.bgColor === backgroundColors.primary ? 'active' : ''
									}
									onClick={() => {
										props.handleBgClick(backgroundColors.primary);
									}}
								/>
								<Badge
									color="info"
									className={
										props.bgColor === backgroundColors.blue ? 'active' : ''
									}
									onClick={() => {
										props.handleBgClick(backgroundColors.blue);
									}}
								/>
								<Badge
									color="success"
									className={
										props.bgColor === backgroundColors.green ? 'active' : ''
									}
									onClick={() => {
										props.handleBgClick(backgroundColors.green);
									}}
								/>
							</div>
						</li>
						<li className="adjustments-line text-center color-change">
							<ThemeContext.Consumer>
								{({ changeTheme }) => (
									<>
										<span className="color-label">LIGHT MODE</span>{' '}
										<Badge
											className="light-badge mr-2"
											onClick={() => changeTheme(themes.light)}
										/>{' '}
										<Badge
											className="dark-badge ml-2"
											onClick={() => changeTheme(themes.dark)}
										/>{' '}
										<span className="color-label">DARK MODE</span>{' '}
									</>
								)}
							</ThemeContext.Consumer>
						</li>

						<li className="header-title">that's better, right?</li>
						<li className="button-container"></li>
					</ul>
				</Dropdown>
			</div>
		</>
	);
}

export default FixedPlugin;
