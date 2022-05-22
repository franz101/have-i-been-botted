import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { blockchains } from "../content/blockchains";
import { Container } from "@mui/material";
import * as config from "../content/config";
import { ChainCard } from "../components/ChainCard";

function PricingContent() {
  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {config.siteTitle}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          {config.siteDescription}
        </Typography>
      </Container>
      {/* End hero unit */}

      <Grid container spacing={5} alignItems="flex-end">
        {blockchains.map((tier) => (
          <ChainCard tier={tier} />
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default function App() {
  return <PricingContent />;
}
