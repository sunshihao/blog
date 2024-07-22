import { env } from '~/env.mjs';

/**
 * 构建基于当前环境的站点URL。
 * @param path - 要附加到站点URL的路径。
 * @returns 完整的站点URL。
 */
export function constructSiteUrl(path = '') {
	const baseUrl =
		process.env.NODE_ENV === 'production'
			? env.NEXT_PUBLIC_SITE_URL
			: 'http://localhost:3000';

	return new URL(path, baseUrl);
}
