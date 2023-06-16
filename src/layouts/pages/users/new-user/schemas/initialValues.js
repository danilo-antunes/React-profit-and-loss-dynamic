

import checkout from "layouts/pages/users/new-user/schemas/form";

const {
  formField: {
    description,
    amount,
  },
} = checkout;

const initialValues = {
  [description.name]: "",
  [amount.name]: "",
};

export default initialValues;
