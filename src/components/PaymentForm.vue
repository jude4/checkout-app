<template>
  <div class="px-12">
    <form class="mt-5">
      <h1 class="text-xl">Customer Details</h1>
      <div class="mt-5">
        <label class="block">
          <span class="block text-md font-medium text-slate-700"
            >First name</span
          >
          <input
            type="text"
            value="tbone"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
      </div>

      <div class="mt-5">
        <label class="block">
          <span class="block text-md font-medium text-slate-700"
            >Last name</span
          >
          <input
            type="text"
            value="tbone"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
      </div>

      <div class="mt-5">
        <label class="block">
          <span class="block text-md font-medium text-slate-700"
            >Email address</span
          >
          <input
            type="email"
            value="example@gmail.com"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
      </div>

      <div class="mt-5">
        <label class="block">
          <span class="block text-md font-medium text-slate-700"
            >Phone number</span
          >
          <input
            type="number"
            value="+234"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
      </div>
      <hr class="my-5" />
      <h1 class="text-xl">Payment Details</h1>

      <div class="mt-5">
        <label class="block">
          <span class="block text-md font-medium text-slate-700"
            >Credit Card Number</span
          >
          <input
            type="number"
            value=""
            placeholder="424 424 424 424 424"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
      </div>

      <div class="mt-5">
        <label class="block">
          <span class="block text-md font-medium text-slate-700"
            >Expiry Month</span
          >
          <input
            type="number"
            value=""
            placeholder="01"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
      </div>

      <div class="mt-5">
        <label class="block">
          <span class="block text-md font-medium text-slate-700">CCV</span>
          <input
            type="number"
            value=""
            placeholder="123"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
      </div>

      <div class="mt-5">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-purple-400 text-base leading-6 font-medium rounded-md text-purple-800 bg-white hover:text-purple-700 focus:border-purple-300 transition ease-in-out duration-150"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
