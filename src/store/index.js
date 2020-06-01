import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// 太長了，宣告成變數
const timeleft = parseInt(process.env.VUE_APP_TIMELEFT)
const timeleftBreak = parseInt(process.env.VUE_APP_TIMELEFT_BREAK)
export default new Vuex.Store({
  state: {
    // 待辦清單
    todos: [],
    // 剩餘時間
    timeleft,
    // 鬧鈴聲
    alarm: 'alarm1.mp3',
    // 正在進行事項
    current: '',
    // 是否為休息中
    isBreak: false
  },
  mutations: {
    selectAlarm (state, data) {
      state.alarm = data
    },
    addTodo (state, data) {
      state.todos.push({ name: data, edit: false, model: data })
    },
    dragTodo (state, data) {
      state.todos = data
    },
    delTodo (state, data) {
      state.todos.splice(data, 1)
    },
    editTodo (state, data) {
      state.todos[data].edit = !state.todos[data].edit
    },
    cancelTodo (state, data) {
      state.todos[data].edit = false
      state.todos[data].model = state.todos[data].name
    },
    saveTodo (state, data) {
      state.todos[data].edit = false
      state.todos[data].name = state.todos[data].model
    },
    start (state) {
      // 判斷是否為休息中，如果休息中，就執行五分鐘倒數；
      if (state.isBreak) {
        state.current = '休息一下'
      } else if (!state.isBreak) {
        // 如果不是休息中，就執行二十分鐘倒數
        state.current = state.todos[0].name
        state.todos.splice(0, 1)
      }
    },
    countDown (state) {
      state.timeleft--
    },
    finish (state) {
      if (state.todos.length > 0) {
        state.isBreak = !state.isBreak
      }
      state.current = ''
      state.timeleft = state.isBreak ? timeleftBreak : timeleft
    }
  },
  actions: {
  },
  getters: {
    alarm (state) {
      return state.alarm
    },
    todos (state) {
      return state.todos
    },
    timeleft (state) {
      return state.timeleft
    },
    current (state) {
      return state.current
    },
    isBreak (state) {
      return state.isBreak
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
