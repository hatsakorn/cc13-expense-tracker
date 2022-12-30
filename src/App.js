import CreateButton from "./components/CreateButton";
import CreateTransactionForm from "./components/CreateTransactionForm";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import SummaryList from "./components/SummaryList";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="container p-4" style={{ maxWidth: 768 }}>
      <div className="d-flex flex-column gap-3">
        <CreateButton/>
        <CreateTransactionForm/>
        <SummaryList/>
        <Filter/>
        <Pagination/>
        <TransactionList/>
        <footer
          className="text-white-50 text-center"
          style={{ fontSize: '0.75rem' }}
        >
          Copyright © 2018 Flyinggiraffe. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;

{/* <button className="btn btn-outline-warning w-100">
          Create Transaction
        </button>

        <div className="bg-white p-3 rounded-2">
          <form>
            <div className="row g-3">
              <div className="col-12">
                <div className="btn-group">
                  <input
                    type="radio"
                    className="btn-check"
                    id="cbx-expense"
                    name="type"
                    defaultChecked
                  />
                  <label
                    className="btn btn-outline-danger"
                    htmlFor="cbx-expense"
                  >
                    Expense
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    id="cbx-income"
                    name="type"
                  />
                  <label
                    className="btn btn-outline-success"
                    htmlFor="cbx-income"
                  >
                    Income
                  </label>
                </div>
              </div>

              <div className="col-sm-6">
                <label className="form-label">Payee</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-sm-6">
                <label className="form-label">Category</label>
                <select className="form-select">
                  <option>Food</option>
                  <option>Investment</option>
                  <option>Salary</option>
                  <option>Transport</option>
                </select>
              </div>

              <div className="col-sm-6">
                <label className="form-label">Amount</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-sm-6">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-12">
                <div className="d-flex gap-3">
                  <button className="btn btn-primary">Save</button>
                  <button className="btn btn-outline-secondary">Cancel</button>
                  <button className="btn btn-outline-danger">Delete</button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="row g-3">
          <div className="col-sm-4">
            <div className="bg-info rounded-2 p-3">
              <p className="text-black-50">Net Worth</p>
              <h5 className="text-white">฿5,146.00</h5>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="bg-success rounded-2 p-3">
              <p className="text-black-50">Income</p>
              <h5 className="text-white">฿5,200.00</h5>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="bg-danger rounded-2 p-3">
              <p className="text-black-50">Expense</p>
              <h5 className="text-white">฿54.00</h5>
            </div>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-sm-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter to search"
              />
              <button className="btn btn-sm btn-secondary">x</button>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="input-group">
              <select className="form-select form-select-sm">
                <option value="">Month</option>
                <option value="">Jan</option>
                <option value="">Feb</option>
                <option value="">Mar</option>
                <option value="">Apr</option>
                <option value="">May</option>
                <option value="">Jun</option>
                <option value="">Jul</option>
                <option value="">Aug</option>
                <option value="">Sep</option>
                <option value="">Oct</option>
                <option value="">Nov</option>
                <option value="">Dec</option>
              </select>
              <button className="btn btn-sm btn-secondary">x</button>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="input-group">
              <select className="form-select form-select-sm">
                <option value="">Year</option>
                <option value="">2022</option>
                <option value="">2021</option>
              </select>
              <button className="btn btn-sm btn-secondary">x</button>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <select
              type="text"
              className="form-select form-select-sm"
              style={{ width: 70 }}
            >
              <option value="">10</option>
              <option value="">25</option>
              <option value="">50</option>
              <option value="">100</option>
            </select>
            <span className="text-white-50" style={{ fontSize: '0.75rem' }}>
              Showing 1 to 10 of 20 transactions
            </span>
          </div>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              <li className="page-item disabled">
                <a href="/" className="page-link">
                  <span>&laquo;</span>
                </a>
              </li>
              <li className="page-item active">
                <a href="/" className="page-link">
                  <span>1</span>
                </a>
              </li>
              <li className="page-item">
                <a href="/" className="page-link">
                  <span>2</span>
                </a>
              </li>
              <li className="page-item">
                <a href="/" className="page-link">
                  <span>3</span>
                </a>
              </li>
              <li className="page-item">
                <a href="/" className="page-link">
                  <span>&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <ul className="list-group">
          <li className="list-group-item callout-danger">
            <div className="d-flex gap-3" role="button">
              <div
                className="border border-dark rounded-2 bg-warning p-2 text-center"
                style={{ width: '3.75rem' }}
              >
                <p
                  className="m-0 text-black-50"
                  style={{ fontSize: '0.75rem' }}
                >
                  Aug 22
                </p>
                <p className="m-0">12</p>
              </div>

              <div className="d-flex align-items-center flex-fill">
                <div className="flex-fill">
                  <p className="mb-1 fw-bold">7-11</p>
                  <p
                    className="mb-0 text-black-50"
                    style={{ fontSize: '0.75rem' }}
                  >
                    Food
                  </p>
                </div>

                <span className="badge text-bg-danger">126.00</span>
              </div>
            </div>
          </li>

          <li className="list-group-item callout-danger">
            <div className="d-flex gap-3" role="button">
              <div
                className="border border-dark rounded-2 bg-warning p-2 text-center"
                style={{ width: '3.75rem' }}
              >
                <p
                  className="m-0 text-black-50"
                  style={{ fontSize: '0.75rem' }}
                >
                  Aug 22
                </p>
                <p className="m-0">5</p>
              </div>

              <div className="d-flex align-items-center flex-fill">
                <div className="flex-fill">
                  <p className="mb-1 fw-bold">Bts</p>
                  <p
                    className="mb-0 text-black-50"
                    style={{ fontSize: '0.75rem' }}
                  >
                    Transport
                  </p>
                </div>
                <span className="badge text-bg-danger">49.00</span>
              </div>
            </div>
          </li>

          <li className="list-group-item callout-success">
            <div className="d-flex gap-3" role="button">
              <div
                className="border border-dark rounded-2 bg-warning p-2 text-center"
                style={{ width: '3.75rem' }}
              >
                <p
                  className="m-0 text-black-50"
                  style={{ fontSize: '0.75rem' }}
                >
                  Jul 22
                </p>
                <p className="m-0">30</p>
              </div>

              <div className="d-flex align-items-center flex-fill">
                <div className="flex-fill">
                  <p className="mb-1 fw-bold">Ptt</p>
                  <p
                    className="mb-0 text-black-50"
                    style={{ fontSize: '0.75rem' }}
                  >
                    Investment
                  </p>
                </div>
                <span className="badge text-bg-success">4,000.00</span>
              </div>
            </div>
          </li>
        </ul> */}