import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Dialog, DialogTitle, DialogContent } from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import OpportunityCard from "./OpportunityCard";
import Button from "@mui/material/Button";
import NextIcon from "@mui/icons-material/NavigateNext";
import BeforeIcon from "@mui/icons-material/NavigateBefore";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as opportunities from "./opportunities.json";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(75,192,192,0.4)",
      contrastText: "#0F0C0C"
    }
  }
});

export default function CardPop(props) {
  const { row, openPopup, setOpenPopup, setRowData } = props;

  let data = opportunities.default;
  let index = data.findIndex((x) => x.oppId === row.oppId);

  const handleNextClick = () => {
    if (index === data.length - 1) {
      setRowData(data[0]);
    } else {
      setRowData(data[index + 1]);
    }
  };

  const handlePrevClick = () => {
    if (index === 0) {
      setRowData(data[data.length - 1]);
    } else {
      setRowData(data[index - 1]);
    }
  };

  const PrevNextButton = ({ children, icon, onClick }) => {
    return (
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          startIcon={children === "Prev" ? icon : null}
          endIcon={children === "Next" ? icon : null}
          onClick={onClick}
        >
          {children}
        </Button>
      </ThemeProvider>
    );
  };

  return (
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle style={{ borderBottom: "1px solid lightGray" }}>
        <Grid container justifyContent={"space-between"}>
          <Typography
            display="flex"
            variant="h5"
            alignItems="center"
            fontWeight="bold"
          >
            {row.oppName}
          </Typography>
          <IconButton onClick={() => setOpenPopup(false)}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container sx={{ paddingTop: "20px" }}>
          <Grid align="middle" item xs={6}>
            <PrevNextButton icon={<BeforeIcon />} onClick={handlePrevClick}>
              Prev
            </PrevNextButton>
          </Grid>
          <Grid align="middle" item xs={6}>
            <PrevNextButton icon={<NextIcon />} onClick={handleNextClick}>
              Next
            </PrevNextButton>
          </Grid>
        </Grid>
        <OpportunityCard row={row} />
      </DialogContent>
    </Dialog>
  );
}
