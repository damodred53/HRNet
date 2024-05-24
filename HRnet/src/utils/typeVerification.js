
/**
 * Cette fonction permet de vérifier que tous les champs soient de type string et non vides
 * Elle renvoie true si aucune erreur n'est repérée, sinon elle renvoit false.
 * @param {*} fieldName 
 * @param {*} fieldValue 
 * @returns {boolean}
 */

const validateTextField = (fieldName, fieldValue) => {
    const errorElement = document.querySelector(`#form_div_${fieldName}`);
    if (typeof fieldValue !== "string" || fieldValue.trim() === "") {
        errorElement.style.display = "block";
        return false;
    } else {
        errorElement.style.display = "none";
        return true;
    }
};
/**
 * Cette fonction permet de gérer les différents champs du formulaire de création des employés
 * Elle renvoie true si aucune erreur n'est repérée, sinon elle renvoit false.
 * @param {Object} employeeData 
 * @returns {boolean}
 */
const TypeVerification = (employeeData) => {

    console.log(employeeData)
    // Validation de chaque champ de type texte
    const firstNameValid = validateTextField("firstname", employeeData.firstName);
    const lastNameValid = validateTextField("lastname", employeeData.lastName);
    const streetValid = validateTextField("street", employeeData.street);
    const cityValid = validateTextField("city", employeeData.city);
    const zipCodeValid = validateTextField("zip_code", employeeData.zipCode);
    const startDate = validateTextField("startDate", employeeData.startDate);
    const birthDate = validateTextField("birthDate", employeeData.birthDate);
    // Vérification si tous les champs sont valides
    if (firstNameValid && lastNameValid && streetValid && cityValid && zipCodeValid && startDate && birthDate) {
        return true;
    } else {
        return false;
    }
};

export default TypeVerification;
