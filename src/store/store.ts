import { create } from "zustand";
import { counter } from "./counter/counter";
const useStore = create((set) => ({
  counter
})
)