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

const TypeVerification = (employeeData) => {
    console.log("voici les employees :", employeeData);

    // Validation de chaque champ de type texte
    const firstNameValid = validateTextField("firstname", employeeData.firstName);
    const lastNameValid = validateTextField("lastname", employeeData.lastName);
    const streetValid = validateTextField("street", employeeData.street);
    const cityValid = validateTextField("city", employeeData.city);
    const zipCodeValid = validateTextField("zip_code", employeeData.zipCode);

    // Vérification si tous les champs sont valides
    if (firstNameValid && lastNameValid && streetValid && cityValid && zipCodeValid) {
        return true;
    } else {
        return false;
    }
};

export default TypeVerification;
