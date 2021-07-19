<template>
  <form class="form form-login">
    <FormItemInput v-model="email" type="text" placeholder="メールアドレス" />
    <FormItemInput
      v-model="password"
      type="password"
      placeholder="パスワード"
    />
    <div class="buttn">
      <nuxt-link to='register'>アカウントを作成</nuxt-link>
      <FormLoginButton type="submit" label="次へ" @click="login" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.form-login {
  > .form-item-input:nth-child(2) {
    margin-top: 8px;
  }

  > .button {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .link {
      color: blue;
    }
  }
}
</style>