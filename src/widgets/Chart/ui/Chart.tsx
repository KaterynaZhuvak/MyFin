import { type FC, useMemo, type ReactElement } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { expenses } from '../model/expenses';
import { COLORS } from '../model/colors';
// import { useGetExpenses } from '../model/useGetExpenses';

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
  // const { isLoading, isError, data, error } = useGetExpenses();
  // console.log(isLoading);

  const filteredData = useMemo(() => {
    const data: Record<
      string,
      { amount: number; currency: string; _id: string }
    > = {};

    expenses.forEach(({ category, amount, currency, _id }) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- it's nessesary condition
      if (!data[category]) {
        data[category] = { amount, currency, _id };
      } else {
        data[category].amount += amount;
      }
    });

    return Object.entries(data).map(
      ([category, { amount, currency, _id }]) => ({
        category,
        amount,
        currency,
        _id,
      })
    );
  }, []);

  if (expenses.length === 0) {
    return <div>No data available for this month.</div>;
  }

  return (
    <div className='ml-[25px] flex gap-[30px]'>
      <ul className='flex flex-col justify-center'>
        {filteredData.map(({ category, amount, currency, _id }, index) => (
          <li key={_id} className='mb-[20px] flex items-center gap-x-2'>
            <div
              className='size-[30px] rounded-[5px]'
              style={{ background: COLORS[index % COLORS.length] }}
            />
            <p className='text-[20px] font-normal'>
              - {category} ({amount} {currency})
            </p>
          </li>
        ))}
      </ul>

      <PieChart width={700} height={700}>
        <Pie
          data={filteredData}
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
          {filteredData.map((_, index) => (
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
