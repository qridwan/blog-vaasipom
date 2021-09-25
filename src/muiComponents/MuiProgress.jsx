import {
  Backdrop,
  Box,
  Fade,
  LinearProgress,
  makeStyles,
  Modal,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "750px",
    margin: "0 auto",
    padding: "20px",
  },
  paper: {
    border: `1px solid rgba(196, 196, 196, 0.5)`,
    background: "#FFFFFF",
    textAlign: "center",
    boxShadow: "0px 0px 107px rgba(0, 0, 0, 0.06)",
    borderRadius: "28px",
    padding: theme.spacing(2, 4, 3),
    cursor: "pointer",
  },
}));
const MuiProgress = ({ open, close }) => {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={Boolean(open)}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade 
        // in={open}
        in
        >
          <Box sx={{ width: "100%" }}>
            <LinearProgress  />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default MuiProgress;
