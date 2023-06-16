import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";

// NewUser page components
import UserInfo from "layouts/pages/users/new-user/components/UserInfo";
import ExpenseInfo from "layouts/pages/users/new-user/components/UserInfo/indexExpense";

// NewUser layout schemas for form and form feilds
import validations from "layouts/pages/users/new-user/schemas/validations";
import form from "layouts/pages/users/new-user/schemas/form";
import initialValues from "layouts/pages/users/new-user/schemas/initialValues";

function NewUser({ getExpense, getIncome, getNetIncome, getTotal, getTotalExpanse , onEdit, setOnEdit }) {
  const [activeStep, setActiveStep] = useState(0);
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = true;


  const handleBack = () => setActiveStep(activeStep - 1);

  const submitFormIncome = async (values, actions) => {
    await axios
      .post("http://localhost:8800", {
        description: values.description,
        amount: values.amount,
        record_type: "success",
        icon:"arrow_upward"
      })
      .then(({ data }) =>
        toast.success(data, {
          position: toast.POSITION.TOP_CENTER,
        })
      )
      .catch(({ data }) =>
        toast.error(data, {
          position: toast.POSITION.TOP_CENTER,
        })
      );

    actions.setSubmitting(false);
    actions.resetForm();
    getExpense();
    getIncome();
    getNetIncome();
    getTotal();
    getTotalExpanse();
    setActiveStep(0);
  };

  const submitFormExpense = async (values, actions) => {
    await axios
      .post("https://pnl-api-5813ec458557.herokuapp.com", {
        description: values.description,
        amount: values.amount,
        record_type: "error",
        icon:"arrow_downward"
      })
      .then(({ data }) =>
        toast.success(data, {
          position: toast.POSITION.TOP_CENTER,
        })
      )
      .catch(({ data }) =>
        toast.error(data, {
          position: toast.POSITION.TOP_CENTER,
        })
      );

    actions.setSubmitting(false);
    actions.resetForm();
    getExpense();
    getIncome();
    getNetIncome();
    getTotal();
    getTotalExpanse();
    setActiveStep(0);
  };

  const handleSubmitIncome = (values, actions) => {
    if (isLastStep) {
      submitFormIncome(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleSubmitExpense = (values, actions) => {
    if (isLastStep) {
      submitFormExpense(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <ArgonBox py={1} mb={1}>
      <Grid container justifyContent="center" sx={{ height: "100%" }}>
        <Grid item xs={5} lg={5}>
          <Formik
            initialValues={initialValues}
            validationSchema={currentValidation}
            onSubmit={handleSubmitIncome}
          >
            {({ values, errors, touched, isSubmitting }) => (
              <Form id={formId} autoComplete="off">
                <Card sx={{ height: "100%" }}>
                  <ArgonBox p={2}>
                    <ArgonBox>
                      <UserInfo
                        formData={{
                          values,
                          touched,
                          formField,
                          errors,
                        }}
                      />
                      <ArgonBox mt={2} width="100%" display="flex" justifyContent="space-between">
                        {activeStep === 0 ? (
                          <ArgonBox />
                        ) : (
                          <ArgonButton variant="gradient" color="light" onClick={handleBack}>
                            Back
                          </ArgonButton>
                        )}
                        <ArgonButton
                          disabled={isSubmitting}
                          type="submit"
                          variant="gradient"
                          color="success"
                        >
                          {isLastStep ? "Send" : "Next"}
                        </ArgonButton>
                      </ArgonBox>
                    </ArgonBox>
                  </ArgonBox>
                </Card>
              </Form>
            )}
          </Formik>
        </Grid>
        <Grid item xs={2} lg={2}/>
        <Grid item xs={5} lg={5}>
          <Formik
            initialValues={initialValues}
            validationSchema={currentValidation}
            onSubmit={handleSubmitExpense}
          >
            {({ values, errors, touched, isSubmitting }) => (
              <Form id={formId} autoComplete="off">
                <Card sx={{ height: "100%" }}>
                  <ArgonBox p={2}>
                    <ArgonBox>
                      <ExpenseInfo
                        formData={{
                          values,
                          touched,
                          formField,
                          errors,
                        }}
                      />
                      <ArgonBox mt={2} width="100%" display="flex" justifyContent="space-between">
                        {activeStep === 0 ? (
                          <ArgonBox />
                        ) : (
                          <ArgonButton variant="gradient" color="light" onClick={handleBack}>
                            Back
                          </ArgonButton>
                        )}
                        <ArgonButton
                          disabled={isSubmitting}
                          type="submit"
                          variant="gradient"
                          color="error"
                        >
                          {isLastStep ? "Send" : "Next"}
                        </ArgonButton>
                      </ArgonBox>
                    </ArgonBox>
                  </ArgonBox>
                </Card>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </ArgonBox>
    
  );
}

export default NewUser;
