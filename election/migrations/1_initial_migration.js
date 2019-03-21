/* eslint-disable no-undef */
/* eslint-disable func-names */
const Migrations = artifacts.require('./Migrations.sol');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
