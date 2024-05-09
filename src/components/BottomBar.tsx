import { css } from "@emotion/react";
import Component from "./Component";
import BarButtons from "./BarButtons";
import EditIcon from "../assets/EditIcon";
import SettingsIcon from "../assets/SettingsIcon";
import ImageIcon from "../assets/ImageIcon";

interface props {
	setSettingsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
	settingsEnabled: boolean;
	setBackgroundImage: React.Dispatch<React.SetStateAction<string | null>>;
}

function BottomBar({
	setSettingsEnabled,
	settingsEnabled,
	setBackgroundImage,
}: props) {
	const container = css`
		width: 100%;
	`;
	const styles = css`
		display: grid;
		grid-template-columns: 1fr 1fr;
		height: 100%;
	`;

	const pageIndicatorContainer = css`
		display: flex;
		align-items: center;
		justify-content: start;
	`;

	const weatherContainer = css`
		display: flex;
		align-items: center;
		justify-content: end;
	`;

	return (
		<Component customCSS={container}>
			<div css={styles}>
				<div css={pageIndicatorContainer}>
					<BarButtons>
						<p>To Do List</p>
						<p>Bookmarks</p>
						<p>Website Notes</p>
					</BarButtons>
				</div>
				<div css={weatherContainer}>
					<BarButtons rightSide={true}>
						<div
							onClick={() => {
								setBackgroundImage(null);
							}}
						>
							<ImageIcon height={20} width={20} />
						</div>
						<EditIcon height={20} width={20} />
						<SettingsIcon height={20} width={20} />
					</BarButtons>
				</div>
			</div>
		</Component>
	);
}

export default BottomBar;
