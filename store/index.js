export const state = () => ({
  message: '',
  show: '',
  mobail: false,
  menues: ["ホーム", "事業内容", "会社概要", "商品開発の流れ", "お問い合わせ", "食を通して笑顔の架橋が願いです"],

})

export const mutations = {
  changemassage(state, num) {
    
    state.message = state.menues[num];
    // const word = document.querySelector(".word");
    // word.classList.add('wordpulus');
   
    state.show = true;

  },
  changefalse(state) {

    state.show = false;
  },

  mobatrue(state) {
    state.mobail = true;
  }
}

export const actions = {
  changex(context, num) {
    
    
    try {
      
      setTimeout(() => context.commit("changefalse"), 100)
      
    } finally {
      setTimeout(() => 
        context.commit("changemassage", num), 100
      )

    }
  }
}

