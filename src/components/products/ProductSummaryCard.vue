<template>
    <div class="card">
        <h3>
            {{ product.name }}
        </h3>
        <div>
            <img :src="require(`../../assets/second/goods${product.id}` + '.png')">
        </div>
        <h5 class="price text-xl ml-1 my-2">Цена: {{ product.price.toFixed(2) }}$</h5>
        <button class="view-product-button" @click.prevent="$emit('view-product', product)">Купить</button>
    </div>
</template>

<script>
    export default {
        props: ['product'],
        computed: {
            description() {
                return this.product.description.substring(0, 150)
            }
        }
    }
</script>

<style lang="scss">
.card {
    width: 80%;
    margin: 10%;
    padding: 10px;
    border-radius: 5px;

    h5.price {
        color: black;
    }

    p.description {
        font-size: .85rem;
    }

    p.text-muted {
        color: gray;
    }
}

button.view-product-button {
        padding-left: 32px;
        padding-right: 32px;
        background-color: #123524;
        border: none;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }

@media (min-width: 500px) {
    .card {
        width: 350px;
        margin: 10px;
    }
}
</style>