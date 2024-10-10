import React from 'react';
import { themes } from '../1';

// Убедитесь, что форма значения по умолчанию,
// передаваемого в createContext, совпадает с формой объекта,
// которую ожидают потребители контекста.
export const ThemeContext = React.createContext({
	theme: themes.dark,
	toggleTheme: () => {},
});
