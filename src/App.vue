<template>
  <div class="container-fluid">
    <div id="app">
    <div id="nav">

      <router-link to="/">
        <font-awesome-icon :icon="['fas','home']"></font-awesome-icon>
      </router-link>
      <router-link to="/list">
        <font-awesome-icon :icon="['fas','list']"></font-awesome-icon>
      </router-link>
      <router-link to="/done">
        <font-awesome-icon :icon="['fas','calendar-check']"></font-awesome-icon>
      </router-link>
      <router-link to="/settings">
        <font-awesome-icon :icon="['fas','cog']"></font-awesome-icon>
      </router-link>

    </div>
    <keep-alive>
        <router-view v-transition></router-view>
    </keep-alive>

  </div>
</div>

</template>
