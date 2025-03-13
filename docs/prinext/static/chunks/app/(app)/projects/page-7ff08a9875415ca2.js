(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[958],
	{
		5130: function (e, t, n) {
			Promise.resolve().then(n.bind(n, 6836)),
				Promise.resolve().then(n.bind(n, 3730)),
				Promise.resolve().then(n.bind(n, 9942)),
				Promise.resolve().then(n.bind(n, 918)),
				Promise.resolve().then(n.bind(n, 4599));
		},
		6564: function (e, t, n) {
			'use strict';
			function r(e, t) {
				return (
					t || (t = e.slice(0)),
					Object.freeze(
						Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
					)
				);
			}
			n.d(t, {
				_: function () {
					return r;
				}
			});
		},
		8283: function (e, t, n) {
			'use strict';
			n.d(t, {
				M: function () {
					return m;
				}
			});
			var r = n(8392),
				i = n(8949),
				s = n(8197),
				l = n(7047),
				a = n(5820),
				c = n(8378);
			class o extends i.Component {
				getSnapshotBeforeUpdate(e) {
					let t = this.props.childRef.current;
					if (t && e.isPresent && !this.props.isPresent) {
						let e = this.props.sizeRef.current;
						(e.height = t.offsetHeight || 0),
							(e.width = t.offsetWidth || 0),
							(e.top = t.offsetTop),
							(e.left = t.offsetLeft);
					}
					return null;
				}
				componentDidUpdate() {}
				render() {
					return this.props.children;
				}
			}
			function d(e) {
				let { children: t, isPresent: n } = e,
					s = (0, i.useId)(),
					l = (0, i.useRef)(null),
					a = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
					{ nonce: d } = (0, i.useContext)(c._);
				return (
					(0, i.useInsertionEffect)(() => {
						let { width: e, height: t, top: r, left: i } = a.current;
						if (n || !l.current || !e || !t) return;
						l.current.dataset.motionPopId = s;
						let c = document.createElement('style');
						return (
							d && (c.nonce = d),
							document.head.appendChild(c),
							c.sheet &&
								c.sheet.insertRule(
									'\n          [data-motion-pop-id="'
										.concat(
											s,
											'"] {\n            position: absolute !important;\n            width: '
										)
										.concat(e, 'px !important;\n            height: ')
										.concat(t, 'px !important;\n            top: ')
										.concat(r, 'px !important;\n            left: ')
										.concat(i, 'px !important;\n          }\n        ')
								),
							() => {
								document.head.removeChild(c);
							}
						);
					}, [n]),
					(0, r.jsx)(o, {
						isPresent: n,
						childRef: l,
						sizeRef: a,
						children: i.cloneElement(t, { ref: l })
					})
				);
			}
			let u = (e) => {
				let {
						children: t,
						initial: n,
						isPresent: s,
						onExitComplete: c,
						custom: o,
						presenceAffectsLayout: u,
						mode: h
					} = e,
					x = (0, l.h)(A),
					f = (0, i.useId)(),
					p = (0, i.useCallback)(
						(e) => {
							for (let t of (x.set(e, !0), x.values())) if (!t) return;
							c && c();
						},
						[x, c]
					),
					m = (0, i.useMemo)(
						() => ({
							id: f,
							initial: n,
							isPresent: s,
							custom: o,
							onExitComplete: p,
							register: (e) => (x.set(e, !1), () => x.delete(e))
						}),
						u ? [Math.random(), p] : [s, p]
					);
				return (
					(0, i.useMemo)(() => {
						x.forEach((e, t) => x.set(t, !1));
					}, [s]),
					i.useEffect(() => {
						s || x.size || !c || c();
					}, [s]),
					'popLayout' === h &&
						(t = (0, r.jsx)(d, { isPresent: s, children: t })),
					(0, r.jsx)(a.O.Provider, { value: m, children: t })
				);
			};
			function A() {
				return new Map();
			}
			var h = n(9344);
			let x = (e) => e.key || '';
			function f(e) {
				let t = [];
				return (
					i.Children.forEach(e, (e) => {
						(0, i.isValidElement)(e) && t.push(e);
					}),
					t
				);
			}
			var p = n(740);
			let m = (e) => {
				let {
						children: t,
						custom: n,
						initial: a = !0,
						onExitComplete: c,
						presenceAffectsLayout: o = !0,
						mode: d = 'sync',
						propagate: A = !1
					} = e,
					[m, g] = (0, h.oO)(A),
					b = (0, i.useMemo)(() => f(t), [t]),
					v = A && !m ? [] : b.map(x),
					w = (0, i.useRef)(!0),
					z = (0, i.useRef)(b),
					j = (0, l.h)(() => new Map()),
					[E, k] = (0, i.useState)(b),
					[R, N] = (0, i.useState)(b);
				(0, p.L)(() => {
					(w.current = !1), (z.current = b);
					for (let e = 0; e < R.length; e++) {
						let t = x(R[e]);
						v.includes(t) ? j.delete(t) : !0 !== j.get(t) && j.set(t, !1);
					}
				}, [R, v.length, v.join('-')]);
				let _ = [];
				if (b !== E) {
					let e = [...b];
					for (let t = 0; t < R.length; t++) {
						let n = R[t],
							r = x(n);
						v.includes(r) || (e.splice(t, 0, n), _.push(n));
					}
					'wait' === d && _.length && (e = _), N(f(e)), k(b);
					return;
				}
				let { forceRender: C } = (0, i.useContext)(s.p);
				return (0, r.jsx)(r.Fragment, {
					children: R.map((e) => {
						let t = x(e),
							i = (!A || !!m) && (b === R || v.includes(t));
						return (0, r.jsx)(
							u,
							{
								isPresent: i,
								initial: (!w.current || !!a) && void 0,
								custom: i ? void 0 : n,
								presenceAffectsLayout: o,
								mode: d,
								onExitComplete: i
									? void 0
									: () => {
											if (!j.has(t)) return;
											j.set(t, !0);
											let e = !0;
											j.forEach((t) => {
												t || (e = !1);
											}),
												e &&
													(null == C || C(),
													N(z.current),
													A && (null == g || g()),
													c && c());
										},
								children: e
							},
							t
						);
					})
				});
			};
		},
		5756: function (e, t, n) {
			'use strict';
			n.d(t, {
				Y: function () {
					return a;
				}
			});
			var r = n(6928),
				i = n(740),
				s = n(2898),
				l = n(6971);
			function a(e, ...t) {
				let n = e.length;
				return (function (e, t) {
					let n = (0, r.c)(t()),
						l = () => n.set(t());
					return (
						l(),
						(0, i.L)(() => {
							let t = () => s.Wi.preRender(l, !1, !0),
								n = e.map((e) => e.on('change', t));
							return () => {
								n.forEach((e) => e()), (0, s.Pn)(l);
							};
						}),
						n
					);
				})(t.filter(l.i), function () {
					let r = '';
					for (let i = 0; i < n; i++) {
						r += e[i];
						let n = t[i];
						n && (r += (0, l.i)(n) ? n.get() : n);
					}
					return r;
				});
			}
		},
		6928: function (e, t, n) {
			'use strict';
			n.d(t, {
				c: function () {
					return a;
				}
			});
			var r = n(8949),
				i = n(981),
				s = n(8378),
				l = n(7047);
			function a(e) {
				let t = (0, l.h)(() => (0, i.BX)(e)),
					{ isStatic: n } = (0, r.useContext)(s._);
				if (n) {
					let [, n] = (0, r.useState)(e);
					(0, r.useEffect)(() => t.on('change', n), []);
				}
				return t;
			}
		},
		4469: function (e, t, n) {
			'use strict';
			n.d(t, {
				default: function () {
					return i.a;
				}
			});
			var r = n(2219),
				i = n.n(r);
		},
		9942: function (e, t, n) {
			'use strict';
			n.d(t, {
				ProjectCard: function () {
					return g;
				}
			});
			var r = n(6564),
				i = n(8392),
				s = n(881),
				l = n(6066),
				a = (e) => {
					let { children: t, className: n, ...r } = e;
					return (0, i.jsx)('div', {
						className: (0, l.cn)(
							'inline-flex items-center rounded-md px-3  text-xs font-medium bg-violet-200 text-violet-500 hover:bg-purple-500 hover:text-violet-900 dark:bg-violet-300 dark:text-violet-700',
							n
						),
						...r,
						children: t
					});
				},
				c = n(4469);
			function o(e) {
				return (0, i.jsx)('svg', {
					viewBox: '0 0 16 16',
					fill: 'none',
					'aria-hidden': 'true',
					...e,
					children: (0, i.jsx)('path', {
						d: 'M6.75 5.75 9.25 8l-2.5 2.25',
						strokeWidth: '1.5',
						strokeLinecap: 'round',
						strokeLinejoin: 'round'
					})
				});
			}
			function d(e) {
				let { as: t = 'div', className: n, children: r, ...s } = e;
				return (0, i.jsx)(t, {
					className: (0, l.cn)(n, 'group relative flex flex-col items-start'),
					...s,
					children: r
				});
			}
			(d.Link = function (e) {
				let { children: t, ...n } = e;
				return (0, i.jsxs)(i.Fragment, {
					children: [
						(0, i.jsx)('div', {
							className:
								'absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-200/30 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700/20 sm:-inset-x-6 sm:rounded-2xl'
						}),
						(0, i.jsxs)(c.default, {
							...n,
							children: [
								(0, i.jsx)('span', {
									className:
										'absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl'
								}),
								(0, i.jsx)('span', { className: 'relative z-10', children: t })
							]
						})
					]
				});
			}),
				(d.Title = function (e) {
					let { as: t = 'h2', href: n, children: r } = e;
					return (0, i.jsx)(t, {
						className:
							'text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100',
						children: n ? (0, i.jsx)(d.Link, { href: n, children: r }) : r
					});
				}),
				(d.Description = function (e) {
					let { children: t, className: n } = e;
					return (0, i.jsx)('p', {
						className: (0, l.cn)(
							'relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400',
							n
						),
						children: t
					});
				}),
				(d.Cta = function (e) {
					let { children: t } = e;
					return (0, i.jsxs)('div', {
						'aria-hidden': 'true',
						className:
							'relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500',
						children: [
							t,
							(0, i.jsx)(o, { className: 'ml-1 h-4 w-4 stroke-current' })
						]
					});
				}),
				(d.Eyebrow = function (e) {
					let {
						as: t = 'p',
						decorate: n = !1,
						className: r,
						children: s,
						...a
					} = e;
					return (0, i.jsxs)(t, {
						className: (0, l.cn)(
							r,
							'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
							n && 'pl-3.5'
						),
						...a,
						children: [
							n &&
								(0, i.jsx)('span', {
									className: 'absolute inset-y-0 left-0 flex items-center',
									'aria-hidden': 'true',
									children: (0, i.jsx)('span', {
										className:
											'h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500'
									})
								}),
							s
						]
					});
				});
			var u = n(6928),
				A = n(5756),
				h = n(8283),
				x = n(3290),
				f = n(9226),
				p = n(8949);
			function m() {
				let e = (0, r._)([
					'radial-gradient(circle ',
					'px at ',
					'px ',
					'px, black 40%, transparent)'
				]);
				return (
					(m = function () {
						return e;
					}),
					e
				);
			}
			function g(e) {
				let { project: t } = e,
					{ id: n, url: r, icon: l, name: c, tags: o, description: g } = t,
					b = (0, u.c)(0),
					v = (0, u.c)(0),
					w = (0, u.c)(0),
					z = p.useCallback(
						(e) => {
							let { clientX: t, clientY: n, currentTarget: r } = e,
								i = r.getBoundingClientRect();
							b.set(t - i.left),
								v.set(n - i.top),
								w.set(Math.sqrt(i.width ** 2 + i.height ** 2) / 2);
						},
						[b, v, w]
					),
					j = (0, A.Y)(m(), w, b, v),
					[E, k] = p.useState(!1),
					R = new URL(null != r ? r : '').host;
				return (0, i.jsxs)(
					d,
					{
						as: 'li',
						onMouseEnter: () => k(!0),
						onMouseMove: z,
						onMouseLeave: () => k(!1),
						children: [
							(0, i.jsx)('div', {
								className:
									'relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0',
								children: (0, i.jsx)(f.default, {
									src: null != l ? l : '',
									alt: '',
									width: 36,
									height: 36,
									className: 'h-9 w-9 rounded-full',
									unoptimized: !0
								})
							}),
							(0, i.jsx)('h2', {
								className:
									'mt-6 text-base font-bold text-zinc-800 dark:text-zinc-100',
								children: (0, i.jsx)(d.Link, {
									href: null != r ? r : '',
									target: '_blank',
									children: c
								})
							}),
							(0, i.jsx)(d.Description, { children: g }),
							(0, i.jsx)('div', {
								className: 'mt-4',
								children:
									null == o
										? void 0
										: o.map((e) => (0, i.jsx)(a, { children: e }, e))
							}),
							(0, i.jsxs)('p', {
								className:
									'pointer-events-none relative z-40 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:text-violet-600 dark:text-zinc-200 dark:group-hover:text-violet-400',
								children: [
									(0, i.jsx)('span', { className: 'mr-2', children: R }),
									(0, i.jsx)(s.ExternalLinkIcon, {
										className: 'h-4 w-4 flex-none'
									})
								]
							}),
							(0, i.jsx)(h.M, {
								children:
									E &&
									(0, i.jsxs)(x.E.footer, {
										className:
											'pointer-events-none absolute -inset-x-4 -inset-y-6 z-30 select-none px-4 py-6 sm:-inset-x-6 sm:rounded-2xl sm:px-6',
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										style: { WebkitMaskImage: j },
										exit: { opacity: 0 },
										children: [
											(0, i.jsx)('div', {
												className:
													'absolute inset-x-px inset-y-px rounded-2xl border border-dashed border-zinc-900/30 dark:border-zinc-100/20'
											}),
											(0, i.jsx)('div', {
												className:
													'flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-zinc-900/20 bg-white dark:border-zinc-100/20 dark:bg-zinc-800',
												children: (0, i.jsx)('div', {
													className:
														'h-9 w-9 rounded-full border border-dashed border-zinc-900/40 dark:border-zinc-100/60 dark:bg-zinc-900/20'
												})
											}),
											(0, i.jsx)('h2', {
												className:
													'mt-6 text-base font-bold text-zinc-50 [text-shadow:rgb(0,0,0)_-0.5px_0.5px_0px,rgb(0,0,0)_0.5px_0.5px_0px,rgb(0,0,0)_0.5px_-0.5px_0px,rgb(0,0,0)_-0.5px_-0.5px_0px] dark:text-zinc-900 dark:[text-shadow:rgb(255,255,255)_-0.5px_0.5px_0px,rgb(255,255,255)_0.5px_0.5px_0px,rgb(255,255,255)_0.5px_-0.5px_0px,rgb(255,255,255)_-0.5px_-0.5px_0px]',
												children: c
											}),
											(0, i.jsx)('p', {
												className:
													'mt-2 text-sm text-zinc-600 opacity-50 dark:text-zinc-400',
												children: g
											})
										]
									})
							})
						]
					},
					n
				);
			}
		},
		6836: function (e, t, n) {
			'use strict';
			n.r(t),
				(t.default = {
					src: '/docs/prinext/static/media/logo.021a5ddd.png',
					height: 256,
					width: 256,
					blurDataURL:
						'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEVbXmNlZ2x/gIUCAgZMaXFjZWsLCxFwcncAAAAaHCRDRk13eX49QEeLjZGmp6omJyowMzqDhIlXWV9PUVeRk5gsLTISGb8hAAAADHRSTlOz6/gtAPYt8DD5sLQejz5NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nEXKSxKAIAwE0QESEnTCT+9/VouVu656DSnQfFeBp+AMc1zRxmgL0D17Jw36nNj2k6eXPLMUZEWVD1VAAlZYuQXCAAAAAElFTkSuQmCC',
					blurWidth: 8,
					blurHeight: 8
				});
		},
		3730: function (e, t, n) {
			'use strict';
			n.r(t),
				(t.default = {
					src: '/docs/prinext/static/media/npmIcon.75ed5b60.webp',
					height: 119,
					width: 185,
					blurDataURL:
						'data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoIAAUAAkA4JQBOiP/wNwebdiAA/vUHJh5MAw8/SiWqUuv+bYEJf1QeHULthfMu9iRps3bZTzz4AAAA',
					blurWidth: 8,
					blurHeight: 5
				});
		},
		918: function (e, t, n) {
			'use strict';
			n.r(t),
				(t.default = {
					src: '/docs/prinext/static/media/codecopy.6690d634.png',
					height: 128,
					width: 128,
					blurDataURL:
						'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEXr/weuxQXt/wfa+wbZ+wfg/wfK5QZMaXHf/wcxOgHb+gfW9QbS/wbT+QUOEADO7Abd/wXR7wbv/wd2iAOJngTR8gYZHQFkdANXZQOzzwZETwIuVKGwAAAAEnRSTlPx/ri7sP79APD+/jU2LP0qLvfzO4gvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAENJREFUeJwFwQcCgCAMBLADCm1ZahmO/z/UBNxIhA5GE4vRcMIn1ZkmQfRzrz7A1YetPQDv+h7uJlTktAwVXELMofAPX/wCqAD3AvUAAAAASUVORK5CYII=',
					blurWidth: 8,
					blurHeight: 8
				});
		},
		4599: function (e, t, n) {
			'use strict';
			n.r(t),
				(t.default = {
					src: '/docs/prinext/static/media/resume.39a15789.png',
					height: 64,
					width: 64,
					blurDataURL:
						'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEVMaXE8Zv+49f+z8vev7Phsn/xIbv+Kzf+w7vZHb/9Ufv9Ebf81XP9gj/+t6viKwfm09Pg+Zv+39/1Da//3v2v3AAAAEnRSTlMADAyx/P10A3Go/mmF/bz8p8Dh3mdaAAAACXBIWXMAAAsSAAALEgHS3X78AAAAPElEQVR4nBXLSRIAIQjAwKgg6Ozw/79OcUpfAvTeGoCN+1vVN67MZYyQ/eheeIiE5gSP0DzAcD8nVqqFH0G8Ac7xZZzVAAAAAElFTkSuQmCC',
					blurWidth: 8,
					blurHeight: 8
				});
		}
	},
	function (e) {
		e.O(0, [779, 739, 138, 868, 936, 904, 744], function () {
			return e((e.s = 5130));
		}),
			(_N_E = e.O());
	}
]);
