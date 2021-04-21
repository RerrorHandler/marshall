<template>
    <div class="drawer-background" :class="{'show': active.product_drawer}" @click="$emit('closeProductDrawer')" />
    <div class="drawer" :class="{'show': active.product_drawer}">
        <div class="drawer-close" @click.prevent="$emit('closeProductDrawer')">
            X
        </div>
        <div v-if="product" class="product-details">
            <h3 class="text-center my-4">{{ product.name }}</h3>
            <img :src="require(`../../assets/second/goods${product.id}` + '.png')">
            <p class="description my-4">{{ product.description }}</p>
            <h3 class="text-center">${{ product.price.toFixed(2) }}</h3>

            <div class="cart-total" v-if="product_total">
                <h3>В корзине:</h3>
                <h4 class="mb-4">{{ product_total }}</h4>
            </div>
            

            <div class="button-container">
                <button class="remove" @click.prevent="removeFromCart()">Убрать</button>
                <button class="add" @click.prevent="addToCart()">Добавить</button>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        props: ['product', 'active'],
        emits: ['closeProductDrawer'],
        data() {
            return {

            }
        },
        methods: {
            addToCart() {
                this.$store.commit('addToCart', this.product)
            },
            removeFromCart() {
                this.$store.commit('removeFromCart', this.product)
            }
        },
        computed: {
            product_total() {
                return this.$store.getters.productQuantity(this.product)
            }            
        }
    }
</script>

<style lang="scss">
    .drawer-background {
        width: 100%;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(124, 124, 124, 0.541);
        z-index: 100;
        display: none;
        transition: display .5s;

        &.show {
            display: block;
        }
    }

    .drawer-background.show {
        display: block;
    }

    .drawer {
        width: 92vw;
        height: 100vh;
        background-color: #ffdeadf0;
        position: fixed;
        top: 0;
        left: -105vw;
        padding: 15px;
        transition: left .5s;
        z-index: 101;
        overflow-y: hidden;

        &.show {
            left: 0;
        }
    }

    .drawer-close {
        font-size: 1.5rem;
        padding: 5px;
        margin-right: 10px;
        border-radius: 5px;
        right: 10px;
        color: black;
        width: 15px;
        float: right;
        cursor: pointer;
    }

    

    .product-details {
        display: flex;
        justify-content: center;
        flex-direction: column;

        p.description {
            padding:20px;
            line-height: 1.5rem;
        }

        .button-container {
            button {
                width: 150px;
                border: none;
                padding: 10px;
                border-radius: 5px;
                margin: 0 5px 50px 5px;
                cursor: pointer;
            }

            button.remove {
                color: white;
                border: 1px solid #124524;
                background-color: #124524;
            }

            button.add {
                color: white;
                border: 1px solid #124524;
                background-color: #124524;
            }
        }
    }

    

    

    @media (min-width: 500px) {
        .drawer {
            width: 450px;
        }
    }
</style>