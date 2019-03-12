import { useRef, useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

type RectBoundType = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export default function useMeasure(): [any, RectBoundType] {
  const ref = useRef();
  const [bounds, set] = useState<RectBoundType>({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)));
  // @ts-ignore
  useEffect(() => (ro.observe(ref.current), () => (ro.disconnect())), []);
  return [{ ref }, bounds];
}
