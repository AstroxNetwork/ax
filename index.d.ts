
type axType = {
  setNavigationBarTitle: (text: string) => boolean,
  setNavigationBarColor: (color: string) => boolean,
}


declare const globalThis: {
  ax: axType
}

declare const kraken: {
  invokeModule:  (method: string, ...args: any) => Promise<any> | any;
}
