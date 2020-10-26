<template>
  <div>
    <b-navbar class="upperNavbar" toggleable="lg" type="dark">
      <b-navbar-brand class="logo" href="#"></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-form>
            <b-form-input size="sm" class="bookSearch" placeholder="Search books"></b-form-input>
          </b-nav-form>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <img src="..\assets\Icons\heart.png" alt="">
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right>
            <template #button-content>
              <img src="..\assets\Icons\basket.png" alt="">
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right>
            <template #button-content>
              <img src="..\assets\Icons\user.png" alt="">
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-navbar class="lowerNavbar" toggleable="lg" type="dark">
      <b-collapse id="nav-collapse" is-nav>
        <b-nav-item-dropdown>
          <template #button-content>
            Categories
          </template>
          <b-dropdown-item href="#">Cat 1</b-dropdown-item>
          <b-dropdown-item href="#">cat 2</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">News</b-nav-item>
        <b-nav-item href="#">Bestsellers</b-nav-item>
        <b-nav-item href="#">Top Rated</b-nav-item>
        <b-nav-item href="#">Recommended</b-nav-item>
        <b-nav-item href="#">Promotions</b-nav-item>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'header',
};
</script>

<style lang="scss" scoped>
.upperNavbar, .lowerNavbar {
  background-color: grey;
  padding: 5px;
  list-style: none;
}
.lowerNavbar {
  // @media (max-width: 991px)
  // {
  //   display: none;
  // }
}
.navbar-nav {
  padding-left: 10px;
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
.logo::before {
  content: "The hundredth chapter";
  @media (max-width: 991px)
  {
    content: "100th chapter";
  }
}
.logo {
  color: grey;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  font-size: 42px;
  margin: 0;
  width: max-content;
  letter-spacing: 5px;
  @media (max-width: 991px)
  {
    font-size: 30px;
    letter-spacing: 2px;
    position: relative;
    margin: 0 auto;
    left: 30px;
  }
}
img {
  height: 50px;
  width: 50px;
}
</style>
