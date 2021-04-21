<template>
    <div>
        <Header />
        <CartItemCard
            v-for="item in items"
            :key="item.id"
            :item="item" />

        <CartSummaryPaymentCard />
        <Footer />
    </div>
</template>

<script>
    import CartItemCard from '../components/cart/CartItemCard.vue'
    import CartSummaryPaymentCard from '../components/cart/CartSummaryPaymentCard.vue'
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    export default {
        components: {
            CartItemCard, CartSummaryPaymentCard, Header, Footer
        },
        computed: {
            items() {
                return this.$store.getters.cartItems
            }
        }
    }
</script>