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

```
