import { Field, Form, Formik } from 'formik';
import { useState, type FC, type ChangeEvent } from 'react';
import { CustomDropdown } from '@shared/ui/CustomDropdown';

const initialValues = {
  budget: '',
  amount: '',
  period: '',
  currency: '',
};

const currencyList = [
  'USD',
  'EUR',
  'UAH',
  'GBP',
  'AUD',
  'CAD',
  'PLN',
  'BGN',
  'HUF',
  'GEL',
  'DKK',
  'ISK',
  'CZK',
  'TRY',
  'MDL',
  'KRW',
];

export const BudgetsPage: FC = () => {
  const [budget, setBudget] = useState<string>('');
  const [amount, setAmount] = useState<string>('0');
  const [period, setPeriod] = useState<string>('');
  const [currency, setCurrency] = useState<string>('');
  const [rangeValue, setRangeValue] = useState('0');

  const minBudget = 0;

  const onSubmit = (): void => {
    setAmount('0');
  };

  return (
    <div className='flex h-full w-auto flex-col flex-wrap bg-[#0F0F0F] p-[12px_16px]'>
      <h2 className='text-center text-[25px] font-bold tablet:text-left tablet:text-[34px]'>
        Your Budgeting
      </h2>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ setFieldValue }) => (
          <Form className='mt-[32px] flex flex-col items-center justify-center'>
            <div className='flex w-full flex-wrap items-center gap-[12px]'>
              <span className='text-[16px] tablet:text-[24px]'>
                Setting a budget for
              </span>

              <CustomDropdown
                inputValue={period}
                setInputValue={setPeriod}
                inputName='period'
                options={['This Week', 'This Month']}
                inputWrapperStyles='relative h-[40px] w-[144px] z-[10]'
                inputStyles='flex size-full cursor-pointer content-center rounded-[10px] border bg-inherit p-[0_16px] placeholder:text-white'
                inputIconStyles='absolute right-[16px] top-1/2 size-[24px] -translate-y-1/2 transition-all duration-300'
                dropdownWrapperStyles=''
                dropdownStyles='absolute right-0 top-[48px] flex w-[247px] flex-col gap-[8px] rounded-[10px] border bg-[#0F0F0F] p-[16px_0]'
                optionStyles='flex h-[32px] w-full cursor-pointer items-center p-[0_16px] transition-all duration-300 hover:bg-[#272727]'
                optionIconStyles='absolute right-[16px] top-1/2 ml-[100%] size-[16px] -translate-y-1/2 fill-bright-green'
              />
            </div>

            <div className='mt-[32px] flex flex-col tablet:mt-[238px] tablet:flex-row tablet:content-center tablet:items-center tablet:gap-[16px]'>
              <span className='text-center text-[16px] font-bold tablet:text-left tablet:text-[30px]'>
                Enter amount:
              </span>

              <div className='mt-[16px] flex w-full items-center justify-center gap-[16px] tablet:mt-0 tablet:w-auto'>
                <Field
                  type='number'
                  name='amount'
                  onChange={async (e: ChangeEvent<HTMLInputElement>) => {
                    await setFieldValue('amount', e.target.value);
                    setAmount(e.target.value);
                  }}
                  className='flex h-[48px] w-[124px] items-center rounded-[12px] border border-white bg-inherit p-[0_16px] text-[#ADADAD] transition-shadow duration-300 focus:shadow-[0_0_5px_white] focus:outline-none tablet:h-[64px] tablet:w-[212px] tablet:text-[20px] '
                />

                <CustomDropdown
                  inputValue={currency}
                  setInputValue={setCurrency}
                  inputName='currency'
                  options={currencyList}
                  inputWrapperStyles='relative h-[32px] w-[80px] z-[1] tablet:text-[20px]'
                  inputStyles='flex size-full cursor-pointer content-center rounded-[10px] bg-inherit placeholder:text-white'
                  inputIconStyles='absolute right-[16px] top-1/2 size-[24px] -translate-y-1/2 transition-all duration-300 tablet:size-[32px] tablet:right-0'
                  dropdownWrapperStyles='absolute h-[264px] w-[209px] right-[-40px] top-[48px] rounded-[15px] border overflow-hidden tablet:left-0'
                  dropdownStyles='flex size-full flex-col gap-[8px] bg-[#0F0F0F] p-[20px_0] overflow-y-auto'
                  optionStyles='flex h-[32px] w-full cursor-pointer items-center p-[0_16px] transition-all duration-300 hover:bg-[#272727]'
                  optionIconStyles='absolute right-[16px] top-1/2 ml-[100%] size-[16px] -translate-y-1/2 fill-bright-green'
                />
              </div>
            </div>

            <div className='relative mt-[32px] flex w-[320px] items-center justify-between tablet:w-[520px]'>
              <span className='text-[20px] text-[#ADADAD]'>0</span>

              <div className='absolute bottom-full h-[30px] w-full pl-[87px] tablet:pl-[38px]'>
                <div className='relative h-[30px] w-[217px] pl-[20px] tablet:w-[466px]'>
                  <span
                    className={`${rangeValue === '0' ? 'hidden' : 'block'} absolute top-0 translate-x-[-30%] text-[20px] text-[#ADADAD]`}
                    style={{ left: `${rangeValue}%` }}
                  >
                    {budget}
                  </span>
                </div>
              </div>

              <Field
                type='range'
                name='budget'
                max={amount}
                min={minBudget}
                step={(Number(amount) - minBudget) / 50}
                onChange={async (e: ChangeEvent<HTMLInputElement>) => {
                  await setFieldValue('budget', e.target.value);
                  setBudget(e.target.value);
                  const newValue = Math.round(
                    (Number(e.target.value) / Number(amount)) * 100
                  ).toString();
                  setRangeValue(newValue);
                }}
                className='custom-range'
              />
            </div>

            <button
              type='submit'
              className='mt-[48px] flex h-[48px] w-[316px] items-center justify-center rounded-[10px] bg-[linear-gradient(289.25deg,_#BFFCBA_-112.17%,_rgba(155,_255,_182,_0.8217)_-19.51%,_rgba(122,_250,_199,_0.484375)_-0.92%,_#15FFC0_133.51%,_rgba(68,_255,_221,_0.7)_157.37%)] text-[24px] font-semibold hover:bg-[linear-gradient(289.25deg,_#A3E99D_-112.17%,_rgba(9,_52,_35,_0.484375)_1.54%,_#05A67B_133.51%,_rgba(155,_255,_182,_0.8217)_157.34%,_rgba(68,_255,_221,_0.7)_157.37%)] tablet:mt-[72px] tablet:h-[58px] tablet:w-[284px] tablet:text-[28px]'
            >
              Set a budget
            </button>
          </Form>
        )}
      </Formik>

      <h3 className='mt-[32px] text-center text-[25px] font-bold tablet:mt-[178px] tablet:text-start tablet:text-[34px]'>
        Budget control
      </h3>

      <p
        className='m-[24px_auto_0_auto] rounded-[10px] border border-bright-green bg-modal-background
p-[16px] text-[16px] tablet:mt-[48px] tablet:max-w-[746px] tablet:text-[24px]'
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod neque
        quis dolores esse, suscipit minima illo. Est labore eos nemo.
      </p>
    </div>
  );
};
