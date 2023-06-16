import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArgonSelect from "components/ArgonSelect";

import { hasFlag } from "country-flag-icons";
import { countries } from "countries-list";
import Flags from "country-flag-icons/react/3x2";

import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// sweetalert2 components
import Swal from "sweetalert2";

// Sweet Alerts page components
import Template from "layouts/pages/sweet-alerts/components/Template";



function RankingList({ title, secondtitle, date, income, expense, total, totalexpanse ,netincome,getExpense , getIncome, getNetIncome, getTotal, getTotalExpanse }) {
  
  const showAlert = (id) => {
    const newSwal = Swal.mixin({
      customClass: {
        confirmButton: "button button-success",
        cancelButton: "button button-error",
      },
      buttonsStyling: false,
    });

    newSwal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.value) {
          newSwal.fire("Deleted!", "Your record has been deleted.", "success");
          handleDelete(id);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          newSwal.fire("Cancelled", "No record was deleted :)", "error");
        }
      });
  };
  
  
  const handleDelete = async (id) => {
    await axios
      // eslint-disable-next-line prefer-template
      .delete('https://pnl-api-5813ec458557.herokuapp.com/' + id)
      .catch(({ data }) => toast.error(data));
      getExpense();
      getIncome();
      getNetIncome();
      getTotal();
      getTotalExpanse();
  
  };

 
  const options = Object.entries(countries)
    .map((code) => {
      const exist = hasFlag(code[0]);
      if (!exist) {
        return undefined;
      }
      const Component = Flags[code[0]];
      return {
        value: code[1].name,
        label: (
          <>
            <Component
              title={code[0]}
              style={{ display: "inline-block", height: "1em", width: "1em" }}
            />
            &nbsp;
            <span>{`${code[0]} ${code[1].name}`}</span>
          </>
        ),
      };
    })
    .filter(Boolean);

  const [currency, setCurrency] = useState(options[0]);
  const getConvertedPrice = (price) => {
    // assuming your prices TableData are in USD
    // I just pulled conversions from google for USD to currency ABC

    const value = currency.value;

    if (value === "Germany") {
      return (price * 0.3).toFixed(2);
    }
    if (value === "United Kingdom") {
      return (price * 0.2).toFixed(2);
    }
    if (value === "Sweden") {
      return (price * 0.15).toFixed(2);
    } else {
      return (price * 0.1).toFixed(2);
    }
  };

  const incomeList = income.map(({ id, color, icon, name, description, value }, key) => (
    <ArgonBox key={id} id={id} component="li" pt={1} pr={2}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}>
            <ArgonButton
              variant="outlined"
              color={color}
              size="small"
              iconOnly
              sx={({ functions: { pxToRem } }) => ({
                width: pxToRem(34),
                minWidth: pxToRem(34),
                height: pxToRem(34),
                minHeight: pxToRem(34),
              })}
            >
              <Icon>{icon}</Icon>
            </ArgonButton>
          </ArgonBox>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium" gutterBottom>
              {name}
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              {description}
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <ArgonTypography variant="button" color={color} fontWeight="medium" textGradient>
          {"$ " + value + " "} 
          <ArgonButton
              variant="outlined"
              color="warning"
              size="small"
              iconOnly
              onClick={() => showAlert(id)}
              sx={({ functions: { pxToRem } }) => ({
                width: pxToRem(14),
                minWidth: pxToRem(14),
                height: pxToRem(14),
                minHeight: pxToRem(14),
              })}
            >
              <Icon><DeleteForeverTwoToneIcon /></Icon>
            </ArgonButton>
        </ArgonTypography>
      </ArgonBox>
      {key === income.length - 1 ? null : (
        <Divider
          sx={{
            mt: 0,
            mb: 0,
          }}
        />
      )}
    </ArgonBox>
  ));

  const expenseList = expense.map(({id, color, icon, name, description, value }, key) => (
    <ArgonBox key={id} component="li" pt={1} pr={2}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}>
            <ArgonButton
              variant="outlined"
              color={color}
              size="small"
              iconOnly
              sx={({ functions: { pxToRem } }) => ({
                width: pxToRem(34),
                minWidth: pxToRem(34),
                height: pxToRem(34),
                minHeight: pxToRem(34),
              })}
            >
              <Icon>{icon}</Icon>
            </ArgonButton>
          </ArgonBox>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium" gutterBottom>
              {name}
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              {description}
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <ArgonTypography variant="button" color={color} fontWeight="medium" textGradient>
        {"$ " + value + " "} 
          <ArgonButton
              variant="outlined"
              color="warning"
              size="small"
              iconOnly
              onClick={() => showAlert(id)}
              sx={({ functions: { pxToRem } }) => ({
                width: pxToRem(14),
                minWidth: pxToRem(14),
                height: pxToRem(14),
                minHeight: pxToRem(14),
              })}
            >
              <Icon><DeleteForeverTwoToneIcon /></Icon>
            </ArgonButton>
        </ArgonTypography>
      </ArgonBox>
      {key === expense.length - 1 ? null : (
        <Divider
          sx={{
            mt: 0,
            mb: 0,
          }}
        />
      )}
    </ArgonBox>
  ));

  const incomeTotal = total.map(({ type, value }, key) => (
    <ArgonBox key={type}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}></ArgonBox>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium" gutterBottom>
              {type}
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <ArgonTypography variant="button" fontWeight="medium" textGradient>
          {"$ " + value}             
        </ArgonTypography>
      </ArgonBox>
      {key === total.length - 1 ? null : (
        <Divider
          sx={{
            mt: 0,
            mb: 0,
          }}
        />
      )}
    </ArgonBox>
  ));

  const expanseTotal = totalexpanse.map(({ type, value }, key) => (
    <ArgonBox key={type}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}></ArgonBox>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium" gutterBottom>
              {type}
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <ArgonTypography variant="button" fontWeight="medium" textGradient>
          {"$ " + value}             
        </ArgonTypography>
      </ArgonBox>
      {key === total.length - 1 ? null : (
        <Divider
          sx={{
            mt: 0,
            mb: 0,
          }}
        />
      )}
    </ArgonBox>
  ));

  const netincomeTotal = netincome.map(({ type, value }, key) => (
    <ArgonBox key={type}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}></ArgonBox>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium" gutterBottom>
              {type}
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <ArgonTypography
          variant="button"
          color={value > 0 ? "success" : "error"}
          fontWeight="medium"
          textGradient
        >
          {"$ " + value}
          
        </ArgonTypography>
      </ArgonBox>
      {key === total.length - 1 ? null : (
        <Divider
          sx={{
            mt: 0,
            mb: 0,
          }}
        />
      )}
    </ArgonBox>
  ));

  

  const netTaxes = total.map(({ type, value }, key) => (
    <ArgonBox key={type}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}></ArgonBox>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium" gutterBottom>
              {type}
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <ArgonTypography variant="button" color="error" fontWeight="medium" textGradient>
          {"$ " + getConvertedPrice(value)}
        </ArgonTypography>
      </ArgonBox>
      {key === total.length - 1 ? null : (
        <Divider
          sx={{
            mt: 0,
            mb: 0,
          }}
        />
      )}
    </ArgonBox>
  ));

  const finalAmount = netincome.map(({ type, value }, key) => (
    <ArgonBox key={type}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}></ArgonBox>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium" gutterBottom>
              {type}
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <ArgonTypography variant="button" color={value > 0 ? "success" : "error"} fontWeight="medium" textGradient>
          {"$ " + (value - getConvertedPrice(total[0].value))}
        </ArgonTypography>
      </ArgonBox>
      {key === total.length - 1 ? null : (
        <Divider
          sx={{
            mt: 0,
            mb: 0,
          }}
        />
      )}
    </ArgonBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </ArgonTypography>
        <ArgonSelect
          placeholder="Select Country"
          onChange={setCurrency}
          value={currency}
          options={options}
        />
      </ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {incomeList}

        </ArgonBox>
      </ArgonBox>

      <ArgonBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={0}
        px={0}
      ></ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {incomeTotal}
        </ArgonBox>
      </ArgonBox>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {secondtitle}
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {expenseList}
        </ArgonBox>
      </ArgonBox>

      <ArgonBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        px={2}
      ></ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {expanseTotal}
        </ArgonBox>
      </ArgonBox>

      <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {"Net Income Before Taxes"}
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {netincomeTotal}
        </ArgonBox>
      </ArgonBox>

      <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {"Taxes"}
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {netTaxes}
        </ArgonBox>
      </ArgonBox>

      <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {"Net Income After Taxes"}
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {finalAmount}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

// Typechecking props for the RankingList
RankingList.propTypes = {
  title: PropTypes.string.isRequired,
  secondtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  income: PropTypes.arrayOf(PropTypes.object).isRequired,
  expense: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RankingList;
