<template>
  <button
    v-bind="$attrs"
    class="button form-item-button "
    @click="$emit('click')"
  >
    <slot></slot>
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
  text-align: center;
  color: white;
  background-color:black;
  border: none;
  transition: all 0.024s linear;

  &:hover {
    background-color: rgb(39, 38, 38);
  }

  &[disabled] {
    background-color: var(--color-bg-gray-dark);
    pointer-events: none;
  }
}
</style>
