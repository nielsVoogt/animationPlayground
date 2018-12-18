<template>
    <div>
        <button @click="triggerAnimation()">
            klik dan
        </button>
        <div>
            I am card
        </div>
        <div ref="square" class="square">
            s
        </div>
    </div>
</template>

<script>

import { translate } from '../utils/anime.js';

export default {
    methods: {
        triggerAnimation() {
            translate(this.$refs.square);
        }
    }
}
</script>

<style>
    .square {
        width: 10px;
        height: 10px;
        background: red;
    }
</style>
