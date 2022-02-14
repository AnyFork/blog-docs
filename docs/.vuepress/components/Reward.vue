<template>
    <details class="custom-block detail">
        <summary>打赏一下</summary>
        <br />
        <p align="center" style="max-width: 200px; margin: 0 auto">
            <img
                :src="$withBase('/images/pay.png')"
                style="border: 1px solid #dddddd"
                class="medium-zoom-image"
            />
        </p>
        <p align="center">「真诚赞赏，手留余香」</p>
    </details>
</template>
<style lang="stylus" scoped>
.detail {
    margin: 5% auto 0 auto;
    width: 100%;
    cursor: pointer
}
summary {
    background-color: #3eaf7c;
    text-align: center;
    margin: 0 auto;
    width: 150px;
    height: 50px;
    line-height: 50px;
}
</style>
