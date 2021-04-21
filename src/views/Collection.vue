<template>
    <div>
        <Header />
        <CollectionMain />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import CollectionMain from '../components/CollectionMain.vue'
export default {
    name: "Collection",
    components: {
        Header,
        Footer,
        CollectionMain
    }
}
</script>