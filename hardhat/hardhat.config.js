require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path : ".env"});
/** @type import('hardhat/config').HardhatUserConfig */

const url = process.env.POLYGON_URL;
const accounts = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.18",
  networks : {
      mumbai: {
        url :url,
        accounts : [accounts],
      },
  },
};
