<script lang="ts" setup>
import { projects } from "@/src/cv.json";
</script>

<template>
  <section class="flex min-h-0 flex-col gap-y-3">
    <h2 class="text-xl font-bold">Projects</h2>
    <div class="custom-grid gap-1">
      <div
        v-for="(value, key) in projects"
        class="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3"
      >
        <div class="flex flex-col space-y-1.5">
          <div class="space-y-1">
            <h3 class="font-semibold tracking-tight text-base">
              <a
                :href="value.url"
                target="_blank"
                class="inline-flex items-center gap-1 hover:underline"
              >
                {{ value.name }}
                <span class="size-1 rounded-full bg-green-500" />
              </a>
            </h3>
            <p class="text-muted-foreground font-mono text-xs">
              {{ value.description }}
            </p>
          </div>
        </div>
        <div
          class="text-pretty font-mono text-sm text-muted-foreground mt-auto flex"
        >
          <div class="mt-2 flex flex-wrap gap-1">
            <div
              v-for="(value, key) in value.highlights"
              class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-slate-300 text-slate-foreground hover:bg-slate-300/60 px-1 py-0 text-[10px]"
            >
              {{ value }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
</style>
