<template>
  <div class="registerWrapper">
    <div class="registerForm">
      <h1>Rejestracja</h1>
      <div class="registerFormPart">
        <input id="email" type="email" name="email" required />
        <label for="email" class="labelWrapper">
          <span class="labelContent">E-mail <span id="emailError" class="error"></span></span>
        </label>
      </div>
      <div class="registerFormPart">
        <input id="password" type="password" name="password" required />
        <label for="password" class="labelWrapper">
          <span class="labelContent">Hasło <span id="passwordError" class="error"></span></span>
        </label>
      </div>
      <div class="registerFormPart">
        <input id="repeatPassword" type="password" name="repeatPassword" required />
        <label for="repeatPassword" class="labelWrapper">
          <span class="labelContent">Powtórz hasło <span id="passwordsError" class="error">
          </span></span>
        </label>
      </div>
      <div class="registerFormPart">
        <input id="name" type="text" name="name" required />
        <label for="name" class="labelWrapper">
          <span class="labelContent">Imię <span id="nameError" class="error"></span></span>
        </label>
      </div>
      <div class="registerFormPart">
        <input id="surname" type="text" name="surname" required />
        <label for="surname" class="labelWrapper">
          <span class="labelContent">Nazwisko <span id="surnameError" class="error"></span></span>
        </label>
      </div>
      <div class="searchWrapper">
        <div class="registerFormPart">
          <input id="favorites" type="text" name="favorites" v-model="search" required />
          <label for="favorites" class="labelWrapper">
            <span class="labelContent">Trzy ulubione gatunki książek <span id="surnameError" class="error"></span></span>
          </label>
        </div>
        <div class="searchBox" v-if="search">
            <div class="searchList" v-if="subCategoriesSelected.length < 3">
              <div v-for="category in filteredList" :key="category" class="category" ><a class="size5" v-if="preventDuplicates(category)" @click="selectSubCategory(category)"> {{category}} </a></div>
            </div>
          </div>
      </div>
      <div>
        <ul class="categoriesShower" v-for="category in subCategoriesSelected" :key="category">
          <li class="category"><a class="size5" @click="removeSubCategory(category)"> {{category}} </a></li>
        </ul>
      </div>
      <div class="registerRegulations">
        <b-form-checkbox v-model="isRegulationsChecked" name="check-button" switch>
         <b v-if="isRegulationsChecked === false">Nie akceptuję regulaminu</b>
         <b v-if="isRegulationsChecked === true">Akceptuję regulamin</b>
        </b-form-checkbox>
      </div>
      <div class="errorAndSubmit">
        <b-button @click='onSubmit()' class="submit" variant="dark">Załóż konto</b-button>
        <p id="regulationsError" class="error"></p>
        <p id="errorOnSubmit" class="error"></p>
      </div>
      <!-- <multiselect v-model="value" :options="cat" :multiple="true" :max='3'></multiselect> -->
    </div>
    <!-- <div class="categoriesWrapper">
      <ul class="categoriesShower" v-for="category in cat" :key="category">
        <li class="category"><a class="size5"> {{category}} </a></li>
      </ul>
    </div> -->
    <!-- {{subCategoriesSelected}}
    <div class="categoriesWrapper">
      <ul class="categoriesShower" v-for="category in filteredList" :key="category">
        <li class="category" v-if="subCategoriesSelected.length < 3"><a class="size5" v-if="preventDuplicates(category)" @click="selectSubCategory(category)"> {{category}} </a></li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Multiselect from 'vue-multiselect';

