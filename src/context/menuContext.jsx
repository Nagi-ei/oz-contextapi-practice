import { createContext } from 'react';
import data from '../assets/data';

export const menuContext = createContext();

export function MenuProvider({ children }) {
  return (
    <menuContext.Provider value={data.menu}>{children}</menuContext.Provider>
  );
}
