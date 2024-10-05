<script setup lang="ts">
import { PageLayout } from "@/shared/ui";
</script>

<template>
  <page-layout no-border>
    <div class="main">
      <div class="main__welcome">
        <div class="main__welcome-bg"></div>
      </div>
    </div>
  </page-layout>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");

.texts {
  top: 40%;
  width: 100%;
  height: 60%;
  position: relative;

  animation: appearHeartRevers 2.5s 1 cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s
    backwards;

  &__box {
    position: relative;
    margin: auto;
    height: 10%;
    transition: all 0.5s ease-out 0s;
  }
}

.main {
  position: relative;

  &__text {
    position: absolute;

    height: 100%;
    background-repeat: no-repeat;

    width: 514px;
    margin-right: -257px;
    right: 50%;
  }

  &__welcome {
    animation: appearHeart 2s 1 cubic-bezier(0.215, 0.61, 0.355, 1) 0s backwards;
    margin: auto;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-repeat: no-repeat;

    &-bg {
      background-image: url("../assets/flowers.png");
      transform: scale(1.35) rotate(0deg);
      -webkit-transform: scale(1.35) rotate(0deg);
      -moz-transform: scale(1.35) rotate(0deg);
      -o-transform: scale(1.35) rotate(0deg);
      -ms-transform: scale(1.35) rotate(0deg);
      left: 0.5%;
      top: 15.5%;
      margin: auto;
      top: 10%;
      position: relative;
      width: 90%;
      height: 72%;
      background-repeat: no-repeat;
      text-align: center;
      font-family: "Lobster", cursive;
      background-size: contain;
      background-position: 50%;

      transition: all 0.1s ease-out 0s;
    }
  }
}

.description {
  font-size: 8.56452pt;
  font-family: "Cormorant Infant", serif;
  font-weight: 300;
  font-style: normal;

  color: rgb(0, 0, 0);
  line-height: inherit;
  letter-spacing: 0.1em;
  text-align: center;
  margin-left: -10px;
  margin-right: -10px;

  transition: all 0.1s ease-out 0s;
}

@keyframes appearHeart {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes appearHeartRevers {
  0% {
    opacity: 0;
    transform: scale(2);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
