<script lang="ts" setup>
import "ninja-keys";

const placeholder = ref("Placeholder prop test");
const hotkeys = [
  {
    id: "Print",
    title: "Print",
    hotkey: "cmd+p",
    section: "Actions",
    handler: () => {
      window.print();
    },
  },
];
</script>

<template>
  <div class="print:hidden">
    <p
      class="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden xl:block"
    >
      Press
      <kbd
        class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
      >
        <span class="text-xs">⌘</span>K
      </kbd>
      to open the command menu
    </p>
  </div>
  <ClientOnly>
    <ninja-keys
      class="print:hidden"
      @selected="selected"
      @change="change"
      :placeholder="placeholder"
      :data="hotkeys"
    />
  </ClientOnly>
</template>

<style lang="scss" scoped></style>
