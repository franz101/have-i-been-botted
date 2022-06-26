# zk MEV

Our project came out the idea to use historic data analysis for trustscores. The idea: To participate in an auction, you have to stake money. If your account participates in executing a sandwich trade. You will loose your stake. Therefore MEV would not be as profitable. Given the timing of zk advances our ultimate goal was to implement Vitalik's latest post on privacy applications and make the score private.

We started with a negative reputation score by wash trade participation. And ultimately explored both the attack and defense side of NFT marketplace.

We proposed a sniping bot, that would be paid on chain in advance and if the NFT wouldn't get bought in a specific time frame, the money will be returned. We put a lot of effort to make the solidity contract a multi-bidder contract.

Given we understood the nature of sniping bots, we came up with modules that we could attach to SeaPorts latest api. To actually, block these bots.

## How to use

Download the example [or clone the repo](https://github.com/mui/material-ui):

<!-- #default-branch-switch -->

```sh
curl https://codeload.github.com/mui/material-ui/tar.gz/master | tar -xz --strip=2 material-ui-master/examples/create-react-app-with-typescript
cd create-react-app-with-typescript
```

Install it and run:

```sh
npm install
npm start
```

or:

<!-- #default-branch-switch -->

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/mui/material-ui/tree/master/examples/create-react-app-with-typescript)
