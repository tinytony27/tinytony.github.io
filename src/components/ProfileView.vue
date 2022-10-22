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
<div id="profile" class="h-screen w-full relative bg-yellow-100">
    <div class="w-96 h-96 top-0 left-0 right-0 bottom-0 m-auto absolute bg-yellow-200">
        <div class="">Profile</div>
        <div class="w-28 m-auto bg-blue-300">
            <img class="w-28 h-28 rounded-full" src="@/assets/main_icon.png" alt="アイコン">
        </div>
        <div class="">
            はじめまして。平成6年生まれ（{{nowAge()}}歳）大阪出身のエンジニア、とにぃと申します。
            大阪大学在学中にプログラミングを学びはじめ、研究でAdnroidアプリからBackEndサーバの実装経験を積み、インターンで教育系Webサイトのフロント開発に携わりました。
            現在はIT企業に就職しエンジニアとコンサルタントとしてのキャリアを積みつつ、休日は趣味で作りたいものを作ってます。
        </div>
    </div>
</div>
</template>

<style>
</style>