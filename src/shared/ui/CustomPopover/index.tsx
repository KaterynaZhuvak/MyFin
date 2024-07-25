import type { FC, ReactNode } from 'react';
import * as Popover from '@radix-ui/react-popover';

interface PopoverProps {
  trigger: ReactNode;
  content: ReactNode;
  sideOffset?: number;
  alignOffset?: number;
  className?: string;
}

export const CustomPopover: FC<PopoverProps> = ({
  trigger,
  content,
  sideOffset,
  alignOffset,
  className,
}) => (
  <Popover.Root>
    <Popover.Trigger asChild>{trigger}</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        align='start'
        className={className}
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
