<template>
 
<div class="p-[1rem]">
      <h1 class="text-[30px] font-bold mb-[15px]">History</h1>
    <div
      @click="isPass = !isPass"
      class="bg-[#1D2633] flex justify-between rounded-t-[15px] p-[15px] hover:bg-[#2E3847]"
    >
      <p class="font-bold">Recovery phrase</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.75rem"
        height="1.75rem"
        viewBox="0 0 28 28"
      >
        <path
          opacity="0.32"
          d="M12.5 10.001C12.5 11.3817 11.3807 12.501 10 12.501C8.61929 12.501 7.5 11.3817 7.5 10.001C7.5 8.62026 8.61929 7.50098 10 7.50098C11.3807 7.50098 12.5 8.62026 12.5 10.001Z"
          fill="#45AEF5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19 11.001C19 12.0397 18.802 13.0322 18.4418 13.9428L24.0627 19.5637C24.4086 19.9096 24.5816 20.0826 24.7053 20.2844C24.8149 20.4634 24.8957 20.6584 24.9447 20.8625C25 21.0927 25 21.3373 25 21.8265V25.001H20.5V23.501H19V22.001H17.5V20.501H16L13.9418 18.4428C13.0312 18.803 12.0387 19.001 11 19.001C6.58172 19.001 3 15.4193 3 11.001C3 6.5827 6.58172 3.00098 11 3.00098C15.4183 3.00098 19 6.5827 19 11.001ZM10 12.501C11.3807 12.501 12.5 11.3817 12.5 10.001C12.5 8.62026 11.3807 7.50098 10 7.50098C8.61929 7.50098 7.5 8.62026 7.5 10.001C7.5 11.3817 8.61929 12.501 10 12.501Z"
          fill="#45AEF5"
        />
      </svg>
    </div>
    <div
      @click="showCreateWallet = !showCreateWallet"
      class="bg-[#1D2633] flex justify-between p-[15px] hover:bg-[#2E3847]"
    >
      <p class="font-bold">Sign Out</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.75rem"
        height="1.75rem"
        viewBox="0 0 28 29"
      >
        <path
          opacity="0.32"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 5.60459C10 5.17777 10 4.81615 10.0083 4.5061H7.2C6.0799 4.5061 5.51984 4.5061 5.09202 4.72409C4.71569 4.91584 4.40973 5.2218 4.21799 5.59812C4 6.02595 4 6.586 4 7.7061V20.3061C4 21.4262 4 21.9863 4.21799 22.4141C4.40973 22.7904 4.71569 23.0964 5.09202 23.2881C5.51984 23.5061 6.0799 23.5061 7.2 23.5061H10.0083C10 23.1961 10 22.8344 10 22.4076V5.60459ZM14.75 15.7561C15.7165 15.7561 16.5 14.9726 16.5 14.0061C16.5 13.0396 15.7165 12.2561 14.75 12.2561C13.7835 12.2561 13 13.0396 13 14.0061C13 14.9726 13.7835 15.7561 14.75 15.7561Z"
          fill="#2A5272"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.2895 3.03122C10 3.50899 10 4.2075 10 5.60453V22.4076C10 23.8046 10 24.5031 10.2895 24.9809C10.5432 25.3996 10.9417 25.7107 11.4094 25.8553C11.9431 26.0203 12.6208 25.8508 13.9761 25.512L21.5761 23.612C22.4428 23.3954 22.8761 23.287 23.1988 23.0454C23.4834 22.8323 23.7061 22.5471 23.8439 22.2192C24 21.8476 24 21.4009 24 20.5076V7.50453C24 6.6112 24 6.16453 23.8439 5.79292C23.7061 5.46504 23.4834 5.17983 23.1988 4.96667C22.8761 4.72507 22.4428 4.61674 21.5761 4.40008L13.9761 2.50008C12.6208 2.16125 11.9431 1.99183 11.4094 2.15678C10.9417 2.30135 10.5432 2.61248 10.2895 3.03122ZM14.75 15.756C15.7165 15.756 16.5 14.9725 16.5 14.006C16.5 13.0395 15.7165 12.256 14.75 12.256C13.7835 12.256 13 13.0395 13 14.006C13 14.9725 13.7835 15.756 14.75 15.756Z"
          fill="#45AEF5"
        />
      </svg>
    </div>
    <div
      class="bg-[#1D2633] flex justify-between p-[15px] rounded-b-[15px] hover:bg-[#2E3847]"
    >
      <p class="font-bold">Contact Us</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.75rem"
        height="1.75rem"
        viewBox="0 0 28 29"
      >
        <path
          d="M3 8.00783V16.6078C3 18.848 3 19.9681 3.43597 20.8238C3.81947 21.5764 4.43139 22.1884 5.18404 22.5719C6.03969 23.0078 7.15979 23.0078 9.4 23.0078H18.6C20.8402 23.0078 21.9603 23.0078 22.816 22.5719C23.5686 22.1884 24.1805 21.5764 24.564 20.8238C25 19.9681 25 18.848 25 16.6078V8.00781L16.5233 13.0168C15.6051 13.5593 15.1461 13.8306 14.6568 13.9367C14.224 14.0305 13.776 14.0305 13.3432 13.9367C12.8539 13.8306 12.3949 13.5593 11.4767 13.0168L3 8.00783Z"
          fill="#45AEF5"
        />
        <path
          opacity="0.32"
          d="M3 8.00777L11.4767 2.99881C12.3949 2.45626 12.8539 2.18499 13.3432 2.07892C13.776 1.98509 14.224 1.98509 14.6568 2.07892C15.1461 2.18499 15.6051 2.45626 16.5233 2.99881L25 8.00777L16.5233 13.0167C15.6051 13.5593 15.1461 13.8306 14.6568 13.9366C14.224 14.0305 13.776 14.0305 13.3432 13.9366C12.8539 13.8306 12.3949 13.5593 11.4767 13.0167L3 8.00777Z"
          fill="#45AEF5"
        />
      </svg>
    </div>
