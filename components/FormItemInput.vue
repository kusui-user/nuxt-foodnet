<template>
  <label class="form-item form-item-input">
    <input
      v-bind="$attrs"
      class="input font-futura"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.form-item-input {
  display: flex;

  > .input {
    width: 100%;
    margin: 0;
    padding: 16px;
    line-height: 1.4em;
    border: none;
    border-radius: 0;

    &::placeholder {
      color: var(--color-font-gray);
    }
  }
}
</style>