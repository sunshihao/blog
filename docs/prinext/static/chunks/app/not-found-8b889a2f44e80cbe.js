(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[160],
	{
		9948: function (e, t, n) {
			Promise.resolve().then(n.bind(n, 3970));
		},
		4469: function (e, t, n) {
			'use strict';
			n.d(t, {
				default: function () {
					return s.a;
				}
			});
			var i = n(2219),
				s = n.n(i);
		},
		3970: function (e, t, n) {
			'use strict';
			n.r(t),
				n.d(t, {
					default: function () {
						return r;
					}
				});
			var i = n(8392),
				s = {
					src: '/docs/prinext/static/media/404.245c8995.svg',
					height: 571,
					width: 860,
					blurWidth: 0,
					blurHeight: 0
				},
				l = n(3290),
				a = n(9226),
				c = n(4469);
			function r() {
				return (0, i.jsxs)('main', {
					className: 'h-screen',
					children: [
						(0, i.jsx)('div', { className: 'absolute inset-0 h-full w-full' }),
						(0, i.jsxs)('div', {
							className:
								'pointer-events-none absolute inset-0 flex h-full w-full flex-col items-center justify-center',
							children: [
								(0, i.jsxs)(l.E.h1, {
									className:
										'mb-10 flex flex-col justify-center items-center pointer-events-none select-none text-3xl font-bold text-black dark:text-white ',
									initial: { opacity: 0, y: 30 },
									animate: { opacity: 1, y: 0 },
									transition: { duration: 0.3, delay: 0.3 },
									children: [
										(0, i.jsx)(a.default, {
											src: s,
											alt: '404 | luckySnail',
											unoptimized: !0,
											width: 320,
											className: 'mb-12'
										}),
										(0, i.jsx)('span', {
											className: 'text-violet-500 dark:text-violet-300',
											children: '来到了未知的位置'
										})
									]
								}),
								(0, i.jsx)(c.default, {
									href: '/',
									className:
										'pointer-events-auto select-none text-xl font-bold text-white mix-blend-difference hover:underline',
									children: '返回主页'
								})
							]
						})
					]
				});
			}
		}
	},
	function (e) {
		e.O(0, [779, 739, 936, 904, 744], function () {
			return e((e.s = 9948));
		}),
			(_N_E = e.O());
	}
]);
