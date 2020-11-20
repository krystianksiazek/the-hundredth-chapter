<template>
      <div class="dimmer">
    <div class="modalWrapper">
      <div class="titleAndClose">
        <span class="title">
          {{ this.$store.getters.products[item].title }}
        </span>
        <a class="close" @click="$emit('close-modal')" />
      </div>
      <div class="content">
        <a class="photoLink" target="_blank">
          <div class="photo"
          v-bind:style="{ backgroundImage: 'url(' + this.$store.getters.products[item].cover + ')' }">
          </div>
        </a>
        <div class="aboutPhoto">
          <h1>{{ this.$store.getters.products[item].title }}</h1>
          <p class="description">
            {{ this.$store.getters.products[item].description }}
          </p>
          {{ this.$store.getters.products[item].rate }}/5
          {{ this.$store.getters.products[item].price }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    item: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
    };
  },
}
</script>
<style lang="scss" scoped>
  .dimmer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    background-color: rgba(0,0,0,0.6);
  }
  .modalWrapper {
    width: 80%;
    position: absolute;
    background-color: rgb(70, 70, 70);
    // border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    z-index: 3;
    @media (max-width: 1000px)
    {
      width: 100% !important;
      height: 100% !important;
    }
  }
  .titleAndClose {
    overflow: hidden;
    display: flex;
    background-color: black;
    height: 30px;
    align-items: center;
    justify-content: center;
  }
  .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 30px 0 5px;
  }
  .content {
    display: flex;
    height: 70vh;
    @media (max-width: 1000px)
    {
      flex-direction: column;
      height: calc(100% - 30px);
    }
  }
  .aboutPhoto {
    text-shadow: 0 0 10px #555;
    text-align: center;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      overflow: auto;
      margin: 0 20px 0 20px;
      border-bottom: 1px solid white;
    }
    @media (max-width: 1000px)
    {
      width: 100%;
      height: 50%;
    }
  }
  .photo {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-image: "";
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    @media (max-width: 1000px)
    {
      width: 100%;
    }
  }
  .photoLink {
    width: 100%;
    @media (max-width: 1000px)
    {
      width: 100%;
      height: 50%;
    }
  }
  .description {
    overflow: auto;
    margin: 20px 20px 0 20px;
  }
  .close {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    opacity: 0.5;
  }
  .close:hover {
    opacity: 1;
  }
  .close:before, .close:after {
    position: absolute;
    left: 13px;
    content: ' ';
    height: 30px;
    width: 2px;
    background-color: rgb(255, 255, 255);
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
</style>
