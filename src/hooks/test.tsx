'use client';
// 消息发送间隔，30 秒 1 次
export const GAP = 30 * 1000;
// 定义异步 thunk 用于获取未读消息数量
export const fetchUnreadMessages = () => {
	try {
		// do something
	} catch (err: AnyIfEmpty) {
		return console.log(err);
	}
};
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const UnreadMessageComponent: React.FC = () => {
	const [isActive] = useState(false);

	useEffect(() => {
		let timer: AnyIfEmpty;
		if (!isActive) {
			clearInterval(timer);
		}
		if (isActive) {
			fetchUnreadMessages();
			timer = setInterval(() => {
				fetchUnreadMessages();
			}, GAP);
		}
		// return () => clearInterval(timer);
	}, [JSON.stringify(isActive)]);
	const BadgeWrapper = ({ children }: { children: React.ReactNode }) => {
		return isActive ? <div>{children}</div> : <div>1</div>;
	};
	return (
		<Link href="/user/message" style={{ display: 'flex', padding: '14px 6px' }}>
			<BadgeWrapper>2</BadgeWrapper>
		</Link>
	);
};

export default UnreadMessageComponent;
