'use client';

// eslint-disable-next-line simple-import-sort/imports
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import D3WordCloud from 'react-d3-cloud';

interface WordCloudProps {
  formattedTopics: { text: string; value: number }[];
}

const fontSizeMapper = (word: { value: number }) =>
  Math.log2(word.value) * 5 + 16;

const PureWordCloud: React.FC<WordCloudProps> = ({ formattedTopics }) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <>
      <D3WordCloud
        data={formattedTopics}
        height={550}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme === 'dark' ? 'white' : 'black'}
        onWordClick={(e, d) => {
          router.push('/quiz?topic=' + d.text);
        }}
      />
    </>
  );
};

const WordCloud = React.memo(PureWordCloud);

export default WordCloud;
