import { z } from 'zod';

/**
 * Specify server-side environment variables schema here.
 */
const server = z.object({
	NODE_ENV: z.enum(['development', 'test', 'production']),

	VERCEL_ENV: z
		.enum(['development', 'preview', 'production'])
		.default('development')
});

const client = z.object({
	NEXT_PUBLIC_SITE_URL: z.string().min(1),
	NEXT_PUBLIC_SITE_EMAIL_FROM: z.string().min(1),
	NEXT_PUBLIC_SITE_LINK_PREVIEW_ENABLED: z.boolean().optional().default(false)
});

/**
 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
 * middlewares) or client-side so we need to destruct manually.
 *
 * @type {Record<keyof z.infer<typeof server> | keyof z.infer<typeof client>, string | undefined>}
 */
const processEnv = {
	NODE_ENV: process.env.NODE_ENV,
	VERCEL_ENV: process.env.VERCEL_ENV,
	NEXT_PUBLIC_SITE_URL: 'https://dhc.ink',
	NEXT_PUBLIC_SITE_EMAIL_FROM: 'http://sunshihao945@outlook.com',
	SITE_NOTIFICATION_EMAIL_TO: 'http://sunshihao945@outlook.com',
	LINK_PREVIEW_API_BASE_URL: 'https://dhc.ink'
};

// Don't touch the part below
// --------------------------

const merged = server.merge(client);

/** @typedef {z.input<typeof merged>} MergedInput */
/** @typedef {z.infer<typeof merged>} MergedOutput */
/** @typedef {z.SafeParseReturnType<MergedInput, MergedOutput>} MergedSafeParseReturn */

let env = /** @type {MergedOutput} */ (process.env);

if (!!process.env.SKIP_ENV_VALIDATION == false) {
	const isServer = typeof window === 'undefined';

	const parsed = /** @type {MergedSafeParseReturn} */ (
		isServer
			? merged.safeParse(processEnv) // on server we can validate all env vars
			: client.safeParse(processEnv) // on client we can only validate the ones that are exposed
	);

	if (parsed.success === false) {
		console.error(
			'❌ Invalid environment variables:',
			parsed.error.flatten().fieldErrors
		);
		throw new Error('Invalid environment variables');
	}

	env = new Proxy(parsed.data, {
		get(target, prop) {
			if (typeof prop !== 'string') return undefined;
			// Throw a descriptive error if a server-side env var is accessed on the client
			// Otherwise it would just be returning `undefined` and be annoying to debug
			if (!isServer && !prop.startsWith('NEXT_PUBLIC_'))
				throw new Error(
					process.env.NODE_ENV === 'production'
						? '❌ Attempted to access a server-side environment variable on the client'
						: `❌ Attempted to access server-side environment variable '${prop}' on the client`
				);
			return target[/** @type {keyof typeof target} */ (prop)];
		}
	});
}

export { env };
