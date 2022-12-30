export default function Pagination(){
    return(
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

    );
}