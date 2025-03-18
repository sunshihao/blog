'use server';

// import { cookies } from 'next/headers';

import Cookies from 'js-cookie';

import { defaultLocale, Locale } from '@/i18n/config';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'NEXT_LOCALE';

export async function getLocale() {
	console.log('Cookies.get(COOKIE_NAME--- ', Cookies.get(COOKIE_NAME));
	return (await Cookies.get(COOKIE_NAME)) || defaultLocale;
}

export async function setLocale(locale: Locale) {
	await Cookies.set(COOKIE_NAME, locale);
}
