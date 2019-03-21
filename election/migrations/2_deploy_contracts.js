/* eslint-disable no-undef */
/* eslint-disable func-names */
const Election = artifacts.require('./Election.sol');

module.exports = function (deployer) {
  deployer.deploy(Election);
};
