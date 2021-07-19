<template>
  <div class="form-item form-item-input">
    <input
      v-bind="$attrs"
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
    itemStatus:{
      type: String,
      required:false,
    },
    placeholder: {
      type: String,
      default: "プレースホルダー",
    },
  },
};
</script>