<template>
  <section>
    <div class="search-bar">
      <input
        :value="value"
        :type="inputType"
        @input="handleSearchInput"
        :name="customName"
        :class="`input-component ${customClass}`"
        :placeholder="placeHolderText"
        @keydown="handleKeyUp"
        autocomplete="off"
      />
    </div>

    <div v-if="isOpen && inputType === 'search'" class="suggestion">
      <div
        :ref="currentActive === index ? 'active' : ''"
        class="list-item"
        :class="currentActive === index ? 'active' : ''"
        v-for="(item, index) in search"
        :key="index"
        :word="item.name"
        @click="$emit('addAndClose', item.name)"
      >
        {{ item.name }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SearchBox",

  props: {
    placeHolderText: {
      type: String,
      default: "Search Your City",
    },
    inputType: {
      type: String,
      default: "search",
    },
    customName: {
      type: String,
      required: true,
    },
    currentActive: {
      type: Number,
      default: 0,
    },
    customClass: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    search: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleSearchInput(event) {
      event.preventDefault();
      this.$emit("inputed", {
        newValue: event.target.value,
        nameOfInput: this.customName,
      });
    },
    handleKeyUp(event) {
      var char = event.which || event.keyCode;
      if (char === 38) {
        this.$emit("keyup", { type: "UP", name: this.customName });
      } else if (char === 40) {
        this.$emit("keyup", { type: "DOWN", name: this.customName });
      } else if (char === 13) {
        event.preventDefault();
        this.$emit("keyup", { type: "ENTER", name: this.customName });
      }
    },
  },
};
</script>

<style scoped>
@import "./index.css";
</style>
