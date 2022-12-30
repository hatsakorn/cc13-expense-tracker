export default function Input({label,type ='text'}) {

    return(
    <>
        <label className="form-label">{label}</label>
        <input type={type} className="form-control"></input>
        </>
    );
    }