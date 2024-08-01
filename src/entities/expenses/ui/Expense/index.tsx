import { type FC } from 'react';
import { type ExpenseInterface } from '@entities/expenses/interfaces/expense.interface';
import { formatDate } from '@shared/lib/formatDate';
import { Icon } from '@shared/icons/Icon';
import { EXPENSE_CATEGORIES } from '@entities/expenses/constants/icon.constant';

interface ExpenseProps {
  expense: ExpenseInterface;
  bg: string;
}

export const Expense: FC<ExpenseProps> = ({ expense, bg }) => {
  const formattedDate = formatDate(expense.createdAt);
  const { icon, style } = EXPENSE_CATEGORIES[expense.category];

  return (
    <li
      className={`flex h-[74px] w-[966px] justify-between rounded-[10px] ${bg} items-center`}
    >
      <div className='flex items-center gap-2 '>
        <Icon className={style} name={icon} />
        <span className='text-[24px]'>{expense.category}</span>
        <span>•</span>
        <span className='text-[16px]'>{expense.details}</span>
        <span>•</span>
        <span className='text-[16px]'>{formattedDate}</span>
      </div>
      <span className='text-[24px] font-bold text-[#AE6B6B]'>
        -{expense.amount}
        {expense.currency}
      </span>
    </li>
  );
};
