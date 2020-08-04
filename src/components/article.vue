<template>
  <div>
    <div
      v-for="article in articles"
      :key="article.id"
      style="text-align: left;width: 50%;margin: 20px auto"
    >
      <router-link :to="{name: 'show-article', params: {id: article.id}}">
        <el-card>
          <div slot="header">{{article.title}}</div>
          <p>{{article.content}}</p>
        </el-card>
      </router-link>
    </div>
  </div>
</template>
<script>
import articleService from "../ArticleService";
export default {
  props: ["id"],
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.articles = articleService.getArticles();
  },
};
</script>
<style>
</style>