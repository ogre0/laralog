<template>
  <div>
    <div v-for="(article, index) in articles" :key="index">
      <span>{{ article.posted_at }}</span>
      <span>{{ article.subject }}</span>
      <span style="white-space: pre-wrap;">{{ article.content }}</span>
      <article>aaa</article>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.getArticles()
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticles () {
      this.$http({
        url: '/api/articles',
        method: 'GET'
      }).then((res) => {
        this.articles = res.data
        console.log(res)
      })
    }
  }
}
</script>