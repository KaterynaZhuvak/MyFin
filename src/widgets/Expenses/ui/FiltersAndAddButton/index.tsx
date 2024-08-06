import { useState, type FC } from 'react';
import { CustomModal } from '@shared/ui/Modal';
import { Button } from '@shared/ui/Button';
import { CreateExpenseModal } from '@entities/expenses/ui/CreateExpenseModal';

export const FiltersAndAddButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='flex w-[964px] flex-row justify-between'>
      <h1 className='text-[34px] font-bold leading-10'>All Expenses</h1>
      <Button
        title='Add a new expense'
        type='button'
        className='gradient h-[40px] w-[212px] rounded-[10px]'
        onClick={handleOnClick}
      />
      <CustomModal
        className='h-[932px] w-[746px] rounded-[20px] bg-modal-background p-[60px_112px_104px_107px]'
        label='add expense'
        isOpen={isOpen}
        onRequestClose={handleOnClick}
      >
        <h1 className=' text-center text-[34px] font-bold leading-10'>
          Add Expense
        </h1>
        <CreateExpenseModal />
        <Button
          title='Cancel'
          className=' h-[72px] w-[526px] rounded-[15px] border border-bright-green bg-transparent text-[32px] font-bold text-bright-green'
          onClick={handleOnClick}
        />
      </CustomModal>
    </section>
  );
};
