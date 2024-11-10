import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { vars } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    BaseSepolia: {
      url: `https://base-sepolia.g.alchemy.com/v2/${vars.get("ALCHEMY_PRIVATE_KEY")}`,
      accounts: [vars.get("PRIVATE_KEY")],
    },
    openCampus: {
      url: "https://rpc.open-campus-codex.gelato.digital",
      chainId: 656476,
      accounts: [vars.get("PRIVATE_KEY")],
      gasPrice: 20000000000, // Optional: you can set a custom gas price
    },
  },
};

export default config;
