<script lang="ts" setup>


</script>

<template>
    <div class="py-24 flex gap-12">
        <div class="grow flex flex-col gap-12">
            <div>
                <h1>
                    {{ $t('aboutMeCard.title', { name: 'Fredrik' }) }}
                </h1>
                <p>
                    {{ $t('aboutMeCard.description') }}
                </p>
            </div>
            <div class="flex flex-col">
                <span>
                    <Icon name="uil:map-pin" />
                    {{ $t('aboutMeCard.location') }}
                </span>
                <span>
                    <Icon name="uil:mail" />
                    {{ $t('aboutMeCard.email') }}
                </span>
            </div>
            <div class="flex gap-1 items-center">
                <a href="https://github.com/fredrikgangso" target="_blank" class="flex items-center">
                    <Icon name="uil:github" size="1.5rem" />
                </a>
                <a href="https://www.linkedin.com/in/fredrik-gangs%C3%B8-08517023b/" target="_blank"
                    class="flex items-center">
                    <Icon name="uil:linkedin" size="1.5rem" />
                </a>
                <a href="https://x.com/fredrikgangso" target="_blank" class="flex items-center">
                    <Icon name="uil:twitter" size="1.5rem" />
                </a>
            </div>
        </div>
        <div class="grow">
            <SImg src="https://via.placeholder.com/500" />
        </div>

    </div>

</template>