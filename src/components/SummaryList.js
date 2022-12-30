import SummaryCard from "./SummaryCard";

export default function SummaryList(){
    return(
<div className='row g-3'>
    <SummaryCard bg='info' title='Net Worth' amount='10000'/>
    <SummaryCard bg='success' title='Income' amount='14000'/>
    <SummaryCard bg='danger' title='Expense' amount='4000'/>
</div>
    )
}