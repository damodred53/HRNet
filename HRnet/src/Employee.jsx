import { Link } from "react-router-dom";

const Employee = () => {


    return (
        <section>
            <div className="header">
                <h1 className="header_title">Current Employees</h1>
            </div>



            <div className="header">
                <Link className="createemployee_span_link" to={'/'}><h1 className="header_title">Home</h1></Link>
            </div>
        </section>
    )
}

export default Employee;