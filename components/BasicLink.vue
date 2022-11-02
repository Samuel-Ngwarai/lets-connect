<template>
    <a :href="href" class="text-darkblue underline decoration-red hover:text-red hover:decoration-darkblue transition-all" target="_blank">
        <slot></slot>
    </a>
</template>

<script setup lang="ts">
defineProps({
  href: String,
})
</script>