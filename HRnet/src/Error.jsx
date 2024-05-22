import { Link } from "react-router-dom";

/**
 * 
 * @returns Fonction d'afficher une page d'erreur et un retour à la page d'accueil en cas de mauvais URL
 */
const Error = () => {

    return (
        
        <section>
        <div className="header">
            <h1 className="header_title">Current Employees</h1>
        </div>

                <div className="error_page">
                    <h1>Ceci est une page d'erreur, la page que vous recherchez n'existe pas</h1>
                </div>

        <div className="header">
            <Link className="createemployee_span_link" to={'/'}><h1 className="header_title">Home</h1></Link>
        </div>
        </section>

    )
}

export default Error;