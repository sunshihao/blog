import { type IconProps } from '@/assets';

export function SnailIcon(props: IconProps = {}) {
	return (
		// <svg
		//   width="1em"
		//   height="1em"
		//   viewBox="0 0 24 24"
		//   fill="none"
		//   xmlns="http://www.w3.org/2000/svg"
		//   {...props}
		// >
		//   <path
		//     d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z"
		//     stroke="currentColor"
		//     strokeWidth="2"
		//     strokeLinecap="round"
		//     strokeLinejoin="round"
		//   />
		//   <path
		//     d="M15.8685 8.1315C20.3552 12.6182 22.2604 17.9873 20.1238 20.1238C17.9873 22.2604 12.6182 20.3552 8.1315 15.8685C3.64482 11.3818 1.73964 6.01266 3.87615 3.87615C6.01266 1.73964 11.3818 3.64482 15.8685 8.1315Z"
		//     stroke="currentColor"
		//     strokeWidth="2"
		//     strokeLinecap="round"
		//     strokeLinejoin="round"
		//   />
		//   <path
		//     d="M8.13151 8.1315C3.64483 12.6182 1.73965 17.9873 3.87616 20.1238C6.01267 22.2604 11.3818 20.3552 15.8685 15.8685C20.3552 11.3818 22.2604 6.01266 20.1239 3.87615C17.9873 1.73964 12.6182 3.64482 8.13151 8.1315Z"
		//     stroke="currentColor"
		//     strokeWidth="2"
		//     strokeLinecap="round"
		//     strokeLinejoin="round"
		//   />
		// </svg>
		<svg
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<g
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
			>
				<path
					stroke="currentColor"
					d="M2 13a6 6 0 1 0 12 0a4 4 0 1 0-8 0a2 2 0 0 0 4 0"
				></path>
				<circle cx="10" cy="13" r="8"></circle>
				<path
					stroke="currentColor"
					d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6m0-10l1.1 2.2M22 3l-1.1 2.2"
				></path>
			</g>
		</svg>
	);
}
