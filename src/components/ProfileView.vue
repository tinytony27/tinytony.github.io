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
<div id="profile" class="sm:h-screen w-full sm:relative">
    <div class="max-w-3xl sm:h-96 sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 m-auto sm:absolute sm:py-0 py-20">
        <div class="w-60 m-auto text-5xl pb-10">
            <font-awesome-icon class="" icon="fa-regular fa-address-card" />
            Profile
        </div>
        <div class="sm:grid sm:grid-cols-3">
            <div class="w-36 m-auto py-5">
                <img class="w-36 h-36 rounded-full" src="@/assets/main_icon.png" alt="アイコン">
            </div>
            <div class="sm:col-span-2 leading-relaxed sm:p-0 p-10">
                はじめまして。平成6年生まれ（{{nowAge()}}歳）大阪出身のエンジニア、とにぃと申します。
                大阪大学大学院を修了。在学中にプログラミングを学びはじめ、AdnroidアプリからBackEndサーバ、Webサイトのフロント開発に携わりました。<br>
                現在はIT企業に就職しエンジニアとコンサルタントのキャリアを積みつつ、休日は趣味で作りたいものを作ってます。
                <div>
                    <div class="pt-3 font-bold">経験のある技術・分野</div>
                    <div>
                        Vue, Angular, JavaScript, TypeScript, CSS, TailwindCSS, Laravel, Java, Python, Oracle, MySQL, AWS, Unity
                    </div>
                </div>
                <div>
                    <div class="pt-3 font-bold">興味のある技術・分野</div>
                    <div>
                        IoT, AI, Robot, Metaverse
                    </div>
                </div>
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
                <div>
                    <span>
                        <a class="text-color1" href="https://twitter.com/tiny_tony_" target="_blank">
                            <span class="font-bold">Twitter&nbsp;</span>
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