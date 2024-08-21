import { Info } from 'luxon';
import { useFormikContext } from 'formik';
import { type ChangeEvent, type FC } from 'react';
import { Select } from '@shared/ui/Select';

export const Datepicker: FC = () => {
  const { setFieldValue } = useFormikContext();

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFieldValue(event.currentTarget.name, event.target.value).catch(() => {
      // Error occurred, but we're handling it silently
      // You might want to set an error state here if appropriate
    });
  };

  return (
    <fieldset className='flex flex-col gap-3'>
      <label htmlFor='month' className='text-[20px] text-white'>
        Date
      </label>

      <div className='flex flex-row'>
        <Select
          className='w-full min-w-40 tablet:min-w-[126px] desktop:max-w-[152px]'
          inputClassName='rounded-r-none border-r-0'
          name='month'
          options={Info.months()}
          placeholder='MM'
          maxLength={9}
        />

        <input
          type='text'
          name='day'
          className='h-[64px] w-full border border-x-0 border-white bg-transparent p-[0_0_0_10px] tablet:max-w-[76px]'
          onChange={onInputChange}
          placeholder='DD'
          maxLength={2}
        />

        <input
          type='text'
          name='year'
          onChange={onInputChange}
          className='h-[64px] w-full min-w-[71px] rounded-[15px] rounded-l-none border border-l-0  border-white bg-transparent p-[0_0_0_10px] tablet:max-w-[76px]'
          placeholder='YYYY'
          maxLength={4}
        />
      </div>
    </fieldset>
  );
};
