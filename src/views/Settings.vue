<template>
  <div id="settings">
    <div id="settingsIn">
      <b-table :items="items" :fields="fields" @row-clicked="selectAlarm">
        <template v-slot:cell(preview)="data">
          <audio controls :src="'./alarms/'+data.item.file"></audio>
        </template>
        <template v-slot:cell(select)="data">
          <font-awesome-icon v-if="data.item.file==alarm" :icon="['fas','check']"></font-awesome-icon>
        </template>

      </b-table>
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
    }
  },
  computed: {
    alarm () {
      return this.$store.getters.alarm
    }
  },
  methods: {
    selectAlarm (item) {
      this.$store.commit('selectAlarm', item.file)
    }
  }
}
</script>