export default {
  name: 'register',
  computed: {
    ...mapGetters(['categories']),
    filteredList() {
      return this.subCategories.filter(cat => {
        return cat.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  components: { Multiselect },
  data() {
    return {
      value: null,
      search: '',
      isValidEmail: false,
      isValidPassword: false,
      isValidRepeatPassword: false,
      isPasswordMatch: false,
      isValidName: false,
      isValidSurname: false,
      isRegulationsChecked: false,
      subCategories: [],
      subCategoriesSelected: []
    };
  },
  mounted() {
      var check = setInterval(() => {
        // simple checking if categories is loaded
        if (this.categories.length > 1) {
          for (let i = 0; i < this.categories.length; i++) {
            for (let j = 0; j < this.categories[i].subCat.length; j++) {
              this.subCategories.push(this.categories[i].subCat[j]);
              clearInterval(check);
            }
          }
        }
      }, 100);    
    /* eslint-disable global-require */
    const $ = require('jquery');
    const email = $('#email');
    const password = $('#password');
    const repeatPassword = $('#repeatPassword');
    const name = $('#name');
    const surname = $('#surname');
    const regulations = $('#regulations');
    const errorFieldEmail = $('#emailError');
    const errorFieldPassword = $('#passwordError');
    const errorFieldPasswords = $('#passwordsError');
    const errorFieldName = $('#nameError');
    const errorFieldSurname = $('#surnameError');
    email.focusout(() => {
      if (email.val() !== '') {
        email.addClass('hasValue');
        if (this.validEmail(email.val()) === true) {
          email.addClass('valid');
          email.removeClass('invalid');
          this.isValidEmail = true;
          errorFieldEmail.text('');
        } else {
          email.addClass('invalid');
          email.removeClass('valid');
          this.isValidEmail = false;
          errorFieldEmail.text(' adres jest nie prawidłowy');
        }
      } else {
        email.removeClass('hasValue');
        email.removeClass('invalid');
        email.removeClass('valid');
        this.isValidEmail = false;
        errorFieldEmail.text('');
      }
    });
    password.focusout(() => {
      if (password.val() !== '') {
        if (password.val().length >= 8) {
          password.addClass('valid');
          password.removeClass('invalid');
          errorFieldPassword.text('');
          this.isValidPassword = true;
          if (repeatPassword.val() !== '') {
            if (repeatPassword.val() === password.val()) {
              password.addClass('valid');
              password.removeClass('invalid');
              errorFieldPassword.text('');
              this.isValidPassword = true;
            } else {
              password.addClass('invalid');
              password.removeClass('valid');
              errorFieldPassword.text('Hasła muszą być identyczne');
              this.isValidPassword = false;
            }
          }
        } else {
          password.addClass('invalid');
          password.removeClass('valid');
          errorFieldPassword.text(' musi składać się co najmniej z 8 znaków');
          this.isValidPassword = false;
        }
      } else {
        password.removeClass('invalid');
        password.removeClass('valid');
        errorFieldPassword.text('');
        this.isValidPassword = false;
      }
    });
    repeatPassword.focusout(() => {
      if (repeatPassword.val() !== '') {
        if (repeatPassword.val().length >= 8) {
          this.isValidRepeatPassword = true;
          if (repeatPassword.val() === password.val()) {
            repeatPassword.addClass('valid');
            repeatPassword.removeClass('invalid');
            errorFieldPasswords.text('');
            this.isPasswordMatch = true;
          } else {
            repeatPassword.addClass('invalid');
            repeatPassword.removeClass('valid');
            errorFieldPasswords.text('Hasła muszą być identyczne');
            this.isPasswordMatch = false;
          }
        } else {
          repeatPassword.addClass('invalid');
          repeatPassword.removeClass('valid');
          errorFieldPasswords.text(' musi składać się co najmniej z 8 znaków');
          this.isValidRepeatPassword = false;
        }
      } else {
        repeatPassword.removeClass('invalid');
        repeatPassword.removeClass('valid');
        errorFieldPasswords.text('');
        this.isPasswordMatch = false;
        this.isValidRepeatPassword = false;
      }
    });
    name.focusout(() => {
      if (name.val() !== '') {
        if (name.val().length >= 2) {
          if (this.validName(name.val()) === true) {
            name.addClass('valid');
            name.removeClass('invalid');
            this.isValidName = true;
            errorFieldName.text('');
          } else {
            name.addClass('invalid');
            name.removeClass('valid');
            this.isValidName = false;
            errorFieldName.text(' może składać się tylko z liter');
          }
        } else {
          name.addClass('invalid');
          name.removeClass('valid');
          this.isValidName = false;
          errorFieldName.text(' musi mieć co najmniej 2 znaki');
        }
      } else {
        name.removeClass('valid');
        name.removeClass('invalid');
        this.isValidName = false;
        errorFieldName.text('');
      }
    });
    surname.focusout(() => {
      if (surname.val() !== '') {
        if (surname.val().length >= 2) {
          if (this.validName(surname.val()) === true) {
            surname.addClass('valid');
            surname.removeClass('invalid');
            this.isValidSurname = true;
            errorFieldSurname.text('');
          } else {
            surname.addClass('invalid');
            surname.removeClass('valid');
            this.isValidSurname = false;
            errorFieldSurname.text(' może składać się tylko z liter');
          }
        } else {
          surname.addClass('invalid');
          surname.removeClass('valid');
          this.isValidSurname = false;
          errorFieldSurname.text(' musi mieć conajmniej 2 znaki');
        }
      } else {
        surname.removeClass('valid');
        surname.removeClass('invalid');
        this.isValidSurname = false;
        errorFieldSurname.text('');
      }
    });
  },
  methods: {
    selectSubCategory(category) {
      this.subCategoriesSelected.push(category);
      document.getElementById("favorites").focus();
      this.search = '';
    },
    removeSubCategory(category) {
      this.subCategoriesSelected.splice(this.subCategoriesSelected.indexOf(category), 1);
    },
    preventDuplicates(category) {
      if(this.subCategoriesSelected.indexOf(category) >= 0) {
        return false;
      } else return true;
    },
    validName(name) {
      const tester = /^([a-zA-Z])+$/;
      return (tester.test(name));
    },
    validEmail(email) {
      /* eslint-disable no-useless-escape */
      const tester = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return (tester.test(email));
    },
    onSubmit() {
      const $ = require('jquery');
      
      if (this.isValidName === true && this.isValidSurname === true 
      && this.isValidEmail === true && this.isValidPassword === true 
      && this.isValidRepeatPassword === true && this.isPasswordMatch === true 
      && this.isRegulationsChecked === true) {
        console.log($('#name').val());
        console.log($('#email').val());
        console.log($('#password').val());
        this.showError(0);
      } else if (this.isValidName === true && this.isValidSurname === true
       && this.isValidEmail === true && this.isValidPassword === true 
       && this.isValidRepeatPassword === true && this.isPasswordMatch === true 
       && this.isRegulationsChecked === false) {
        this.showError(2);
      } else {
        this.showError(1);
      }
    },
    showError(errCode) {
      const $ = require('jquery');
      const errorOnSubmit = $('#errorOnSubmit');
      switch (errCode) {
        case 0:
          errorOnSubmit.text('');
          break;
        case 1:
          errorOnSubmit.text('Proszę wypełnić wszystkie pola poprawnie!');
          setTimeout(() => {
            errorOnSubmit.text('');
          }, 5000);
          break;
        case 2:
          errorOnSubmit.text('Proszę zaakceptować regulamin');
          setTimeout(() => {
            errorOnSubmit.text('');
          }, 5000);
          break;
        default:
          break;
      }
    }
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
h1 {
  text-align: center;
}
.registerForm {
  padding: 20px;
  width: 500px;
  display: flex;
  flex-direction: column;
}
.registerWrapper {
  // height: 450px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.registerFormPart {
  // width: 350px;
  position: relative;
  height: 55px;
  overflow: hidden;
  margin-top: 15px;
  font-size: 20px;
}
.registerFormPart input {
  // height: 100%;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0);
  padding-top: 10px;
  color: white;
  border: none;
  font-size: 30px;
  outline: none;
}
.registerFormPart label {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  border-bottom: 1px solid rgb(200, 200, 200);
  color: rgb(200, 200, 200);
}
.valid + label[for=email],
.valid + label[for=password],
.valid + label[for=repeatPassword],
.valid + label[for=name],
.valid + label[for=surname] {
  border-bottom: 2px solid green;
}
.invalid + label[for=email],
.invalid + label[for=password],
.invalid + label[for=repeatPassword],
.invalid + label[for=name],
.invalid + label[for=surname] {
  border-bottom: 2px solid rgb(255, 55, 55);
}
.registerFormPart label::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 100%;
  width: 100%;
  border-bottom: 4px solid rgba($color: #168eff, $alpha: 1);
  transform: translateX(-100%);
  transition: transform .3s ease;
}
.labelContent {
  position: absolute;
  bottom: 5px;
  left: 0;
  transition: all .3s ease;
  white-space: nowrap;
}
.registerFormPart input:focus + .labelWrapper .labelContent,
.registerFormPart input:valid + .labelWrapper .labelContent,
.registerFormPart .hasValue + .labelWrapper .labelContent {
  transform: translateY(-160%);
  font-size: 12px;
  color: white;
}
.registerFormPart input:focus + .labelWrapper::after {
  transform: translateX(0);
}
.registerRegulations {
  margin-top: 10px;
  text-align: center;
}
.errorAndSubmit {
  text-align: center;
  // display: none;
  width: 100%;
  position: relative;
  height: 50px;
  margin-top: 15px;
}
.error {
  color: red;
}
.labelWrapper {
  margin-bottom: 2px;
}
.categoriesWrapper {
  width: 500px;
}
ul {
	margin-top: 50px;
	list-style-type: none;
}
li {
	float: left;
}
ul li a {
	text-decoration: none;
	line-height: 2.3em;
  font-weight: bold;
}
ul li a.size5 {
	color: #004e6b;
	padding: 6px;
  border: 1px solid white;
  border-radius: 20px;
}
ul li a.size5:hover {
  border: 1px solid #007ead;
}
.searchBox {
  background: aliceblue;
  overflow: auto;
  height: min-content;
  position: absolute;
  z-index: 10;
  width: 100%;
  max-height: 200px;
}
.searchList {
  display: flex;
  flex-direction: column;
}
.searchWrapper {
  position: relative;
}
</style>
