import { type FC } from 'react';
import { type ExpenseInterface } from '@entities/expenses/interfaces/expense.interface';

interface ExpenseProps {
  expense: ExpenseInterface;
}

export const Expense: FC<ExpenseProps> = ({ expense }) => {
  return (
    <div className='flex h-[74px] w-[966px] justify-between rounded-[10px]  align-middle'>
      <div>
        <div>Icon</div>
        <div>Name</div>
        <div>{expense.details}</div>
      </div>
      <div>
        <span>{expense.amount}</span>
        <span>{expense.currencyId}</span>
      </div>
    </div>
  );
};
