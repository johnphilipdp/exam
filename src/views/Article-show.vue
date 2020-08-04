<template>
  <div>
    <h1>Showing Artcle {{article.title}}</h1>
    <p>{{article.content}}</p>
  </div>
</template>
<script>
import ArticleService from "../ArticleService";

export default {
  props: ["id"],
  data() {
    return {
      article: {},
    };
  },
  mounted() {
    this.article = ArticleService.getArticle(this.id - 1);
  },
};
</script>