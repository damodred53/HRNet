import { configureStore, createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: "employee",
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            console.log("État avant la modification :", state);
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
            console.log("État après la modification :", state);
            console.log(JSON.stringify(state))
        },
        
    }
});

export const store = configureStore({
    reducer: {
        employee: employeeSlice.reducer,
    }
});

export const { addEmployee } = employeeSlice.actions;
