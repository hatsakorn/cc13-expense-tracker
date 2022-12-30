import { formatThaiCurrency } from "../utils/currency";
export default function SummaryCard({bg,title,amount}){
    return(
<div className='col sm-4'>
    <div className={`bg-${bg} rounded-2 p-3`}>
        <p className='text-black-50'>{title}</p>
        <h5 className='text-white'>{formatThaiCurrency(amount)}</h5>
    </div>
</div>
    )
}