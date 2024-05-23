import { Link } from "react-router-dom";

/**
 * Fonction permettant d'afficher une page d'erreur et un retour à la page d'accueil en cas de mauvais URL
 * @returns {JSX}
 */
const Error = () => {

    return (
        
        <section>
        <div className="header">
            <h1 className="header_title">Current Employees</h1>
        </div>

                <div className="error_page">
                    <h1>Ceci est une page d&apos;erreur, la page que vous recherchez n&apos;existe pas</h1>
                </div>

        <div className="header">
            <Link className="createemployee_span_link" to={'/'}><h1 className="header_title">Home</h1></Link>
        </div>
        </section>

    )
}

export default Error;