<script lang="ts" setup>
import { basics } from "@/src/cv.json";
</script>

<template>
  <section class="flex items-center justify-between">
    <span class="flex-1 space-y-1.5">
      <span class="flex-1 space-y-1.5">
        <h2 class="text-xl font-bold">About</h2>
        <p class="text-pretty font-mono text-sm text-muted-foreground">
          {{ basics.summary }}
        </p>
      </span>
    </span>
  </section>
</template>
