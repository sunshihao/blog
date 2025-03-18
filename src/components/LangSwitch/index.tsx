'use client';

import { useLocale } from 'next-intl';

import { Button } from '@/components/ui/button';
import { setLocale } from '@/i18n';
import { type Locale, locales } from '@/i18n/config';

export default function LangSwitch() {
	const [zh, en] = locales;
	const locale = useLocale();

	console.log('locale----', locale);

	// 切换语言
	function onChangeLang(value: Locale) {
		const locale = value as Locale;
		console.log('locale---====', locale);
		setLocale(locale);
	}
	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() => onChangeLang(locale == zh ? en : zh)}
		>
			{locale === zh ? '中' : 'EN'}
			<span className="sr-only">Toggle Lang</span>
		</Button>
	);
}
