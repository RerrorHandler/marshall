<template>
    <div class="container flex flex-col mx-auto mt-52">
        <div><img src="../assets/maincont.png"></div>
        <div class="flex flex-col mx-auto text-5xl -mt-40 mb-80">
            <router-link to="/new" class="border-2 relative shadow-2xl tracking-widest border-gray-50 bg-white rounded-none px-96 py-8">Новинки <img src="../assets/arrow.png" class="absolute" id="arrow"></router-link>
            <router-link to="/sale" class="border-2 relative shadow-2xl tracking-widest border-gray-50 bg-white rounded-none my-24 px-96 py-8">Скидки <img src="../assets/arrow.png" class="absolute" id="arrow"></router-link>
            <router-link to="/give" class="border-2 relative shadow-2xl tracking-widest border-gray-50 bg-white rounded-none px-96 py-8">Розыгрыш<img src="../assets/arrow.png" class="absolute" id="arrow"></router-link>
        </div>
    </div>
</template>
<style>
#arrow {
    top: 31px;
    right: 17px;
}
</style>