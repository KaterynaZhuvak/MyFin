import { useQuery } from '@tanstack/react-query';
import { useStore } from '@shared/lib/useStore';
import { categoriesApi } from '../api';

export const useCategoriesQuery = (): void => {
  const { categoriesStore } = useStore();

  useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const data = await categoriesApi();
      categoriesStore.setCategories(data);
      return data;
    },
  });
};
