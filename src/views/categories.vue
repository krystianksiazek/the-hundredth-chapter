<template>
  <div class="categoriesWrapper">
    <h1>Categories</h1>
    <div v-for="(category, index) in categories" :key="category.cat">
      <ul>
        <li>
          <router-link :to="{ name: 'kategoria', params: { category: validLink(category.cat), id: getCategoryIndex(category.cat) }}" >
            <strong>{{ category.cat }}</strong>
          </router-link>
        </li>
        <ul>
          <li v-for="(subCat, index) in category.subCat" :key="subCat">
            <router-link :to="{ name: 'kategoria', params: { category: validLink(category.cat), id: getIndex(subCat) }, query: { podkategoria: validLink(subCat) }}" >
              {{ subCat }}
            </router-link>
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'categories',
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapGetters(['categories']),
  },
  methods: {
    getCategoryIndex(id) {
      if (id === undefined) return 'err';
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].cat === id) {
          return `${i + 1}.0`;
        }
      }
    },
    getIndex(id) {
      for (let i = 0; i < this.categories.length; i++) {
        for (let j = 0; j < this.categories[i].subCat.length; j++) {
          if (this.categories[i].subCat[j] === id) {
            return `${i + 1}.${j + 1}`;
          }
        }
      }
    },
    validLink(id) {
      if (id === undefined) return 'err';
      return encodeURI((id.split(',').join('-')).split(' ').join('').toLowerCase());
    },
  },
};
</script>
