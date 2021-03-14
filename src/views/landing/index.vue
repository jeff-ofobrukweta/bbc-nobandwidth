<template>
  <div class="landing-container-main">
    <div class="top-container-main">
      <div class="left-column">
        <picture class="lazyloaded">
          <source media="(min-width:650px)" :srcset="data.image" />
          <source media="(min-width:465px)" :srcset="data.image" />
          <img
            :src="data.image"
            :alt="data.p1"
            class="lazyloaded"
          />
        </picture>
      </div>
      <div class="right-column">
        <div class="right1">
          <a href="http://www.bbc.co.uk/news/world/asia/india" target="_blank">
            <h2 class="tile">'{{ data.title }}'</h2>
          </a>
          <p
            class="gs-c-promo-summary gel-long-primer gs-u-mt nw-c-promo-summary"
          >
            {{ data.p1 }}
          </p>
        </div>
        <div class="right2">
          {{ data.author }} | {{ data.createdOn }} | {{ data.country }}
        </div>
      </div>
    </div>
    <div class="content-paragraph">
      <p class="paragraph p2">{{ data.p2 }}</p>
      <p class="paragraph p3">{{ data.p3 }}</p>
      <p class="paragraph p4">{{ data.p4 }}</p>
      <p class="paragraph p5">{{ data.p5 }}</p>
      <h4 class="note">{{ data.compareTabs }}</h4>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
@import "./index.css";
</style>

<script>
export default {
  name: "LandingContent",
  props: {
    data: {
      type: Object,
    },
  },
};
</script>
