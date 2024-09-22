<script lang="ts" setup>


</script>

<template>
    <div>
        <div class="py-4 flex justify-between items-center">
            <div class="grow">
                < FG />
            </div>
            <div class="grow flex gap-2 justify-end items-center">
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
                <div class="items-center flex">
                    <Icon name="i-hero-icons:sun" />
                </div>
                <div>
                    <button class="bg-gray-600 rounded-md p-1 text-white">
                        {{ $t('header.downloadCV') }}
                    </button>
                </div>
            </div>
        </div>

    </div>

</template>