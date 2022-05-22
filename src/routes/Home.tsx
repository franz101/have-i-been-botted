import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { blockchains } from "../content/blockchains";
import { Container } from "@mui/material";
import * as config from "../content/config";
import { ChainCard } from "../components/ChainCard";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

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
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Grid item style={{ paddingBottom: "40px" }}>
          <Typography
            variant="h4"
            align="center"
            color="text.secondary"
            gutterBottom
          >
            Supported Chains
          </Typography>
        </Grid>
        <Grid container spacing={5} alignItems="flex-start">
          <Grid item xs={12} sm={6} md={4}>
            <List>
              <ListItem>Optimism</ListItem>
              <ListItem>Ethereum</ListItem>
              <ListItem>Arbitrum</ListItem>
              <ListItem>POA Core</ListItem>
              <ListItem>Near</ListItem>
              <ListItem>Fantom</ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <List>
              <ListItem>Polygon</ListItem>
              <ListItem>BinanceSmartChain</ListItem>
              <ListItem>Chapel</ListItem>
              <ListItem>Clover</ListItem>
              <ListItem>Avalanche</ListItem>
              <ListItem>Fuji</ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <List>
              <ListItem>Celo</ListItem>
              <ListItem>Fuse</ListItem>
              <ListItem>Gnosis Chain</ListItem>
              <ListItem>Moonriver</ListItem>
              <ListItem>Aurora</ListItem>
            </List>
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          <Button
            component={RouterLink}
            color="primary"
            style={{ width: "100%" }}
            to="/explorer"
          >
            Open the Explorer
          </Button>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default function App() {
  return <PricingContent />;
}
