import { useRef } from 'react';

export const AppRef = () => {
	const textInput = useRef(null);

	const focusTextInput = () => {
		// Установим фокус на текстовое поле с помощью чистого DOM API
		// Примечание: обращаемся к "current", чтобы получить DOM-узел
		textInput.current.focus();
	}

	// описываем, что мы хотим связать реф <input>
	// с `textInput` созданным в конструкторе
	return (
		<div>
			<input
				type="text"
				ref={textInput} />

			<input
				type="button"
				value="Фокус на текстовом поле"
				onClick={focusTextInput}
			/>
		</div>
	);
}
