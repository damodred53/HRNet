const options = [
    {
        value: 1,
        label: 'Sales'
      },
      {
        value: 2,
        label: 'Marketing'
      },
      {
        value: 3,
        label: 'Engineering'
      },
      {
        value: 4,
        label: 'Human Resources'
      },
      {
        value: 5,
        label: 'Legal'
      },
];

const optionsDepartment = options.map((options, value) => ({
    value: value,
    label: options.label,
  }));
  

  

  export default optionsDepartment;