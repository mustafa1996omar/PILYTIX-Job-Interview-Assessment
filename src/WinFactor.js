import React from "react";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    boxShadow: "none",
    paddingTop: "200px"
  },
  increaseIcon: {
    color: "green"
  },
  descreaseIcon: {
    color: "red"
  },
  evenColor: {
    "&:nth-child(even)": {
      backgroundColor: "rgba(75,192,192,0.1)"
    }
  }
});

const FactorsTable = (props) => {
  const classes = useStyles();

  const {
    pilytixFactorsIncreasingWin,
    pilytixFactorsDecreasingWin
  } = props.row;

  const getWeightIcon = (weight, description) => {
    if (weight > 0) {
      return (
        <Tooltip title={`${weight} - ${description}`}>
          <ArrowUpwardIcon className={classes.increaseIcon} />
        </Tooltip>
      );
    } else if (weight < 0) {
      return (
        <Tooltip title={`${weight} - ${description}`}>
          <ArrowDownwardIcon className={classes.descreaseIcon} />
        </Tooltip>
      );
    } else {
      return <span>-</span>;
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead sx={{ background: "rgba(75,192,192,0.4)" }}>
          <TableRow>
            <TableCell>
              <b>Factor</b>
            </TableCell>
            <TableCell align="left">
              <b>Message</b>
            </TableCell>
            <TableCell align="right">
              <b>Weight</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pilytixFactorsIncreasingWin
            ? pilytixFactorsIncreasingWin.map((row, index) => (
                <TableRow key={index} className={classes.evenColor}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.message}</TableCell>
                  <TableCell align="right">
                    {getWeightIcon(row.weight.value, row.weight.description)}
                  </TableCell>
                </TableRow>
              ))
            : null}
          {pilytixFactorsDecreasingWin
            ? pilytixFactorsDecreasingWin.map((row, index) => (
                <TableRow key={row.name} className={classes.evenColor}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.message}</TableCell>
                  <TableCell align="right">
                    {getWeightIcon(row.weight.value, row.weight.description)}
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FactorsTable;
