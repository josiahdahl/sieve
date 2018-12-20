export interface StringMap<V> {
  [key: string]: V;
}

export interface NumberMap<V> {
  [key: number]: V;
}

export type Map<V> = StringMap<V> | NumberMap<V>;
