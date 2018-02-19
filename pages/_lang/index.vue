<template>
  <main class="container home-view">
    <div class="row page-wrapper flex-center">
      <div class="col-9 d-flex flex-center text-center flex-column">
        <h1 class="title">
          <i class="fas fa-search"></i>
          {{ $t('home.title') }}
        </h1>
      </div>
    </div>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      query: ''
    }
  },
  computed: {
    postTitles () {
      return this.$store.getters.getSearchResults.map( post => post.title )
    }
  },
  methods: {
    switchLang (lang) {
      this.$store.commit('SET_LANG', lang)
    },
    fetchResults () {
      this.$store.dispatch('fetchSearchResults')
    }
  },
  mounted () {
    this.fetchResults()
  }
}
</script>

<style lang="scss">

.home-view {
  #search-field {
    height: 50px;
    font-size: 1.4rem;

    &::placeholder {
      font-size: 1.4rem;
    }
  }
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
