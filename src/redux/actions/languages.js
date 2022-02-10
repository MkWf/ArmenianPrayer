export const UPDATE_ARMENIAN = 'UPDATE_ARMENIAN';
export const UPDATE_TRANSLIT = 'UPDATE_TRANSLIT';
export const UPDATE_ENGLISH = 'UPDATE_ENGLISH';

export const updateArmenian = (isArmenian) => ({ type: UPDATE_ARMENIAN, isArmenian });
export const updateTranslit = (isTranslit) => ({ type: UPDATE_TRANSLIT, isTranslit });
export const updateEnglish = (isEnglish) => ({ type: UPDATE_ENGLISH, isEnglish });
