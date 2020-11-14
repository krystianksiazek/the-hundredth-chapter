<template>
  <div class="sticky-top" id="navbarWrapper">
    <b-navbar class="upperNavbar" toggleable="lg" type="dark">
      <b-navbar-brand class="logo" @click="toggle(3)" :to="'/'"></b-navbar-brand>
      <b-navbar-toggle @click="toggle(1)" target="upperNav"></b-navbar-toggle>
      <b-collapse v-model="firstExtended" id="upperNav" is-nav>
        <b-navbar-nav>
          <b-nav-form>
            <b-form-input size="sm" class="bookSearch" placeholder="Szukaj..."></b-form-input>
          </b-nav-form>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item right @click.stop>
            <div class="dropdown">
              <button @click="dropMenu('favoriteDropdown', 'toggle'), 
              dropMenu('basketDropdown', 'close'), 
              dropMenu('userDropdown', 'close')
              dropdownExtendedChecker('favoriteDropdown')"
              class="dropbtn">
                <span class="favorite"></span>
                <span v-if="sendIsMobile === true">
                  <span v-if="whihDropdownIsExtended === 'favoriteDropdown' && isExtended" class="arrow up"></span>
                  <span v-else class="arrow down"></span>
                </span>
                <span id="arrowFavorite" v-if="sendIsMobile === true"></span>
               <img class="favoriteImg" src="..\assets\Icons\heart.png">
              </button>
              <div id="favoriteDropdown" class="dropdown-content">
                <router-link @click.native="toggle(2), 
                dropMenu('favoriteDropdown', 'close'),
                dropdownExtendedChecker('closing')" 
                to="/">
                  Ulubione
                </router-link>
                <router-link @click.native="toggle(2), 
                dropMenu('favoriteDropdown', 'close'),
                dropdownExtendedChecker('closing')" 
                to="register">
                  Elo
                </router-link>
              </div>
            </div>
          </b-nav-item>
          <b-nav-item right @click.stop>
            <div class="dropdown">
              <button @click="dropMenu('basketDropdown', 'toggle'), 
              dropMenu('userDropdown', 'close'), 
              dropMenu('favoriteDropdown', 'close')
              dropdownExtendedChecker('basketDropdown')" 
              class="dropbtn">
                <span class="basket">
                  <span v-if="cartCount > 0 && sendIsMobile === true">
                    {{ cartCount }}
                  </span>
                </span>
                <span v-if="cartCount > 0 && sendIsMobile === false" class="itemsInCartIndicator">
                  {{ cartCount }}
                </span>
                <span v-if="sendIsMobile === true">
                  <span v-if="whihDropdownIsExtended === 'basketDropdown' && isExtended" class="arrow up"></span>
                  <span v-else class="arrow down"></span>
                </span>
                <img class="basketImg" src="..\assets\Icons\basket.png">
              </button>
              <div id="basketDropdown" class="dropdown-content">
                <b-container>
                  <b-row class="justify-content-center">
                    <div v-for="(item, index) in cart" :key="index">
                      <div v-if="item.quantityInCart >= 1">
                      <div>{{ item.name }}</div>
                      <div>
                        <img class="coverProduct" :src="item.cover" /> 
                      </div>
                      <div>x{{ item.quantityInCart }} = {{ item.price*item.quantityInCart + " zł"}}
                      </div>
                      <div>
                        <b-button @click="removeItem(index, item.id)">Usuń z koszyka</b-button>
                      </div>
                    </div>
                    </div>
                 </b-row>
                </b-container>
                <a @click="clearCart(),
                toggle(2),
                dropMenu('basketDropdown', 'close'),
                dropdownExtendedChecker('closing')" 
                v-if="cartCount !== 0" class="clearCart">
                  <span class="cross">
                    ✖
                  </span> 
                  Wyczyść koszyk
                </a>
              {{ summaryPrice }}
              </div>
            </div>
          </b-nav-item>
          <b-nav-item right @click.stop>
            <div class="dropdown">
              <button @click="dropMenu('userDropdown', 'toggle'), 
              dropMenu('basketDropdown', 'close'), 
              dropMenu('favoriteDropdown', 'close')
              dropdownExtendedChecker('userDropdown')" 
              class="dropbtn">
                <span class="user"></span>
                <span v-if="sendIsMobile === true">
                  <span v-if="whihDropdownIsExtended === 'userDropdown' && isExtended" class="arrow up"></span>
                  <span v-else class="arrow down"></span>
                </span>
                <img class="userImg" src="..\assets\Icons\user.png">
              </button>
              <div id="userDropdown" class="dropdown-content">
                <router-link @click.native="toggle(2), 
                dropMenu('userDropdown', 'close'), 
                dropdownExtendedChecker('closing')" 
                to="/">
                  Logowanie
                </router-link>
                <router-link @click.native="toggle(2), 
                dropMenu('userDropdown', 'close'), 
                dropdownExtendedChecker('closing')" 
                to="register">
                  Rejestracja
                </router-link>
              </div>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-navbar class="lowerNavbar" toggleable="lg" type="dark">
      <b-navbar-toggle @click="toggle(2)" target="lowerNav" class="menuExtender">
        <template #default="{ expanded }">
          <p v-if="expanded">MENU<span class="arrow up"></span></p>
          <p v-else>MENU<span class="arrow down"></span></p>
        </template>
      </b-navbar-toggle>
      <b-collapse v-model="secondExtended" id="lowerNav" is-nav>
        <b-nav-item class="navButton" :to="'/'">Kategorie</b-nav-item>
        <b-nav-item class="navButton" :to="'/'">Nowości</b-nav-item>
        <b-nav-item class="navButton" :to="'/'">Bestsellery</b-nav-item>
        <b-nav-item class="navButton" :to="'/'">Najlepiej oceniane</b-nav-item>
        <b-nav-item class="navButton" :to="'/'">Rekomendacje</b-nav-item>
        <b-nav-item class="navButton" :to="'/'">Promocje</b-nav-item>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: [
    'sendIsMobile',
  ],
  data() {
    return {
      firstExtended: false,
      secondExtended: false,
      whihDropdownIsExtended: null,
      isExtended: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.scrollListener);
  },
  mounted() {
    window.onclick = function(event) {
      if(event.target.matches('.link') || !event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
      for(i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if(openDropdown.classList.contains('showDropdown')) {
          openDropdown.classList.remove('showDropdown');
        }
      }
      }
    }
  },
  computed: {
    cartCount() {
      let counter = 0;
      for(let i = 0; i < this.$store.getters.products.length; i++) {
        counter += this.$store.getters.products[i].quantityInCart;
      }
      return counter;
    },
    summaryPrice() {

    },
    cart() {
      return this.$store.getters.products;
    },
  },
  methods: {
    toggle(code) {
      switch(code) {
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
    },
    dropMenu(section, action) {
      if(action == 'close') document.getElementById(section).classList.remove("showDropdown");
      else if(action == 'toggle') document.getElementById(section).classList.toggle("showDropdown");
      else document.getElementById(section).classList.add("showDropdown");
    },
    scrollListener() {
      var $ = require('jquery');
      if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 && this.sendIsMobile === false) {
        $('.lowerNavbar').addClass('lowerNavbarHider');
        $('.navButton').addClass('navButtonHider');
      } else {
        $('.lowerNavbar').removeClass('lowerNavbarHider');
        $('.navButton').removeClass('navButtonHider');
      }
    },
    dropdownExtendedChecker(id) {
      var $ = require('jquery');
      var target = $('#'+id);
      if(id === 'closing') {
        this.whihDropdownIsExtended = 'none';
        this.isExtended = false;
      } else var target = $('#'+id);
      if(target.hasClass('showDropdown')) {
        this.whihDropdownIsExtended = id;
        this.isExtended = true;
      }
      else {
        this.whihDropdownIsExtended = 'none';
        this.isExtended = false;
      }
    },
    clearCart() {
      for(let i = 0; i < this.$store.getters.products.length; i++) {
        this.$store.getters.products[i].quantityInCart = 0;
      }
    },
    removeItem(index, id) {
      this.$store.dispatch("removeFromCart", { index, id} );
    },
  }
};