</div>
  <div
    class="bottom-s flex justify-evenly border-x-[1px]  bg-[#0B0F16] pb-[10px] border-t-[1px] border-[#4f5a703d] pt-[10px]"
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
              fill="#8994A3"
            />
            <path
              opacity="0.32"
              d="M18.75 12.5H22.75V16.5H18.75V12.5Z"
              fill="#8994A3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.18597 8.18404C3.75 9.03969 3.75 10.1598 3.75 12.4V16.6C3.75 18.8402 3.75 19.9603 4.18597 20.816C4.56947 21.5686 5.18139 22.1805 5.93404 22.564C6.78969 23 7.90979 23 10.15 23H19.35C21.5902 23 22.7103 23 23.566 22.564C24.3186 22.1805 24.9305 21.5686 25.314 20.816C25.75 19.9603 25.75 18.8402 25.75 16.6V12.4C25.75 10.1598 25.75 9.03969 25.314 8.18404C24.9305 7.43139 24.3186 6.81947 23.566 6.43597C22.7103 6 21.5902 6 19.35 6H10.15C7.90979 6 6.78969 6 5.93404 6.43597C5.18139 6.81947 4.56947 7.43139 4.18597 8.18404ZM20.5 12.75C19.5335 12.75 18.75 13.5335 18.75 14.5C18.75 15.4665 19.5335 16.25 20.5 16.25C21.4665 16.25 22.25 15.4665 22.25 14.5C22.25 13.5335 21.4665 12.75 20.5 12.75Z"
              fill="#8994A3"
            />
          </svg>
          <p class="text-[12px] font-bold text-[#8994A3]">Wallet</p>
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
              fill="#45AEF5"
            />
            <path
              opacity="0.32"
              d="M18.25 14C18.25 16.2091 16.4591 18 14.25 18C12.0409 18 10.25 16.2091 10.25 14C10.25 11.7909 12.0409 10 14.25 10C16.4591 10 18.25 11.7909 18.25 14Z"
              fill="#45AEF5"
            />
          </svg>
          <p class="text-[12px] font-bold text-[#45AEF5]">Settings</p>
        </div>
      </router-link>
    </div>

    <div
      v-if="showCreateWallet"
      class="bg-[#10161F] rounded-t-[17px] create-wallet-animation  w-[100%] bottom-x   pt-[30px] z-50 px-[10px]"
    >
      <p
        @click="showCreateWallet = !showCreateWallet"
        class="bg-[#1D2633] w-[30px] h-[30px] text-center rounded-full cursor-pointer hover:bg-[#313c4a] top-[20px] absolute right-[20px]"
      >
        <router-link to="/settings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            class="ml-[7px] mt-[7px]"
            viewBox="0 0 16 16"
            color="#8994A3"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.46967 2.46967C2.76256 2.17678 3.23744 2.17678 3.53033 2.46967L8 6.93934L12.4697 2.46967C12.7626 2.17678 13.2374 2.17678 13.5303 2.46967C13.8232 2.76256 13.8232 3.23744 13.5303 3.53033L9.06066 8L13.5303 12.4697C13.8232 12.7626 13.8232 13.2374 13.5303 13.5303C13.2374 13.8232 12.7626 13.8232 12.4697 13.5303L8 9.06066L3.53033 13.5303C3.23744 13.8232 2.76256 13.8232 2.46967 13.5303C2.17678 13.2374 2.17678 12.7626 2.46967 12.4697L6.93934 8L2.46967 3.53033C2.17678 3.23744 2.17678 2.76256 2.46967 2.46967Z"
              fill="currentColor"
            />
          </svg>
        </router-link>
      </p>
      <h1 class="text-[30px] font-bold text-center">Sign Out?</h1>
      <p class="text-center gr mt-[10px]">
        This will erase key to your wallet. Make sure you have backed up your
        recovery phrase.
      </p>
      <div
        class="bg-[#1D2633] w-[100%] rounded-[15px] flex p-[15px] items-start mt-[30px] mb-[30px]"
      >
        <input
          v-model="backupChecked"
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <div class="ml-[10px]">
          <p>I have a backup copy of recovery phrase</p>
          <p class="text-[#3079AB] font-bold">Back up now</p>
        </div>
      </div>
      <div
        @click="signOut"
        class="mt-[20px] bg-[#28303D] py-[18px] rounded-[17px] cursor-pointer w-[100%] mb-[15px]"
        :class="{ 'opacity-50': !backupChecked }"
        :disabled="!backupChecked"
      >
        <p class="text-center font-[600]">Sign Out</p>
      </div>
    </div>
    <div
      v-if="isPass"
      class="bg-[#10161F] rounded-t-[17px] create-wallet-animation bottom-x  w-[100%]  pt-[30px] z-50 px-[20px]"
    >
      <p
        @click="isPass = !isPass"
        class="bg-[#1D2633] w-[30px] h-[30px] text-center rounded-full cursor-pointer hover:bg-[#313c4a] top-[20px] absolute right-[20px]"
      >
        <router-link to="/settings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            class="ml-[7px] mt-[7px]"
            viewBox="0 0 16 16"
            color="#8994A3"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.46967 2.46967C2.76256 2.17678 3.23744 2.17678 3.53033 2.46967L8 6.93934L12.4697 2.46967C12.7626 2.17678 13.2374 2.17678 13.5303 2.46967C13.8232 2.76256 13.8232 3.23744 13.5303 3.53033L9.06066 8L13.5303 12.4697C13.8232 12.7626 13.8232 13.2374 13.5303 13.5303C13.2374 13.8232 12.7626 13.8232 12.4697 13.5303L8 9.06066L3.53033 13.5303C3.23744 13.8232 2.76256 13.8232 2.46967 13.5303C2.17678 13.2374 2.17678 12.7626 2.46967 12.4697L6.93934 8L2.46967 3.53033C2.17678 3.23744 2.17678 2.76256 2.46967 2.46967Z"
              fill="currentColor"
            />
          </svg>
        </router-link>
      </p>
      <h1 class="text-[20px] font-bold text-left">Enter password</h1>

      <div class="pt-[20px]">
        <input
          type="password"
          id="confirmPassword"
          v-model="password"
          class="bg-[#1D2633] text-[white] text-sm rounded-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-[15px] h-[60px] text-[20px]"
          placeholder="password"
          required
        />
      </div>
      <div class="flex gap-[10px]">
        <div
          @click="isPass = !isPass"
          class="mt-[20px] bg-[#28303D] py-[18px] rounded-[17px] cursor-pointer w-[100%] mb-[15px]"
          :disabled="!backupChecked"
        >
          <p class="text-center font-[600]">Cancel</p>
        </div>
        <div
          @click="confirmAction"
          class="mt-[20px] bg-[#45AEF5] py-[18px] rounded-[17px] cursor-pointer w-[100%] mb-[15px]"
          :disabled="!backupChecked"
        >
          <p class="text-center font-[600]">Confirm</p>
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
export default {
  data() {
    return {
      showCreateWallet: false,
      isPass: false,
      backupChecked: false,
      password: "",
      passChek: "",
    };
  },
  methods: {
    signOut() {
      if (this.backupChecked) {
        localStorage.removeItem("publicArr");
        this.$router.push("/");
      }
    },
    async confirmAction() {
      if (this.password === this.passChek) {
        this.$router.push("/recovery");
      }
    },
  },
  async created() {
    const ad = localStorage.getItem("publicArr");
    const washingtonRef = doc(db, "users", ad);
    const docSnap = await getDoc(washingtonRef);
    this.passChek = docSnap.data().password;
  },
};
</script>

<style lang="scss" scoped>
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
