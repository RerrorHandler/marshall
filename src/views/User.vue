<template>
    <div>
        <Header />
        <UserMain />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import UserMain from '../components/UserMain.vue'
export default {
    name: "Home",
    components: {
        Header,
        Footer,
        UserMain
    }
}
</script>