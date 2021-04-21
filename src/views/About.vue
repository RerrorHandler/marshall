<template>
    <div>
        <Header />
        <AboutMain />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import AboutMain from '../components/AboutMain.vue'
export default {
    name: "About",
    components: {
        Header,
        Footer,
        AboutMain
    }
}
</script>