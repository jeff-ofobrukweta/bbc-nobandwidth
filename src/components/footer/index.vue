<template>
  <footer class="footer-container-main">
    <div class="col-main-container-footer">
      <div class="col-section-main">
        <h2 class="title-footer-header">{{ fotterTitle }}</h2>
      </div>
      <div class="icon-flex-holder">
        <div class="col-section-main">
          <svg class="services-icon" viewBox="0 0 32 32">
            <path
              d="M6 0v32h20V0H6zm8 2h4v1h-4V2zm3 28h-2v-2h2v2zm7-3H8V4h16v23z"
            ></path>
          </svg>
          <span class="gel-brevier">{{ fotter1 }}</span>
        </div>
        <div class="col-section-main">
          <svg class="services-icon" viewBox="0 0 20 32">
            <polygon
              points="18 15 18 18.86 15.38 24 4.62 24 2 18.86 2 15 0 15 0 19.34 3.38 26 16.62 26 20 19.34 20 15 18 15"
            ></polygon>
            <polygon
              points="11 26 9 26 9 30 4 30 4 32 16 32 16 30 11 30 11 26"
            ></polygon>
            <polygon
              points="12.96 0 6.96 0 4 6.1 4 12 4 14 4 17.1 6.03 22 14.03 22 16 17.1 16 14 16 12 16 6.1 12.96 0"
            ></polygon>
          </svg>
          <span class="gel-brevier">{{ fotter1 }}</span>
        </div>
        <div class="col-section-main">
          <svg class="services-icon" viewBox="0 0 32 32">
            <path d="M5 3h22v12h3V0H2v15h3"></path>
            <path d="M10 12h12v3H10zM10 16h12v3H10zM10 8h12v3H10z"></path>
            <path
              d="M29.5 16l-.5.3-13 8.1-13-8.1-.5-.3H0v16h32V16h-2.5zM29 29H3V17.5l13 8.1 13-8.1V29z"
            ></path>
          </svg>
          <span class="gel-brevier">{{ fotter2 }}</span>
        </div>
        <div class="col-section-main">
          <svg class="services-icon" viewBox="0 0 32 32">
            <path
              d="M16 19.4l16-15V3H0v26h32V8l-4 4v13H4V8.2l12 11.2zm0-2.8L5.8 7h20.4L16 16.6z"
            ></path>
          </svg>
          <span class="gel-brevier">{{ fotter3 }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import "./index.css";
</style>
<script>
export default {
  name: "Footer-Component",
  components: {},
  props: {
    fotterTitle: {
      type: String,
    },
    fotter1: {
      type: String,
    },
    fotter2: {
      type: String,
    },
    fotter3: {
      type: String,
    },
    language: {
      type: String,
    },
  },
};
</script>
