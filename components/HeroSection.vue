<script lang="ts" setup>
import { basics } from "@/src/cv.json";
</script>

<template>
  <section class="flex items-center justify-between">
    <span class="flex-1 space-y-1.5">
      <span class="flex-1 space-y-1.5">
        <h1 class="text-2xl font-bold">{{ basics.name }}</h1>
        <p class="max-w-md text-pretty font-mono text-sm text-muted-foreground">
          {{ basics.label }}
        </p>
        <span class="flex items-center space-x-2">
          <UIcon name="i-heroicons-globe-alt" class="text-slate-500" />
          <NuxtLink
            to="https://maps.google.com/"
            target="_blank"
            class="hover:underline hover:underline-offset-4"
          >
            {{ basics.location.city }}, {{ basics.location.region }},
            {{ basics.location.countryCode }}
          </NuxtLink>
        </span>
        <span
          class="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden"
        >
          <NuxtLink
            v-for="(value, key) in basics.profiles"
            :to="value.url"
            target="_blank"
          >
            <UButton
              :icon="value.icon"
              size="sm"
              color="primary"
              square
              variant="soft"
            />
          </NuxtLink>
        </span>
      </span>
    </span>
    <span class="relative flex shrink-0 overflow-hidden rounded-xl size-28">
      <NuxtImg src="/profile.jpeg" class="aspect-square h-full w-full" />
    </span>
  </section>
</template>
