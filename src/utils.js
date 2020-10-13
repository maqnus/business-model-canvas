export const sum = (...args) => args.reduce((a,b)=> a+b);
export const isNull = obj => obj === null;
export const isEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;
export const isNullOrEmpty = obj => obj === undefined || isNull(obj) || isEmpty(obj);