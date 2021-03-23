import React, { FunctionComponent } from "react";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MailIcon from "@material-ui/icons/Mail";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";

import { BarChart as BarChartIcon, Users as UsersIcon } from "react-feather";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: "flex-start",
    letterSpacing: 0,
    padding: "10px 8px",
    textTransform: "none",
    width: "100%",
  },
  appName: { fontWeight: "bold", color: "#3498db" },
}));

const items = [
  {
    href: "/list",
    icon: BarChartIcon,
    title: "List",
  },
  {
    href: "/summary",
    icon: UsersIcon,
    title: "Récapitulatif",
  },
];

type NavbarDrawerProps = {
  children: React.ReactNode;
};

declare global {
  interface Window {
    MyNamespace: any;
  }
}

window.MyNamespace = window.MyNamespace || {};

const NavbarDrawer: FunctionComponent<NavbarDrawerProps> = ({
  children,
}: NavbarDrawerProps) => {
  const location = useLocation();

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Typography
          color="textPrimary"
          variant="h3"
          className={classes.appName}
        >
          Transactions
        </Typography>
      </Box>
      <Divider />
      <List>
        {items.map((item, index) => (
          <ListItem
            button
            key={index}
            selected={item.href === location.pathname}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <Link className={classes.link} to={item.href}>
              {item.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="permanent"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default NavbarDrawer;
