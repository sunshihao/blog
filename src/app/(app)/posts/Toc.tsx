// /components/toc.jsx
'use client';

import { useEffect } from 'react';
import tocbot from 'tocbot';

export default function Toc() {
	useEffect(() => {
		tocbot.init({
			tocSelector: '.js-toc', // 选择toc的包装器
			contentSelector: '.js-toc-content', // 选择内容的包装器
			headingSelector: 'h2, h3' // 选择要显示的标题标签
			/* 可选1.
      如果你有一个固定的头部并调整偏移值，请启用这些
      */
			// headingsOffset: 100,
			// scrollSmoothOffset: -100,
			/* 可选2.
      如果滚动时'active'类不能正常工作，请启用这个
      */
			// hasInnerContainers: true,
		});
		return () => tocbot.destroy();
	}, []);

	return (
		<div>
			<span>目录</span>
			<div className="js-toc"></div>
		</div>
	);
}
