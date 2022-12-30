import RadioButton from "./RadioButton";
import Input from "./Input";
import Select from "./Select";

export default function EditTransactionForm(){
return(
<div className="bg-white p-3 rounded-2">
          <form>
            <div className="row g-3">
              <div className="col-12">
                <RadioButton/>
              </div>

              <div className="col-sm-6">
                <Input label="Payee"/>
              </div>

              <div className="col-sm-6">
              <Select/>
              </div>

              <div className="col-sm-6">
              <Input label="Amount"/>
              </div>

              <div className="col-sm-6">
              <Input label="Date" type="date"/>
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
)
}