/**
 * Use ES6 classes as actions
 * https://github.com/reduxjs/redux/issues/2361#issuecomment-416002587
 * @param store
 */
export const useClassAsAction = store => next => action => {
  next({ ...action });
};
