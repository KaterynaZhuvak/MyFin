import { Info } from 'luxon';
import { Field, useFormikContext } from 'formik';
import type { FC } from 'react';
import { Select } from '@shared/ui/Select';
import { cn } from '@shared/lib/cn';

interface ContextProps {
  month: string;
  day: string;
  year: string;
}
export const Datepicker: FC = () => {
  const { errors, touched } = useFormikContext<ContextProps>();

  const fieldBaseClass = 'h-[64px] w-full border bg-transparent p-[0_0_0_10px]';
  const isErrorOrTouched =
    errors.month &&
    errors.day &&
    errors.year &&
    touched.month &&
    touched.day &&
    touched.year;

  return (
    <div className='flex flex-col'>
      <label htmlFor='month' className='mb-3 text-[20px] text-white'>
        Date
      </label>
      <div className='flex'>
        <Select
          className='w-full min-w-40 tablet:min-w-[126px] desktop:max-w-[152px]'
          inputClassName='rounded-r-none border-r-0'
          name='month'
          options={Info.months()}
          placeholder='MM'
          maxLength={9}
        />
        <div>
          <Field
            type='text'
            name='day'
            className={cn(
              `${fieldBaseClass} border-x-0 tablet:max-w-[76px]`,
              errors.day && 'border-red-500'
            )}
            placeholder='DD'
            maxLength={2}
          />
        </div>
        <div>
          <Field
            type='text'
            name='year'
            className={cn(
              `${fieldBaseClass} min-w-[71px] rounded-[15px] rounded-l-none border-l-0 tablet:max-w-[76px]`,
              errors.year && 'border-red-500'
            )}
            placeholder='YYYY'
            maxLength={4}
          />
        </div>
      </div>
      {isErrorOrTouched ? (
        <span className='text-red-500'>
          {errors.month ?? errors.day ?? errors.year}
        </span>
      ) : null}
    </div>
  );
};
