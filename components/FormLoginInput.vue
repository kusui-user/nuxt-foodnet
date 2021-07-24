<template>
  <div class="form-item form-item-input">
    <input
      v-bind="$attrs"
      :class="{ small: itemStatus === 'small' }"
      :placeholder="placeholder"
      class="input"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    itemStatus: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      default: "プレースホルダー",
    },
  },
};
</script>

<style lang="scss" scoped>
.form-item-input {
  > .input {
    width: 60%;
    padding: 12px 16px;
    font-size: 16px;
    line-height: 150%;
    margin: 10px;

    &.small {
      padding: 10px 16px;
      font-size: 14px;
    }
  }
}
</style>