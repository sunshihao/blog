'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[739],
	{
		9344: function (t, e, i) {
			i.d(e, {
				oO: function () {
					return s;
				}
			});
			var n = i(8949),
				r = i(5820);
			function s(t = !0) {
				let e = (0, n.useContext)(r.O);
				if (null === e) return [!0, null];
				let { isPresent: i, onExitComplete: s, register: o } = e,
					a = (0, n.useId)();
				(0, n.useEffect)(() => {
					t && o(a);
				}, [t]);
				let l = (0, n.useCallback)(() => t && s && s(a), [a, s, t]);
				return !i && s ? [!1, l] : [!0];
			}
		},
		8197: function (t, e, i) {
			i.d(e, {
				p: function () {
					return n;
				}
			});
			let n = (0, i(8949).createContext)({});
		},
		8378: function (t, e, i) {
			i.d(e, {
				_: function () {
					return n;
				}
			});
			let n = (0, i(8949).createContext)({
				transformPagePoint: (t) => t,
				isStatic: !1,
				reducedMotion: 'never'
			});
		},
		5820: function (t, e, i) {
			i.d(e, {
				O: function () {
					return n;
				}
			});
			let n = (0, i(8949).createContext)(null);
		},
		9978: function (t, e, i) {
			i.d(e, {
				Z: function () {
					return s;
				}
			});
			var n = i(9881);
			let r = [
				'read',
				'resolveKeyframes',
				'update',
				'preRender',
				'render',
				'postRender'
			];
			function s(t, e) {
				let i = !1,
					s = !0,
					o = { delta: 0, timestamp: 0, isProcessing: !1 },
					a = () => (i = !0),
					l = r.reduce(
						(t, e) => (
							(t[e] = (function (t) {
								let e = new Set(),
									i = new Set(),
									n = !1,
									r = !1,
									s = new WeakSet(),
									o = { delta: 0, timestamp: 0, isProcessing: !1 };
								function a(e) {
									s.has(e) && (l.schedule(e), t()), e(o);
								}
								let l = {
									schedule: (t, r = !1, o = !1) => {
										let a = o && n ? e : i;
										return r && s.add(t), a.has(t) || a.add(t), t;
									},
									cancel: (t) => {
										i.delete(t), s.delete(t);
									},
									process: (t) => {
										if (((o = t), n)) {
											r = !0;
											return;
										}
										(n = !0),
											([e, i] = [i, e]),
											e.forEach(a),
											e.clear(),
											(n = !1),
											r && ((r = !1), l.process(t));
									}
								};
								return l;
							})(a)),
							t
						),
						{}
					),
					{
						read: u,
						resolveKeyframes: h,
						update: d,
						preRender: c,
						render: p,
						postRender: m
					} = l,
					f = () => {
						let r = n.c.useManualTiming ? o.timestamp : performance.now();
						(i = !1),
							(o.delta = s
								? 1e3 / 60
								: Math.max(Math.min(r - o.timestamp, 40), 1)),
							(o.timestamp = r),
							(o.isProcessing = !0),
							u.process(o),
							h.process(o),
							d.process(o),
							c.process(o),
							p.process(o),
							m.process(o),
							(o.isProcessing = !1),
							i && e && ((s = !1), t(f));
					},
					v = () => {
						(i = !0), (s = !0), o.isProcessing || t(f);
					};
				return {
					schedule: r.reduce((t, e) => {
						let n = l[e];
						return (
							(t[e] = (t, e = !1, r = !1) => (i || v(), n.schedule(t, e, r))), t
						);
					}, {}),
					cancel: (t) => {
						for (let e = 0; e < r.length; e++) l[r[e]].cancel(t);
					},
					state: o,
					steps: l
				};
			}
		},
		2898: function (t, e, i) {
			i.d(e, {
				Pn: function () {
					return s;
				},
				Wi: function () {
					return r;
				},
				frameData: function () {
					return o;
				},
				yL: function () {
					return a;
				}
			});
			var n = i(5611);
			let {
				schedule: r,
				cancel: s,
				state: o,
				steps: a
			} = (0, i(9978).Z)(
				'undefined' != typeof requestAnimationFrame
					? requestAnimationFrame
					: n.Z,
				!0
			);
		},
		2051: function (t, e, i) {
			let n;
			i.d(e, {
				X: function () {
					return a;
				}
			});
			var r = i(9881),
				s = i(2898);
			function o() {
				n = void 0;
			}
			let a = {
				now: () => (
					void 0 === n &&
						a.set(
							s.frameData.isProcessing || r.c.useManualTiming
								? s.frameData.timestamp
								: performance.now()
						),
					n
				),
				set: (t) => {
					(n = t), queueMicrotask(o);
				}
			};
		},
		3290: function (t, e, i) {
			function n(t) {
				return (
					null !== t && 'object' == typeof t && 'function' == typeof t.start
				);
			}
			i.d(e, {
				E: function () {
					return ra;
				}
			});
			let r = (t) => Array.isArray(t);
			function s(t, e) {
				if (!Array.isArray(e)) return !1;
				let i = e.length;
				if (i !== t.length) return !1;
				for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
				return !0;
			}
			function o(t) {
				return 'string' == typeof t || Array.isArray(t);
			}
			function a(t) {
				let e = [{}, {}];
				return (
					null == t ||
						t.values.forEach((t, i) => {
							(e[0][i] = t.get()), (e[1][i] = t.getVelocity());
						}),
					e
				);
			}
			function l(t, e, i, n) {
				if ('function' == typeof e) {
					let [r, s] = a(n);
					e = e(void 0 !== i ? i : t.custom, r, s);
				}
				if (
					('string' == typeof e && (e = t.variants && t.variants[e]),
					'function' == typeof e)
				) {
					let [r, s] = a(n);
					e = e(void 0 !== i ? i : t.custom, r, s);
				}
				return e;
			}
			function u(t, e, i) {
				let n = t.getProps();
				return l(n, e, void 0 !== i ? i : n.custom, t);
			}
			let h = [
					'animate',
					'whileInView',
					'whileFocus',
					'whileHover',
					'whileTap',
					'whileDrag',
					'exit'
				],
				d = ['initial', ...h];
			var c,
				p,
				m,
				f = i(9675);
			let v = [
					'transformPerspective',
					'x',
					'y',
					'z',
					'translateX',
					'translateY',
					'translateZ',
					'scale',
					'scaleX',
					'scaleY',
					'rotate',
					'rotateX',
					'rotateY',
					'rotateZ',
					'skew',
					'skewX',
					'skewY'
				],
				g = new Set(v),
				y = new Set([
					'width',
					'height',
					'top',
					'left',
					'right',
					'bottom',
					...v
				]),
				x = (t) => !!(t && 'object' == typeof t && t.mix && t.toValue),
				P = (t) => (r(t) ? t[t.length - 1] || 0 : t);
			var w = i(981),
				T = i(6971);
			function b(t, e) {
				let i = t.getValue('willChange');
				if ((0, T.i)(i) && i.add) return i.add(e);
			}
			let S = (t) => t.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
				A = 'data-' + S('framerAppearId');
			var V = i(3964),
				D = i(2898),
				E = i(9881);
			let M = { current: !1 };
			var C = i(5611);
			let R = (t, e, i) =>
				(((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
			function k(t, e, i, n) {
				if (t === e && i === n) return C.Z;
				let r = (e) =>
					(function (t, e, i, n, r) {
						let s, o;
						let a = 0;
						do (s = R((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
						while (Math.abs(s) > 1e-7 && ++a < 12);
						return o;
					})(e, 0, 1, t, i);
				return (t) => (0 === t || 1 === t ? t : R(r(t), e, n));
			}
			let L = (t) => (e) =>
					e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
				j = (t) => (e) => 1 - t(1 - e),
				F = k(0.33, 1.53, 0.69, 0.99),
				B = j(F),
				O = L(B),
				I = (t) =>
					(t *= 2) < 1 ? 0.5 * B(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
				W = (t) => 1 - Math.sin(Math.acos(t)),
				$ = j(W),
				U = L(W),
				N = (t) => /^0[^.\s]+$/u.test(t);
			var X = i(6625),
				z = i(2362);
			let Y = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
			function K(t) {
				let [e, i] = t.slice(0, -1).split('(');
				if ('drop-shadow' === e) return t;
				let [n] = i.match(z.K) || [];
				if (!n) return t;
				let r = i.replace(n, ''),
					s = Y.has(e) ? 1 : 0;
				return n !== i && (s *= 100), e + '(' + s + r + ')';
			}
			let H = /\b([a-z-]*)\(.*?\)/gu,
				Z = {
					...X.P,
					getAnimatableNone: (t) => {
						let e = t.match(H);
						return e ? e.map(K).join(' ') : t;
					}
				};
			var q = i(6514),
				_ = i(2205),
				G = i(6428);
			let J = {
					borderWidth: G.px,
					borderTopWidth: G.px,
					borderRightWidth: G.px,
					borderBottomWidth: G.px,
					borderLeftWidth: G.px,
					borderRadius: G.px,
					radius: G.px,
					borderTopLeftRadius: G.px,
					borderTopRightRadius: G.px,
					borderBottomRightRadius: G.px,
					borderBottomLeftRadius: G.px,
					width: G.px,
					maxWidth: G.px,
					height: G.px,
					maxHeight: G.px,
					top: G.px,
					right: G.px,
					bottom: G.px,
					left: G.px,
					padding: G.px,
					paddingTop: G.px,
					paddingRight: G.px,
					paddingBottom: G.px,
					paddingLeft: G.px,
					margin: G.px,
					marginTop: G.px,
					marginRight: G.px,
					marginBottom: G.px,
					marginLeft: G.px,
					backgroundPositionX: G.px,
					backgroundPositionY: G.px
				},
				Q = {
					rotate: G.RW,
					rotateX: G.RW,
					rotateY: G.RW,
					rotateZ: G.RW,
					scale: _.bA,
					scaleX: _.bA,
					scaleY: _.bA,
					scaleZ: _.bA,
					skew: G.RW,
					skewX: G.RW,
					skewY: G.RW,
					distance: G.px,
					translateX: G.px,
					translateY: G.px,
					translateZ: G.px,
					x: G.px,
					y: G.px,
					z: G.px,
					perspective: G.px,
					transformPerspective: G.px,
					opacity: _.Fq,
					originX: G.$C,
					originY: G.$C,
					originZ: G.px
				},
				tt = { ..._.Rx, transform: Math.round },
				te = {
					...J,
					...Q,
					zIndex: tt,
					size: G.px,
					fillOpacity: _.Fq,
					strokeOpacity: _.Fq,
					numOctaves: tt
				},
				ti = {
					...te,
					color: q.$,
					backgroundColor: q.$,
					outlineColor: q.$,
					fill: q.$,
					stroke: q.$,
					borderColor: q.$,
					borderTopColor: q.$,
					borderRightColor: q.$,
					borderBottomColor: q.$,
					borderLeftColor: q.$,
					filter: Z,
					WebkitFilter: Z
				},
				tn = (t) => ti[t];
			function tr(t, e) {
				let i = tn(t);
				return (
					i !== Z && (i = X.P),
					i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
				);
			}
			let ts = new Set(['auto', 'none', '0']),
				to = (t) => t === _.Rx || t === G.px,
				ta = (t, e) => parseFloat(t.split(', ')[e]),
				tl =
					(t, e) =>
					(i, { transform: n }) => {
						if ('none' === n || !n) return 0;
						let r = n.match(/^matrix3d\((.+)\)$/u);
						if (r) return ta(r[1], e);
						{
							let e = n.match(/^matrix\((.+)\)$/u);
							return e ? ta(e[1], t) : 0;
						}
					},
				tu = new Set(['x', 'y', 'z']),
				th = v.filter((t) => !tu.has(t)),
				td = {
					width: ({ x: t }, { paddingLeft: e = '0', paddingRight: i = '0' }) =>
						t.max - t.min - parseFloat(e) - parseFloat(i),
					height: ({ y: t }, { paddingTop: e = '0', paddingBottom: i = '0' }) =>
						t.max - t.min - parseFloat(e) - parseFloat(i),
					top: (t, { top: e }) => parseFloat(e),
					left: (t, { left: e }) => parseFloat(e),
					bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
					right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
					x: tl(4, 13),
					y: tl(5, 14)
				};
			(td.translateX = td.x), (td.translateY = td.y);
			let tc = new Set(),
				tp = !1,
				tm = !1;
			function tf() {
				if (tm) {
					let t = Array.from(tc).filter((t) => t.needsMeasurement),
						e = new Set(t.map((t) => t.element)),
						i = new Map();
					e.forEach((t) => {
						let e = (function (t) {
							let e = [];
							return (
								th.forEach((i) => {
									let n = t.getValue(i);
									void 0 !== n &&
										(e.push([i, n.get()]),
										n.set(i.startsWith('scale') ? 1 : 0));
								}),
								e
							);
						})(t);
						e.length && (i.set(t, e), t.render());
					}),
						t.forEach((t) => t.measureInitialState()),
						e.forEach((t) => {
							t.render();
							let e = i.get(t);
							e &&
								e.forEach(([e, i]) => {
									var n;
									null === (n = t.getValue(e)) || void 0 === n || n.set(i);
								});
						}),
						t.forEach((t) => t.measureEndState()),
						t.forEach((t) => {
							void 0 !== t.suspendedScrollY &&
								window.scrollTo(0, t.suspendedScrollY);
						});
				}
				(tm = !1), (tp = !1), tc.forEach((t) => t.complete()), tc.clear();
			}
			function tv() {
				tc.forEach((t) => {
					t.readKeyframes(), t.needsMeasurement && (tm = !0);
				});
			}
			class tg {
				constructor(t, e, i, n, r, s = !1) {
					(this.isComplete = !1),
						(this.isAsync = !1),
						(this.needsMeasurement = !1),
						(this.isScheduled = !1),
						(this.unresolvedKeyframes = [...t]),
						(this.onComplete = e),
						(this.name = i),
						(this.motionValue = n),
						(this.element = r),
						(this.isAsync = s);
				}
				scheduleResolve() {
					(this.isScheduled = !0),
						this.isAsync
							? (tc.add(this),
								tp || ((tp = !0), D.Wi.read(tv), D.Wi.resolveKeyframes(tf)))
							: (this.readKeyframes(), this.complete());
				}
				readKeyframes() {
					let {
						unresolvedKeyframes: t,
						name: e,
						element: i,
						motionValue: n
					} = this;
					for (let r = 0; r < t.length; r++)
						if (null === t[r]) {
							if (0 === r) {
								let r = null == n ? void 0 : n.get(),
									s = t[t.length - 1];
								if (void 0 !== r) t[0] = r;
								else if (i && e) {
									let n = i.readValue(e, s);
									null != n && (t[0] = n);
								}
								void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
							} else t[r] = t[r - 1];
						}
				}
				setFinalKeyframe() {}
				measureInitialState() {}
				renderEndStyles() {}
				measureEndState() {}
				complete() {
					(this.isComplete = !0),
						this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
						tc.delete(this);
				}
				cancel() {
					this.isComplete || ((this.isScheduled = !1), tc.delete(this));
				}
				resume() {
					this.isComplete || this.scheduleResolve();
				}
			}
			var ty = i(7416);
			let tx = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
			var tP = i(9193);
			let tw = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
				tT = (t) => (e) => e.test(t),
				tb = [
					_.Rx,
					G.px,
					G.aQ,
					G.RW,
					G.vw,
					G.vh,
					{ test: (t) => 'auto' === t, parse: (t) => t }
				],
				tS = (t) => tb.find(tT(t));
			class tA extends tg {
				constructor(t, e, i, n, r) {
					super(t, e, i, n, r, !0);
				}
				readKeyframes() {
					let { unresolvedKeyframes: t, element: e, name: i } = this;
					if (!e || !e.current) return;
					super.readKeyframes();
					for (let i = 0; i < t.length; i++) {
						let n = t[i];
						if ('string' == typeof n && ((n = n.trim()), (0, tP.t)(n))) {
							let r = (function t(e, i, n = 1) {
								(0, ty.k)(
									n <= 4,
									`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
								);
								let [r, s] = (function (t) {
									let e = tw.exec(t);
									if (!e) return [,];
									let [, i, n, r] = e;
									return [`--${null != i ? i : n}`, r];
								})(e);
								if (!r) return;
								let o = window.getComputedStyle(i).getPropertyValue(r);
								if (o) {
									let t = o.trim();
									return tx(t) ? parseFloat(t) : t;
								}
								return (0, tP.t)(s) ? t(s, i, n + 1) : s;
							})(n, e.current);
							void 0 !== r && (t[i] = r),
								i === t.length - 1 && (this.finalKeyframe = n);
						}
					}
					if ((this.resolveNoneKeyframes(), !y.has(i) || 2 !== t.length))
						return;
					let [n, r] = t,
						s = tS(n),
						o = tS(r);
					if (s !== o) {
						if (to(s) && to(o))
							for (let e = 0; e < t.length; e++) {
								let i = t[e];
								'string' == typeof i && (t[e] = parseFloat(i));
							}
						else this.needsMeasurement = !0;
					}
				}
				resolveNoneKeyframes() {
					let { unresolvedKeyframes: t, name: e } = this,
						i = [];
					for (let e = 0; e < t.length; e++) {
						var n;
						('number' == typeof (n = t[e])
							? 0 === n
							: null === n || 'none' === n || '0' === n || N(n)) && i.push(e);
					}
					i.length &&
						(function (t, e, i) {
							let n,
								r = 0;
							for (; r < t.length && !n; ) {
								let e = t[r];
								'string' == typeof e &&
									!ts.has(e) &&
									(0, X.V)(e).values.length &&
									(n = t[r]),
									r++;
							}
							if (n && i) for (let r of e) t[r] = tr(i, n);
						})(t, i, e);
				}
				measureInitialState() {
					let { element: t, unresolvedKeyframes: e, name: i } = this;
					if (!t || !t.current) return;
					'height' === i && (this.suspendedScrollY = window.pageYOffset),
						(this.measuredOrigin = td[i](
							t.measureViewportBox(),
							window.getComputedStyle(t.current)
						)),
						(e[0] = this.measuredOrigin);
					let n = e[e.length - 1];
					void 0 !== n && t.getValue(i, n).jump(n, !1);
				}
				measureEndState() {
					var t;
					let { element: e, name: i, unresolvedKeyframes: n } = this;
					if (!e || !e.current) return;
					let r = e.getValue(i);
					r && r.jump(this.measuredOrigin, !1);
					let s = n.length - 1,
						o = n[s];
					(n[s] = td[i](
						e.measureViewportBox(),
						window.getComputedStyle(e.current)
					)),
						null !== o &&
							void 0 === this.finalKeyframe &&
							(this.finalKeyframe = o),
						(null === (t = this.removedTransforms) || void 0 === t
							? void 0
							: t.length) &&
							this.removedTransforms.forEach(([t, i]) => {
								e.getValue(t).set(i);
							}),
						this.resolveNoneKeyframes();
				}
			}
			var tV = i(2051);
			let tD = (t, e) =>
					'zIndex' !== e &&
					!!(
						'number' == typeof t ||
						Array.isArray(t) ||
						('string' == typeof t &&
							(X.P.test(t) || '0' === t) &&
							!t.startsWith('url('))
					),
				tE = (t) => null !== t;
			function tM(t, { repeat: e, repeatType: i = 'loop' }, n) {
				let r = t.filter(tE),
					s = e && 'loop' !== i && e % 2 == 1 ? 0 : r.length - 1;
				return s && void 0 !== n ? n : r[s];
			}
			class tC {
				constructor({
					autoplay: t = !0,
					delay: e = 0,
					type: i = 'keyframes',
					repeat: n = 0,
					repeatDelay: r = 0,
					repeatType: s = 'loop',
					...o
				}) {
					(this.isStopped = !1),
						(this.hasAttemptedResolve = !1),
						(this.createdAt = tV.X.now()),
						(this.options = {
							autoplay: t,
							delay: e,
							type: i,
							repeat: n,
							repeatDelay: r,
							repeatType: s,
							...o
						}),
						this.updateFinishedPromise();
				}
				calcStartTime() {
					return this.resolvedAt && this.resolvedAt - this.createdAt > 40
						? this.resolvedAt
						: this.createdAt;
				}
				get resolved() {
					return (
						this._resolved || this.hasAttemptedResolve || (tv(), tf()),
						this._resolved
					);
				}
				onKeyframesResolved(t, e) {
					(this.resolvedAt = tV.X.now()), (this.hasAttemptedResolve = !0);
					let {
						name: i,
						type: n,
						velocity: r,
						delay: s,
						onComplete: o,
						onUpdate: a,
						isGenerator: l
					} = this.options;
					if (
						!l &&
						!(function (t, e, i, n) {
							let r = t[0];
							if (null === r) return !1;
							if ('display' === e || 'visibility' === e) return !0;
							let s = t[t.length - 1],
								o = tD(r, e),
								a = tD(s, e);
							return (
								(0, ty.K)(
									o === a,
									`You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
								),
								!!o &&
									!!a &&
									((function (t) {
										let e = t[0];
										if (1 === t.length) return !0;
										for (let i = 0; i < t.length; i++)
											if (t[i] !== e) return !0;
									})(t) ||
										(('spring' === i || (0, f.xD)(i)) && n))
							);
						})(t, i, n, r)
					) {
						if (M.current || !s) {
							a && a(tM(t, this.options, e)),
								o && o(),
								this.resolveFinishedPromise();
							return;
						}
						this.options.duration = 0;
					}
					let u = this.initPlayback(t, e);
					!1 !== u &&
						((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
						this.onPostResolved());
				}
				onPostResolved() {}
				then(t, e) {
					return this.currentFinishedPromise.then(t, e);
				}
				flatten() {
					(this.options.type = 'keyframes'), (this.options.ease = 'linear');
				}
				updateFinishedPromise() {
					this.currentFinishedPromise = new Promise((t) => {
						this.resolveFinishedPromise = t;
					});
				}
			}
			var tR = i(7131),
				tk = i(2193),
				tL = i(7061),
				tj = i(2486);
			function tF(t, e, i) {
				let n = Math.max(e - 5, 0);
				return (0, tj.R)(i - t(n), e - n);
			}
			let tB = {
				stiffness: 100,
				damping: 10,
				mass: 1,
				velocity: 0,
				duration: 800,
				bounce: 0.3,
				visualDuration: 0.3,
				restSpeed: { granular: 0.01, default: 2 },
				restDelta: { granular: 0.005, default: 0.5 },
				minDuration: 0.01,
				maxDuration: 10,
				minDamping: 0.05,
				maxDamping: 1
			};
			function tO(t, e) {
				return t * Math.sqrt(1 - e * e);
			}
			let tI = ['duration', 'bounce'],
				tW = ['stiffness', 'damping', 'mass'];
			function t$(t, e) {
				return e.some((e) => void 0 !== t[e]);
			}
			function tU(t = tB.visualDuration, e = tB.bounce) {
				let i;
				let n =
						'object' != typeof t
							? { visualDuration: t, keyframes: [0, 1], bounce: e }
							: t,
					{ restSpeed: r, restDelta: s } = n,
					o = n.keyframes[0],
					a = n.keyframes[n.keyframes.length - 1],
					l = { done: !1, value: o },
					{
						stiffness: u,
						damping: h,
						mass: d,
						duration: c,
						velocity: p,
						isResolvedFromDuration: m
					} = (function (t) {
						let e = {
							velocity: tB.velocity,
							stiffness: tB.stiffness,
							damping: tB.damping,
							mass: tB.mass,
							isResolvedFromDuration: !1,
							...t
						};
						if (!t$(t, tW) && t$(t, tI)) {
							if (t.visualDuration) {
								let i = (2 * Math.PI) / (1.2 * t.visualDuration),
									n = i * i,
									r =
										2 * (0, tR.u)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
								e = { ...e, mass: tB.mass, stiffness: n, damping: r };
							} else {
								let i = (function ({
									duration: t = tB.duration,
									bounce: e = tB.bounce,
									velocity: i = tB.velocity,
									mass: n = tB.mass
								}) {
									let r, s;
									(0, ty.K)(
										t <= (0, V.w)(tB.maxDuration),
										'Spring duration must be 10 seconds or less'
									);
									let o = 1 - e;
									(o = (0, tR.u)(tB.minDamping, tB.maxDamping, o)),
										(t = (0, tR.u)(
											tB.minDuration,
											tB.maxDuration,
											(0, V.X)(t)
										)),
										o < 1
											? ((r = (e) => {
													let n = e * o,
														r = n * t;
													return 0.001 - ((n - i) / tO(e, o)) * Math.exp(-r);
												}),
												(s = (e) => {
													let n = e * o * t,
														s = Math.pow(o, 2) * Math.pow(e, 2) * t,
														a = tO(Math.pow(e, 2), o);
													return (
														((n * i + i - s) *
															Math.exp(-n) *
															(-r(e) + 0.001 > 0 ? -1 : 1)) /
														a
													);
												}))
											: ((r = (e) =>
													-0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
												(s = (e) => t * t * (i - e) * Math.exp(-e * t)));
									let a = (function (t, e, i) {
										let n = i;
										for (let i = 1; i < 12; i++) n -= t(n) / e(n);
										return n;
									})(r, s, 5 / t);
									if (((t = (0, V.w)(t)), isNaN(a)))
										return {
											stiffness: tB.stiffness,
											damping: tB.damping,
											duration: t
										};
									{
										let e = Math.pow(a, 2) * n;
										return {
											stiffness: e,
											damping: 2 * o * Math.sqrt(n * e),
											duration: t
										};
									}
								})(t);
								(e = { ...e, ...i, mass: tB.mass }).isResolvedFromDuration = !0;
							}
						}
						return e;
					})({ ...n, velocity: -(0, V.X)(n.velocity || 0) }),
					v = p || 0,
					g = h / (2 * Math.sqrt(u * d)),
					y = a - o,
					x = (0, V.X)(Math.sqrt(u / d)),
					P = 5 > Math.abs(y);
				if (
					(r || (r = P ? tB.restSpeed.granular : tB.restSpeed.default),
					s || (s = P ? tB.restDelta.granular : tB.restDelta.default),
					g < 1)
				) {
					let t = tO(x, g);
					i = (e) =>
						a -
						Math.exp(-g * x * e) *
							(((v + g * x * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
				} else if (1 === g)
					i = (t) => a - Math.exp(-x * t) * (y + (v + x * y) * t);
				else {
					let t = x * Math.sqrt(g * g - 1);
					i = (e) => {
						let i = Math.exp(-g * x * e),
							n = Math.min(t * e, 300);
						return (
							a -
							(i * ((v + g * x * y) * Math.sinh(n) + t * y * Math.cosh(n))) / t
						);
					};
				}
				let w = {
					calculatedDuration: (m && c) || null,
					next: (t) => {
						let e = i(t);
						if (m) l.done = t >= c;
						else {
							let n = 0;
							g < 1 && (n = 0 === t ? (0, V.w)(v) : tF(i, t, e));
							let o = Math.abs(n) <= r,
								u = Math.abs(a - e) <= s;
							l.done = o && u;
						}
						return (l.value = l.done ? a : e), l;
					},
					toString: () => {
						let t = Math.min((0, f.iI)(w), f.EO),
							e = (0, f.wk)((e) => w.next(t * e).value, t, 30);
						return t + 'ms ' + e;
					}
				};
				return w;
			}
			function tN({
				keyframes: t,
				velocity: e = 0,
				power: i = 0.8,
				timeConstant: n = 325,
				bounceDamping: r = 10,
				bounceStiffness: s = 500,
				modifyTarget: o,
				min: a,
				max: l,
				restDelta: u = 0.5,
				restSpeed: h
			}) {
				let d, c;
				let p = t[0],
					m = { done: !1, value: p },
					f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
					v = (t) =>
						void 0 === a
							? l
							: void 0 === l
								? a
								: Math.abs(a - t) < Math.abs(l - t)
									? a
									: l,
					g = i * e,
					y = p + g,
					x = void 0 === o ? y : o(y);
				x !== y && (g = x - p);
				let P = (t) => -g * Math.exp(-t / n),
					w = (t) => x + P(t),
					T = (t) => {
						let e = P(t),
							i = w(t);
						(m.done = Math.abs(e) <= u), (m.value = m.done ? x : i);
					},
					b = (t) => {
						f(m.value) &&
							((d = t),
							(c = tU({
								keyframes: [m.value, v(m.value)],
								velocity: tF(w, t, m.value),
								damping: r,
								stiffness: s,
								restDelta: u,
								restSpeed: h
							})));
					};
				return (
					b(0),
					{
						calculatedDuration: null,
						next: (t) => {
							let e = !1;
							return (c || void 0 !== d || ((e = !0), T(t), b(t)),
							void 0 !== d && t >= d)
								? c.next(t - d)
								: (e || T(t), m);
						}
					}
				);
			}
			let tX = k(0.42, 0, 1, 1),
				tz = k(0, 0, 0.58, 1),
				tY = k(0.42, 0, 0.58, 1),
				tK = (t) => Array.isArray(t) && 'number' != typeof t[0],
				tH = {
					linear: C.Z,
					easeIn: tX,
					easeInOut: tY,
					easeOut: tz,
					circIn: W,
					circInOut: U,
					circOut: $,
					backIn: B,
					backInOut: O,
					backOut: F,
					anticipate: I
				},
				tZ = (t) => {
					if ((0, f.qE)(t)) {
						(0, ty.k)(
							4 === t.length,
							'Cubic bezier arrays must contain four numerical values.'
						);
						let [e, i, n, r] = t;
						return k(e, i, n, r);
					}
					return 'string' == typeof t
						? ((0, ty.k)(void 0 !== tH[t], `Invalid easing type '${t}'`), tH[t])
						: t;
				};
			var tq = i(9831),
				t_ = i(1911);
			function tG({
				duration: t = 300,
				keyframes: e,
				times: i,
				ease: n = 'easeInOut'
			}) {
				let r = tK(n) ? n.map(tZ) : tZ(n),
					s = { done: !1, value: e[0] },
					o = (i && i.length === e.length ? i : (0, t_.Y)(e)).map((e) => e * t),
					a = (0, tq.s)(o, e, {
						ease: Array.isArray(r)
							? r
							: e.map(() => r || tY).splice(0, e.length - 1)
					});
				return {
					calculatedDuration: t,
					next: (e) => ((s.value = a(e)), (s.done = e >= t), s)
				};
			}
			let tJ = (t) => {
					let e = ({ timestamp: e }) => t(e);
					return {
						start: () => D.Wi.update(e, !0),
						stop: () => (0, D.Pn)(e),
						now: () =>
							D.frameData.isProcessing ? D.frameData.timestamp : tV.X.now()
					};
				},
				tQ = { decay: tN, inertia: tN, tween: tG, keyframes: tG, spring: tU },
				t0 = (t) => t / 100;
			class t1 extends tC {
				constructor(t) {
					super(t),
						(this.holdTime = null),
						(this.cancelTime = null),
						(this.currentTime = 0),
						(this.playbackSpeed = 1),
						(this.pendingPlayState = 'running'),
						(this.startTime = null),
						(this.state = 'idle'),
						(this.stop = () => {
							if (
								(this.resolver.cancel(),
								(this.isStopped = !0),
								'idle' === this.state)
							)
								return;
							this.teardown();
							let { onStop: t } = this.options;
							t && t();
						});
					let {
							name: e,
							motionValue: i,
							element: n,
							keyframes: r
						} = this.options,
						s = (null == n ? void 0 : n.KeyframeResolver) || tg;
					(this.resolver = new s(
						r,
						(t, e) => this.onKeyframesResolved(t, e),
						e,
						i,
						n
					)),
						this.resolver.scheduleResolve();
				}
				flatten() {
					super.flatten(),
						this._resolved &&
							Object.assign(
								this._resolved,
								this.initPlayback(this._resolved.keyframes)
							);
				}
				initPlayback(t) {
					let e, i;
					let {
							type: n = 'keyframes',
							repeat: r = 0,
							repeatDelay: s = 0,
							repeatType: o,
							velocity: a = 0
						} = this.options,
						l = (0, f.xD)(n) ? n : tQ[n] || tG;
					l !== tG &&
						'number' != typeof t[0] &&
						((e = (0, tL.z)(t0, (0, tk.C)(t[0], t[1]))), (t = [0, 100]));
					let u = l({ ...this.options, keyframes: t });
					'mirror' === o &&
						(i = l({
							...this.options,
							keyframes: [...t].reverse(),
							velocity: -a
						})),
						null === u.calculatedDuration &&
							(u.calculatedDuration = (0, f.iI)(u));
					let { calculatedDuration: h } = u,
						d = h + s;
					return {
						generator: u,
						mirroredGenerator: i,
						mapPercentToKeyframes: e,
						calculatedDuration: h,
						resolvedDuration: d,
						totalDuration: d * (r + 1) - s
					};
				}
				onPostResolved() {
					let { autoplay: t = !0 } = this.options;
					this.play(),
						'paused' !== this.pendingPlayState && t
							? (this.state = this.pendingPlayState)
							: this.pause();
				}
				tick(t, e = !1) {
					let { resolved: i } = this;
					if (!i) {
						let { keyframes: t } = this.options;
						return { done: !0, value: t[t.length - 1] };
					}
					let {
						finalKeyframe: n,
						generator: r,
						mirroredGenerator: s,
						mapPercentToKeyframes: o,
						keyframes: a,
						calculatedDuration: l,
						totalDuration: u,
						resolvedDuration: h
					} = i;
					if (null === this.startTime) return r.next(0);
					let {
						delay: d,
						repeat: c,
						repeatType: p,
						repeatDelay: m,
						onUpdate: f
					} = this.options;
					this.speed > 0
						? (this.startTime = Math.min(this.startTime, t))
						: this.speed < 0 &&
							(this.startTime = Math.min(t - u / this.speed, this.startTime)),
						e
							? (this.currentTime = t)
							: null !== this.holdTime
								? (this.currentTime = this.holdTime)
								: (this.currentTime =
										Math.round(t - this.startTime) * this.speed);
					let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
						g = this.speed >= 0 ? v < 0 : v > u;
					(this.currentTime = Math.max(v, 0)),
						'finished' === this.state &&
							null === this.holdTime &&
							(this.currentTime = u);
					let y = this.currentTime,
						x = r;
					if (c) {
						let t = Math.min(this.currentTime, u) / h,
							e = Math.floor(t),
							i = t % 1;
						!i && t >= 1 && (i = 1),
							1 === i && e--,
							(e = Math.min(e, c + 1)) % 2 &&
								('reverse' === p
									? ((i = 1 - i), m && (i -= m / h))
									: 'mirror' === p && (x = s)),
							(y = (0, tR.u)(0, 1, i) * h);
					}
					let P = g ? { done: !1, value: a[0] } : x.next(y);
					o && (P.value = o(P.value));
					let { done: w } = P;
					g ||
						null === l ||
						(w =
							this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
					let T =
						null === this.holdTime &&
						('finished' === this.state || ('running' === this.state && w));
					return (
						T && void 0 !== n && (P.value = tM(a, this.options, n)),
						f && f(P.value),
						T && this.finish(),
						P
					);
				}
				get duration() {
					let { resolved: t } = this;
					return t ? (0, V.X)(t.calculatedDuration) : 0;
				}
				get time() {
					return (0, V.X)(this.currentTime);
				}
				set time(t) {
					(t = (0, V.w)(t)),
						(this.currentTime = t),
						null !== this.holdTime || 0 === this.speed
							? (this.holdTime = t)
							: this.driver &&
								(this.startTime = this.driver.now() - t / this.speed);
				}
				get speed() {
					return this.playbackSpeed;
				}
				set speed(t) {
					let e = this.playbackSpeed !== t;
					(this.playbackSpeed = t),
						e && (this.time = (0, V.X)(this.currentTime));
				}
				play() {
					if (
						(this.resolver.isScheduled || this.resolver.resume(),
						!this._resolved)
					) {
						this.pendingPlayState = 'running';
						return;
					}
					if (this.isStopped) return;
					let { driver: t = tJ, onPlay: e, startTime: i } = this.options;
					this.driver || (this.driver = t((t) => this.tick(t))), e && e();
					let n = this.driver.now();
					null !== this.holdTime
						? (this.startTime = n - this.holdTime)
						: this.startTime
							? 'finished' === this.state && (this.startTime = n)
							: (this.startTime = null != i ? i : this.calcStartTime()),
						'finished' === this.state && this.updateFinishedPromise(),
						(this.cancelTime = this.startTime),
						(this.holdTime = null),
						(this.state = 'running'),
						this.driver.start();
				}
				pause() {
					var t;
					if (!this._resolved) {
						this.pendingPlayState = 'paused';
						return;
					}
					(this.state = 'paused'),
						(this.holdTime =
							null !== (t = this.currentTime) && void 0 !== t ? t : 0);
				}
				complete() {
					'running' !== this.state && this.play(),
						(this.pendingPlayState = this.state = 'finished'),
						(this.holdTime = null);
				}
				finish() {
					this.teardown(), (this.state = 'finished');
					let { onComplete: t } = this.options;
					t && t();
				}
				cancel() {
					null !== this.cancelTime && this.tick(this.cancelTime),
						this.teardown(),
						this.updateFinishedPromise();
				}
				teardown() {
					(this.state = 'idle'),
						this.stopDriver(),
						this.resolveFinishedPromise(),
						this.updateFinishedPromise(),
						(this.startTime = this.cancelTime = null),
						this.resolver.cancel();
				}
				stopDriver() {
					this.driver && (this.driver.stop(), (this.driver = void 0));
				}
				sample(t) {
					return (this.startTime = 0), this.tick(t, !0);
				}
			}
			let t2 = new Set(['opacity', 'clipPath', 'filter', 'transform']),
				t5 = (0, i(7252).X)(() =>
					Object.hasOwnProperty.call(Element.prototype, 'animate')
				),
				t9 = { anticipate: I, backInOut: O, circInOut: U };
			class t3 extends tC {
				constructor(t) {
					super(t);
					let {
						name: e,
						motionValue: i,
						element: n,
						keyframes: r
					} = this.options;
					(this.resolver = new tA(
						r,
						(t, e) => this.onKeyframesResolved(t, e),
						e,
						i,
						n
					)),
						this.resolver.scheduleResolve();
				}
				initPlayback(t, e) {
					var i;
					let {
						duration: n = 300,
						times: r,
						ease: s,
						type: o,
						motionValue: a,
						name: l,
						startTime: u
					} = this.options;
					if (!a.owner || !a.owner.current) return !1;
					if (
						('string' == typeof s && (0, f.Vc)() && s in t9 && (s = t9[s]),
						(i = this.options),
						(0, f.xD)(i.type) || 'spring' === i.type || !(0, f.hR)(i.ease))
					) {
						let {
								onComplete: e,
								onUpdate: i,
								motionValue: a,
								element: l,
								...u
							} = this.options,
							h = (function (t, e) {
								let i = new t1({
										...e,
										keyframes: t,
										repeat: 0,
										delay: 0,
										isGenerator: !0
									}),
									n = { done: !1, value: t[0] },
									r = [],
									s = 0;
								for (; !n.done && s < 2e4; )
									r.push((n = i.sample(s)).value), (s += 10);
								return {
									times: void 0,
									keyframes: r,
									duration: s - 10,
									ease: 'linear'
								};
							})(t, u);
						1 === (t = h.keyframes).length && (t[1] = t[0]),
							(n = h.duration),
							(r = h.times),
							(s = h.ease),
							(o = 'keyframes');
					}
					let h = (function (
						t,
						e,
						i,
						{
							delay: n = 0,
							duration: r = 300,
							repeat: s = 0,
							repeatType: o = 'loop',
							ease: a = 'easeInOut',
							times: l
						} = {}
					) {
						let u = { [e]: i };
						l && (u.offset = l);
						let h = (0, f.eB)(a, r);
						return (
							Array.isArray(h) && (u.easing = h),
							t.animate(u, {
								delay: n,
								duration: r,
								easing: Array.isArray(h) ? 'linear' : h,
								fill: 'both',
								iterations: s + 1,
								direction: 'reverse' === o ? 'alternate' : 'normal'
							})
						);
					})(a.owner.current, l, t, {
						...this.options,
						duration: n,
						times: r,
						ease: s
					});
					return (
						(h.startTime = null != u ? u : this.calcStartTime()),
						this.pendingTimeline
							? ((0, f._F)(h, this.pendingTimeline),
								(this.pendingTimeline = void 0))
							: (h.onfinish = () => {
									let { onComplete: i } = this.options;
									a.set(tM(t, this.options, e)),
										i && i(),
										this.cancel(),
										this.resolveFinishedPromise();
								}),
						{
							animation: h,
							duration: n,
							times: r,
							type: o,
							ease: s,
							keyframes: t
						}
					);
				}
				get duration() {
					let { resolved: t } = this;
					if (!t) return 0;
					let { duration: e } = t;
					return (0, V.X)(e);
				}
				get time() {
					let { resolved: t } = this;
					if (!t) return 0;
					let { animation: e } = t;
					return (0, V.X)(e.currentTime || 0);
				}
				set time(t) {
					let { resolved: e } = this;
					if (!e) return;
					let { animation: i } = e;
					i.currentTime = (0, V.w)(t);
				}
				get speed() {
					let { resolved: t } = this;
					if (!t) return 1;
					let { animation: e } = t;
					return e.playbackRate;
				}
				set speed(t) {
					let { resolved: e } = this;
					if (!e) return;
					let { animation: i } = e;
					i.playbackRate = t;
				}
				get state() {
					let { resolved: t } = this;
					if (!t) return 'idle';
					let { animation: e } = t;
					return e.playState;
				}
				get startTime() {
					let { resolved: t } = this;
					if (!t) return null;
					let { animation: e } = t;
					return e.startTime;
				}
				attachTimeline(t) {
					if (this._resolved) {
						let { resolved: e } = this;
						if (!e) return C.Z;
						let { animation: i } = e;
						(0, f._F)(i, t);
					} else this.pendingTimeline = t;
					return C.Z;
				}
				play() {
					if (this.isStopped) return;
					let { resolved: t } = this;
					if (!t) return;
					let { animation: e } = t;
					'finished' === e.playState && this.updateFinishedPromise(), e.play();
				}
				pause() {
					let { resolved: t } = this;
					if (!t) return;
					let { animation: e } = t;
					e.pause();
				}
				stop() {
					if (
						(this.resolver.cancel(),
						(this.isStopped = !0),
						'idle' === this.state)
					)
						return;
					this.resolveFinishedPromise(), this.updateFinishedPromise();
					let { resolved: t } = this;
					if (!t) return;
					let {
						animation: e,
						keyframes: i,
						duration: n,
						type: r,
						ease: s,
						times: o
					} = t;
					if ('idle' === e.playState || 'finished' === e.playState) return;
					if (this.time) {
						let {
								motionValue: t,
								onUpdate: e,
								onComplete: a,
								element: l,
								...u
							} = this.options,
							h = new t1({
								...u,
								keyframes: i,
								duration: n,
								type: r,
								ease: s,
								times: o,
								isGenerator: !0
							}),
							d = (0, V.w)(this.time);
						t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10);
					}
					let { onStop: a } = this.options;
					a && a(), this.cancel();
				}
				complete() {
					let { resolved: t } = this;
					t && t.animation.finish();
				}
				cancel() {
					let { resolved: t } = this;
					t && t.animation.cancel();
				}
				static supports(t) {
					let {
						motionValue: e,
						name: i,
						repeatDelay: n,
						repeatType: r,
						damping: s,
						type: o
					} = t;
					if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
						return !1;
					let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
					return (
						t5() &&
						i &&
						t2.has(i) &&
						!a &&
						!l &&
						!n &&
						'mirror' !== r &&
						0 !== s &&
						'inertia' !== o
					);
				}
			}
			let t8 = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
				t6 = (t) => ({
					type: 'spring',
					stiffness: 550,
					damping: 0 === t ? 2 * Math.sqrt(550) : 30,
					restSpeed: 10
				}),
				t4 = { type: 'keyframes', duration: 0.8 },
				t7 = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
				et = (t, { keyframes: e }) =>
					e.length > 2
						? t4
						: g.has(t)
							? t.startsWith('scale')
								? t6(e[1])
								: t8
							: t7,
				ee =
					(t, e, i, n = {}, r, s) =>
					(o) => {
						let a = (0, f.ev)(n, t) || {},
							l = a.delay || n.delay || 0,
							{ elapsed: u = 0 } = n;
						u -= (0, V.w)(l);
						let h = {
							keyframes: Array.isArray(i) ? i : [null, i],
							ease: 'easeOut',
							velocity: e.getVelocity(),
							...a,
							delay: -u,
							onUpdate: (t) => {
								e.set(t), a.onUpdate && a.onUpdate(t);
							},
							onComplete: () => {
								o(), a.onComplete && a.onComplete();
							},
							name: t,
							motionValue: e,
							element: s ? void 0 : r
						};
						!(function ({
							when: t,
							delay: e,
							delayChildren: i,
							staggerChildren: n,
							staggerDirection: r,
							repeat: s,
							repeatType: o,
							repeatDelay: a,
							from: l,
							elapsed: u,
							...h
						}) {
							return !!Object.keys(h).length;
						})(a) && (h = { ...h, ...et(t, h) }),
							h.duration && (h.duration = (0, V.w)(h.duration)),
							h.repeatDelay && (h.repeatDelay = (0, V.w)(h.repeatDelay)),
							void 0 !== h.from && (h.keyframes[0] = h.from);
						let d = !1;
						if (
							((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
								((h.duration = 0), 0 !== h.delay || (d = !0)),
							(M.current || E.c.skipAnimations) &&
								((d = !0), (h.duration = 0), (h.delay = 0)),
							d && !s && void 0 !== e.get())
						) {
							let t = tM(h.keyframes, a);
							if (void 0 !== t)
								return (
									D.Wi.update(() => {
										h.onUpdate(t), h.onComplete();
									}),
									new f.sP([])
								);
						}
						return !s && t3.supports(h) ? new t3(h) : new t1(h);
					};
			function ei(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
				var s;
				let {
					transition: o = t.getDefaultTransition(),
					transitionEnd: a,
					...l
				} = e;
				n && (o = n);
				let h = [],
					d = r && t.animationState && t.animationState.getState()[r];
				for (let e in l) {
					let n = t.getValue(
							e,
							null !== (s = t.latestValues[e]) && void 0 !== s ? s : null
						),
						r = l[e];
					if (
						void 0 === r ||
						(d &&
							(function ({ protectedKeys: t, needsAnimating: e }, i) {
								let n = t.hasOwnProperty(i) && !0 !== e[i];
								return (e[i] = !1), n;
							})(d, e))
					)
						continue;
					let a = { delay: i, ...(0, f.ev)(o || {}, e) },
						u = !1;
					if (window.MotionHandoffAnimation) {
						let i = t.props[A];
						if (i) {
							let t = window.MotionHandoffAnimation(i, e, D.Wi);
							null !== t && ((a.startTime = t), (u = !0));
						}
					}
					b(t, e),
						n.start(
							ee(
								e,
								n,
								r,
								t.shouldReduceMotion && y.has(e) ? { type: !1 } : a,
								t,
								u
							)
						);
					let c = n.animation;
					c && h.push(c);
				}
				return (
					a &&
						Promise.all(h).then(() => {
							D.Wi.update(() => {
								a &&
									(function (t, e) {
										let {
											transitionEnd: i = {},
											transition: n = {},
											...r
										} = u(t, e) || {};
										for (let e in (r = { ...r, ...i })) {
											let i = P(r[e]);
											t.hasValue(e)
												? t.getValue(e).set(i)
												: t.addValue(e, (0, w.BX)(i));
										}
									})(t, a);
							});
						}),
					h
				);
			}
			function en(t, e, i = {}) {
				var n;
				let r = u(
						t,
						e,
						'exit' === i.type
							? null === (n = t.presenceContext) || void 0 === n
								? void 0
								: n.custom
							: void 0
					),
					{ transition: s = t.getDefaultTransition() || {} } = r || {};
				i.transitionOverride && (s = i.transitionOverride);
				let o = r ? () => Promise.all(ei(t, r, i)) : () => Promise.resolve(),
					a =
						t.variantChildren && t.variantChildren.size
							? (n = 0) => {
									let {
										delayChildren: r = 0,
										staggerChildren: o,
										staggerDirection: a
									} = s;
									return (function (t, e, i = 0, n = 0, r = 1, s) {
										let o = [],
											a = (t.variantChildren.size - 1) * n,
											l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
										return (
											Array.from(t.variantChildren)
												.sort(er)
												.forEach((t, n) => {
													t.notify('AnimationStart', e),
														o.push(
															en(t, e, { ...s, delay: i + l(n) }).then(() =>
																t.notify('AnimationComplete', e)
															)
														);
												}),
											Promise.all(o)
										);
									})(t, e, r + n, o, a, i);
								}
							: () => Promise.resolve(),
					{ when: l } = s;
				if (!l) return Promise.all([o(), a(i.delay)]);
				{
					let [t, e] = 'beforeChildren' === l ? [o, a] : [a, o];
					return t().then(() => e());
				}
			}
			function er(t, e) {
				return t.sortNodePosition(e);
			}
			let es = d.length,
				eo = [...h].reverse(),
				ea = h.length;
			function el(t = !1) {
				return {
					isActive: t,
					protectedKeys: {},
					needsAnimating: {},
					prevResolvedValues: {}
				};
			}
			function eu() {
				return {
					animate: el(!0),
					whileInView: el(),
					whileHover: el(),
					whileTap: el(),
					whileDrag: el(),
					whileFocus: el(),
					exit: el()
				};
			}
			class eh {
				constructor(t) {
					(this.isMounted = !1), (this.node = t);
				}
				update() {}
			}
			class ed extends eh {
				constructor(t) {
					super(t),
						t.animationState ||
							(t.animationState = (function (t) {
								let e = (e) =>
										Promise.all(
											e.map(({ animation: e, options: i }) =>
												(function (t, e, i = {}) {
													let n;
													if ((t.notify('AnimationStart', e), Array.isArray(e)))
														n = Promise.all(e.map((e) => en(t, e, i)));
													else if ('string' == typeof e) n = en(t, e, i);
													else {
														let r =
															'function' == typeof e ? u(t, e, i.custom) : e;
														n = Promise.all(ei(t, r, i));
													}
													return n.then(() => {
														t.notify('AnimationComplete', e);
													});
												})(t, e, i)
											)
										),
									i = eu(),
									a = !0,
									l = (e) => (i, n) => {
										var r;
										let s = u(
											t,
											n,
											'exit' === e
												? null === (r = t.presenceContext) || void 0 === r
													? void 0
													: r.custom
												: void 0
										);
										if (s) {
											let { transition: t, transitionEnd: e, ...n } = s;
											i = { ...i, ...n, ...e };
										}
										return i;
									};
								function h(u) {
									let { props: h } = t,
										c =
											(function t(e) {
												if (!e) return;
												if (!e.isControllingVariants) {
													let i = (e.parent && t(e.parent)) || {};
													return (
														void 0 !== e.props.initial &&
															(i.initial = e.props.initial),
														i
													);
												}
												let i = {};
												for (let t = 0; t < es; t++) {
													let n = d[t],
														r = e.props[n];
													(o(r) || !1 === r) && (i[n] = r);
												}
												return i;
											})(t.parent) || {},
										p = [],
										m = new Set(),
										f = {},
										v = 1 / 0;
									for (let e = 0; e < ea; e++) {
										var g;
										let d = eo[e],
											y = i[d],
											x = void 0 !== h[d] ? h[d] : c[d],
											P = o(x),
											w = d === u ? y.isActive : null;
										!1 === w && (v = e);
										let T = x === c[d] && x !== h[d] && P;
										if (
											(T && a && t.manuallyAnimateOnMount && (T = !1),
											(y.protectedKeys = { ...f }),
											(!y.isActive && null === w) ||
												(!x && !y.prevProp) ||
												n(x) ||
												'boolean' == typeof x)
										)
											continue;
										let b =
												((g = y.prevProp),
												'string' == typeof x
													? x !== g
													: !!Array.isArray(x) && !s(x, g)),
											S =
												b || (d === u && y.isActive && !T && P) || (e > v && P),
											A = !1,
											V = Array.isArray(x) ? x : [x],
											D = V.reduce(l(d), {});
										!1 === w && (D = {});
										let { prevResolvedValues: E = {} } = y,
											M = { ...E, ...D },
											C = (e) => {
												(S = !0),
													m.has(e) && ((A = !0), m.delete(e)),
													(y.needsAnimating[e] = !0);
												let i = t.getValue(e);
												i && (i.liveStyle = !1);
											};
										for (let t in M) {
											let e = D[t],
												i = E[t];
											if (!f.hasOwnProperty(t))
												(r(e) && r(i) ? s(e, i) : e === i)
													? void 0 !== e && m.has(t)
														? C(t)
														: (y.protectedKeys[t] = !0)
													: null != e
														? C(t)
														: m.add(t);
										}
										(y.prevProp = x),
											(y.prevResolvedValues = D),
											y.isActive && (f = { ...f, ...D }),
											a && t.blockInitialAnimation && (S = !1);
										let R = !(T && b) || A;
										S &&
											R &&
											p.push(
												...V.map((t) => ({
													animation: t,
													options: { type: d }
												}))
											);
									}
									if (m.size) {
										let e = {};
										m.forEach((i) => {
											let n = t.getBaseTarget(i),
												r = t.getValue(i);
											r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
										}),
											p.push({ animation: e });
									}
									let y = !!p.length;
									return (
										a &&
											(!1 === h.initial || h.initial === h.animate) &&
											!t.manuallyAnimateOnMount &&
											(y = !1),
										(a = !1),
										y ? e(p) : Promise.resolve()
									);
								}
								return {
									animateChanges: h,
									setActive: function (e, n) {
										var r;
										if (i[e].isActive === n) return Promise.resolve();
										null === (r = t.variantChildren) ||
											void 0 === r ||
											r.forEach((t) => {
												var i;
												return null === (i = t.animationState) || void 0 === i
													? void 0
													: i.setActive(e, n);
											}),
											(i[e].isActive = n);
										let s = h(e);
										for (let t in i) i[t].protectedKeys = {};
										return s;
									},
									setAnimateFunction: function (i) {
										e = i(t);
									},
									getState: () => i,
									reset: () => {
										(i = eu()), (a = !0);
									}
								};
							})(t));
				}
				updateAnimationControlsSubscription() {
					let { animate: t } = this.node.getProps();
					n(t) && (this.unmountControls = t.subscribe(this.node));
				}
				mount() {
					this.updateAnimationControlsSubscription();
				}
				update() {
					let { animate: t } = this.node.getProps(),
						{ animate: e } = this.node.prevProps || {};
					t !== e && this.updateAnimationControlsSubscription();
				}
				unmount() {
					var t;
					this.node.animationState.reset(),
						null === (t = this.unmountControls) || void 0 === t || t.call(this);
				}
			}
			let ec = 0;
			class ep extends eh {
				constructor() {
					super(...arguments), (this.id = ec++);
				}
				update() {
					if (!this.node.presenceContext) return;
					let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
						{ isPresent: i } = this.node.prevPresenceContext || {};
					if (!this.node.animationState || t === i) return;
					let n = this.node.animationState.setActive('exit', !t);
					e && !t && n.then(() => e(this.id));
				}
				mount() {
					let { register: t } = this.node.presenceContext || {};
					t && (this.unmount = t(this.id));
				}
				unmount() {}
			}
			function em(t, e, i, n = { passive: !0 }) {
				return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
			}
			function ef(t) {
				return { point: { x: t.pageX, y: t.pageY } };
			}
			let ev = (t) => (e) => (0, f.DJ)(e) && t(e, ef(e));
			function eg(t, e, i, n) {
				return em(t, e, ev(i), n);
			}
			let ey = (t, e) => Math.abs(t - e);
			class ex {
				constructor(
					t,
					e,
					{
						transformPagePoint: i,
						contextWindow: n,
						dragSnapToOrigin: r = !1
					} = {}
				) {
					if (
						((this.startEvent = null),
						(this.lastMoveEvent = null),
						(this.lastMoveEventInfo = null),
						(this.handlers = {}),
						(this.contextWindow = window),
						(this.updatePoint = () => {
							var t, e;
							if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
							let i = eT(this.lastMoveEventInfo, this.history),
								n = null !== this.startEvent,
								r =
									((t = i.offset),
									(e = { x: 0, y: 0 }),
									Math.sqrt(ey(t.x, e.x) ** 2 + ey(t.y, e.y) ** 2) >= 3);
							if (!n && !r) return;
							let { point: s } = i,
								{ timestamp: o } = D.frameData;
							this.history.push({ ...s, timestamp: o });
							let { onStart: a, onMove: l } = this.handlers;
							n ||
								(a && a(this.lastMoveEvent, i),
								(this.startEvent = this.lastMoveEvent)),
								l && l(this.lastMoveEvent, i);
						}),
						(this.handlePointerMove = (t, e) => {
							(this.lastMoveEvent = t),
								(this.lastMoveEventInfo = eP(e, this.transformPagePoint)),
								D.Wi.update(this.updatePoint, !0);
						}),
						(this.handlePointerUp = (t, e) => {
							this.end();
							let {
								onEnd: i,
								onSessionEnd: n,
								resumeAnimation: r
							} = this.handlers;
							if (
								(this.dragSnapToOrigin && r && r(),
								!(this.lastMoveEvent && this.lastMoveEventInfo))
							)
								return;
							let s = eT(
								'pointercancel' === t.type
									? this.lastMoveEventInfo
									: eP(e, this.transformPagePoint),
								this.history
							);
							this.startEvent && i && i(t, s), n && n(t, s);
						}),
						!(0, f.DJ)(t))
					)
						return;
					(this.dragSnapToOrigin = r),
						(this.handlers = e),
						(this.transformPagePoint = i),
						(this.contextWindow = n || window);
					let s = eP(ef(t), this.transformPagePoint),
						{ point: o } = s,
						{ timestamp: a } = D.frameData;
					this.history = [{ ...o, timestamp: a }];
					let { onSessionStart: l } = e;
					l && l(t, eT(s, this.history)),
						(this.removeListeners = (0, tL.z)(
							eg(this.contextWindow, 'pointermove', this.handlePointerMove),
							eg(this.contextWindow, 'pointerup', this.handlePointerUp),
							eg(this.contextWindow, 'pointercancel', this.handlePointerUp)
						));
				}
				updateHandlers(t) {
					this.handlers = t;
				}
				end() {
					this.removeListeners && this.removeListeners(),
						(0, D.Pn)(this.updatePoint);
				}
			}
			function eP(t, e) {
				return e ? { point: e(t.point) } : t;
			}
			function ew(t, e) {
				return { x: t.x - e.x, y: t.y - e.y };
			}
			function eT({ point: t }, e) {
				return {
					point: t,
					delta: ew(t, eb(e)),
					offset: ew(t, e[0]),
					velocity: (function (t, e) {
						if (t.length < 2) return { x: 0, y: 0 };
						let i = t.length - 1,
							n = null,
							r = eb(t);
						for (
							;
							i >= 0 &&
							((n = t[i]), !(r.timestamp - n.timestamp > (0, V.w)(0.1)));

						)
							i--;
						if (!n) return { x: 0, y: 0 };
						let s = (0, V.X)(r.timestamp - n.timestamp);
						if (0 === s) return { x: 0, y: 0 };
						let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
						return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
					})(e, 0)
				};
			}
			function eb(t) {
				return t[t.length - 1];
			}
			function eS(t) {
				return (
					t &&
					'object' == typeof t &&
					Object.prototype.hasOwnProperty.call(t, 'current')
				);
			}
			var eA = i(718),
				eV = i(4453);
			function eD(t) {
				return t.max - t.min;
			}
			function eE(t, e, i, n = 0.5) {
				(t.origin = n),
					(t.originPoint = (0, eV.t)(e.min, e.max, t.origin)),
					(t.scale = eD(i) / eD(e)),
					(t.translate = (0, eV.t)(i.min, i.max, t.origin) - t.originPoint),
					((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
						(t.scale = 1),
					((t.translate >= -0.01 && t.translate <= 0.01) ||
						isNaN(t.translate)) &&
						(t.translate = 0);
			}
			function eM(t, e, i, n) {
				eE(t.x, e.x, i.x, n ? n.originX : void 0),
					eE(t.y, e.y, i.y, n ? n.originY : void 0);
			}
			function eC(t, e, i) {
				(t.min = i.min + e.min), (t.max = t.min + eD(e));
			}
			function eR(t, e, i) {
				(t.min = e.min - i.min), (t.max = t.min + eD(e));
			}
			function ek(t, e, i) {
				eR(t.x, e.x, i.x), eR(t.y, e.y, i.y);
			}
			function eL(t, e, i) {
				return {
					min: void 0 !== e ? t.min + e : void 0,
					max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
				};
			}
			function ej(t, e) {
				let i = e.min - t.min,
					n = e.max - t.max;
				return (
					e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
				);
			}
			function eF(t, e, i) {
				return { min: eB(t, e), max: eB(t, i) };
			}
			function eB(t, e) {
				return 'number' == typeof t ? t : t[e] || 0;
			}
			let eO = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
				eI = () => ({ x: eO(), y: eO() }),
				eW = () => ({ min: 0, max: 0 }),
				e$ = () => ({ x: eW(), y: eW() });
			function eU(t) {
				return [t('x'), t('y')];
			}
			function eN({ top: t, left: e, right: i, bottom: n }) {
				return { x: { min: e, max: i }, y: { min: t, max: n } };
			}
			function eX(t) {
				return void 0 === t || 1 === t;
			}
			function ez({ scale: t, scaleX: e, scaleY: i }) {
				return !eX(t) || !eX(e) || !eX(i);
			}
			function eY(t) {
				return (
					ez(t) ||
					eK(t) ||
					t.z ||
					t.rotate ||
					t.rotateX ||
					t.rotateY ||
					t.skewX ||
					t.skewY
				);
			}
			function eK(t) {
				var e, i;
				return ((e = t.x) && '0%' !== e) || ((i = t.y) && '0%' !== i);
			}
			function eH(t, e, i, n, r) {
				return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
			}
			function eZ(t, e = 0, i = 1, n, r) {
				(t.min = eH(t.min, e, i, n, r)), (t.max = eH(t.max, e, i, n, r));
			}
			function eq(t, { x: e, y: i }) {
				eZ(t.x, e.translate, e.scale, e.originPoint),
					eZ(t.y, i.translate, i.scale, i.originPoint);
			}
			function e_(t, e) {
				(t.min = t.min + e), (t.max = t.max + e);
			}
			function eG(t, e, i, n, r = 0.5) {
				let s = (0, eV.t)(t.min, t.max, r);
				eZ(t, e, i, s, n);
			}
			function eJ(t, e) {
				eG(t.x, e.x, e.scaleX, e.scale, e.originX),
					eG(t.y, e.y, e.scaleY, e.scale, e.originY);
			}
			function eQ(t, e) {
				return eN(
					(function (t, e) {
						if (!e) return t;
						let i = e({ x: t.left, y: t.top }),
							n = e({ x: t.right, y: t.bottom });
						return { top: i.y, left: i.x, bottom: n.y, right: n.x };
					})(t.getBoundingClientRect(), e)
				);
			}
			let e0 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
				e1 = new WeakMap();
			class e2 {
				constructor(t) {
					(this.openDragLock = null),
						(this.isDragging = !1),
						(this.currentDirection = null),
						(this.originPoint = { x: 0, y: 0 }),
						(this.constraints = !1),
						(this.hasMutatedConstraints = !1),
						(this.elastic = e$()),
						(this.visualElement = t);
				}
				start(t, { snapToCursor: e = !1 } = {}) {
					let { presenceContext: i } = this.visualElement;
					if (i && !1 === i.isPresent) return;
					let { dragSnapToOrigin: n } = this.getProps();
					this.panSession = new ex(
						t,
						{
							onSessionStart: (t) => {
								let { dragSnapToOrigin: i } = this.getProps();
								i ? this.pauseAnimation() : this.stopAnimation(),
									e && this.snapToCursor(ef(t).point);
							},
							onStart: (t, e) => {
								let {
									drag: i,
									dragPropagation: n,
									onDragStart: r
								} = this.getProps();
								if (
									i &&
									!n &&
									(this.openDragLock && this.openDragLock(),
									(this.openDragLock = (0, f.KV)(i)),
									!this.openDragLock)
								)
									return;
								(this.isDragging = !0),
									(this.currentDirection = null),
									this.resolveConstraints(),
									this.visualElement.projection &&
										((this.visualElement.projection.isAnimationBlocked = !0),
										(this.visualElement.projection.target = void 0)),
									eU((t) => {
										let e = this.getAxisMotionValue(t).get() || 0;
										if (G.aQ.test(e)) {
											let { projection: i } = this.visualElement;
											if (i && i.layout) {
												let n = i.layout.layoutBox[t];
												if (n) {
													let t = eD(n);
													e = (parseFloat(e) / 100) * t;
												}
											}
										}
										this.originPoint[t] = e;
									}),
									r && D.Wi.postRender(() => r(t, e)),
									b(this.visualElement, 'transform');
								let { animationState: s } = this.visualElement;
								s && s.setActive('whileDrag', !0);
							},
							onMove: (t, e) => {
								let {
									dragPropagation: i,
									dragDirectionLock: n,
									onDirectionLock: r,
									onDrag: s
								} = this.getProps();
								if (!i && !this.openDragLock) return;
								let { offset: o } = e;
								if (n && null === this.currentDirection) {
									(this.currentDirection = (function (t, e = 10) {
										let i = null;
										return (
											Math.abs(t.y) > e
												? (i = 'y')
												: Math.abs(t.x) > e && (i = 'x'),
											i
										);
									})(o)),
										null !== this.currentDirection &&
											r &&
											r(this.currentDirection);
									return;
								}
								this.updateAxis('x', e.point, o),
									this.updateAxis('y', e.point, o),
									this.visualElement.render(),
									s && s(t, e);
							},
							onSessionEnd: (t, e) => this.stop(t, e),
							resumeAnimation: () =>
								eU((t) => {
									var e;
									return (
										'paused' === this.getAnimationState(t) &&
										(null === (e = this.getAxisMotionValue(t).animation) ||
										void 0 === e
											? void 0
											: e.play())
									);
								})
						},
						{
							transformPagePoint: this.visualElement.getTransformPagePoint(),
							dragSnapToOrigin: n,
							contextWindow: e0(this.visualElement)
						}
					);
				}
				stop(t, e) {
					let i = this.isDragging;
					if ((this.cancel(), !i)) return;
					let { velocity: n } = e;
					this.startAnimation(n);
					let { onDragEnd: r } = this.getProps();
					r && D.Wi.postRender(() => r(t, e));
				}
				cancel() {
					this.isDragging = !1;
					let { projection: t, animationState: e } = this.visualElement;
					t && (t.isAnimationBlocked = !1),
						this.panSession && this.panSession.end(),
						(this.panSession = void 0);
					let { dragPropagation: i } = this.getProps();
					!i &&
						this.openDragLock &&
						(this.openDragLock(), (this.openDragLock = null)),
						e && e.setActive('whileDrag', !1);
				}
				updateAxis(t, e, i) {
					let { drag: n } = this.getProps();
					if (!i || !e5(t, n, this.currentDirection)) return;
					let r = this.getAxisMotionValue(t),
						s = this.originPoint[t] + i[t];
					this.constraints &&
						this.constraints[t] &&
						(s = (function (t, { min: e, max: i }, n) {
							return (
								void 0 !== e && t < e
									? (t = n ? (0, eV.t)(e, t, n.min) : Math.max(t, e))
									: void 0 !== i &&
										t > i &&
										(t = n ? (0, eV.t)(i, t, n.max) : Math.min(t, i)),
								t
							);
						})(s, this.constraints[t], this.elastic[t])),
						r.set(s);
				}
				resolveConstraints() {
					var t;
					let { dragConstraints: e, dragElastic: i } = this.getProps(),
						n =
							this.visualElement.projection &&
							!this.visualElement.projection.layout
								? this.visualElement.projection.measure(!1)
								: null === (t = this.visualElement.projection) || void 0 === t
									? void 0
									: t.layout,
						r = this.constraints;
					e && eS(e)
						? this.constraints ||
							(this.constraints = this.resolveRefConstraints())
						: e && n
							? (this.constraints = (function (
									t,
									{ top: e, left: i, bottom: n, right: r }
								) {
									return { x: eL(t.x, i, r), y: eL(t.y, e, n) };
								})(n.layoutBox, e))
							: (this.constraints = !1),
						(this.elastic = (function (t = 0.35) {
							return (
								!1 === t ? (t = 0) : !0 === t && (t = 0.35),
								{ x: eF(t, 'left', 'right'), y: eF(t, 'top', 'bottom') }
							);
						})(i)),
						r !== this.constraints &&
							n &&
							this.constraints &&
							!this.hasMutatedConstraints &&
							eU((t) => {
								!1 !== this.constraints &&
									this.getAxisMotionValue(t) &&
									(this.constraints[t] = (function (t, e) {
										let i = {};
										return (
											void 0 !== e.min && (i.min = e.min - t.min),
											void 0 !== e.max && (i.max = e.max - t.min),
											i
										);
									})(n.layoutBox[t], this.constraints[t]));
							});
				}
				resolveRefConstraints() {
					var t;
					let { dragConstraints: e, onMeasureDragConstraints: i } =
						this.getProps();
					if (!e || !eS(e)) return !1;
					let n = e.current;
					(0, ty.k)(
						null !== n,
						"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
					);
					let { projection: r } = this.visualElement;
					if (!r || !r.layout) return !1;
					let s = (function (t, e, i) {
							let n = eQ(t, i),
								{ scroll: r } = e;
							return r && (e_(n.x, r.offset.x), e_(n.y, r.offset.y)), n;
						})(n, r.root, this.visualElement.getTransformPagePoint()),
						o = { x: ej((t = r.layout.layoutBox).x, s.x), y: ej(t.y, s.y) };
					if (i) {
						let t = i(
							(function ({ x: t, y: e }) {
								return { top: e.min, right: t.max, bottom: e.max, left: t.min };
							})(o)
						);
						(this.hasMutatedConstraints = !!t), t && (o = eN(t));
					}
					return o;
				}
				startAnimation(t) {
					let {
							drag: e,
							dragMomentum: i,
							dragElastic: n,
							dragTransition: r,
							dragSnapToOrigin: s,
							onDragTransitionEnd: o
						} = this.getProps(),
						a = this.constraints || {};
					return Promise.all(
						eU((o) => {
							if (!e5(o, e, this.currentDirection)) return;
							let l = (a && a[o]) || {};
							s && (l = { min: 0, max: 0 });
							let u = {
								type: 'inertia',
								velocity: i ? t[o] : 0,
								bounceStiffness: n ? 200 : 1e6,
								bounceDamping: n ? 40 : 1e7,
								timeConstant: 750,
								restDelta: 1,
								restSpeed: 10,
								...r,
								...l
							};
							return this.startAxisValueAnimation(o, u);
						})
					).then(o);
				}
				startAxisValueAnimation(t, e) {
					let i = this.getAxisMotionValue(t);
					return (
						b(this.visualElement, t),
						i.start(ee(t, i, 0, e, this.visualElement, !1))
					);
				}
				stopAnimation() {
					eU((t) => this.getAxisMotionValue(t).stop());
				}
				pauseAnimation() {
					eU((t) => {
						var e;
						return null === (e = this.getAxisMotionValue(t).animation) ||
							void 0 === e
							? void 0
							: e.pause();
					});
				}
				getAnimationState(t) {
					var e;
					return null === (e = this.getAxisMotionValue(t).animation) ||
						void 0 === e
						? void 0
						: e.state;
				}
				getAxisMotionValue(t) {
					let e = `_drag${t.toUpperCase()}`,
						i = this.visualElement.getProps();
					return (
						i[e] ||
						this.visualElement.getValue(
							t,
							(i.initial ? i.initial[t] : void 0) || 0
						)
					);
				}
				snapToCursor(t) {
					eU((e) => {
						let { drag: i } = this.getProps();
						if (!e5(e, i, this.currentDirection)) return;
						let { projection: n } = this.visualElement,
							r = this.getAxisMotionValue(e);
						if (n && n.layout) {
							let { min: i, max: s } = n.layout.layoutBox[e];
							r.set(t[e] - (0, eV.t)(i, s, 0.5));
						}
					});
				}
				scalePositionWithinConstraints() {
					if (!this.visualElement.current) return;
					let { drag: t, dragConstraints: e } = this.getProps(),
						{ projection: i } = this.visualElement;
					if (!eS(e) || !i || !this.constraints) return;
					this.stopAnimation();
					let n = { x: 0, y: 0 };
					eU((t) => {
						let e = this.getAxisMotionValue(t);
						if (e && !1 !== this.constraints) {
							let i = e.get();
							n[t] = (function (t, e) {
								let i = 0.5,
									n = eD(t),
									r = eD(e);
								return (
									r > n
										? (i = (0, eA.Y)(e.min, e.max - n, t.min))
										: n > r && (i = (0, eA.Y)(t.min, t.max - r, e.min)),
									(0, tR.u)(0, 1, i)
								);
							})({ min: i, max: i }, this.constraints[t]);
						}
					});
					let { transformTemplate: r } = this.visualElement.getProps();
					(this.visualElement.current.style.transform = r ? r({}, '') : 'none'),
						i.root && i.root.updateScroll(),
						i.updateLayout(),
						this.resolveConstraints(),
						eU((e) => {
							if (!e5(e, t, null)) return;
							let i = this.getAxisMotionValue(e),
								{ min: r, max: s } = this.constraints[e];
							i.set((0, eV.t)(r, s, n[e]));
						});
				}
				addListeners() {
					if (!this.visualElement.current) return;
					e1.set(this.visualElement, this);
					let t = eg(this.visualElement.current, 'pointerdown', (t) => {
							let { drag: e, dragListener: i = !0 } = this.getProps();
							e && i && this.start(t);
						}),
						e = () => {
							let { dragConstraints: t } = this.getProps();
							eS(t) &&
								t.current &&
								(this.constraints = this.resolveRefConstraints());
						},
						{ projection: i } = this.visualElement,
						n = i.addEventListener('measure', e);
					i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
						D.Wi.read(e);
					let r = em(window, 'resize', () =>
							this.scalePositionWithinConstraints()
						),
						s = i.addEventListener(
							'didUpdate',
							({ delta: t, hasLayoutChanged: e }) => {
								this.isDragging &&
									e &&
									(eU((e) => {
										let i = this.getAxisMotionValue(e);
										i &&
											((this.originPoint[e] += t[e].translate),
											i.set(i.get() + t[e].translate));
									}),
									this.visualElement.render());
							}
						);
					return () => {
						r(), t(), n(), s && s();
					};
				}
				getProps() {
					let t = this.visualElement.getProps(),
						{
							drag: e = !1,
							dragDirectionLock: i = !1,
							dragPropagation: n = !1,
							dragConstraints: r = !1,
							dragElastic: s = 0.35,
							dragMomentum: o = !0
						} = t;
					return {
						...t,
						drag: e,
						dragDirectionLock: i,
						dragPropagation: n,
						dragConstraints: r,
						dragElastic: s,
						dragMomentum: o
					};
				}
			}
			function e5(t, e, i) {
				return (!0 === e || e === t) && (null === i || i === t);
			}
			class e9 extends eh {
				constructor(t) {
					super(t),
						(this.removeGroupControls = C.Z),
						(this.removeListeners = C.Z),
						(this.controls = new e2(t));
				}
				mount() {
					let { dragControls: t } = this.node.getProps();
					t && (this.removeGroupControls = t.subscribe(this.controls)),
						(this.removeListeners = this.controls.addListeners() || C.Z);
				}
				unmount() {
					this.removeGroupControls(), this.removeListeners();
				}
			}
			let e3 = (t) => (e, i) => {
				t && D.Wi.postRender(() => t(e, i));
			};
			class e8 extends eh {
				constructor() {
					super(...arguments), (this.removePointerDownListener = C.Z);
				}
				onPointerDown(t) {
					this.session = new ex(t, this.createPanHandlers(), {
						transformPagePoint: this.node.getTransformPagePoint(),
						contextWindow: e0(this.node)
					});
				}
				createPanHandlers() {
					let {
						onPanSessionStart: t,
						onPanStart: e,
						onPan: i,
						onPanEnd: n
					} = this.node.getProps();
					return {
						onSessionStart: e3(t),
						onStart: e3(e),
						onMove: i,
						onEnd: (t, e) => {
							delete this.session, n && D.Wi.postRender(() => n(t, e));
						}
					};
				}
				mount() {
					this.removePointerDownListener = eg(
						this.node.current,
						'pointerdown',
						(t) => this.onPointerDown(t)
					);
				}
				update() {
					this.session && this.session.updateHandlers(this.createPanHandlers());
				}
				unmount() {
					this.removePointerDownListener(), this.session && this.session.end();
				}
			}
			var e6 = i(8392),
				e4 = i(8949),
				e7 = i(9344),
				it = i(8197);
			let ie = (0, e4.createContext)({}),
				ii = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
			function ir(t, e) {
				return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
			}
			let is = {
					correct: (t, e) => {
						if (!e.target) return t;
						if ('string' == typeof t) {
							if (!G.px.test(t)) return t;
							t = parseFloat(t);
						}
						let i = ir(t, e.target.x),
							n = ir(t, e.target.y);
						return `${i}% ${n}%`;
					}
				},
				io = {},
				{ schedule: ia, cancel: il } = (0, i(9978).Z)(queueMicrotask, !1);
			class iu extends e4.Component {
				componentDidMount() {
					let {
							visualElement: t,
							layoutGroup: e,
							switchLayoutGroup: i,
							layoutId: n
						} = this.props,
						{ projection: r } = t;
					Object.assign(io, id),
						r &&
							(e.group && e.group.add(r),
							i && i.register && n && i.register(r),
							r.root.didUpdate(),
							r.addEventListener('animationComplete', () => {
								this.safeToRemove();
							}),
							r.setOptions({
								...r.options,
								onExitComplete: () => this.safeToRemove()
							})),
						(ii.hasEverUpdated = !0);
				}
				getSnapshotBeforeUpdate(t) {
					let {
							layoutDependency: e,
							visualElement: i,
							drag: n,
							isPresent: r
						} = this.props,
						s = i.projection;
					return (
						s &&
							((s.isPresent = r),
							n || t.layoutDependency !== e || void 0 === e
								? s.willUpdate()
								: this.safeToRemove(),
							t.isPresent === r ||
								(r
									? s.promote()
									: s.relegate() ||
										D.Wi.postRender(() => {
											let t = s.getStack();
											(t && t.members.length) || this.safeToRemove();
										}))),
						null
					);
				}
				componentDidUpdate() {
					let { projection: t } = this.props.visualElement;
					t &&
						(t.root.didUpdate(),
						ia.postRender(() => {
							!t.currentAnimation && t.isLead() && this.safeToRemove();
						}));
				}
				componentWillUnmount() {
					let {
							visualElement: t,
							layoutGroup: e,
							switchLayoutGroup: i
						} = this.props,
						{ projection: n } = t;
					n &&
						(n.scheduleCheckAfterUnmount(),
						e && e.group && e.group.remove(n),
						i && i.deregister && i.deregister(n));
				}
				safeToRemove() {
					let { safeToRemove: t } = this.props;
					t && t();
				}
				render() {
					return null;
				}
			}
			function ih(t) {
				let [e, i] = (0, e7.oO)(),
					n = (0, e4.useContext)(it.p);
				return (0, e6.jsx)(iu, {
					...t,
					layoutGroup: n,
					switchLayoutGroup: (0, e4.useContext)(ie),
					isPresent: e,
					safeToRemove: i
				});
			}
			let id = {
				borderRadius: {
					...is,
					applyTo: [
						'borderTopLeftRadius',
						'borderTopRightRadius',
						'borderBottomLeftRadius',
						'borderBottomRightRadius'
					]
				},
				borderTopLeftRadius: is,
				borderTopRightRadius: is,
				borderBottomLeftRadius: is,
				borderBottomRightRadius: is,
				boxShadow: {
					correct: (t, { treeScale: e, projectionDelta: i }) => {
						let n = X.P.parse(t);
						if (n.length > 5) return t;
						let r = X.P.createTransformer(t),
							s = 'number' != typeof n[0] ? 1 : 0,
							o = i.x.scale * e.x,
							a = i.y.scale * e.y;
						(n[0 + s] /= o), (n[1 + s] /= a);
						let l = (0, eV.t)(o, a, 0.5);
						return (
							'number' == typeof n[2 + s] && (n[2 + s] /= l),
							'number' == typeof n[3 + s] && (n[3 + s] /= l),
							r(n)
						);
					}
				}
			};
			var ic = i(3627);
			let ip = (t, e) => t.depth - e.depth;
			class im {
				constructor() {
					(this.children = []), (this.isDirty = !1);
				}
				add(t) {
					(0, ic.y4)(this.children, t), (this.isDirty = !0);
				}
				remove(t) {
					(0, ic.cl)(this.children, t), (this.isDirty = !0);
				}
				forEach(t) {
					this.isDirty && this.children.sort(ip),
						(this.isDirty = !1),
						this.children.forEach(t);
				}
			}
			var iv = i(542);
			function ig(t) {
				let e = (0, T.i)(t) ? t.get() : t;
				return x(e) ? e.toValue() : e;
			}
			let iy = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
				ix = iy.length,
				iP = (t) => ('string' == typeof t ? parseFloat(t) : t),
				iw = (t) => 'number' == typeof t || G.px.test(t);
			function iT(t, e) {
				return void 0 !== t[e] ? t[e] : t.borderRadius;
			}
			let ib = iA(0, 0.5, $),
				iS = iA(0.5, 0.95, C.Z);
			function iA(t, e, i) {
				return (n) => (n < t ? 0 : n > e ? 1 : i((0, eA.Y)(t, e, n)));
			}
			function iV(t, e) {
				(t.min = e.min), (t.max = e.max);
			}
			function iD(t, e) {
				iV(t.x, e.x), iV(t.y, e.y);
			}
			function iE(t, e) {
				(t.translate = e.translate),
					(t.scale = e.scale),
					(t.originPoint = e.originPoint),
					(t.origin = e.origin);
			}
			function iM(t, e, i, n, r) {
				return (
					(t -= e),
					(t = n + (1 / i) * (t - n)),
					void 0 !== r && (t = n + (1 / r) * (t - n)),
					t
				);
			}
			function iC(t, e, [i, n, r], s, o) {
				!(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
					if (
						(G.aQ.test(e) &&
							((e = parseFloat(e)),
							(e = (0, eV.t)(o.min, o.max, e / 100) - o.min)),
						'number' != typeof e)
					)
						return;
					let a = (0, eV.t)(s.min, s.max, n);
					t === s && (a -= e),
						(t.min = iM(t.min, e, i, a, r)),
						(t.max = iM(t.max, e, i, a, r));
				})(t, e[i], e[n], e[r], e.scale, s, o);
			}
			let iR = ['x', 'scaleX', 'originX'],
				ik = ['y', 'scaleY', 'originY'];
			function iL(t, e, i, n) {
				iC(t.x, e, iR, i ? i.x : void 0, n ? n.x : void 0),
					iC(t.y, e, ik, i ? i.y : void 0, n ? n.y : void 0);
			}
			function ij(t) {
				return 0 === t.translate && 1 === t.scale;
			}
			function iF(t) {
				return ij(t.x) && ij(t.y);
			}
			function iB(t, e) {
				return t.min === e.min && t.max === e.max;
			}
			function iO(t, e) {
				return (
					Math.round(t.min) === Math.round(e.min) &&
					Math.round(t.max) === Math.round(e.max)
				);
			}
			function iI(t, e) {
				return iO(t.x, e.x) && iO(t.y, e.y);
			}
			function iW(t) {
				return eD(t.x) / eD(t.y);
			}
			function i$(t, e) {
				return (
					t.translate === e.translate &&
					t.scale === e.scale &&
					t.originPoint === e.originPoint
				);
			}
			class iU {
				constructor() {
					this.members = [];
				}
				add(t) {
					(0, ic.y4)(this.members, t), t.scheduleRender();
				}
				remove(t) {
					if (
						((0, ic.cl)(this.members, t),
						t === this.prevLead && (this.prevLead = void 0),
						t === this.lead)
					) {
						let t = this.members[this.members.length - 1];
						t && this.promote(t);
					}
				}
				relegate(t) {
					let e;
					let i = this.members.findIndex((e) => t === e);
					if (0 === i) return !1;
					for (let t = i; t >= 0; t--) {
						let i = this.members[t];
						if (!1 !== i.isPresent) {
							e = i;
							break;
						}
					}
					return !!e && (this.promote(e), !0);
				}
				promote(t, e) {
					let i = this.lead;
					if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
						i.instance && i.scheduleRender(),
							t.scheduleRender(),
							(t.resumeFrom = i),
							e && (t.resumeFrom.preserveOpacity = !0),
							i.snapshot &&
								((t.snapshot = i.snapshot),
								(t.snapshot.latestValues =
									i.animationValues || i.latestValues)),
							t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
						let { crossfade: n } = t.options;
						!1 === n && i.hide();
					}
				}
				exitAnimationComplete() {
					this.members.forEach((t) => {
						let { options: e, resumingFrom: i } = t;
						e.onExitComplete && e.onExitComplete(),
							i && i.options.onExitComplete && i.options.onExitComplete();
					});
				}
				scheduleRender() {
					this.members.forEach((t) => {
						t.instance && t.scheduleRender(!1);
					});
				}
				removeLeadSnapshot() {
					this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
				}
			}
			let iN = {
					type: 'projectionFrame',
					totalNodes: 0,
					resolvedTargetDeltas: 0,
					recalculatedProjection: 0
				},
				iX = 'undefined' != typeof window && void 0 !== window.MotionDebug,
				iz = ['', 'X', 'Y', 'Z'],
				iY = { visibility: 'hidden' },
				iK = 0;
			function iH(t, e, i, n) {
				let { latestValues: r } = e;
				r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
			}
			function iZ({
				attachResizeListener: t,
				defaultParent: e,
				measureScroll: i,
				checkIsScrollRoot: n,
				resetTransform: r
			}) {
				return class {
					constructor(t = {}, i = null == e ? void 0 : e()) {
						(this.id = iK++),
							(this.animationId = 0),
							(this.children = new Set()),
							(this.options = {}),
							(this.isTreeAnimating = !1),
							(this.isAnimationBlocked = !1),
							(this.isLayoutDirty = !1),
							(this.isProjectionDirty = !1),
							(this.isSharedProjectionDirty = !1),
							(this.isTransformDirty = !1),
							(this.updateManuallyBlocked = !1),
							(this.updateBlockedByResize = !1),
							(this.isUpdating = !1),
							(this.isSVG = !1),
							(this.needsReset = !1),
							(this.shouldResetTransform = !1),
							(this.hasCheckedOptimisedAppear = !1),
							(this.treeScale = { x: 1, y: 1 }),
							(this.eventHandlers = new Map()),
							(this.hasTreeAnimated = !1),
							(this.updateScheduled = !1),
							(this.scheduleUpdate = () => this.update()),
							(this.projectionUpdateScheduled = !1),
							(this.checkUpdateFailed = () => {
								this.isUpdating &&
									((this.isUpdating = !1), this.clearAllSnapshots());
							}),
							(this.updateProjection = () => {
								(this.projectionUpdateScheduled = !1),
									iX &&
										(iN.totalNodes =
											iN.resolvedTargetDeltas =
											iN.recalculatedProjection =
												0),
									this.nodes.forEach(iG),
									this.nodes.forEach(i9),
									this.nodes.forEach(i3),
									this.nodes.forEach(iJ),
									iX && window.MotionDebug.record(iN);
							}),
							(this.resolvedRelativeTargetAt = 0),
							(this.hasProjected = !1),
							(this.isVisible = !0),
							(this.animationProgress = 0),
							(this.sharedNodes = new Map()),
							(this.latestValues = t),
							(this.root = i ? i.root || i : this),
							(this.path = i ? [...i.path, i] : []),
							(this.parent = i),
							(this.depth = i ? i.depth + 1 : 0);
						for (let t = 0; t < this.path.length; t++)
							this.path[t].shouldResetTransform = !0;
						this.root === this && (this.nodes = new im());
					}
					addEventListener(t, e) {
						return (
							this.eventHandlers.has(t) ||
								this.eventHandlers.set(t, new iv.L()),
							this.eventHandlers.get(t).add(e)
						);
					}
					notifyListeners(t, ...e) {
						let i = this.eventHandlers.get(t);
						i && i.notify(...e);
					}
					hasListeners(t) {
						return this.eventHandlers.has(t);
					}
					mount(e, i = this.root.hasTreeAnimated) {
						if (this.instance) return;
						(this.isSVG = e instanceof SVGElement && 'svg' !== e.tagName),
							(this.instance = e);
						let { layoutId: n, layout: r, visualElement: s } = this.options;
						if (
							(s && !s.current && s.mount(e),
							this.root.nodes.add(this),
							this.parent && this.parent.children.add(this),
							i && (r || n) && (this.isLayoutDirty = !0),
							t)
						) {
							let i;
							let n = () => (this.root.updateBlockedByResize = !1);
							t(e, () => {
								(this.root.updateBlockedByResize = !0),
									i && i(),
									(i = (function (t, e) {
										let i = tV.X.now(),
											n = ({ timestamp: e }) => {
												let r = e - i;
												r >= 250 && ((0, D.Pn)(n), t(r - 250));
											};
										return D.Wi.read(n, !0), () => (0, D.Pn)(n);
									})(n, 0)),
									ii.hasAnimatedSinceResize &&
										((ii.hasAnimatedSinceResize = !1), this.nodes.forEach(i5));
							});
						}
						n && this.root.registerSharedNode(n, this),
							!1 !== this.options.animate &&
								s &&
								(n || r) &&
								this.addEventListener(
									'didUpdate',
									({
										delta: t,
										hasLayoutChanged: e,
										hasRelativeTargetChanged: i,
										layout: n
									}) => {
										if (this.isTreeAnimationBlocked()) {
											(this.target = void 0), (this.relativeTarget = void 0);
											return;
										}
										let r =
												this.options.transition ||
												s.getDefaultTransition() ||
												ne,
											{
												onLayoutAnimationStart: o,
												onLayoutAnimationComplete: a
											} = s.getProps(),
											l = !this.targetLayout || !iI(this.targetLayout, n) || i,
											u = !e && i;
										if (
											this.options.layoutRoot ||
											(this.resumeFrom && this.resumeFrom.instance) ||
											u ||
											(e && (l || !this.currentAnimation))
										) {
											this.resumeFrom &&
												((this.resumingFrom = this.resumeFrom),
												(this.resumingFrom.resumingFrom = void 0)),
												this.setAnimationOrigin(t, u);
											let e = {
												...(0, f.ev)(r, 'layout'),
												onPlay: o,
												onComplete: a
											};
											(s.shouldReduceMotion || this.options.layoutRoot) &&
												((e.delay = 0), (e.type = !1)),
												this.startAnimation(e);
										} else
											e || i5(this),
												this.isLead() &&
													this.options.onExitComplete &&
													this.options.onExitComplete();
										this.targetLayout = n;
									}
								);
					}
					unmount() {
						this.options.layoutId && this.willUpdate(),
							this.root.nodes.remove(this);
						let t = this.getStack();
						t && t.remove(this),
							this.parent && this.parent.children.delete(this),
							(this.instance = void 0),
							(0, D.Pn)(this.updateProjection);
					}
					blockUpdate() {
						this.updateManuallyBlocked = !0;
					}
					unblockUpdate() {
						this.updateManuallyBlocked = !1;
					}
					isUpdateBlocked() {
						return this.updateManuallyBlocked || this.updateBlockedByResize;
					}
					isTreeAnimationBlocked() {
						return (
							this.isAnimationBlocked ||
							(this.parent && this.parent.isTreeAnimationBlocked()) ||
							!1
						);
					}
					startUpdate() {
						!this.isUpdateBlocked() &&
							((this.isUpdating = !0),
							this.nodes && this.nodes.forEach(i8),
							this.animationId++);
					}
					getTransformTemplate() {
						let { visualElement: t } = this.options;
						return t && t.getProps().transformTemplate;
					}
					willUpdate(t = !0) {
						if (
							((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
						) {
							this.options.onExitComplete && this.options.onExitComplete();
							return;
						}
						if (
							(window.MotionCancelOptimisedAnimation &&
								!this.hasCheckedOptimisedAppear &&
								(function t(e) {
									if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
										return;
									let { visualElement: i } = e.options;
									if (!i) return;
									let n = i.props[A];
									if (window.MotionHasOptimisedAnimation(n, 'transform')) {
										let { layout: t, layoutId: i } = e.options;
										window.MotionCancelOptimisedAnimation(
											n,
											'transform',
											D.Wi,
											!(t || i)
										);
									}
									let { parent: r } = e;
									r && !r.hasCheckedOptimisedAppear && t(r);
								})(this),
							this.root.isUpdating || this.root.startUpdate(),
							this.isLayoutDirty)
						)
							return;
						this.isLayoutDirty = !0;
						for (let t = 0; t < this.path.length; t++) {
							let e = this.path[t];
							(e.shouldResetTransform = !0),
								e.updateScroll('snapshot'),
								e.options.layoutRoot && e.willUpdate(!1);
						}
						let { layoutId: e, layout: i } = this.options;
						if (void 0 === e && !i) return;
						let n = this.getTransformTemplate();
						(this.prevTransformTemplateValue = n
							? n(this.latestValues, '')
							: void 0),
							this.updateSnapshot(),
							t && this.notifyListeners('willUpdate');
					}
					update() {
						if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
							this.unblockUpdate(),
								this.clearAllSnapshots(),
								this.nodes.forEach(i0);
							return;
						}
						this.isUpdating || this.nodes.forEach(i1),
							(this.isUpdating = !1),
							this.nodes.forEach(i2),
							this.nodes.forEach(iq),
							this.nodes.forEach(i_),
							this.clearAllSnapshots();
						let t = tV.X.now();
						(D.frameData.delta = (0, tR.u)(
							0,
							1e3 / 60,
							t - D.frameData.timestamp
						)),
							(D.frameData.timestamp = t),
							(D.frameData.isProcessing = !0),
							D.yL.update.process(D.frameData),
							D.yL.preRender.process(D.frameData),
							D.yL.render.process(D.frameData),
							(D.frameData.isProcessing = !1);
					}
					didUpdate() {
						this.updateScheduled ||
							((this.updateScheduled = !0), ia.read(this.scheduleUpdate));
					}
					clearAllSnapshots() {
						this.nodes.forEach(iQ), this.sharedNodes.forEach(i6);
					}
					scheduleUpdateProjection() {
						this.projectionUpdateScheduled ||
							((this.projectionUpdateScheduled = !0),
							D.Wi.preRender(this.updateProjection, !1, !0));
					}
					scheduleCheckAfterUnmount() {
						D.Wi.postRender(() => {
							this.isLayoutDirty
								? this.root.didUpdate()
								: this.root.checkUpdateFailed();
						});
					}
					updateSnapshot() {
						!this.snapshot && this.instance && (this.snapshot = this.measure());
					}
					updateLayout() {
						if (
							!this.instance ||
							(this.updateScroll(),
							!(this.options.alwaysMeasureLayout && this.isLead()) &&
								!this.isLayoutDirty)
						)
							return;
						if (this.resumeFrom && !this.resumeFrom.instance)
							for (let t = 0; t < this.path.length; t++)
								this.path[t].updateScroll();
						let t = this.layout;
						(this.layout = this.measure(!1)),
							(this.layoutCorrected = e$()),
							(this.isLayoutDirty = !1),
							(this.projectionDelta = void 0),
							this.notifyListeners('measure', this.layout.layoutBox);
						let { visualElement: e } = this.options;
						e &&
							e.notify(
								'LayoutMeasure',
								this.layout.layoutBox,
								t ? t.layoutBox : void 0
							);
					}
					updateScroll(t = 'measure') {
						let e = !!(this.options.layoutScroll && this.instance);
						if (
							(this.scroll &&
								this.scroll.animationId === this.root.animationId &&
								this.scroll.phase === t &&
								(e = !1),
							e)
						) {
							let e = n(this.instance);
							this.scroll = {
								animationId: this.root.animationId,
								phase: t,
								isRoot: e,
								offset: i(this.instance),
								wasRoot: this.scroll ? this.scroll.isRoot : e
							};
						}
					}
					resetTransform() {
						if (!r) return;
						let t =
								this.isLayoutDirty ||
								this.shouldResetTransform ||
								this.options.alwaysMeasureLayout,
							e = this.projectionDelta && !iF(this.projectionDelta),
							i = this.getTransformTemplate(),
							n = i ? i(this.latestValues, '') : void 0,
							s = n !== this.prevTransformTemplateValue;
						t &&
							(e || eY(this.latestValues) || s) &&
							(r(this.instance, n),
							(this.shouldResetTransform = !1),
							this.scheduleRender());
					}
					measure(t = !0) {
						var e;
						let i = this.measurePageBox(),
							n = this.removeElementScroll(i);
						return (
							t && (n = this.removeTransform(n)),
							nr((e = n).x),
							nr(e.y),
							{
								animationId: this.root.animationId,
								measuredBox: i,
								layoutBox: n,
								latestValues: {},
								source: this.id
							}
						);
					}
					measurePageBox() {
						var t;
						let { visualElement: e } = this.options;
						if (!e) return e$();
						let i = e.measureViewportBox();
						if (
							!(
								(null === (t = this.scroll) || void 0 === t
									? void 0
									: t.wasRoot) || this.path.some(no)
							)
						) {
							let { scroll: t } = this.root;
							t && (e_(i.x, t.offset.x), e_(i.y, t.offset.y));
						}
						return i;
					}
					removeElementScroll(t) {
						var e;
						let i = e$();
						if (
							(iD(i, t),
							null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
						)
							return i;
						for (let e = 0; e < this.path.length; e++) {
							let n = this.path[e],
								{ scroll: r, options: s } = n;
							n !== this.root &&
								r &&
								s.layoutScroll &&
								(r.wasRoot && iD(i, t),
								e_(i.x, r.offset.x),
								e_(i.y, r.offset.y));
						}
						return i;
					}
					applyTransform(t, e = !1) {
						let i = e$();
						iD(i, t);
						for (let t = 0; t < this.path.length; t++) {
							let n = this.path[t];
							!e &&
								n.options.layoutScroll &&
								n.scroll &&
								n !== n.root &&
								eJ(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
								eY(n.latestValues) && eJ(i, n.latestValues);
						}
						return eY(this.latestValues) && eJ(i, this.latestValues), i;
					}
					removeTransform(t) {
						let e = e$();
						iD(e, t);
						for (let t = 0; t < this.path.length; t++) {
							let i = this.path[t];
							if (!i.instance || !eY(i.latestValues)) continue;
							ez(i.latestValues) && i.updateSnapshot();
							let n = e$();
							iD(n, i.measurePageBox()),
								iL(
									e,
									i.latestValues,
									i.snapshot ? i.snapshot.layoutBox : void 0,
									n
								);
						}
						return eY(this.latestValues) && iL(e, this.latestValues), e;
					}
					setTargetDelta(t) {
						(this.targetDelta = t),
							this.root.scheduleUpdateProjection(),
							(this.isProjectionDirty = !0);
					}
					setOptions(t) {
						this.options = {
							...this.options,
							...t,
							crossfade: void 0 === t.crossfade || t.crossfade
						};
					}
					clearMeasurements() {
						(this.scroll = void 0),
							(this.layout = void 0),
							(this.snapshot = void 0),
							(this.prevTransformTemplateValue = void 0),
							(this.targetDelta = void 0),
							(this.target = void 0),
							(this.isLayoutDirty = !1);
					}
					forceRelativeParentToResolveTarget() {
						this.relativeParent &&
							this.relativeParent.resolvedRelativeTargetAt !==
								D.frameData.timestamp &&
							this.relativeParent.resolveTargetDelta(!0);
					}
					resolveTargetDelta(t = !1) {
						var e, i, n, r;
						let s = this.getLead();
						this.isProjectionDirty ||
							(this.isProjectionDirty = s.isProjectionDirty),
							this.isTransformDirty ||
								(this.isTransformDirty = s.isTransformDirty),
							this.isSharedProjectionDirty ||
								(this.isSharedProjectionDirty = s.isSharedProjectionDirty);
						let o = !!this.resumingFrom || this !== s;
						if (
							!(
								t ||
								(o && this.isSharedProjectionDirty) ||
								this.isProjectionDirty ||
								(null === (e = this.parent) || void 0 === e
									? void 0
									: e.isProjectionDirty) ||
								this.attemptToResolveRelativeTarget ||
								this.root.updateBlockedByResize
							)
						)
							return;
						let { layout: a, layoutId: l } = this.options;
						if (this.layout && (a || l)) {
							if (
								((this.resolvedRelativeTargetAt = D.frameData.timestamp),
								!this.targetDelta && !this.relativeTarget)
							) {
								let t = this.getClosestProjectingParent();
								t && t.layout && 1 !== this.animationProgress
									? ((this.relativeParent = t),
										this.forceRelativeParentToResolveTarget(),
										(this.relativeTarget = e$()),
										(this.relativeTargetOrigin = e$()),
										ek(
											this.relativeTargetOrigin,
											this.layout.layoutBox,
											t.layout.layoutBox
										),
										iD(this.relativeTarget, this.relativeTargetOrigin))
									: (this.relativeParent = this.relativeTarget = void 0);
							}
							if (this.relativeTarget || this.targetDelta) {
								if (
									((this.target ||
										((this.target = e$()), (this.targetWithTransforms = e$())),
									this.relativeTarget &&
										this.relativeTargetOrigin &&
										this.relativeParent &&
										this.relativeParent.target)
										? (this.forceRelativeParentToResolveTarget(),
											(i = this.target),
											(n = this.relativeTarget),
											(r = this.relativeParent.target),
											eC(i.x, n.x, r.x),
											eC(i.y, n.y, r.y))
										: this.targetDelta
											? (this.resumingFrom
													? (this.target = this.applyTransform(
															this.layout.layoutBox
														))
													: iD(this.target, this.layout.layoutBox),
												eq(this.target, this.targetDelta))
											: iD(this.target, this.layout.layoutBox),
									this.attemptToResolveRelativeTarget)
								) {
									this.attemptToResolveRelativeTarget = !1;
									let t = this.getClosestProjectingParent();
									t &&
									!!t.resumingFrom == !!this.resumingFrom &&
									!t.options.layoutScroll &&
									t.target &&
									1 !== this.animationProgress
										? ((this.relativeParent = t),
											this.forceRelativeParentToResolveTarget(),
											(this.relativeTarget = e$()),
											(this.relativeTargetOrigin = e$()),
											ek(this.relativeTargetOrigin, this.target, t.target),
											iD(this.relativeTarget, this.relativeTargetOrigin))
										: (this.relativeParent = this.relativeTarget = void 0);
								}
								iX && iN.resolvedTargetDeltas++;
							}
						}
					}
					getClosestProjectingParent() {
						return !this.parent ||
							ez(this.parent.latestValues) ||
							eK(this.parent.latestValues)
							? void 0
							: this.parent.isProjecting()
								? this.parent
								: this.parent.getClosestProjectingParent();
					}
					isProjecting() {
						return !!(
							(this.relativeTarget ||
								this.targetDelta ||
								this.options.layoutRoot) &&
							this.layout
						);
					}
					calcProjection() {
						var t;
						let e = this.getLead(),
							i = !!this.resumingFrom || this !== e,
							n = !0;
						if (
							((this.isProjectionDirty ||
								(null === (t = this.parent) || void 0 === t
									? void 0
									: t.isProjectionDirty)) &&
								(n = !1),
							i &&
								(this.isSharedProjectionDirty || this.isTransformDirty) &&
								(n = !1),
							this.resolvedRelativeTargetAt === D.frameData.timestamp &&
								(n = !1),
							n)
						)
							return;
						let { layout: r, layoutId: s } = this.options;
						if (
							((this.isTreeAnimating = !!(
								(this.parent && this.parent.isTreeAnimating) ||
								this.currentAnimation ||
								this.pendingAnimation
							)),
							this.isTreeAnimating ||
								(this.targetDelta = this.relativeTarget = void 0),
							!this.layout || !(r || s))
						)
							return;
						iD(this.layoutCorrected, this.layout.layoutBox);
						let o = this.treeScale.x,
							a = this.treeScale.y;
						!(function (t, e, i, n = !1) {
							let r, s;
							let o = i.length;
							if (o) {
								e.x = e.y = 1;
								for (let a = 0; a < o; a++) {
									s = (r = i[a]).projectionDelta;
									let { visualElement: o } = r.options;
									(!o ||
										!o.props.style ||
										'contents' !== o.props.style.display) &&
										(n &&
											r.options.layoutScroll &&
											r.scroll &&
											r !== r.root &&
											eJ(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
										s && ((e.x *= s.x.scale), (e.y *= s.y.scale), eq(t, s)),
										n && eY(r.latestValues) && eJ(t, r.latestValues));
								}
								e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
									e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
							}
						})(this.layoutCorrected, this.treeScale, this.path, i),
							e.layout &&
								!e.target &&
								(1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
								((e.target = e.layout.layoutBox),
								(e.targetWithTransforms = e$()));
						let { target: l } = e;
						if (!l) {
							this.prevProjectionDelta &&
								(this.createProjectionDeltas(), this.scheduleRender());
							return;
						}
						this.projectionDelta && this.prevProjectionDelta
							? (iE(this.prevProjectionDelta.x, this.projectionDelta.x),
								iE(this.prevProjectionDelta.y, this.projectionDelta.y))
							: this.createProjectionDeltas(),
							eM(
								this.projectionDelta,
								this.layoutCorrected,
								l,
								this.latestValues
							),
							(this.treeScale.x === o &&
								this.treeScale.y === a &&
								i$(this.projectionDelta.x, this.prevProjectionDelta.x) &&
								i$(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
								((this.hasProjected = !0),
								this.scheduleRender(),
								this.notifyListeners('projectionUpdate', l)),
							iX && iN.recalculatedProjection++;
					}
					hide() {
						this.isVisible = !1;
					}
					show() {
						this.isVisible = !0;
					}
					scheduleRender(t = !0) {
						var e;
						if (
							(null === (e = this.options.visualElement) ||
								void 0 === e ||
								e.scheduleRender(),
							t)
						) {
							let t = this.getStack();
							t && t.scheduleRender();
						}
						this.resumingFrom &&
							!this.resumingFrom.instance &&
							(this.resumingFrom = void 0);
					}
					createProjectionDeltas() {
						(this.prevProjectionDelta = eI()),
							(this.projectionDelta = eI()),
							(this.projectionDeltaWithTransform = eI());
					}
					setAnimationOrigin(t, e = !1) {
						let i;
						let n = this.snapshot,
							r = n ? n.latestValues : {},
							s = { ...this.latestValues },
							o = eI();
						(this.relativeParent && this.relativeParent.options.layoutRoot) ||
							(this.relativeTarget = this.relativeTargetOrigin = void 0),
							(this.attemptToResolveRelativeTarget = !e);
						let a = e$(),
							l =
								(n ? n.source : void 0) !==
								(this.layout ? this.layout.source : void 0),
							u = this.getStack(),
							h = !u || u.members.length <= 1,
							d = !!(
								l &&
								!h &&
								!0 === this.options.crossfade &&
								!this.path.some(nt)
							);
						(this.animationProgress = 0),
							(this.mixTargetDelta = (e) => {
								let n = e / 1e3;
								if (
									(i4(o.x, t.x, n),
									i4(o.y, t.y, n),
									this.setTargetDelta(o),
									this.relativeTarget &&
										this.relativeTargetOrigin &&
										this.layout &&
										this.relativeParent &&
										this.relativeParent.layout)
								) {
									var u, c, p, m;
									ek(
										a,
										this.layout.layoutBox,
										this.relativeParent.layout.layoutBox
									),
										(p = this.relativeTarget),
										(m = this.relativeTargetOrigin),
										i7(p.x, m.x, a.x, n),
										i7(p.y, m.y, a.y, n),
										i &&
											((u = this.relativeTarget),
											(c = i),
											iB(u.x, c.x) && iB(u.y, c.y)) &&
											(this.isProjectionDirty = !1),
										i || (i = e$()),
										iD(i, this.relativeTarget);
								}
								l &&
									((this.animationValues = s),
									(function (t, e, i, n, r, s) {
										r
											? ((t.opacity = (0, eV.t)(
													0,
													void 0 !== i.opacity ? i.opacity : 1,
													ib(n)
												)),
												(t.opacityExit = (0, eV.t)(
													void 0 !== e.opacity ? e.opacity : 1,
													0,
													iS(n)
												)))
											: s &&
												(t.opacity = (0, eV.t)(
													void 0 !== e.opacity ? e.opacity : 1,
													void 0 !== i.opacity ? i.opacity : 1,
													n
												));
										for (let r = 0; r < ix; r++) {
											let s = `border${iy[r]}Radius`,
												o = iT(e, s),
												a = iT(i, s);
											(void 0 !== o || void 0 !== a) &&
												(o || (o = 0),
												a || (a = 0),
												0 === o || 0 === a || iw(o) === iw(a)
													? ((t[s] = Math.max((0, eV.t)(iP(o), iP(a), n), 0)),
														(G.aQ.test(a) || G.aQ.test(o)) && (t[s] += '%'))
													: (t[s] = a));
										}
										(e.rotate || i.rotate) &&
											(t.rotate = (0, eV.t)(e.rotate || 0, i.rotate || 0, n));
									})(s, r, this.latestValues, n, d, h)),
									this.root.scheduleUpdateProjection(),
									this.scheduleRender(),
									(this.animationProgress = n);
							}),
							this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
					}
					startAnimation(t) {
						this.notifyListeners('animationStart'),
							this.currentAnimation && this.currentAnimation.stop(),
							this.resumingFrom &&
								this.resumingFrom.currentAnimation &&
								this.resumingFrom.currentAnimation.stop(),
							this.pendingAnimation &&
								((0, D.Pn)(this.pendingAnimation),
								(this.pendingAnimation = void 0)),
							(this.pendingAnimation = D.Wi.update(() => {
								(ii.hasAnimatedSinceResize = !0),
									(this.currentAnimation = (function (t, e, i) {
										let n = (0, T.i)(0) ? 0 : (0, w.BX)(0);
										return n.start(ee('', n, 1e3, i)), n.animation;
									})(0, 0, {
										...t,
										onUpdate: (e) => {
											this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
										},
										onComplete: () => {
											t.onComplete && t.onComplete(), this.completeAnimation();
										}
									})),
									this.resumingFrom &&
										(this.resumingFrom.currentAnimation =
											this.currentAnimation),
									(this.pendingAnimation = void 0);
							}));
					}
					completeAnimation() {
						this.resumingFrom &&
							((this.resumingFrom.currentAnimation = void 0),
							(this.resumingFrom.preserveOpacity = void 0));
						let t = this.getStack();
						t && t.exitAnimationComplete(),
							(this.resumingFrom =
								this.currentAnimation =
								this.animationValues =
									void 0),
							this.notifyListeners('animationComplete');
					}
					finishAnimation() {
						this.currentAnimation &&
							(this.mixTargetDelta && this.mixTargetDelta(1e3),
							this.currentAnimation.stop()),
							this.completeAnimation();
					}
					applyTransformsToTarget() {
						let t = this.getLead(),
							{
								targetWithTransforms: e,
								target: i,
								layout: n,
								latestValues: r
							} = t;
						if (e && i && n) {
							if (
								this !== t &&
								this.layout &&
								n &&
								ns(
									this.options.animationType,
									this.layout.layoutBox,
									n.layoutBox
								)
							) {
								i = this.target || e$();
								let e = eD(this.layout.layoutBox.x);
								(i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
								let n = eD(this.layout.layoutBox.y);
								(i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
							}
							iD(e, i),
								eJ(e, r),
								eM(
									this.projectionDeltaWithTransform,
									this.layoutCorrected,
									e,
									r
								);
						}
					}
					registerSharedNode(t, e) {
						this.sharedNodes.has(t) || this.sharedNodes.set(t, new iU()),
							this.sharedNodes.get(t).add(e);
						let i = e.options.initialPromotionConfig;
						e.promote({
							transition: i ? i.transition : void 0,
							preserveFollowOpacity:
								i && i.shouldPreserveFollowOpacity
									? i.shouldPreserveFollowOpacity(e)
									: void 0
						});
					}
					isLead() {
						let t = this.getStack();
						return !t || t.lead === this;
					}
					getLead() {
						var t;
						let { layoutId: e } = this.options;
						return (
							(e &&
								(null === (t = this.getStack()) || void 0 === t
									? void 0
									: t.lead)) ||
							this
						);
					}
					getPrevLead() {
						var t;
						let { layoutId: e } = this.options;
						return e
							? null === (t = this.getStack()) || void 0 === t
								? void 0
								: t.prevLead
							: void 0;
					}
					getStack() {
						let { layoutId: t } = this.options;
						if (t) return this.root.sharedNodes.get(t);
					}
					promote({
						needsReset: t,
						transition: e,
						preserveFollowOpacity: i
					} = {}) {
						let n = this.getStack();
						n && n.promote(this, i),
							t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
							e && this.setOptions({ transition: e });
					}
					relegate() {
						let t = this.getStack();
						return !!t && t.relegate(this);
					}
					resetSkewAndRotation() {
						let { visualElement: t } = this.options;
						if (!t) return;
						let e = !1,
							{ latestValues: i } = t;
						if (
							((i.z ||
								i.rotate ||
								i.rotateX ||
								i.rotateY ||
								i.rotateZ ||
								i.skewX ||
								i.skewY) &&
								(e = !0),
							!e)
						)
							return;
						let n = {};
						i.z && iH('z', t, n, this.animationValues);
						for (let e = 0; e < iz.length; e++)
							iH(`rotate${iz[e]}`, t, n, this.animationValues),
								iH(`skew${iz[e]}`, t, n, this.animationValues);
						for (let e in (t.render(), n))
							t.setStaticValue(e, n[e]),
								this.animationValues && (this.animationValues[e] = n[e]);
						t.scheduleRender();
					}
					getProjectionStyles(t) {
						var e, i;
						if (!this.instance || this.isSVG) return;
						if (!this.isVisible) return iY;
						let n = { visibility: '' },
							r = this.getTransformTemplate();
						if (this.needsReset)
							return (
								(this.needsReset = !1),
								(n.opacity = ''),
								(n.pointerEvents =
									ig(null == t ? void 0 : t.pointerEvents) || ''),
								(n.transform = r ? r(this.latestValues, '') : 'none'),
								n
							);
						let s = this.getLead();
						if (!this.projectionDelta || !this.layout || !s.target) {
							let e = {};
							return (
								this.options.layoutId &&
									((e.opacity =
										void 0 !== this.latestValues.opacity
											? this.latestValues.opacity
											: 1),
									(e.pointerEvents =
										ig(null == t ? void 0 : t.pointerEvents) || '')),
								this.hasProjected &&
									!eY(this.latestValues) &&
									((e.transform = r ? r({}, '') : 'none'),
									(this.hasProjected = !1)),
								e
							);
						}
						let o = s.animationValues || s.latestValues;
						this.applyTransformsToTarget(),
							(n.transform = (function (t, e, i) {
								let n = '',
									r = t.x.translate / e.x,
									s = t.y.translate / e.y,
									o = (null == i ? void 0 : i.z) || 0;
								if (
									((r || s || o) &&
										(n = `translate3d(${r}px, ${s}px, ${o}px) `),
									(1 !== e.x || 1 !== e.y) &&
										(n += `scale(${1 / e.x}, ${1 / e.y}) `),
									i)
								) {
									let {
										transformPerspective: t,
										rotate: e,
										rotateX: r,
										rotateY: s,
										skewX: o,
										skewY: a
									} = i;
									t && (n = `perspective(${t}px) ${n}`),
										e && (n += `rotate(${e}deg) `),
										r && (n += `rotateX(${r}deg) `),
										s && (n += `rotateY(${s}deg) `),
										o && (n += `skewX(${o}deg) `),
										a && (n += `skewY(${a}deg) `);
								}
								let a = t.x.scale * e.x,
									l = t.y.scale * e.y;
								return (
									(1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
									n || 'none'
								);
							})(this.projectionDeltaWithTransform, this.treeScale, o)),
							r && (n.transform = r(o, n.transform));
						let { x: a, y: l } = this.projectionDelta;
						for (let t in ((n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
						s.animationValues
							? (n.opacity =
									s === this
										? null !==
												(i =
													null !== (e = o.opacity) && void 0 !== e
														? e
														: this.latestValues.opacity) && void 0 !== i
											? i
											: 1
										: this.preserveOpacity
											? this.latestValues.opacity
											: o.opacityExit)
							: (n.opacity =
									s === this
										? void 0 !== o.opacity
											? o.opacity
											: ''
										: void 0 !== o.opacityExit
											? o.opacityExit
											: 0),
						io)) {
							if (void 0 === o[t]) continue;
							let { correct: e, applyTo: i } = io[t],
								r = 'none' === n.transform ? o[t] : e(o[t], s);
							if (i) {
								let t = i.length;
								for (let e = 0; e < t; e++) n[i[e]] = r;
							} else n[t] = r;
						}
						return (
							this.options.layoutId &&
								(n.pointerEvents =
									s === this
										? ig(null == t ? void 0 : t.pointerEvents) || ''
										: 'none'),
							n
						);
					}
					clearSnapshot() {
						this.resumeFrom = this.snapshot = void 0;
					}
					resetTree() {
						this.root.nodes.forEach((t) => {
							var e;
							return null === (e = t.currentAnimation) || void 0 === e
								? void 0
								: e.stop();
						}),
							this.root.nodes.forEach(i0),
							this.root.sharedNodes.clear();
					}
				};
			}
			function iq(t) {
				t.updateLayout();
			}
			function i_(t) {
				var e;
				let i =
					(null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
					t.snapshot;
				if (t.isLead() && t.layout && i && t.hasListeners('didUpdate')) {
					let { layoutBox: e, measuredBox: n } = t.layout,
						{ animationType: r } = t.options,
						s = i.source !== t.layout.source;
					'size' === r
						? eU((t) => {
								let n = s ? i.measuredBox[t] : i.layoutBox[t],
									r = eD(n);
								(n.min = e[t].min), (n.max = n.min + r);
							})
						: ns(r, i.layoutBox, e) &&
							eU((n) => {
								let r = s ? i.measuredBox[n] : i.layoutBox[n],
									o = eD(e[n]);
								(r.max = r.min + o),
									t.relativeTarget &&
										!t.currentAnimation &&
										((t.isProjectionDirty = !0),
										(t.relativeTarget[n].max = t.relativeTarget[n].min + o));
							});
					let o = eI();
					eM(o, e, i.layoutBox);
					let a = eI();
					s
						? eM(a, t.applyTransform(n, !0), i.measuredBox)
						: eM(a, e, i.layoutBox);
					let l = !iF(o),
						u = !1;
					if (!t.resumeFrom) {
						let n = t.getClosestProjectingParent();
						if (n && !n.resumeFrom) {
							let { snapshot: r, layout: s } = n;
							if (r && s) {
								let o = e$();
								ek(o, i.layoutBox, r.layoutBox);
								let a = e$();
								ek(a, e, s.layoutBox),
									iI(o, a) || (u = !0),
									n.options.layoutRoot &&
										((t.relativeTarget = a),
										(t.relativeTargetOrigin = o),
										(t.relativeParent = n));
							}
						}
					}
					t.notifyListeners('didUpdate', {
						layout: e,
						snapshot: i,
						delta: a,
						layoutDelta: o,
						hasLayoutChanged: l,
						hasRelativeTargetChanged: u
					});
				} else if (t.isLead()) {
					let { onExitComplete: e } = t.options;
					e && e();
				}
				t.options.transition = void 0;
			}
			function iG(t) {
				iX && iN.totalNodes++,
					t.parent &&
						(t.isProjecting() ||
							(t.isProjectionDirty = t.parent.isProjectionDirty),
						t.isSharedProjectionDirty ||
							(t.isSharedProjectionDirty = !!(
								t.isProjectionDirty ||
								t.parent.isProjectionDirty ||
								t.parent.isSharedProjectionDirty
							)),
						t.isTransformDirty ||
							(t.isTransformDirty = t.parent.isTransformDirty));
			}
			function iJ(t) {
				t.isProjectionDirty =
					t.isSharedProjectionDirty =
					t.isTransformDirty =
						!1;
			}
			function iQ(t) {
				t.clearSnapshot();
			}
			function i0(t) {
				t.clearMeasurements();
			}
			function i1(t) {
				t.isLayoutDirty = !1;
			}
			function i2(t) {
				let { visualElement: e } = t.options;
				e &&
					e.getProps().onBeforeLayoutMeasure &&
					e.notify('BeforeLayoutMeasure'),
					t.resetTransform();
			}
			function i5(t) {
				t.finishAnimation(),
					(t.targetDelta = t.relativeTarget = t.target = void 0),
					(t.isProjectionDirty = !0);
			}
			function i9(t) {
				t.resolveTargetDelta();
			}
			function i3(t) {
				t.calcProjection();
			}
			function i8(t) {
				t.resetSkewAndRotation();
			}
			function i6(t) {
				t.removeLeadSnapshot();
			}
			function i4(t, e, i) {
				(t.translate = (0, eV.t)(e.translate, 0, i)),
					(t.scale = (0, eV.t)(e.scale, 1, i)),
					(t.origin = e.origin),
					(t.originPoint = e.originPoint);
			}
			function i7(t, e, i, n) {
				(t.min = (0, eV.t)(e.min, i.min, n)),
					(t.max = (0, eV.t)(e.max, i.max, n));
			}
			function nt(t) {
				return t.animationValues && void 0 !== t.animationValues.opacityExit;
			}
			let ne = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
				ni = (t) =>
					'undefined' != typeof navigator &&
					navigator.userAgent &&
					navigator.userAgent.toLowerCase().includes(t),
				nn = ni('applewebkit/') && !ni('chrome/') ? Math.round : C.Z;
			function nr(t) {
				(t.min = nn(t.min)), (t.max = nn(t.max));
			}
			function ns(t, e, i) {
				return (
					'position' === t ||
					('preserve-aspect' === t && !(0.2 >= Math.abs(iW(e) - iW(i))))
				);
			}
			function no(t) {
				var e;
				return (
					t !== t.root &&
					(null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
				);
			}
			let na = iZ({
					attachResizeListener: (t, e) => em(t, 'resize', e),
					measureScroll: () => ({
						x: document.documentElement.scrollLeft || document.body.scrollLeft,
						y: document.documentElement.scrollTop || document.body.scrollTop
					}),
					checkIsScrollRoot: () => !0
				}),
				nl = { current: void 0 },
				nu = iZ({
					measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
					defaultParent: () => {
						if (!nl.current) {
							let t = new na({});
							t.mount(window),
								t.setOptions({ layoutScroll: !0 }),
								(nl.current = t);
						}
						return nl.current;
					},
					resetTransform: (t, e) => {
						t.style.transform = void 0 !== e ? e : 'none';
					},
					checkIsScrollRoot: (t) =>
						'fixed' === window.getComputedStyle(t).position
				});
			function nh(t, e, i) {
				let { props: n } = t;
				t.animationState &&
					n.whileHover &&
					t.animationState.setActive('whileHover', 'Start' === i);
				let r = n['onHover' + i];
				r && D.Wi.postRender(() => r(e, ef(e)));
			}
			class nd extends eh {
				mount() {
					let { current: t } = this.node;
					t &&
						(this.unmount = (0, f.Mr)(
							t,
							(t) => (nh(this.node, t, 'Start'), (t) => nh(this.node, t, 'End'))
						));
				}
				unmount() {}
			}
			class nc extends eh {
				constructor() {
					super(...arguments), (this.isActive = !1);
				}
				onFocus() {
					let t = !1;
					try {
						t = this.node.current.matches(':focus-visible');
					} catch (e) {
						t = !0;
					}
					t &&
						this.node.animationState &&
						(this.node.animationState.setActive('whileFocus', !0),
						(this.isActive = !0));
				}
				onBlur() {
					this.isActive &&
						this.node.animationState &&
						(this.node.animationState.setActive('whileFocus', !1),
						(this.isActive = !1));
				}
				mount() {
					this.unmount = (0, tL.z)(
						em(this.node.current, 'focus', () => this.onFocus()),
						em(this.node.current, 'blur', () => this.onBlur())
					);
				}
				unmount() {}
			}
			function np(t, e, i) {
				let { props: n } = t;
				t.animationState &&
					n.whileTap &&
					t.animationState.setActive('whileTap', 'Start' === i);
				let r = n['onTap' + ('End' === i ? '' : i)];
				r && D.Wi.postRender(() => r(e, ef(e)));
			}
			class nm extends eh {
				mount() {
					let { current: t } = this.node;
					t &&
						(this.unmount = (0, f.OD)(
							t,
							(t) => (
								np(this.node, t, 'Start'),
								(t, { success: e }) => np(this.node, t, e ? 'End' : 'Cancel')
							),
							{ useGlobalTarget: this.node.props.globalTapTarget }
						));
				}
				unmount() {}
			}
			let nf = new WeakMap(),
				nv = new WeakMap(),
				ng = (t) => {
					let e = nf.get(t.target);
					e && e(t);
				},
				ny = (t) => {
					t.forEach(ng);
				},
				nx = { some: 0, all: 1 };
			class nP extends eh {
				constructor() {
					super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
				}
				startObserver() {
					this.unmount();
					let { viewport: t = {} } = this.node.getProps(),
						{ root: e, margin: i, amount: n = 'some', once: r } = t,
						s = {
							root: e ? e.current : void 0,
							rootMargin: i,
							threshold: 'number' == typeof n ? n : nx[n]
						};
					return (function (t, e, i) {
						let n = (function ({ root: t, ...e }) {
							let i = t || document;
							nv.has(i) || nv.set(i, {});
							let n = nv.get(i),
								r = JSON.stringify(e);
							return (
								n[r] ||
									(n[r] = new IntersectionObserver(ny, { root: t, ...e })),
								n[r]
							);
						})(e);
						return (
							nf.set(t, i),
							n.observe(t),
							() => {
								nf.delete(t), n.unobserve(t);
							}
						);
					})(this.node.current, s, (t) => {
						let { isIntersecting: e } = t;
						if (
							this.isInView === e ||
							((this.isInView = e), r && !e && this.hasEnteredView)
						)
							return;
						e && (this.hasEnteredView = !0),
							this.node.animationState &&
								this.node.animationState.setActive('whileInView', e);
						let { onViewportEnter: i, onViewportLeave: n } =
								this.node.getProps(),
							s = e ? i : n;
						s && s(t);
					});
				}
				mount() {
					this.startObserver();
				}
				update() {
					if ('undefined' == typeof IntersectionObserver) return;
					let { props: t, prevProps: e } = this.node;
					['amount', 'margin', 'root'].some(
						(function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
							return (i) => t[i] !== e[i];
						})(t, e)
					) && this.startObserver();
				}
				unmount() {}
			}
			let nw = (0, e4.createContext)({ strict: !1 });
			var nT = i(8378);
			let nb = (0, e4.createContext)({});
			function nS(t) {
				return n(t.animate) || d.some((e) => o(t[e]));
			}
			function nA(t) {
				return !!(nS(t) || t.variants);
			}
			function nV(t) {
				return Array.isArray(t) ? t.join(' ') : t;
			}
			var nD = i(1657);
			let nE = {
					animation: [
						'animate',
						'variants',
						'whileHover',
						'whileTap',
						'exit',
						'whileInView',
						'whileFocus',
						'whileDrag'
					],
					exit: ['exit'],
					drag: ['drag', 'dragControls'],
					focus: ['whileFocus'],
					hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
					tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
					pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
					inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
					layout: ['layout', 'layoutId']
				},
				nM = {};
			for (let t in nE) nM[t] = { isEnabled: (e) => nE[t].some((t) => !!e[t]) };
			let nC = Symbol.for('motionComponentSymbol');
			var nR = i(5820),
				nk = i(740);
			let nL = [
				'animate',
				'circle',
				'defs',
				'desc',
				'ellipse',
				'g',
				'image',
				'line',
				'filter',
				'marker',
				'mask',
				'metadata',
				'path',
				'pattern',
				'polygon',
				'polyline',
				'rect',
				'stop',
				'switch',
				'symbol',
				'svg',
				'text',
				'tspan',
				'use',
				'view'
			];
			function nj(t) {
				if ('string' != typeof t || t.includes('-'));
				else if (nL.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
				return !1;
			}
			var nF = i(7047);
			let nB = (t) => (e, i) => {
					let r = (0, e4.useContext)(nb),
						s = (0, e4.useContext)(nR.O),
						o = () =>
							(function (
								{
									scrapeMotionValuesFromProps: t,
									createRenderState: e,
									onUpdate: i
								},
								r,
								s,
								o
							) {
								let a = {
									latestValues: (function (t, e, i, r) {
										let s = {},
											o = r(t, {});
										for (let t in o) s[t] = ig(o[t]);
										let { initial: a, animate: u } = t,
											h = nS(t),
											d = nA(t);
										e &&
											d &&
											!h &&
											!1 !== t.inherit &&
											(void 0 === a && (a = e.initial),
											void 0 === u && (u = e.animate));
										let c = !!i && !1 === i.initial,
											p = (c = c || !1 === a) ? u : a;
										if (p && 'boolean' != typeof p && !n(p)) {
											let e = Array.isArray(p) ? p : [p];
											for (let i = 0; i < e.length; i++) {
												let n = l(t, e[i]);
												if (n) {
													let { transitionEnd: t, transition: e, ...i } = n;
													for (let t in i) {
														let e = i[t];
														if (Array.isArray(e)) {
															let t = c ? e.length - 1 : 0;
															e = e[t];
														}
														null !== e && (s[t] = e);
													}
													for (let e in t) s[e] = t[e];
												}
											}
										}
										return s;
									})(r, s, o, t),
									renderState: e()
								};
								return (
									i &&
										((a.onMount = (t) => i({ props: r, current: t, ...a })),
										(a.onUpdate = (t) => i(t))),
									a
								);
							})(t, e, r, s);
					return i ? o() : (0, nF.h)(o);
				},
				nO = (t, e) => (e && 'number' == typeof t ? e.transform(t) : t),
				nI = {
					x: 'translateX',
					y: 'translateY',
					z: 'translateZ',
					transformPerspective: 'perspective'
				},
				nW = v.length;
			function n$(t, e, i) {
				let { style: n, vars: r, transformOrigin: s } = t,
					o = !1,
					a = !1;
				for (let t in e) {
					let i = e[t];
					if (g.has(t)) {
						o = !0;
						continue;
					}
					if ((0, tP.f)(t)) {
						r[t] = i;
						continue;
					}
					{
						let e = nO(i, te[t]);
						t.startsWith('origin') ? ((a = !0), (s[t] = e)) : (n[t] = e);
					}
				}
				if (
					(!e.transform &&
						(o || i
							? (n.transform = (function (t, e, i) {
									let n = '',
										r = !0;
									for (let s = 0; s < nW; s++) {
										let o = v[s],
											a = t[o];
										if (void 0 === a) continue;
										let l = !0;
										if (
											!(l =
												'number' == typeof a
													? a === (o.startsWith('scale') ? 1 : 0)
													: 0 === parseFloat(a)) ||
											i
										) {
											let t = nO(a, te[o]);
											if (!l) {
												r = !1;
												let e = nI[o] || o;
												n += `${e}(${t}) `;
											}
											i && (e[o] = t);
										}
									}
									return (
										(n = n.trim()),
										i ? (n = i(e, r ? '' : n)) : r && (n = 'none'),
										n
									);
								})(e, t.transform, i))
							: n.transform && (n.transform = 'none')),
					a)
				) {
					let { originX: t = '50%', originY: e = '50%', originZ: i = 0 } = s;
					n.transformOrigin = `${t} ${e} ${i}`;
				}
			}
			let nU = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
				nN = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
			function nX(t, e, i) {
				return 'string' == typeof t ? t : G.px.transform(e + i * t);
			}
			function nz(
				t,
				{
					attrX: e,
					attrY: i,
					attrScale: n,
					originX: r,
					originY: s,
					pathLength: o,
					pathSpacing: a = 1,
					pathOffset: l = 0,
					...u
				},
				h,
				d
			) {
				if ((n$(t, u, d), h)) {
					t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
					return;
				}
				(t.attrs = t.style), (t.style = {});
				let { attrs: c, style: p, dimensions: m } = t;
				c.transform && (m && (p.transform = c.transform), delete c.transform),
					m &&
						(void 0 !== r || void 0 !== s || p.transform) &&
						(p.transformOrigin = (function (t, e, i) {
							let n = nX(e, t.x, t.width),
								r = nX(i, t.y, t.height);
							return `${n} ${r}`;
						})(m, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
					void 0 !== e && (c.x = e),
					void 0 !== i && (c.y = i),
					void 0 !== n && (c.scale = n),
					void 0 !== o &&
						(function (t, e, i = 1, n = 0, r = !0) {
							t.pathLength = 1;
							let s = r ? nU : nN;
							t[s.offset] = G.px.transform(-n);
							let o = G.px.transform(e),
								a = G.px.transform(i);
							t[s.array] = `${o} ${a}`;
						})(c, o, a, l, !1);
			}
			let nY = () => ({
					style: {},
					transform: {},
					transformOrigin: {},
					vars: {}
				}),
				nK = () => ({ ...nY(), attrs: {} }),
				nH = (t) => 'string' == typeof t && 'svg' === t.toLowerCase();
			function nZ(t, { style: e, vars: i }, n, r) {
				for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
				i))
					t.style.setProperty(s, i[s]);
			}
			let nq = new Set([
				'baseFrequency',
				'diffuseConstant',
				'kernelMatrix',
				'kernelUnitLength',
				'keySplines',
				'keyTimes',
				'limitingConeAngle',
				'markerHeight',
				'markerWidth',
				'numOctaves',
				'targetX',
				'targetY',
				'surfaceScale',
				'specularConstant',
				'specularExponent',
				'stdDeviation',
				'tableValues',
				'viewBox',
				'gradientTransform',
				'pathLength',
				'startOffset',
				'textLength',
				'lengthAdjust'
			]);
			function n_(t, e, i, n) {
				for (let i in (nZ(t, e, void 0, n), e.attrs))
					t.setAttribute(nq.has(i) ? i : S(i), e.attrs[i]);
			}
			function nG(t, { layout: e, layoutId: i }) {
				return (
					g.has(t) ||
					t.startsWith('origin') ||
					((e || void 0 !== i) && (!!io[t] || 'opacity' === t))
				);
			}
			function nJ(t, e, i) {
				var n;
				let { style: r } = t,
					s = {};
				for (let o in r)
					((0, T.i)(r[o]) ||
						(e.style && (0, T.i)(e.style[o])) ||
						nG(o, t) ||
						(null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n
							? void 0
							: n.liveStyle) !== void 0) &&
						(s[o] = r[o]);
				return s;
			}
			function nQ(t, e, i) {
				let n = nJ(t, e, i);
				for (let i in t)
					((0, T.i)(t[i]) || (0, T.i)(e[i])) &&
						(n[
							-1 !== v.indexOf(i)
								? 'attr' + i.charAt(0).toUpperCase() + i.substring(1)
								: i
						] = t[i]);
				return n;
			}
			let n0 = ['x', 'y', 'width', 'height', 'cx', 'cy', 'r'],
				n1 = {
					useVisualState: nB({
						scrapeMotionValuesFromProps: nQ,
						createRenderState: nK,
						onUpdate: ({
							props: t,
							prevProps: e,
							current: i,
							renderState: n,
							latestValues: r
						}) => {
							if (!i) return;
							let s = !!t.drag;
							if (!s) {
								for (let t in r)
									if (g.has(t)) {
										s = !0;
										break;
									}
							}
							if (!s) return;
							let o = !e;
							if (e)
								for (let i = 0; i < n0.length; i++) {
									let n = n0[i];
									t[n] !== e[n] && (o = !0);
								}
							o &&
								D.Wi.read(() => {
									!(function (t, e) {
										try {
											e.dimensions =
												'function' == typeof t.getBBox
													? t.getBBox()
													: t.getBoundingClientRect();
										} catch (t) {
											e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
										}
									})(i, n),
										D.Wi.render(() => {
											nz(n, r, nH(i.tagName), t.transformTemplate), n_(i, n);
										});
								});
						}
					})
				},
				n2 = {
					useVisualState: nB({
						scrapeMotionValuesFromProps: nJ,
						createRenderState: nY
					})
				};
			function n5(t, e, i) {
				for (let n in e) (0, T.i)(e[n]) || nG(n, i) || (t[n] = e[n]);
			}
			let n9 = new Set([
				'animate',
				'exit',
				'variants',
				'initial',
				'style',
				'values',
				'variants',
				'transition',
				'transformTemplate',
				'custom',
				'inherit',
				'onBeforeLayoutMeasure',
				'onAnimationStart',
				'onAnimationComplete',
				'onUpdate',
				'onDragStart',
				'onDrag',
				'onDragEnd',
				'onMeasureDragConstraints',
				'onDirectionLock',
				'onDragTransitionEnd',
				'_dragX',
				'_dragY',
				'onHoverStart',
				'onHoverEnd',
				'onViewportEnter',
				'onViewportLeave',
				'globalTapTarget',
				'ignoreStrict',
				'viewport'
			]);
			function n3(t) {
				return (
					t.startsWith('while') ||
					(t.startsWith('drag') && 'draggable' !== t) ||
					t.startsWith('layout') ||
					t.startsWith('onTap') ||
					t.startsWith('onPan') ||
					t.startsWith('onLayout') ||
					n9.has(t)
				);
			}
			let n8 = (t) => !n3(t);
			try {
				(c = Object(
					(function () {
						var t = Error("Cannot find module '@emotion/is-prop-valid'");
						throw ((t.code = 'MODULE_NOT_FOUND'), t);
					})()
				)) && (n8 = (t) => (t.startsWith('on') ? !n3(t) : c(t)));
			} catch (t) {}
			let n6 = { current: null },
				n4 = { current: !1 },
				n7 = [...tb, q.$, X.P],
				rt = (t) => n7.find(tT(t)),
				re = new WeakMap(),
				ri = [
					'AnimationStart',
					'AnimationComplete',
					'Update',
					'BeforeLayoutMeasure',
					'LayoutMeasure',
					'LayoutAnimationStart',
					'LayoutAnimationComplete'
				];
			class rn {
				scrapeMotionValuesFromProps(t, e, i) {
					return {};
				}
				constructor(
					{
						parent: t,
						props: e,
						presenceContext: i,
						reducedMotionConfig: n,
						blockInitialAnimation: r,
						visualState: s
					},
					o = {}
				) {
					(this.current = null),
						(this.children = new Set()),
						(this.isVariantNode = !1),
						(this.isControllingVariants = !1),
						(this.shouldReduceMotion = null),
						(this.values = new Map()),
						(this.KeyframeResolver = tg),
						(this.features = {}),
						(this.valueSubscriptions = new Map()),
						(this.prevMotionValues = {}),
						(this.events = {}),
						(this.propEventSubscriptions = {}),
						(this.notifyUpdate = () =>
							this.notify('Update', this.latestValues)),
						(this.render = () => {
							this.current &&
								(this.triggerBuild(),
								this.renderInstance(
									this.current,
									this.renderState,
									this.props.style,
									this.projection
								));
						}),
						(this.renderScheduledAt = 0),
						(this.scheduleRender = () => {
							let t = tV.X.now();
							this.renderScheduledAt < t &&
								((this.renderScheduledAt = t),
								D.Wi.render(this.render, !1, !0));
						});
					let { latestValues: a, renderState: l, onUpdate: u } = s;
					(this.onUpdate = u),
						(this.latestValues = a),
						(this.baseTarget = { ...a }),
						(this.initialValues = e.initial ? { ...a } : {}),
						(this.renderState = l),
						(this.parent = t),
						(this.props = e),
						(this.presenceContext = i),
						(this.depth = t ? t.depth + 1 : 0),
						(this.reducedMotionConfig = n),
						(this.options = o),
						(this.blockInitialAnimation = !!r),
						(this.isControllingVariants = nS(e)),
						(this.isVariantNode = nA(e)),
						this.isVariantNode && (this.variantChildren = new Set()),
						(this.manuallyAnimateOnMount = !!(t && t.current));
					let { willChange: h, ...d } = this.scrapeMotionValuesFromProps(
						e,
						{},
						this
					);
					for (let t in d) {
						let e = d[t];
						void 0 !== a[t] && (0, T.i)(e) && e.set(a[t], !1);
					}
				}
				mount(t) {
					(this.current = t),
						re.set(t, this),
						this.projection &&
							!this.projection.instance &&
							this.projection.mount(t),
						this.parent &&
							this.isVariantNode &&
							!this.isControllingVariants &&
							(this.removeFromVariantTree = this.parent.addVariantChild(this)),
						this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
						n4.current ||
							(function () {
								if (((n4.current = !0), nD.j)) {
									if (window.matchMedia) {
										let t = window.matchMedia('(prefers-reduced-motion)'),
											e = () => (n6.current = t.matches);
										t.addListener(e), e();
									} else n6.current = !1;
								}
							})(),
						(this.shouldReduceMotion =
							'never' !== this.reducedMotionConfig &&
							('always' === this.reducedMotionConfig || n6.current)),
						this.parent && this.parent.children.add(this),
						this.update(this.props, this.presenceContext);
				}
				unmount() {
					for (let t in (re.delete(this.current),
					this.projection && this.projection.unmount(),
					(0, D.Pn)(this.notifyUpdate),
					(0, D.Pn)(this.render),
					this.valueSubscriptions.forEach((t) => t()),
					this.valueSubscriptions.clear(),
					this.removeFromVariantTree && this.removeFromVariantTree(),
					this.parent && this.parent.children.delete(this),
					this.events))
						this.events[t].clear();
					for (let t in this.features) {
						let e = this.features[t];
						e && (e.unmount(), (e.isMounted = !1));
					}
					this.current = null;
				}
				bindToMotionValue(t, e) {
					let i;
					this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
					let n = g.has(t),
						r = e.on('change', (e) => {
							(this.latestValues[t] = e),
								this.props.onUpdate && D.Wi.preRender(this.notifyUpdate),
								n && this.projection && (this.projection.isTransformDirty = !0);
						}),
						s = e.on('renderRequest', this.scheduleRender);
					window.MotionCheckAppearSync &&
						(i = window.MotionCheckAppearSync(this, t, e)),
						this.valueSubscriptions.set(t, () => {
							r(), s(), i && i(), e.owner && e.stop();
						});
				}
				sortNodePosition(t) {
					return this.current &&
						this.sortInstanceNodePosition &&
						this.type === t.type
						? this.sortInstanceNodePosition(this.current, t.current)
						: 0;
				}
				updateFeatures() {
					let t = 'animation';
					for (t in nM) {
						let e = nM[t];
						if (!e) continue;
						let { isEnabled: i, Feature: n } = e;
						if (
							(!this.features[t] &&
								n &&
								i(this.props) &&
								(this.features[t] = new n(this)),
							this.features[t])
						) {
							let e = this.features[t];
							e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
						}
					}
				}
				triggerBuild() {
					this.build(this.renderState, this.latestValues, this.props);
				}
				measureViewportBox() {
					return this.current
						? this.measureInstanceViewportBox(this.current, this.props)
						: e$();
				}
				getStaticValue(t) {
					return this.latestValues[t];
				}
				setStaticValue(t, e) {
					this.latestValues[t] = e;
				}
				update(t, e) {
					(t.transformTemplate || this.props.transformTemplate) &&
						this.scheduleRender(),
						(this.prevProps = this.props),
						(this.props = t),
						(this.prevPresenceContext = this.presenceContext),
						(this.presenceContext = e);
					for (let e = 0; e < ri.length; e++) {
						let i = ri[e];
						this.propEventSubscriptions[i] &&
							(this.propEventSubscriptions[i](),
							delete this.propEventSubscriptions[i]);
						let n = t['on' + i];
						n && (this.propEventSubscriptions[i] = this.on(i, n));
					}
					(this.prevMotionValues = (function (t, e, i) {
						for (let n in e) {
							let r = e[n],
								s = i[n];
							if ((0, T.i)(r)) t.addValue(n, r);
							else if ((0, T.i)(s)) t.addValue(n, (0, w.BX)(r, { owner: t }));
							else if (s !== r) {
								if (t.hasValue(n)) {
									let e = t.getValue(n);
									!0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
								} else {
									let e = t.getStaticValue(n);
									t.addValue(n, (0, w.BX)(void 0 !== e ? e : r, { owner: t }));
								}
							}
						}
						for (let n in i) void 0 === e[n] && t.removeValue(n);
						return e;
					})(
						this,
						this.scrapeMotionValuesFromProps(t, this.prevProps, this),
						this.prevMotionValues
					)),
						this.handleChildMotionValue && this.handleChildMotionValue(),
						this.onUpdate && this.onUpdate(this);
				}
				getProps() {
					return this.props;
				}
				getVariant(t) {
					return this.props.variants ? this.props.variants[t] : void 0;
				}
				getDefaultTransition() {
					return this.props.transition;
				}
				getTransformPagePoint() {
					return this.props.transformPagePoint;
				}
				getClosestVariantNode() {
					return this.isVariantNode
						? this
						: this.parent
							? this.parent.getClosestVariantNode()
							: void 0;
				}
				addVariantChild(t) {
					let e = this.getClosestVariantNode();
					if (e)
						return (
							e.variantChildren && e.variantChildren.add(t),
							() => e.variantChildren.delete(t)
						);
				}
				addValue(t, e) {
					let i = this.values.get(t);
					e !== i &&
						(i && this.removeValue(t),
						this.bindToMotionValue(t, e),
						this.values.set(t, e),
						(this.latestValues[t] = e.get()));
				}
				removeValue(t) {
					this.values.delete(t);
					let e = this.valueSubscriptions.get(t);
					e && (e(), this.valueSubscriptions.delete(t)),
						delete this.latestValues[t],
						this.removeValueFromRenderState(t, this.renderState);
				}
				hasValue(t) {
					return this.values.has(t);
				}
				getValue(t, e) {
					if (this.props.values && this.props.values[t])
						return this.props.values[t];
					let i = this.values.get(t);
					return (
						void 0 === i &&
							void 0 !== e &&
							((i = (0, w.BX)(null === e ? void 0 : e, { owner: this })),
							this.addValue(t, i)),
						i
					);
				}
				readValue(t, e) {
					var i;
					let n =
						void 0 === this.latestValues[t] && this.current
							? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
								void 0 !== i
								? i
								: this.readValueFromInstance(this.current, t, this.options)
							: this.latestValues[t];
					return (
						null != n &&
							('string' == typeof n && (tx(n) || N(n))
								? (n = parseFloat(n))
								: !rt(n) && X.P.test(e) && (n = tr(t, e)),
							this.setBaseTarget(t, (0, T.i)(n) ? n.get() : n)),
						(0, T.i)(n) ? n.get() : n
					);
				}
				setBaseTarget(t, e) {
					this.baseTarget[t] = e;
				}
				getBaseTarget(t) {
					var e;
					let i;
					let { initial: n } = this.props;
					if ('string' == typeof n || 'object' == typeof n) {
						let r = l(
							this.props,
							n,
							null === (e = this.presenceContext) || void 0 === e
								? void 0
								: e.custom
						);
						r && (i = r[t]);
					}
					if (n && void 0 !== i) return i;
					let r = this.getBaseTargetFromProps(this.props, t);
					return void 0 === r || (0, T.i)(r)
						? void 0 !== this.initialValues[t] && void 0 === i
							? void 0
							: this.baseTarget[t]
						: r;
				}
				on(t, e) {
					return (
						this.events[t] || (this.events[t] = new iv.L()),
						this.events[t].add(e)
					);
				}
				notify(t, ...e) {
					this.events[t] && this.events[t].notify(...e);
				}
			}
			class rr extends rn {
				constructor() {
					super(...arguments), (this.KeyframeResolver = tA);
				}
				sortInstanceNodePosition(t, e) {
					return 2 & t.compareDocumentPosition(e) ? 1 : -1;
				}
				getBaseTargetFromProps(t, e) {
					return t.style ? t.style[e] : void 0;
				}
				removeValueFromRenderState(t, { vars: e, style: i }) {
					delete e[t], delete i[t];
				}
				handleChildMotionValue() {
					this.childSubscription &&
						(this.childSubscription(), delete this.childSubscription);
					let { children: t } = this.props;
					(0, T.i)(t) &&
						(this.childSubscription = t.on('change', (t) => {
							this.current && (this.current.textContent = `${t}`);
						}));
				}
			}
			class rs extends rr {
				constructor() {
					super(...arguments), (this.type = 'html'), (this.renderInstance = nZ);
				}
				readValueFromInstance(t, e) {
					if (g.has(e)) {
						let t = tn(e);
						return (t && t.default) || 0;
					}
					{
						let i = window.getComputedStyle(t),
							n = ((0, tP.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
						return 'string' == typeof n ? n.trim() : n;
					}
				}
				measureInstanceViewportBox(t, { transformPagePoint: e }) {
					return eQ(t, e);
				}
				build(t, e, i) {
					n$(t, e, i.transformTemplate);
				}
				scrapeMotionValuesFromProps(t, e, i) {
					return nJ(t, e, i);
				}
			}
			class ro extends rr {
				constructor() {
					super(...arguments),
						(this.type = 'svg'),
						(this.isSVGTag = !1),
						(this.measureInstanceViewportBox = e$);
				}
				getBaseTargetFromProps(t, e) {
					return t[e];
				}
				readValueFromInstance(t, e) {
					if (g.has(e)) {
						let t = tn(e);
						return (t && t.default) || 0;
					}
					return (e = nq.has(e) ? e : S(e)), t.getAttribute(e);
				}
				scrapeMotionValuesFromProps(t, e, i) {
					return nQ(t, e, i);
				}
				build(t, e, i) {
					nz(t, e, this.isSVGTag, i.transformTemplate);
				}
				renderInstance(t, e, i, n) {
					n_(t, e, i, n);
				}
				mount(t) {
					(this.isSVGTag = nH(t.tagName)), super.mount(t);
				}
			}
			let ra = (function (t) {
				if ('undefined' == typeof Proxy) return t;
				let e = new Map();
				return new Proxy((...e) => t(...e), {
					get: (i, n) =>
						'create' === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n))
				});
			})(
				((p = {
					animation: { Feature: ed },
					exit: { Feature: ep },
					inView: { Feature: nP },
					tap: { Feature: nm },
					focus: { Feature: nc },
					hover: { Feature: nd },
					pan: { Feature: e8 },
					drag: { Feature: e9, ProjectionNode: nu, MeasureLayout: ih },
					layout: { ProjectionNode: nu, MeasureLayout: ih }
				}),
				(m = (t, e) =>
					nj(t)
						? new ro(e)
						: new rs(e, { allowProjection: t !== e4.Fragment })),
				function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
					return (function (t) {
						var e, i;
						let {
							preloadedFeatures: n,
							createVisualElement: r,
							useRender: s,
							useVisualState: a,
							Component: l
						} = t;
						function u(t, e) {
							var i;
							let n;
							let u = {
									...(0, e4.useContext)(nT._),
									...t,
									layoutId: (function (t) {
										let { layoutId: e } = t,
											i = (0, e4.useContext)(it.p).id;
										return i && void 0 !== e ? i + '-' + e : e;
									})(t)
								},
								{ isStatic: h } = u,
								d = (function (t) {
									let { initial: e, animate: i } = (function (t, e) {
										if (nS(t)) {
											let { initial: e, animate: i } = t;
											return {
												initial: !1 === e || o(e) ? e : void 0,
												animate: o(i) ? i : void 0
											};
										}
										return !1 !== t.inherit ? e : {};
									})(t, (0, e4.useContext)(nb));
									return (0, e4.useMemo)(
										() => ({ initial: e, animate: i }),
										[nV(e), nV(i)]
									);
								})(t),
								c = a(t, h);
							if (!h && nD.j) {
								(0, e4.useContext)(nw).strict;
								let t = (function (t) {
									let { drag: e, layout: i } = nM;
									if (!e && !i) return {};
									let n = { ...e, ...i };
									return {
										MeasureLayout:
											(null == e ? void 0 : e.isEnabled(t)) ||
											(null == i ? void 0 : i.isEnabled(t))
												? n.MeasureLayout
												: void 0,
										ProjectionNode: n.ProjectionNode
									};
								})(u);
								(n = t.MeasureLayout),
									(d.visualElement = (function (t, e, i, n, r) {
										var s, o;
										let { visualElement: a } = (0, e4.useContext)(nb),
											l = (0, e4.useContext)(nw),
											u = (0, e4.useContext)(nR.O),
											h = (0, e4.useContext)(nT._).reducedMotion,
											d = (0, e4.useRef)(null);
										(n = n || l.renderer),
											!d.current &&
												n &&
												(d.current = n(t, {
													visualState: e,
													parent: a,
													props: i,
													presenceContext: u,
													blockInitialAnimation: !!u && !1 === u.initial,
													reducedMotionConfig: h
												}));
										let c = d.current,
											p = (0, e4.useContext)(ie);
										c &&
											!c.projection &&
											r &&
											('html' === c.type || 'svg' === c.type) &&
											(function (t, e, i, n) {
												let {
													layoutId: r,
													layout: s,
													drag: o,
													dragConstraints: a,
													layoutScroll: l,
													layoutRoot: u
												} = e;
												(t.projection = new i(
													t.latestValues,
													e['data-framer-portal-id']
														? void 0
														: (function t(e) {
																if (e)
																	return !1 !== e.options.allowProjection
																		? e.projection
																		: t(e.parent);
															})(t.parent)
												)),
													t.projection.setOptions({
														layoutId: r,
														layout: s,
														alwaysMeasureLayout: !!o || (a && eS(a)),
														visualElement: t,
														animationType: 'string' == typeof s ? s : 'both',
														initialPromotionConfig: n,
														layoutScroll: l,
														layoutRoot: u
													});
											})(d.current, i, r, p);
										let m = (0, e4.useRef)(!1);
										(0, e4.useInsertionEffect)(() => {
											c && m.current && c.update(i, u);
										});
										let f = i[A],
											v = (0, e4.useRef)(
												!!f &&
													!(null === (s = window.MotionHandoffIsComplete) ||
													void 0 === s
														? void 0
														: s.call(window, f)) &&
													(null === (o = window.MotionHasOptimisedAnimation) ||
													void 0 === o
														? void 0
														: o.call(window, f))
											);
										return (
											(0, nk.L)(() => {
												c &&
													((m.current = !0),
													(window.MotionIsMounted = !0),
													c.updateFeatures(),
													ia.render(c.render),
													v.current &&
														c.animationState &&
														c.animationState.animateChanges());
											}),
											(0, e4.useEffect)(() => {
												c &&
													(!v.current &&
														c.animationState &&
														c.animationState.animateChanges(),
													v.current &&
														(queueMicrotask(() => {
															var t;
															null ===
																(t = window.MotionHandoffMarkAsComplete) ||
																void 0 === t ||
																t.call(window, f);
														}),
														(v.current = !1)));
											}),
											c
										);
									})(l, c, u, r, t.ProjectionNode));
							}
							return (0, e6.jsxs)(nb.Provider, {
								value: d,
								children: [
									n && d.visualElement
										? (0, e6.jsx)(n, { visualElement: d.visualElement, ...u })
										: null,
									s(
										l,
										t,
										((i = d.visualElement),
										(0, e4.useCallback)(
											(t) => {
												t && c.onMount && c.onMount(t),
													i && (t ? i.mount(t) : i.unmount()),
													e &&
														('function' == typeof e
															? e(t)
															: eS(e) && (e.current = t));
											},
											[i]
										)),
										c,
										h,
										d.visualElement
									)
								]
							});
						}
						n &&
							(function (t) {
								for (let e in t) nM[e] = { ...nM[e], ...t[e] };
							})(n),
							(u.displayName = 'motion.'.concat(
								'string' == typeof l
									? l
									: 'create('.concat(
											null !==
												(i =
													null !== (e = l.displayName) && void 0 !== e
														? e
														: l.name) && void 0 !== i
												? i
												: '',
											')'
										)
							));
						let h = (0, e4.forwardRef)(u);
						return (h[nC] = l), h;
					})({
						...(nj(t) ? n1 : n2),
						preloadedFeatures: p,
						useRender: (function (t = !1) {
							return (e, i, n, { latestValues: r }, s) => {
								let o = (
										nj(e)
											? function (t, e, i, n) {
													let r = (0, e4.useMemo)(() => {
														let i = nK();
														return (
															nz(i, e, nH(n), t.transformTemplate),
															{ ...i.attrs, style: { ...i.style } }
														);
													}, [e]);
													if (t.style) {
														let e = {};
														n5(e, t.style, t), (r.style = { ...e, ...r.style });
													}
													return r;
												}
											: function (t, e) {
													let i = {},
														n = (function (t, e) {
															let i = t.style || {},
																n = {};
															return (
																n5(n, i, t),
																Object.assign(
																	n,
																	(function ({ transformTemplate: t }, e) {
																		return (0, e4.useMemo)(() => {
																			let i = nY();
																			return (
																				n$(i, e, t),
																				Object.assign({}, i.vars, i.style)
																			);
																		}, [e]);
																	})(t, e)
																),
																n
															);
														})(t, e);
													return (
														t.drag &&
															!1 !== t.dragListener &&
															((i.draggable = !1),
															(n.userSelect =
																n.WebkitUserSelect =
																n.WebkitTouchCallout =
																	'none'),
															(n.touchAction =
																!0 === t.drag
																	? 'none'
																	: `pan-${'x' === t.drag ? 'y' : 'x'}`)),
														void 0 === t.tabIndex &&
															(t.onTap || t.onTapStart || t.whileTap) &&
															(i.tabIndex = 0),
														(i.style = n),
														i
													);
												}
									)(i, r, s, e),
									a = (function (t, e, i) {
										let n = {};
										for (let r in t)
											('values' !== r || 'object' != typeof t.values) &&
												(n8(r) ||
													(!0 === i && n3(r)) ||
													(!e && !n3(r)) ||
													(t.draggable && r.startsWith('onDrag'))) &&
												(n[r] = t[r]);
										return n;
									})(i, 'string' == typeof e, t),
									l = e !== e4.Fragment ? { ...a, ...o, ref: n } : {},
									{ children: u } = i,
									h = (0, e4.useMemo)(() => ((0, T.i)(u) ? u.get() : u), [u]);
								return (0, e4.createElement)(e, { ...l, children: h });
							};
						})(e),
						createVisualElement: m,
						Component: t
					});
				})
			);
		},
		9193: function (t, e, i) {
			i.d(e, {
				f: function () {
					return r;
				},
				t: function () {
					return o;
				}
			});
			let n = (t) => (e) => 'string' == typeof e && e.startsWith(t),
				r = n('--'),
				s = n('var(--'),
				o = (t) => !!s(t) && a.test(t.split('/*')[0].trim()),
				a =
					/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
		},
		9881: function (t, e, i) {
			i.d(e, {
				c: function () {
					return n;
				}
			});
			let n = { skipAnimations: !1, useManualTiming: !1 };
		},
		3627: function (t, e, i) {
			function n(t, e) {
				-1 === t.indexOf(e) && t.push(e);
			}
			function r(t, e) {
				let i = t.indexOf(e);
				i > -1 && t.splice(i, 1);
			}
			i.d(e, {
				cl: function () {
					return r;
				},
				y4: function () {
					return n;
				}
			});
		},
		7131: function (t, e, i) {
			i.d(e, {
				u: function () {
					return n;
				}
			});
			let n = (t, e, i) => (i > e ? e : i < t ? t : i);
		},
		9831: function (t, e, i) {
			i.d(e, {
				s: function () {
					return u;
				}
			});
			var n = i(5611),
				r = i(7416),
				s = i(718),
				o = i(7131),
				a = i(2193),
				l = i(7061);
			function u(t, e, { clamp: i = !0, ease: u, mixer: h } = {}) {
				let d = t.length;
				if (
					((0, r.k)(
						d === e.length,
						'Both input and output ranges must be the same length'
					),
					1 === d)
				)
					return () => e[0];
				if (2 === d && e[0] === e[1]) return () => e[1];
				let c = t[0] === t[1];
				t[0] > t[d - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
				let p = (function (t, e, i) {
						let r = [],
							s = i || a.C,
							o = t.length - 1;
						for (let i = 0; i < o; i++) {
							let o = s(t[i], t[i + 1]);
							if (e) {
								let t = Array.isArray(e) ? e[i] || n.Z : e;
								o = (0, l.z)(t, o);
							}
							r.push(o);
						}
						return r;
					})(e, u, h),
					m = p.length,
					f = (i) => {
						if (c && i < t[0]) return e[0];
						let n = 0;
						if (m > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
						let r = (0, s.Y)(t[n], t[n + 1], i);
						return p[n](r);
					};
				return i ? (e) => f((0, o.u)(t[0], t[d - 1], e)) : f;
			}
		},
		1657: function (t, e, i) {
			i.d(e, {
				j: function () {
					return n;
				}
			});
			let n = 'undefined' != typeof window;
		},
		2193: function (t, e, i) {
			i.d(e, {
				C: function () {
					return A;
				}
			});
			var n = i(4453),
				r = i(7416);
			function s(t, e, i) {
				return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
					? t + (e - t) * 6 * i
					: i < 0.5
						? e
						: i < 2 / 3
							? t + (e - t) * (2 / 3 - i) * 6
							: t;
			}
			var o = i(3274),
				a = i(7278),
				l = i(8678);
			function u(t, e) {
				return (i) => (i > 0 ? e : t);
			}
			let h = (t, e, i) => {
					let n = t * t,
						r = i * (e * e - n) + n;
					return r < 0 ? 0 : Math.sqrt(r);
				},
				d = [o.$, a.m, l.J],
				c = (t) => d.find((e) => e.test(t));
			function p(t) {
				let e = c(t);
				if (
					((0, r.K)(
						!!e,
						`'${t}' is not an animatable color. Use the equivalent color code instead.`
					),
					!e)
				)
					return !1;
				let i = e.parse(t);
				return (
					e === l.J &&
						(i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
							(t /= 360), (i /= 100);
							let r = 0,
								o = 0,
								a = 0;
							if ((e /= 100)) {
								let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
									l = 2 * i - n;
								(r = s(l, n, t + 1 / 3)),
									(o = s(l, n, t)),
									(a = s(l, n, t - 1 / 3));
							} else r = o = a = i;
							return {
								red: Math.round(255 * r),
								green: Math.round(255 * o),
								blue: Math.round(255 * a),
								alpha: n
							};
						})(i)),
					i
				);
			}
			let m = (t, e) => {
				let i = p(t),
					r = p(e);
				if (!i || !r) return u(t, e);
				let s = { ...i };
				return (t) => (
					(s.red = h(i.red, r.red, t)),
					(s.green = h(i.green, r.green, t)),
					(s.blue = h(i.blue, r.blue, t)),
					(s.alpha = (0, n.t)(i.alpha, r.alpha, t)),
					a.m.transform(s)
				);
			};
			var f = i(7061),
				v = i(6514),
				g = i(6625),
				y = i(9193);
			let x = new Set(['none', 'hidden']);
			function P(t, e) {
				return (i) => (0, n.t)(t, e, i);
			}
			function w(t) {
				return 'number' == typeof t
					? P
					: 'string' == typeof t
						? (0, y.t)(t)
							? u
							: v.$.test(t)
								? m
								: S
						: Array.isArray(t)
							? T
							: 'object' == typeof t
								? v.$.test(t)
									? m
									: b
								: u;
			}
			function T(t, e) {
				let i = [...t],
					n = i.length,
					r = t.map((t, i) => w(t)(t, e[i]));
				return (t) => {
					for (let e = 0; e < n; e++) i[e] = r[e](t);
					return i;
				};
			}
			function b(t, e) {
				let i = { ...t, ...e },
					n = {};
				for (let r in i)
					void 0 !== t[r] && void 0 !== e[r] && (n[r] = w(t[r])(t[r], e[r]));
				return (t) => {
					for (let e in n) i[e] = n[e](t);
					return i;
				};
			}
			let S = (t, e) => {
				let i = g.P.createTransformer(e),
					n = (0, g.V)(t),
					s = (0, g.V)(e);
				return n.indexes.var.length === s.indexes.var.length &&
					n.indexes.color.length === s.indexes.color.length &&
					n.indexes.number.length >= s.indexes.number.length
					? (x.has(t) && !s.values.length) || (x.has(e) && !n.values.length)
						? x.has(t)
							? (i) => (i <= 0 ? t : e)
							: (i) => (i >= 1 ? e : t)
						: (0, f.z)(
								T(
									(function (t, e) {
										var i;
										let n = [],
											r = { color: 0, var: 0, number: 0 };
										for (let s = 0; s < e.values.length; s++) {
											let o = e.types[s],
												a = t.indexes[o][r[o]],
												l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
											(n[s] = l), r[o]++;
										}
										return n;
									})(n, s),
									s.values
								),
								i
							)
					: ((0, r.K)(
							!0,
							`Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
						),
						u(t, e));
			};
			function A(t, e, i) {
				return 'number' == typeof t &&
					'number' == typeof e &&
					'number' == typeof i
					? (0, n.t)(t, e, i)
					: w(t)(t, e);
			}
		},
		4453: function (t, e, i) {
			i.d(e, {
				t: function () {
					return n;
				}
			});
			let n = (t, e, i) => t + (e - t) * i;
		},
		1911: function (t, e, i) {
			i.d(e, {
				Y: function () {
					return s;
				}
			});
			var n = i(718),
				r = i(4453);
			function s(t) {
				let e = [0];
				return (
					!(function (t, e) {
						let i = t[t.length - 1];
						for (let s = 1; s <= e; s++) {
							let o = (0, n.Y)(0, e, s);
							t.push((0, r.t)(i, 1, o));
						}
					})(e, t.length - 1),
					e
				);
			}
		},
		7061: function (t, e, i) {
			i.d(e, {
				z: function () {
					return r;
				}
			});
			let n = (t, e) => (i) => e(t(i)),
				r = (...t) => t.reduce(n);
		},
		542: function (t, e, i) {
			i.d(e, {
				L: function () {
					return r;
				}
			});
			var n = i(3627);
			class r {
				constructor() {
					this.subscriptions = [];
				}
				add(t) {
					return (
						(0, n.y4)(this.subscriptions, t),
						() => (0, n.cl)(this.subscriptions, t)
					);
				}
				notify(t, e, i) {
					let n = this.subscriptions.length;
					if (n) {
						if (1 === n) this.subscriptions[0](t, e, i);
						else
							for (let r = 0; r < n; r++) {
								let n = this.subscriptions[r];
								n && n(t, e, i);
							}
					}
				}
				getSize() {
					return this.subscriptions.length;
				}
				clear() {
					this.subscriptions.length = 0;
				}
			}
		},
		7047: function (t, e, i) {
			i.d(e, {
				h: function () {
					return r;
				}
			});
			var n = i(8949);
			function r(t) {
				let e = (0, n.useRef)(null);
				return null === e.current && (e.current = t()), e.current;
			}
		},
		740: function (t, e, i) {
			i.d(e, {
				L: function () {
					return r;
				}
			});
			var n = i(8949);
			let r = i(1657).j ? n.useLayoutEffect : n.useEffect;
		},
		2486: function (t, e, i) {
			i.d(e, {
				R: function () {
					return n;
				}
			});
			function n(t, e) {
				return e ? (1e3 / e) * t : 0;
			}
		},
		981: function (t, e, i) {
			i.d(e, {
				BX: function () {
					return h;
				}
			});
			var n = i(2051),
				r = i(542),
				s = i(2486),
				o = i(2898);
			let a = (t) => !isNaN(parseFloat(t)),
				l = { current: void 0 };
			class u {
				constructor(t, e = {}) {
					(this.version = '11.18.2'),
						(this.canTrackVelocity = null),
						(this.events = {}),
						(this.updateAndNotify = (t, e = !0) => {
							let i = n.X.now();
							this.updatedAt !== i && this.setPrevFrameValue(),
								(this.prev = this.current),
								this.setCurrent(t),
								this.current !== this.prev &&
									this.events.change &&
									this.events.change.notify(this.current),
								e &&
									this.events.renderRequest &&
									this.events.renderRequest.notify(this.current);
						}),
						(this.hasAnimated = !1),
						this.setCurrent(t),
						(this.owner = e.owner);
				}
				setCurrent(t) {
					(this.current = t),
						(this.updatedAt = n.X.now()),
						null === this.canTrackVelocity &&
							void 0 !== t &&
							(this.canTrackVelocity = a(this.current));
				}
				setPrevFrameValue(t = this.current) {
					(this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
				}
				onChange(t) {
					return this.on('change', t);
				}
				on(t, e) {
					this.events[t] || (this.events[t] = new r.L());
					let i = this.events[t].add(e);
					return 'change' === t
						? () => {
								i(),
									o.Wi.read(() => {
										this.events.change.getSize() || this.stop();
									});
							}
						: i;
				}
				clearListeners() {
					for (let t in this.events) this.events[t].clear();
				}
				attach(t, e) {
					(this.passiveEffect = t), (this.stopPassiveEffect = e);
				}
				set(t, e = !0) {
					e && this.passiveEffect
						? this.passiveEffect(t, this.updateAndNotify)
						: this.updateAndNotify(t, e);
				}
				setWithVelocity(t, e, i) {
					this.set(e),
						(this.prev = void 0),
						(this.prevFrameValue = t),
						(this.prevUpdatedAt = this.updatedAt - i);
				}
				jump(t, e = !0) {
					this.updateAndNotify(t),
						(this.prev = t),
						(this.prevUpdatedAt = this.prevFrameValue = void 0),
						e && this.stop(),
						this.stopPassiveEffect && this.stopPassiveEffect();
				}
				get() {
					return l.current && l.current.push(this), this.current;
				}
				getPrevious() {
					return this.prev;
				}
				getVelocity() {
					let t = n.X.now();
					if (
						!this.canTrackVelocity ||
						void 0 === this.prevFrameValue ||
						t - this.updatedAt > 30
					)
						return 0;
					let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
					return (0, s.R)(
						parseFloat(this.current) - parseFloat(this.prevFrameValue),
						e
					);
				}
				start(t) {
					return (
						this.stop(),
						new Promise((e) => {
							(this.hasAnimated = !0),
								(this.animation = t(e)),
								this.events.animationStart &&
									this.events.animationStart.notify();
						}).then(() => {
							this.events.animationComplete &&
								this.events.animationComplete.notify(),
								this.clearAnimation();
						})
					);
				}
				stop() {
					this.animation &&
						(this.animation.stop(),
						this.events.animationCancel &&
							this.events.animationCancel.notify()),
						this.clearAnimation();
				}
				isAnimating() {
					return !!this.animation;
				}
				clearAnimation() {
					delete this.animation;
				}
				destroy() {
					this.clearListeners(),
						this.stop(),
						this.stopPassiveEffect && this.stopPassiveEffect();
				}
			}
			function h(t, e) {
				return new u(t, e);
			}
		},
		3274: function (t, e, i) {
			i.d(e, {
				$: function () {
					return r;
				}
			});
			var n = i(7278);
			let r = {
				test: (0, i(8059).i)('#'),
				parse: function (t) {
					let e = '',
						i = '',
						n = '',
						r = '';
					return (
						t.length > 5
							? ((e = t.substring(1, 3)),
								(i = t.substring(3, 5)),
								(n = t.substring(5, 7)),
								(r = t.substring(7, 9)))
							: ((e = t.substring(1, 2)),
								(i = t.substring(2, 3)),
								(n = t.substring(3, 4)),
								(r = t.substring(4, 5)),
								(e += e),
								(i += i),
								(n += n),
								(r += r)),
						{
							red: parseInt(e, 16),
							green: parseInt(i, 16),
							blue: parseInt(n, 16),
							alpha: r ? parseInt(r, 16) / 255 : 1
						}
					);
				},
				transform: n.m.transform
			};
		},
		8678: function (t, e, i) {
			i.d(e, {
				J: function () {
					return a;
				}
			});
			var n = i(2205),
				r = i(6428),
				s = i(2776),
				o = i(8059);
			let a = {
				test: (0, o.i)('hsl', 'hue'),
				parse: (0, o.d)('hue', 'saturation', 'lightness'),
				transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
					'hsla(' +
					Math.round(t) +
					', ' +
					r.aQ.transform((0, s.N)(e)) +
					', ' +
					r.aQ.transform((0, s.N)(i)) +
					', ' +
					(0, s.N)(n.Fq.transform(o)) +
					')'
			};
		},
		6514: function (t, e, i) {
			i.d(e, {
				$: function () {
					return o;
				}
			});
			var n = i(3274),
				r = i(8678),
				s = i(7278);
			let o = {
				test: (t) => s.m.test(t) || n.$.test(t) || r.J.test(t),
				parse: (t) =>
					s.m.test(t)
						? s.m.parse(t)
						: r.J.test(t)
							? r.J.parse(t)
							: n.$.parse(t),
				transform: (t) =>
					'string' == typeof t
						? t
						: t.hasOwnProperty('red')
							? s.m.transform(t)
							: r.J.transform(t)
			};
		},
		7278: function (t, e, i) {
			i.d(e, {
				m: function () {
					return u;
				}
			});
			var n = i(7131),
				r = i(2205),
				s = i(2776),
				o = i(8059);
			let a = (t) => (0, n.u)(0, 255, t),
				l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
				u = {
					test: (0, o.i)('rgb', 'red'),
					parse: (0, o.d)('red', 'green', 'blue'),
					transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
						'rgba(' +
						l.transform(t) +
						', ' +
						l.transform(e) +
						', ' +
						l.transform(i) +
						', ' +
						(0, s.N)(r.Fq.transform(n)) +
						')'
				};
		},
		8059: function (t, e, i) {
			i.d(e, {
				i: function () {
					return s;
				},
				d: function () {
					return o;
				}
			});
			var n = i(2362);
			let r =
					/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
				s = (t, e) => (i) =>
					!!(
						('string' == typeof i && r.test(i) && i.startsWith(t)) ||
						(e && null != i && Object.prototype.hasOwnProperty.call(i, e))
					),
				o = (t, e, i) => (r) => {
					if ('string' != typeof r) return r;
					let [s, o, a, l] = r.match(n.K);
					return {
						[t]: parseFloat(s),
						[e]: parseFloat(o),
						[i]: parseFloat(a),
						alpha: void 0 !== l ? parseFloat(l) : 1
					};
				};
		},
		6625: function (t, e, i) {
			i.d(e, {
				V: function () {
					return h;
				},
				P: function () {
					return m;
				}
			});
			var n = i(6514);
			let r =
				/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
			var s = i(2362),
				o = i(2776);
			let a = 'number',
				l = 'color',
				u =
					/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
			function h(t) {
				let e = t.toString(),
					i = [],
					r = { color: [], number: [], var: [] },
					s = [],
					o = 0,
					h = e
						.replace(
							u,
							(t) => (
								n.$.test(t)
									? (r.color.push(o), s.push(l), i.push(n.$.parse(t)))
									: t.startsWith('var(')
										? (r.var.push(o), s.push('var'), i.push(t))
										: (r.number.push(o), s.push(a), i.push(parseFloat(t))),
								++o,
								'${}'
							)
						)
						.split('${}');
				return { values: i, split: h, indexes: r, types: s };
			}
			function d(t) {
				return h(t).values;
			}
			function c(t) {
				let { split: e, types: i } = h(t),
					r = e.length;
				return (t) => {
					let s = '';
					for (let u = 0; u < r; u++)
						if (((s += e[u]), void 0 !== t[u])) {
							let e = i[u];
							e === a
								? (s += (0, o.N)(t[u]))
								: e === l
									? (s += n.$.transform(t[u]))
									: (s += t[u]);
						}
					return s;
				};
			}
			let p = (t) => ('number' == typeof t ? 0 : t),
				m = {
					test: function (t) {
						var e, i;
						return (
							isNaN(t) &&
							'string' == typeof t &&
							((null === (e = t.match(s.K)) || void 0 === e
								? void 0
								: e.length) || 0) +
								((null === (i = t.match(r)) || void 0 === i
									? void 0
									: i.length) || 0) >
								0
						);
					},
					parse: d,
					createTransformer: c,
					getAnimatableNone: function (t) {
						let e = d(t);
						return c(t)(e.map(p));
					}
				};
		},
		2205: function (t, e, i) {
			i.d(e, {
				Fq: function () {
					return s;
				},
				Rx: function () {
					return r;
				},
				bA: function () {
					return o;
				}
			});
			var n = i(7131);
			let r = {
					test: (t) => 'number' == typeof t,
					parse: parseFloat,
					transform: (t) => t
				},
				s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
				o = { ...r, default: 1 };
		},
		6428: function (t, e, i) {
			i.d(e, {
				$C: function () {
					return u;
				},
				RW: function () {
					return r;
				},
				aQ: function () {
					return s;
				},
				px: function () {
					return o;
				},
				vh: function () {
					return a;
				},
				vw: function () {
					return l;
				}
			});
			let n = (t) => ({
					test: (e) =>
						'string' == typeof e && e.endsWith(t) && 1 === e.split(' ').length,
					parse: parseFloat,
					transform: (e) => `${e}${t}`
				}),
				r = n('deg'),
				s = n('%'),
				o = n('px'),
				a = n('vh'),
				l = n('vw'),
				u = {
					...s,
					parse: (t) => s.parse(t) / 100,
					transform: (t) => s.transform(100 * t)
				};
		},
		2362: function (t, e, i) {
			i.d(e, {
				K: function () {
					return n;
				}
			});
			let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
		},
		2776: function (t, e, i) {
			i.d(e, {
				N: function () {
					return n;
				}
			});
			let n = (t) => Math.round(1e5 * t) / 1e5;
		},
		6971: function (t, e, i) {
			i.d(e, {
				i: function () {
					return n;
				}
			});
			let n = (t) => !!(t && t.getVelocity);
		},
		9675: function (t, e, i) {
			i.d(e, {
				sP: function () {
					return o;
				},
				_F: function () {
					return d;
				},
				iI: function () {
					return u;
				},
				wk: function () {
					return v;
				},
				ev: function () {
					return a;
				},
				Mr: function () {
					return S;
				},
				qE: function () {
					return c;
				},
				xD: function () {
					return h;
				},
				DJ: function () {
					return V;
				},
				hR: function () {
					return g;
				},
				eB: function () {
					return function t(e, i) {
						if (e)
							return 'function' == typeof e && m()
								? v(e, i)
								: c(e)
									? y(e)
									: Array.isArray(e)
										? e.map((e) => t(e, i) || x.easeOut)
										: x[e];
					};
				},
				EO: function () {
					return l;
				},
				OD: function () {
					return L;
				},
				IG: function () {
					return w;
				},
				KV: function () {
					return j;
				},
				Vc: function () {
					return m;
				},
				tn: function () {
					return r;
				}
			});
			var n = i(7252);
			let r = (0, n.X)(() => void 0 !== window.ScrollTimeline);
			class s {
				constructor(t) {
					(this.stop = () => this.runAll('stop')),
						(this.animations = t.filter(Boolean));
				}
				get finished() {
					return Promise.all(
						this.animations.map((t) => ('finished' in t ? t.finished : t))
					);
				}
				getAll(t) {
					return this.animations[0][t];
				}
				setAll(t, e) {
					for (let i = 0; i < this.animations.length; i++)
						this.animations[i][t] = e;
				}
				attachTimeline(t, e) {
					let i = this.animations.map((i) =>
						r() && i.attachTimeline
							? i.attachTimeline(t)
							: 'function' == typeof e
								? e(i)
								: void 0
					);
					return () => {
						i.forEach((t, e) => {
							t && t(), this.animations[e].stop();
						});
					};
				}
				get time() {
					return this.getAll('time');
				}
				set time(t) {
					this.setAll('time', t);
				}
				get speed() {
					return this.getAll('speed');
				}
				set speed(t) {
					this.setAll('speed', t);
				}
				get startTime() {
					return this.getAll('startTime');
				}
				get duration() {
					let t = 0;
					for (let e = 0; e < this.animations.length; e++)
						t = Math.max(t, this.animations[e].duration);
					return t;
				}
				runAll(t) {
					this.animations.forEach((e) => e[t]());
				}
				flatten() {
					this.runAll('flatten');
				}
				play() {
					this.runAll('play');
				}
				pause() {
					this.runAll('pause');
				}
				cancel() {
					this.runAll('cancel');
				}
				complete() {
					this.runAll('complete');
				}
			}
			class o extends s {
				then(t, e) {
					return Promise.all(this.animations).then(t).catch(e);
				}
			}
			function a(t, e) {
				return t ? t[e] || t.default || t : void 0;
			}
			let l = 2e4;
			function u(t) {
				let e = 0,
					i = t.next(e);
				for (; !i.done && e < l; ) (e += 50), (i = t.next(e));
				return e >= l ? 1 / 0 : e;
			}
			function h(t) {
				return 'function' == typeof t;
			}
			function d(t, e) {
				(t.timeline = e), (t.onfinish = null);
			}
			let c = (t) => Array.isArray(t) && 'number' == typeof t[0],
				p = { linearEasing: void 0 },
				m = (function (t, e) {
					let i = (0, n.X)(t);
					return () => {
						var t;
						return null !== (t = p[e]) && void 0 !== t ? t : i();
					};
				})(() => {
					try {
						document
							.createElement('div')
							.animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
					} catch (t) {
						return !1;
					}
					return !0;
				}, 'linearEasing');
			var f = i(718);
			let v = (t, e, i = 10) => {
				let n = '',
					r = Math.max(Math.round(e / i), 2);
				for (let e = 0; e < r; e++) n += t((0, f.Y)(0, r - 1, e)) + ', ';
				return `linear(${n.substring(0, n.length - 2)})`;
			};
			function g(t) {
				return !!(
					('function' == typeof t && m()) ||
					!t ||
					('string' == typeof t && (t in x || m())) ||
					c(t) ||
					(Array.isArray(t) && t.every(g))
				);
			}
			let y = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
				x = {
					linear: 'linear',
					ease: 'ease',
					easeIn: 'ease-in',
					easeOut: 'ease-out',
					easeInOut: 'ease-in-out',
					circIn: y([0, 0.65, 0.55, 1]),
					circOut: y([0.55, 0, 1, 0.45]),
					backIn: y([0.31, 0.01, 0.66, -0.59]),
					backOut: y([0.33, 1.53, 0.69, 0.99])
				},
				P = { x: !1, y: !1 };
			function w(t, e, i) {
				var n;
				if (t instanceof Element) return [t];
				if ('string' == typeof t) {
					let r = document;
					e && (r = e.current);
					let s =
						null !== (n = null == i ? void 0 : i[t]) && void 0 !== n
							? n
							: r.querySelectorAll(t);
					return s ? Array.from(s) : [];
				}
				return Array.from(t);
			}
			function T(t, e) {
				let i = w(t),
					n = new AbortController();
				return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
			}
			function b(t) {
				return (e) => {
					'touch' === e.pointerType || P.x || P.y || t(e);
				};
			}
			function S(t, e, i = {}) {
				let [n, r, s] = T(t, i),
					o = b((t) => {
						let { target: i } = t,
							n = e(t);
						if ('function' != typeof n || !i) return;
						let s = b((t) => {
							n(t), i.removeEventListener('pointerleave', s);
						});
						i.addEventListener('pointerleave', s, r);
					});
				return (
					n.forEach((t) => {
						t.addEventListener('pointerenter', o, r);
					}),
					s
				);
			}
			let A = (t, e) => !!e && (t === e || A(t, e.parentElement)),
				V = (t) =>
					'mouse' === t.pointerType
						? 'number' != typeof t.button || t.button <= 0
						: !1 !== t.isPrimary,
				D = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']),
				E = new WeakSet();
			function M(t) {
				return (e) => {
					'Enter' === e.key && t(e);
				};
			}
			function C(t, e) {
				t.dispatchEvent(
					new PointerEvent('pointer' + e, { isPrimary: !0, bubbles: !0 })
				);
			}
			let R = (t, e) => {
				let i = t.currentTarget;
				if (!i) return;
				let n = M(() => {
					if (E.has(i)) return;
					C(i, 'down');
					let t = M(() => {
						C(i, 'up');
					});
					i.addEventListener('keyup', t, e),
						i.addEventListener('blur', () => C(i, 'cancel'), e);
				});
				i.addEventListener('keydown', n, e),
					i.addEventListener(
						'blur',
						() => i.removeEventListener('keydown', n),
						e
					);
			};
			function k(t) {
				return V(t) && !(P.x || P.y);
			}
			function L(t, e, i = {}) {
				let [n, r, s] = T(t, i),
					o = (t) => {
						let n = t.currentTarget;
						if (!k(t) || E.has(n)) return;
						E.add(n);
						let s = e(t),
							o = (t, e) => {
								window.removeEventListener('pointerup', a),
									window.removeEventListener('pointercancel', l),
									k(t) &&
										E.has(n) &&
										(E.delete(n),
										'function' == typeof s && s(t, { success: e }));
							},
							a = (t) => {
								o(t, i.useGlobalTarget || A(n, t.target));
							},
							l = (t) => {
								o(t, !1);
							};
						window.addEventListener('pointerup', a, r),
							window.addEventListener('pointercancel', l, r);
					};
				return (
					n.forEach((t) => {
						D.has(t.tagName) ||
							-1 !== t.tabIndex ||
							null !== t.getAttribute('tabindex') ||
							(t.tabIndex = 0),
							(i.useGlobalTarget ? window : t).addEventListener(
								'pointerdown',
								o,
								r
							),
							t.addEventListener('focus', (t) => R(t, r), r);
					}),
					s
				);
			}
			function j(t) {
				return 'x' === t || 'y' === t
					? P[t]
						? null
						: ((P[t] = !0),
							() => {
								P[t] = !1;
							})
					: P.x || P.y
						? null
						: ((P.x = P.y = !0),
							() => {
								P.x = P.y = !1;
							});
			}
			i(3964), i(5611);
		},
		7416: function (t, e, i) {
			i.d(e, {
				K: function () {
					return r;
				},
				k: function () {
					return s;
				}
			});
			var n = i(5611);
			let r = n.Z,
				s = n.Z;
		},
		7252: function (t, e, i) {
			i.d(e, {
				X: function () {
					return n;
				}
			});
			function n(t) {
				let e;
				return () => (void 0 === e && (e = t()), e);
			}
		},
		5611: function (t, e, i) {
			i.d(e, {
				Z: function () {
					return n;
				}
			});
			let n = (t) => t;
		},
		718: function (t, e, i) {
			i.d(e, {
				Y: function () {
					return n;
				}
			});
			let n = (t, e, i) => {
				let n = e - t;
				return 0 === n ? 1 : (i - t) / n;
			};
		},
		3964: function (t, e, i) {
			i.d(e, {
				X: function () {
					return r;
				},
				w: function () {
					return n;
				}
			});
			let n = (t) => 1e3 * t,
				r = (t) => t / 1e3;
		},
		9226: function (t, e, i) {
			i.d(e, {
				default: function () {
					return r.a;
				}
			});
			var n = i(4701),
				r = i.n(n);
		},
		4701: function (t, e, i) {
			Object.defineProperty(e, '__esModule', { value: !0 }),
				(function (t, e) {
					for (var i in e)
						Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
				})(e, {
					default: function () {
						return l;
					},
					getImageProps: function () {
						return a;
					}
				});
			let n = i(5352),
				r = i(8958),
				s = i(4543),
				o = n._(i(9623));
			function a(t) {
				let { props: e } = (0, r.getImgProps)(t, {
					defaultLoader: o.default,
					imgConf: {
						deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
						imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
						path: '/docs/prinext/image',
						loader: 'default',
						dangerouslyAllowSVG: !1,
						unoptimized: !1
					}
				});
				for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
				return { props: e };
			}
			let l = s.Image;
		}
	}
]);
