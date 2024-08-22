import type { FC } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
}): FC.JSX.Element => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
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

interface ChartProps {
  data: { category: string; amount: number }[];
}

export const Chart: FC<ChartProps> = ({ data }) => {
  return (
    <PieChart width={700} height={700}>
      <Pie
        data={data}
        cx='50%'
        cy='50%'
        innerRadius={160}
        outerRadius={250}
        labelLine={false}
        label={renderCustomizedLabel}
        fill='#8884d8'
        dataKey='amount'
        animationBegin={100}
        animationDuration={1500}
        animationEasing='ease-out'
      >
        {data.map((_, index) => (
          <Cell
            key={`cell-${String(index)}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
    </PieChart>
  );
};
