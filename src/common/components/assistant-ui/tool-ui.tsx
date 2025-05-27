'use client';

import { makeAssistantToolUI } from '@assistant-ui/react';
import {
  CheckCircle,
  LoaderCircle,
  OctagonX,
  TriangleAlert,
} from 'lucide-react';
import Image from 'next/image';

import { Card, CardContent } from '@/common/components/ui/card';

type ToolStatus = 'running' | 'complete' | 'incomplete' | 'requires-action';

const statusIconMap: Record<ToolStatus, React.ReactNode> = {
  running: <LoaderCircle className="size-4 animate-spin text-indigo-500" />,
  complete: <CheckCircle className="size-4 text-emerald-500" />,
  'requires-action': <TriangleAlert className="size-4 text-amber-500" />,
  incomplete: <OctagonX className="size-4 text-rose-500" />,
};

const SearchWebToolUi = makeAssistantToolUI({
  toolName: 'SEARCH_WEB',
  render: ({ status }) => {
    return (
      <Card>
        <CardContent>
          <div className="flex items-center gap-2 mt-6">
            <Image src="/logo.png" alt="logo" width={25} height={25} />
            <span>网络搜索</span>
            <span>{statusIconMap[status.type]}</span>
          </div>
        </CardContent>
      </Card>
    );
  },
});

const ToolUIWrapper: React.FC = () => (
  <>
    <SearchWebToolUi />
  </>
);

export const ToolsByNameComponents = {
  SEARCH_WEB: SearchWebToolUi,
};

export default ToolUIWrapper;
