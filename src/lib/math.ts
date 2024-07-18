/**
 * 将给定的值限制在指定的最小值和最大值之间。
 *
 * @param value 需要被限制的数值。
 * @param a 最小值或第一个边界值。
 * @param b 最大值或第二个边界值。
 * @returns 返回被限制在最小值和最大值之间的值。
 */
export function clamp(value: number, a: number, b: number) {
	// 确定最小值和最大值
	const min = Math.min(a, b);
	const max = Math.max(a, b);

	// 将值限制在最小值和最大值之间
	return Math.min(Math.max(value, min), max);
}
