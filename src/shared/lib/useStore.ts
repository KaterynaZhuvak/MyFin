import { useContext } from 'react';
import type { RootStore } from '../../app/RootStore.tsx';
import { StoreContext } from '../../app/providers/storeProvider';

export const useStore = (): RootStore => useContext(StoreContext);
