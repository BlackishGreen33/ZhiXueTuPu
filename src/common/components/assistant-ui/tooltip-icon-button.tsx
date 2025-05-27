'use client';

import * as React from 'react';

import { Button } from '@/common/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/common/components/ui/tooltip';
import { cn } from '@/common/utils/utils';

export type TooltipIconButtonProps = React.ComponentPropsWithoutRef<
  typeof Button
> & {
  tooltip: string;
  side?: 'top' | 'bottom' | 'left' | 'right';
};

export const TooltipIconButton = React.forwardRef<
  HTMLButtonElement,
  TooltipIconButtonProps
>(({ children, tooltip, side = 'bottom', className, ...rest }, ref) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        {...rest}
        className={cn('size-6 p-1', className)}
        ref={ref}
      >
        {children}
        <span className="sr-only">{tooltip}</span>
      </Button>
    </TooltipTrigger>
    <TooltipContent side={side}>{tooltip}</TooltipContent>
  </Tooltip>
));

TooltipIconButton.displayName = 'TooltipIconButton';
