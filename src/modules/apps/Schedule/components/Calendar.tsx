'use client';

import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import {
  Agenda,
  Day,
  DragAndDrop,
  Inject,
  Month,
  Resize,
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Week,
  WorkWeek,
} from '@syncfusion/ej2-react-schedule';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import Header from '@/common/components/elements/Header';
import { ScheduleData } from '@/common/dummy';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Calendar: React.FC = () => {
  const [scheduleObj, setScheduleObj] = useState();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const change = (args) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    scheduleObj.selectedDate = args.value;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    scheduleObj.dataBind();
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, type: 'spring', stiffness: 200 },
      }}
      className="m-2 mt-24 rounded-3xl bg-white p-2 md:m-10 md:p-10"
    >
      <Header category="应用" title="学习日程管理" />
      <ScheduleComponent
        height="650px"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ref={(schedule) => setScheduleObj(schedule)}
        selectedDate={new Date(2024, 0, 6)}
        eventSettings={{ dataSource: ScheduleData }}
        dragStart={onDragStart}
      >
        <ViewsDirective>
          {['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            <ViewDirective key={item} option={item} />
          ))}
        </ViewsDirective>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
      <PropertyPane>
        <table style={{ width: '100%', background: 'white' }}>
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>
                <DatePickerComponent
                  value={new Date(2024, 0, 6)}
                  showClearButton={false}
                  placeholder="当前时间"
                  floatLabelType="Always"
                  change={change}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </motion.div>
  );
};

export default Calendar;
