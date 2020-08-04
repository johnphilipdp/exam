<template>
  <div>
    <h1>Showing Artcile {{this.$route.params.id}}</h1>
  </div>
</template>
<script>
import ArticleService from "../ArticleService";

export default {
  data() {
    return {
      article: {},
    };
  },
  mounted() {
    this.article = ArticleService.getArticle(this.$route.params.id);
  },
};
</script>