import { useEffect, useMemo, type FC } from 'react';
import { observer } from 'mobx-react';
import { Chart } from '@features/statistics/Chart/ui';
import { useStore } from '@shared/lib/useStore';

export const StatisticsForThisMonth: FC = observer(() => {
  const { chartStore } = useStore();

  const filteredData = useMemo(() => {
    const data: Record<string, number> = {};

    chartStore.chartData.forEach((item) => {
      if (!data[item.category]) {
        data[item.category] = item.amount;
      } else {
        data[item.category] += item.amount;
      }
    });

    return Object.entries(data).map(([category, amount]) => ({
      category,
      amount,
    }));
  }, [chartStore.chartData]);

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      await chartStore.loadChartData();
    };

    void loadData();
  }, [chartStore]);

  if (chartStore.chartData.length === 0) {
    return <div>No data available for this month.</div>;
  }

  return (
    <div>
      <Chart data={filteredData} />
    </div>
  );
});
