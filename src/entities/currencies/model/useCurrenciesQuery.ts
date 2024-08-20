import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { useStore } from '@shared/lib/useStore';
import { currenciesApi } from '../api';
import type { Currency } from '../interfaces';

export const useCurrenciesQuery = (): UseQueryResult<Currency[]> => {
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
