import type { FC } from 'react';
import { observer } from 'mobx-react';

export const AppSettings: FC = observer(() => {
  return (
    <div className='text-[24px] font-bold tracking-[0.01rem]'>App Settings</div>
  );
});
