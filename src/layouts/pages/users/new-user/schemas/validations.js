

import * as Yup from "yup";
import checkout from "layouts/pages/users/new-user/schemas/form";

const {
  formField: { description, amount },
} = checkout;

const validations = [
  Yup.object().shape({
    [description.name]: Yup.string().required(description.errorMsg),
    [amount.name]: Yup.string().required(amount.errorMsg),
  })
];

export default validations;
