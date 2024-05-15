
const dateFormater = (date) => {

    const jour = date.getDate().toString().padStart(2, '0');
    const mois = (date.getMonth() +1).toString().padStart(2, '0');
    const annee = date.getFullYear();

    const formatedDate = `${jour}/${mois}/${annee}`;
    return formatedDate;
}

export default dateFormater;