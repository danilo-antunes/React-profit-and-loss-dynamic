

// @mui material components
import Link from "@mui/material/Link";

// Argon Dashboard 2 PRO MUI components
import ArgonButton from "components/ArgonButton";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 PRO MUI context
import { useArgonController } from "context";

// Images
import icon from "assets/images/illustrations/icon-documentation.svg";

function SidenavFooter() {
  const [controller] = useArgonController();
  const { miniSidenav, darkSidenav } = controller;

  return (
    <ArgonBox opacity={miniSidenav ? 0 : 1} sx={{ transition: "opacity 200ms linear" }}>

      <ArgonBox display="flex" flexDirection="column">
        <ArgonButton
          component={Link}
          onClick={() => window.location.href = "https://www.linkedin.com/in/danilo-ferian-antunes-46a48b23"}
          target="_blank"
          rel="noreferrer"
          color="dark"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
        >
          Linkedin
        </ArgonButton>
      </ArgonBox>
    </ArgonBox>
  );
}

export default SidenavFooter;
