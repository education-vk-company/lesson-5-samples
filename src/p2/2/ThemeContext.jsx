import { createContext } from 'react';

export const themes = {
	light: {
		color: '#000000',
		background: '#eeeeee',
	},
	dark: {
		color: '#ffffff',
		background: '#222222',
	},
};

// Убедитесь, что форма значения по умолчанию,
// передаваемого в createContext, совпадает с формой объекта,
// которую ожидают потребители контекста.
export const ThemeContext = createContext({
	theme: themes.dark,
	toggleTheme: () => {},
});
