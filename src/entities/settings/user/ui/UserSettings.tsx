import type { FC } from 'react';
import { observer } from 'mobx-react';

export const UserSettings: FC = observer(() => {
  return (
    <div className='text-[24px] font-bold tracking-[0.01rem]'>
      User Settings
    </div>
  );
});
