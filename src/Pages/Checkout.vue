<template>
    <div class="grid md:grid-cols-3 gap-10 px-10">
        <div class="md:col-span-2 bg-white shadow-xl p-5 ">
            <payment-form></payment-form>
        </div>
        <div class="md:col-span-1">
            <div class="bg-white shadow-xl p-5 ">
                <order-list></order-list>
            </div>
        </div>
    </div>
</template>

<script>
import OrderList from '../components/OrderList.vue'
import PaymentForm from '../components/PaymentForm.vue'
export default {
  components: { PaymentForm, OrderList },

}
</script>

<style>

</style>