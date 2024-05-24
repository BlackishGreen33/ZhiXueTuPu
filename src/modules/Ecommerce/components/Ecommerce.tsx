import Earnings from './Earnings';
import Periodically from './Periodically';
import Revenue from './Revenue';
import Transactions from './Transactions';

const Ecommerce: React.FC = () => {
  return (
    <div className="mt-24">
      <Earnings />
      <Revenue />
      <Transactions />
      <Periodically />
    </div>
  );
};

export default Ecommerce;
