import "@walletconnect/react-native-compat";
import { WagmiConfig } from "wagmi";
import { mainnet, polygon, arbitrum } from "viem/chains";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  W3mButton,
  Web3Modal,
} from "@web3modal/wagmi-react-native";
import { SafeAreaView, StyleSheet, Text } from "react-native";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "47c4af2cf8910016266955678fde6d46";

// 2. Create config
const metadata = {
  name: "Web3Modal RN",
  description: "Web3Modal RN Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const chains = [mainnet, polygon, arbitrum];

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
});

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>New arch bug</Text>
        <W3mButton />
        <Web3Modal />
      </SafeAreaView>
    </WagmiConfig>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
