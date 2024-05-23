import {
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineStock,
} from 'react-icons/ai';
import { BiColorFill } from 'react-icons/bi';
import { BsBarChart, BsKanban } from 'react-icons/bs';
import { FiEdit, FiPieChart, FiShoppingBag } from 'react-icons/fi';
import { GiLouvrePyramid } from 'react-icons/gi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';

type LinkType = {
  title: string;
  links: {
    name: string;
    icon: React.ReactNode;
  }[];
};

export const links: LinkType[] = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'ecommerce',
        icon: <FiShoppingBag />,
      },
    ],
  },
  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        icon: AiOutlineShoppingCart,
      },
      {
        name: 'employees',
        icon: IoMdContacts,
      },
      {
        name: 'customers',
        icon: RiContactsLine,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: AiOutlineCalendar,
      },
      {
        name: 'kanban',
        icon: BsKanban,
      },
      {
        name: 'editor',
        icon: FiEdit,
      },
      {
        name: 'color-picker',
        icon: BiColorFill,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: AiOutlineStock,
      },
      {
        name: 'area',
        icon: AiOutlineAreaChart,
      },
      {
        name: 'bar',
        icon: AiOutlineBarChart,
      },
      {
        name: 'pie',
        icon: FiPieChart,
      },
      {
        name: 'financial',
        icon: RiStockLine,
      },
      {
        name: 'color-mapping',
        icon: BsBarChart,
      },
      {
        name: 'pyramid',
        icon: GiLouvrePyramid,
      },
      {
        name: 'stacked',
        icon: AiOutlineBarChart,
      },
    ],
  },
];
