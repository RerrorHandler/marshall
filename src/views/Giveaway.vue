<template>
    <div>
        <Header />
        <GiveMain />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import GiveMain from '../components/GiveMain.vue'
export default {
    name: "About",
    components: {
        Header,
        Footer,
        GiveMain
    }
}
</script>