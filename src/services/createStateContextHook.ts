import { createContext, Dispatch, SetStateAction, useState, useContext, useMemo } from 'react';

export type StateContextDefaultValue<T> = [T, Dispatch<SetStateAction<T>>];

export default function createStateContextHook<T>(
  defaultValue: StateContextDefaultValue<T>,
  calculateChangedBits?: (
    prev: StateContextDefaultValue<T>,
    next: StateContextDefaultValue<T>,
  ) => number,
) {
  const StateContext = createContext<StateContextDefaultValue<T>>(
    defaultValue,
    calculateChangedBits,
  );

  const StateContextProvider = StateContext.Provider;

  function useStateContextProviderValue(initialValue: T) {
    const [state, setState] = useState<T>(initialValue);
    const value: StateContextDefaultValue<T> = useMemo(() => [state, setState], [state]);
    return value;
  }

  function useStateContext() {
    return useContext(StateContext);
  }

  return { StateContextProvider, useStateContext, useStateContextProviderValue };
}
