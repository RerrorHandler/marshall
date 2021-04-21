<template>
    <header class="container flex flex-row items-center justify-between mx-auto">
        <div>
            <img src="../assets/logo.png">
        </div>
        <router-link to="/" class="text-2xl">Главная</router-link>
        <router-link to="/collection" class="text-2xl">Коллекция</router-link>
        <router-link to="/about" class="mr-80 text-2xl z-10">О нас</router-link>
        <div class=" absolute right-0 top-0"> 
            <img src="../assets/que.png" class="-z-10">
            <router-link to="/cart" class="absolute right-40 top-24 z-10"><img src="../assets/bag.png"></router-link>
            <router-link to="/user" class="absolute right-20 top-24 z-10"><img src="../assets/user.png"></router-link>
        </div>
    </header>
</template>
<style>
.-z-10 {
    z-index: -10;
}
</style>