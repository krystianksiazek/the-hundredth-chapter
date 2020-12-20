<template>
  <div class="sticky-top" id="navbarWrapper">
    <b-navbar class="upperNavbar" toggleable="lg" type="dark">
      <b-navbar-brand class="logo" @click="toggle(3)" :to="'/'"></b-navbar-brand>
      <b-navbar-toggle @click="toggle(1)" target="upperNav" class="menuExtenders">
        <span v-bind:class="{ toggle: firstExtended }">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </span>
        </b-navbar-toggle>
        <span class="notification" v-if="cartCount > 0 && sendIsMobile === true"></span>
      <b-collapse v-model="firstExtended" id="upperNav" is-nav>
        <b-navbar-nav>
          <b-nav-form>
            <b-form-input size="sm" class="bookSearch" placeholder="Szukaj..."></b-form-input>
          </b-nav-form>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <div v-click-outside="outsideFavorite" class="dropdown">
            <button @click="dropMenu('favoriteDropdown', 'toggle'),
            dropMenu('basketDropdown', 'close'),
            dropMenu('userDropdown', 'close'),
            dropdownExtendedChecker('favoriteDropdown')"
            class="dropbtn">
              <span class="favorite"></span>
              <span v-if="sendIsMobile === true">
                <span v-if="whihDropdownIsExtended === 'favoriteDropdown' && isExtended && isExtendedFav" class="arrow up"></span>
                <span v-else class="arrow down"></span>
              </span>
              <span id="arrowFavorite" v-if="sendIsMobile === true"></span>
              <img class="favoriteImg" src="..\assets\Icons\heart.png">
            </button>
            <div id="favoriteDropdown" class="dropdown-content" v-bind:style= "[favoriteBooks > 1 ? {overflow: 'auto'} : {overflow: 'hidden'}]">
              <b-container>
                <b-row class="products">
                  <span v-if="favoriteBooks === 0">Nic tu nie ma</span>
                  <div class="loopProducts" v-for="(book, index) in cart" :key="index" v-if="book.favorite === true">
                    <div class="singleProduct">
                      <div>{{ book.title }}</div>
                      <div>
                        <img class="coverProduct" :src="book.cover" /> 
                      </div>
                      <div>
                        <span>{{ (book.price).toFixed(2) }}</span>
                      </div>
                    </div>
                  </div>
                </b-row>
              </b-container>
            </div>
          </div>
          <div v-click-outside="outsideBasket" class="dropdown">
            <button @click="dropMenu('basketDropdown', 'toggle'),
            dropMenu('userDropdown', 'close'),
            dropMenu('favoriteDropdown', 'close'),
            dropdownExtendedChecker('basketDropdown')"
            class="dropbtn">
              <span class="basket">
                <span v-if="cartCount > 0 && sendIsMobile === true">
                  ({{ cartCount }})
                </span>
              </span>
              <span v-if="cartCount > 0 && sendIsMobile === false" class="itemsInCartIndicator">
                <span v-if="cartCount > 99">
                  ···
                </span>
                <span v-else>
                  {{ cartCount }}
                </span>
              </span>
              <span v-if="sendIsMobile === true">
                <span v-if="whihDropdownIsExtended === 'basketDropdown' && isExtended && isExtendedBas" class="arrow up"></span>
                <span v-else class="arrow down"></span>
                <span class="notificationInCart" v-if="cartCount > 0 && sendIsMobile === true"></span>
              </span>
              <img class="basketImg" src="..\assets\Icons\shopping-cart.png">
            </button>
            <!-- unfortunately I can't use siplebar on basketDropdown element because it affects cleanCart button -->
            <div id="basketDropdown" class="dropdown-content" v-bind:style= "[cartCount > 1 ? {overflow: 'auto'} : {overflow: 'hidden'}]">
              <b-container>
                <b-row class="products">
                  <span v-if="cartCount === 0">Koszyk jest pusty</span>
                  <!-- it’s not recommended to use v-if and v-for together... blah blah blah -->
                  <div class="loopProducts" v-for="(book, index) in cart" :key="index" v-if="book.quantityInCart > 0">
                    <div class="singleProduct">
                    <div>{{ book.title }}</div>
                    <div>
                      <img class="coverProduct" :src="book.cover" /> 
                    </div>
                    <div>
                      <span v-if="book.quantityInCart > 1">x{{ book.quantityInCart }} = </span>{{ (book.price*book.quantityInCart).toFixed(2) + " zł"}}
                    </div>
                    <div class="removeAllButtonWrapper">
                      <b-button @click="removeItem(book.id)">Usuń z koszyka</b-button>
                    </div>
                  </div>
                  </div>
                </b-row>
              </b-container>
              <span v-if="cartCount > 0" class="basketSummary">Suma koszyka: {{ summaryPrice.toFixed(2) }}</span>
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
            </div>
          </div>
          <div v-click-outside="outsideUser" class="dropdown">
            <button @click="dropMenu('userDropdown', 'toggle'),
            dropMenu('basketDropdown', 'close'),
            dropMenu('favoriteDropdown', 'close'),
            dropdownExtendedChecker('userDropdown')"
            class="dropbtn">
              <span class="user"></span>
              <span v-if="sendIsMobile === true">
                <span v-if="whihDropdownIsExtended === 'userDropdown' && isExtended && isExtendedUsr" class="arrow up"></span>
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
              to="/rejestracja">
                Rejestracja
              </router-link>
            </div>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-navbar class="lowerNavbar" toggleable="lg" type="dark">
      <b-navbar-toggle @click="toggle(2)" target="lowerNav" class="menuExtender menuExtenders">
        <template #default="{ expanded }">
          <p v-if="expanded">MENU<span class="arrow up"></span></p>
          <p v-else>MENU<span class="arrow down"></span></p>
        </template>
      </b-navbar-toggle>
      <b-collapse v-model="secondExtended" id="lowerNav" is-nav>
        <b-nav-item class="navButton" :to="'/kategorie'">Kategorie</b-nav-item>
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
      whihDropdownIsExtended: 'none',
      isExtended: false,
      isExtendedFav: false,
      isExtendedBas: false,
      isExtendedUsr: false,
      clickInside: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.scrollListener);
  },
  directives: {
    'click-outside': {
      bind(el, binding) {
        const { bubble } = binding.modifiers;
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };
        el.clickOutside = handler;
        document.addEventListener('click', handler);
      },
      unbind(el) {
        document.removeEventListener('click', el.clickOutside);
        el.clickOutside = null;
      },
    },
  },
  computed: {
    cartCount() {
      let counter = 0;
      for (let i = 0; i < this.$store.getters.products.length; i++) {
        counter += this.$store.getters.products[i].quantityInCart;
      }
      return counter;
    },
    favoriteBooks() {
      let counter = 0;
      for (let i = 0; i < this.$store.getters.products.length; i++) {
        if (this.$store.getters.products[i].favorite === true) {
          counter += 1;
        }
      }
      return counter;
    },
    summaryPrice() {
      let summary = 0;
      for (let i = 0; i < this.$store.getters.products.length; i++) {
        if (this.$store.getters.products[i].quantityInCart >= 1) {
          const multiply = this.$store.getters.products[i].quantityInCart;
          summary += multiply * this.$store.getters.products[i].price;
        }
      }
      return summary;
    },
    cart() {
      return this.$store.getters.products;
    },
  },
  methods: {
    outsideFavorite() {
      const dropdowns = document.getElementById('favoriteDropdown');
      dropdowns.classList.remove('showDropdown');
      this.isExtendedFav = false;
    },
    outsideBasket() {
      const dropdowns = document.getElementById('basketDropdown');
      dropdowns.classList.remove('showDropdown');
      this.isExtendedBas = false;
    },
    outsideUser() {
      const dropdowns = document.getElementById('userDropdown');
      dropdowns.classList.remove('showDropdown');
      this.isExtendedUsr = false;
    },
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
          this.firstExtended = null;
          this.secondExtended = null;
      }
    },
    dropMenu(section, action) {
      if (action === 'close') document.getElementById(section).classList.remove('showDropdown');
      else if (action === 'toggle') document.getElementById(section).classList.toggle('showDropdown');
      else document.getElementById(section).classList.add('showDropdown');
    },
    scrollListener() {
      const $ = require('jquery');
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 && this.sendIsMobile === false) {
        $('.lowerNavbar').addClass('lowerNavbarHider');
        $('.navButton').addClass('navButtonHider');
      } else {
        $('.lowerNavbar').removeClass('lowerNavbarHider');
        $('.navButton').removeClass('navButtonHider');
      }
    },
    dropdownExtendedChecker(id) {
      const $ = require('jquery');
      let target = $('#'+id);
      if (id === 'closing') {
        this.whihDropdownIsExtended = 'none';
        this.isExtended = false;
      } else target = $(`#${id}`);
      if (target.hasClass('showDropdown')) {
        switch (id) {
          case 'favoriteDropdown':
            this.isExtendedFav = true;
            break;
          case 'basketDropdown':
            this.isExtendedBas = true;
            break;
          case 'userDropdown':
            this.isExtendedUsr = true;
            break;
          default:
            this.isExtendedUsr = null;
            this.isExtendedBas = null;
            this.isExtendedFav = null;
        }
        this.whihDropdownIsExtended = id;
        this.isExtended = true;
      }
      else {
        this.whihDropdownIsExtended = 'none';
        this.isExtended = false;
      }
    },
    clearCart() {
      for (let i = 0; i < this.$store.getters.products.length; i++) {
        this.$store.getters.products[i].quantityInCart = 0;
      }
    },
    removeItem(id) {
      this.$store.dispatch('removeFromCart', id);
    },
  },
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
  z-index: 1;
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
  border: 3px solid #2a3c49;
  background: #557a95;
  pointer-events: none;
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
  // opacity: 0;
  padding: 0;
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
  // padding: 10px 15px 10px 15px;
  width: 20vw;
  @media (max-width: 991px)
  {
    padding: 0;
    width: auto;
  }
}
#favoriteDropdown {
  // overflow: auto;
  // padding: 10px 15px 10px 15px;
  width: 20vw;
  @media (max-width: 991px)
  {
    padding: 0;
    width: auto;
  }
}
.coverProduct {
  height: 120px;
}
.products {
  margin: auto;
  padding: 10px;
}
.loopProducts {
  margin: auto;
}
.singleProduct {
  background-color: #557a95;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  width: 15vw;
  @media (max-width: 991px)
  {
    width: auto;
  }
}
.removeAllButtonWrapper {
  margin-bottom: 10px;
}
.notification {
  width: 10px;
  height: 10px;
  top: 10px;
  right: 10px;
  position: absolute;
  z-index: 99;
  border-radius: 50%;
  background: #bb6363;
}
.notificationInCart {
  width: 10px;
  height: 10px;
  top: 15px;
  margin-left: 10px;
  position: absolute;
  z-index: 99;
  border-radius: 50%;
  background: #bb6363;
}
.basketSummary {
  margin: auto;
}
.line1, .line2, .line3 {
  width: 30px;
  height: 4px;
  background-color: #7395ae;
  margin: 4px 0;
  transition: 0.4s;
  border-radius: 2px;
}
.toggle .line1 {
  transform: rotate(-45deg) translate(-5.5px, 5.5px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5.5px, -5.5px);
}
</style>
