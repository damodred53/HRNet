import Header from "./Components/Header/Header";
import CreateEmployee from "./Components/CreateEmployee/CreateEmployee";
import Form from "./Components/Form/Form";
import { Provider } from "react-redux";
import { store } from "./redux.js";

/**
 * Cette fonction permet l'affichage de la première page de l'application afin de créer des employés.
 * @returns 
 */
function App() {

  return (
    <>
      <Provider store={store}>
        <div>
          <Header />
          <CreateEmployee />
          <Form />
        </div>
      </Provider>
    </>
  )
}

export default App
