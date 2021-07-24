<template>
  <button
    v-bind="$attrs"
    class="button form-item-button"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form-item-button {
  width: 100%;
  padding: 14px;
  font-size: 20px;
  line-height: 1.4em;
  letter-spacing: 0.12em;
  justify-content: center;
  text-align: center;
  color: rgb(48, 47, 46);
  background-color: whitesmoke;
  border: none;
  transition: all 0.024s linear;

  &:hover {
    background-color: rgb(221, 217, 217);
  }

  &[disabled] {
    background-color: var(--color-bg-gray-dark);
    pointer-events: none;
  }
}
</style>
