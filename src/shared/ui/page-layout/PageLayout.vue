<script setup lang="ts">
defineProps({
  noBorder: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  noOuterPadding: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

const slots = useSlots();

const isBreadcrumbs = computed(
  () => slots.breadcrumbs || slots.breadcrumbsExtra
);

const isCardBody = computed(
  () =>
    slots.extra ||
    slots.bottom ||
    slots.header ||
    slots.filters ||
    slots.default
);
</script>

<template>
  <div
    class="m-page-layout"
    :class="{ 'm-page-layout_no-outer-padding': noOuterPadding }"
  >
    <div v-if="isBreadcrumbs" class="m-page-layout__breadcrumbs breadcrumbs">
      <div v-if="slots.breadcrumbs" class="breadcrumbs__link">
        <slot name="breadcrumbs" />
      </div>

      <div v-if="slots.breadcrumbsExtra" class="breadcrumbs__extra">
        <slot name="breadcrumbsExtra" />
      </div>
    </div>

    <div
      v-if="isCardBody"
      class="m-page-layout__card"
      :class="{ 'm-page-layout__card_no-border': noBorder }"
    >
      <div v-if="slots.close" class="m-page-layout__button-close">
        <slot name="close" />
      </div>

      <header v-if="slots.header" class="m-page-layout__header">
        <slot name="header" />
      </header>

      <div v-if="slots.extra" class="m-page-layout__extra">
        <slot name="extra" />
      </div>

      <div v-if="slots.filters" class="m-page-layout__filters">
        <slot name="filters" />
      </div>

      <main v-if="slots.default" class="m-page-layout__main">
        <slot />
      </main>

      <div v-if="slots.bottom" class="m-page-layout__bottom">
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
%flex {
  display: flex;
}
.m-page-layout {
  @extend %flex;
  height: 100%;
  flex-direction: column;
  background-color: #fff;

  &__button-close {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 5px;

    &:deep(.n-button:not(.n-button--disabled):hover) {
      color: #999fa7;
    }
  }

  &__breadcrumbs {
    @extend %flex;
    flex-wrap: wrap;
    overflow: auto;
    overflow-y: hidden;
    margin-bottom: 16px;
    justify-content: space-between;
  }
  &__filters {
    padding: 5px 0;
    background-color: white;
    z-index: 1000;

    @media (width > 1024px) {
      position: sticky;
      top: 0;
    }
  }

  &__card {
    @extend %flex;
    flex-direction: column;
    flex: 1 1 100%;
    padding: 6px;
    border: 3px solid rgba(112, 144, 182, 0.2);
    border-radius: 12px;

    &_no-border {
      border: none;
      padding: 0;
    }
  }

  &__header,
  &__extra {
    margin-bottom: 16px;
  }

  &__main {
    flex: 1;
  }
  &_no-outer-padding {
    padding: 0;
  }
}

.breadcrumbs {
  &__extra {
    @extend %flex;
    align-items: center;
    font-size: 14px;
    text-decoration: none;
  }

  &__link {
    @extend %flex;
    gap: 9px;
  }
}
</style>
