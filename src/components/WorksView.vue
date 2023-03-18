<script setup lang="ts">
</script>

<template>
<div id="works" class="sm:h-screen w-full sm:relative">
    <div class="max-w-3xl sm:h-96 sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 m-auto sm:absolute sm:py-0 py-20">
        <div class="w-60 m-auto text-5xl pb-10">
            <font-awesome-icon icon="fa-solid fa-box-archive" />
            Works
        </div>
        <div class="sm:grid sm:grid-cols-3 pb-8">
            <div class="w-52 h-44 m-auto">
                <a href="https://github.com/tinytony27/tinytony.github.io" target="_blank" rel="noopener">
                    <img class="w-52 h-32 rounded-lg border-4 border-color1" src="@/assets/github.png" alt="Github"/>
                </a>
                <div class="h-12 pt-2 text-center">ポートフォリオ</div>
            </div>
            <div class="w-52 h-44 m-auto">
                <a href="https://github.com/tinytony27/web-scraping" target="_blank" rel="noopener">
                    <img class="w-52 h-32 rounded-lg border-4 border-color1" src="@/assets/github.png" alt="Github"/>
                </a>
                <div class="h-12 pt-2 text-center">Webスクレイピング</div>
            </div>
            <div class="w-52 h-44 m-auto">
                <a href="https://the-only-calendar.netlify.app/" target="_blank" rel="noopener">
                    <img class="w-52 h-32 rounded-lg border-4 border-color1" src="@/assets/calendar.png" alt="カレンダーメイカー"/>
                </a>
                <div class="h-12 pt-2 text-center">カレンダーメイカー</div>
            </div>
            <!--div class="w-52 h-48 m-auto">
                <a href="" target="_blank">
                    <div class="w-52 h-36 rounded-lg border-4 border-color1">
                        
                    </div>
                </a>
                <div class="h-12 pt-2 text-center">XXXX</div>
            </div-->
        </div>
        <div class="w-4/5 m-auto">
            <span>その他の経歴</span>
            <li class="">
                [2018~2019年]
                <a class="text-color1" href="https://www.youtube.com/c/YumenoSekaiChannel" target="_blank">
                    <span class="font-bold">Vtuberユメノセカイ&nbsp;</span>
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
                </a>
                の初期動画撮影Techサポート Unity使用
            </li>
            <li>
                [2018~2019年]教育系Webサイトのフロント開発 Laravel+jQuery使用
            </li>
            <li>
                [2022～現在]
                <a class="text-color1" href="https://waraini-ikitai.com/" target="_blank">
                    <span class="font-bold">情報まとめサイト&nbsp;</span>
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
                </a>
                の開発 Angular+AWS使用
            </li>
        </div>
    </div>
</div>
</template>

<style>
</style>