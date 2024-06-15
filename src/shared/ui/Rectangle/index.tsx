import type { FC, HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@shared/lib/cn';
import { Icon } from '@shared/icons/Icon';

export const rectangleVariants = cva(['flex items-center justify-center'], {
  variants: {
    variant: {
      purple:
        'purple-gradient mb-[4px] rounded-[10px] tablet:mb-[29px] tablet:rounded-[30px]',
      green: 'green-gradient rounded-[15px] tablet:rounded-[40px]',
    },
    size: {
      s: 'size-[80px] tablet:h-[185px] tablet:w-[196px]',
      m: 'size-[120px] tablet:h-[300px] tablet:w-[306px]',
    },
  },
});

export interface RectangleProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof rectangleVariants> {
  name: string;
  className?: string;
}

export const Rectangle: FC<RectangleProps> = ({
  name,
  className,
  variant,
  size,
}) => {
  return (
    <div className={cn(rectangleVariants({ variant, size }))}>
      <Icon name={name} className={className} />
    </div>
  );
};
