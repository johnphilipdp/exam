<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="0">
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-menu-item index="1">Create New Article</el-menu-item>
    <el-menu-item index="2">
      <router-link to="/article-list">List Of Articles</router-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {};
</script>