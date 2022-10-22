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
<div class="h-screen bg-yellow-100 z-20">
    <div class="px-28">
        <div id="profile" class="pt-20">Profile</div>
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