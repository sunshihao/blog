(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[331],
	{
		3872: function (e, t, a) {
			Promise.resolve().then(a.bind(a, 5397));
		},
		3269: function (e, t, a) {
			'use strict';
			a.d(t, {
				O: function () {
					return l;
				}
			});
			var i = a(7574),
				o = a(5623);
			let n = i.z.object({
					NODE_ENV: i.z.enum(['development', 'test', 'production']),
					VERCEL_ENV: i.z
						.enum(['development', 'preview', 'production'])
						.default('development')
				}),
				s = i.z.object({
					NEXT_PUBLIC_SITE_URL: i.z.string().min(1),
					NEXT_PUBLIC_SITE_EMAIL_FROM: i.z.string().min(1),
					NEXT_PUBLIC_SITE_LINK_PREVIEW_ENABLED: i.z
						.boolean()
						.optional()
						.default(!1)
				}),
				r = {
					NODE_ENV: 'production',
					VERCEL_ENV: o.env.VERCEL_ENV,
					NEXT_PUBLIC_SITE_URL: 'https://dhc.ink',
					NEXT_PUBLIC_SITE_EMAIL_FROM: 'http://sunshihao945@outlook.com',
					SITE_NOTIFICATION_EMAIL_TO: 'http://sunshihao945@outlook.com',
					LINK_PREVIEW_API_BASE_URL: 'https://dhc.ink'
				};
			n.merge(s);
			let l = o.env;
			if (!1 == !!o.env.SKIP_ENV_VALIDATION) {
				let e = s.safeParse(r);
				if (!1 === e.success)
					throw (
						(console.error(
							'❌ Invalid environment variables:',
							e.error.flatten().fieldErrors
						),
						Error('Invalid environment variables'))
					);
				l = new Proxy(e.data, {
					get(e, t) {
						if ('string' == typeof t) {
							if (!t.startsWith('NEXT_PUBLIC_'))
								throw Error(
									'❌ Attempted to access a server-side environment variable on the client'
								);
							return e[t];
						}
					}
				});
			}
		},
		5397: function (e, t, a) {
			'use strict';
			a.d(t, {
				Headline: function () {
					return T;
				}
			});
			var i = a(8392),
				o = a(881),
				n = a(7472),
				s = a(8294),
				r = a(8949),
				l = a(6066);
			let c = n.fC,
				d = n.xz,
				p = n.h_;
			n.x8;
			let h = r.forwardRef((e, t) => {
				let { className: a, ...o } = e;
				return (0, i.jsx)(n.aV, {
					ref: t,
					className: (0, l.cn)(
						'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
						a
					),
					...o
				});
			});
			h.displayName = n.aV.displayName;
			let m = r.forwardRef((e, t) => {
				let { className: a, children: o, ...r } = e;
				return (0, i.jsxs)(p, {
					children: [
						(0, i.jsx)(h, {}),
						(0, i.jsxs)(n.VY, {
							ref: t,
							className: (0, l.cn)(
								'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
								a
							),
							...r,
							children: [
								o,
								(0, i.jsxs)(n.x8, {
									className:
										'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
									children: [
										(0, i.jsx)(s.Z, { className: 'h-4 w-4' }),
										(0, i.jsx)('span', {
											className: 'sr-only',
											children: 'Close'
										})
									]
								})
							]
						})
					]
				});
			});
			(m.displayName = n.VY.displayName),
				(r.forwardRef((e, t) => {
					let { className: a, ...o } = e;
					return (0, i.jsx)(n.Dx, {
						ref: t,
						className: (0, l.cn)(
							'text-lg font-semibold leading-none tracking-tight',
							a
						),
						...o
					});
				}).displayName = n.Dx.displayName),
				(r.forwardRef((e, t) => {
					let { className: a, ...o } = e;
					return (0, i.jsx)(n.dk, {
						ref: t,
						className: (0, l.cn)('text-sm text-muted-foreground', a),
						...o
					});
				}).displayName = n.dk.displayName);
			var u = a(2777);
			let x = u.zt,
				f = u.fC,
				g = u.h_,
				A = u.xz,
				b = r.forwardRef((e, t) => {
					let { className: a, sideOffset: o = 4, ...n } = e;
					return (0, i.jsx)(u.VY, {
						ref: t,
						sideOffset: o,
						className: (0, l.cn)(
							'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
							a
						),
						...n
					});
				});
			b.displayName = u.VY.displayName;
			var v = a(8245);
			function N(e) {
				if (navigator.clipboard)
					navigator.clipboard
						.writeText(e)
						.then(() => {
							console.log('Text copied to clipboard: ', e),
								v.toast.success('复制成功', {
									richColors: !0,
									position: 'top-center'
								});
						})
						.catch((e) => {
							console.error('Failed to copy: ', e);
						});
				else {
					let t = document.createElement('textarea');
					(t.value = e),
						document.body.appendChild(t),
						t.select(),
						document.execCommand('copy'),
						document.body.removeChild(t);
				}
			}
			a(3269);
			var w = a(9371),
				y = a(8283),
				j = a(3290),
				E = a(9226),
				k = a(4469),
				_ = a(8454);
			let I = {
					wx: {
						src: '/docs/prinext/static/media/wx.d905e401.webp',
						height: 1455,
						width: 1074,
						blurDataURL:
							'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoGAAgAAkA4JaQAAueIFpvcAAD++jwREOVfWXigFcUn3r2/JehS1l8gGE4xt+weNfsg4AAA',
						blurWidth: 6,
						blurHeight: 8
					},
					wxPublic: {
						src: '/docs/prinext/static/media/wxPublic.2e26c39a.webp',
						height: 624,
						width: 2161,
						blurDataURL:
							'data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSAsAAAABD9D/iAg0MKL/AQBWUDggPAAAANABAJ0BKggAAgACQDglqAJ0AQ77IjIAAP7X4m0tnQ4SYq3bk/r5SXQ2kf/MW3nVv/6MP/tUyFE+HMAAAA==',
						blurWidth: 8,
						blurHeight: 2
					},
					douyin: {
						src: '/docs/prinext/static/media/douyin.523b91fc.webp',
						height: 1911,
						width: 1280,
						blurDataURL:
							'data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADQAQCdASoFAAgAAkA4JbACdAD0oTniEAD+t/Hu9t25nQye8/1/96NT58U3ZDifSD/zl6y4ZIlVhf/+k9WEQf/4C9DKJsWTM96UJh3QAAA=',
						blurWidth: 5,
						blurHeight: 8
					},
					qq: {
						src: '/docs/prinext/static/media/qq.a60b2ed6.webp',
						height: 1680,
						width: 954,
						blurDataURL:
							'data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADwAQCdASoFAAgAAkA4JZwCdH8AGBv/S+wA/vyYKtMCyivl1ri0qxYQRLxKPEWHWDAAAA==',
						blurWidth: 5,
						blurHeight: 8
					}
				},
				z = (e) => {
					let { platform: t, href: a, children: o } = e;
					return (0, i.jsxs)(c, {
						children: [
							(0, i.jsx)(d, { asChild: !0, children: o }),
							(0, i.jsx)(m, {
								className: 'sm:max-w-[425px] px-10 py-10',
								children: (0, i.jsx)('div', {
									className: 'relative  w-34 h-auto',
									children: (0, i.jsx)(E.default, {
										src: I[a],
										alt: null != t ? t : _.Z.authorsCN,
										unoptimized: !0,
										placeholder: 'blur',
										blurDataURL: (0, w.F)(16, 16),
										style: { width: '100%', height: 'auto' },
										sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
									})
								})
							})
						]
					});
				},
				C = (e) => {
					let { platform: t, href: a, children: o, ...n } = e;
					return ['邮箱'].includes(null != t ? t : '')
						? (0, i.jsx)('span', {
								onTouchEnd: () => N(a),
								onClick: () => N(a),
								children: o
							})
						: (0, i.jsx)(k.default, {
								href: a,
								target: '_blank',
								prefetch: !1,
								'aria-label': t,
								...n,
								children: o
							});
				};
			function R(e) {
				let { platform: t, href: a, isPicture: n, icon: s, ...r } = e,
					l = o[s];
				return (0, i.jsx)(x, {
					children: (0, i.jsxs)(f, {
						children: [
							(0, i.jsx)(A, {
								children: n
									? (0, i.jsx)(z, {
											platform: t,
											href: a,
											children:
												s &&
												(0, i.jsx)(l, {
													className:
														'text-2xl text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200'
												})
										})
									: (0, i.jsx)(C, {
											platform: t,
											href: a,
											...r,
											children:
												s &&
												(0, i.jsx)(l, {
													className:
														'text-2xl text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200'
												})
										})
							}),
							(0, i.jsx)(y.M, {
								children: (0, i.jsx)(g, {
									children: (0, i.jsx)(b, {
										children: (0, i.jsx)(j.E.div, {
											initial: { opacity: 0, scale: 0.96 },
											animate: { opacity: 1, scale: 1 },
											exit: { opacity: 0, scale: 0.95 },
											children: t
										})
									})
								})
							})
						]
					})
				});
			}
			var U = a(2117);
			function L() {
				return (0, i.jsxs)('span', {
					className: 'group',
					children: [
						(0, i.jsx)('span', { className: 'font-mono', children: '<' }),
						_.Z.authors,
						'\xa0',
						(0, i.jsx)('span', { className: 'font-mono', children: '/>' }),
						(0, i.jsx)('span', {
							className:
								"invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500"
						})
					]
				});
			}
			function D() {
				return (0, i.jsxs)('span', {
					className: 'group relative bg-black/5 p-1 dark:bg-white/5',
					children: [
						(0, i.jsxs)('span', {
							className:
								'pointer-events-none absolute inset-0 border border-violet-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-violet-400/90',
							children: [
								(0, i.jsx)('span', {
									className:
										'absolute -left-[3.5px] -top-[3.5px] size-1.5 border border-violet-700 bg-zinc-50 dark:border-violet-400'
								}),
								(0, i.jsx)('span', {
									className:
										'absolute -bottom-[3.5px] -right-[3.5px] size-1.5 border border-violet-700 bg-zinc-50 dark:border-violet-400'
								}),
								(0, i.jsx)('span', {
									className:
										'absolute -bottom-[3.5px] -left-[3.5px] size-1.5 border border-violet-700 bg-zinc-50 dark:border-violet-400'
								}),
								(0, i.jsx)('span', {
									className:
										'absolute -right-[3.5px] -top-[3.5px] size-1.5 border border-violet-700 bg-zinc-50 dark:border-violet-400'
								})
							]
						}),
						'开源爱好者'
					]
				});
			}
			function V() {
				return (0, i.jsxs)('span', {
					className: 'group inline-flex items-center',
					children: [
						(0, i.jsx)(o.SparkleIcon, {
							className:
								'mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180'
						}),
						(0, i.jsx)('span', { children: 'AI 深度患者' })
					]
				});
			}
			function Q() {
				return (0, i.jsxs)('span', {
					className: 'group inline-flex items-center',
					children: [
						(0, i.jsx)(o.SnailIcon, {
							className:
								'mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20'
						}),
						(0, i.jsx)('span', { children: '前端工程师' })
					]
				});
			}
			function T() {
				return (0, i.jsxs)('div', {
					className: 'max-w-3xl',
					children: [
						(0, i.jsxs)(j.E.h1, {
							className:
								'xs:text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl lg:text-5xl ',
							initial: { opacity: 0, y: 30 },
							animate: { opacity: 1, y: 0 },
							transition: {
								type: 'spring',
								damping: 25,
								stiffness: 100,
								duration: 0.3
							},
							children: [
								(0, i.jsx)(L, {}),
								'，',
								(0, i.jsx)(D, {}),
								'，',
								(0, i.jsx)('span', { className: 'block h-4' }),
								(0, i.jsx)(V, {}),
								'，',
								(0, i.jsx)(Q, {})
							]
						}),
						(0, i.jsx)(j.E.p, {
							className: 'mt-6 text-base text-zinc-600 dark:text-zinc-400',
							initial: { opacity: 0, y: 20 },
							animate: { opacity: 1, y: 0 },
							transition: {
								type: 'spring',
								damping: 30,
								stiffness: 85,
								duration: 0.3,
								delay: 0.1
							},
							children: (0, i.jsx)(U.ZP, { children: _.Z.description })
						}),
						(0, i.jsx)(j.E.div, {
							className: 'mt-6 flex gap-6 flex-wrap',
							initial: { opacity: 0, y: 10 },
							animate: { opacity: 1, y: 0 },
							transition: {
								type: 'spring',
								damping: 50,
								stiffness: 90,
								duration: 0.35,
								delay: 0.25
							},
							children: _.Z.social.map((e) =>
								e.hide
									? null
									: (0, i.jsx)(
											R,
											{
												isPicture: e.isPicture,
												href: e.href,
												icon: e.icon,
												'aria-label': e.text,
												platform: e.text
											},
											e.href
										)
							)
						})
					]
				});
			}
		},
		8454: function (e, t, a) {
			'use strict';
			let i = new URL('https://luckysnail.cn/'),
				o = {
					name: 'blog | 前端 | 开发者',
					description:
						'我是William Sun，一名充满热情的前端开发工程师。我热衷于探索和体验最新技术，特别是人工智能（AI），并在日常工作中去使用它们，来提升我的工作效率。我的目标是积极参与开源社区，为开源项目贡献自己的力量。正如我的名字，我相信越努力，越幸运',
					url: i.href,
					ogImage: i.origin + '/og.png',
					metadataBase: '/',
					keywords: [
						'blog',
						'前端',
						'开发者',
						'AI',
						'编程',
						'学习笔记',
						'程序员'
					],
					authors: 'William Sun',
					email: '4sh945@gmail.com',
					authorsCN: 'William Sun',
					authorsUrl: 'https://github.com/sunshihao',
					social: [
						{
							href: 'https://github.com/sunshihao',
							text: 'github',
							icon: 'GitHubIcon'
						},
						{ href: '4sh945@gmail.com', text: '邮箱', icon: 'MailIcon' },
						{
							href: 'https://x.com/haozhan05554957',
							text: '推特（X）',
							icon: 'XIcon'
						}
					],
					themeColors: [
						{ media: '(prefers-color-scheme: dark)', color: '#000212' },
						{ media: '(prefers-color-scheme: light)', color: '#fafafa' }
					],
					defaultNextTheme: 'dark',
					icons: {
						icon: '/favicon.ico',
						shortcut: '/logo.png',
						apple: '/logo.png'
					},
					navigationItems: [
						{ href: '/', text: '首页' },
						{ href: '/posts', text: '博客' },
						{ href: '/about', text: '关于我' }
					],
					moreItems: {
						'/more': [
							{ href: '/icon', text: '图标库' },
							{ href: '/admin', text: '管理' }
						]
					},
					footerItems: [{ href: '/blog', text: '首页' }],
					locale: 'zh-CN',
					siteHostList: ['luckysnail.cn', 'lucky-snail.vercel.app']
				},
				n = {
					...o,
					openGraph: {
						type: 'website',
						locale: o.locale,
						url: o.url,
						title: o.authors + o.name,
						description: o.description,
						siteName: o.name,
						images: [''.concat(o.url, 'og.png')]
					},
					twitter: {
						card: 'summary_large_image',
						title: o.authors + o.name,
						description: o.description,
						images: [''.concat(o.url, 'og.png')],
						creator: '@haozhan05554957'
					}
				};
			t.Z = n;
		},
		9371: function (e, t, a) {
			'use strict';
			a.d(t, {
				F: function () {
					return n;
				}
			});
			let i = (e, t) =>
					'\n<svg width="'
						.concat(e, '" height="')
						.concat(
							t,
							'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" opacity="0.5">\n  <defs>\n    <linearGradient id="g-image-shimmer">\n      <stop stop-color="#ccc" offset="20%" />\n      <stop stop-color="#eee" offset="50%" />\n      <stop stop-color="#ccc" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="'
						)
						.concat(e, '" height="')
						.concat(t, '" fill="#333" />\n  <rect id="r" width="')
						.concat(e, '" height="')
						.concat(
							t,
							'" fill="url(#g-image-shimmer)" />\n  <animate xlink:href="#r" attributeName="x" from="-'
						)
						.concat(e, '" to="')
						.concat(e, '" dur="1s" repeatCount="indefinite"  />\n</svg>'),
				o = (e) => window.btoa(e);
			function n(e, t) {
				return 'data:image/svg+xml;base64,'.concat(o(i(e, t)));
			}
		}
	},
	function (e) {
		e.O(0, [779, 739, 138, 245, 531, 455, 868, 936, 904, 744], function () {
			return e((e.s = 3872));
		}),
			(_N_E = e.O());
	}
]);
