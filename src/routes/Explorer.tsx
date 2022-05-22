import { Card, CardContent, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  getArbitrageHistory,
  getClientForChain,
  getLatestBlock,
} from "../api/queries";
import { useQuery } from "graphql-hooks";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import ReactWordcloud from "react-wordcloud";

const calculateTime = (data: any) => {
  const time =
    (new Date(data?.latestBlock?.blockTimestamp * 1000).getSeconds() -
      new Date(data?.lastArb?.blockTimestamp * 1000).getSeconds()) /
    60;
  console.log(time);
  return time ? 0 : time;
};

const Explorer = () => {
  let { chain } = useParams();
  const chainString = chain || "";
  const { loading, error, data } = useQuery(getArbitrageHistory(), {
    client: getClientForChain(chainString),
  });

  return (
    <React.Fragment>
      <Typography variant="h2">
        Chain {chainString.toLocaleUpperCase()}:
      </Typography>
      <Typography variant="h3">Yes, you've been arbed</Typography>

      <Card style={{ marginTop: "30px", marginBottom: "30px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Latest arb
          </Typography>
          <Typography variant="h5" component="div">
            {calculateTime(data) > 0
              ? `${calculateTime(data).toFixed(2)} Minutes ago`
              : "Now"}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Block:
          </Typography>
          <Typography variant="body2">
            {data ? data.lastArb.blockNumber : "loading..."}
          </Typography>
        </CardContent>
      </Card>
      <Typography variant="h4">Arb Bots</Typography>
      {data && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Bot Address</TableCell>
                <TableCell align="right">Total Transactions</TableCell>
                <TableCell align="right">Last Block</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.bots.map((row: any) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.txCount}</TableCell>
                  <TableCell align="right">{row.lastBlockNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Typography variant="h4">Latest Arbs</Typography>
      {data && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Block</TableCell>
                <TableCell>Tx</TableCell>
                <TableCell align="right">Bot</TableCell>
                <TableCell align="right">Total Events</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.arbitrages.map((row: any) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.blockNumber}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.smartContract.id}</TableCell>
                  <TableCell align="right">{row.totalEventLogs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {data && (
        <ReactWordcloud
          words={data.interactedSmartContracts.map((item: any) => ({
            text: item.symbol || item.name,
            value: item.counter,
          }))}
        />
      )}
    </React.Fragment>
  );
};

export default Explorer;
