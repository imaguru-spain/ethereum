# Election Dapp

## 1. Smoke Test

```
truffle unbox pet-shop
touch contracts/Election.sol
touch migrations/2_deploy_contracts.js
truffle migrate
truffle console
Election.deployed().then(function(instance) { app = instance })
> app.address
> app.candidate()

```

## 2. List Candidates

```
truffle migrate --reset
app.candidatesCount()
app.candidates(1)
app.candidates(2)
```

### Testing

```
touch test/election.js
truffle test
```

### Client-Side Application

- Replace src/index.html
- Replace src/js/app.js

```
truffle migrate --reset
npm run dev
```

In Metamask use "connect to RPC" and use http://localhost:7545 as address

##Cast Votes

- Change Election.sol

```
truffle migrate --reset
truffle test
```
