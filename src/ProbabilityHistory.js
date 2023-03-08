import React from "react";
import { Bar } from "react-chartjs-2";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Chart from "chart.js/auto"; // eslint-disable-line no-alert

const ProbabilityHistoryChart = (props) => {
  const row = props.row;
  const probabilityHistory = row.probabilityHistory;

  const labels = probabilityHistory
    ? probabilityHistory.map((item) => item.daysAgo)
    : null;
  const pilytixProb = probabilityHistory
    ? probabilityHistory.map((item) => item.pilytixProb)
    : null;
  const repProb = probabilityHistory
    ? probabilityHistory.map((item) => item.repProb)
    : null;

  const data = {
    labels,
    datasets: [
      {
        label: "Pilytix Probability",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: pilytixProb
      },
      {
        label: "Rep Probability",
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(255,99,132,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: repProb
      }
    ]
  };

  const options = {
    scales: {
      x: {
        type: "category",
        reverse: true,
        ticks: {
          font: {
            size: 16
          }
        },
        title: {
          display: true,
          text: "Days",
          font: {
            size: 16
          }
        }
      },
      y: {
        ticks: {
          font: {
            size: 16
          }
        },
        title: {
          display: true,
          text: "Probability",
          font: {
            size: 16
          }
        }
      }
    },
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16
          }
        }
      },
      title: {
        display: true,
        text: "Probability History",
        font: {
          size: 20
        }
      }
    }
  };

  return (
    <Box pt="30px" pb="30px" sx={{ overflow: "auto" }}>
      <Grid container justifyContent="center" sx={{ minWidth: 450 }}>
        {probabilityHistory && probabilityHistory.length > 0 ? (
          <Bar
            data={data}
            width={100}
            height={50}
            id={`chart-${row.oppId}`}
            options={options}
          />
        ) : (
          <Grid item sx={{ padding: "20px 0px 10px 0px" }}>
            <Typography
              display="flex"
              fontWeight="bold"
              justifyContent="center"
              variant="h6"
            >
              No data is avavilable for the probability history
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ProbabilityHistoryChart;
