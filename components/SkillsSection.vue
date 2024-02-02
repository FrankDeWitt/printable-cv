<script lang="ts" setup>
import { skills } from "@/src/cv.json";
</script>

<template>
  <section class="flex min-h-0 flex-col gap-y-3">
    <h2 class="text-xl font-bold">Skills</h2>
    <div class="flex flex-wrap gap-1">
      <div
        v-for="(value, key) in skills"
        class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60"
      >
        {{ value }}
      </div>
    </div>
  </section>
</template>

<style scoped></style>
