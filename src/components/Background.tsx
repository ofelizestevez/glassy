import { css } from "@emotion/react";
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface props {
	children: ReactNode;
	backgroundImage: string | null;
	setBackgroundImage: React.Dispatch<React.SetStateAction<string | null>>;
}

function Background({ children, backgroundImage, setBackgroundImage }: props) {
	const [backupImage, setBackupImage] = useState(localStorage.getItem("backgroundImage"));
	const [fadeBackup, setFadeBackup] = useState(false);
	const styles = css`
		height: 100%;
		width: 100%;
		background-image: url(${backgroundImage});
		background-size: cover;
		background-position: center;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 1rem;
	`;

	const image = css`
		position: absolute;
		width: 100vw;
		height: 100vh;
		object-fit: cover;
	`;

	const setBackground = () => {
		axios
			.get("https://source.unsplash.com/random")
			.then((data) => data.request)
			.then((request) => request.responseURL)
			.then((url) => {
				setBackgroundImage(url);
				localStorage.setItem("backgroundImage", url);
			});
	};

	useEffect(() => {
		console.log(backupImage);
		if (backgroundImage == null) {
			setBackground();
		}
	}, [backgroundImage]);

	const loaded = () => {
		setFadeBackup(true);
	};

	const animationEnd = () => {
		console.log("PLEASEPLEASEPLEASE");
	};

	return (
		<div css={styles}>
			<img src={backgroundImage ?? ""} css={image} onLoad={loaded} />
			<motion.img
				src={backupImage ?? ""}
				css={image}
				animate={{ opacity: fadeBackup ? 0 : 1 }}
				transition={{ duration: 10 }}
				onAnimationComplete={() => {
					console.log("oh mother");
				}}
			></motion.img>
			{children}
		</div>
	);
}

export default Background;
