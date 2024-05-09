import { ReactNode } from "react";
import { css } from "@emotion/react";
import React from "react";

interface Props {
	children: ReactNode;
	rightSide?: boolean;
}

function BarButtons({ children, rightSide }: Props) {
	const container = css`
		display: flex;
		height: 100%;
	`;

	const buttonStyles = css`
		font-size: 1rem;
		background-color: unset;
	`;

	const leftSideStyles = css`
		padding-left: 1rem;
		border-left: 1px;
		border-left-style: solid;
		border-color: rgba(0,0,0, 0.1);

		&:not(:last-child) {
			padding-right: 1rem;

		}
	`;

	const rightSideStyles = css`
		padding-right: 1rem;
		border-right: 1px;
		border-right-style: solid;
		border-color: rgba(0, 0, 0, 0.1);

		&:not(:first-child) {
			padding-left: 1rem;
		}
	`;

	const childrenArray = React.Children.toArray(children);

	return (
		<div css={container}>
			{childrenArray.map((child, index) => (
				<button key={index} css={[buttonStyles, rightSide ? leftSideStyles : rightSideStyles]}>
					{child}
				</button>
			))}
		</div>
	);
}

export default BarButtons;
