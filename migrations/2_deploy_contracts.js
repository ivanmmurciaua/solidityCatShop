const CryptoCat = artifacts.require("CryptoCat");

module.exports = function(deployer) {
  deployer.deploy(CryptoCat);
};
