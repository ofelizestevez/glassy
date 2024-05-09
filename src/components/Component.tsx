import { SerializedStyles, css, useTheme } from "@emotion/react";
import { ReactNode } from "react";

interface props {
	children: ReactNode;
    customCSS? : SerializedStyles
}

function Component({ children, customCSS }: props) {
	const theme = useTheme();

	const styles = css`
		position: relative;
        width: 100%;
		background: rgba(${theme.page.backgroundColor}, 0.2);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(24px);
		-webkit-backdrop-filter: blur(24px);
		border-radius: 16px;
        padding: 16px;

		::before {
			z-index: -1;
			content: "";
			position: absolute;
			inset: 0;
			border-radius: 16px;
			padding: 1px;
			background: linear-gradient(
				90deg,
				rgba(${theme.page.backgroundColor}, 0.2),
				rgba(${theme.page.backgroundColor}, 0.1)
			);
			-webkit-mask: linear-gradient(#fff 0 0) content-box,
				linear-gradient(#fff 0 0);
			-webkit-mask-composite: xor;
			mask-composite: exclude;
		}
	`;

	return <div css={[styles, customCSS]}>{children}</div>;
}

export default Component;
