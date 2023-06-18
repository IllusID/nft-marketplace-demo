<h1>NFT Marketplace</h1>

## Web3 stack:
- React
- Next.js
- Chakra UI
- Web3-React
- Ether.js
- SWR

Also we are using **Hardhat** as development environment and testing.

## Project setup:
- Clone this repo.
- Activate env using command:
```bash
source nftmarket-env/bin/activate
```
(You might be wondering at this point why I am not removing the env folder because I don't want to resolve those issues or utilize the deprecated library or wait for the libraries installation. I simply want to clone and run in my computer. That's all!)
- Prepare 3 terminals:
  + First terminal: run local testnet.
  ```bash
  cd chain/
  yarn hardhat node
  ```
  + Second terminal: prepare data for web app.
  ```bash
  cd chain/
  yarn hardhat run src/prepare.ts --network localhost
  ```
  + Third terminal: deploy web app.
  ```bash
  cd webapp/
  yarn dev
  ```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- Import the first three accounts from the first terminal into Metamask.
- Navigate between accounts to interact with NFT Marketplace as a seller or a buyer. 
