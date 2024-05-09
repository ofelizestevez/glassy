import { css } from "@emotion/react";
import Component from "./Component";
import BarButtons from "./BarButtons";

function TopBar() {
	const container = css`
		display: grid;
		align-items: center;
		justify-content: center;
		grid-template-columns: 1fr 1fr;
	`;

	const icons = css`
		display: flex;
		align-items: center;
		justify-content: end;
		height: 100%;

		* {
			height: 100%;
		}
	`;

	return (
		<Component>
			<div css={container}>
				<div>
					<p>oscar@Google →</p>
				</div>
				<div css={icons}>
					<BarButtons rightSide={true}>
						<p>4:20 PM</p>
						<p>69°F</p>
					</BarButtons>
				</div>
			</div>
		</Component>
	);
}

export default TopBar;
