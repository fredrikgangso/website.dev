<script lang="ts" setup>

defineProps<{
    src: string
    alt?: string
    imgClass?: string
    backgroundDivClass?: string
}>()
</script>


<template>
    <div>
        <div class="relative inline-block">
            <!-- Background shadow -->
            <div class="absolute -bottom-4 -right-4 w-full h-full" :class="backgroundDivClass ?? 'bg-gray-200'" />
            <!-- Image with border -->
            <img class="relative z-10 border-4 " :class="imgClass ?? 'border-white'" :src="src" :alt="alt || src" />
        </div>
    </div>
</template>