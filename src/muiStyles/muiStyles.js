import { makeStyles } from "@material-ui/core";


// navigation AppBar styling
export const NavigationStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: "#ffffff",
      boxShadow: "none",
      display: "block",
    },
    menuBrand: {
      marginRight:'10px',
      cursor: 'pointer',
      
    },
    title: {
      flexGrow: 1,
    },
    offset: theme.mixins.toolbar,
  };
});


//landing page styling

