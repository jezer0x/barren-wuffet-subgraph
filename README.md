# Barrent Wuffet Subgraph

This mostly follows: https://github.com/graphprotocol/hardhat-graph

## Setup

- yarn add @graphprotocol/graph-cli
- yarn add @graphprotocol/graph-ts
- yarn add @graphprotocol/hardhat-graph

## Development

- From a terminal in the root folder, run `yarn hardhat node --hostname 0.0.0.0`. (Ensure forking is disabled).
- If you're doing this for the first time: `yarn hardhat graph init --contract-name BarrenWuffet --address 0xf5059a5D33d5853360D16C683c16e67980206f36`. (replace the address with the address from deploy). Else put the new BarrenWuffet address in `subgraph.yaml`.
- from root, `docker-compose up --force-recreate`
- `yarn create-local`
- `yarn deploy-local`
- Run `yarn hardhat run test/graph_manual/testGraph.ts --network localhost`
- go to http://localhost:8000/subgraphs/name/barren-wuffet and query with { funds }. You should see the list of funds on right hand side!

## Cleanup

- Close the hardhat node
- `yarn graph-local-clean`
- You also need to `--force-recreate` the next time you're doing `docker-compose up`

## Modifying

- We'll mainly work with `schema.graphql` and `src/*.ts` files.
- When you update the schema, run `yarn codegen` to codegen the stuff inside `generate/`.
- After this you can modify the stuff under `src/` to translate the event data to the graphql schema we defined.
- When adding new data sources, we'll be touching the `subgraph.yml` files.

## Deploying / Updating

- We're deploying to hostred service since subgraph studio does not support testnets or arbitrum yet.
- Follow: https://thegraph.com/docs/en/deploying/deploying-a-subgraph-to-hosted/
- yarn graph auth --product hosted-service <KEY>
- yarn build --network <network_name>
- yarn graph deploy --product hosted-service psyf/bw-goerli-v1-0
- if you're updating, change the contract address and startBlock under the relevant network in network.json
