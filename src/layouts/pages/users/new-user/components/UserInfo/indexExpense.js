

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// NewUser page components
import FormField from "layouts/pages/users/new-user/components/FormField";

function ExpenseInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { description, amount } = formField;
  const {
    description: firstNameV,
    amount: lastNameV,
  } = values;

  return (
    <ArgonBox>
      <ArgonBox lineHeight={0}>
        <ArgonTypography variant="h5" fontWeight="bold">
          Input Expense
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={description.type}
              label={description.label}
              name={description.name}
              value={firstNameV}
              placeholder="Marketing"
              error={errors.description && touched.description}
              success={firstNameV.length > 0 && !errors.description}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={amount.type}
              label={amount.label}
              name={amount.name}
              value={lastNameV}
              placeholder={amount.placeholder}
              error={errors.amount && touched.amount}
              success={lastNameV.length > 0 && !errors.amount}
            />
          </Grid>
        </Grid>
      </ArgonBox>
    </ArgonBox>
  );
}

// typechecking props for ExpenseInfo
ExpenseInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default ExpenseInfo;
