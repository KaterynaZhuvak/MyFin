import { useQuery } from '@tanstack/react-query';
import { useStore } from '@shared/lib/useStore';
import { currenciesApi } from '../api';

export const useCurrenciesQuery = (): void => {
  const { currenciesStore } = useStore();

  return useQuery({
    queryKey: ['currencies'],
    queryFn: async () => {
      const data = await currenciesApi();
      currenciesStore.setCurrencies(data);
      return data;
    },
  });
};
