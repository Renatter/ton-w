<template>
  <div class="">
    <h1 class="text-center font-bold text-[20px]">Wallet</h1>

    <div class="wallet-info text-center pt-[55px] w-[]">
      <h1 class="font-bold text-[28px]">$ {{ balance }}</h1>
      <p class="gr font-bold text-[14px]">
        {{ shortenString(walletAddres) }}
      </p>
    </div>
    <div class="flex justify-evenly">
      <div @click="showCreateWallet = !showCreateWallet">
        <div
          class="bg-[#1D2633] text-[28px] w-[48px] h-[48px] text-center rounded-full font-bold mt-[32px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            class="ml-[7px] pt-[8px]"
            viewBox="0 0 28 28"
          >
            <path
              d="M14 6.5V21.5M14 6.5L7.5 13M14 6.5L20.5 13"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p class="gr text-[12px] text-center font-bold">Send</p>
      </div>
      <div @click="recive = !recive">
        <div
          class="bg-[#1D2633] text-[28px] w-[48px] h-[48px] text-center rounded-full font-bold mt-[32px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            class="ml-[7px] pt-[8px]"
            viewBox="0 0 28 28"
          >
            <path
              d="M14 21.5V6.5M14 21.5L7.5 15M14 21.5L20.5 15"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p class="gr text-[12px] text-center font-bold">Receive</p>
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
        <p class="font-bold">{{ Math.floor(balance * 100) / 100 }} TON</p>
      </div>
    </div>
  </div>
  <div
    v-if="showCreateWallet && !count"
    class="bg-[#10161F] rounded-t-[17px] create-wallet-animation absolute top-[15px] w-[550px] bottom-0 pt-[30px] z-50"
  >
    <p class="text-[white] text-[27px] font-bold text-center">Recipient</p>
    <p
      @click="showCreateWallet = !showCreateWallet"
      class="bg-[#1D2633] text-center w-[30px] h-[30px] rounded-full text-[18px] cursor-pointer hover:bg-[#313c4a] top-[15px] absolute right-[20px]"
    >
      x
    </p>
    <div class="mx-6">
      <label for="default-input" class="block mb-2 text-sm font-medium gr"
        >Recipient addres</label
      >
      <input
        v-model="address"
        type="text"
        id="default-input"
        class="bg-[#1D2633] text-[white] text-[17px] h-[60px] rounded-[15px] block w-full p-2.5 focus:border-[#45AEF5]"
        placeholder="Recipient addres"
      />
    </div>
    <div class="relative">
      <div class="mx-6 pt-[15px]">
        <label for="default-input" class="block mb-2 text-sm font-medium gr"
          >Comment</label
        >
        <input
          v-model="comment"
          type="text"
          id="default-input"
          class="bg-[#1D2633] text-[white] text-[17px] h-[60px] rounded-[15px] block w-full p-2.5 focus:border-[#45AEF5]"
          placeholder="Comment"
        />
      </div>
    </div>
    <div
      @click="count = !count"
      class="w-[500px] mb-[20px] mx-[25px] mt-[20px] bg-[#45AEF5] py-[18px] rounded-[17px] cursor-pointer absolute bottom-0"
    >
      <p class="text-center font-[600]">Continue</p>
    </div>
  </div>
  <div
    v-if="showCreateWallet && count"
    class="bg-[#10161F] rounded-t-[17px] create-wallet-animation absolute top-[15px] w-[550px] bottom-0 pt-[30px] z-50"
  >
    <p class="text-[white] text-[27px] font-bold text-center">Amount</p>
    <p class="text-center gr">To: {{ shortenString(address) }}</p>
    <p
      @click="(showCreateWallet = !showCreateWallet), (count = !count)"
      class="bg-[#1D2633] text-center w-[30px] h-[30px] rounded-full text-[18px] cursor-pointer hover:bg-[#313c4a] top-[15px] absolute right-[20px]"
    >
      x
    </p>
    <div
      class="bg-[#1D2633] w-[510px] mx-[20px] h-[256px] relative rounded-[23px]"
    >
      <div class="w-[100px] absolute right-[40%] top-[15px]">
        <h1
          class="font-bold px-[1rem] py-[0.5rem] text-white rounded-[23px] text-center bg-[#2E3847]"
        >
          TON
        </h1>
      </div>
      <div class="pt-[100px] flex items-center ml-[200px]">
        <input
          v-model="valueSum"
          type="text"
          id="default-input"
          class="bg-[#1D2633] text-[white] font-bold text-[40px] h-[60px] block w-[50px] focus:border-[#45AEF5]"
        />
        <span class="text-[25px] font-bold gr">TON</span>
      </div>
    </div>
    <div
      class="flex justify-between w-[500px] mx-[25px] pt-[10px] items-center"
    >
      <p
        @click="max"
        class="font-bold bg-[#1D2633] rounded-[20px] px-[18px] py-[8px]"
      >
        MAX
      </p>
      <p v-if="formattedBalance >= 0">
        Available
        {{ formattedBalance }}
        TON
      </p>
      <p v-else class="text-[red]">Insufficient balance</p>
    </div>
    <div
      @click="sendAction"
      class="w-[500px] mx-[25px] mb-[20px] mt-[20px] bg-[#45AEF5] py-[18px] rounded-[17px] cursor-pointer absolute bottom-0"
    >
      <p class="text-center font-[600]">Continue</p>
    </div>
  </div>
  <div
    v-if="send"
    class="bg-[#10161F] rounded-t-[17px] create-wallet-animation absolute top-[15px] w-[550px] bottom-0 pt-[30px] z-50"
  >
    <p
      @click="
        (showCreateWallet = !showCreateWallet), (count = !count), (send = !send)
      "
      class="bg-[#1D2633] text-center w-[30px] h-[30px] rounded-full text-[18px] cursor-pointer hover:bg-[#313c4a] top-[15px] absolute right-[20px]"
    >
      x
    </p>
    <div class="text-center">
      <img src="../assets/toncoin.svg" class="w-[100px] ml-[220px]" alt="" />
      <p class="gr pt-[15px] font-bold">Confirm sending</p>
    </div>
    <div
      class="w-[500px] bg-[#1D2633] mx-[20px] p-[15px] rounded-[20px] mt-[60px]"
    >
      <div class="flex justify-between mb-[35px]">
        <p class="gr">Recipient</p>
        <p class="font-bold">{{ shortenString(address) }}</p>
      </div>
      <div class="flex justify-between mb-[35px]">
        <p class="gr">Amount</p>
        <p class="font-bold">{{ valueSum }} TON</p>
      </div>
      <div class="flex justify-between">
        <p class="gr">Comment</p>
        <p class="font-bold">{{ comment }}</p>
      </div>
    </div>

    <div
      v-if="!isWaiting && !isCancelled"
      @click="transfer()"
      class="w-[500px] mx-[25px] mb-[20px] mt-[20px] bg-[#45AEF5] py-[18px] rounded-[17px] cursor-pointer absolute bottom-0"
    >
      <p class="text-center font-[600]">Confrim and Send</p>
    </div>

    <div v-if="isWaiting" class="text-center">
      <svg
        class="ml-[250px]"
        height="50px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 507.425 507.425"
        xml:space="preserve"
      >
        <path
          style="fill: #ffc52f"
          d="M329.312,129.112l13.6,22l150.8,242.4c22.4,36,6,65.2-36.8,65.2h-406.4c-42.4,0-59.2-29.6-36.8-65.6  l198.8-320.8c22.4-36,58.8-36,81.2,0L329.312,129.112z"
        />
        <g>
          <path
            style="fill: #f4efef"
            d="M253.712,343.512c-10.8,0-20-8.8-20-20v-143.2c0-10.8,9.2-20,20-20s20,8.8,20,20v143.2   C273.712,334.312,264.512,343.512,253.712,343.512z"
          />
          <path
            style="fill: #f4efef"
            d="M253.312,407.112c-5.2,0-10.4-2-14-6c-3.6-3.6-6-8.8-6-14s2-10.4,6-14c3.6-3.6,8.8-6,14-6   s10.4,2,14,6c3.6,3.6,6,8.8,6,14s-2,10.4-6,14C263.712,404.712,258.512,407.112,253.312,407.112z"
          />
        </g>
        <path
          d="M456.912,465.512h-406.4c-22,0-38.4-7.6-46-21.6s-5.6-32.8,6-51.2l198.8-321.6c11.6-18.8,27.2-29.2,44.4-29.2l0,0  c16.8,0,32.4,10,43.6,28.4l35.2,56.4l0,0l13.6,22l150.8,243.6c11.6,18.4,13.6,37.2,6,51.2  C495.312,457.912,478.912,465.512,456.912,465.512z M253.312,49.912L253.312,49.912c-14,0-27.2,8.8-37.6,25.2l-198.8,321.6  c-10,16-12,31.6-5.6,43.2s20.4,17.6,39.2,17.6h406.4c18.8,0,32.8-6.4,39.2-17.6c6.4-11.2,4.4-27.2-5.6-43.2l-150.8-243.6l-13.6-22  l-35.2-56.4C280.512,58.712,267.312,49.912,253.312,49.912z"
        />
        <path
          d="M249.712,347.512c-13.2,0-24-10.8-24-24v-143.2c0-13.2,10.8-24,24-24s24,10.8,24,24v143.2  C273.712,336.712,262.912,347.512,249.712,347.512z M249.712,164.312c-8.8,0-16,7.2-16,16v143.2c0,8.8,7.2,16,16,16s16-7.2,16-16  v-143.2C265.712,171.512,258.512,164.312,249.712,164.312z"
        />
        <path
          d="M249.712,411.112L249.712,411.112c-6.4,0-12.4-2.4-16.8-6.8c-4.4-4.4-6.8-10.8-6.8-16.8c0-6.4,2.4-12.4,6.8-16.8  c4.4-4.4,10.8-7.2,16.8-7.2c6.4,0,12.4,2.4,16.8,7.2c4.4,4.4,7.2,10.4,7.2,16.8s-2.4,12.4-7.2,16.8  C262.112,408.312,256.112,411.112,249.712,411.112z M249.712,371.112c-4,0-8.4,1.6-11.2,4.8c-2.8,2.8-4.8,7.2-4.8,11.2  c0,4.4,1.6,8.4,4.8,11.2c2.8,2.8,7.2,4.8,11.2,4.8s8.4-1.6,11.2-4.8c2.8-2.8,4.8-7.2,4.8-11.2s-1.6-8.4-4.8-11.2  C258.112,372.712,253.712,371.112,249.712,371.112z"
        />
      </svg>
      <p>Waiting for transaction to confirm...</p>
    </div>

    <div v-if="isConfirmed" class="pt-[35px]">
      <svg
        class="ml-[250px]"
        height="50px"
        width="50px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 506.4 506.4"
        xml:space="preserve"
      >
        <circle style="fill: #54b265" cx="253.2" cy="253.2" r="249.2" />
        <path
          style="fill: #f4efef"
          d="M372.8,200.4l-11.2-11.2c-4.4-4.4-12-4.4-16.4,0L232,302.4l-69.6-69.6c-4.4-4.4-12-4.4-16.4,0  L134.4,244c-4.4,4.4-4.4,12,0,16.4l89.2,89.2c4.4,4.4,12,4.4,16.4,0l0,0l0,0l10.4-10.4l0.8-0.8l121.6-121.6  C377.2,212.4,377.2,205.2,372.8,200.4z"
        />
        <path
          d="M253.2,506.4C113.6,506.4,0,392.8,0,253.2S113.6,0,253.2,0s253.2,113.6,253.2,253.2S392.8,506.4,253.2,506.4z M253.2,8  C118,8,8,118,8,253.2s110,245.2,245.2,245.2s245.2-110,245.2-245.2S388.4,8,253.2,8z"
        />
        <path
          d="M231.6,357.2c-4,0-8-1.6-11.2-4.4l-89.2-89.2c-6-6-6-16,0-22l11.6-11.6c6-6,16.4-6,22,0l66.8,66.8L342,186.4  c2.8-2.8,6.8-4.4,11.2-4.4c4,0,8,1.6,11.2,4.4l11.2,11.2l0,0c6,6,6,16,0,22L242.8,352.4C239.6,355.6,235.6,357.2,231.6,357.2z   M154,233.6c-2,0-4,0.8-5.6,2.4l-11.6,11.6c-2.8,2.8-2.8,8,0,10.8l89.2,89.2c2.8,2.8,8,2.8,10.8,0l132.8-132.8c2.8-2.8,2.8-8,0-10.8  l-11.2-11.2c-2.8-2.8-8-2.8-10.8,0L234.4,306c-1.6,1.6-4,1.6-5.6,0l-69.6-69.6C158,234.4,156,233.6,154,233.6z"
        />
      </svg>
      <p class="text-center text-[#54B265]">Transaction confirmed!</p>
    </div>
  </div>
  <div
    v-if="recive"
    class="bg-[#10161F] rounded-t-[17px] create-wallet-animation absolute top-[15px] w-[550px] px-[130px] bottom-0 pt-[30px] z-50"
  >
    <p class="text-[white] text-[20px] font-bold text-center pt-[70px]">
      Receive Toncoin
    </p>
    <p
      @click="recive = !recive"
      class="bg-[#1D2633] text-center w-[30px] h-[30px] rounded-full text-[18px] cursor-pointer hover:bg-[#313c4a] top-[15px] absolute right-[20px]"
    >
      x
    </p>
    <p class="gr text-center">
      Send only Toncoin TON and tokens in TON network to this address, or you
      might lose your funds.
    </p>
    <div class="bg-[white] rounded-[20px] p-[40px] mt-[30px]">
      <img src="../assets/qr.png" alt="" />
      <p class="text-[black] wor text-center font-sm">{{ walletAddres }}</p>
    </div>
    <button
      class="flex bg-[#1D2633] h-[48px] px-[20px] mt-[30px] items-center rounded-[30px] ml-[70px]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        viewBox="0 0 17 16"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.863 11.988C13.8314 11.9619 14.4518 11.8795 14.964 11.6185C15.6225 11.283 16.158 10.7475 16.4935 10.089C16.875 9.34028 16.875 8.36018 16.875 6.4V5.6C16.875 3.63982 16.875 2.65972 16.4935 1.91103C16.158 1.25247 15.6225 0.717034 14.964 0.381477C14.2153 0 13.2352 0 11.275 0H10.475C8.51481 0 7.53472 0 6.78603 0.381477C6.12746 0.717034 5.59203 1.25247 5.25647 1.91103C4.99552 2.42319 4.91307 3.04363 4.88703 4.01203C3.91863 4.03808 3.29819 4.12052 2.78603 4.38148C2.12746 4.71703 1.59203 5.25247 1.25647 5.91103C0.874993 6.65972 0.874992 7.63982 0.874992 9.6V10.4C0.874992 12.3602 0.874993 13.3403 1.25647 14.089C1.59203 14.7475 2.12746 15.283 2.78603 15.6185C3.53472 16 4.51481 16 6.47499 16H7.27499C9.23518 16 10.2153 16 10.964 15.6185C11.6225 15.283 12.158 14.7475 12.4935 14.089C12.7545 13.5768 12.8369 12.9564 12.863 11.988ZM11.275 1.5H10.475C9.47015 1.5 8.80673 1.50117 8.29835 1.5427C7.80748 1.58281 7.59466 1.65295 7.46701 1.71799C7.09069 1.90973 6.78473 2.21569 6.59298 2.59202C6.52795 2.71966 6.4578 2.93248 6.4177 3.42335C6.40364 3.59541 6.39421 3.78521 6.38788 4C6.4167 4 6.44574 4 6.47499 4H7.27499C9.23518 4 10.2153 4 10.964 4.38148C11.6225 4.71703 12.158 5.25247 12.4935 5.91103C12.875 6.65972 12.875 7.63982 12.875 9.6V10.4C12.875 10.4293 12.875 10.4583 12.875 10.4871C13.0898 10.4808 13.2796 10.4714 13.4516 10.4573C13.9425 10.4172 14.1553 10.3471 14.283 10.282C14.6593 10.0903 14.9653 9.78431 15.157 9.40798C15.222 9.28034 15.2922 9.06752 15.3323 8.57665C15.3738 8.06826 15.375 7.40484 15.375 6.4V5.6C15.375 4.59516 15.3738 3.93174 15.3323 3.42335C15.2922 2.93248 15.222 2.71966 15.157 2.59202C14.9653 2.21569 14.6593 1.90973 14.283 1.71799C14.1553 1.65295 13.9425 1.58281 13.4516 1.5427C12.9433 1.50117 12.2798 1.5 11.275 1.5ZM6.47499 5.5H7.27499C8.27984 5.5 8.94326 5.50117 9.45164 5.5427C9.94251 5.58281 10.1553 5.65295 10.283 5.71799C10.6593 5.90973 10.9653 6.21569 11.157 6.59202C11.222 6.71966 11.2922 6.93248 11.3323 7.42335C11.3738 7.93174 11.375 8.59516 11.375 9.6V10.4C11.375 11.4048 11.3738 12.0683 11.3323 12.5766C11.2922 13.0675 11.222 13.2803 11.157 13.408C10.9653 13.7843 10.6593 14.0903 10.283 14.282C10.1553 14.3471 9.94251 14.4172 9.45164 14.4573C8.94326 14.4988 8.27984 14.5 7.27499 14.5H6.47499C5.47015 14.5 4.80673 14.4988 4.29835 14.4573C3.80748 14.4172 3.59465 14.3471 3.46701 14.282C3.09069 14.0903 2.78473 13.7843 2.59298 13.408C2.52794 13.2803 2.4578 13.0675 2.4177 12.5766C2.37616 12.0683 2.37499 11.4048 2.37499 10.4V9.6C2.37499 8.59516 2.37616 7.93174 2.4177 7.42335C2.4578 6.93248 2.52794 6.71966 2.59298 6.59202C2.78473 6.21569 3.09069 5.90973 3.46701 5.71799C3.59465 5.65295 3.80748 5.58281 4.29835 5.5427C4.80673 5.50117 5.47015 5.5 6.47499 5.5Z"
          fill="currentColor"
        />
      </svg>
      <p class="ml-[10px] text-center">Copy addres</p>
    </button>
  </div>
  <div class="menu">
    <div
      class="flex justify-evenly fixed bottom-0 w-[530px] bg-[#0B0F16] pb-[10px]"
    >
      <router-link to="/wallet">
        <div class="">
          <svg
            class="ml-[5px]"
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="28"
            viewBox="0 0 29 28"
          >
            <path
              opacity="0.32"
              d="M3.75 9.4C3.75 7.15979 3.75 6.03968 4.18597 5.18404C4.56947 4.43139 5.18139 3.81947 5.93404 3.43597C6.78968 3 7.90979 3 10.15 3H16.35C18.5902 3 19.7103 3 20.566 3.43597C21.3186 3.81947 21.9305 4.43139 22.314 5.18404C22.75 6.03968 22.75 7.15979 22.75 9.4V12H3.75V9.4Z"
              fill="#45AEF5"
            />
            <path
              opacity="0.32"
              d="M18.75 12.5H22.75V16.5H18.75V12.5Z"
              fill="#45AEF5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.18597 8.18404C3.75 9.03969 3.75 10.1598 3.75 12.4V16.6C3.75 18.8402 3.75 19.9603 4.18597 20.816C4.56947 21.5686 5.18139 22.1805 5.93404 22.564C6.78969 23 7.90979 23 10.15 23H19.35C21.5902 23 22.7103 23 23.566 22.564C24.3186 22.1805 24.9305 21.5686 25.314 20.816C25.75 19.9603 25.75 18.8402 25.75 16.6V12.4C25.75 10.1598 25.75 9.03969 25.314 8.18404C24.9305 7.43139 24.3186 6.81947 23.566 6.43597C22.7103 6 21.5902 6 19.35 6H10.15C7.90979 6 6.78969 6 5.93404 6.43597C5.18139 6.81947 4.56947 7.43139 4.18597 8.18404ZM20.5 12.75C19.5335 12.75 18.75 13.5335 18.75 14.5C18.75 15.4665 19.5335 16.25 20.5 16.25C21.4665 16.25 22.25 15.4665 22.25 14.5C22.25 13.5335 21.4665 12.75 20.5 12.75Z"
              fill="#45AEF5"
            />
          </svg>
          <p class="text-[12px] font-bold text-[#45AEF5]">Wallet</p>
        </div>
      </router-link>
      <router-link to="/history">
        <div class="">
          <svg
            class="ml-[5px]"
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="28"
            viewBox="0 0 29 28"
          >
            <path
              opacity="0.32"
              d="M11.7694 14.6521L10.8499 21.6403C10.596 23.5702 10.469 24.5352 10.6533 25.0115C11.0322 25.9906 12.1037 26.51 13.107 26.2011C13.5952 26.0508 14.2741 25.3535 15.6321 23.9589L22.4646 16.9417C23.8441 15.5249 24.5338 14.8165 24.7122 14.2471C25.0774 13.0808 24.5459 11.8214 23.4554 11.2695C22.9231 11 21.9344 11 19.957 11H15.9335C14.9419 11 14.4461 11 14.029 11.1236C13.1874 11.3728 12.4973 11.9781 12.1404 12.7799C11.9634 13.1774 11.8988 13.6689 11.7694 14.6521Z"
              fill="#8994A3"
            />
            <path
              d="M16.7305 13.3479L17.6499 6.35974C17.9039 4.42981 18.0309 3.46485 17.8465 2.98851C17.4676 2.00944 16.3962 1.48997 15.3928 1.79887C14.9047 1.94915 14.2257 2.64649 12.8678 4.04114L6.03521 11.0583C4.65575 12.4751 3.96602 13.1835 3.7877 13.7529C3.42245 14.9192 3.95398 16.1786 5.04441 16.7305C5.57677 17 6.56547 17 8.54286 17H12.5663C13.558 17 14.0538 17 14.4709 16.8765C15.3124 16.6272 16.0026 16.0219 16.3595 15.2201C16.5364 14.8227 16.6011 14.3311 16.7305 13.3479Z"
              fill="#8994A3"
            />
          </svg>
          <p class="text-[12px] font-bold text-[#8994A3]">History</p>
        </div>
      </router-link>
      <router-link to="/settings">
        <div class="">
          <svg
            class="ml-[10px]"
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="28"
            viewBox="0 0 29 28"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9386 3.50061L16.5641 3.50061C17.9312 3.49781 18.6147 3.49641 19.2265 3.69463C19.7678 3.87001 20.266 4.15763 20.6885 4.5387C21.166 4.9694 21.5066 5.56208 22.1877 6.74744L24.5005 10.7532C25.1864 11.9357 25.5294 12.527 25.6636 13.1559C25.7824 13.7124 25.7824 14.2876 25.6636 14.8441C25.5294 15.473 25.1864 16.0642 24.5005 17.2467L22.1877 21.2526C21.5066 22.4379 21.166 23.0306 20.6885 23.4613C20.266 23.8424 19.7678 24.13 19.2265 24.3054C18.6147 24.5036 17.9312 24.5022 16.5641 24.4994H11.9386C10.5715 24.5022 9.88798 24.5036 9.2762 24.3054C8.73492 24.13 8.23674 23.8424 7.81422 23.4613C7.33667 23.0306 6.9961 22.4379 6.31497 21.2526L4.00226 17.2468C3.31628 16.0643 2.97329 15.473 2.83907 14.8441C2.72031 14.2876 2.72031 13.7124 2.83907 13.1559C2.97329 12.527 3.31628 11.9357 4.00226 10.7532L6.31497 6.74744C6.9961 5.56208 7.33667 4.96941 7.81422 4.53871C8.23674 4.15763 8.73492 3.87001 9.2762 3.69463C9.88798 3.49641 10.5715 3.49781 11.9386 3.50061ZM14.25 18C16.4591 18 18.25 16.2091 18.25 14C18.25 11.7909 16.4591 10 14.25 10C12.0409 10 10.25 11.7909 10.25 14C10.25 16.2091 12.0409 18 14.25 18Z"
              fill="#8994A3"
            />
            <path
              opacity="0.32"
              d="M18.25 14C18.25 16.2091 16.4591 18 14.25 18C12.0409 18 10.25 16.2091 10.25 14C10.25 11.7909 12.0409 10 14.25 10C16.4591 10 18.25 11.7909 18.25 14Z"
              fill="#8994A3"
            />
          </svg>
          <p class="text-[12px] font-bold text-[#8994A3]">Settings</p>
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
      recive: false,
      send: false,
      count: false,
      address: "",
      valueSum: null,
      comment: "",
      showCreateWallet: false,
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
          router: "settings",
        },
      ],
      walletAddres: "",
      balance: 0,

      phras:
        "select chuckle upgrade flee process zebra subway cross diamond laundry version own jungle wolf praise rule post pigeon board differ morning memory solar demise",
      coin: [],
      isWaiting: false,
      isConfirmed: false,
    };
  },
  computed: {
    formattedBalance() {
      if (this.valueSum === null) {
        return Math.floor(this.balance * 100) / 100;
      }
      const res = Math.floor(this.balance * 100) / 100 - this.valueSum;
      return res.toFixed(2);
    },
  },
  methods: {
    sendAction() {
      if (this.formattedBalance < 0) {
        // Если баланс отрицательный, не продолжаем
        return;
      }
      // Логика для продолжения
      this.send = !this.send;
    },
    max() {
      this.valueSum = Math.floor(this.balance * 100) / 100;
    },
    shortenString(str, prefixLength = 4, postfixLength = 4) {
      if (str.length <= prefixLength + postfixLength) {
        return str;
      }
      const prefix = str.substring(0, prefixLength);
      const postfix = str.substring(str.length - postfixLength);
      return `${prefix}...${postfix}`;
    },
    fetchData() {
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
          // const transactions = response.data.transactions; // index.transaction[]
          // const addressBook = response.data.address_book;

          console.log(response.data.result);
        })
        .catch((error) => {
          console.error("There was a problem with the request:", error);
        });
    },
    async transfer() {
      const keys = localStorage.getItem("publicArr");
      const key = await mnemonicToWalletKey(keys.split(","));
      const endpoint = await getHttpEndpoint({ network: "testnet" });
      const client = new TonClient({ endpoint });
      const wallet = WalletContractV4.create({
        publicKey: key.publicKey,
        workchain: 0,
      });
      const walletContract = client.open(wallet);
      const seqno = await walletContract.getSeqno();
      await walletContract.sendTransfer({
        secretKey: key.secretKey,
        seqno: seqno,
        messages: [
          internal({
            to: this.address,
            value: this.valueSum,
            body: this.comment, // optional comment
            bounce: false,
          }),
        ],
      });
      let currentSeqno = seqno;
      while (currentSeqno == seqno) {
        this.isWaiting = true;
        await sleep(1500);
        currentSeqno = await walletContract.getSeqno();
      }
      this.isWaiting = false;
      this.isConfirmed = true;
    },
  },
  created() {
    setTimeout(async () => {
      const keys = localStorage.getItem("publicArr");
      const key = await mnemonicToWalletKey(keys.split(","));
      const wallet = WalletContractV4.create({
        publicKey: key.publicKey,
        workchain: 0,
      });
      const endpoint = await getHttpEndpoint({ network: "testnet" });
      const client = new TonClient({ endpoint });
      const balance = await client.getBalance(wallet.address);

      this.balance = fromNano(balance);
      this.walletAddres = wallet.address.toString({ testOnly: true });
      console.log(this.walletAddres);
      console.log(client.getTransactions(this.walletAddres, { limit: 10 }));
    }, 2000);
  },
};
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
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
.wor {
  word-break: break-all;
}
.create-wallet-animation {
  animation: myAnim 0.5s ease 0s 1 normal forwards;
}
</style>
