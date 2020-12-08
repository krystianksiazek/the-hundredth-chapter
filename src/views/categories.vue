<template>
  <div class="categoriesWrapper">
    <h1>Categories</h1>
    <div v-for="category in categories" :key="category.cat">
      <ul>
        <!-- <router-link :to="{ name: 'kategoria', params: { id: getCategoryIndex(category.cat) }, query: { kategoria: category.cat}}" > -->
          <li><strong>{{ category.cat }}</strong></li>
        <!-- </router-link> -->
          <ul>
            <li v-for="subCat in category.subCat" :key="subCat">
              <router-link :to="{ name: 'kategoria', params: { id: getIndex(subCat) }, query: { podkategoria: validLink(subCat) }}" >
                {{ subCat }}
              </router-link>
            </li>
          </ul>
      </ul>
    </div>
  </div>
</template>

<script>
// import Api from "../service/api.js";

export default {
  name: 'categories',
  data () {
    return {
    }
  },
  mounted () {
    window.scrollTo(0, 0);
    this.$store.dispatch('loadCategories');
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    }
  },
  methods: {
    getCategoryIndex(id) {
      for(let i = 0; i < this.categories.length; i++) {
          if(this.categories[i].cat === id) {
            return (i+1);
        }
      }
    },
    getIndex(id) {
      for(let i = 0; i < this.categories.length; i++) {
        for(let j = 0; j < this.categories[i].subCat.length; j++) {
          if(this.categories[i].subCat[j] === id) {
            return (i+1)+"."+(j+1);
          }
        }
      }
    },
    validLink(id) {
      return (id.split(',').join('-')).split(' ').join('')
    }
  },
};
</script>
