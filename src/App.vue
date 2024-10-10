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
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");
@import url("https://fonts.cdnfonts.com/css/adine-kirnberg");

@font-face {
  font-family: "Aquarelle";
  src: url("./assets/Aquarelle_500.ttf");
}

@font-face {
  font-family: "BickhamScript3";
  src: url("./assets/bickhamscriptthree.ttf");
}
</style>
