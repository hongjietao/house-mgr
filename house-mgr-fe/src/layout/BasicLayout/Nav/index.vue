<template>
  <div>
    <a-menu
      style="width: 100%"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      v-for="item in menu"
      :key="item.path"
    >
      <a-sub-menu v-if="item.children" :key="item.title">
        <template #title>
          <span>
            <span>{{item.title}}</span>
          </span>
        </template>
        <div v-for="childrenItem in item.children" @click="to(childrenItem.path)">
          <a-menu-item
            :key="childrenItem.path"

            v-if="showMenu(childrenItem.onlyAdmin)"
          >{{childrenItem.title}}</a-menu-item>
        </div>

      </a-sub-menu>
      <a-menu-item v-else-if="showMenu(item.onlyAdmin)" :key="item.path" @click="to(item.path)">{{item.title}}</a-menu-item>
    </a-menu>
  </div>
</template>

<script src='./index.js'> </script>
