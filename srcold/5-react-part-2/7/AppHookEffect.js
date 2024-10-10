import React, { useState, useEffect } from 'react';

export function AppHookEffect() {
	const [count, setCount] = useState(0);
	const [test, setTest] = useState(0);

	// Равносильно componentDidMount,
	// componentDidUpdate и componentWillUnmount:
	useEffect(() => {
		// Обновляем заголовок документа с помощью API браузера
		document.title = `Вы нажали ${count} раз`;
		console.log(count);

		// clean up function a.k.a. componentWillUnmount
		// return () => {

		// };
	}, /*[count]*/); // Only re-run the effect if count changes

	const handleClick = () => {
		setCount(count < 5 ? count + 1 : count);
		if (count > 4) {
			setTest(test + 1);
		}
	};

	return (
		<div>
			<p>Вы нажали {count} раз</p>
			<button onClick={handleClick}>
				Нажми на меня
			</button>
			<span>test: {test}</span>
		</div>
	);
}
