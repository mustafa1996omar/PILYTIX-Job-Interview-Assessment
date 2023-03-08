import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ProbabilityHistoryChart from "./ProbabilityHistory";
import CardInfo from "./CardInfo";
import FactorsTable from "./WinFactor";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "100%",
    margin: "10px",
    textAlign: "center",
    boxShadow: "none !important"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default function OpportunityCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent sx={{ paddingBottom: "200px" }}>
        <CardInfo row={props.row} />
        <ProbabilityHistoryChart className={classes.padding} row={props.row} />
        <FactorsTable row={props.row} />
      </CardContent>
    </Card>
  );
}
