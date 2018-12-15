<template>
    <div>
        <div class="card card--large-shadow card--quick-select">
            <div :key="index" class="quick-select-option" v-for="(item, index) in 6">
                <span class="quick-select-option__icon">
                    <!-- SVG -->
                </span>
                <p class="quick-select-option__description">
                    Desc
                </p>
            </div>
        </div>

        <p class="title"></p>

        <div class="flex">
            <div class="card card--balance">
                <span class="indicator" />
                <p class="number">1234</p>
            </div>
            <div class="card card--balance">
                <span class="indicator" />
                <p class="number">1234</p>
            </div>
        </div>


        <ul class="menu">
            <li class="menu__item" :key="index" v-for="(item, index) in 4">
                item
                <!-- SVG -->
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
