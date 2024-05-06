<template class="">
  <div class="p-[1rem]">
    <h1 class="text-center font-bold text-[20px]">Wallet</h1>

    <div class="wallet-info text-center pt-[55px] w-[]">
      <h1 class="font-bold text-[28px]">
        <img
          v-if="isNaN(userWallets.balance)"
          class="dead"
          src="../assets/loading.gif"
          alt=""
          width="50px"
        />
        <p v-else>$ {{ (userWallets.balance * 5.75).toFixed(2) }}</p>
      </h1>
      <p class="gr font-bold text-[14px]">
        {{ shortenString(userWallets.addres) }}
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
    <router-link to="/ton-coin">
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
          <img
            v-if="isNaN(userWallets.balance)"
            src="../assets/loading.gif"
            alt=""
            width="30px"
          />
          <p v-else class="font-bold">{{ userWallets.balance }} TON</p>
        </div>
      </div>
    </router-link>

    <router-link to="/usdt-coin">
      <div
        class="w-[100%] h-[76px] bg-[#1D2633] rounded-[20px] p-[1rem] flex items-center pl-[10px] justify-between mt-[30px]"
      >
        <div class="flex gap-[15px]">
          <img
            width="56px"
            height="56px"
            src="../assets/tether-usdt-seeklogo.svg"
            alt=""
          />
          <div>
            <p class="font-bold">USDT</p>
            <p>
              <span class="gr">$ 1.01</span>
              <span class="text-[#55d45f] ml-[15px]">+0.01%</span>
            </p>
          </div>
        </div>
        <div class="text-right">
          <img
            v-if="isNaN(userWallets.balanceUsdt)"
            src="../assets/loading.gif"
            alt=""
            width="30px"
          />
          <p v-else class="font-bold">{{ userWallets.balanceUsdt }} USDT</p>
        </div>
      </div>
    </router-link>
  </div>
  <div
    v-if="showCreateWallet && !count"
    class="bg-[#10161F] rounded-t-[17px] create-wallet-animation bottom-x top-[15px] w-[100%] pt-[30px] z-50"
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
        :class="{ 'invalid-input': isGuestAddres }"
        v-model="guestAddress"
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
      @click="saveGuestAddress"
      class="w-[100%] rounded-[17px] cursor-pointer absolute bottom-[10px]"
    >
      <p
        class="text-center font-[600] bg-[#45AEF5] mx-[20px] py-[18px] rounded-[17px] cursor-pointer"
      >
        Continue
      </p>
    </div>
  </div>
  <div
    v-if="showCreateWallet && count"
    class="bg-[#10161F] rounded-t-[17px] p-[1rem] create-wallet-animation top-[15px] w-[100%] bottom-x pt-[30px] z-50"
  >
    <p class="text-[white] text-[27px] font-bold text-center">Amount</p>
    <p class="text-center gr">To: {{ shortenString(guestAddress) }}</p>
    <p
      @click="(showCreateWallet = !showCreateWallet), (count = !count)"
      class="bg-[#1D2633] text-center w-[30px] h-[30px] rounded-full text-[18px] cursor-pointer hover:bg-[#313c4a] top-[15px] absolute right-[20px]"
    >
      x
    </p>
    <div
      class="bg-[#1D2633] w-[100%] h-[256px] relative rounded-[23px]"
      style="display: flex; justify-content: center; align-items: center"
    >
      <div class="w-[100px] absolute top-[15px]">
        <h1
          class="font-bold px-[1rem] py-[0.5rem] text-white rounded-[23px] text-center bg-[#2E3847]"
        >
          TON
        </h1>
      </div>
      <div class="flex items-center">
        <input
          v-model="valueSum"
          type="text"
          id="default-input"
          autofocus
          class="bg-[#1D2633] touched text-[white] font-bold text-[40px] h-[60px] block w-[70px] focus:border-[#45AEF5]"
        />
        <span class="text-[25px] font-bold gr">TON</span>
      </div>
    </div>
    <div class="flex justify-between w-[100%] pt-[10px] items-center">
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
      :class="{
        'opacity-50 cursor-not-allowed': formattedBalance < 0,
      }"
      class="w-[100%] mb-[20px] mt-[20px] cursor-pointer absolute left-0 bottom-0"
    >
      <p
        class="text-center font-[600] bg-[#45AEF5] mx-[20px] py-[18px] rounded-[17px] cursor-pointer"
      >
        Continue
      </p>
    </div>
  </div>
  <div
    v-if="send"
    class="bg-[#10161F] p-[1rem] rounded-t-[17px] create-wallet-animation top-[15px] w-[100%] bottom-x pt-[30px] z-50"
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
      <img src="../assets/toncoin.svg" class="w-[100px] ml-[40%]" alt="" />
      <p class="gr pt-[15px] font-bold">Confirm sending</p>
    </div>
    <div class="w-[100%] bg-[#1D2633] p-[15px] rounded-[20px] mt-[60px]">
      <div class="flex justify-between mb-[35px]">
        <p class="gr">Recipient</p>
        <p class="font-bold">{{ shortenString(guestAddress) }}</p>
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
      class="w-[100%] mb-[20px] mt-[20px] cursor-pointer absolute left-0 bottom-0"
    >
      <p
        class="text-center font-[600] bg-[#45AEF5] mx-[20px] py-[18px] rounded-[17px] cursor-pointer"
        @click="transfer()"
      >
        Confrim and Send
      </p>
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
    class="bg-[#10161F] p-[1rem] rounded-t-[17px] create-wallet-animation top-[15px] w-[100%] bottom-x -0 pt-[30px] z-50"
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
    "
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
    <div class="bg-[white] rounded-[20px] p-[5%] mt-[30px]" style="width: 57%">
      <img src="../assets/qr.png" alt="" />
      <p class="text-[black] wor text-center font-sm">
        {{ userWallets.addres }}
      </p>
    </div>
    <button
      @click="copyToClipboard"
      class="flex bg-[#1D2633] h-[48px] px-[20px] mt-[30px] items-center rounded-[30px]"
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
    <button
      @click="freeTon"
      class="flex bg-[#1D2633] h-[48px] px-[20px] mt-[30px] items-center rounded-[30px]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        width="25"
        height="25"
        style="
          /* width: 100%;
          height: 100%; */
          transform: translate3d(0px, 0px, 0px);
          content-visibility: visible;
        "
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <clipPath id="__lottie_element_402">
            <rect width="512" height="512" x="0" y="0" />
          </clipPath>
          <clipPath id="__lottie_element_404">
            <path d="M0,0 L512,0 L512,512 L0,512z" />
          </clipPath>
          <clipPath id="__lottie_element_408">
            <path d="M0,0 L512,0 L512,512 L0,512z" />
          </clipPath>
        </defs>
        <g clip-path="url(#__lottie_element_402)">
          <g
            clip-path="url(#__lottie_element_404)"
            style="display: block"
            transform="matrix(-0.9023399949073792,0,0,0.9023399949073792,486.9990234375,25.000961303710938)"
            opacity="1"
          >
            <g
              style="display: block"
              transform="matrix(0.9999975562095642,0,0,0.9999975562095642,256,255.9996795654297)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,182,237)"
                  fill-opacity="1"
                  d=" M-2.5,-182.5 C-2.5,-182.5 -54.5,-162.5 -54.5,-162.5 C-54.5,-162.5 -44,-89.25 -44,-89.25 C-44,-89.25 -2.75,-73.75 -2.75,-73.75 C-2.75,-73.75 38,-88.75 38,-88.75 C38,-88.75 49,-163 49,-163 C49,-163 -2.5,-182.5 -2.5,-182.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.5,-182.5 C-2.5,-182.5 -54.5,-162.5 -54.5,-162.5 C-54.5,-162.5 -44,-89.25 -44,-89.25 C-44,-89.25 -2.75,-73.75 -2.75,-73.75 C-2.75,-73.75 38,-88.75 38,-88.75 C38,-88.75 49,-163 49,-163 C49,-163 -2.5,-182.5 -2.5,-182.5z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,182,237)"
                  fill-opacity="1"
                  d=" M-2.5,-182.5 C-2.5,-182.5 -54.5,-162.5 -54.5,-162.5 C-54.5,-162.5 -44,-89.25 -44,-89.25 C-44,-89.25 -2.75,-73.75 -2.75,-73.75 C-2.75,-73.75 38,-88.75 38,-88.75 C38,-88.75 49,-163 49,-163 C49,-163 -2.5,-182.5 -2.5,-182.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.5,-182.5 C-2.5,-182.5 -54.5,-162.5 -54.5,-162.5 C-54.5,-162.5 -44,-89.25 -44,-89.25 C-44,-89.25 -2.75,-73.75 -2.75,-73.75 C-2.75,-73.75 38,-88.75 38,-88.75 C38,-88.75 49,-163 49,-163 C49,-163 -2.5,-182.5 -2.5,-182.5z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999975562095642,0,0,0.9999975562095642,256,255.9996795654297)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(124,214,251)"
                  fill-opacity="1"
                  d=" M-2.75,-143 C-2.75,-143 -54.5,-162.5 -54.5,-162.5 C-54.5,-162.5 -44,-89.25 -44,-89.25 C-44,-89.25 -2.75,-73.75 -2.75,-73.75 C-2.75,-73.75 38,-88.75 38,-88.75 C38,-88.75 49,-163 49,-163 C49,-163 -2.75,-143 -2.75,-143z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.75,-143 C-2.75,-143 -54.5,-162.5 -54.5,-162.5 C-54.5,-162.5 -44,-89.25 -44,-89.25 C-44,-89.25 -2.75,-73.75 -2.75,-73.75 C-2.75,-73.75 38,-88.75 38,-88.75 C38,-88.75 49,-163 49,-163 C49,-163 -2.75,-143 -2.75,-143z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999975562095642,0,0,0.9999975562095642,256,255.9996795654297)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-2.75,-143 C-2.75,-143 -54.5,-162.5 -54.5,-162.5 C-54.5,-162.5 -44,-89.25 -44,-89.25 C-44,-89.25 -2.75,-73.75 -2.75,-73.75 C-2.75,-73.75 38,-88.75 38,-88.75 C38,-88.75 49,-163 49,-163 C49,-163 -2.75,-143 -2.75,-143z M-2.75,-143 C-2.75,-143 -54.5,-162.5 -54.5,-162.5 C-54.5,-162.5 -44,-89.25 -44,-89.25 C-44,-89.25 -2.75,-73.75 -2.75,-73.75 C-2.75,-73.75 38,-88.75 38,-88.75 C38,-88.75 49,-163 49,-163 C49,-163 -2.75,-143 -2.75,-143z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.75,-143 C-2.75,-143 -54.5,-162.5 -54.5,-162.5 C-54.5,-162.5 -44,-89.25 -44,-89.25 C-44,-89.25 -2.75,-73.75 -2.75,-73.75 C-2.75,-73.75 38,-88.75 38,-88.75 C38,-88.75 49,-163 49,-163 C49,-163 -2.75,-143 -2.75,-143z M-2.75,-143 C-2.75,-143 -54.5,-162.5 -54.5,-162.5 C-54.5,-162.5 -44,-89.25 -44,-89.25 C-44,-89.25 -2.75,-73.75 -2.75,-73.75 C-2.75,-73.75 38,-88.75 38,-88.75 C38,-88.75 49,-163 49,-163 C49,-163 -2.75,-143 -2.75,-143z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999975562095642,0,0,0.9999975562095642,256,255.9996795654297)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="0.2"
                  d=" M-2.75,-143 C-2.75,-143 -54.5,-162.5 -54.5,-162.5 C-54.5,-162.5 -44,-89.25 -44,-89.25 C-44,-89.25 -2.75,-73.75 -2.75,-73.75 C-2.75,-73.75 -2.75,-143 -2.75,-143z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.75,-143 C-2.75,-143 -54.5,-162.5 -54.5,-162.5 C-54.5,-162.5 -44,-89.25 -44,-89.25 C-44,-89.25 -2.75,-73.75 -2.75,-73.75 C-2.75,-73.75 -2.75,-143 -2.75,-143z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(84,183,238)"
                  fill-opacity="1"
                  d=" M47.4379997253418,-163.125 C47.4379997253418,-163.125 -3.375,-143.875 -3.375,-143.875 C-3.375,-143.875 -2.75,-73.5 -2.75,-73.5 C-2.75,-73.5 38.5,-58 38.5,-58 C38.5,-58 79.25,-73.5 79.25,-73.5 C79.25,-73.5 100.25,-142.75 100.25,-142.75 C100.25,-142.75 47.4379997253418,-163.125 47.4379997253418,-163.125z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M47.4379997253418,-163.125 C47.4379997253418,-163.125 -3.375,-143.875 -3.375,-143.875 C-3.375,-143.875 -2.75,-73.5 -2.75,-73.5 C-2.75,-73.5 38.5,-58 38.5,-58 C38.5,-58 79.25,-73.5 79.25,-73.5 C79.25,-73.5 100.25,-142.75 100.25,-142.75 C100.25,-142.75 47.4379997253418,-163.125 47.4379997253418,-163.125z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(84,183,238)"
                  fill-opacity="1"
                  d=" M47.4379997253418,-163.125 C47.4379997253418,-163.125 -3.375,-143.875 -3.375,-143.875 C-3.375,-143.875 -2.75,-73.5 -2.75,-73.5 C-2.75,-73.5 38.5,-58 38.5,-58 C38.5,-58 79.25,-73.5 79.25,-73.5 C79.25,-73.5 100.25,-142.75 100.25,-142.75 C100.25,-142.75 47.4379997253418,-163.125 47.4379997253418,-163.125z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M47.4379997253418,-163.125 C47.4379997253418,-163.125 -3.375,-143.875 -3.375,-143.875 C-3.375,-143.875 -2.75,-73.5 -2.75,-73.5 C-2.75,-73.5 38.5,-58 38.5,-58 C38.5,-58 79.25,-73.5 79.25,-73.5 C79.25,-73.5 100.25,-142.75 100.25,-142.75 C100.25,-142.75 47.4379997253418,-163.125 47.4379997253418,-163.125z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,-0.25)">
                <path
                  fill="rgb(123,208,251)"
                  fill-opacity="1"
                  d=" M48.75,-123.25 C48.75,-123.25 38.5,-58 38.5,-58 C38.5,-58 79.25,-73.5 79.25,-73.5 C79.25,-73.5 100.25,-142.75 100.25,-142.75 C100.25,-142.75 48.75,-123.25 48.75,-123.25z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M48.75,-123.25 C48.75,-123.25 38.5,-58 38.5,-58 C38.5,-58 79.25,-73.5 79.25,-73.5 C79.25,-73.5 100.25,-142.75 100.25,-142.75 C100.25,-142.75 48.75,-123.25 48.75,-123.25z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,-0.25)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M48.75,-123.25 C48.75,-123.25 38.5,-58 38.5,-58 C38.5,-58 79.25,-73.5 79.25,-73.5 C79.25,-73.5 100.25,-142.75 100.25,-142.75 C100.25,-142.75 48.75,-123.25 48.75,-123.25z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M48.75,-123.25 C48.75,-123.25 38.5,-58 38.5,-58 C38.5,-58 79.25,-73.5 79.25,-73.5 C79.25,-73.5 100.25,-142.75 100.25,-142.75 C100.25,-142.75 48.75,-123.25 48.75,-123.25z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-3,-142.75 C-3,-142.75 -2.75,-73.5 -2.75,-73.5 C-2.75,-73.5 38.5,-58 38.5,-58 C38.5,-58 49,-123.75 49,-123.75 C49,-123.75 -3,-142.75 -3,-142.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3,-142.75 C-3,-142.75 -2.75,-73.5 -2.75,-73.5 C-2.75,-73.5 38.5,-58 38.5,-58 C38.5,-58 49,-123.75 49,-123.75 C49,-123.75 -3,-142.75 -3,-142.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(84,182,237)"
                  fill-opacity="1"
                  d=" M-53.625,-163 C-53.625,-163 -106.25,-143 -106.25,-143 C-106.25,-143 -85.5,-73.5 -85.5,-73.5 C-85.5,-73.5 -44.25,-58 -44.25,-58 C-44.25,-58 -2.75,-74 -2.75,-74 C-2.75,-74 -2.25,-143.5 -2.25,-143.5 C-2.25,-143.5 -53.625,-163 -53.625,-163z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-53.625,-163 C-53.625,-163 -106.25,-143 -106.25,-143 C-106.25,-143 -85.5,-73.5 -85.5,-73.5 C-85.5,-73.5 -44.25,-58 -44.25,-58 C-44.25,-58 -2.75,-74 -2.75,-74 C-2.75,-74 -2.25,-143.5 -2.25,-143.5 C-2.25,-143.5 -53.625,-163 -53.625,-163z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(84,182,237)"
                  fill-opacity="1"
                  d=" M-53.625,-163 C-53.625,-163 -106.25,-143 -106.25,-143 C-106.25,-143 -85.5,-73.5 -85.5,-73.5 C-85.5,-73.5 -44.25,-58 -44.25,-58 C-44.25,-58 -2.75,-74 -2.75,-74 C-2.75,-74 -2.25,-143.5 -2.25,-143.5 C-2.25,-143.5 -53.625,-163 -53.625,-163z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-53.625,-163 C-53.625,-163 -106.25,-143 -106.25,-143 C-106.25,-143 -85.5,-73.5 -85.5,-73.5 C-85.5,-73.5 -44.25,-58 -44.25,-58 C-44.25,-58 -2.75,-74 -2.75,-74 C-2.75,-74 -2.25,-143.5 -2.25,-143.5 C-2.25,-143.5 -53.625,-163 -53.625,-163z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,36,93)"
                  fill-opacity="1"
                  d=" M-54.5,-123.5 C-54.5,-123.5 -44.25,-58 -44.25,-58 C-44.25,-58 -2.75,-74 -2.75,-74 C-2.75,-74 -2.25,-143.5 -2.25,-143.5 C-2.25,-143.5 -54.5,-123.5 -54.5,-123.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-54.5,-123.5 C-54.5,-123.5 -44.25,-58 -44.25,-58 C-44.25,-58 -2.75,-74 -2.75,-74 C-2.75,-74 -2.25,-143.5 -2.25,-143.5 C-2.25,-143.5 -54.5,-123.5 -54.5,-123.5z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(125,188,223)"
                  fill-opacity="1"
                  d=" M-2.8289999961853027,-73.91899871826172 C-2.8289999961853027,-73.91899871826172 -3.00600004196167,-74.01000213623047 -3.00600004196167,-74.01000213623047 C-3.00600004196167,-74.01000213623047 -2.75,-74 -2.75,-74 C-2.75,-74 -2.8239998817443848,-73.85700225830078 -2.8239998817443848,-73.85700225830078 C-2.8239998817443848,-73.85700225830078 -2.88700008392334,-74.16400146484375 -2.88700008392334,-74.16400146484375 C-2.88700008392334,-74.16400146484375 -2.8269999027252197,-74.09400177001953 -2.8269999027252197,-74.09400177001953 C-2.8269999027252197,-74.09400177001953 -2.8289999961853027,-73.91899871826172 -2.8289999961853027,-73.91899871826172z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.8289999961853027,-73.91899871826172 C-2.8289999961853027,-73.91899871826172 -3.00600004196167,-74.01000213623047 -3.00600004196167,-74.01000213623047 C-3.00600004196167,-74.01000213623047 -2.75,-74 -2.75,-74 C-2.75,-74 -2.8239998817443848,-73.85700225830078 -2.8239998817443848,-73.85700225830078 C-2.8239998817443848,-73.85700225830078 -2.88700008392334,-74.16400146484375 -2.88700008392334,-74.16400146484375 C-2.88700008392334,-74.16400146484375 -2.8269999027252197,-74.09400177001953 -2.8269999027252197,-74.09400177001953 C-2.8269999027252197,-74.09400177001953 -2.8289999961853027,-73.91899871826172 -2.8289999961853027,-73.91899871826172z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(58,111,163)"
                  fill-opacity="1"
                  d=" M-106.25,-143 C-106.25,-143 -85.5,-73.5 -85.5,-73.5 C-85.5,-73.5 -44.25,-58 -44.25,-58 C-44.25,-58 -54,-123.5 -54,-123.5 C-54,-123.5 -106.25,-143 -106.25,-143z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-106.25,-143 C-106.25,-143 -85.5,-73.5 -85.5,-73.5 C-85.5,-73.5 -44.25,-58 -44.25,-58 C-44.25,-58 -54,-123.5 -54,-123.5 C-54,-123.5 -106.25,-143 -106.25,-143z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-106.25,-143 C-106.25,-143 -85.5,-73.5 -85.5,-73.5 C-85.5,-73.5 -44.25,-58 -44.25,-58 C-44.25,-58 -54,-123.5 -54,-123.5 C-54,-123.5 -106.25,-143 -106.25,-143z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-106.25,-143 C-106.25,-143 -85.5,-73.5 -85.5,-73.5 C-85.5,-73.5 -44.25,-58 -44.25,-58 C-44.25,-58 -54,-123.5 -54,-123.5 C-54,-123.5 -106.25,-143 -106.25,-143z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,182,237)"
                  fill-opacity="1"
                  d=" M-2.875,-144 C-2.875,-144 -55.125,-124 -55.125,-124 C-55.125,-124 -44.5,-58 -44.5,-58 C-44.5,-58 -3.25,-42.5 -3.25,-42.5 C-3.25,-42.5 38.5,-58.25 38.5,-58.25 C38.5,-58.25 49.375,-124.25 49.375,-124.25 C49.375,-124.25 -2.875,-144 -2.875,-144z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.875,-144 C-2.875,-144 -55.125,-124 -55.125,-124 C-55.125,-124 -44.5,-58 -44.5,-58 C-44.5,-58 -3.25,-42.5 -3.25,-42.5 C-3.25,-42.5 38.5,-58.25 38.5,-58.25 C38.5,-58.25 49.375,-124.25 49.375,-124.25 C49.375,-124.25 -2.875,-144 -2.875,-144z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,182,237)"
                  fill-opacity="1"
                  d=" M-2.875,-144 C-2.875,-144 -55.125,-124 -55.125,-124 C-55.125,-124 -44.5,-58 -44.5,-58 C-44.5,-58 -3.25,-42.5 -3.25,-42.5 C-3.25,-42.5 38.5,-58.25 38.5,-58.25 C38.5,-58.25 49.375,-124.25 49.375,-124.25 C49.375,-124.25 -2.875,-144 -2.875,-144z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.875,-144 C-2.875,-144 -55.125,-124 -55.125,-124 C-55.125,-124 -44.5,-58 -44.5,-58 C-44.5,-58 -3.25,-42.5 -3.25,-42.5 C-3.25,-42.5 38.5,-58.25 38.5,-58.25 C38.5,-58.25 49.375,-124.25 49.375,-124.25 C49.375,-124.25 -2.875,-144 -2.875,-144z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(127,206,248)"
                  fill-opacity="1"
                  d=" M-2.625,-102.75 C-2.625,-102.75 -55,-123.25 -55,-123.25 C-55,-123.25 -44.5,-58 -44.5,-58 C-44.5,-58 -3.25,-42.5 -3.25,-42.5 C-3.25,-42.5 38.5,-58.25 38.5,-58.25 C38.5,-58.25 48.75,-123 48.75,-123 C48.75,-123 -2.625,-102.75 -2.625,-102.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.625,-102.75 C-2.625,-102.75 -55,-123.25 -55,-123.25 C-55,-123.25 -44.5,-58 -44.5,-58 C-44.5,-58 -3.25,-42.5 -3.25,-42.5 C-3.25,-42.5 38.5,-58.25 38.5,-58.25 C38.5,-58.25 48.75,-123 48.75,-123 C48.75,-123 -2.625,-102.75 -2.625,-102.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(33,41,101)"
                  fill-opacity="1"
                  d=" M-2.75,-103.5 C-2.75,-103.5 -55,-123.25 -55,-123.25 C-55,-123.25 -44.5,-58 -44.5,-58 C-44.5,-58 -28.875,-52.12900161743164 -28.875,-52.12900161743164 C-28.875,-52.12900161743164 -17.621000289916992,-47.900001525878906 -17.621000289916992,-47.900001525878906 C-17.621000289916992,-47.900001525878906 -3.25,-42.5 -3.25,-42.5 C-3.25,-42.5 5.474999904632568,-45.79100036621094 5.474999904632568,-45.79100036621094 C5.474999904632568,-45.79100036621094 21.514999389648438,-51.84299850463867 21.514999389648438,-51.84299850463867 C21.514999389648438,-51.84299850463867 38.5,-58.25 38.5,-58.25 C38.5,-58.25 48.75,-123 48.75,-123 C48.75,-123 -2.75,-103.5 -2.75,-103.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.75,-103.5 C-2.75,-103.5 -55,-123.25 -55,-123.25 C-55,-123.25 -44.5,-58 -44.5,-58 C-44.5,-58 -28.875,-52.12900161743164 -28.875,-52.12900161743164 C-28.875,-52.12900161743164 -17.621000289916992,-47.900001525878906 -17.621000289916992,-47.900001525878906 C-17.621000289916992,-47.900001525878906 -3.25,-42.5 -3.25,-42.5 C-3.25,-42.5 5.474999904632568,-45.79100036621094 5.474999904632568,-45.79100036621094 C5.474999904632568,-45.79100036621094 21.514999389648438,-51.84299850463867 21.514999389648438,-51.84299850463867 C21.514999389648438,-51.84299850463867 38.5,-58.25 38.5,-58.25 C38.5,-58.25 48.75,-123 48.75,-123 C48.75,-123 -2.75,-103.5 -2.75,-103.5z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(0,40,133)"
                  fill-opacity="0.35000000000000003"
                  d=" M-3,-103.2249984741211 C-3,-103.2249984741211 -55,-123.25 -55,-123.25 C-55,-123.25 -44.5,-58 -44.5,-58 C-44.5,-58 -3.25,-42.5 -3.25,-42.5 C-3.25,-42.5 -3,-103.2249984741211 -3,-103.2249984741211z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3,-103.2249984741211 C-3,-103.2249984741211 -55,-123.25 -55,-123.25 C-55,-123.25 -44.5,-58 -44.5,-58 C-44.5,-58 -3.25,-42.5 -3.25,-42.5 C-3.25,-42.5 -3,-103.2249984741211 -3,-103.2249984741211z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(84,183,238)"
                  fill-opacity="1"
                  d=" M99,-143.25 C99,-143.25 48.5,-124.125 48.5,-124.125 C48.5,-124.125 38,-58.25 38,-58.25 C38,-58.25 79.25,-42.25 79.25,-42.25 C79.25,-42.25 120.75,-57.75 120.75,-57.75 C120.75,-57.75 152.25,-123.75 152.25,-123.75 C152.25,-123.75 99,-143.25 99,-143.25z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M99,-143.25 C99,-143.25 48.5,-124.125 48.5,-124.125 C48.5,-124.125 38,-58.25 38,-58.25 C38,-58.25 79.25,-42.25 79.25,-42.25 C79.25,-42.25 120.75,-57.75 120.75,-57.75 C120.75,-57.75 152.25,-123.75 152.25,-123.75 C152.25,-123.75 99,-143.25 99,-143.25z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(84,183,238)"
                  fill-opacity="1"
                  d=" M99,-143.25 C99,-143.25 48.5,-124.125 48.5,-124.125 C48.5,-124.125 38,-58.25 38,-58.25 C38,-58.25 79.25,-42.25 79.25,-42.25 C79.25,-42.25 120.75,-57.75 120.75,-57.75 C120.75,-57.75 152.25,-123.75 152.25,-123.75 C152.25,-123.75 99,-143.25 99,-143.25z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M99,-143.25 C99,-143.25 48.5,-124.125 48.5,-124.125 C48.5,-124.125 38,-58.25 38,-58.25 C38,-58.25 79.25,-42.25 79.25,-42.25 C79.25,-42.25 120.75,-57.75 120.75,-57.75 C120.75,-57.75 152.25,-123.75 152.25,-123.75 C152.25,-123.75 99,-143.25 99,-143.25z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(58,119,171)"
                  fill-opacity="1"
                  d=" M100.5,-104.25 C100.5,-104.25 79.25,-42.25 79.25,-42.25 C79.25,-42.25 120.75,-57.75 120.75,-57.75 C120.75,-57.75 152.25,-123.75 152.25,-123.75 C152.25,-123.75 100.5,-104.25 100.5,-104.25z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M100.5,-104.25 C100.5,-104.25 79.25,-42.25 79.25,-42.25 C79.25,-42.25 120.75,-57.75 120.75,-57.75 C120.75,-57.75 152.25,-123.75 152.25,-123.75 C152.25,-123.75 100.5,-104.25 100.5,-104.25z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M100.5,-104.25 C100.5,-104.25 79.25,-42.25 79.25,-42.25 C79.25,-42.25 120.75,-57.75 120.75,-57.75 C120.75,-57.75 152.25,-123.75 152.25,-123.75 C152.25,-123.75 100.5,-104.25 100.5,-104.25z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M100.5,-104.25 C100.5,-104.25 79.25,-42.25 79.25,-42.25 C79.25,-42.25 120.75,-57.75 120.75,-57.75 C120.75,-57.75 152.25,-123.75 152.25,-123.75 C152.25,-123.75 100.5,-104.25 100.5,-104.25z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M100.25,-103 C100.25,-103 49,-124 49,-124 C49,-124 38,-58.25 38,-58.25 C38,-58.25 79.25,-42.25 79.25,-42.25 C79.25,-42.25 100.25,-103 100.25,-103z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M100.25,-103 C100.25,-103 49,-124 49,-124 C49,-124 38,-58.25 38,-58.25 C38,-58.25 79.25,-42.25 79.25,-42.25 C79.25,-42.25 100.25,-103 100.25,-103z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,182,237)"
                  fill-opacity="1"
                  d=" M-105.5,-143.75 C-105.5,-143.75 -158,-123.5 -158,-123.5 C-158,-123.5 -126.5,-57.25 -126.5,-57.25 C-126.5,-57.25 -86.25,-41.5 -86.25,-41.5 C-86.25,-41.5 -43.75,-58.25 -43.75,-58.25 C-43.75,-58.25 -54,-124.5 -54,-124.5 C-54,-124.5 -105.5,-143.75 -105.5,-143.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-105.5,-143.75 C-105.5,-143.75 -158,-123.5 -158,-123.5 C-158,-123.5 -126.5,-57.25 -126.5,-57.25 C-126.5,-57.25 -86.25,-41.5 -86.25,-41.5 C-86.25,-41.5 -43.75,-58.25 -43.75,-58.25 C-43.75,-58.25 -54,-124.5 -54,-124.5 C-54,-124.5 -105.5,-143.75 -105.5,-143.75z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,182,237)"
                  fill-opacity="1"
                  d=" M-105.5,-143.75 C-105.5,-143.75 -158,-123.5 -158,-123.5 C-158,-123.5 -126.5,-57.25 -126.5,-57.25 C-126.5,-57.25 -86.25,-41.5 -86.25,-41.5 C-86.25,-41.5 -43.75,-58.25 -43.75,-58.25 C-43.75,-58.25 -54,-124.5 -54,-124.5 C-54,-124.5 -105.5,-143.75 -105.5,-143.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-105.5,-143.75 C-105.5,-143.75 -158,-123.5 -158,-123.5 C-158,-123.5 -126.5,-57.25 -126.5,-57.25 C-126.5,-57.25 -86.25,-41.5 -86.25,-41.5 C-86.25,-41.5 -43.75,-58.25 -43.75,-58.25 C-43.75,-58.25 -54,-124.5 -54,-124.5 C-54,-124.5 -105.5,-143.75 -105.5,-143.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(47,82,132)"
                  fill-opacity="1"
                  d=" M-106.25,-103.75 C-106.25,-103.75 -158,-123.5 -158,-123.5 C-158,-123.5 -126.5,-57.25 -126.5,-57.25 C-126.5,-57.25 -86.25,-41.5 -86.25,-41.5 C-86.25,-41.5 -106.25,-103.75 -106.25,-103.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-106.25,-103.75 C-106.25,-103.75 -158,-123.5 -158,-123.5 C-158,-123.5 -126.5,-57.25 -126.5,-57.25 C-126.5,-57.25 -86.25,-41.5 -86.25,-41.5 C-86.25,-41.5 -106.25,-103.75 -106.25,-103.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-106.25,-103.75 C-106.25,-103.75 -158,-123.5 -158,-123.5 C-158,-123.5 -126.5,-57.25 -126.5,-57.25 C-126.5,-57.25 -86.25,-41.5 -86.25,-41.5 C-86.25,-41.5 -106.25,-103.75 -106.25,-103.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-106.25,-103.75 C-106.25,-103.75 -158,-123.5 -158,-123.5 C-158,-123.5 -126.5,-57.25 -126.5,-57.25 C-126.5,-57.25 -86.25,-41.5 -86.25,-41.5 C-86.25,-41.5 -106.25,-103.75 -106.25,-103.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(127,221,249)"
                  fill-opacity="1"
                  d=" M-106.25,-103.75 C-106.25,-103.75 -86.25,-41.5 -86.25,-41.5 C-86.25,-41.5 -43.75,-58.25 -43.75,-58.25 C-43.75,-58.25 -55,-123.25 -55,-123.25 C-55,-123.25 -106.25,-103.75 -106.25,-103.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-106.25,-103.75 C-106.25,-103.75 -86.25,-41.5 -86.25,-41.5 C-86.25,-41.5 -43.75,-58.25 -43.75,-58.25 C-43.75,-58.25 -55,-123.25 -55,-123.25 C-55,-123.25 -106.25,-103.75 -106.25,-103.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-106.25,-103.75 C-106.25,-103.75 -86.25,-41.5 -86.25,-41.5 C-86.25,-41.5 -43.75,-58.25 -43.75,-58.25 C-43.75,-58.25 -55,-123.25 -55,-123.25 C-55,-123.25 -106.25,-103.75 -106.25,-103.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-106.25,-103.75 C-106.25,-103.75 -86.25,-41.5 -86.25,-41.5 C-86.25,-41.5 -43.75,-58.25 -43.75,-58.25 C-43.75,-58.25 -55,-123.25 -55,-123.25 C-55,-123.25 -106.25,-103.75 -106.25,-103.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,200)"
                  fill-opacity="1"
                  d=" M-3.375,127.875 C-3.375,127.875 -43.875,144.25 -43.875,144.25 C-43.875,144.25 -2.75,206.25 -2.75,206.25 C-2.75,206.25 37.875,144 37.875,144 C37.875,144 -3.375,127.875 -3.375,127.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.375,127.875 C-3.375,127.875 -43.875,144.25 -43.875,144.25 C-43.875,144.25 -2.75,206.25 -2.75,206.25 C-2.75,206.25 37.875,144 37.875,144 C37.875,144 -3.375,127.875 -3.375,127.875z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,200)"
                  fill-opacity="1"
                  d=" M-3.375,127.875 C-3.375,127.875 -43.875,144.25 -43.875,144.25 C-43.875,144.25 -2.75,206.25 -2.75,206.25 C-2.75,206.25 37.875,144 37.875,144 C37.875,144 -3.375,127.875 -3.375,127.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.375,127.875 C-3.375,127.875 -43.875,144.25 -43.875,144.25 C-43.875,144.25 -2.75,206.25 -2.75,206.25 C-2.75,206.25 37.875,144 37.875,144 C37.875,144 -3.375,127.875 -3.375,127.875z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(51,110,170)"
                  fill-opacity="1"
                  d=" M-43.875,144.25 C-43.875,144.25 -2.75,206.25 -2.75,206.25 C-2.75,206.25 -2.875,159.875 -2.875,159.875 C-2.875,159.875 -43.875,144.25 -43.875,144.25z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-43.875,144.25 C-43.875,144.25 -2.75,206.25 -2.75,206.25 C-2.75,206.25 -2.875,159.875 -2.875,159.875 C-2.875,159.875 -43.875,144.25 -43.875,144.25z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(33,50,111)"
                  fill-opacity="1"
                  d=" M-3.375,127.875 C-3.375,127.875 -43.875,144.25 -43.875,144.25 C-43.875,144.25 -2.75,160 -2.75,160 C-2.75,160 37.875,144 37.875,144 C37.875,144 -3.375,127.875 -3.375,127.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.375,127.875 C-3.375,127.875 -43.875,144.25 -43.875,144.25 C-43.875,144.25 -2.75,160 -2.75,160 C-2.75,160 37.875,144 37.875,144 C37.875,144 -3.375,127.875 -3.375,127.875z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,200)"
                  fill-opacity="1"
                  d=" M38.25,66.125 C38.25,66.125 -3.75,82.75 -3.75,82.75 C-3.75,82.75 -3.75,143.75 -3.75,143.75 C-3.75,143.75 17.312000274658203,153.06199645996094 17.312000274658203,153.06199645996094 C17.312000274658203,153.06199645996094 37.6879997253418,145 37.6879997253418,145 C37.6879997253418,145 79,82.125 79,82.125 C79,82.125 38.25,66.125 38.25,66.125z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M38.25,66.125 C38.25,66.125 -3.75,82.75 -3.75,82.75 C-3.75,82.75 -3.75,143.75 -3.75,143.75 C-3.75,143.75 17.312000274658203,153.06199645996094 17.312000274658203,153.06199645996094 C17.312000274658203,153.06199645996094 37.6879997253418,145 37.6879997253418,145 C37.6879997253418,145 79,82.125 79,82.125 C79,82.125 38.25,66.125 38.25,66.125z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,200)"
                  fill-opacity="1"
                  d=" M38.25,66.125 C38.25,66.125 -3.75,82.75 -3.75,82.75 C-3.75,82.75 -3.75,143.75 -3.75,143.75 C-3.75,143.75 17.312000274658203,153.06199645996094 17.312000274658203,153.06199645996094 C17.312000274658203,153.06199645996094 37.6879997253418,145 37.6879997253418,145 C37.6879997253418,145 79,82.125 79,82.125 C79,82.125 38.25,66.125 38.25,66.125z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M38.25,66.125 C38.25,66.125 -3.75,82.75 -3.75,82.75 C-3.75,82.75 -3.75,143.75 -3.75,143.75 C-3.75,143.75 17.312000274658203,153.06199645996094 17.312000274658203,153.06199645996094 C17.312000274658203,153.06199645996094 37.6879997253418,145 37.6879997253418,145 C37.6879997253418,145 79,82.125 79,82.125 C79,82.125 38.25,66.125 38.25,66.125z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-3.75,82.75 C-3.75,82.75 -3.75,143.75 -3.75,143.75 C-3.75,143.75 16.25,151.875 16.25,151.875 C16.25,151.875 37,97.625 37,97.625 C37,97.625 -3.75,82.75 -3.75,82.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.75,82.75 C-3.75,82.75 -3.75,143.75 -3.75,143.75 C-3.75,143.75 16.25,151.875 16.25,151.875 C16.25,151.875 37,97.625 37,97.625 C37,97.625 -3.75,82.75 -3.75,82.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,-0.21799999475479126)">
                <path
                  fill="rgb(48,87,138)"
                  fill-opacity="1"
                  d=" M0.7670000195503235,138.78399658203125 C0.7670000195503235,138.78399658203125 0.7760000228881836,138.71400451660156 0.7760000228881836,138.71400451660156 C0.7760000228881836,138.71400451660156 0.9769999980926514,138.79100036621094 0.9769999980926514,138.79100036621094 C0.9769999980926514,138.79100036621094 0.7799999713897705,138.8040008544922 0.7799999713897705,138.8040008544922 C0.7799999713897705,138.8040008544922 0.7670000195503235,138.78399658203125 0.7670000195503235,138.78399658203125z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M0.7670000195503235,138.78399658203125 C0.7670000195503235,138.78399658203125 0.7760000228881836,138.71400451660156 0.7760000228881836,138.71400451660156 C0.7760000228881836,138.71400451660156 0.9769999980926514,138.79100036621094 0.9769999980926514,138.79100036621094 C0.9769999980926514,138.79100036621094 0.7799999713897705,138.8040008544922 0.7799999713897705,138.8040008544922 C0.7799999713897705,138.8040008544922 0.7670000195503235,138.78399658203125 0.7670000195503235,138.78399658203125z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,37,94)"
                  fill-opacity="1"
                  d=" M38.25,66.125 C38.25,66.125 -3.75,82.75 -3.75,82.75 C-3.75,82.75 36.375,97.375 36.375,97.375 C36.375,97.375 78,81.875 78,81.875 C78,81.875 38.25,66.125 38.25,66.125z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M38.25,66.125 C38.25,66.125 -3.75,82.75 -3.75,82.75 C-3.75,82.75 36.375,97.375 36.375,97.375 C36.375,97.375 78,81.875 78,81.875 C78,81.875 38.25,66.125 38.25,66.125z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,255.99998474121094)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-45,65.875 C-45,65.875 -85.875,81.875 -85.875,81.875 C-85.875,81.875 -43.6879997253418,145 -43.6879997253418,145 C-43.6879997253418,145 -23.812000274658203,152.75 -23.812000274658203,152.75 C-23.812000274658203,152.75 -3.375,143.75 -3.375,143.75 C-3.375,143.75 -3.375,82.25 -3.375,82.25 C-3.375,82.25 -45,65.875 -45,65.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-45,65.875 C-45,65.875 -85.875,81.875 -85.875,81.875 C-85.875,81.875 -43.6879997253418,145 -43.6879997253418,145 C-43.6879997253418,145 -23.812000274658203,152.75 -23.812000274658203,152.75 C-23.812000274658203,152.75 -3.375,143.75 -3.375,143.75 C-3.375,143.75 -3.375,82.25 -3.375,82.25 C-3.375,82.25 -45,65.875 -45,65.875z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-45,65.875 C-45,65.875 -85.875,81.875 -85.875,81.875 C-85.875,81.875 -43.6879997253418,145 -43.6879997253418,145 C-43.6879997253418,145 -23.812000274658203,152.75 -23.812000274658203,152.75 C-23.812000274658203,152.75 -3.375,143.75 -3.375,143.75 C-3.375,143.75 -3.375,82.25 -3.375,82.25 C-3.375,82.25 -45,65.875 -45,65.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-45,65.875 C-45,65.875 -85.875,81.875 -85.875,81.875 C-85.875,81.875 -43.6879997253418,145 -43.6879997253418,145 C-43.6879997253418,145 -23.812000274658203,152.75 -23.812000274658203,152.75 C-23.812000274658203,152.75 -3.375,143.75 -3.375,143.75 C-3.375,143.75 -3.375,82.25 -3.375,82.25 C-3.375,82.25 -45,65.875 -45,65.875z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,255.99998474121094)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(36,38,94)"
                  fill-opacity="1"
                  d=" M-45,65.875 C-45,65.875 -85.375,81.5 -85.375,81.5 C-85.375,81.5 -43.5,97.125 -43.5,97.125 C-43.5,97.125 -3.375,82.25 -3.375,82.25 C-3.375,82.25 -45,65.875 -45,65.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-45,65.875 C-45,65.875 -85.375,81.5 -85.375,81.5 C-85.375,81.5 -43.5,97.125 -43.5,97.125 C-43.5,97.125 -3.375,82.25 -3.375,82.25 C-3.375,82.25 -45,65.875 -45,65.875z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,255.99998474121094)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-44.125,98 C-44.125,98 -24,151.5 -24,151.5 C-24,151.5 -3.375,143.75 -3.375,143.75 C-3.375,143.75 -3.375,82.25 -3.375,82.25 C-3.375,82.25 -44.125,98 -44.125,98z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-44.125,98 C-44.125,98 -24,151.5 -24,151.5 C-24,151.5 -3.375,143.75 -3.375,143.75 C-3.375,143.75 -3.375,82.25 -3.375,82.25 C-3.375,82.25 -44.125,98 -44.125,98z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,255.99998474121094)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(126,207,251)"
                  fill-opacity="1"
                  d=" M-3.140000104904175,143.91299438476562 C-3.140000104904175,143.91299438476562 -3.312999963760376,143.66799926757812 -3.312999963760376,143.66799926757812 C-3.312999963760376,143.66799926757812 -3.375,143.75 -3.375,143.75 C-3.375,143.75 -3.1689999103546143,143.76100158691406 -3.1689999103546143,143.76100158691406 C-3.1689999103546143,143.76100158691406 -2.875999927520752,143.70599365234375 -2.875999927520752,143.70599365234375 C-2.875999927520752,143.70599365234375 -3.140000104904175,143.91299438476562 -3.140000104904175,143.91299438476562z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.140000104904175,143.91299438476562 C-3.140000104904175,143.91299438476562 -3.312999963760376,143.66799926757812 -3.312999963760376,143.66799926757812 C-3.312999963760376,143.66799926757812 -3.375,143.75 -3.375,143.75 C-3.375,143.75 -3.1689999103546143,143.76100158691406 -3.1689999103546143,143.76100158691406 C-3.1689999103546143,143.76100158691406 -2.875999927520752,143.70599365234375 -2.875999927520752,143.70599365234375 C-2.875999927520752,143.70599365234375 -3.140000104904175,143.91299438476562 -3.140000104904175,143.91299438476562z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999986886978149,0,0,0.9999986886978149,256.00006103515625,255.99990844726562)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(84,183,238)"
                  fill-opacity="1"
                  d=" M49.75,-124.875 C49.75,-124.875 -2.75,-104.25 -2.75,-104.25 C-2.75,-104.25 -3,-42.5 -3,-42.5 C-3,-42.5 38.25,-26.75 38.25,-26.75 C38.25,-26.75 80.25,-42.75 80.25,-42.75 C80.25,-42.75 99.25,-104.375 99.25,-104.375 C99.25,-104.375 49.75,-124.875 49.75,-124.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M49.75,-124.875 C49.75,-124.875 -2.75,-104.25 -2.75,-104.25 C-2.75,-104.25 -3,-42.5 -3,-42.5 C-3,-42.5 38.25,-26.75 38.25,-26.75 C38.25,-26.75 80.25,-42.75 80.25,-42.75 C80.25,-42.75 99.25,-104.375 99.25,-104.375 C99.25,-104.375 49.75,-124.875 49.75,-124.875z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(84,183,238)"
                  fill-opacity="1"
                  d=" M49.75,-124.875 C49.75,-124.875 -2.75,-104.25 -2.75,-104.25 C-2.75,-104.25 -3,-42.5 -3,-42.5 C-3,-42.5 38.25,-26.75 38.25,-26.75 C38.25,-26.75 80.25,-42.75 80.25,-42.75 C80.25,-42.75 99.25,-104.375 99.25,-104.375 C99.25,-104.375 49.75,-124.875 49.75,-124.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M49.75,-124.875 C49.75,-124.875 -2.75,-104.25 -2.75,-104.25 C-2.75,-104.25 -3,-42.5 -3,-42.5 C-3,-42.5 38.25,-26.75 38.25,-26.75 C38.25,-26.75 80.25,-42.75 80.25,-42.75 C80.25,-42.75 99.25,-104.375 99.25,-104.375 C99.25,-104.375 49.75,-124.875 49.75,-124.875z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999986886978149,0,0,0.9999986886978149,256.00006103515625,255.99990844726562)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M48.75,-84.125 C48.75,-84.125 -3,-103.375 -3,-103.375 C-3,-103.375 -3,-42.5 -3,-42.5 C-3,-42.5 38.25,-26.75 38.25,-26.75 C38.25,-26.75 48.75,-84.125 48.75,-84.125z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M48.75,-84.125 C48.75,-84.125 -3,-103.375 -3,-103.375 C-3,-103.375 -3,-42.5 -3,-42.5 C-3,-42.5 38.25,-26.75 38.25,-26.75 C38.25,-26.75 48.75,-84.125 48.75,-84.125z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999986886978149,0,0,0.9999986886978149,256.00006103515625,255.99990844726562)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,72,130)"
                  fill-opacity="1"
                  d=" M49,-83.375 C49,-83.375 38.25,-26.75 38.25,-26.75 C38.25,-26.75 80.25,-42.75 80.25,-42.75 C80.25,-42.75 99.75,-102.75 99.75,-102.75 C99.75,-102.75 49,-83.375 49,-83.375z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M49,-83.375 C49,-83.375 38.25,-26.75 38.25,-26.75 C38.25,-26.75 80.25,-42.75 80.25,-42.75 C80.25,-42.75 99.75,-102.75 99.75,-102.75 C99.75,-102.75 49,-83.375 49,-83.375z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999986886978149,0,0,0.9999986886978149,256.00006103515625,255.99990844726562)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M49.125,-83.25 C49.125,-83.25 38.25,-26.75 38.25,-26.75 C38.25,-26.75 80.25,-42.75 80.25,-42.75 C80.25,-42.75 100.25,-103.75 100.25,-103.75 C100.25,-103.75 49.125,-83.25 49.125,-83.25z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M49.125,-83.25 C49.125,-83.25 38.25,-26.75 38.25,-26.75 C38.25,-26.75 80.25,-42.75 80.25,-42.75 C80.25,-42.75 100.25,-103.75 100.25,-103.75 C100.25,-103.75 49.125,-83.25 49.125,-83.25z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.999998927116394,0,0,0.999998927116394,255.99993896484375,255.99990844726562)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(84,181,237)"
                  fill-opacity="1"
                  d=" M-55.125,-124.5 C-55.125,-124.5 -106.75,-104.5 -106.75,-104.5 C-106.75,-104.5 -86,-42 -86,-42 C-86,-42 -44.5,-26.25 -44.5,-26.25 C-44.5,-26.25 -2.75,-42.5 -2.75,-42.5 C-2.75,-42.5 -2.75,-103.5 -2.75,-103.5 C-2.75,-103.5 -55.125,-124.5 -55.125,-124.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-55.125,-124.5 C-55.125,-124.5 -106.75,-104.5 -106.75,-104.5 C-106.75,-104.5 -86,-42 -86,-42 C-86,-42 -44.5,-26.25 -44.5,-26.25 C-44.5,-26.25 -2.75,-42.5 -2.75,-42.5 C-2.75,-42.5 -2.75,-103.5 -2.75,-103.5 C-2.75,-103.5 -55.125,-124.5 -55.125,-124.5z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(84,181,237)"
                  fill-opacity="1"
                  d=" M-55.125,-124.5 C-55.125,-124.5 -106.75,-104.5 -106.75,-104.5 C-106.75,-104.5 -86,-42 -86,-42 C-86,-42 -44.5,-26.25 -44.5,-26.25 C-44.5,-26.25 -2.75,-42.5 -2.75,-42.5 C-2.75,-42.5 -2.75,-103.5 -2.75,-103.5 C-2.75,-103.5 -55.125,-124.5 -55.125,-124.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-55.125,-124.5 C-55.125,-124.5 -106.75,-104.5 -106.75,-104.5 C-106.75,-104.5 -86,-42 -86,-42 C-86,-42 -44.5,-26.25 -44.5,-26.25 C-44.5,-26.25 -2.75,-42.5 -2.75,-42.5 C-2.75,-42.5 -2.75,-103.5 -2.75,-103.5 C-2.75,-103.5 -55.125,-124.5 -55.125,-124.5z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.999998927116394,0,0,0.999998927116394,255.99993896484375,255.99990844726562)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-54.625,-84 C-54.625,-84 -106.5,-103.75 -106.5,-103.75 C-106.5,-103.75 -86,-42 -86,-42 C-86,-42 -44.5,-26.25 -44.5,-26.25 C-44.5,-26.25 -54.625,-84 -54.625,-84z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-54.625,-84 C-54.625,-84 -106.5,-103.75 -106.5,-103.75 C-106.5,-103.75 -86,-42 -86,-42 C-86,-42 -44.5,-26.25 -44.5,-26.25 C-44.5,-26.25 -54.625,-84 -54.625,-84z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.999998927116394,0,0,0.999998927116394,255.99993896484375,255.99990844726562)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-54.5,-83.875 C-54.5,-83.875 -44.5,-26.25 -44.5,-26.25 C-44.5,-26.25 -2.75,-42.5 -2.75,-42.5 C-2.75,-42.5 -2.75,-103.5 -2.75,-103.5 C-2.75,-103.5 -54.5,-83.875 -54.5,-83.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-54.5,-83.875 C-54.5,-83.875 -44.5,-26.25 -44.5,-26.25 C-44.5,-26.25 -2.75,-42.5 -2.75,-42.5 C-2.75,-42.5 -2.75,-103.5 -2.75,-103.5 C-2.75,-103.5 -54.5,-83.875 -54.5,-83.875z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.999998927116394,0,0,0.999998927116394,255.99993896484375,255.99990844726562)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(79,170,230)"
                  fill-opacity="0"
                  d=" M-12.383999824523926,-81.31800079345703 C-12.383999824523926,-81.31800079345703 -13.972000122070312,-70.81300354003906 -13.972000122070312,-70.81300354003906 C-13.972000122070312,-70.81300354003906 -13.135000228881836,-68.24700164794922 -13.135000228881836,-68.24700164794922 C-13.135000228881836,-68.24700164794922 -10.404999732971191,-65.9530029296875 -10.404999732971191,-65.9530029296875 C-10.404999732971191,-65.9530029296875 -8.946999549865723,-66.76599884033203 -8.946999549865723,-66.76599884033203 C-8.946999549865723,-66.76599884033203 -5.261000156402588,-70.06900024414062 -5.261000156402588,-70.06900024414062 C-5.261000156402588,-70.06900024414062 -2.75,-79.14700317382812 -2.75,-79.14700317382812 C-2.75,-79.14700317382812 -2.9739999771118164,-82.86299896240234 -2.9739999771118164,-82.86299896240234 C-2.9739999771118164,-82.86299896240234 -12.383999824523926,-81.31800079345703 -12.383999824523926,-81.31800079345703z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-12.383999824523926,-81.31800079345703 C-12.383999824523926,-81.31800079345703 -13.972000122070312,-70.81300354003906 -13.972000122070312,-70.81300354003906 C-13.972000122070312,-70.81300354003906 -13.135000228881836,-68.24700164794922 -13.135000228881836,-68.24700164794922 C-13.135000228881836,-68.24700164794922 -10.404999732971191,-65.9530029296875 -10.404999732971191,-65.9530029296875 C-10.404999732971191,-65.9530029296875 -8.946999549865723,-66.76599884033203 -8.946999549865723,-66.76599884033203 C-8.946999549865723,-66.76599884033203 -5.261000156402588,-70.06900024414062 -5.261000156402588,-70.06900024414062 C-5.261000156402588,-70.06900024414062 -2.75,-79.14700317382812 -2.75,-79.14700317382812 C-2.75,-79.14700317382812 -2.9739999771118164,-82.86299896240234 -2.9739999771118164,-82.86299896240234 C-2.9739999771118164,-82.86299896240234 -12.383999824523926,-81.31800079345703 -12.383999824523926,-81.31800079345703z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,200)"
                  fill-opacity="1"
                  d=" M79.5,4.125 C79.5,4.125 38.125,20 38.125,20 C38.125,20 24.375,81.5 24.375,81.5 C24.375,81.5 51.875,92.375 51.875,92.375 C51.875,92.375 79.375,82.25 79.375,82.25 C79.375,82.25 120.25,20.25 120.25,20.25 C120.25,20.25 79.5,4.125 79.5,4.125z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M79.5,4.125 C79.5,4.125 38.125,20 38.125,20 C38.125,20 24.375,81.5 24.375,81.5 C24.375,81.5 51.875,92.375 51.875,92.375 C51.875,92.375 79.375,82.25 79.375,82.25 C79.375,82.25 120.25,20.25 120.25,20.25 C120.25,20.25 79.5,4.125 79.5,4.125z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,200)"
                  fill-opacity="1"
                  d=" M79.5,4.125 C79.5,4.125 38.125,20 38.125,20 C38.125,20 24.375,81.5 24.375,81.5 C24.375,81.5 51.875,92.375 51.875,92.375 C51.875,92.375 79.375,82.25 79.375,82.25 C79.375,82.25 120.25,20.25 120.25,20.25 C120.25,20.25 79.5,4.125 79.5,4.125z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M79.5,4.125 C79.5,4.125 38.125,20 38.125,20 C38.125,20 24.375,81.5 24.375,81.5 C24.375,81.5 51.875,92.375 51.875,92.375 C51.875,92.375 79.375,82.25 79.375,82.25 C79.375,82.25 120.25,20.25 120.25,20.25 C120.25,20.25 79.5,4.125 79.5,4.125z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(47,71,118)"
                  fill-opacity="1"
                  d=" M79.5,4.125 C79.5,4.125 38.125,20 38.125,20 C38.125,20 78.5,35.375 78.5,35.375 C78.5,35.375 119.5,20.125 119.5,20.125 C119.5,20.125 79.5,4.125 79.5,4.125z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M79.5,4.125 C79.5,4.125 38.125,20 38.125,20 C38.125,20 78.5,35.375 78.5,35.375 C78.5,35.375 119.5,20.125 119.5,20.125 C119.5,20.125 79.5,4.125 79.5,4.125z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M89.375,8.5 C89.375,8.5 48.875,23.75 48.875,23.75 C48.875,23.75 78.375,35.5 78.375,35.5 C78.375,35.5 119,19.875 119,19.875 C119,19.875 89.375,8.5 89.375,8.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M89.375,8.5 C89.375,8.5 48.875,23.75 48.875,23.75 C48.875,23.75 78.375,35.5 78.375,35.5 C78.375,35.5 119,19.875 119,19.875 C119,19.875 89.375,8.5 89.375,8.5z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M38.125,20 C38.125,20 24.375,81.5 24.375,81.5 C24.375,81.5 51.125,92 51.125,92 C51.125,92 78,36 78,36 C78,36 38.125,20 38.125,20z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M38.125,20 C38.125,20 24.375,81.5 24.375,81.5 C24.375,81.5 51.125,92 51.125,92 C51.125,92 78,36 78,36 C78,36 38.125,20 38.125,20z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(39,77,133)"
                  fill-opacity="0"
                  d=" M28.340999603271484,63.12099838256836 C28.340999603271484,63.12099838256836 24.0939998626709,81.88500213623047 24.0939998626709,81.88500213623047 C24.0939998626709,81.88500213623047 32.66299819946289,84.87200164794922 32.66299819946289,84.87200164794922 C32.66299819946289,84.87200164794922 35.19300079345703,72.7020034790039 35.19300079345703,72.7020034790039 C35.19300079345703,72.7020034790039 33.21699905395508,65.6729965209961 33.21699905395508,65.6729965209961 C33.21699905395508,65.6729965209961 28.340999603271484,63.12099838256836 28.340999603271484,63.12099838256836z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M28.340999603271484,63.12099838256836 C28.340999603271484,63.12099838256836 24.0939998626709,81.88500213623047 24.0939998626709,81.88500213623047 C24.0939998626709,81.88500213623047 32.66299819946289,84.87200164794922 32.66299819946289,84.87200164794922 C32.66299819946289,84.87200164794922 35.19300079345703,72.7020034790039 35.19300079345703,72.7020034790039 C35.19300079345703,72.7020034790039 33.21699905395508,65.6729965209961 33.21699905395508,65.6729965209961 C33.21699905395508,65.6729965209961 28.340999603271484,63.12099838256836 28.340999603271484,63.12099838256836z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-86.125,4.625 C-86.125,4.625 -127,20.125 -127,20.125 C-127,20.125 -86,81.75 -86,81.75 C-86,81.75 -58.75,92.25 -58.75,92.25 C-58.75,92.25 -31,82.25 -31,82.25 C-31,82.25 -45,19.75 -45,19.75 C-45,19.75 -86.125,4.625 -86.125,4.625z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-86.125,4.625 C-86.125,4.625 -127,20.125 -127,20.125 C-127,20.125 -86,81.75 -86,81.75 C-86,81.75 -58.75,92.25 -58.75,92.25 C-58.75,92.25 -31,82.25 -31,82.25 C-31,82.25 -45,19.75 -45,19.75 C-45,19.75 -86.125,4.625 -86.125,4.625z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-86.125,4.625 C-86.125,4.625 -127,20.125 -127,20.125 C-127,20.125 -86,81.75 -86,81.75 C-86,81.75 -58.75,92.25 -58.75,92.25 C-58.75,92.25 -31,82.25 -31,82.25 C-31,82.25 -45,19.75 -45,19.75 C-45,19.75 -86.125,4.625 -86.125,4.625z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-86.125,4.625 C-86.125,4.625 -127,20.125 -127,20.125 C-127,20.125 -86,81.75 -86,81.75 C-86,81.75 -58.75,92.25 -58.75,92.25 C-58.75,92.25 -31,82.25 -31,82.25 C-31,82.25 -45,19.75 -45,19.75 C-45,19.75 -86.125,4.625 -86.125,4.625z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(47,76,122)"
                  fill-opacity="1"
                  d=" M-86.125,4.625 C-86.125,4.625 -127,20.125 -127,20.125 C-127,20.125 -85.125,36 -85.125,36 C-85.125,36 -45,19.75 -45,19.75 C-45,19.75 -86.125,4.625 -86.125,4.625z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-86.125,4.625 C-86.125,4.625 -127,20.125 -127,20.125 C-127,20.125 -85.125,36 -85.125,36 C-85.125,36 -45,19.75 -45,19.75 C-45,19.75 -86.125,4.625 -86.125,4.625z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-95.875,8.375 C-95.875,8.375 -127,20.125 -127,20.125 C-127,20.125 -85.125,35.75 -85.125,35.75 C-85.125,35.75 -55,24 -55,24 C-55,24 -95.875,8.375 -95.875,8.375z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-95.875,8.375 C-95.875,8.375 -127,20.125 -127,20.125 C-127,20.125 -85.125,35.75 -85.125,35.75 C-85.125,35.75 -55,24 -55,24 C-55,24 -95.875,8.375 -95.875,8.375z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-85,35.75 C-85,35.75 -57.875,92.125 -57.875,92.125 C-57.875,92.125 -31,82.25 -31,82.25 C-31,82.25 -45,19.75 -45,19.75 C-45,19.75 -85,35.75 -85,35.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-85,35.75 C-85,35.75 -57.875,92.125 -57.875,92.125 C-57.875,92.125 -31,82.25 -31,82.25 C-31,82.25 -45,19.75 -45,19.75 C-45,19.75 -85,35.75 -85,35.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="0.99"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(127,212,246)"
                  fill-opacity="1"
                  d=" M-31.142000198364258,81.89900207519531 C-31.142000198364258,81.89900207519531 -30.958999633789062,82.30500030517578 -30.958999633789062,82.30500030517578 C-30.958999633789062,82.30500030517578 -31,82.25 -31,82.25 C-31,82.25 -31.093000411987305,82.01799774169922 -31.093000411987305,82.01799774169922 C-31.093000411987305,82.01799774169922 -31.259000778198242,81.82599639892578 -31.259000778198242,81.82599639892578 C-31.259000778198242,81.82599639892578 -31.142000198364258,81.89900207519531 -31.142000198364258,81.89900207519531z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-31.142000198364258,81.89900207519531 C-31.142000198364258,81.89900207519531 -30.958999633789062,82.30500030517578 -30.958999633789062,82.30500030517578 C-30.958999633789062,82.30500030517578 -31,82.25 -31,82.25 C-31,82.25 -31.093000411987305,82.01799774169922 -31.093000411987305,82.01799774169922 C-31.093000411987305,82.01799774169922 -31.259000778198242,81.82599639892578 -31.259000778198242,81.82599639892578 C-31.259000778198242,81.82599639892578 -31.142000198364258,81.89900207519531 -31.142000198364258,81.89900207519531z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,141,200)"
                  fill-opacity="1"
                  d=" M120.75,-57.75 C120.75,-57.75 79.5,-42 79.5,-42 C79.5,-42 58.75,20.25 58.75,20.25 C58.75,20.25 89.75,31.75 89.75,31.75 C89.75,31.75 120,20.75 120,20.75 C120,20.75 161.75,-42.5 161.75,-42.5 C161.75,-42.5 120.75,-57.75 120.75,-57.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M120.75,-57.75 C120.75,-57.75 79.5,-42 79.5,-42 C79.5,-42 58.75,20.25 58.75,20.25 C58.75,20.25 89.75,31.75 89.75,31.75 C89.75,31.75 120,20.75 120,20.75 C120,20.75 161.75,-42.5 161.75,-42.5 C161.75,-42.5 120.75,-57.75 120.75,-57.75z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,141,200)"
                  fill-opacity="1"
                  d=" M120.75,-57.75 C120.75,-57.75 79.5,-42 79.5,-42 C79.5,-42 58.75,20.25 58.75,20.25 C58.75,20.25 89.75,31.75 89.75,31.75 C89.75,31.75 120,20.75 120,20.75 C120,20.75 161.75,-42.5 161.75,-42.5 C161.75,-42.5 120.75,-57.75 120.75,-57.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M120.75,-57.75 C120.75,-57.75 79.5,-42 79.5,-42 C79.5,-42 58.75,20.25 58.75,20.25 C58.75,20.25 89.75,31.75 89.75,31.75 C89.75,31.75 120,20.75 120,20.75 C120,20.75 161.75,-42.5 161.75,-42.5 C161.75,-42.5 120.75,-57.75 120.75,-57.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M79.5,-42 C79.5,-42 58.75,20.25 58.75,20.25 C58.75,20.25 89.75,31.75 89.75,31.75 C89.75,31.75 119.625,-26.5 119.625,-26.5 C119.625,-26.5 79.5,-42 79.5,-42z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M79.5,-42 C79.5,-42 58.75,20.25 58.75,20.25 C58.75,20.25 89.75,31.75 89.75,31.75 C89.75,31.75 119.625,-26.5 119.625,-26.5 C119.625,-26.5 79.5,-42 79.5,-42z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,36,92)"
                  fill-opacity="1"
                  d=" M120.75,-57.75 C120.75,-57.75 79.5,-42 79.5,-42 C79.5,-42 120.56199645996094,-27.125 120.56199645996094,-27.125 C120.56199645996094,-27.125 161.25,-42 161.25,-42 C161.25,-42 120.75,-57.75 120.75,-57.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M120.75,-57.75 C120.75,-57.75 79.5,-42 79.5,-42 C79.5,-42 120.56199645996094,-27.125 120.56199645996094,-27.125 C120.56199645996094,-27.125 161.25,-42 161.25,-42 C161.25,-42 120.75,-57.75 120.75,-57.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,182,237)"
                  fill-opacity="1"
                  d=" M150.875,-124.125 C150.875,-124.125 98.875,-104.25 98.875,-104.25 C98.875,-104.25 79.75,-42.5 79.75,-42.5 C79.75,-42.5 119.75,-26.625 119.75,-26.625 C119.75,-26.625 161.75,-42 161.75,-42 C161.75,-42 203.75,-103.75 203.75,-103.75 C203.75,-103.75 150.875,-124.125 150.875,-124.125z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M150.875,-124.125 C150.875,-124.125 98.875,-104.25 98.875,-104.25 C98.875,-104.25 79.75,-42.5 79.75,-42.5 C79.75,-42.5 119.75,-26.625 119.75,-26.625 C119.75,-26.625 161.75,-42 161.75,-42 C161.75,-42 203.75,-103.75 203.75,-103.75 C203.75,-103.75 150.875,-124.125 150.875,-124.125z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,182,237)"
                  fill-opacity="1"
                  d=" M150.875,-124.125 C150.875,-124.125 98.875,-104.25 98.875,-104.25 C98.875,-104.25 79.75,-42.5 79.75,-42.5 C79.75,-42.5 119.75,-26.625 119.75,-26.625 C119.75,-26.625 161.75,-42 161.75,-42 C161.75,-42 203.75,-103.75 203.75,-103.75 C203.75,-103.75 150.875,-124.125 150.875,-124.125z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M150.875,-124.125 C150.875,-124.125 98.875,-104.25 98.875,-104.25 C98.875,-104.25 79.75,-42.5 79.75,-42.5 C79.75,-42.5 119.75,-26.625 119.75,-26.625 C119.75,-26.625 161.75,-42 161.75,-42 C161.75,-42 203.75,-103.75 203.75,-103.75 C203.75,-103.75 150.875,-124.125 150.875,-124.125z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M100.5,-104.25 C100.5,-104.25 79.75,-42.5 79.75,-42.5 C79.75,-42.5 120.5,-26.75 120.5,-26.75 C120.5,-26.75 152.5,-84 152.5,-84 C152.5,-84 100.5,-104.25 100.5,-104.25z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M100.5,-104.25 C100.5,-104.25 79.75,-42.5 79.75,-42.5 C79.75,-42.5 120.5,-26.75 120.5,-26.75 C120.5,-26.75 152.5,-84 152.5,-84 C152.5,-84 100.5,-104.25 100.5,-104.25z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,171,231)"
                  fill-opacity="1"
                  d=" M100.03199768066406,-104.20500183105469 C100.03199768066406,-104.20500183105469 92.18000030517578,-74.78399658203125 92.18000030517578,-74.78399658203125 C92.18000030517578,-74.78399658203125 91.56800079345703,-74.3030014038086 91.56800079345703,-74.3030014038086 C91.56800079345703,-74.3030014038086 99.93900299072266,-103.6989974975586 99.93900299072266,-103.6989974975586 C99.93900299072266,-103.6989974975586 100.03199768066406,-104.20500183105469 100.03199768066406,-104.20500183105469z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M100.03199768066406,-104.20500183105469 C100.03199768066406,-104.20500183105469 92.18000030517578,-74.78399658203125 92.18000030517578,-74.78399658203125 C92.18000030517578,-74.78399658203125 91.56800079345703,-74.3030014038086 91.56800079345703,-74.3030014038086 C91.56800079345703,-74.3030014038086 99.93900299072266,-103.6989974975586 99.93900299072266,-103.6989974975586 C99.93900299072266,-103.6989974975586 100.03199768066406,-104.20500183105469 100.03199768066406,-104.20500183105469z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,141,201)"
                  fill-opacity="1"
                  d=" M152,-84.125 C152,-84.125 119.875,-25.875 119.875,-25.875 C119.875,-25.875 160.75,-40.75 160.75,-40.75 C160.75,-40.75 203.75,-103.75 203.75,-103.75 C203.75,-103.75 152,-84.125 152,-84.125z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M152,-84.125 C152,-84.125 119.875,-25.875 119.875,-25.875 C119.875,-25.875 160.75,-40.75 160.75,-40.75 C160.75,-40.75 203.75,-103.75 203.75,-103.75 C203.75,-103.75 152,-84.125 152,-84.125z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1.009719967842102,0,0,1.009719967842102,257.13299560546875,256.1239318847656)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-127.125,-57.625 C-127.125,-57.625 -168.37100219726562,-42.61399841308594 -168.37100219726562,-42.61399841308594 C-168.37100219726562,-42.61399841308594 -126.38500213623047,21.114999771118164 -126.38500213623047,21.114999771118164 C-126.38500213623047,21.114999771118164 -96.25599670410156,32.125 -96.25599670410156,32.125 C-96.25599670410156,32.125 -65.125,19.375 -65.125,19.375 C-65.125,19.375 -86.5,-42 -86.5,-42 C-86.5,-42 -127.125,-57.625 -127.125,-57.625z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-127.125,-57.625 C-127.125,-57.625 -168.37100219726562,-42.61399841308594 -168.37100219726562,-42.61399841308594 C-168.37100219726562,-42.61399841308594 -126.38500213623047,21.114999771118164 -126.38500213623047,21.114999771118164 C-126.38500213623047,21.114999771118164 -96.25599670410156,32.125 -96.25599670410156,32.125 C-96.25599670410156,32.125 -65.125,19.375 -65.125,19.375 C-65.125,19.375 -86.5,-42 -86.5,-42 C-86.5,-42 -127.125,-57.625 -127.125,-57.625z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-127.125,-57.625 C-127.125,-57.625 -168.37100219726562,-42.61399841308594 -168.37100219726562,-42.61399841308594 C-168.37100219726562,-42.61399841308594 -126.38500213623047,21.114999771118164 -126.38500213623047,21.114999771118164 C-126.38500213623047,21.114999771118164 -96.25599670410156,32.125 -96.25599670410156,32.125 C-96.25599670410156,32.125 -65.125,19.375 -65.125,19.375 C-65.125,19.375 -86.5,-42 -86.5,-42 C-86.5,-42 -127.125,-57.625 -127.125,-57.625z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-127.125,-57.625 C-127.125,-57.625 -168.37100219726562,-42.61399841308594 -168.37100219726562,-42.61399841308594 C-168.37100219726562,-42.61399841308594 -126.38500213623047,21.114999771118164 -126.38500213623047,21.114999771118164 C-126.38500213623047,21.114999771118164 -96.25599670410156,32.125 -96.25599670410156,32.125 C-96.25599670410156,32.125 -65.125,19.375 -65.125,19.375 C-65.125,19.375 -86.5,-42 -86.5,-42 C-86.5,-42 -127.125,-57.625 -127.125,-57.625z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1.009719967842102,0,0,1.009719967842102,257.13299560546875,256.1239318847656)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-126.63200378417969,-26.298999786376953 C-126.63200378417969,-26.298999786376953 -95.63700103759766,31.381999969482422 -95.63700103759766,31.381999969482422 C-95.63700103759766,31.381999969482422 -65.125,19.375 -65.125,19.375 C-65.125,19.375 -86.5,-42 -86.5,-42 C-86.5,-42 -126.63200378417969,-26.298999786376953 -126.63200378417969,-26.298999786376953z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-126.63200378417969,-26.298999786376953 C-126.63200378417969,-26.298999786376953 -95.63700103759766,31.381999969482422 -95.63700103759766,31.381999969482422 C-95.63700103759766,31.381999969482422 -65.125,19.375 -65.125,19.375 C-65.125,19.375 -86.5,-42 -86.5,-42 C-86.5,-42 -126.63200378417969,-26.298999786376953 -126.63200378417969,-26.298999786376953z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1.009719967842102,0,0,1.009719967842102,257.13299560546875,256.1239318847656)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(106,190,227)"
                  fill-opacity="1"
                  d=" M-65.0979995727539,19.441999435424805 C-65.0979995727539,19.441999435424805 -65.31099700927734,19.270999908447266 -65.31099700927734,19.270999908447266 C-65.31099700927734,19.270999908447266 -65.125,19.375 -65.125,19.375 C-65.125,19.375 -65.0770034790039,19.128000259399414 -65.0770034790039,19.128000259399414 C-65.0770034790039,19.128000259399414 -65.0979995727539,19.441999435424805 -65.0979995727539,19.441999435424805z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-65.0979995727539,19.441999435424805 C-65.0979995727539,19.441999435424805 -65.31099700927734,19.270999908447266 -65.31099700927734,19.270999908447266 C-65.31099700927734,19.270999908447266 -65.125,19.375 -65.125,19.375 C-65.125,19.375 -65.0770034790039,19.128000259399414 -65.0770034790039,19.128000259399414 C-65.0770034790039,19.128000259399414 -65.0979995727539,19.441999435424805 -65.0979995727539,19.441999435424805z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1.009719967842102,0,0,1.009719967842102,257.13299560546875,256.1239318847656)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-127.125,-57.625 C-127.125,-57.625 -167.56700134277344,-42.05699920654297 -167.56700134277344,-42.05699920654297 C-167.56700134277344,-42.05699920654297 -126.26100158691406,-26.670000076293945 -126.26100158691406,-26.670000076293945 C-126.26100158691406,-26.670000076293945 -86.5,-42 -86.5,-42 C-86.5,-42 -127.125,-57.625 -127.125,-57.625z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-127.125,-57.625 C-127.125,-57.625 -167.56700134277344,-42.05699920654297 -167.56700134277344,-42.05699920654297 C-167.56700134277344,-42.05699920654297 -126.26100158691406,-26.670000076293945 -126.26100158691406,-26.670000076293945 C-126.26100158691406,-26.670000076293945 -86.5,-42 -86.5,-42 C-86.5,-42 -127.125,-57.625 -127.125,-57.625z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999974966049194,0,0,0.9999974966049194,255.99998474121094,256.00030517578125)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,200)"
                  fill-opacity="1"
                  d=" M-3.375,82 C-3.375,82 -44.875,98.125 -44.875,98.125 C-44.875,98.125 -24,151.875 -24,151.875 C-24,151.875 -2.875,160.56199645996094 -2.875,160.56199645996094 C-2.875,160.56199645996094 16.687999725341797,153.375 16.687999725341797,153.375 C16.687999725341797,153.375 37.875,97.875 37.875,97.875 C37.875,97.875 -3.375,82 -3.375,82z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.375,82 C-3.375,82 -44.875,98.125 -44.875,98.125 C-44.875,98.125 -24,151.875 -24,151.875 C-24,151.875 -2.875,160.56199645996094 -2.875,160.56199645996094 C-2.875,160.56199645996094 16.687999725341797,153.375 16.687999725341797,153.375 C16.687999725341797,153.375 37.875,97.875 37.875,97.875 C37.875,97.875 -3.375,82 -3.375,82z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,200)"
                  fill-opacity="1"
                  d=" M-3.375,82 C-3.375,82 -44.875,98.125 -44.875,98.125 C-44.875,98.125 -24,151.875 -24,151.875 C-24,151.875 -2.875,160.56199645996094 -2.875,160.56199645996094 C-2.875,160.56199645996094 16.687999725341797,153.375 16.687999725341797,153.375 C16.687999725341797,153.375 37.875,97.875 37.875,97.875 C37.875,97.875 -3.375,82 -3.375,82z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.375,82 C-3.375,82 -44.875,98.125 -44.875,98.125 C-44.875,98.125 -24,151.875 -24,151.875 C-24,151.875 -2.875,160.56199645996094 -2.875,160.56199645996094 C-2.875,160.56199645996094 16.687999725341797,153.375 16.687999725341797,153.375 C16.687999725341797,153.375 37.875,97.875 37.875,97.875 C37.875,97.875 -3.375,82 -3.375,82z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999974966049194,0,0,0.9999974966049194,255.99998474121094,256.00030517578125)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-46.25,96.625 C-46.25,96.625 -24.187999725341797,152.68800354003906 -24.187999725341797,152.68800354003906 C-24.187999725341797,152.68800354003906 -3.062999963760376,161.125 -3.062999963760376,161.125 C-3.062999963760376,161.125 -3.375,112.375 -3.375,112.375 C-3.375,112.375 -46.25,96.625 -46.25,96.625z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-46.25,96.625 C-46.25,96.625 -24.187999725341797,152.68800354003906 -24.187999725341797,152.68800354003906 C-24.187999725341797,152.68800354003906 -3.062999963760376,161.125 -3.062999963760376,161.125 C-3.062999963760376,161.125 -3.375,112.375 -3.375,112.375 C-3.375,112.375 -46.25,96.625 -46.25,96.625z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999974966049194,0,0,0.9999974966049194,255.99998474121094,256.00030517578125)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-3.375,82 C-3.375,82 -44.5,97 -44.5,97 C-44.5,97 -3.125,112.875 -3.125,112.875 C-3.125,112.875 36.75,97.25 36.75,97.25 C36.75,97.25 -3.375,82 -3.375,82z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.375,82 C-3.375,82 -44.5,97 -44.5,97 C-44.5,97 -3.125,112.875 -3.125,112.875 C-3.125,112.875 36.75,97.25 36.75,97.25 C36.75,97.25 -3.375,82 -3.375,82z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999974966049194,0,0,0.9999974966049194,255.99998474121094,256.00030517578125)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(48,72,118)"
                  fill-opacity="1"
                  d=" M-3.375,82 C-3.375,82 -16.125,87.25 -16.125,87.25 C-16.125,87.25 -3.125,92.875 -3.125,92.875 C-3.125,92.875 9.875,87.5 9.875,87.5 C9.875,87.5 -3.375,82 -3.375,82z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.375,82 C-3.375,82 -16.125,87.25 -16.125,87.25 C-16.125,87.25 -3.125,92.875 -3.125,92.875 C-3.125,92.875 9.875,87.5 9.875,87.5 C9.875,87.5 -3.375,82 -3.375,82z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-158,-123.5 C-158,-123.5 -209.5,-104.25 -209.5,-104.25 C-209.5,-104.25 -168.25,-41.75 -168.25,-41.75 C-168.25,-41.75 -126.875,-26.125 -126.875,-26.125 C-126.875,-26.125 -85.75,-42.75 -85.75,-42.75 C-85.75,-42.75 -106.5,-104 -106.5,-104 C-106.5,-104 -158,-123.5 -158,-123.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-158,-123.5 C-158,-123.5 -209.5,-104.25 -209.5,-104.25 C-209.5,-104.25 -168.25,-41.75 -168.25,-41.75 C-168.25,-41.75 -126.875,-26.125 -126.875,-26.125 C-126.875,-26.125 -85.75,-42.75 -85.75,-42.75 C-85.75,-42.75 -106.5,-104 -106.5,-104 C-106.5,-104 -158,-123.5 -158,-123.5z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-158,-123.5 C-158,-123.5 -209.5,-104.25 -209.5,-104.25 C-209.5,-104.25 -168.25,-41.75 -168.25,-41.75 C-168.25,-41.75 -126.875,-26.125 -126.875,-26.125 C-126.875,-26.125 -85.75,-42.75 -85.75,-42.75 C-85.75,-42.75 -106.5,-104 -106.5,-104 C-106.5,-104 -158,-123.5 -158,-123.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-158,-123.5 C-158,-123.5 -209.5,-104.25 -209.5,-104.25 C-209.5,-104.25 -168.25,-41.75 -168.25,-41.75 C-168.25,-41.75 -126.875,-26.125 -126.875,-26.125 C-126.875,-26.125 -85.75,-42.75 -85.75,-42.75 C-85.75,-42.75 -106.5,-104 -106.5,-104 C-106.5,-104 -158,-123.5 -158,-123.5z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,181,237)"
                  fill-opacity="1"
                  d=" M-156.875,-123.875 C-156.875,-123.875 -209.5,-104.25 -209.5,-104.25 C-209.5,-104.25 -158.25,-84.625 -158.25,-84.625 C-158.25,-84.625 -105.25,-104.375 -105.25,-104.375 C-105.25,-104.375 -156.875,-123.875 -156.875,-123.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-156.875,-123.875 C-156.875,-123.875 -209.5,-104.25 -209.5,-104.25 C-209.5,-104.25 -158.25,-84.625 -158.25,-84.625 C-158.25,-84.625 -105.25,-104.375 -105.25,-104.375 C-105.25,-104.375 -156.875,-123.875 -156.875,-123.875z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(117,206,251)"
                  fill-opacity="0"
                  d=" M-157.875,-84.25 C-157.875,-84.25 -127,-27 -127,-27 C-127,-27 -85.75,-42.75 -85.75,-42.75 C-85.75,-42.75 -106.5,-104 -106.5,-104 C-106.5,-104 -157.875,-84.25 -157.875,-84.25z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-157.875,-84.25 C-157.875,-84.25 -127,-27 -127,-27 C-127,-27 -85.75,-42.75 -85.75,-42.75 C-85.75,-42.75 -106.5,-104 -106.5,-104 C-106.5,-104 -157.875,-84.25 -157.875,-84.25z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-157.875,-84.25 C-157.875,-84.25 -127,-27 -127,-27 C-127,-27 -85.75,-42.75 -85.75,-42.75 C-85.75,-42.75 -106.5,-104 -106.5,-104 C-106.5,-104 -157.875,-84.25 -157.875,-84.25z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-157.875,-84.25 C-157.875,-84.25 -127,-27 -127,-27 C-127,-27 -85.75,-42.75 -85.75,-42.75 C-85.75,-42.75 -106.5,-104 -106.5,-104 C-106.5,-104 -157.875,-84.25 -157.875,-84.25z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999969601631165,0,0,0.9999969601631165,256.0001220703125,256.00018310546875)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,200)"
                  fill-opacity="1"
                  d=" M38,19.625 C38,19.625 -3.625,36 -3.625,36 C-3.625,36 -3.875,91.75 -3.875,91.75 C-3.875,91.75 24.25,102.875 24.25,102.875 C24.25,102.875 51.875,92.375 51.875,92.375 C51.875,92.375 79.125,35.5 79.125,35.5 C79.125,35.5 38,19.625 38,19.625z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M38,19.625 C38,19.625 -3.625,36 -3.625,36 C-3.625,36 -3.875,91.75 -3.875,91.75 C-3.875,91.75 24.25,102.875 24.25,102.875 C24.25,102.875 51.875,92.375 51.875,92.375 C51.875,92.375 79.125,35.5 79.125,35.5 C79.125,35.5 38,19.625 38,19.625z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,200)"
                  fill-opacity="1"
                  d=" M38,19.625 C38,19.625 -3.625,36 -3.625,36 C-3.625,36 -3.875,91.75 -3.875,91.75 C-3.875,91.75 24.25,102.875 24.25,102.875 C24.25,102.875 51.875,92.375 51.875,92.375 C51.875,92.375 79.125,35.5 79.125,35.5 C79.125,35.5 38,19.625 38,19.625z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M38,19.625 C38,19.625 -3.625,36 -3.625,36 C-3.625,36 -3.875,91.75 -3.875,91.75 C-3.875,91.75 24.25,102.875 24.25,102.875 C24.25,102.875 51.875,92.375 51.875,92.375 C51.875,92.375 79.125,35.5 79.125,35.5 C79.125,35.5 38,19.625 38,19.625z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999969601631165,0,0,0.9999969601631165,256.0001220703125,256.00018310546875)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M38,19.625 C38,19.625 -3.625,36 -3.625,36 C-3.625,36 38.375,50.875 38.375,50.875 C38.375,50.875 79.125,35.5 79.125,35.5 C79.125,35.5 38,19.625 38,19.625z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M38,19.625 C38,19.625 -3.625,36 -3.625,36 C-3.625,36 38.375,50.875 38.375,50.875 C38.375,50.875 79.125,35.5 79.125,35.5 C79.125,35.5 38,19.625 38,19.625z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999969601631165,0,0,0.9999969601631165,256.0001220703125,256.00018310546875)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-3.625,36 C-3.625,36 -3.875,91.75 -3.875,91.75 C-3.875,91.75 24.25,102.875 24.25,102.875 C24.25,102.875 38.125,51.375 38.125,51.375 C38.125,51.375 -3.625,36 -3.625,36z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.625,36 C-3.625,36 -3.875,91.75 -3.875,91.75 C-3.875,91.75 24.25,102.875 24.25,102.875 C24.25,102.875 38.125,51.375 38.125,51.375 C38.125,51.375 -3.625,36 -3.625,36z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999969601631165,0,0,0.9999969601631165,256.0001220703125,256.00018310546875)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-3.625,36 C-3.625,36 -3.875,91.75 -3.875,91.75 C-3.875,91.75 24.25,102.875 24.25,102.875 C24.25,102.875 38.125,51.375 38.125,51.375 C38.125,51.375 -3.625,36 -3.625,36z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.625,36 C-3.625,36 -3.875,91.75 -3.875,91.75 C-3.875,91.75 24.25,102.875 24.25,102.875 C24.25,102.875 38.125,51.375 38.125,51.375 C38.125,51.375 -3.625,36 -3.625,36z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,141,201)"
                  fill-opacity="1"
                  d=" M79.5,-42.5 C79.5,-42.5 37.75,-27 37.75,-27 C37.75,-27 27.5,31.5 27.5,31.5 C27.5,31.5 58.125,44.375 58.125,44.375 C58.125,44.375 90.125,32.25 90.125,32.25 C90.125,32.25 120.25,-26 120.25,-26 C120.25,-26 79.5,-42.5 79.5,-42.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M79.5,-42.5 C79.5,-42.5 37.75,-27 37.75,-27 C37.75,-27 27.5,31.5 27.5,31.5 C27.5,31.5 58.125,44.375 58.125,44.375 C58.125,44.375 90.125,32.25 90.125,32.25 C90.125,32.25 120.25,-26 120.25,-26 C120.25,-26 79.5,-42.5 79.5,-42.5z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,141,201)"
                  fill-opacity="1"
                  d=" M79.5,-42.5 C79.5,-42.5 37.75,-27 37.75,-27 C37.75,-27 27.5,31.5 27.5,31.5 C27.5,31.5 58.125,44.375 58.125,44.375 C58.125,44.375 90.125,32.25 90.125,32.25 C90.125,32.25 120.25,-26 120.25,-26 C120.25,-26 79.5,-42.5 79.5,-42.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M79.5,-42.5 C79.5,-42.5 37.75,-27 37.75,-27 C37.75,-27 27.5,31.5 27.5,31.5 C27.5,31.5 58.125,44.375 58.125,44.375 C58.125,44.375 90.125,32.25 90.125,32.25 C90.125,32.25 120.25,-26 120.25,-26 C120.25,-26 79.5,-42.5 79.5,-42.5z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M37.75,-27 C37.75,-27 27.5,31.5 27.5,31.5 C27.5,31.5 58.25,43.125 58.25,43.125 C58.25,43.125 79.375,-11 79.375,-11 C79.375,-11 37.75,-27 37.75,-27z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M37.75,-27 C37.75,-27 27.5,31.5 27.5,31.5 C27.5,31.5 58.25,43.125 58.25,43.125 C58.25,43.125 79.375,-11 79.375,-11 C79.375,-11 37.75,-27 37.75,-27z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M79.5,-42.5 C79.5,-42.5 37.75,-27 37.75,-27 C37.75,-27 79.25,-10.625 79.25,-10.625 C79.25,-10.625 120.25,-26 120.25,-26 C120.25,-26 79.5,-42.5 79.5,-42.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M79.5,-42.5 C79.5,-42.5 37.75,-27 37.75,-27 C37.75,-27 79.25,-10.625 79.25,-10.625 C79.25,-10.625 120.25,-26 120.25,-26 C120.25,-26 79.5,-42.5 79.5,-42.5z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M37.75,-27 C37.75,-27 27.5,31.5 27.5,31.5 C27.5,31.5 58.75,43.5 58.75,43.5 C58.75,43.5 79.375,-11 79.375,-11 C79.375,-11 37.75,-27 37.75,-27z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M37.75,-27 C37.75,-27 27.5,31.5 27.5,31.5 C27.5,31.5 58.75,43.5 58.75,43.5 C58.75,43.5 79.375,-11 79.375,-11 C79.375,-11 37.75,-27 37.75,-27z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.999997079372406,0,0,0.999997079372406,255.9998779296875,256.00018310546875)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-44.625,19.375 C-44.625,19.375 -86.125,35.5 -86.125,35.5 C-86.125,35.5 -58.625,92.125 -58.625,92.125 C-58.625,92.125 -31.125,102.875 -31.125,102.875 C-31.125,102.875 -3.5,92.125 -3.5,92.125 C-3.5,92.125 -3.375,36 -3.375,36 C-3.375,36 -44.625,19.375 -44.625,19.375z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-44.625,19.375 C-44.625,19.375 -86.125,35.5 -86.125,35.5 C-86.125,35.5 -58.625,92.125 -58.625,92.125 C-58.625,92.125 -31.125,102.875 -31.125,102.875 C-31.125,102.875 -3.5,92.125 -3.5,92.125 C-3.5,92.125 -3.375,36 -3.375,36 C-3.375,36 -44.625,19.375 -44.625,19.375z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-44.625,19.375 C-44.625,19.375 -86.125,35.5 -86.125,35.5 C-86.125,35.5 -58.625,92.125 -58.625,92.125 C-58.625,92.125 -31.125,102.875 -31.125,102.875 C-31.125,102.875 -3.5,92.125 -3.5,92.125 C-3.5,92.125 -3.375,36 -3.375,36 C-3.375,36 -44.625,19.375 -44.625,19.375z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-44.625,19.375 C-44.625,19.375 -86.125,35.5 -86.125,35.5 C-86.125,35.5 -58.625,92.125 -58.625,92.125 C-58.625,92.125 -31.125,102.875 -31.125,102.875 C-31.125,102.875 -3.5,92.125 -3.5,92.125 C-3.5,92.125 -3.375,36 -3.375,36 C-3.375,36 -44.625,19.375 -44.625,19.375z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.999997079372406,0,0,0.999997079372406,255.9998779296875,256.00018310546875)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-44.625,19.375 C-44.625,19.375 -86.125,35.5 -86.125,35.5 C-86.125,35.5 -44.5,51 -44.5,51 C-44.5,51 -3.375,36 -3.375,36 C-3.375,36 -44.625,19.375 -44.625,19.375z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-44.625,19.375 C-44.625,19.375 -86.125,35.5 -86.125,35.5 C-86.125,35.5 -44.5,51 -44.5,51 C-44.5,51 -3.375,36 -3.375,36 C-3.375,36 -44.625,19.375 -44.625,19.375z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.999997079372406,0,0,0.999997079372406,255.9998779296875,256.00018310546875)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-44.5,51.375 C-44.5,51.375 -31.125,102.875 -31.125,102.875 C-31.125,102.875 -3.5,92.125 -3.5,92.125 C-3.5,92.125 -3.375,36 -3.375,36 C-3.375,36 -44.5,51.375 -44.5,51.375z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-44.5,51.375 C-44.5,51.375 -31.125,102.875 -31.125,102.875 C-31.125,102.875 -3.5,92.125 -3.5,92.125 C-3.5,92.125 -3.375,36 -3.375,36 C-3.375,36 -44.5,51.375 -44.5,51.375z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.999997079372406,0,0,0.999997079372406,255.9998779296875,256.00018310546875)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(33,41,101)"
                  fill-opacity="1"
                  d=" M-44.5,51.375 C-44.5,51.375 -31.125,102.875 -31.125,102.875 C-31.125,102.875 -3.5,92.125 -3.5,92.125 C-3.5,92.125 -3.375,36 -3.375,36 C-3.375,36 -44.5,51.375 -44.5,51.375z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-44.5,51.375 C-44.5,51.375 -31.125,102.875 -31.125,102.875 C-31.125,102.875 -3.5,92.125 -3.5,92.125 C-3.5,92.125 -3.375,36 -3.375,36 C-3.375,36 -44.5,51.375 -44.5,51.375z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-85.625,-42.625 C-85.625,-42.625 -127.375,-26.25 -127.375,-26.25 C-127.375,-26.25 -95.875,32.625 -95.875,32.625 C-95.875,32.625 -65.75,44.25 -65.75,44.25 C-65.75,44.25 -34.625,31.625 -34.625,31.625 C-34.625,31.625 -44.875,-26.25 -44.875,-26.25 C-44.875,-26.25 -85.625,-42.625 -85.625,-42.625z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-85.625,-42.625 C-85.625,-42.625 -127.375,-26.25 -127.375,-26.25 C-127.375,-26.25 -95.875,32.625 -95.875,32.625 C-95.875,32.625 -65.75,44.25 -65.75,44.25 C-65.75,44.25 -34.625,31.625 -34.625,31.625 C-34.625,31.625 -44.875,-26.25 -44.875,-26.25 C-44.875,-26.25 -85.625,-42.625 -85.625,-42.625z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-85.625,-42.625 C-85.625,-42.625 -127.375,-26.25 -127.375,-26.25 C-127.375,-26.25 -95.875,32.625 -95.875,32.625 C-95.875,32.625 -65.75,44.25 -65.75,44.25 C-65.75,44.25 -34.625,31.625 -34.625,31.625 C-34.625,31.625 -44.875,-26.25 -44.875,-26.25 C-44.875,-26.25 -85.625,-42.625 -85.625,-42.625z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-85.625,-42.625 C-85.625,-42.625 -127.375,-26.25 -127.375,-26.25 C-127.375,-26.25 -95.875,32.625 -95.875,32.625 C-95.875,32.625 -65.75,44.25 -65.75,44.25 C-65.75,44.25 -34.625,31.625 -34.625,31.625 C-34.625,31.625 -44.875,-26.25 -44.875,-26.25 C-44.875,-26.25 -85.625,-42.625 -85.625,-42.625z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-85.625,-42.625 C-85.625,-42.625 -127.375,-26.25 -127.375,-26.25 C-127.375,-26.25 -85.625,-10.5 -85.625,-10.5 C-85.625,-10.5 -44.875,-26.25 -44.875,-26.25 C-44.875,-26.25 -85.625,-42.625 -85.625,-42.625z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-85.625,-42.625 C-85.625,-42.625 -127.375,-26.25 -127.375,-26.25 C-127.375,-26.25 -85.625,-10.5 -85.625,-10.5 C-85.625,-10.5 -44.875,-26.25 -44.875,-26.25 C-44.875,-26.25 -85.625,-42.625 -85.625,-42.625z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-85.5,-10.75 C-85.5,-10.75 -65.75,43.75 -65.75,43.75 C-65.75,43.75 -34.625,31.625 -34.625,31.625 C-34.625,31.625 -44.875,-26.25 -44.875,-26.25 C-44.875,-26.25 -85.5,-10.75 -85.5,-10.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-85.5,-10.75 C-85.5,-10.75 -65.75,43.75 -65.75,43.75 C-65.75,43.75 -34.625,31.625 -34.625,31.625 C-34.625,31.625 -44.875,-26.25 -44.875,-26.25 C-44.875,-26.25 -85.5,-10.75 -85.5,-10.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="0"
                  d=" M-41.47200012207031,2.8410000801086426 C-41.47200012207031,2.8410000801086426 -40.38600158691406,7.76200008392334 -40.38600158691406,7.76200008392334 C-40.38600158691406,7.76200008392334 -38.64500045776367,7.409999847412109 -38.64500045776367,7.409999847412109 C-38.64500045776367,7.409999847412109 -39.51499938964844,2.0810000896453857 -39.51499938964844,2.0810000896453857 C-39.51499938964844,2.0810000896453857 -41.47200012207031,2.8410000801086426 -41.47200012207031,2.8410000801086426z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-41.47200012207031,2.8410000801086426 C-41.47200012207031,2.8410000801086426 -40.38600158691406,7.76200008392334 -40.38600158691406,7.76200008392334 C-40.38600158691406,7.76200008392334 -38.64500045776367,7.409999847412109 -38.64500045776367,7.409999847412109 C-38.64500045776367,7.409999847412109 -39.51499938964844,2.0810000896453857 -39.51499938964844,2.0810000896453857 C-39.51499938964844,2.0810000896453857 -41.47200012207031,2.8410000801086426 -41.47200012207031,2.8410000801086426z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,200)"
                  fill-opacity="1"
                  d=" M-3.125,35.5 C-3.125,35.5 -44.875,51.375 -44.875,51.375 C-44.875,51.375 -31.625,102.625 -31.625,102.625 C-31.625,102.625 -3,113.75 -3,113.75 C-3,113.75 25.25,102.75 25.25,102.75 C25.25,102.75 39.125,50.75 39.125,50.75 C39.125,50.75 -3.125,35.5 -3.125,35.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.125,35.5 C-3.125,35.5 -44.875,51.375 -44.875,51.375 C-44.875,51.375 -31.625,102.625 -31.625,102.625 C-31.625,102.625 -3,113.75 -3,113.75 C-3,113.75 25.25,102.75 25.25,102.75 C25.25,102.75 39.125,50.75 39.125,50.75 C39.125,50.75 -3.125,35.5 -3.125,35.5z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,200)"
                  fill-opacity="1"
                  d=" M-3.125,35.5 C-3.125,35.5 -44.875,51.375 -44.875,51.375 C-44.875,51.375 -31.625,102.625 -31.625,102.625 C-31.625,102.625 -3,113.75 -3,113.75 C-3,113.75 25.25,102.75 25.25,102.75 C25.25,102.75 39.125,50.75 39.125,50.75 C39.125,50.75 -3.125,35.5 -3.125,35.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.125,35.5 C-3.125,35.5 -44.875,51.375 -44.875,51.375 C-44.875,51.375 -31.625,102.625 -31.625,102.625 C-31.625,102.625 -3,113.75 -3,113.75 C-3,113.75 25.25,102.75 25.25,102.75 C25.25,102.75 39.125,50.75 39.125,50.75 C39.125,50.75 -3.125,35.5 -3.125,35.5z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-45.625,51 C-45.625,51 -32.25,102.875 -32.25,102.875 C-32.25,102.875 -3,114.375 -3,114.375 C-3,114.375 -3.5,66.5 -3.5,66.5 C-3.5,66.5 -45.625,51 -45.625,51z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-45.625,51 C-45.625,51 -32.25,102.875 -32.25,102.875 C-32.25,102.875 -3,114.375 -3,114.375 C-3,114.375 -3.5,66.5 -3.5,66.5 C-3.5,66.5 -45.625,51 -45.625,51z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(38,36,92)"
                  fill-opacity="1"
                  d=" M-3.125,35.5 C-3.125,35.5 -44.125,51.375 -44.125,51.375 C-44.125,51.375 -3.375,65.875 -3.375,65.875 C-3.375,65.875 37.375,50.75 37.375,50.75 C37.375,50.75 -3.125,35.5 -3.125,35.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.125,35.5 C-3.125,35.5 -44.125,51.375 -44.125,51.375 C-44.125,51.375 -3.375,65.875 -3.375,65.875 C-3.375,65.875 37.375,50.75 37.375,50.75 C37.375,50.75 -3.125,35.5 -3.125,35.5z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(84,182,237)"
                  fill-opacity="1"
                  d=" M-107.125,-105 C-107.125,-105 -158.375,-85.125 -158.375,-85.125 C-158.375,-85.125 -126.875,-25.875 -126.875,-25.875 C-126.875,-25.875 -85.25,-10.375 -85.25,-10.375 C-85.25,-10.375 -43.849998474121094,-26.298999786376953 -43.849998474121094,-26.298999786376953 C-43.849998474121094,-26.298999786376953 -53.875,-84.5 -53.875,-84.5 C-53.875,-84.5 -107.125,-105 -107.125,-105z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-107.125,-105 C-107.125,-105 -158.375,-85.125 -158.375,-85.125 C-158.375,-85.125 -126.875,-25.875 -126.875,-25.875 C-126.875,-25.875 -85.25,-10.375 -85.25,-10.375 C-85.25,-10.375 -43.849998474121094,-26.298999786376953 -43.849998474121094,-26.298999786376953 C-43.849998474121094,-26.298999786376953 -53.875,-84.5 -53.875,-84.5 C-53.875,-84.5 -107.125,-105 -107.125,-105z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(84,182,237)"
                  fill-opacity="1"
                  d=" M-107.125,-105 C-107.125,-105 -158.375,-85.125 -158.375,-85.125 C-158.375,-85.125 -126.875,-25.875 -126.875,-25.875 C-126.875,-25.875 -85.25,-10.375 -85.25,-10.375 C-85.25,-10.375 -43.849998474121094,-26.298999786376953 -43.849998474121094,-26.298999786376953 C-43.849998474121094,-26.298999786376953 -53.875,-84.5 -53.875,-84.5 C-53.875,-84.5 -107.125,-105 -107.125,-105z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-107.125,-105 C-107.125,-105 -158.375,-85.125 -158.375,-85.125 C-158.375,-85.125 -126.875,-25.875 -126.875,-25.875 C-126.875,-25.875 -85.25,-10.375 -85.25,-10.375 C-85.25,-10.375 -43.849998474121094,-26.298999786376953 -43.849998474121094,-26.298999786376953 C-43.849998474121094,-26.298999786376953 -53.875,-84.5 -53.875,-84.5 C-53.875,-84.5 -107.125,-105 -107.125,-105z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-105.875,-65 C-105.875,-65 -159,-84.5 -159,-84.5 C-159,-84.5 -127.06199645996094,-25.125 -127.06199645996094,-25.125 C-127.06199645996094,-25.125 -85.31199645996094,-10 -85.31199645996094,-10 C-85.31199645996094,-10 -105.875,-65 -105.875,-65z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-105.875,-65 C-105.875,-65 -159,-84.5 -159,-84.5 C-159,-84.5 -127.06199645996094,-25.125 -127.06199645996094,-25.125 C-127.06199645996094,-25.125 -85.31199645996094,-10 -85.31199645996094,-10 C-85.31199645996094,-10 -105.875,-65 -105.875,-65z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-106.125,-64.625 C-106.125,-64.625 -85.25,-10.375 -85.25,-10.375 C-85.25,-10.375 -43.849998474121094,-26.298999786376953 -43.849998474121094,-26.298999786376953 C-43.849998474121094,-26.298999786376953 -54.375,-84.375 -54.375,-84.375 C-54.375,-84.375 -106.125,-64.625 -106.125,-64.625z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-106.125,-64.625 C-106.125,-64.625 -85.25,-10.375 -85.25,-10.375 C-85.25,-10.375 -43.849998474121094,-26.298999786376953 -43.849998474121094,-26.298999786376953 C-43.849998474121094,-26.298999786376953 -54.375,-84.375 -54.375,-84.375 C-54.375,-84.375 -106.125,-64.625 -106.125,-64.625z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(127,228,249)"
                  fill-opacity="1"
                  d=" M-44.12799835205078,-26.457000732421875 C-44.12799835205078,-26.457000732421875 -44.145999908447266,-26.23200035095215 -44.145999908447266,-26.23200035095215 C-44.145999908447266,-26.23200035095215 -43.849998474121094,-26.298999786376953 -43.849998474121094,-26.298999786376953 C-43.849998474121094,-26.298999786376953 -44.167999267578125,-26.663999557495117 -44.167999267578125,-26.663999557495117 C-44.167999267578125,-26.663999557495117 -44.12799835205078,-26.457000732421875 -44.12799835205078,-26.457000732421875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-44.12799835205078,-26.457000732421875 C-44.12799835205078,-26.457000732421875 -44.145999908447266,-26.23200035095215 -44.145999908447266,-26.23200035095215 C-44.145999908447266,-26.23200035095215 -43.849998474121094,-26.298999786376953 -43.849998474121094,-26.298999786376953 C-43.849998474121094,-26.298999786376953 -44.167999267578125,-26.663999557495117 -44.167999267578125,-26.663999557495117 C-44.167999267578125,-26.663999557495117 -44.12799835205078,-26.457000732421875 -44.12799835205078,-26.457000732421875z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(84,183,238)"
                  fill-opacity="1"
                  d=" M101.5,-105 C101.5,-105 49.25,-84.25 49.25,-84.25 C49.25,-84.25 38.5,-26.75 38.5,-26.75 C38.5,-26.75 79.5,-11.25 79.5,-11.25 C79.5,-11.25 120.75,-26.75 120.75,-26.75 C120.75,-26.75 152.5,-84.5 152.5,-84.5 C152.5,-84.5 101.5,-105 101.5,-105z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M101.5,-105 C101.5,-105 49.25,-84.25 49.25,-84.25 C49.25,-84.25 38.5,-26.75 38.5,-26.75 C38.5,-26.75 79.5,-11.25 79.5,-11.25 C79.5,-11.25 120.75,-26.75 120.75,-26.75 C120.75,-26.75 152.5,-84.5 152.5,-84.5 C152.5,-84.5 101.5,-105 101.5,-105z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(84,183,238)"
                  fill-opacity="1"
                  d=" M101.5,-105 C101.5,-105 49.25,-84.25 49.25,-84.25 C49.25,-84.25 38.5,-26.75 38.5,-26.75 C38.5,-26.75 79.5,-11.25 79.5,-11.25 C79.5,-11.25 120.75,-26.75 120.75,-26.75 C120.75,-26.75 152.5,-84.5 152.5,-84.5 C152.5,-84.5 101.5,-105 101.5,-105z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M101.5,-105 C101.5,-105 49.25,-84.25 49.25,-84.25 C49.25,-84.25 38.5,-26.75 38.5,-26.75 C38.5,-26.75 79.5,-11.25 79.5,-11.25 C79.5,-11.25 120.75,-26.75 120.75,-26.75 C120.75,-26.75 152.5,-84.5 152.5,-84.5 C152.5,-84.5 101.5,-105 101.5,-105z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(69,141,200)"
                  fill-opacity="1"
                  d=" M101.125,-64.81199645996094 C101.125,-64.81199645996094 79.875,-9.875 79.875,-9.875 C79.875,-9.875 121,-25.375 121,-25.375 C121,-25.375 153.25,-84.375 153.25,-84.375 C153.25,-84.375 101.125,-64.81199645996094 101.125,-64.81199645996094z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M101.125,-64.81199645996094 C101.125,-64.81199645996094 79.875,-9.875 79.875,-9.875 C79.875,-9.875 121,-25.375 121,-25.375 C121,-25.375 153.25,-84.375 153.25,-84.375 C153.25,-84.375 101.125,-64.81199645996094 101.125,-64.81199645996094z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M49.25,-84.25 C49.25,-84.25 38.5,-26.75 38.5,-26.75 C38.5,-26.75 79.5,-11.25 79.5,-11.25 C79.5,-11.25 100.75,-64.5 100.75,-64.5 C100.75,-64.5 49.25,-84.25 49.25,-84.25z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M49.25,-84.25 C49.25,-84.25 38.5,-26.75 38.5,-26.75 C38.5,-26.75 79.5,-11.25 79.5,-11.25 C79.5,-11.25 100.75,-64.5 100.75,-64.5 C100.75,-64.5 49.25,-84.25 49.25,-84.25z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(56,125,194)"
                  fill-opacity="1"
                  d=" M38.50899887084961,-26.902999877929688 C38.50899887084961,-26.902999877929688 38.5,-26.75 38.5,-26.75 C38.5,-26.75 38.23099899291992,-27.009000778198242 38.23099899291992,-27.009000778198242 C38.23099899291992,-27.009000778198242 38.83100128173828,-27.041000366210938 38.83100128173828,-27.041000366210938 C38.83100128173828,-27.041000366210938 38.50899887084961,-26.902999877929688 38.50899887084961,-26.902999877929688z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M38.50899887084961,-26.902999877929688 C38.50899887084961,-26.902999877929688 38.5,-26.75 38.5,-26.75 C38.5,-26.75 38.23099899291992,-27.009000778198242 38.23099899291992,-27.009000778198242 C38.23099899291992,-27.009000778198242 38.83100128173828,-27.041000366210938 38.83100128173828,-27.041000366210938 C38.83100128173828,-27.041000366210938 38.50899887084961,-26.902999877929688 38.50899887084961,-26.902999877929688z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999967813491821,0,0,0.9999967813491821,255.98704528808594,256.01214599609375)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,141,200)"
                  fill-opacity="1"
                  d=" M36.5,-26.875 C36.5,-26.875 -3.75,-11 -3.75,-11 C-3.75,-11 -3.625,43 -3.625,43 C-3.625,43 27.375,55.5 27.375,55.5 C27.375,55.5 59.75,43.6879997253418 59.75,43.6879997253418 C59.75,43.6879997253418 80.31199645996094,-11.437999725341797 80.31199645996094,-11.437999725341797 C80.31199645996094,-11.437999725341797 36.5,-26.875 36.5,-26.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M36.5,-26.875 C36.5,-26.875 -3.75,-11 -3.75,-11 C-3.75,-11 -3.625,43 -3.625,43 C-3.625,43 27.375,55.5 27.375,55.5 C27.375,55.5 59.75,43.6879997253418 59.75,43.6879997253418 C59.75,43.6879997253418 80.31199645996094,-11.437999725341797 80.31199645996094,-11.437999725341797 C80.31199645996094,-11.437999725341797 36.5,-26.875 36.5,-26.875z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,141,200)"
                  fill-opacity="1"
                  d=" M36.5,-26.875 C36.5,-26.875 -3.75,-11 -3.75,-11 C-3.75,-11 -3.625,43 -3.625,43 C-3.625,43 27.375,55.5 27.375,55.5 C27.375,55.5 59.75,43.6879997253418 59.75,43.6879997253418 C59.75,43.6879997253418 80.31199645996094,-11.437999725341797 80.31199645996094,-11.437999725341797 C80.31199645996094,-11.437999725341797 36.5,-26.875 36.5,-26.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M36.5,-26.875 C36.5,-26.875 -3.75,-11 -3.75,-11 C-3.75,-11 -3.625,43 -3.625,43 C-3.625,43 27.375,55.5 27.375,55.5 C27.375,55.5 59.75,43.6879997253418 59.75,43.6879997253418 C59.75,43.6879997253418 80.31199645996094,-11.437999725341797 80.31199645996094,-11.437999725341797 C80.31199645996094,-11.437999725341797 36.5,-26.875 36.5,-26.875z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999967813491821,0,0,0.9999967813491821,255.98704528808594,256.01214599609375)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M36.5,-26.875 C36.5,-26.875 -3.75,-11 -3.75,-11 C-3.75,-11 -3.625,43 -3.625,43 C-3.625,43 26.75,53.875 26.75,53.875 C26.75,53.875 36.75,4.5 36.75,4.5 C36.75,4.5 79.375,-11.125 79.375,-11.125 C79.375,-11.125 36.5,-26.875 36.5,-26.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M36.5,-26.875 C36.5,-26.875 -3.75,-11 -3.75,-11 C-3.75,-11 -3.625,43 -3.625,43 C-3.625,43 26.75,53.875 26.75,53.875 C26.75,53.875 36.75,4.5 36.75,4.5 C36.75,4.5 79.375,-11.125 79.375,-11.125 C79.375,-11.125 36.5,-26.875 36.5,-26.875z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999967813491821,0,0,0.9999967813491821,255.98704528808594,256.01214599609375)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="0.2"
                  d=" M-3.75,-11 C-3.75,-11 -3.625,43 -3.625,43 C-3.625,43 26.625,54.5 26.625,54.5 C26.625,54.5 36.75,4.375 36.75,4.375 C36.75,4.375 -3.75,-11 -3.75,-11z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.75,-11 C-3.75,-11 -3.625,43 -3.625,43 C-3.625,43 26.625,54.5 26.625,54.5 C26.625,54.5 36.75,4.375 36.75,4.375 C36.75,4.375 -3.75,-11 -3.75,-11z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999967813491821,0,0,0.9999967813491821,255.98704528808594,256.01214599609375)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(26,54,103)"
                  fill-opacity="0"
                  d=" M-0.24799999594688416,19.03499984741211 C-0.24799999594688416,19.03499984741211 -3.191999912261963,18.378000259399414 -3.191999912261963,18.378000259399414 C-3.191999912261963,18.378000259399414 -3.73799991607666,42.54800033569336 -3.73799991607666,42.54800033569336 C-3.73799991607666,42.54800033569336 7.479000091552734,46.63600158691406 7.479000091552734,46.63600158691406 C7.479000091552734,46.63600158691406 7.954999923706055,43.66400146484375 7.954999923706055,43.66400146484375 C7.954999923706055,43.66400146484375 -0.17000000178813934,40.0620002746582 -0.17000000178813934,40.0620002746582 C-0.17000000178813934,40.0620002746582 -0.24799999594688416,19.03499984741211 -0.24799999594688416,19.03499984741211z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-0.24799999594688416,19.03499984741211 C-0.24799999594688416,19.03499984741211 -3.191999912261963,18.378000259399414 -3.191999912261963,18.378000259399414 C-3.191999912261963,18.378000259399414 -3.73799991607666,42.54800033569336 -3.73799991607666,42.54800033569336 C-3.73799991607666,42.54800033569336 7.479000091552734,46.63600158691406 7.479000091552734,46.63600158691406 C7.479000091552734,46.63600158691406 7.954999923706055,43.66400146484375 7.954999923706055,43.66400146484375 C7.954999923706055,43.66400146484375 -0.17000000178813934,40.0620002746582 -0.17000000178813934,40.0620002746582 C-0.17000000178813934,40.0620002746582 -0.24799999594688416,19.03499984741211 -0.24799999594688416,19.03499984741211z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999967813491821,0,0,0.9999967813491821,174.0001220703125,256.25006103515625)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M36.5,-26.875 C36.5,-26.875 -4.875,-11.687999725341797 -4.875,-11.687999725341797 C-4.875,-11.687999725341797 15.5,43.375 15.5,43.375 C15.5,43.375 48.25,55.8120002746582 48.25,55.8120002746582 C48.25,55.8120002746582 79.75,43.3120002746582 79.75,43.3120002746582 C79.75,43.3120002746582 80.31199645996094,-11.437999725341797 80.31199645996094,-11.437999725341797 C80.31199645996094,-11.437999725341797 36.5,-26.875 36.5,-26.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M36.5,-26.875 C36.5,-26.875 -4.875,-11.687999725341797 -4.875,-11.687999725341797 C-4.875,-11.687999725341797 15.5,43.375 15.5,43.375 C15.5,43.375 48.25,55.8120002746582 48.25,55.8120002746582 C48.25,55.8120002746582 79.75,43.3120002746582 79.75,43.3120002746582 C79.75,43.3120002746582 80.31199645996094,-11.437999725341797 80.31199645996094,-11.437999725341797 C80.31199645996094,-11.437999725341797 36.5,-26.875 36.5,-26.875z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M36.5,-26.875 C36.5,-26.875 -4.875,-11.687999725341797 -4.875,-11.687999725341797 C-4.875,-11.687999725341797 15.5,43.375 15.5,43.375 C15.5,43.375 48.25,55.8120002746582 48.25,55.8120002746582 C48.25,55.8120002746582 79.75,43.3120002746582 79.75,43.3120002746582 C79.75,43.3120002746582 80.31199645996094,-11.437999725341797 80.31199645996094,-11.437999725341797 C80.31199645996094,-11.437999725341797 36.5,-26.875 36.5,-26.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M36.5,-26.875 C36.5,-26.875 -4.875,-11.687999725341797 -4.875,-11.687999725341797 C-4.875,-11.687999725341797 15.5,43.375 15.5,43.375 C15.5,43.375 48.25,55.8120002746582 48.25,55.8120002746582 C48.25,55.8120002746582 79.75,43.3120002746582 79.75,43.3120002746582 C79.75,43.3120002746582 80.31199645996094,-11.437999725341797 80.31199645996094,-11.437999725341797 C80.31199645996094,-11.437999725341797 36.5,-26.875 36.5,-26.875z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999967813491821,0,0,0.9999967813491821,174.0001220703125,256.25006103515625)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,36,92)"
                  fill-opacity="1"
                  d=" M36.5,-26.875 C36.5,-26.875 -3.75,-11.437999725341797 -3.75,-11.437999725341797 C-3.75,-11.437999725341797 37.625,3.875 37.625,3.875 C37.625,3.875 80.31199645996094,-11.437999725341797 80.31199645996094,-11.437999725341797 C80.31199645996094,-11.437999725341797 36.5,-26.875 36.5,-26.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M36.5,-26.875 C36.5,-26.875 -3.75,-11.437999725341797 -3.75,-11.437999725341797 C-3.75,-11.437999725341797 37.625,3.875 37.625,3.875 C37.625,3.875 80.31199645996094,-11.437999725341797 80.31199645996094,-11.437999725341797 C80.31199645996094,-11.437999725341797 36.5,-26.875 36.5,-26.875z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999967813491821,0,0,0.9999967813491821,174.0001220703125,256.25006103515625)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M38.75,3.562999963760376 C38.75,3.562999963760376 48.875,55.0620002746582 48.875,55.0620002746582 C48.875,55.0620002746582 79.75,43.3120002746582 79.75,43.3120002746582 C79.75,43.3120002746582 80.31199645996094,-11.437999725341797 80.31199645996094,-11.437999725341797 C80.31199645996094,-11.437999725341797 38.75,3.562999963760376 38.75,3.562999963760376z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M38.75,3.562999963760376 C38.75,3.562999963760376 48.875,55.0620002746582 48.875,55.0620002746582 C48.875,55.0620002746582 79.75,43.3120002746582 79.75,43.3120002746582 C79.75,43.3120002746582 80.31199645996094,-11.437999725341797 80.31199645996094,-11.437999725341797 C80.31199645996094,-11.437999725341797 38.75,3.562999963760376 38.75,3.562999963760376z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999967813491821,0,0,0.9999967813491821,174.0001220703125,256.25006103515625)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="0"
                  d=" M38.60200119018555,4.465000152587891 C38.60200119018555,4.465000152587891 47.51900100708008,52.6349983215332 47.51900100708008,52.6349983215332 C47.51900100708008,52.6349983215332 76.59600067138672,41.79100036621094 76.59600067138672,41.79100036621094 C76.59600067138672,41.79100036621094 76.56700134277344,-10.958999633789062 76.56700134277344,-10.958999633789062 C76.56700134277344,-10.958999633789062 38.60200119018555,4.465000152587891 38.60200119018555,4.465000152587891z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M38.60200119018555,4.465000152587891 C38.60200119018555,4.465000152587891 47.51900100708008,52.6349983215332 47.51900100708008,52.6349983215332 C47.51900100708008,52.6349983215332 76.59600067138672,41.79100036621094 76.59600067138672,41.79100036621094 C76.59600067138672,41.79100036621094 76.56700134277344,-10.958999633789062 76.56700134277344,-10.958999633789062 C76.56700134277344,-10.958999633789062 38.60200119018555,4.465000152587891 38.60200119018555,4.465000152587891z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999971985816956,0,0,0.9999971985816956,256,256.00775146484375)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,181,237)"
                  fill-opacity="1"
                  d=" M-2.75,-104.5 C-2.75,-104.5 -54.9379997253418,-84.75 -54.9379997253418,-84.75 C-54.9379997253418,-84.75 -43.75,-25.75 -43.75,-25.75 C-43.75,-25.75 -3.5,-10.75 -3.5,-10.75 C-3.5,-10.75 38,-26 38,-26 C38,-26 50.5,-85.31199645996094 50.5,-85.31199645996094 C50.5,-85.31199645996094 -2.75,-104.5 -2.75,-104.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.75,-104.5 C-2.75,-104.5 -54.9379997253418,-84.75 -54.9379997253418,-84.75 C-54.9379997253418,-84.75 -43.75,-25.75 -43.75,-25.75 C-43.75,-25.75 -3.5,-10.75 -3.5,-10.75 C-3.5,-10.75 38,-26 38,-26 C38,-26 50.5,-85.31199645996094 50.5,-85.31199645996094 C50.5,-85.31199645996094 -2.75,-104.5 -2.75,-104.5z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,181,237)"
                  fill-opacity="1"
                  d=" M-2.75,-104.5 C-2.75,-104.5 -54.9379997253418,-84.75 -54.9379997253418,-84.75 C-54.9379997253418,-84.75 -43.75,-25.75 -43.75,-25.75 C-43.75,-25.75 -3.5,-10.75 -3.5,-10.75 C-3.5,-10.75 38,-26 38,-26 C38,-26 50.5,-85.31199645996094 50.5,-85.31199645996094 C50.5,-85.31199645996094 -2.75,-104.5 -2.75,-104.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.75,-104.5 C-2.75,-104.5 -54.9379997253418,-84.75 -54.9379997253418,-84.75 C-54.9379997253418,-84.75 -43.75,-25.75 -43.75,-25.75 C-43.75,-25.75 -3.5,-10.75 -3.5,-10.75 C-3.5,-10.75 38,-26 38,-26 C38,-26 50.5,-85.31199645996094 50.5,-85.31199645996094 C50.5,-85.31199645996094 -2.75,-104.5 -2.75,-104.5z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999971985816956,0,0,0.9999971985816956,256,256.00775146484375)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(52,106,170)"
                  fill-opacity="1"
                  d=" M-2.875,-64.75 C-2.875,-64.75 -54.75,-84.25 -54.75,-84.25 C-54.75,-84.25 -43.75,-25.75 -43.75,-25.75 C-43.75,-25.75 -3.5,-10.75 -3.5,-10.75 C-3.5,-10.75 38,-26 38,-26 C38,-26 49.25,-83.75 49.25,-83.75 C49.25,-83.75 -2.875,-64.75 -2.875,-64.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.875,-64.75 C-2.875,-64.75 -54.75,-84.25 -54.75,-84.25 C-54.75,-84.25 -43.75,-25.75 -43.75,-25.75 C-43.75,-25.75 -3.5,-10.75 -3.5,-10.75 C-3.5,-10.75 38,-26 38,-26 C38,-26 49.25,-83.75 49.25,-83.75 C49.25,-83.75 -2.875,-64.75 -2.875,-64.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999971985816956,0,0,0.9999971985816956,256,256.00775146484375)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="0.2"
                  d=" M-2.875,-64.75 C-2.875,-64.75 -54.75,-84.25 -54.75,-84.25 C-54.75,-84.25 -43.75,-25.75 -43.75,-25.75 C-43.75,-25.75 -3.5,-10.75 -3.5,-10.75 C-3.5,-10.75 -2.875,-64.75 -2.875,-64.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.875,-64.75 C-2.875,-64.75 -54.75,-84.25 -54.75,-84.25 C-54.75,-84.25 -43.75,-25.75 -43.75,-25.75 C-43.75,-25.75 -3.5,-10.75 -3.5,-10.75 C-3.5,-10.75 -2.875,-64.75 -2.875,-64.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999971985816956,0,0,0.9999971985816956,256,256.00775146484375)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-2.875,-64.75 C-2.875,-64.75 -54.75,-84.25 -54.75,-84.25 C-54.75,-84.25 -43.75,-25.75 -43.75,-25.75 C-43.75,-25.75 -3.5,-10.75 -3.5,-10.75 C-3.5,-10.75 38,-26 38,-26 C38,-26 49.25,-83.75 49.25,-83.75 C49.25,-83.75 -2.875,-64.75 -2.875,-64.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.875,-64.75 C-2.875,-64.75 -54.75,-84.25 -54.75,-84.25 C-54.75,-84.25 -43.75,-25.75 -43.75,-25.75 C-43.75,-25.75 -3.5,-10.75 -3.5,-10.75 C-3.5,-10.75 38,-26 38,-26 C38,-26 49.25,-83.75 49.25,-83.75 C49.25,-83.75 -2.875,-64.75 -2.875,-64.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999971985816956,0,0,0.9999971985816956,256,256.00775146484375)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(41,103,177)"
                  fill-opacity="0"
                  d=" M16.57900047302246,-52.94200134277344 C16.57900047302246,-52.94200134277344 30.613000869750977,-23.844999313354492 30.613000869750977,-23.844999313354492 C30.613000869750977,-23.844999313354492 38,-26 38,-26 C38,-26 45.194000244140625,-66.47899627685547 45.194000244140625,-66.47899627685547 C45.194000244140625,-66.47899627685547 16.57900047302246,-52.94200134277344 16.57900047302246,-52.94200134277344z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M16.57900047302246,-52.94200134277344 C16.57900047302246,-52.94200134277344 30.613000869750977,-23.844999313354492 30.613000869750977,-23.844999313354492 C30.613000869750977,-23.844999313354492 38,-26 38,-26 C38,-26 45.194000244140625,-66.47899627685547 45.194000244140625,-66.47899627685547 C45.194000244140625,-66.47899627685547 16.57900047302246,-52.94200134277344 16.57900047302246,-52.94200134277344z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.9999971985816956,0,0,0.9999971985816956,256,256.00775146484375)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(114,208,253)"
                  fill-opacity="0"
                  d=" M-2.75,-104.5 C-2.75,-104.5 -3.7899999618530273,-88.5530014038086 -3.7899999618530273,-88.5530014038086 C-3.7899999618530273,-88.5530014038086 14.753999710083008,-95.95999908447266 14.753999710083008,-95.95999908447266 C14.753999710083008,-95.95999908447266 -2.75,-104.5 -2.75,-104.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.75,-104.5 C-2.75,-104.5 -3.7899999618530273,-88.5530014038086 -3.7899999618530273,-88.5530014038086 C-3.7899999618530273,-88.5530014038086 14.753999710083008,-95.95999908447266 14.753999710083008,-95.95999908447266 C14.753999710083008,-95.95999908447266 -2.75,-104.5 -2.75,-104.5z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,182,237)"
                  fill-opacity="1"
                  d=" M-54.75,-85.375 C-54.75,-85.375 -106.75,-65.375 -106.75,-65.375 C-106.75,-65.375 -85.53099822998047,-11.625 -85.53099822998047,-11.625 C-85.53099822998047,-11.625 -44.0620002746582,4.188000202178955 -44.0620002746582,4.188000202178955 C-44.0620002746582,4.188000202178955 -2.8420000076293945,-10.678000450134277 -2.8420000076293945,-10.678000450134277 C-2.8420000076293945,-10.678000450134277 -2.687999963760376,-65.375 -2.687999963760376,-65.375 C-2.687999963760376,-65.375 -54.75,-85.375 -54.75,-85.375z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-54.75,-85.375 C-54.75,-85.375 -106.75,-65.375 -106.75,-65.375 C-106.75,-65.375 -85.53099822998047,-11.625 -85.53099822998047,-11.625 C-85.53099822998047,-11.625 -44.0620002746582,4.188000202178955 -44.0620002746582,4.188000202178955 C-44.0620002746582,4.188000202178955 -2.8420000076293945,-10.678000450134277 -2.8420000076293945,-10.678000450134277 C-2.8420000076293945,-10.678000450134277 -2.687999963760376,-65.375 -2.687999963760376,-65.375 C-2.687999963760376,-65.375 -54.75,-85.375 -54.75,-85.375z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,182,237)"
                  fill-opacity="1"
                  d=" M-54.75,-85.375 C-54.75,-85.375 -106.75,-65.375 -106.75,-65.375 C-106.75,-65.375 -85.53099822998047,-11.625 -85.53099822998047,-11.625 C-85.53099822998047,-11.625 -44.0620002746582,4.188000202178955 -44.0620002746582,4.188000202178955 C-44.0620002746582,4.188000202178955 -2.8420000076293945,-10.678000450134277 -2.8420000076293945,-10.678000450134277 C-2.8420000076293945,-10.678000450134277 -2.687999963760376,-65.375 -2.687999963760376,-65.375 C-2.687999963760376,-65.375 -54.75,-85.375 -54.75,-85.375z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-54.75,-85.375 C-54.75,-85.375 -106.75,-65.375 -106.75,-65.375 C-106.75,-65.375 -85.53099822998047,-11.625 -85.53099822998047,-11.625 C-85.53099822998047,-11.625 -44.0620002746582,4.188000202178955 -44.0620002746582,4.188000202178955 C-44.0620002746582,4.188000202178955 -2.8420000076293945,-10.678000450134277 -2.8420000076293945,-10.678000450134277 C-2.8420000076293945,-10.678000450134277 -2.687999963760376,-65.375 -2.687999963760376,-65.375 C-2.687999963760376,-65.375 -54.75,-85.375 -54.75,-85.375z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-107,-65.125 C-107,-65.125 -86.125,-10.5 -86.125,-10.5 C-86.125,-10.5 -43.875,5.25 -43.875,5.25 C-43.875,5.25 -54.125,-45.625 -54.125,-45.625 C-54.125,-45.625 -107,-65.125 -107,-65.125z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-107,-65.125 C-107,-65.125 -86.125,-10.5 -86.125,-10.5 C-86.125,-10.5 -43.875,5.25 -43.875,5.25 C-43.875,5.25 -54.125,-45.625 -54.125,-45.625 C-54.125,-45.625 -107,-65.125 -107,-65.125z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-54.5,-45 C-54.5,-45 -43.875,5.25 -43.875,5.25 C-43.875,5.25 -2.8420000076293945,-10.678000450134277 -2.8420000076293945,-10.678000450134277 C-2.8420000076293945,-10.678000450134277 -3,-64.625 -3,-64.625 C-3,-64.625 -54.5,-45 -54.5,-45z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-54.5,-45 C-54.5,-45 -43.875,5.25 -43.875,5.25 C-43.875,5.25 -2.8420000076293945,-10.678000450134277 -2.8420000076293945,-10.678000450134277 C-2.8420000076293945,-10.678000450134277 -3,-64.625 -3,-64.625 C-3,-64.625 -54.5,-45 -54.5,-45z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(-1,0,0,1,250.62400817871094,256.1239929199219)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,182,237)"
                  fill-opacity="1"
                  d=" M-54.75,-84.875 C-54.75,-84.875 -105.75,-64.875 -105.75,-64.875 C-105.75,-64.875 -84.625,-11.625 -84.625,-11.625 C-84.625,-11.625 -44,3.75 -44,3.75 C-44,3.75 -2.8420000076293945,-10.678000450134277 -2.8420000076293945,-10.678000450134277 C-2.8420000076293945,-10.678000450134277 -2.687999963760376,-65.375 -2.687999963760376,-65.375 C-2.687999963760376,-65.375 -54.75,-84.875 -54.75,-84.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-54.75,-84.875 C-54.75,-84.875 -105.75,-64.875 -105.75,-64.875 C-105.75,-64.875 -84.625,-11.625 -84.625,-11.625 C-84.625,-11.625 -44,3.75 -44,3.75 C-44,3.75 -2.8420000076293945,-10.678000450134277 -2.8420000076293945,-10.678000450134277 C-2.8420000076293945,-10.678000450134277 -2.687999963760376,-65.375 -2.687999963760376,-65.375 C-2.687999963760376,-65.375 -54.75,-84.875 -54.75,-84.875z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,182,237)"
                  fill-opacity="1"
                  d=" M-54.75,-84.875 C-54.75,-84.875 -105.75,-64.875 -105.75,-64.875 C-105.75,-64.875 -84.625,-11.625 -84.625,-11.625 C-84.625,-11.625 -44,3.75 -44,3.75 C-44,3.75 -2.8420000076293945,-10.678000450134277 -2.8420000076293945,-10.678000450134277 C-2.8420000076293945,-10.678000450134277 -2.687999963760376,-65.375 -2.687999963760376,-65.375 C-2.687999963760376,-65.375 -54.75,-84.875 -54.75,-84.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-54.75,-84.875 C-54.75,-84.875 -105.75,-64.875 -105.75,-64.875 C-105.75,-64.875 -84.625,-11.625 -84.625,-11.625 C-84.625,-11.625 -44,3.75 -44,3.75 C-44,3.75 -2.8420000076293945,-10.678000450134277 -2.8420000076293945,-10.678000450134277 C-2.8420000076293945,-10.678000450134277 -2.687999963760376,-65.375 -2.687999963760376,-65.375 C-2.687999963760376,-65.375 -54.75,-84.875 -54.75,-84.875z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(-1,0,0,1,250.62400817871094,256.1239929199219)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(69,141,200)"
                  fill-opacity="1"
                  d=" M-107.25,-65.25 C-107.25,-65.25 -86,-11 -86,-11 C-86,-11 -44,5.125 -44,5.125 C-44,5.125 -54.1879997253418,-45.5 -54.1879997253418,-45.5 C-54.1879997253418,-45.5 -107.25,-65.25 -107.25,-65.25z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-107.25,-65.25 C-107.25,-65.25 -86,-11 -86,-11 C-86,-11 -44,5.125 -44,5.125 C-44,5.125 -54.1879997253418,-45.5 -54.1879997253418,-45.5 C-54.1879997253418,-45.5 -107.25,-65.25 -107.25,-65.25z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(-1,0,0,1,250.62400817871094,256.1239929199219)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(38,37,93)"
                  fill-opacity="1"
                  d=" M-53.625,-44.9379997253418 C-53.625,-44.9379997253418 -43.875,5.25 -43.875,5.25 C-43.875,5.25 -2.8420000076293945,-10.678000450134277 -2.8420000076293945,-10.678000450134277 C-2.8420000076293945,-10.678000450134277 -2.687999963760376,-65 -2.687999963760376,-65 C-2.687999963760376,-65 -53.625,-44.9379997253418 -53.625,-44.9379997253418z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-53.625,-44.9379997253418 C-53.625,-44.9379997253418 -43.875,5.25 -43.875,5.25 C-43.875,5.25 -2.8420000076293945,-10.678000450134277 -2.8420000076293945,-10.678000450134277 C-2.8420000076293945,-10.678000450134277 -2.687999963760376,-65 -2.687999963760376,-65 C-2.687999963760376,-65 -53.625,-44.9379997253418 -53.625,-44.9379997253418z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.990119993686676,0,0,0.990119993686676,255.72158813476562,256.64300537109375)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,200)"
                  fill-opacity="1"
                  d=" M-3.4100000858306885,-11.579999923706055 C-3.4100000858306885,-11.579999923706055 -43.36899948120117,4.5 -43.36899948120117,4.5 C-43.36899948120117,4.5 -32.737998962402344,56.64099884033203 -32.737998962402344,56.64099884033203 C-32.737998962402344,56.64099884033203 -3,66.75299835205078 -3,66.75299835205078 C-3,66.75299835205078 27.496999740600586,55.76499938964844 27.496999740600586,55.76499938964844 C27.496999740600586,55.76499938964844 38.25,4.5 38.25,4.5 C38.25,4.5 -3.4100000858306885,-11.579999923706055 -3.4100000858306885,-11.579999923706055z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.4100000858306885,-11.579999923706055 C-3.4100000858306885,-11.579999923706055 -43.36899948120117,4.5 -43.36899948120117,4.5 C-43.36899948120117,4.5 -32.737998962402344,56.64099884033203 -32.737998962402344,56.64099884033203 C-32.737998962402344,56.64099884033203 -3,66.75299835205078 -3,66.75299835205078 C-3,66.75299835205078 27.496999740600586,55.76499938964844 27.496999740600586,55.76499938964844 C27.496999740600586,55.76499938964844 38.25,4.5 38.25,4.5 C38.25,4.5 -3.4100000858306885,-11.579999923706055 -3.4100000858306885,-11.579999923706055z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,200)"
                  fill-opacity="1"
                  d=" M-3.4100000858306885,-11.579999923706055 C-3.4100000858306885,-11.579999923706055 -43.36899948120117,4.5 -43.36899948120117,4.5 C-43.36899948120117,4.5 -32.737998962402344,56.64099884033203 -32.737998962402344,56.64099884033203 C-32.737998962402344,56.64099884033203 -3,66.75299835205078 -3,66.75299835205078 C-3,66.75299835205078 27.496999740600586,55.76499938964844 27.496999740600586,55.76499938964844 C27.496999740600586,55.76499938964844 38.25,4.5 38.25,4.5 C38.25,4.5 -3.4100000858306885,-11.579999923706055 -3.4100000858306885,-11.579999923706055z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.4100000858306885,-11.579999923706055 C-3.4100000858306885,-11.579999923706055 -43.36899948120117,4.5 -43.36899948120117,4.5 C-43.36899948120117,4.5 -32.737998962402344,56.64099884033203 -32.737998962402344,56.64099884033203 C-32.737998962402344,56.64099884033203 -3,66.75299835205078 -3,66.75299835205078 C-3,66.75299835205078 27.496999740600586,55.76499938964844 27.496999740600586,55.76499938964844 C27.496999740600586,55.76499938964844 38.25,4.5 38.25,4.5 C38.25,4.5 -3.4100000858306885,-11.579999923706055 -3.4100000858306885,-11.579999923706055z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.990119993686676,0,0,0.990119993686676,255.72158813476562,256.64300537109375)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-44,4.5 C-44,4.5 -33.874000549316406,56.766998291015625 -33.874000549316406,56.766998291015625 C-33.874000549316406,56.766998291015625 -3,67.38400268554688 -3,67.38400268554688 C-3,67.38400268554688 -2.4019999504089355,20.155000686645508 -2.4019999504089355,20.155000686645508 C-2.4019999504089355,20.155000686645508 -44,4.5 -44,4.5z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-44,4.5 C-44,4.5 -33.874000549316406,56.766998291015625 -33.874000549316406,56.766998291015625 C-33.874000549316406,56.766998291015625 -3,67.38400268554688 -3,67.38400268554688 C-3,67.38400268554688 -2.4019999504089355,20.155000686645508 -2.4019999504089355,20.155000686645508 C-2.4019999504089355,20.155000686645508 -44,4.5 -44,4.5z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(0.990119993686676,0,0,0.990119993686676,255.72158813476562,256.64300537109375)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(37,35,91)"
                  fill-opacity="1"
                  d=" M-3.4100000858306885,-11.579999923706055 C-3.4100000858306885,-11.579999923706055 -44,4.5 -44,4.5 C-44,4.5 -2.874000072479248,20.29400062561035 -2.874000072479248,20.29400062561035 C-2.874000072479248,20.29400062561035 38.25,4.5 38.25,4.5 C38.25,4.5 -3.4100000858306885,-11.579999923706055 -3.4100000858306885,-11.579999923706055z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3.4100000858306885,-11.579999923706055 C-3.4100000858306885,-11.579999923706055 -44,4.5 -44,4.5 C-44,4.5 -2.874000072479248,20.29400062561035 -2.874000072479248,20.29400062561035 C-2.874000072479248,20.29400062561035 38.25,4.5 38.25,4.5 C38.25,4.5 -3.4100000858306885,-11.579999923706055 -3.4100000858306885,-11.579999923706055z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,182,237)"
                  fill-opacity="1"
                  d=" M-2.375,-65.56199645996094 C-2.375,-65.56199645996094 -54.75,-45.75 -54.75,-45.75 C-54.75,-45.75 -43.875,5 -43.875,5 C-43.875,5 -2.875,21 -2.875,21 C-2.875,21 38.5,4.875 38.5,4.875 C38.5,4.875 48.9379997253418,-45.5 48.9379997253418,-45.5 C48.9379997253418,-45.5 -2.375,-65.56199645996094 -2.375,-65.56199645996094z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.375,-65.56199645996094 C-2.375,-65.56199645996094 -54.75,-45.75 -54.75,-45.75 C-54.75,-45.75 -43.875,5 -43.875,5 C-43.875,5 -2.875,21 -2.875,21 C-2.875,21 38.5,4.875 38.5,4.875 C38.5,4.875 48.9379997253418,-45.5 48.9379997253418,-45.5 C48.9379997253418,-45.5 -2.375,-65.56199645996094 -2.375,-65.56199645996094z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(83,182,237)"
                  fill-opacity="1"
                  d=" M-2.375,-65.56199645996094 C-2.375,-65.56199645996094 -54.75,-45.75 -54.75,-45.75 C-54.75,-45.75 -43.875,5 -43.875,5 C-43.875,5 -2.875,21 -2.875,21 C-2.875,21 38.5,4.875 38.5,4.875 C38.5,4.875 48.9379997253418,-45.5 48.9379997253418,-45.5 C48.9379997253418,-45.5 -2.375,-65.56199645996094 -2.375,-65.56199645996094z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-2.375,-65.56199645996094 C-2.375,-65.56199645996094 -54.75,-45.75 -54.75,-45.75 C-54.75,-45.75 -43.875,5 -43.875,5 C-43.875,5 -2.875,21 -2.875,21 C-2.875,21 38.5,4.875 38.5,4.875 C38.5,4.875 48.9379997253418,-45.5 48.9379997253418,-45.5 C48.9379997253418,-45.5 -2.375,-65.56199645996094 -2.375,-65.56199645996094z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-55.75,-45.75 C-55.75,-45.75 -44.6879997253418,5.25 -44.6879997253418,5.25 C-44.6879997253418,5.25 -2.937999963760376,21.75 -2.937999963760376,21.75 C-2.937999963760376,21.75 -2.875,-26 -2.875,-26 C-2.875,-26 -55.75,-45.75 -55.75,-45.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-55.75,-45.75 C-55.75,-45.75 -44.6879997253418,5.25 -44.6879997253418,5.25 C-44.6879997253418,5.25 -2.937999963760376,21.75 -2.937999963760376,21.75 C-2.937999963760376,21.75 -2.875,-26 -2.875,-26 C-2.875,-26 -55.75,-45.75 -55.75,-45.75z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(50,107,166)"
                  fill-opacity="1"
                  d=" M-55.75,-45.75 C-55.75,-45.75 -44.6879997253418,5.25 -44.6879997253418,5.25 C-44.6879997253418,5.25 -2.937999963760376,21.75 -2.937999963760376,21.75 C-2.937999963760376,21.75 -2.875,-26 -2.875,-26 C-2.875,-26 -55.75,-45.75 -55.75,-45.75z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-55.75,-45.75 C-55.75,-45.75 -44.6879997253418,5.25 -44.6879997253418,5.25 C-44.6879997253418,5.25 -2.937999963760376,21.75 -2.937999963760376,21.75 C-2.937999963760376,21.75 -2.875,-26 -2.875,-26 C-2.875,-26 -55.75,-45.75 -55.75,-45.75z"
                />
              </g>
            </g>
            <g
              style="display: block"
              transform="matrix(1,0,0,1,256,256)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,199)"
                  fill-opacity="1"
                  d=" M-3,-25.875 C-3,-25.875 -2.875,21.687999725341797 -2.875,21.687999725341797 C-2.875,21.687999725341797 39.1879997253418,5.375 39.1879997253418,5.375 C39.1879997253418,5.375 50.125,-45.625 50.125,-45.625 C50.125,-45.625 -3,-25.875 -3,-25.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3,-25.875 C-3,-25.875 -2.875,21.687999725341797 -2.875,21.687999725341797 C-2.875,21.687999725341797 39.1879997253418,5.375 39.1879997253418,5.375 C39.1879997253418,5.375 50.125,-45.625 50.125,-45.625 C50.125,-45.625 -3,-25.875 -3,-25.875z"
                />
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(68,140,199)"
                  fill-opacity="1"
                  d=" M-3,-25.875 C-3,-25.875 -2.875,21.687999725341797 -2.875,21.687999725341797 C-2.875,21.687999725341797 39.1879997253418,5.375 39.1879997253418,5.375 C39.1879997253418,5.375 50.125,-45.625 50.125,-45.625 C50.125,-45.625 -3,-25.875 -3,-25.875z"
                />
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke="rgb(255,255,255)"
                  stroke-opacity="1"
                  stroke-width="0"
                  d=" M-3,-25.875 C-3,-25.875 -2.875,21.687999725341797 -2.875,21.687999725341797 C-2.875,21.687999725341797 39.1879997253418,5.375 39.1879997253418,5.375 C39.1879997253418,5.375 50.125,-45.625 50.125,-45.625 C50.125,-45.625 -3,-25.875 -3,-25.875z"
                />
              </g>
            </g>
            <g
              clip-path="url(#__lottie_element_408)"
              style="display: block"
              transform="matrix(1,0,0,1,0,0)"
              opacity="1"
            >
              <g
                style="display: block"
                transform="matrix(1,0,0,1,256,256)"
                opacity="1"
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(84,182,237)"
                    fill-opacity="1"
                    d=" M-2.5,-182.5 C-2.5,-182.5 -209,-104.5 -209,-104.5 C-209,-104.5 -2.75,205.75 -2.75,205.75 C-2.75,205.75 203.75,-103.5 203.75,-103.5 C203.75,-103.5 -2.5,-182.5 -2.5,-182.5z"
                  />
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="4"
                    stroke="rgb(255,255,255)"
                    stroke-opacity="1"
                    stroke-width="0"
                    d=" M-2.5,-182.5 C-2.5,-182.5 -209,-104.5 -209,-104.5 C-209,-104.5 -2.75,205.75 -2.75,205.75 C-2.75,205.75 203.75,-103.5 203.75,-103.5 C203.75,-103.5 -2.5,-182.5 -2.5,-182.5z"
                  />
                </g>
              </g>
              <g
                style="display: block"
                transform="matrix(1,0,0,1,256,256)"
                opacity="1"
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(50,107,166)"
                    fill-opacity="1"
                    d=" M-3,-25.875 C-3,-25.875 -209,-104.5 -209,-104.5 C-209,-104.5 -2.75,205.75 -2.75,205.75 C-2.75,205.75 -3,-25.875 -3,-25.875z"
                  />
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="4"
                    stroke="rgb(255,255,255)"
                    stroke-opacity="1"
                    stroke-width="0"
                    d=" M-3,-25.875 C-3,-25.875 -209,-104.5 -209,-104.5 C-209,-104.5 -2.75,205.75 -2.75,205.75 C-2.75,205.75 -3,-25.875 -3,-25.875z"
                  />
                </g>
              </g>
              <g
                style="display: block"
                transform="matrix(1,0,0,1,256,256)"
                opacity="1"
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(68,141,200)"
                    fill-opacity="1"
                    d=" M-3,-25.875 C-3,-25.875 -2.75,205.75 -2.75,205.75 C-2.75,205.75 203.75,-103.5 203.75,-103.5 C203.75,-103.5 -3,-25.875 -3,-25.875z"
                  />
                  <path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="4"
                    stroke="rgb(255,255,255)"
                    stroke-opacity="1"
                    stroke-width="0"
                    d=" M-3,-25.875 C-3,-25.875 -2.75,205.75 -2.75,205.75 C-2.75,205.75 203.75,-103.5 203.75,-103.5 C203.75,-103.5 -3,-25.875 -3,-25.875z"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <p class="ml-[1px] text-center">Add +5 ton</p>
    </button>
  </div>
  <div
    class="bottom-s flex justify-evenly border-x-[1px] bg-[#0B0F16] pb-[10px] border-t-[1px] border-[#4f5a703d] pt-[10px]"
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

