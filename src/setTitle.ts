export function setNavigationBarTitle(text) {
  const result = kraken.invokeModule('AX', 'setNavigationBarTitle', text);
  return result === 'success' ? true : false;
};