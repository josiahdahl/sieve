export interface RequestSaga<T, U, V> {
  request: (T) => any;
  success: (U) => any;
  error: (V) => any;
}
