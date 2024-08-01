export function Tag({ children }: { children: React.ReactNode }) {
	return (
		<span className="inline-flex items-center px-2 h-5 rounded-md text-xs  bg-gray-300 text-gray-800">
			{children}
		</span>
	);
}
