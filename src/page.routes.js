

// @mui material components
import Icon from "@mui/material/Icon";

import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

const bgImageAuth =
  "https://images.unsplash.com/photo-1635944095210-23114a1fb7c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1335&amp;q=80";

const pageRoutes = [
  {
    name: "pages",
    columns: 3,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "dashboards",
        icon: <ArgonBox component="i" color="info" className="ni ni-spaceship" />,
        collapse: [
          {
            name: "landing",
            route: "/dashboards/landing",
          },
          {
            name: "default",
            route: "/dashboards/default",
          },
          {
            name: "automotive",
            route: "/dashboards/automotive",
          },
          {
            name: "VR Default",
            route: "/dashboards/virtual-reality/default",
          },
          {
            name: "VR Info",
            route: "/dashboards/virtual-reality/info",
          },
          {
            name: "crm",
            route: "/dashboards/crm",
          },
        ],
      },
      {
        name: "users",
        icon: <ArgonBox component="i" color="info" className="ni ni-circle-08" />,
        collapse: [
          {
            name: "reports",
            route: "/pages/users/reports",
          },
          {
            name: "new user",
            route: "/pages/users/new-user",
          },
        ],
      },
      {
        name: "profile",
        icon: <ArgonBox component="i" color="info" className="ni ni-badge" />,
        collapse: [
          {
            name: "profile overview",
            route: "/pages/profile/profile-overview",
          },
          {
            name: "teams",
            route: "/pages/profile/teams",
          },
          {
            name: "all projects",
            route: "/pages/profile/all-projects",
          },
        ],
      },
      {
        name: "projects",
        icon: <ArgonBox component="i" color="info" className="ni ni-app" />,
        collapse: [
          {
            name: "general",
            route: "/pages/projects/general",
          },
          {
            name: "timeline",
            route: "/pages/projects/timeline",
          },
          {
            name: "new project",
            route: "/pages/projects/new-project",
          },
        ],
      },
      {
        name: "account",
        icon: <ArgonBox component="i" color="info" className="ni ni-single-02" />,
        collapse: [
          {
            name: "settings",
            route: "/pages/account/setting",
          },
          {
            name: "billing",
            route: "/pages/account/billing",
          },
          {
            name: "invoice",
            route: "/pages/account/invoice",
          },
          {
            name: "security",
            route: "/pages/account/security",
          },
        ],
      },
      {
        name: "extra",
        icon: <ArgonBox component="i" color="info" className="ni ni-folder-17" />,
        collapse: [
          {
            name: "pricing page",
            route: "/pages/pricing-page",
          },
          { name: "RTL", route: "/pages/rtl" },
          { name: "widgets", route: "/pages/widgets" },
          { name: "charts", route: "/pages/charts" },
          {
            name: "notfications",
            route: "/pages/notifications",
          },
        ],
      },
    ],
  },
  {
    name: "authenticaton",
    image: (
      <ArgonBox
        width="100%"
        height="100%"
        display="flex"
        borderRadius="lg"
        position="relative"
        py={8}
        sx={({ palette: { gradients }, functions: { linearGradient, rgba } }) => ({
          backgroundImage: `${linearGradient(
            rgba(gradients.info.main, 0.8),
            rgba(gradients.info.state, 0.8)
          )}, url(${bgImageAuth})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
        })}
      >
        <ArgonBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          textAlign="center"
          color="white"
          fontWeight="medium"
        >
          <span className="text-lg">
            Explore our
            <br />
            Authentication pages
          </span>
        </ArgonBox>
      </ArgonBox>
    ),
    collapse: [
      {
        name: "sign in",
        dropdown: true,
        collapse: [
          {
            name: "basic",
            route: "/authentication/sign-in/basic",
          },
          {
            name: "cover",
            route: "/authentication/sign-in/cover",
          },
          {
            name: "illustration",
            route: "/authentication/sign-in/illustration",
          },
        ],
      },
      {
        name: "sign up",
        dropdown: true,
        collapse: [
          {
            name: "basic",
            route: "/authentication/sign-up/basic",
          },
          {
            name: "cover",
            route: "/authentication/sign-up/cover",
          },
          {
            name: "illustration",
            route: "/authentication/sign-up/illustration",
          },
        ],
      },
      {
        name: "reset password",
        dropdown: true,
        collapse: [
          {
            name: "basic",
            route: "/authentication/reset-password/basic",
          },
          {
            name: "cover",
            route: "/authentication/reset-password/cover",
          },
          {
            name: "illustration",
            route: "/authentication/reset-password/illustration",
          },
        ],
      },
      {
        name: "lock",
        dropdown: true,
        collapse: [
          {
            name: "basic",
            route: "/authentication/lock/basic",
          },
          {
            name: "cover",
            route: "/authentication/lock/cover",
          },
          {
            name: "illustration",
            route: "/authentication/lock/illustration",
          },
        ],
      },
      {
        name: "2-Step Verification",
        dropdown: true,
        collapse: [
          {
            name: "basic",
            route: "/authentication/verification/basic",
          },
          {
            name: "cover",
            route: "/authentication/verification/cover",
          },
          {
            name: "illustration",
            route: "/authentication/verification/illustration",
          },
        ],
      },
      {
        name: "error",
        dropdown: true,
        collapse: [
          {
            name: "404",
            route: "/authentication/error/404",
          },
          {
            name: "500",
            route: "/authentication/error/500",
          },
        ],
      },
    ],
  },
  {
    name: "application",
    collapse: [
      {
        name: "kanban",
        route: "/applications/kanban",
        icon: (
          <ArgonBox
            component="i"
            color="info"
            className="ni ni-single-copy-04"
            mt={0.125}
            py={0.625}
          />
        ),
      },
      {
        name: "wizard",
        route: "/applications/wizard",
        icon: (
          <ArgonBox component="i" color="info" className="ni ni-laptop" mt={0.125} py={0.625} />
        ),
      },
      {
        name: "data tables",
        route: "/applications/data-tables",
        icon: <ArgonBox component="i" color="info" className="ni ni-badge" mt={0.125} py={0.625} />,
      },
      {
        name: "calendar",
        route: "/applications/calendar",
        icon: (
          <ArgonBox
            component="i"
            color="info"
            className="ni ni-notification-70"
            mt={0.125}
            py={0.625}
          />
        ),
      },
    ],
  },
  {
    name: "ecommerce",
    columns: 2,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "orders",
        icon: <ArgonBox component="i" color="info" className="ni ni-cart" />,
        collapse: [
          {
            name: "order list",
            route: "/ecommerce/orders/order-list",
          },
          {
            name: "order details",
            route: "/ecommerce/orders/order-details",
          },
        ],
      },
      {
        name: "general",
        icon: <ArgonBox component="i" color="info" className="ni ni-box-2" />,
        collapse: [
          {
            name: "order list",
            route: "/ecommerce/overview",
          },
          {
            name: "order details",
            route: "/ecommerce/referral",
          },
        ],
      },
      {
        name: "products",
        icon: <ArgonBox component="i" color="info" className="ni ni-planet" />,
        collapse: [
          {
            name: "new product",
            route: "/ecommerce/products/new-product",
          },
          {
            name: "edit product",
            route: "/ecommerce/products/edit-product",
          },
          {
            name: "product page",
            route: "/ecommerce/products/product-page",
          },
          {
            name: "products list",
            route: "/ecommerce/products/products-list",
          },
        ],
      },
    ],
  },
  {
    name: "docs",
    collapse: [
      {
        name: "getting started",
        href: "https://www.creative-tim.com/learning-lab/material-ui/quick-start/argon-dashboard/",
        description: "All about overview, quick start, license and contents",
        icon: <ArgonBox component="i" color="info" className="ni ni-planet" />,
      },
      {
        name: "foundation",
        href: "https://www.creative-tim.com/learning-lab/material-ui/colors/argon-dashboard/",
        description: "See our colors, icons and typography",
        icon: <ArgonBox component="i" color="info" className="ni ni-single-copy-04" />,
      },
      {
        name: "components",
        href: "https://www.creative-tim.com/learning-lab/material-ui/alerts/argon-dashboard/",
        description: "Explore our collection of fully designed components",
        icon: <ArgonBox component="i" color="info" className="ni ni-app" />,
      },
      {
        name: "plugins",
        href: "https://www.creative-tim.com/learning-lab/material-ui/datepicker/argon-dashboard/",
        description: "Check how you can integrate our plugins",
        icon: <ArgonBox component="i" color="info" className="ni ni-chart-bar-32" />,
      },
    ],
  },
];

export default pageRoutes;
