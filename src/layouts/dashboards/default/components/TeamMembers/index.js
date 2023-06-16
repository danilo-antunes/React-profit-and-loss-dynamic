import { Fragment } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";
import ArgonButton from "components/ArgonButton";
import ArgonTypography from "components/ArgonTypography";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// Data
const data = [
  { img: team1, name: "John Michael", status: "online", badge: "success" },
  { img: team2, name: "Alex Smith", status: "in meeting", badge: "warning" },
  { img: team3, name: "Samantha Ivy", status: "offline", badge: "error" },
  { img: team4, name: "John Michael", status: "online", badge: "success" },
];

function TeamMembers() {
  return (
    <Card sx={{ height: "100%", overflow: "hidden" }}>

      <ArgonBox pb={3} px={3}>

      </ArgonBox>
    </Card>
  );
}

export default TeamMembers;
