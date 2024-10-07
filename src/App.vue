<script setup lang="ts">
import { ruRU, dateRuRU } from "naive-ui";
</script>

<template>
  <n-config-provider :locale="ruRU" :date-locale="dateRuRU">
    <n-notification-provider
      placement="bottom-right"
      container-class="notify-container"
    >
      <n-dialog-provider>
        <n-message-provider>
          <n-loading-bar-provider>
            <router-view />
          </n-loading-bar-provider>
        </n-message-provider>
      </n-dialog-provider>
    </n-notification-provider>
  </n-config-provider>
</template>

<style lang="scss">
@font-face {
  font-family: "Aquarelle";
  src: url("./assets/Aquarelle_500.ttf");
}

@font-face {
  font-family: "BickhamScript3";
  src: url("./assets/bickhamscriptthree.ttf");
}
</style>
