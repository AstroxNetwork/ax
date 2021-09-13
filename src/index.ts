import { setNavigationBarTitle }  from './setTitle';

globalThis.ax = {
	setNavigationBarColor: (color: any) => {
		const result = kraken.invokeModule('AX', 'setNavigationBarColor', color);
		return result === 'success' ? true : false;
	},
	setNavigationBarTitle
};
