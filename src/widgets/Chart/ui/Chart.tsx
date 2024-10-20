import { type FC, type ReactElement } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { useStore } from '@shared/lib/useStore';
import { COLORS } from '../model/colors';
import { useExpensesByCategoryQuery } from '../model/useExpensesByCategoryQuery';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}): ReactElement => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      className='text-[28px] font-normal'
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const Chart: FC = () => {
  const { data } = useExpensesByCategoryQuery();
  const { currenciesStore } = useStore();

  return (
    <div className='ml-[25px] flex gap-[30px]'>
      <ul className='flex flex-col justify-center'>
        {data?.map(({ category, totalAmount }, index) => (
          <li key={category} className='mb-[20px] flex items-center gap-x-2'>
            <div
              className='size-[30px] rounded-[5px]'
              style={{ background: COLORS[index % COLORS.length] }}
            />
            <p className='text-[20px] font-normal'>
              - {category} ({totalAmount} {currenciesStore.getLocalCurrency()})
            </p>
          </li>
        ))}
      </ul>

      <PieChart width={700} height={700}>
        <Pie
          data={data?.map(({ category, totalAmount }) => ({
            category,
            totalAmount,
            amount: totalAmount,
          }))}
          cx='50%'
          cy='50%'
          innerRadius={160}
          outerRadius={250}
          labelLine={false}
          label={renderCustomizedLabel}
          fill='#8884d8'
          stroke='none'
          dataKey='amount'
          animationBegin={100}
          animationDuration={1500}
          animationEasing='ease-out'
        >
          {data?.map((_, index) => (
            <Cell
              key={`cell-${String(index)}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
