<template>
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Main from '../components/Main.vue'
export default {
    name: "Home",
    components: {
        Header,
        Footer,
        Main
    }
}
</script>