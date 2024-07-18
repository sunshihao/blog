import DynamicIconRender from '@/components/DynamicIconRender';
import { ThemeChanger } from '@/components/ThemeChanger';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			Next.js 启动模板！
			<DynamicIconRender
				iconKey="Pencil1Icon"
				className="text-orange-400 dark:text-purple-800 text-lg h-9 w-9"
			/>
			<ThemeChanger />
		</main>
	);
}
