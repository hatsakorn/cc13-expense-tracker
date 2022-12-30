import { useTransaction } from '../contexts/TransactionContext';
import TransactionItem from './TransactionItem';

export default function TransactionList() {
    const {transactions} = useTransaction();
  return (
    <ul className="list-group">
        {transactions.map(el => <TransactionItem key={el.id} transaction={el}/>)}
        
    </ul>
  );
}
