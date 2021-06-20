<template>
  <button
    v-bind="$attrs"
    class="button form-item-button txt-center font-500 font-futura"
    @click="$emit('click')"
  >
    <slot>LABEL</slot>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.form-item-button {
  width: 100%;
  padding: 14px;
  font-size: 16px;
  line-height: 1.4em;
  letter-spacing: 0.12em;
  justify-content: center;
  color: var(--color-font-white);
  background-color: var(--color-bg-black);
  border: none;
  transition: all 0.024s linear;

  &:hover {
    background-color: var(--color-bg-black-64);
  }

  &.button-light {
    color: var(--color-font-default);
    background-color: var(--color-bg-default);

    &:hover {
      background-color: var(--color-bg-white-64);
    }
  }

  &[disabled] {
    background-color: var(--color-bg-gray-dark);
    pointer-events: none;
  }
}
</style>
