/**
 * Fonction permettant de modifier le format des dates provenant du formulaire dans le style JJMMAAAA
 * @param {date} date 
 * @returns {string}
 */
const dateFormater = (date) => {

    let formatedDate = "";
    if (date) {
    const jour = date.getDate().toString().padStart(2, '0');
    const mois = (date.getMonth() +1).toString().padStart(2, '0');
    const annee = date.getFullYear();
    
    formatedDate = `${mois}/${jour}/${annee}`;
    }
    return formatedDate;
}

export default dateFormater;