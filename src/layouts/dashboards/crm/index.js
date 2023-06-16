import { useMemo, useState, useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 PRO MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniGradientLineChart from "examples/Charts/LineCharts/MiniGradientLineChart";
import RankingsList from "examples/Lists/RankingsList";

// Data
import miniGradientLineChartData from "layouts/dashboards/crm/data/miniGradientLineChartData";


//Form
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import GoodForm from "./form";
import "react-toastify/dist/ReactToastify.css";

function CRM() {
  const { visitorsChart, incomeChart } = miniGradientLineChartData;
  const [expanse, setExpanse] = useState([]);
  const [income, setIncome] = useState([]);
  const [total, setTotal] = useState([]);
  const [totalexpanse, setTotalExpanse] = useState([]);
  const [netincome, setNetIncome] = useState([]);
  

  const getExpense = async () => {
    try {
      const res = await axios.get('http://localhost:8800');
      setExpanse(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getExpense();
  }, [setExpanse]);

  const getIncome = async () => {
    try {
      const res = await axios.get('http://localhost:8800/income');
      setIncome(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getIncome();
  }, [setIncome]);


  const getTotal = async () => {
    try {
      const res = await axios.get('http://localhost:8800/total');
      setTotal(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getTotal();
  }, [setTotal]);


  const getTotalExpanse = async () => {
    try {
      const res = await axios.get('http://localhost:8800/totalexpense');
      setTotalExpanse(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getTotalExpanse();
  }, [setTotalExpanse]);


  const getNetIncome = async () => {
    try {
      const res = await axios.get('http://localhost:8800/netincome');
      setNetIncome(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getNetIncome();
  }, [setNetIncome]);

  return (
    <DashboardLayout>
      <ToastContainer />
      <ArgonBox py={0}>
        <ArgonBox mb={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7} xl={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <MiniGradientLineChart
 
                    chart={visitorsChart}
                  />
                </Grid>


              </Grid>
            </Grid>
          </Grid>
        </ArgonBox>
        <Grid item xs={4}>
          <Grid item xs={8} md={8}>
            <GoodForm getExpense={getExpense} getIncome={getIncome} getNetIncome={getNetIncome} getTotal={getTotal} getTotalExpanse={getTotalExpanse}  />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item xs={8} md={8}>
            <RankingsList
              title="Revenue"
              secondtitle="Expenses"
              date="23 - 30 March 2021"
              income={income}
              expense={expanse}
              total={total}
              totalexpanse={totalexpanse}
              netincome={netincome}
              getExpense={getExpense}
              getIncome={getIncome}
              getNetIncome={getNetIncome}
              getTotal={getTotal}
              getTotalExpanse={getTotalExpanse}
            />
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CRM;
