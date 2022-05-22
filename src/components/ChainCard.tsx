import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/StarBorder";
import { getClientForChain, getLatestBlock } from "../api/queries";
import { useQuery } from "graphql-hooks";

export const ChainCard = ({ tier }: any) => {
  // Enterprise card is full width at sm breakpoint
  const { loading, error, data } = useQuery(getLatestBlock(), {
    client: getClientForChain(tier.chain),
  });
  const latestBlock = data?.latestBlock;

  return (
    <Grid
      item
      key={tier.title}
      xs={12}
      sm={tier.title === "Enterprise" ? 12 : 6}
      md={4}
    >
      <Card>
        <CardHeader
          title={tier.title}
          subheader={tier.subheader}
          titleTypographyProps={{ align: "center" }}
          action={tier.title === "Pro" ? <StarIcon /> : null}
          subheaderTypographyProps={{
            align: "center",
          }}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              mb: 2,
            }}
          >
            <Typography component="h2" variant="h4" color="text.primary">
              {loading ? "loading..." : latestBlock?.blockNumber}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {" "}
              blocks
            </Typography>
          </Box>
          <ul>
            {tier.description.map((line: string) => (
              <Typography
                component="li"
                variant="subtitle1"
                align="center"
                key={line}
              >
                {line}
              </Typography>
            ))}
          </ul>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            component={Link}
            to={tier.buttonLink}
            variant={tier.buttonVariant as "outlined" | "contained"}
          >
            {tier.buttonText}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
