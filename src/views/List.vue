<template>
  <div id="list">
    <div id="listIn">
      <h2 class="my-2">待辦清單</h2>
      <b-form-input @keydown.enter="addTodo" v-model="newtodo" ></b-form-input>
      <b-btn variant="dark" @click="addTodo" style="display:block;width:100%">新增</b-btn>
      <b-table-simple>
        <b-tr>
          <b-th>事項</b-th>
          <b-th>動作</b-th>
        </b-tr>
        <draggable v-model="todos" tag="tbody" v-bind="dragOption">
          <b-tr v-if="todos.length == 0">
            <b-td colspan="2">沒有資料</b-td>
          </b-tr>
          <b-tr v-else v-for="(todo,index) in todos" :key="index" >
            <b-td>
              <b-form-input v-model="todo.model" v-if="todo.edit">
              </b-form-input>
              <!-- 取消編輯 -->
              <b-btn variant="link" class="text-danger" v-if="todo.edit" @click="cancelTodo(index)">
                <font-awesome-icon :icon="['fas','undo']"></font-awesome-icon>
              </b-btn>
              <!-- 儲存編輯 -->
              <b-btn variant="link" class="text-success" v-if="todo.edit" @click="saveTodo(index)">
                <font-awesome-icon :icon="['fas','save']"></font-awesome-icon>
              </b-btn>
              <span v-else  @dblclick="editTodo(index)">{{todo.name}}</span>
            </b-td>

            <!-- 動作 -->
            <b-td>
              <!-- 編輯 -->
              <b-btn variant="link" class="text-primary" @click="editTodo(index)">
                <font-awesome-icon :icon="['fas','pen']"></font-awesome-icon>
              </b-btn>
              <!-- 刪除 -->
              <b-btn variant="link" class="text-danger" @click="delTodo(index)">
                <font-awesome-icon :icon="['fas','times']"></font-awesome-icon>
              </b-btn>
            </b-td>
          </b-tr>
        </draggable>
      </b-table-simple>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      newtodo: '',
      dragOption: {
        animation: 200
      }
    }
  },
  methods: {
    addTodo () {
      if (this.newtodo.length > 0) {
        this.$store.commit('addTodo', this.newtodo)
        this.newtodo = ''
      }
    },
    delTodo (index) {
      this.$store.commit('delTodo', index)
    },
    editTodo (index) {
      this.$store.commit('editTodo', index)
    },
    cancelTodo (index) {
      this.$store.commit('cancelTodo', index)
    },
    saveTodo (index) {
      this.$store.commit('saveTodo', index)
    }
  },
  computed: {
    todos: {
      get () {
        return this.$store.getters.todos
      },
      set (value) {
        this.$store.commit('dragTodo', value)
      }

    }
  }
}
</script>
