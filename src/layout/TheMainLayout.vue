<script setup lang="ts">
import { computed } from "vue";
import { useIsMobile, useIsTablet } from "@/shared/hooks";
import type { LayoutInst } from "naive-ui";
import { TheMain } from "@/widget/main";
const isMobile = useIsMobile();
const isTablet = useIsTablet();

const isDesktop = computed(() => !(isMobile.value || isTablet.value));

const positionContent = computed(() =>
  isDesktop.value ? "static" : "absolute"
);
</script>

<template>
  <n-layout :position="'absolute'" :has-sider="isDesktop">
    <n-layout :position="positionContent">
      <n-layout
        ref="contentRef"
        class="flex-container top"
        :native-scrollbar="false"
        position="absolute"
        :scrollbar-props="{ containerClass: 'document-scroll-container' }"
      >
        <div class="flex">
          <n-layout-content>
            <TheMain />
          </n-layout-content>
        </div>

        <n-layout-footer v-if="isDesktop" bordered> footer </n-layout-footer>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<style lang="scss" scoped>
.flex-container {
  & :deep(.n-scrollbar-content) {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
}
.flex {
  flex: 1;
}

.header {
  height: 65px;
  padding: 0 24px;
  border-bottom: 1px solid rgb(239, 239, 245);
}

.n-layout-footer {
  background: #ffffff !important;
  padding: 24px;
}
</style>
