<template>
    <div class="cart-item-card">
        <h3>Всего: ${{ cart_total.toFixed(2) }}</h3>

        <button class="view-product-button">Оплатить заказ</button>
    </div>
</template>

<script>
    export default {
        computed: {
            cart_total() {
                return this.$store.getters.cartItems.reduce((a, b) => a + (b.price * b.quantity), 0)
            }
        }
    }
</script>