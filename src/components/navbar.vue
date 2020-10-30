<template>
  <div>
    <b-navbar class="upperNavbar" toggleable="lg" type="dark">
      <b-navbar-brand class="logo" @click="toggle(3)" :to="'/'"></b-navbar-brand>
      <b-navbar-toggle @click="toggle(1)" target="nav-collapse"></b-navbar-toggle>
      <b-collapse v-model="firstExtended" id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-form>
            <b-form-input size="sm" class="bookSearch" placeholder="Search books"></b-form-input>
          </b-nav-form>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <span class="favorite"></span>
              <img class="favoriteImg" src="..\assets\Icons\heart.png" alt="">
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right>
            <template #button-content>
              <span class="basket"></span>
              <img class="basketImg" src="..\assets\Icons\basket.png" alt="">
            </template>
            <b-dropdown-item>Profile</b-dropdown-item>
            <b-dropdown-item>Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right>
            <template #button-content>
              <span class="user"></span>
              <img class="userImg" src="..\assets\Icons\user.png" alt="">
            </template>
            <b-dropdown-item>Profile</b-dropdown-item>
            <b-dropdown-item :to="'register'">Register</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-navbar class="lowerNavbar" toggleable="lg" type="dark">
      <b-navbar-toggle @click="toggle(2)" target="nav-collapse2" class="menuExtender">
        <template #default="{ expanded }">
          <p v-if="expanded">↑ MENU ↑</p>
          <p v-else>↓ MENU ↓</p>
        </template>
      </b-navbar-toggle>
      <b-collapse v-model="secondExtended" id="nav-collapse2" is-nav>
        <b-navbar-nav class="ml-left">
          <!-- Temporarily not used - problems with styling bootstrap elements
            <b-nav-item-dropdown id="dropdownParent" text="Kategorie">
            <b-dropdown id="dropdownChild"
              
              dropright
              split 
              split-href="/beleterystyka">
              <a slot="button-content">
                Beletrystyka
              </a>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="dropdownChild"
              dropright
              split 
              split-href="/beleterystyka">
              <a slot="button-content">
                Literatura faktu, publicystyka
              </a>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="dropdownChild"
              dropright
              split 
              split-href="/beleterystyka">
              <a slot="button-content">
                Literatura popularnonaukowa
              </a>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="dropdownChild"
              dropright
              split 
              split-href="/beleterystyka">
              <a slot="button-content">
                Literatura dziecięca
              </a>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="dropdownChild"
              dropright
              split 
              split-href="/beleterystyka">
              <a slot="button-content">
                Komiksy
              </a>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="dropdownChild"
              dropright
              split 
              split-href="/beleterystyka">
              <a slot="button-content">
                Poezja, dramat, satyra
              </a>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="dropdownChild"
              dropright
              split 
              split-href="/beleterystyka">
              <a slot="button-content">
                Pozostałe
              </a>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
              <b-dropdown-item href="#">Drop 2</b-dropdown-item>
            </b-dropdown> 
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
        <b-nav-item :to="'/'">Kategorie</b-nav-item>
        <b-nav-item :to="'/'">News</b-nav-item>
        <b-nav-item :to="'/'">Bestsellers</b-nav-item>
        <b-nav-item :to="'/'">Top Rated</b-nav-item>
        <b-nav-item :to="'/'">Recommended</b-nav-item>
        <b-nav-item :to="'/'">Promotions</b-nav-item>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      firstExtended: false,
      secondExtended: false,
      code: 0,
      isDropdownChildVisible: false
    };
  },
  mounted() {
      this.$root.$on('bv::dropdown::show', bvEvent => {
        if(bvEvent.componentId === 'dropdownChild') {
          this.isDropdownChildVisible = true;
        }
    	})
      this.$root.$on('bv::dropdown::hide', bvEvent => {
        if(bvEvent.componentId === 'dropdownChild') {
          this.isDropdownChildVisible = false;
        }
        if(this.isDropdownChildVisible) {
          bvEvent.preventDefault()
        }
    	});
    },
  methods: {
    toggle(code) {
      switch (code) {
        case 1:
         this.secondExtended = false;
        break;
        case 2:
          this.firstExtended = false;
        break;
        case 3:
          this.firstExtended = false;
          this.secondExtended = false;
        break;
        default:
          console.log("Try looking up for a hint.");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
}
a:hover {
  color: rgba(255, 255, 255, 0.8);
}
a:active {
  color: rgba(255, 255, 255, 1);
}
button {
  border: none;
}
img {
  height: 50px;
  width: 50px;
}
li {
  text-align: center;
}
ul {
  padding: 0;
}
.btn-group, .btn-group-vertical {
  display: block;
}
.dropdown.b-dropdown {
  text-align: center;
  background-color: #6c757d;
  width: 100%;
}
.dropdown.b-dropdown:first-child {
  margin-top: -8px;
}
.dropdown.b-dropdown:last-child {
  margin-bottom: -8px;
}
.upperNavbar, .lowerNavbar {
  background-color: grey;
  padding: 5px;
  list-style: none;
  font-size: 27px;
}
.lowerNavbar {
  text-align: center;
}
.navbar-nav {
  text-align: center;
}
.form-inline {
  align-self: center;
}
.bookSearch {
  background-color: lightgray;
  font-size: 30px;
  height: 45px;
  width: 100%;
  border: none;
  text-align: center;
  @media (max-width: 991px)
  {
    width: 350px;
    padding: 0;
    margin: 0;
  }
}
.logo:before {
  content: "The hundredth chapter";
  @media (max-width: 991px)
  {
    content: "100th chapter";
  }
}
.logo:hover {
  color: white;
}
.logo {
  text-decoration: none;
  color: grey;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  font-size: 42px;
  margin: 0;
  width: max-content;
  letter-spacing: 5px;
  padding: 0 5px 0 5px;
  @media (max-width: 991px)
  {
    font-size: 30px;
    letter-spacing: 2px;
    position: relative;
    margin: 0 auto;
    left: 30px;
  }
}
.favoriteImg, .basketImg, .userImg {
  opacity: 0.5;
  @media (max-width: 991px)
  {
    display: none;
  }
}
.favorite:before {
  @media (max-width: 991px)
  {
    content: "Favorites";
  }
}
.basket:before {
  @media (max-width: 991px)
  {
    content: "Cart";
  }
}
.user:before {
  @media (max-width: 991px)
  {
    content: "Profile";
  }
}
.menuExtender {
  margin: auto;
}
</style>
