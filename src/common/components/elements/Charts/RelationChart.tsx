import React, {useRef, useEffect, useState} from 'react';
import RelationGraph, {RGNodeSlotProps} from 'relation-graph-react';
import type { RGOptions, RGNode, RGLine, RGLink, RGUserEvent, RGJsonData, RelationGraphComponent } from 'relation-graph-react';
import CircumIcon from "./../Icons";


const RelationChart: React.FC = () => {
  const graphRef = useRef<RelationGraphComponent|null>(null);
  const myPage = useRef<HTMLDivElement|null>(null);
  const [isShowNodeTipsPanel, setIsShowNodeTipsPanel] = useState(false);
  const [nodeMenuPanelPosition, setNodeMenuPanelPosition] = useState({ x: 0, y: 0 });
  const [currentNode, setCurrentNode] = useState({});
  const graphOptions: RGOptions = {
    allowSwitchLineShape: true,
    allowSwitchJunctionPoint: true,
    defaultNodeColor: 'rgba(66,187,66,1)',
    defaultJunctionPoint: 'border'
  };

  const showGraph = () => {
    const __graph_json_data: RGJsonData = {
      rootId: '2',
      nodes: [
        { id: '1', text: 'Node-1', data: { myicon: 'star' } },
        { id: '2', text: 'Node-2', data: { myicon: 'settings' } },
        { id: '3', text: 'Node-3', data: { myicon: 'settings' } },
        { id: '4', text: 'Node-4', data: { myicon: 'star' } },
        { id: '6', text: 'Node-6', data: { myicon: 'settings' } },
        { id: '7', text: 'Node-7', data: { myicon: 'settings' } },
        { id: '8', text: 'Node-8', data: { myicon: 'star' } },
        { id: '9', text: 'Node-9', data: { myicon: 'headphones' } },
        { id: '71', text: 'Node-71', data: { myicon: 'headphones' } },
        { id: '72', text: 'Node-72', data: { myicon: 'bluetooth' } },
        { id: '73', text: 'Node-73', data: { myicon: 'star' } },
        { id: '81', text: 'Node-81', data: { myicon: 'burger' } },
        { id: '82', text: 'Node-82', data: { myicon: 'burger' } },
        { id: '83', text: 'Node-83', data: { myicon: 'star' } },
        { id: '84', text: 'Node-84', data: { myicon: 'burger' } },
        { id: '85', text: 'Node-85', data: { myicon: 'gift' } },
        { id: '91', text: 'Node-91', data: { myicon: 'gift' } },
        { id: '92', text: 'Node-82', data: { myicon: 'gift' } },
        { id: '51', text: 'Node-51', data: { myicon: 'gift' } },
        { id: '52', text: 'Node-52', data: { myicon: 'gift' } },
        { id: '53', text: 'Node-53', data: { myicon: 'gift' } },
        { id: '54', text: 'Node-54', data: { myicon: 'gift' } },
        { id: '55', text: 'Node-55', data: { myicon: 'gift' } },
        { id: '5', text: 'Node-5', data: { myicon: 'gift' } }
      ],
      lines: [
        { from: '7', to: '71', text: 'Investment' },
        { from: '7', to: '72', text: 'Investment' },
        { from: '7', to: '73', text: 'Investment' },
        { from: '8', to: '81', text: 'Investment' },
        { from: '8', to: '82', text: 'Investment' },
        { from: '8', to: '83', text: 'Investment' },
        { from: '8', to: '84', text: 'Investment' },
        { from: '8', to: '85', text: 'Investment' },
        { from: '9', to: '91', text: 'Investment' },
        { from: '9', to: '92', text: 'Investment' },
        { from: '5', to: '51', text: 'Investment1' },
        { from: '5', to: '52', text: 'Investment' },
        { from: '5', to: '53', text: 'Investment3' },
        { from: '5', to: '54', text: 'Investment4' },
        { from: '5', to: '55', text: 'Investment' },
        { from: '1', to: '2', text: 'Investment' },
        { from: '3', to: '1', text: 'Executive' },
        { from: '4', to: '2', text: 'Executive' },
        { from: '6', to: '2', text: 'Executive' },
        { from: '7', to: '2', text: 'Executive' },
        { from: '8', to: '2', text: 'Executive' },
        { from: '9', to: '2', text: 'Executive' },
        { from: '1', to: '5', text: 'Investment' }
      ]
    };
    const graphInstance = graphRef.current?.getInstance();
    if (graphInstance) {
      graphInstance.setJsonData(__graph_json_data).then(() => {

        graphInstance.moveToCenter();
        graphInstance.zoomToFit();
      });
    }
  };

  const onNodeClick = (nodeObject: RGNode, event: RGUserEvent) => {
    console.log('onNodeClick:', nodeObject);
  };

  const onLineClick = (lineObject: RGLine, linkObject: RGLink, event: RGUserEvent) => {
    console.log('onLineClick:', lineObject);
  };
  const showNodeTips = (nodeObject: RGNode, $event: React.MouseEvent) => {
    setCurrentNode(nodeObject);
    const _base_position = myPage.current!.getBoundingClientRect();
    console.log('showNodeMenus:', $event.clientX, $event.clientY, _base_position);
    setIsShowNodeTipsPanel(true);
    setNodeMenuPanelPosition({
      x: $event.clientX - _base_position.x + 10,
      y: $event.clientY - _base_position.y + 10
    });
  };

  const hideNodeTips = (nodeObject: RGNode, $event: React.MouseEvent) => {
    console.log('hideNodeTips:');
    setIsShowNodeTipsPanel(false);
  };
  const MyNodeSlot:React.FC<RGNodeSlotProps> = ({node}) => {
    return <div
      className="h-full"
      onMouseEnter={(e) => showNodeTips(node, e)}
      onMouseLeave={(e) => hideNodeTips(node, e)}
    >
      <div className="c-my-rg-node">
        {/* @ts-ignore */}
        <CircumIcon style={{ fontSize: '30px' }} name={node.data?.myicon} />
      </div>
      <div
        style={{
          color: 'forestgreen',
          fontSize: '16px',
          position: 'absolute',
          width: '160px',
          height: '25px',
          lineHeight: '25px',
          marginTop: '5px',
          marginLeft: '-48px',
          textAlign: 'center',
          backgroundColor: 'rgba(66,187,66,0.2)'
        }}
      >
        {node.data?.myicon}
      </div>
    </div>
  }

  useEffect(() => {
    showGraph();
  }, []);

  return (
    <div>
      <div ref={myPage} style={{ height: '100vh' }}>
        <RelationGraph ref={graphRef} options={graphOptions} onNodeClick={onNodeClick} onLineClick={onLineClick} nodeSlot={MyNodeSlot}>
        </RelationGraph>
      </div>
      {isShowNodeTipsPanel && (
        <div
          className="p-3 bg-white border border-gray-100 drop-shadow-lg	absolute rounded-lg"
          style={{
            left: `${nodeMenuPanelPosition.x}px`,
            top: `${nodeMenuPanelPosition.y}px`,
            zIndex: 999
          }}
        >
          <div

            style={{
              lineHeight: '25px',
              paddingLeft: '10px',
              color: '#888888',
              fontSize: '12px'
            }}
          >
            {/* @ts-ignore */}
            Node Name: {currentNode.text}
          </div>
          {/* @ts-ignore */}
          <div className="c-node-menu-item">id: {currentNode.text}</div>
          {/* @ts-ignore */}
          <div className="c-node-menu-item">icon: {currentNode.data.myicon}</div>
        </div>
      )}
    </div>
  );
};

export default RelationChart;
