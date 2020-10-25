<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
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
.navbarWrapper {
  height: 100px;
  background-color: grey;
  overflow: hidden;
}
.navbarSectionOne {
  height: 60%;
  overflow: hidden;
  padding: 10px;
  display: flex;
  @media (max-width: 1000px)
  {
    justify-content: center;
  }
}
.bookSearch {
  background-color: lightgray;
  font-size: 30px;
  height: 45px;
  width: 30%;
  margin-left: 10px;
  border: none;
  @media (max-width: 1000px)
  {
    display: none;
  }
}
.logo {
  color: grey;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  font-size: 42px;
  margin: 0;
  width: max-content;
  letter-spacing: 5px;
  @media (max-width: 1000px)
  {
    font-size: 30px;
    letter-spacing: 2px;
  }
}
</style>
