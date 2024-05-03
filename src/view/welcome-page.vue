<template>
  <div class="col">
    <div class="relative">
      <h1 class="text-[32px] font-bold">
        Welcome <br />
        to <span class="text-[#45AEF5]">Tonkeeper</span>
      </h1>
      <div class="block">
        <div class="flex">
          <img
            class="w-[35px] h-[35px]"
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Cartoon_space_rocket.png"
            alt=""
          />
          <div class="ml-[15px]">
            <p class="font-bold">World-class speed</p>
            <p class="gr text-[14px]">
              Thanks to the unique architecture of The Open Network, TON
              transactions are settled in seconds.
            </p>
          </div>
        </div>
        <div class="flex mt-[35px]">
          <img
            class="w-[35px] h-[35px]"
            src="http://getdrawings.com/cliparts/lock-clipart-26.png"
            alt=""
          />
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
        <div
          v-if="showCreateWallet"
          class="pt-[100px] mt-[20px] bg-[#0c1014] py-[18px] rounded-[17px] create-wallet-animation absolute w-[100%] h-[122%] top-[230px] p-[1rem] flex flex-col justify-center items-center"
        >
          <!-- Используйте изображение как фоновое изображение -->
          <div class="relative">
            <p
              @click="showCreateWallet = !showCreateWallet"
              class="bg-[#1D2633] w-[30px] h-[30px] text-center rounded-full text-[18px] cursor-pointer hover:bg-[#313c4a] top-[-120px] absolute right-0"
            >
              x
            </p>
            <div
              class="w-[100px] h-[100px] bg-center bg-no-repeat bg-cover absolute top-[-110px] left-[180px]"
            >
              <img
                src="https://www.stakingrewards.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fstakingrewards-static%2Fimages%2Fassets%2Fproduction%2Fthe-open-network_logo.png&w=2048&q=75"
                alt=""
              />
            </div>
            <p class="text-center text-[24px] font-bold">
              Let’s set up your wallet
            </p>
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
              class="mt-[20px] bg-[#1D2633] py-[18px] rounded-[17px] cursor-pointer w-[100%]"
            >
              <p class="text-center font-[600]">Import existing wallet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCreateWallet: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.col {
  padding-top: 250px;
}

.black-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1; /* Ensure the overlay appears above other content */
  display: none; /* Initially hidden */
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
