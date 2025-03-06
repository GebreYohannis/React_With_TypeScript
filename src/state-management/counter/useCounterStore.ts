import { create } from "zustand";

import { mountStoreDevtool } from "simple-zustand-devtools";
interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((setValue) => ({
  counter: 0,
  max: 5,
  increment: () => setValue((store) => ({ counter: store.counter + 1 })),
  decrement: () => setValue((store) => ({ counter: store.counter - 1 })),
  reset: () => setValue(() => ({ counter: 0 })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Counter Store", useCounterStore);

export default useCounterStore;
