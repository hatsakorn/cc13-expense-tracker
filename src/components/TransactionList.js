import TransactionItem from './TransactionItem';

export default function TransactionList() {
  return (
    <ul className="list-group">
      <TransactionItem
        transaction={{
          id: 'f912b5ca-4a36-42be-983e-c06df51b5792',
          payee: '3BB',
          amount: 631.3,
          date: '2021-08-25T00:00:00.000Z',
          category: {
            id: '8d7eff34-9e78-4a64-9916-d1c3fcb4698a',
            name: 'Food',
            type: 'EXPENSE'
          }
        }}
      />
      <TransactionItem
        transaction={{
          id: '471018b8-e018-4f5b-a9e4-7e93edb8b934',
          payee: 'MEA',
          amount: 798.88,
          date: '2021-08-23T00:00:00.000Z',
          category: {
            id: '8d7eff34-9e78-4a64-9916-d1c3fcb4698a',
            name: 'Salary',
            type: 'INCOME'
          }
        }}
      />
      <TransactionItem
        transaction={{
          id: '8fb68662-a4dc-4081-9322-3b5eaa473527',
          payee: 'AIS',
          amount: 854.93,
          date: '2021-08-21T00:00:00.000Z',
          category: {
            id: '8d7eff34-9e78-4a64-9916-d1c3fcb4698a',
            name: 'Utilities',
            type: 'EXPENSE'
          }
        }}
      />
    </ul>
  );
}
