<template>
  <div class="categoriesWrapper">
    <h1>Categories</h1>
    <div v-for="category in categories" :key="category.cat">
      <ul>
        <router-link :to="{ name: 'category', params: { id: category.cat, name: category.cat }}" >
          <li @click="getProducts(category.cat)"><strong>{{ category.cat }}</strong></li>
        </router-link>
          <ul>
            <li v-for="subCat in category.subCat" :key="subCat">
              <router-link :to="{ name: 'category', params: { id: getId(subCat), name: subCat }}">
                {{subCat}}
              </router-link>
            </li>
          </ul>
      </ul>
    </div>
    <b-button @click="getProducts('Fantastyka')">Beletrystyka</b-button>
    <span v-if="products.length != 0">{{ products }}</span>
  </div>
</template>

<script>

export default {
  name: 'categories',
  data () {
    return {
      categories: [
        {
          cat: "Beletrystyka",
          subCat: [
            "fantastyka, fantasy, science fiction", 
            "horror", 
            "klasyka", 
            "kryminał, sensacja, thriller",
            "literatura młodzieżowa",
            "literatura obyczajowa, romans",
            "literatura piękna",
            "powieść historyczna",
            "powieść przygodowa",
          ]
        },
        {
          cat: "Literatura faktu, publicystyka",
            subCat: [
              "biografia, autobiografia, pamiętnik", 
              "literatura faktu", 
              "literatura podróżnicza", 
              "publicystyka literacka, eseje",
            ]
        },
        {
          cat: "Literatura popularnonaukowa",
            subCat: [
              "astronomia, astrofizyka", 
              "biznes, finanse", 
              "encyklopedie, słowniki", 
              "filozofia, etyka",
              "flora, fauna",
              "historia",
              "informatyka, matematyka",
              "językoznawstwo, nauka o literaturze",
              "nauki przyrodnicze",
              "nauki społeczne",
              "popularnonaukowa",
              "poradniki dla rodziców",
              "technika",
              "zdrowie, medycyna",
            ]
        },
        {
          cat: "Literatura dziecięca",
            subCat: [
              "bajki", 
              "baśnie, legendy, podania", 
              "historie biblijne", 
              "interaktywne, obrazkowe, edukacyjne",
              "opowiadania, powieści dla dzieci",
              "opowieści dla młodszych dzieci",
              "popularnonaukowa dziecięca",
              "wierszyki, piosenki",
              "pozostałe",
            ]
        },
        {
          cat: "Komiksy",
            subCat: [
              "komiksy",
            ]
        },
        {
          cat: "Poezja, dramat, satyra",
            subCat: [
              "poezja",
              "satyra",
              "dramat, komedia, tragedia",
            ]
        },
        {
          cat: "Pozostałe",
            subCat: [
              "albumy",
              "czasopisma",
              "ezoteryka, senniki, horoskopy",
              "film, kino, telewizja",
              "hobby",
              "inne",
              "kulinaria, przepisy kulinarne",
              "militaria, wojskowość ",
              "motoryzacja",
              "muzyka",
              "poradniki",
              "religia",
              "rozrywka",
              "rękodzieło",
              "sport",
              "sztuka",
              "teatr",
              "turystyka, mapy, atlasy",
            ]
        },
      ],
      products: []
    }
  },
  methods: {
    getProducts(genere) {
      let insideProducts = [];
      for(let i = 0; i < this.$store.getters.products.length; i++) {
        if(this.$store.getters.products[i].genere == genere) {
          insideProducts += this.$store.getters.products[i].title;
        }
      }
      this.products = insideProducts;
    },
    getId(id) {
      let validId;
      for(let i = 0; i <= id.length; i++) {
        validId = (id.split(',').join('&')).split(' ').join('');
      }
      return validId;
    }
  },
};
</script>
