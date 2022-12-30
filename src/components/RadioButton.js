export default function RadioButton() {
    return(
        <div className="btn-group">
              <input
                type="radio"
                className="btn-check"
                id="cbx-expense"
                name="type"
                defaultChecked
              />
              <label className="btn btn-outline-danger" htmlFor="cbx-expense">
                Expense
              </label>
              <input
                type="radio"
                className="btn-check"
                id="cbx-income"
                name="type"
              />
              <label className="btn btn-outline-success" htmlFor="cbx-income">
                Income
              </label>
            </div>
    )
}