import { useMemo, useState, useEffect } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { useSelector } from "react-redux";

/**
 * fonction provenant d'un module et permettant de gérer la pagination 
 * @returns {JSX.Element}
 */
export default function App() {

  const data = useSelector(state => state.employee)

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => row.firstName, //alternate way
        id: 'first_name', //id required if you use accessorFn instead of accessorKey
        header: 'First Name',
        Header: () => <i>First Name</i>, //optional custom header render
      },
      {
        accessorFn: (row) => row.lastName, //alternate way
        id: 'last_name', //id required if you use accessorFn instead of accessorKey
        header: 'Last Name',
        Header: () => <i>Last Name</i>, //optional custom header render
      },
      {
        accessorFn: (row) => row.startDate, //alternate way
        id: 'start_date', //id required if you use accessorFn instead of accessorKey
        header: 'Start Date',
        Header: () => <i>Start Date</i>, //optional custom header render
      },
      {
        accessorFn: (row) => row.departmentValue, //alternate way
        id: 'daprtment', //id required if you use accessorFn instead of accessorKey
        header: 'Department',
        Header: () => <i>Department</i>, //optional custom header render
      },
      {
        accessorFn: (row) => row.birthDate, //alternate way
        id: 'date_birth', //id required if you use accessorFn instead of accessorKey
        header: 'BirthDate',
        Header: () => <i>Date of Birth</i>, //optional custom header render
      },
      {
        accessorFn: (row) => row.street, //alternate way
        id: 'street', //id required if you use accessorFn instead of accessorKey
        header: 'Street',
        Header: () => <i>Street</i>, //optional custom header render
      },
      {
        accessorFn: (row) => row.city, //alternate way
        id: 'city', //id required if you use accessorFn instead of accessorKey
        header: 'City',
        Header: () => <i>City</i>, //optional custom header render
      },
      {
        accessorFn: (row) => row.stateValue, //alternate way
        id: 'state', //id required if you use accessorFn instead of accessorKey
        header: 'State',
        Header: () => <i>State</i>, //optional custom header render
      },
      {
        accessorFn: (row) => row.zipCode, //alternate way
        id: 'zip_code', //id required if you use accessorFn instead of accessorKey
        header: 'Zip Code',
        Header: () => <i>Zip Code</i>, //optional custom header render
      },
    ],
    [],
  );

  //optionally, you can manage any/all of the table state yourself
  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    //do something when the row selection changes
  }, [rowSelection]);

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: true, //enable some features
    enableRowSelection: true,
    enablePagination: true, //disable a default feature
    onRowSelectionChange: setRowSelection, //hoist internal state to your own state (optional)
    state: { rowSelection }, //manage your own state, pass it back to the table (optional)
  });

  return (
    <MaterialReactTable table={table} /> //other more lightweight MRT sub components also available
  );
}