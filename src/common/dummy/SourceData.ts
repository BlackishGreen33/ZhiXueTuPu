const folder =
  'https://img.icons8.com/?size=100&id=uFT5jer7MWiM&format=png&color=000000';
const docx =
  'https://img.icons8.com/?size=100&id=OToKAMj5GVOK&format=png&color=000000';
const pdf =
  'https://img.icons8.com/?size=100&id=emjQ5sYXZdXI&format=png&color=000000';
const ppt =
  'https://img.icons8.com/?size=100&id=r6b0mqpJv6TN&format=png&color=000000';
const exe =
  'https://img.icons8.com/?size=100&id=BbLGoyF1B_mT&format=png&color=000000';
const archive =
  'https://img.icons8.com/?size=100&id=CGnzkeGL9zOP&format=png&color=000000';
const music =
  'https://img.icons8.com/?size=100&id=eOHt8KY71GwB&format=png&color=000000';
const image =
  'https://img.icons8.com/?size=100&id=ubpIBvM5kGB0&format=png&color=000000';
const video =
  'https://img.icons8.com/?size=100&id=lMHolzFynGYA&format=png&color=000000';

export const SourceData = [
  {
    nodeId: '01',
    nodeText: 'Music',
    image: folder,
    nodeChild: [{ nodeId: '01-01', nodeText: 'Gouttes.mp3', image: music }],
  },
  {
    nodeId: '02',
    nodeText: 'Videos',
    image: folder,
    nodeChild: [
      { nodeId: '02-01', nodeText: 'Naturals.mp4', image: video },
      { nodeId: '02-02', nodeText: 'Wild.mpeg', image: video },
    ],
  },
  {
    nodeId: '03',
    nodeText: 'Documents',
    image: folder,
    nodeChild: [
      {
        nodeId: '03-01',
        nodeText: 'Environment Pollution.docx',
        image: docx,
      },
      {
        nodeId: '03-02',
        nodeText: 'Global Water, Sanitation.docx',
        image: docx,
      },
      { nodeId: '03-03', nodeText: 'Global Warming.ppt', image: ppt },
      { nodeId: '03-04', nodeText: 'Social Network.pdf', image: pdf },
      { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf', image: pdf },
    ],
  },
  {
    nodeId: '04',
    nodeText: 'Pictures',
    image: folder,
    nodeChild: [
      {
        nodeId: '04-01',
        nodeText: 'Camera Roll',
        image: folder,
        nodeChild: [
          {
            nodeId: '04-01-01',
            nodeText: 'WIN_20160726_094117.jpg',
            image: image,
          },
          {
            nodeId: '04-01-02',
            nodeText: 'WIN_20160726_094118.jpg',
            image: image,
          },
        ],
      },
      { nodeId: '04-02', nodeText: 'Wind.jpg', image: image },
      { nodeId: '04-03', nodeText: 'Stone.jpg', image: image },
    ],
  },
  {
    nodeId: '05',
    nodeText: 'Downloads',
    image: folder,
    nodeChild: [
      { nodeId: '05-01', nodeText: 'UI-Guide.pdf', image: pdf },
      { nodeId: '05-02', nodeText: 'Tutorials.zip', image: archive },
      { nodeId: '05-03', nodeText: 'Game.exe', image: exe },
      { nodeId: '05-04', nodeText: 'TypeScript.7z', image: archive },
    ],
  },
];
