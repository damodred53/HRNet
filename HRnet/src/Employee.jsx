import { Link } from "react-router-dom";
import Pagination from "./Components/Pagination/Pagination";
import { Provider } from "react-redux";
import { store } from './redux.js';

/**
 * Cette fonction gère la création de la page permettant d'afficher les employés précédemment crées
 * @returns {JSX}
 */
const Employee = () => {

    return (
        <>
            <Provider store={store}>
                <section>
                    <div className="header">
                        <h1 className="header_title">Current Employees</h1>
                    </div>

                    <Pagination />

                    <div className="header">
                        <Link className="createemployee_span_link" to={'/'}><h1 className="header_title">Home</h1></Link>
                    </div>
                </section>
            </Provider>
        </>
    )
}

export default Employee;