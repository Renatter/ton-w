<template>
  <div>
    <h1 class="text-center font-bold text-[20px]">Wallet</h1>

    <div class="wallet-info text-center pt-[55px] w-[]">
      <h1 class="font-bold text-[28px]">$ {{ balance }}</h1>
      <p class="gr font-bold text-[14px]">
        {{ shortenString(walletAddres) }}
      </p>
    </div>
    <div class="flex justify-evenly">
      <div v-for="i in buttons">
        <div
          class="bg-[#1D2633] text-[28px] w-[48px] h-[48px] text-center rounded-full font-bold mt-[32px]"
        >
          {{ i.icon }}
        </div>
        <p class="gr text-[12px] text-center font-bold">
          {{ i.text }}
        </p>
      </div>
    </div>
    <div
      class="w-[100%] h-[76px] bg-[#1D2633] rounded-[20px] p-[1rem] flex items-center pl-[10px] justify-between mt-[30px]"
    >
      <div class="flex gap-[15px]">
        <img src="../assets/toncoin.svg" alt="" />
        <div>
          <p class="font-bold">TON</p>
          <p>
            <span class="gr">$ 5.08</span>
            <span class="text-[#55d45f] ml-[15px]">+9.43%</span>
          </p>
        </div>
      </div>
      <div class="text-right">
        <p class="font-bold">{{ balance }}</p>
        <p class="gr">$ 25.40</p>
      </div>
    </div>
  </div>
  <div class="">
    <div class="flex justify-evenly absolute bottom-[10px] w-[500px]">
      <router-link v-for="i in buttonsBottom" :to="i.router">
        <div class="w-[80px]">
          <img class="w-[55px] ml-[15px]" :src="i.icon" alt="" />
          <p class="text-center text-[12px]">{{ i.text }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getHttpEndpoint } from "@orbs-network/ton-access";
import {
  mnemonicToWalletKey,
  mnemonicNew,
  mnemonicToPrivateKey,
  mnemonicValidate,
} from "@ton/crypto";
import { WalletContractV4, TonClient, fromNano, internal } from "@ton/ton";

export default {
  data() {
    return {
      buttonsBottom: [
        {
          icon: "https://pixsector.com/cache/8acaf779/av379cb1a1c35cdcfee50.png",
          text: "Wallet",
          router: "wallet",
        },
        {
          icon: "https://pixsector.com/cache/8acaf779/av379cb1a1c35cdcfee50.png",
          text: "History",
          router: "history",
        },
        {
          icon: "https://pixsector.com/cache/8acaf779/av379cb1a1c35cdcfee50.png",
          text: "Settings",
          router: "wallet",
        },
      ],
      walletAddres: "",
      balance: 0,
      buttons: [
        { icon: "↑", text: "Send" },
        { icon: "↓", text: "Recive" },
      ],
      phras:
        "select chuckle upgrade flee process zebra subway cross diamond laundry version own jungle wolf praise rule post pigeon board differ morning memory solar demise",
    };
  },
  methods: {
    shortenString(str, prefixLength = 4, postfixLength = 4) {
      if (str.length <= prefixLength + postfixLength) {
        return str;
      }
      const prefix = str.substring(0, prefixLength);
      const postfix = str.substring(str.length - postfixLength);
      return `${prefix}...${postfix}`;
    },
  },
  created() {
    setTimeout(async () => {
      const keys = localStorage.getItem("publicArr");
      const key = await mnemonicToWalletKey(this.phras.split(","));
      console.log(key);
      const wallet = WalletContractV4.create({
        publicKey: key.publicKey,
        workchain: 0,
      });
      const endpoint = await getHttpEndpoint({ network: "testnet" });
      const client = new TonClient({ endpoint });
      const balance = await client.getBalance(wallet.address);

      this.balance = fromNano(balance);
      this.walletAddres = wallet.address.toString({ testOnly: true });

      //   const walletContract = client.open(wallet);
      //   const seqno = await walletContract.getSeqno();
      //   console.log(seqno);
      //     await walletContract.sendTransfer({
      //       secretKey: key.secretKey,
      //       seqno: seqno,
      //       messages: [
      //         internal({
      //           to: "EQA4V9tF4lY2S_J-sEQR7aUj9IwW-Ou2vJQlCn--2DLOLR5e",
      //           value: "0.09", // 0.05 TON
      //           body: "Hello", // optional comment
      //           bounce: false,
      //         }),
      //       ],
      //     });
      //     let currentSeqno = seqno;
      //     while (currentSeqno == seqno) {
      //       console.log("waiting for transaction to confirm...");
      //       await sleep(1500);
      //       currentSeqno = await walletContract.getSeqno();
      //     }
      //     console.log("transaction confirmed!");
    }, 2000);
  },
};
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
</script>

<style lang="scss" scoped></style>
