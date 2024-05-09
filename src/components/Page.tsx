import { css } from "@emotion/react";
import Component from "./Component";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface props {
	children: ReactNode;
}

function Page({ children }: props) {
	const styles = css`
		height: 100%;
		width: 100%;
	`;
	return <Component customCSS={styles}>{children}</Component>;
}

export default Page;
