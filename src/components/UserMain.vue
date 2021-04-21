<template>
    <div class="container mt-20 mx-auto text-3xl">
        <span class="text-4xl">Личный кабинет</span>
        <div class="flex mt-10 flex-row">
            <div>
                <img src="../assets/avatar.png">
            </div>
            <div class="flex ml-64 flex-col space-y-5">
                <div class="text-5xl flex flex-row items-center">Edward Tsoy <img src="../assets/check.png" class="ml-2 transform scale-50"></div>
                <div>мои заказы</div>
                <div>мне нравится</div>
                <div>Бонусы</div>
                <div>Баланс: </div>
            </div>
        </div>
        <div class="flex flex-col mt-10 items-center">
            <button class=" border-2 px-6 py-2 mb-4 shadow-md bg-white">Редактироть профиль</button>
            <button class=" border-2 px-12 py-2 shadow-md bg-white">Привязать карту</button>
        </div>
    </div>
</template>