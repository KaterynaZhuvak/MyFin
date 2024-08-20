import { useState, useEffect } from 'react';
import { autorun } from 'mobx';
import { useStore } from '@shared/lib/useStore';

interface UseExpensesAmountHookResult {
  amount: number;
  isLoading: boolean;
}

export const useExpensesAmount = (): UseExpensesAmountHookResult => {
  const [amount, setAmount] = useState(0);
  const { expensesStore } = useStore();

  useEffect(() => {
    if (expensesStore.getAmount()) {
      expensesStore.setLoading(false);
    }

    const disposer = autorun(() => {
      const updatedAmount = expensesStore.getAmount();
      setAmount(updatedAmount);
      if (updatedAmount) {
        expensesStore.setLoading(false);
      }
    });

    return () => {
      disposer();
    };
  });

  return {
    amount,
    isLoading: expensesStore.getLoading(),
  };
};
