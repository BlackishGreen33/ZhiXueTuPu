import {
  ThreadListItemPrimitive,
  ThreadListPrimitive,
} from '@assistant-ui/react';
import { ArchiveIcon, PlusIcon } from 'lucide-react';

import { TooltipIconButton } from '@/common/components/assistant-ui/tooltip-icon-button';
import { Button } from '@/common/components/ui/button';

export const ThreadList: React.FC = () => (
  <ThreadListPrimitive.Root className="flex flex-col items-stretch gap-1.5">
    <ThreadListNew />
    <ThreadListItems />
  </ThreadListPrimitive.Root>
);

const ThreadListNew: React.FC = () => (
  <ThreadListPrimitive.New asChild>
    <Button
      className="data-[active]:bg-muted hover:bg-muted flex items-center justify-start gap-1 rounded-lg px-2.5 py-2 text-start"
      variant="ghost"
    >
      <PlusIcon />
      新的对话
    </Button>
  </ThreadListPrimitive.New>
);

const ThreadListItems: React.FC = () => (
  <ThreadListPrimitive.Items components={{ ThreadListItem }} />
);

const ThreadListItem: React.FC = () => (
  <ThreadListItemPrimitive.Root className="data-[active]:bg-muted hover:bg-muted focus-visible:bg-muted focus-visible:ring-ring flex items-center gap-2 rounded-lg transition-all focus-visible:ring-2 focus-visible:outline-none">
    <ThreadListItemPrimitive.Trigger className="flex-grow px-3 py-2 text-start">
      <ThreadListItemTitle />
    </ThreadListItemPrimitive.Trigger>
    <ThreadListItemArchive />
  </ThreadListItemPrimitive.Root>
);

const ThreadListItemTitle: React.FC = () => (
  <p className="text-sm">
    <ThreadListItemPrimitive.Title fallback="新对话" />
  </p>
);

const ThreadListItemArchive: React.FC = () => (
  <ThreadListItemPrimitive.Archive asChild>
    <TooltipIconButton
      className="hover:text-primary text-foreground mr-3 ml-auto size-4 p-0"
      variant="ghost"
      tooltip="留存对话"
    >
      <ArchiveIcon />
    </TooltipIconButton>
  </ThreadListItemPrimitive.Archive>
);
