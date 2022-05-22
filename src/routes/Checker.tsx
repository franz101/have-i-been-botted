import {
  Autocomplete,
  Card,
  CardContent,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  getArbitrageHistory,
  getArbitrageHistoryForSmartContract,
  getClientForChain,
  getLatestBlock,
} from "../api/queries";
import { useQuery } from "graphql-hooks";
import Input from "@mui/material/Input";

import { useParams } from "react-router-dom";
import { blockchains } from "../content/blockchains";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const calculateTime = (data: any) => {
  const time =
    (new Date(data?.latestBlock?.blockTimestamp * 1000).getSeconds() -
      new Date(
        data?.interactedSmartContract?.lastBlockTimestamp * 1000
      ).getSeconds()) /
    60;
  console.log(time);
  return time ? 0 : time;
};

const Explorer = () => {
  const [chain, setChain] = useState("");
  const [address, setAddress] = useState("");
  const { loading, error, data } = useQuery(
    getArbitrageHistoryForSmartContract(address),
    {
      client: getClientForChain(chain),
    }
  );

  return (
    <React.Fragment>
      <Typography variant="h2">Has my Smart Contract been arbed?</Typography>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={blockchains.map((item: any) => ({
          label: item.title,
          value: item.chain,
        }))}
        sx={{ width: 300, marginTop: "30px" }}
        onChange={(event, value) => {
          console.log(value);
          setChain(value?.value || "");
        }}
        renderInput={(params) => <TextField {...params} label="Blockchain" />}
      />

      <TextField
        sx={{ width: 300, marginTop: "30px" }}
        onChange={(event) => {
          setAddress(event.target.value);
        }}
        label="SmartContract"
      />
      {address ? (
        data?.interactedSmartContract ? (
          <Typography variant="h3">YES</Typography>
        ) : loading ? (
          <Typography variant="h3">Loading...</Typography>
        ) : (
          <Typography variant="h3">NO</Typography>
        )
      ) : (
        ""
      )}
      {data?.interactedSmartContract && (
        <Card style={{ marginTop: "30px", marginBottom: "30px" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
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
              {data
                ? data?.interactedSmartContract?.lastBlockNumber
                : "loading..."}
            </Typography>
          </CardContent>
        </Card>
      )}
    </React.Fragment>
  );
};

export default Explorer;
