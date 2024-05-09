import { ThemeProvider, css } from "@emotion/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Background from "./components/Background";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";
import Page from "./components/Page";

const theme = {
	page: {
		backgroundColor: "255, 255, 255",
	},
};

function App() {
	const [settingsEnabled, setSettingsEnabled] = useState(false);
	const [backgroundImage, setBackgroundImage] = useState(
		localStorage.getItem("backgroundImage")
	);

	const container = css`
		height: 60%;
		width: 60%;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 1rem;
	`;

	const content = css`
		height: 100%;
		width: 100%;
	`;

	return (
		<ThemeProvider theme={theme}>
			<Background backgroundImage={backgroundImage} setBackgroundImage={setBackgroundImage}>
				<motion.div
					css={container}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					<TopBar />
					<AnimatePresence mode="wait">
						{settingsEnabled ? (
							<motion.div
								key="content"
								css={content}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<Page>content</Page>
							</motion.div>
						) : (
							<motion.div
								key="settings"
								css={content}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<Page>settings</Page>
							</motion.div>
						)}
					</AnimatePresence>

					<BottomBar
						setBackgroundImage={setBackgroundImage}
						setSettingsEnabled={setSettingsEnabled}
						settingsEnabled={settingsEnabled}
					/>
				</motion.div>
			</Background>
		</ThemeProvider>
	);
}

export default App;
