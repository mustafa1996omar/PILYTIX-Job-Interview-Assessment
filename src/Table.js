import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import CardPop from "./CardPop";
import { makeStyles } from "@mui/styles";
import * as opportunities from "./opportunities.json";
import * as tableHead from "./tableHead.json";

/*
  Name: Mustafa Al Khalidi
  email: mustafa996omar@outlook.com or moalkhalidi@outlook.com
  The assignment took a total of 6 hours and a half as I 
  needed to research react-chart-js to implement a bar 
  table since it's my first time working with it.
  The work done on this take-home assignment is my own.
*/

const useStyles = makeStyles({
  head: {
    "& th": {
      fontWeight: "bold",
      color: "#0F0C0C"
    }
  },
  evenColor: {
    "&:nth-child(even)": {
      backgroundColor: "rgba(75,192,192,0.1)"
    }
  },
  oddColor: {
    "&:nth-child(odd)": {
      backgroundColor: "#ffffff"
    }
  }
});

export default function BasicTable() {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */
  const data = opportunities.default;
  const tableHeadData = tableHead.default;
  const classes = useStyles();
  const [openPopup, setOpenPopup] = React.useState(false);
  const [rowData, setRowData] = React.useState("");
  const [orderBy, setOrderBy] = React.useState("Opp Name");
  const [order, setOrder] = React.useState("des");

  function handleRowClick(row) {
    setRowData(row);
    setOpenPopup(true);
  }

  const handleSort = (property) => (event) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = data.slice().sort((a, b) => {
    const orderFactor = order === "desc" ? -1 : 1;
    if (a[orderBy] < b[orderBy]) {
      return -1 * orderFactor;
    }
    if (a[orderBy] > b[orderBy]) {
      return 1 * orderFactor;
    }
    return 0;
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ background: "rgba(75,192,192,0.4)" }}>
          <TableRow className={classes.head}>
            {tableHeadData.map((column) => (
              <TableCell
                key={column.label}
                align={column.align}
                sortDirection={orderBy === column.name ? order : false}
              >
                <TableSortLabel
                  active={orderBy === column.name}
                  direction={orderBy === column.name ? order : "asc"}
                  onClick={handleSort(column.name)}
                >
                  {column.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row, index) => (
            <TableRow
              onClick={() => handleRowClick(row)}
              key={row.oppId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className={index % 2 ? classes.evenColor : classes.oddColor}
            >
              <TableCell component="th" scope="row">
                {row.oppName}
              </TableCell>
              <TableCell align="left">{row.stage}</TableCell>
              <TableCell align="right">{row.repProbability}</TableCell>
              <TableCell align="right">{row.pilytixProbability}</TableCell>
              <TableCell align="left">{row.pilytixTier}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="left">{row.product}</TableCell>
              <TableCell align="left">{row.salesRepName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <CardPop
          row={rowData}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          setRowData={setRowData}
        />
      </Table>
    </TableContainer>
  );
}
