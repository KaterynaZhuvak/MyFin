import type { FC, ReactNode } from 'react';
import * as Popover from '@radix-ui/react-popover';

interface PopoverProps {
  trigger: ReactNode;
  content: ReactNode;
  sideOffset?: number;
  alignOffset?: number;
}

export const PopoverComponent: FC<PopoverProps> = ({
  trigger,
  content,
  sideOffset,
  alignOffset,
}) => (
  <Popover.Root>
    <Popover.Trigger asChild>{trigger}</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        align='start'
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        onOpenAutoFocus={(event) => {
          event.preventDefault();
        }}
      >
        {content}
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
