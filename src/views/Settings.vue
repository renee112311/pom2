<template>
  <div id="settings">
    <div id="settingsIn">
      <h2 class="my-2">鬧鈴設定</h2>
      <!-- <b-table :items="items" :fields="fields" @row-clicked="selectAlarm">
        <template v-slot:cell(preview)>
          <button v-if="status !==1" @click="audioPlay(index)">
            <font-awesome-icon :icon="['fas','play']"></font-awesome-icon>
          </button>
          <button v-if="status==1" @click="audiopause(index)">
            <font-awesome-icon :icon="['fas','pause']"></font-awesome-icon>
          </button>
        </template>
        <! --  已勾選 -->
        <!-- <template v-slot:cell(select)="data">
          <font-awesome-icon v-if="data.item.file==alarm" :icon="['fas','check']"></font-awesome-icon>
        </template> -->

      <!-- </b-table>  -->

      <b-table-simple >
        <b-tr>
          <b-th>名稱</b-th>
          <b-th>預覽</b-th>
          <b-th>選擇</b-th>
        </b-tr>
        <b-tbody v-model="items" tag="tbody">
          <b-tr v-for="(item,index) in items" :key="index" @click="selectAlarm(item)">
            <!-- 名稱 -->
            <b-td>
              <span>{{item.name}}</span>
            </b-td>
            <!-- 預覽 -->
            <b-td>
                <button v-if="item.status !==1" @click="audioPlay(index)">
                  <font-awesome-icon :icon="['fas','play']"></font-awesome-icon>
                </button>
                <button v-if="item.status==1" @click="audioPause(index)">
                  <font-awesome-icon :icon="['fas','stop']"></font-awesome-icon>
                </button>
            </b-td>
            <!-- 選擇 -->
            <b-td>
                <font-awesome-icon v-if="item.file==alarm" :icon="['fas','check']"></font-awesome-icon>
            </b-td>

          </b-tr>

        </b-tbody>

      </b-table-simple>

    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      items: [
        {
          name: '打鈴',
          file: 'alarm1.mp3',
          status: 0
        },
        {
          name: '斷斷續續',
          file: 'alarm2.mp3',
          status: 0
        },
        {
          name: '電子',
          file: 'alarm3.mp3',
          status: 0
        },
        {
          name: 'kono dio da',
          file: 'KONO DIO DA.mp3',
          status: 0
        },
        {
          name: 'wryyyy',
          file: 'Wryyyy.mp3',
          status: 0
        },
        {
          name: 'Pillar Men Theme',
          file: 'Pillar Men Theme .mp3',
          status: 0
        },
        {
          name: 'RODA RORA DAAA',
          file: 'RODA RORA DAAA.mp3',
          status: 0
        },
        {
          name: 'KILL DA HO',
          file: 'KILL DA HO .mp3',
          status: 0
        }
      ],
      fields: [
        {
          key: 'name',
          label: '名稱'
        },
        {
          key: 'preview',
          label: '預覽'
        },
        {
          key: 'select',
          label: '選擇'
        }
      ]
      // 停止0
      // 播放1
    }
  },
  computed: {
    alarm () {
      return this.$store.getters.alarm
    }
  },
  methods: {
    selectAlarm (item) {
      if (event.target.tagName === 'TD' || event.target.tagName === 'SPAN') {
        this.$store.commit('selectAlarm', item.file)
      }
    },
    audioPlay (index) {
      this.items[index].status = 1
      this.$store.commit('alarmlist', index)
    },
    audioPause (index) {
      this.items[index].status = 0
      this.$store.commit('alarmlistP', index)
    }
  }
}
</script>
