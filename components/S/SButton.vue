<script lang="ts" setup>

const props = defineProps<{
    type: 'button' | 'submit' | 'reset'
    error?: boolean
    
}>()
</script>


<template>
    <input :type :placeholder="props.type" />

</template>