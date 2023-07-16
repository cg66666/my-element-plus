import { defineStore } from 'pinia';
type Fn = (...args: any[]) => void;
export const useEventBus = defineStore('evedntBus', () => {
  let listeners: Record<string, any> = {}; // 收集订阅
  // 订阅
  function on(event: any, fn: Fn) {
    if (!Object.keys(listeners).includes(event)) {
      listeners[event] = [];
    }
    listeners[event].push(fn);
  }
  // 发布
  const emit = (event: any, ...args: any[]) => {
    if (Object.keys(listeners).includes(event)) {
      listeners[event].forEach((fn: Fn) => fn(...args));
    }
  };
  // 取消订阅
  const off = (event: any, fn?: Fn) => {
    if (Object.keys(listeners).includes(event)) {
      if (fn) {
        listeners[event] = listeners[event].filter((innerFn: Fn) => innerFn !== fn);
      } else listeners.delete(event);
    } else listeners = {};
  };
  const once = (event: any, fn: Fn, ...args: any[]) => {
    const once = () => {
      fn(...args);
      off(event, once);
    };
  };
  return { on, emit, off, once };
});
