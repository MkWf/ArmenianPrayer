export const UPDATE_SCROLL = 'UPDATE_SCROLL';
export const UPDATE_SLIDE = 'UPDATE_SLIDE';

export const updateScroll = (isScroll) => ({ type: UPDATE_SCROLL, isScroll });
export const updateSlide = (isSlide) => ({ type: UPDATE_SLIDE, isSlide });