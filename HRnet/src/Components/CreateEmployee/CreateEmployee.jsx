import { Link } from "react-router-dom";
const CreateEmployee = () => {


    return (

        <div className="createemployee">
            <span className="createemployee_span">
                <Link className="createemployee_span_link" to={`./employee`} ><h2 className="createemployee_span_title1">View Current Employees</h2></Link>
                <h2 className="createemployee_span_title2">Create Employee</h2>
            </span>
        </div>
            
    )
}

export default CreateEmployee;