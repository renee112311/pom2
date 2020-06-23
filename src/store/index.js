import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// 太長了，宣告成變數
var music = new Audio()
const timeleft = parseInt(process.env.VUE_APP_TIMELEFT)
const timeleftBreak = parseInt(process.env.VUE_APP_TIMELEFT_BREAK)
export default new Vuex.Store({
  state: {
    // 待辦清單
    todos: [],
    dones: [],
    // 剩餘時間
    timeleft,
    // 鬧鈴聲
    alarm: 'alarm1.mp3',
    alarmlist: [
      {
        name: '打鈴',
        file: 'alarm1.mp3'
      },
      {
        name: '斷斷續續',
        file: 'alarm2.mp3'
      },
      {
        name: '電子',
        file: 'alarm3.mp3'
      },
      {
        name: 'kono dio da',
        file: 'KONO DIO DA.mp3'
      },
      {
        name: 'wryyyy',
        file: 'Wryyyy.mp3'
      },
      {
        name: 'Pillar Men Theme',
        file: 'Pillar Men Theme .mp3'
      },
      {
        name: 'RODA RORA DAAA',
        file: 'RODA RORA DAAA.mp3'
      },
      {
        name: 'KILL DA HO',
        file: 'KILL DA HO .mp3'
      }
    ],
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
    callback (state, data) {
      state.todos.push({ name: state.dones[data].name, edit: false, model: data })
      state.dones.splice(data, 1)
    },
    delDone (state, data) {
      state.dones.splice(data, 1)
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
    finish (state, data) {
      if (!state.isBreak) {
        state.dones.push({ name: state.current, edit: false, model: data })
      }
      if (state.todos.length > 0) {
        state.isBreak = !state.isBreak
      }
      state.current = ''
      state.timeleft = state.isBreak ? timeleftBreak : timeleft
    },
    alarmlist (state, data) {
      var alarmdata = state.alarmlist[data].file
      music.src = './alarms/' + alarmdata
      music.loop = true
      music.play()
    },
    alarmlistP (state, data) {
      music.pause()
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
    dones (state) {
      return state.dones
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
