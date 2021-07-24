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
    margin: 20px;
    padding: 16px;
    line-height: 1.5em;
    border-style: solid;
    border-color: gray;
    border-width: 1px;
    border-radius: 0;

    &::placeholder {
      color: gray;
    }
  }
}
</style>