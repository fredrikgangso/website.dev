<script lang="ts" setup>


</script>

<template>
    <div class="w-screen">
        <div class="px-20 py-4 flex justify-between">
            <div class="grow">
                < FG />
            </div>
            <div class="grow flex gap-2 justify-end">
                <!-- slot for CV button/ light and dark mode. -->
                <div>
                    {{ $t('header.about') }}
                </div>
                <div>
                    {{ $t('header.work') }}
                </div>
                <div>
                    {{ $t('header.testimonials') }}

                </div>
                <div>
                    {{ $t('header.contact') }}

                </div>
                <div>
                    O
                </div>
                <div>
                    <button @click="toggleTheme" class="bg-red-900 text-white p-2 rounded-md" />
                </div>
            </div>
        </div>
    </div>

</template>