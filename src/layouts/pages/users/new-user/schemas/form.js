const form = {
  formId: "new-user-form",
  formField: {
    description: {
      name: "description",
      label: "Description",
      type: "text",
      placeholder: "eg. Sales",
      errorMsg: "Description is required.",
    },
    amount: {
      name: "amount",
      label: "Amount",
      type: "number",
      placeholder: "eg. 500.00",
      errorMsg: "Amount is required.",
    },
  },
};

export default form;
