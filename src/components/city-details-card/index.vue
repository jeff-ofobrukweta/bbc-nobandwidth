<template>
  <div class="catalog-card">
    <div class="card-wrapper">
      <div class="card__inner_catalog_top">
        <section class="inner_left_section">
          <div class="tag">
            <span @click="$emit('closeAll')" class="closeItem" title="close">
              x
            </span>
          </div>

          <div class="group">
            <h3 class="sub_title_header">CITY NAME :</h3>
            <h4 class="title_card titlename">{{ main.name }}</h4>
          </div>
          <div class="group">
            <h3 class="sub_title_header">AIR QUALITY:</h3>
            <h4 class="title_card titleaqi">{{ main.aqi }}</h4>
          </div>
          <div class="group cigg-group">
            <div class="group1">
              <h3 class="sub_title_header">NO OF CIGGERATES :</h3>
              <h4 class="title_card titlecigg">{{ main.cigg }}</h4>
            </div>
            <div class="group2">
              <img :src="ciggerlogo" class="image" alt="cigerate" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import ciggerlogo from "../../img/ciggrette_icon.png";
export default {
  name: "CityDetails",

  props: {
    cityDetails: {
      type: Array,
    },
  },
  data() {
    return {
      ciggerlogo,
    };
  },
  computed: {
    main() {
      return { ...this.cityDetails[0] };
    },
  },
};
</script>

<style scoped>
@import "./index.css";
</style>
