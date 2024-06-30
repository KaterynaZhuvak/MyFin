import {
  type Context,
  type FC,
  type PropsWithChildren,
  createContext,
} from 'react';
import { RootStore } from '../RootStore';

export const StoreContext: Context<RootStore> = createContext<RootStore>(
  {} as RootStore
);

const store: RootStore = new RootStore();

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
