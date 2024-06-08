import type { Meta, StoryObj } from '@storybook/react';
import { GradientButton } from './GradientButton';

const meta: Meta<typeof GradientButton> = {
  title: 'ui/GradientButton',
  component: GradientButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Register: Story = {
  args: {
    title: 'Register',
    styles: 'py-[12px] px-[123px] text-[32px] font-bold',
  },
};

export const Save: Story = {
  args: {
    title: 'Save',
    styles: 'py-[8px] px-[152px] text-[32px] font-bold',
  },
};
export const AddExpense: Story = {
  args: {
    title: 'Add Expense',
    styles: 'py-[16px] px-[162px] text-[32px] font-bold',
  },
};

export const SaveChanges: Story = {
  args: {
    title: 'Save Changes',
    styles: 'py-[8px] px-[86px] text-[32px] font-bold',
  },
};

export const GetAnAdvise: Story = {
  args: {
    title: 'Get an advise',
    styles: 'py-[16px] px-[62px] text-[30px] font-bold',
  },
};

export const SetABudget: Story = {
  args: {
    title: 'Set a budget',
    styles: 'py-[8px] px-[57px] text-[28px] font-bold',
  },
};

export const Ok: Story = {
  args: {
    title: 'Ok',
    styles: 'py-[5px] px-[58px] text-[28px] font-bold',
  },
};

export const LogIn: Story = {
  args: {
    title: 'Log In',
    styles: 'py-[6px] px-[31px] text-[20px] font-semibold',
  },
};

export const AddANewExpense: Story = {
  args: {
    title: 'Add a new expense',
    styles: 'py-[5px] px-[27px] text-[16px] font-bold',
  },
};

export const TryLater: Story = {
  args: {
    title: 'Try later',
    styles: 'py-[1px] px-[34px] text-[28px] font-bold',
  },
};
