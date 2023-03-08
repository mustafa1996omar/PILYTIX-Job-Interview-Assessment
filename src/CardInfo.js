import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function OpportunityCard(props) {
  const {
    salesRepName,
    amount,
    product,
    stage,
    repProbability,
    pilytixTier,
    pilytixProbability
  } = props.row;

  const labels = [
    "Amount",
    "Product",
    "Stage",
    "RepProbability",
    "PilytixTier",
    "PilytixProbability"
  ];

  const data = [
    amount,
    product,
    stage,
    repProbability,
    pilytixTier,
    pilytixProbability
  ];

  return (
    <Grid container sx={{ minWidth: 450 }}>
      <Grid item xs={12}>
        <Typography align="left" variant="h5" component="h5">
          {salesRepName}
        </Typography>
      </Grid>
      <Box sx={{ overflow: "auto" }}>
        <Grid
          container
          direction="row"
          style={{ marginTop: "0.5rem" }}
          columns={14}
          sx={{ minWidth: 600, whiteSpace: "normal" }}
        >
          {labels.map((label, key) => (
            <React.Fragment key={key}>
              <Grid item xs={3}>
                <Typography align="left" variant="body1" component="p">
                  {label}:
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography align="left" variant="body1" component="p">
                  {data[key]}
                </Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
}
