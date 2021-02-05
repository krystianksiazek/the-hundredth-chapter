<template>
  <b-container>
    <div v-b-toggle.filters>
      <span class="when-open">Ukryj</span><span class="when-closed">Pokaż</span> filtry
    </div>
    <div class="filtersWrapper">
      <b-collapse id="filters">
        <div class="filters">
          <label for="sb-step">Ocena minimum: </label>
          <b-form-spinbutton
            class="rateSpinbutton"
            id="sb-small"
            v-model="rateFilterSelect"
            min="0"
            max="5"
            step="0.10">
          </b-form-spinbutton>
          <!-- <b-dropdown>
            <template #button-content>
              Ocena powyżej: <strong>{{ rateFilterSelect }}</strong>
            </template>
            <b-dropdown-item v-for="option in rateFilter" 
                            :key="option" 
                            :value="option"
                            @click="rateFilterSelect = option">
              {{ option }}
            </b-dropdown-item>
          </b-dropdown> -->
          <b-dropdown class="ml-2">
            <template #button-content>
              Sortowanie wg: <strong>{{ sortingSelectSend }}</strong>
            </template>
            <b-dropdown-item v-for="option in sorting" 
                            :key="option" 
                            :value="option"
                            @click="sendBackSorting(option)">
              {{ option }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </b-collapse>
    </div>
    <!-- <b-form-select v-model="rateFilterSelect" :options="rateFilter"></b-form-select> -->
  </b-container>
</template>

<script>
export default {
  name: 'filters',
  data() {
    return {
      sorting: [
        'oceny rosnąco',
        'oceny malejąco',
        'tytyłu rosnąco',
        'tytyłu malejąco',
        'ceny rosnąco',
        'ceny malejąco',
        'domyślnie',
      ],
    };
  },
  props: {
    sortingSelectSend: {
      type: String,
      required: true,
    },
    rateFilterSelectSend: {
      type: Number,
      required: true,
    }
  },
  methods: {
    sendBackSorting(sortingSelectSend) {
      this.$emit("update-sorting", sortingSelectSend);
    },
  },
  computed: {
    rateFilterSelect: {
      get(){
        return this.rateFilterSelectSend;
      },
      set(rateFilterSelectSend){
        this.$emit("update-rate", rateFilterSelectSend);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .collapsed > .when-open,
  .not-collapsed > .when-closed {
    display: none;
  }
  h1 {
    text-align: center;
  }
  .bestBooks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .filtersWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .allBooks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .pagination {
    display: flex;
    justify-content: center;
  }
</style>