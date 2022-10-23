<script setup lang="ts">
function nowAge(): number{
    const today = new Date();
    const thisYearsBirthday = new Date(today.getFullYear(), 7-1, 27);
    let age = today.getFullYear() - 1994;

    if(today < thisYearsBirthday){
        age--;
    }
    return age;
}
</script>

<template>
<div id="profile" class="h-screen w-full relative">
    <div class="max-w-3xl h-96 top-0 left-0 right-0 bottom-0 m-auto absolute">
        <div class="w-60 m-auto text-5xl pb-10">
            <font-awesome-icon class="" icon="fa-regular fa-address-card" />
            Profile
        </div>
        <div class="grid grid-cols-3">
            <div class="w-36 m-auto py-5">
                <img class="w-36 h-36 rounded-full" src="@/assets/main_icon.png" alt="アイコン">
            </div>
            <div class="col-span-2">
                はじめまして。平成6年生まれ（{{nowAge()}}歳）大阪出身のエンジニア、とにぃと申します。
                大阪大学大学院を修了。在学中にプログラミングを学びはじめ、AdnroidアプリからBackEndサーバ、Webサイトのフロント開発に携わりました。<br>
                現在はIT企業に就職しエンジニアとコンサルタントとしてのキャリアを積みつつ、休日は趣味で作りたいものを作ってます。
                <div class="pt-2">
                    <span>
                        <a class="text-color1" href="https://github.com/tinytony27" target="_blank">
                            <span class="font-bold">GitHub&nbsp;</span>
                            <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
                        </a>
                    </span>
                </div>
                <div>
                    <span>
                        <a class="text-color1" href="https://zenn.dev/tinytony" target="_blank">
                            <span class="font-bold">Zenn&nbsp;</span>
                            <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style>
</style>