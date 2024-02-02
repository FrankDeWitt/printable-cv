<script lang="ts" setup>
import { work } from "@/src/cv.json";
</script>

<template>
  <section class="flex items-center justify-between">
    <span class="flex min-h-0 flex-col gap-y-3">
      <h2 class="text-xl font-bold">Work Experience</h2>
      <div
        v-for="(value, key) in work"
        class="rounded-lg bg-card text-card-foreground"
      >
        <div class="flex flex-col space-y-1.5">
          <div class="flex items-center justify-between gap-x-2 text-base">
            <h3
              class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none"
            >
              <a v-if="value.url" class="hover:underline" :href="value.url">
                {{ value.name }}
              </a>
              <a v-else>
                {{ value.name }}
              </a>
              <span v-if="value.remote" class="inline-flex gap-x-1">
                <div
                  class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs"
                >
                  Remote
                </div>
              </span>
            </h3>
            <div class="text-sm tabular-nums text-gray-500">
              {{ value.startDate }} - {{ value.endDate }}
            </div>
          </div>
          <h4 class="font-mono text-sm leading-none">
            {{ value.position }}
          </h4>
        </div>
        <p class="text-pretty font-mono text-muted-foreground mt-2 text-xs">
          {{ value.summary }}
        </p>
      </div>
    </span>
  </section>
</template>
