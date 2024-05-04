<template>
  <h1 class="text-[30px] font-bold mb-[15px]">History</h1>
  <div class="">
    <div
      class="w-[100%] bg-[#1D2633] rounded-[15px] flex justify-between p-[15px] b-[0] hover:bg-[#2E3847] cursor-pointer mb-[15px]"
      v-for="i in resol()"
      @click="selectItem(i)"
    >
      <div class="flex">
        <img
          src="../assets/history-icon.png"
          class="w-[50px] h-[50px] rounded-full"
          alt=""
        />
        <div class="ml-[30px]">
          <p class="font-bold">{{ i.transactionType }}</p>
          <p class="text-[14px] gr">
            {{ shortenString(i.address) }}
          </p>
          <p
            class="bg-[#2E3847] text-center text-[14px] rounded-[25px] py-[8px] px-[10px] mt-[10px]"
          >
            {{ i.text }}
          </p>
        </div>
      </div>
      <div class="text-right">
        <p
          class="font-bold"
          :class="{ 'text-green-500': i.transactionType === 'Received' }"
        >
          {{ i.ton }} TON
        </p>
        <p class="text-[14px] gr">{{ i.date }} PM</p>
      </div>
    </div>
    <div
      v-if="showCreateWallet"
      class="bg-[#0C1014] rounded-t-[17px] create-wallet-animation absolute w-[550px] bottom-0 pt-[30px] z-50"
    >
      <div class="text-center pb-[20px] pt-[30px] relative">
        <p
          @click="showCreateWallet = !showCreateWallet"
          class="bg-[#1D2633] w-[30px] h-[30px] text-center rounded-full text-[18px] cursor-pointer hover:bg-[#313c4a] top-[-10px] absolute right-[20px]"
        >
          x
        </p>
        <h1 class="font-bold text-[25px]">{{ selectedItem.ton }} TON</h1>
        <p class="mb-[25px]">
          {{ selectedItem.transactionType }} on
          {{ formatTimestamp(selectedItem.time) }}, {{ selectedItem.date }}
        </p>
        <div class="rounded-[15px] bg-[#1D2633] mx-[20px]">
          <div class="flex justify-between p-[10px]">
            <p class="gr">
              {{
                selectedItem.transactionType === "Sent" ? "Recipient" : "Sender"
              }}
            </p>
            <p class="font-bold">{{ shortenString(selectedItem.address) }}</p>
          </div>
          <hr class="mx-[10px] border-[#293242]" />
          <div class="flex justify-between p-[10px]">
            <p class="gr">Transaction</p>
            <p class="font-bold">{{ shortenString(selectedItem.trId) }}</p>
          </div>
          <div class="flex justify-between p-[10px] mt-[20px]">
            <p class="gr">Fee</p>
            <p class="font-bold">{{ selectedItem.fee }} TON</p>
          </div>
          <hr class="mx-[10px] border-[#293242]" />
          <div class="flex justify-between p-[10px]">
            <p class="gr">Comment</p>
            <p class="font-bold">{{ selectedItem.text }}</p>
          </div>
        </div>
        <a
          target="_blank"
          :href="
            'https://testnet.tonviewer.com/transaction/' + selectedItem.trId
          "
        >
          <div
            class="mt-[20px] bg-[#2E3847] py-[18px] rounded-[17px] cursor-pointer mx-[20px]"
            @click="showCreateWallet = !showCreateWallet"
          >
            <p class="text-center font-[600]">View in explorer</p>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="flex justify-evenly fixed bottom-0 w-[530px] bg-[#10161F]">
    <router-link v-for="i in buttonsBottom" :to="i.router">
      <div class="w-[80px]">
        <img class="w-[55px] ml-[15px]" :src="i.icon" alt="" />
        <p class="text-center text-[12px]">{{ i.text }}</p>
      </div>
    </router-link>
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
import {
  WalletContractV4,
  TonClient,
  fromNano,
  internal,
  address,
} from "@ton/ton";
import axios from "axios";
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
      selectedItem: null,
      showCreateWallet: false,
      phras:
        "select chuckle upgrade flee process zebra subway cross diamond laundry version own jungle wolf praise rule post pigeon board differ morning memory solar demise",
      coin: [],
      accountAddress: "",
      message: "",
      amount: "",
      timestamp: "",
      formattedTime: "",
      send: [],
      received: [],
    };
  },
  methods: {
    base64ToHex(base64String) {
      // Декодирование строки из Base64 в байтовый массив
      var bytes = new Uint8Array(
        atob(base64String)
          .split("")
          .map((char) => char.charCodeAt(0))
      );

      // Преобразование каждого байта в шестнадцатеричное представление
      var hexString = Array.from(bytes, (byte) =>
        byte.toString(16).padStart(2, "0")
      ).join("");

      return hexString;
    },
    formatTimestamp(timestamp) {
      const date = new Date(timestamp * 1000);
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const monthName = months[date.getMonth()];
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;

      return `${monthName} ${day}`;
    },
    selectItem(item) {
      this.selectedItem = item;
      this.showCreateWallet = !this.showCreateWallet;
    },
    shortenString(str, prefixLength = 4, postfixLength = 4) {
      if (str.length <= prefixLength + postfixLength) {
        return str;
      }
      const prefix = str.substring(0, prefixLength);
      const postfix = str.substring(str.length - postfixLength);
      return `${prefix}...${postfix}`;
    },
    fetch() {
      const url = "https://testnet.toncenter.com/api/v2/getTransactions";
      const params = {
        address: this.walletAddres,
        limit: 10,
        archival: true,
      };
      const headers = {
        accept: "application/json",
        "X-API-Key":
          "4f96a149e04e0821d20f9e99ee716e20ff52db7238f38663226b1c0f303003e0",
      };

      axios
        .get(url, { params, headers })
        .then((response) => {
          console.log(response.data.result);
          this.coin = response.data.result;
        })
        .catch((error) => {
          console.error("There was a problem with the request:", error);
        });
    },
    formatTime(timestamp) {
      const date = new Date(timestamp * 1000);
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    },
    resol() {
      return this.coin.map((t) => {
        let transactionType = "";
        let message = "";
        let ton = 0;
        let date = "";
        let address = "";
        let time = t.utime;
        let fee = parseFloat(t.fee) / 1e9;
        let trId = this.base64ToHex(t.transaction_id.hash);
        if (t.out_msgs && t.out_msgs.length > 0) {
          transactionType = "Sent";
          ton = -parseFloat(t.out_msgs[0].value) / 1e9;
          message = atob(t.out_msgs[0].msg_data.text);
          date = this.formatTime(t.utime);
          address = t.out_msgs[0].destination;
        } else {
          transactionType = "Received";
          message = atob(t.in_msg.msg_data.text);
          ton = "+ " + parseFloat(t.in_msg.value) / 1e9;
          date = this.formatTime(t.utime);
          address = t.in_msg.destination;
        }

        return {
          transactionType: transactionType,
          text: message,
          ton: ton,
          date: date,
          address: address,
          time: time,
          fee: fee,
          trId: trId,
        };
      });
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
      console.log(client.getTransactions(this.walletAddres, { limit: 10 }));
      this.fetch();
      this.resol();
      // const walletContract = client.open(wallet);
      // const seqno = await walletContract.getSeqno();
      // console.log(seqno);
      // await walletContract.sendTransfer({
      //   secretKey: key.secretKey,
      //   seqno: seqno,
      //   messages: [
      //     internal({
      //       to: "EQDpTVs7034GTBLqf1w0f0Ra91xhzScMKHryTJ08QpiMw4gr",
      //       value: "0.09", // 0.05 TON
      //       body: "Hello", // optional comment
      //       bounce: false,
      //     }),
      //   ],
      // });
      // let currentSeqno = seqno;
      // while (currentSeqno == seqno) {
      //   console.log("waiting for transaction to confirm...");
      //   await sleep(1500);
      //   currentSeqno = await walletContract.getSeqno();
      // }
      // console.log("transaction confirmed!");
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
@keyframes myAnim {
  0% {
    opacity: 0;
    transform: translateY(250px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.create-wallet-animation {
  animation: myAnim 0.5s ease 0s 1 normal forwards;
}
</style>