export default {
  data() {
    return {
      isGuestAddres: false,
      recive: false,
      send: false,
      count: false,
      guestAddress: "",
      valueSum: null,
      comment: "",
      showCreateWallet: false,

      userWallets: {},
      walletAddres: "",
      balance: 0,
      coin: [],
      isWaiting: false,
      isConfirmed: false,
    };
  },
  computed: {
    formattedBalance() {
      if (this.valueSum === null) {
        return this.userWallets.balance;
      }
      const res = this.userWallets.balance - this.valueSum;
      return res;
    },
  },
  methods: {
    async freeTon() {
      const guesttransactionRef = doc(
        db,
        "transaction",
        this.userWallets.addres
      );
      const guesttransactionDoc = await getDoc(guesttransactionRef);
      if (guesttransactionDoc.exists()) {
        // Если документ уже существует, получаем его текущие данные
        const currentTransactions =
          guesttransactionDoc.data().transactions || [];
        currentTransactions.push({
          text: "Received",
          guesAddress: this.userWallets.addres,
          usdt: 5 * 5.75,
          ton: "+" + 5,
          comment: "Add +5 TON",
          date: "Received " + this.getFormattedDateTime(),
          time: this.getTime(),
          transaction: this.generateCustomUUID(),
          fee: 0,
        });
        await updateDoc(guesttransactionRef, {
          transactions: currentTransactions,
        });
        this.updateAddTon();
      } else {
        await setDoc(guesttransactionRef, {
          transactions: [
            {
              text: "Received",
              guesAddress: this.userWallets.addres,
              usdt: 5 * 5.75,
              ton: "+" + 5,
              comment: "Add +5 TON",
              date: "Received " + this.getFormattedDateTime(),
              time: this.getTime(),
              transaction: this.generateCustomUUID(),
              fee: 0,
            },
          ],
        });
        this.updateAddTon();
      }
    },
    generateCustomUUID() {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
      const length = 50;
      let uuid = "";

      for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * characters.length);
        uuid += characters[randomNumber];
      }

      return uuid;
    },
    async updateVal() {
      const washingtonRef = doc(db, "users", this.userWallets.addres);
      await updateDoc(washingtonRef, {
        balance: this.formattedBalance,
      });
    },
    async updateAddTon() {
      const washingtonRef = doc(db, "users", this.userWallets.addres);
      const docSnap = await getDoc(washingtonRef);
      const currentBalance = docSnap.data().balance;
      const newBalance = currentBalance + 5;
      await updateDoc(washingtonRef, {
        balance: newBalance,
      });
      location.reload();
    },
    async updateGuesVal() {
      const washingtonRef = doc(db, "users", this.guestAddress);
      const docSnap = await getDoc(washingtonRef);
      const currentBalance = docSnap.data().balance;
      const newBalance = currentBalance + +this.valueSum;
      await updateDoc(washingtonRef, {
        balance: newBalance,
      });
      location.reload();
    },
    getFormattedDateTime() {
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

      const currentDate = new Date();
      const month = months[currentDate.getMonth()];
      const day = currentDate.getDate();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";

      const formattedDate = ` on ${month} ${day}, ${hours}:${
        minutes < 10 ? "0" + minutes : minutes
      } ${ampm}`;

      return formattedDate;
    },
    getTime() {
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedDate = ` ${hours}:${
        minutes < 10 ? "0" + minutes : minutes
      } ${ampm}`;
      return formattedDate;
    },

    saveGuestAddress() {
      const q = query(
        collection(db, "users"),
        where("addres", "==", this.guestAddress)
      );
      onSnapshot(q, (querySnapshot) => {
        if (querySnapshot.size > 0) {
          this.isGuestAddres = false;
          this.count = !this.count;
        } else {
          this.isGuestAddres = true;
        }
      });
    },
    copyToClipboard() {
      const textToCopy = this.userWallets.addres;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {})
        .catch((err) => {});
    },
    sendAction() {
      if (this.formattedBalance < 0) {
        return;
      }

      this.send = !this.send;
    },
    max() {
      this.valueSum = this.userWallets.balance;
    },
    shortenString(str, prefixLength = 4, postfixLength = 4) {
      if (!str || str.length <= prefixLength + postfixLength) {
        return str;
      }
      const prefix = str.substring(0, prefixLength);
      const postfix = str.substring(str.length - postfixLength);
      return `${prefix}...${postfix}`;
    },
    async transfer() {
      try {
        const transactionRef = doc(db, "transaction", this.userWallets.addres);
        const transactionDoc = await getDoc(transactionRef);
        if (transactionDoc.exists()) {
          const currentTransactions = transactionDoc.data().transactions || [];
          currentTransactions.push({
            text: "Sent",
            guesAddress: this.guestAddress,
            usdt: this.valueSum * 5.75,
            ton: -this.valueSum,
            comment: this.comment,
            date: "Sent " + this.getFormattedDateTime(),
            time: this.getTime(),
            transaction: this.generateCustomUUID(),
            fee: 0.1,
          });

          await updateDoc(transactionRef, {
            transactions: currentTransactions,
          });
          this.updateVal();
        } else {
          await setDoc(transactionRef, {
            transactions: [
              {
                text: "Sent",
                guesAddress: this.guestAddress,
                usdt: this.valueSum * 5.75,
                ton: -this.valueSum,
                comment: this.comment,
                date: "Sent " + this.getFormattedDateTime(),
                time: this.getTime(),
                transaction: this.generateCustomUUID(),
                fee: 0.1,
              },
            ],
          });
          this.updateVal();
        }
        const guesttransactionRef = doc(db, "transaction", this.guestAddress);
        const guesttransactionDoc = await getDoc(guesttransactionRef);
        if (guesttransactionDoc.exists()) {
          const currentTransactions =
            guesttransactionDoc.data().transactions || [];
          currentTransactions.push({
            text: "Received",
            guesAddress: this.userWallets.addres,
            usdt: this.valueSum * 5.75,
            ton: "+" + this.valueSum,
            comment: this.comment,
            date: "Received " + this.getFormattedDateTime(),
            time: this.getTime(),
            transaction: this.generateCustomUUID(),
            fee: 0.1,
          });

          await updateDoc(guesttransactionRef, {
            transactions: currentTransactions,
          });
          this.updateGuesVal();
        } else {
          await setDoc(guesttransactionRef, {
            transactions: [
              {
                text: "Received",
                guesAddress: this.userWallets.addres,
                usdt: this.valueSum * 5.75,
                ton: "+" + this.valueSum,
                comment: this.comment,
                date: "Received " + this.getFormattedDateTime(),
                time: this.getTime(),
                transaction: this.generateCustomUUID(),
                fee: 0.1,
              },
            ],
          });
          this.updateGuesVal();
        }
      } catch (error) {
        console.error("Error adding transaction: ", error);
      }
    },
  },
  async created() {
    setTimeout(async () => {
      const ad = localStorage.getItem("publicArr");
      const q = query(collection(db, "users"), where("addres", "==", ad));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.userWallets = doc.data();
      });
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
.invalid-input {
  background-color: rgba(232, 20, 55, 0.1);
}
.bottom-s {
  position: fixed;
  width: inherit;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.bottom-x {
  position: fixed;
  width: inherit;
  bottom: 0;
}
</style>