</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
}
button {
  border: none;
  outline: 0;
}
li {
  text-align: center;
}
ul {
  padding: 0;
}
h5 {
  text-align: center;
}
#navbarWrapper {
  top: -1px;
  margin-top: -1px;
}
.upperNavbar, .lowerNavbar {
  background-color: #557a95;
  padding: 5px;
  list-style: none;
  font-size: 24px;
}
.lowerNavbar {
  text-align: center;
  max-height: 65.5px;
  transition: max-height 0.25s ease-in;
  @media (max-width: 991px)
  {
    max-height: 100%;
  }
}
.lowerNavbar a:hover {
  // text-decoration: underline;
  color:  rgba(255, 255, 255, 0.8);
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
  color: #FEFFFF;
  text-decoration: none;
}
.logo {
  text-decoration: none;
  color: #DEF2F1;
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
  height: 50px;
  width: 50px;
  opacity: 0.5;
  pointer-events: none;
  @media (max-width: 991px)
  {
    display: none;
  }
}
.favorite, .basket, .user {
  color: rgba(255, 255, 255, 0.5);
  font-size: 27px;
  pointer-events: none;
}
.favorite:before {
  @media (max-width: 991px)
  {
    content: "Ulubione";
  }
}
.basket:before {
  @media (max-width: 991px)
  {
    content: "Koszyk";
  }
}
.user:before {
  @media (max-width: 991px)
  {
    content: "Profil";
  }
}
.menuExtender {
  margin: auto;
}
.lowerNavbarHider {
  padding: 0;
  max-height: 0;
  transition: max-height 0.25s ease-out;
  overflow: hidden;
}
.navButton {
  opacity: 1;
  transition: opacity 0.25s ease-in;
}
.navButtonHider {
  opacity: 0;
  transition: opacity 0.15s ease-out;
}
.itemsInCartIndicator {
  font-size: 24px;
  font-weight: bold;
  line-height: normal;
  width: 35px;
  height: 35px;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 99;
  color: #DEF2F1;
  border-radius: 50%;
  border: 3px solid #163d3c;
  background: #557a95;
}
.dropbtn {
  background-color: transparent;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  @media (max-width: 991px)
  {
    display: block;
    width: 100%;
  }
}
.dropdown {
  position: relative;
  display: inline-block;
  @media (max-width: 991px)
  {
    float: none;
    display: block;
    width: 100%;
  }
}
.dropdown-content {
  // display: none;
  min-width: 160px;
  opacity: 0;
  cursor: context-menu;
  position: absolute;
  right: 5px;
  background-color: #7395ae;
  border-radius: 10px;
  max-height: 0;
  transition: max-height 0.15s ease-out;
  overflow: hidden;
  box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  z-index: 1;
  margin-top: 10px;
  @media (max-width: 991px)
  {
    position: relative;
    right: 0;
  }
}
.dropdown-content a {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.6);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown a:hover {
  color:  rgba(255, 255, 255, 0.8);
  // background-color: #7aa0bb;
  // text-decoration: underline;
}
.showDropdown {
  display: block;
  max-height: 500px;
  transition: max-height 0.25s ease-in;
  opacity: 1;
}
.arrow {
  border: solid #7395ae;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
}
.down {
  transform: rotate(45deg);
}
.up {
  transform: rotate(225deg);
  margin-bottom: 0;
}
.clearCart {
  font-size: 15px !important;
  cursor: pointer;
  white-space: nowrap;
}
.cross {
  color: rgb(180, 0, 0);
}
#basketDropdown {
  overflow: auto;
  // padding: 20px;
}
.coverProduct {
  height: 120px;
}
</style>
