import { type FC } from 'react';
import { type ExpenseInterface } from '@entities/expenses/interfaces/expense.interface';
import { formatDate } from '@shared/lib/formatDate';
import { Icon } from '@shared/icons/Icon';
import { EXPENSE_CATEGORIES } from '@entities/expenses/constants/icon.constant';
import { cn } from '@shared/lib/cn';

interface ExpenseProps {
  expense: ExpenseInterface;
  bg: string;
}

export const Expense: FC<ExpenseProps> = ({ expense, bg }) => {
  const formattedDate = formatDate(expense.createdAt);
  const { icon, style } = EXPENSE_CATEGORIES[expense.category];

  return (
    <li
      className={`flex h-[56px] w-full max-w-[343px] justify-between rounded-[10px] p-[0_16px] tablet:h-[74px] tablet:max-w-[966px] desktop:p-[0_40px] ${bg} items-center`}
    >
      <div className='flex items-center gap-2'>
        <div
          className={cn(
            style,
            'flex size-[24px] items-center justify-center rounded-full tablet:mr-[8px] tablet:size-[38px]'
          )}
        >
          <Icon className='size-[12px] tablet:size-[18px]' name={icon} />
        </div>

        <span className='hidden text-[24px] desktop:block'>
          {expense.category}
        </span>

        <span className=' hidden desktop:block'>•</span>

        <span className='text-nowrap text-[12px] tablet:text-[16px]'>
          {expense.details}
        </span>

        <span>•</span>

        <span className='text-[12px] desktop:text-[16px]'>{formattedDate}</span>
      </div>

      <span className='text-[16px] font-bold text-[#AE6B6B] desktop:text-[24px]'>
        -{expense.amount} {expense.currency}
      </span>
    </li>
  );
};
