import {formatThaiCurrency} from "../utils/currency";
import { formatShortMonthShortYear } from "../utils/date";

export default function TransactionItem({transaction:{payee,amount,date,category:{type,name}}}){
    return (
        <li className={`list-group-item callout-${type ==='INCOME' ? 'success' : 'danger'}`}>
        <div className="d-flex gap-3" role="button">
          <div
            className="border border-dark rounded-2 bg-warning p-2 text-center"
            style={{ width: '3.75rem' }}
          >
            <p
              className="m-0 text-black-50"
              style={{ fontSize: '0.75rem' }}
            >
              {formatShortMonthShortYear(new Date(date))}
            </p>
            <p className="m-0">{new Date(date).getDate()}</p>
          </div>

          <div className="d-flex align-items-center flex-fill">
            <div className="flex-fill">
              <p className="mb-1 fw-bold">{payee}</p>
              <p
                className="mb-0 text-black-50"
                style={{ fontSize: '0.75rem' }}
              >
                {name}
              </p>
            </div>

            <span className={`badge text-bg-${type ==='INCOME' ? 'success' : 'danger'}`}>{formatThaiCurrency(amount)}</span>
          </div>
        </div>
      </li>
    )
}