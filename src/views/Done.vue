<template>
  <div id="done">
    <div id="doneIn">
      <h2 class="my-2">已完成</h2>
      <b-table-simple v-model="dones">
        <b-tr>
          <b-th>事項</b-th>
          <b-th>動作</b-th>
        </b-tr>

          <b-tr v-if="dones.length == 0">
            <b-td colspan="2">沒有資料</b-td>
          </b-tr>
          <b-tr v-else v-for="(done,index) in dones" :key="index" >
            <b-td>
              <span>{{done.name}}</span>
            </b-td>

            <!-- 動作 -->
            <b-td>
              <!-- 叫回 -->
              <b-btn variant="link" class="text-primary" @click="callback(index)">
                <font-awesome-icon :icon="['fas','undo']"></font-awesome-icon>
              </b-btn>
              <!-- 刪除 -->
              <b-btn variant="link" class="text-danger" @click="delDone(index)">
                <font-awesome-icon :icon="['fas','times']"></font-awesome-icon>
              </b-btn>
            </b-td>
          </b-tr>

      </b-table-simple>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    callback (index) {
      this.$store.commit('callback', index)
    },
    delDone (index) {
      this.$store.commit('delDone', index)
    }
  },
  computed: {
    dones: {
      get () {
        return this.$store.getters.dones
      }
    }
  }
}
</script>
