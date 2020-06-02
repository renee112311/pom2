<template>
  <div class="container">
    <div id="app">
    <div id="nav">

      <router-link to="/">首頁</router-link>
      <router-link to="/list">待辦清單</router-link>
      <router-link to="/settings">鬧鈴設定</router-link>

    </div>
    <keep-alive>
      <vue-page-transition>
        <router-view/>
      </vue-page-transition>

    </keep-alive>

  </div>
</div>

</template>
