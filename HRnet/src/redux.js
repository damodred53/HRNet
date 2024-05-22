import { configureStore, createSlice } from "@reduxjs/toolkit";

// CreateSlice permet de gérer les différentes actions possible dans le reducer pour les utilisateurs.
const employeeSlice = createSlice({
    name: "employee",
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            const { firstName, lastName, birthDate, startDate, stateValue, street, city, zipCode, departmentValue } = action.payload;
            const newEmployee = {
                firstName,
                lastName,
                birthDate,
                startDate,
                stateValue,
                street,
                city,
                zipCode,
                departmentValue
            };
            state.push(newEmployee);
        },
        getAllEmployees: (state) => {
            console.log(JSON.stringify(state))
            return state;
        }
    }
});

// Création du store visant à stocker les données des employés

export const store = configureStore({
    reducer: {
        employee: employeeSlice.reducer,
    }
});

export const { addEmployee, getAllEmployees } = employeeSlice.actions;
