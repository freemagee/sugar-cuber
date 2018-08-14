Vue.component("search", {
  props: {
    searchQuery: {
      type: String,
      required: true
    },
    searchBranded: {
      type: Boolean,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      query: this.searchQuery,
      isChecked: this.searchBranded
    };
  },
  methods: {
    setSearchBranded(value) {
      this.isChecked = value;
    },
    submit() {
      if (this.query !== "") {
        this.$emit("get-food-list", [this.query, this.isChecked]);
      } else {
        document.getElementById("foodSearch").focus();
        console.log("No search data");
      }
    }
  },
  template: `
  <section class="pa2 pa4-ns pa5-l">
    <div id="search" class="flex-l flex-wrap-l items-center-l justify-center-l">

      <div class="mb3 mb0-l mr5-l flex-l flex-auto-l items-center-l">
        <label for="foodSearch" class="db segoe-ui b mb1 mb0-l mr3-l nowrap-l">Search for food</label>
        <input
          v-model="query"
          @keyup.enter="submit"
          type="text"
          id="foodSearch"
          class="dib input-reset segoe-ui pa2 br2 ba b--black-20 w-100"
          placeholder="e.g. Apples"
        />
      </div>

      <div class="mb3 mb0-l mr5-l">
        <label for="brandedFoods" class="segoe-ui b">
          <input
            v-model="isChecked"
            @click="setSearchBranded($event.target.checked)"
            type="checkbox"
            id="brandedFoods"
            class="mr2"
          />
          Search branded foods?
        </label>
      </div>

      <button
        :class="{ 'is-loading' : loading }"
        @click="submit"
        type="button"
        class="button-reset segoe-ui pv2 ph3 br2 bn bg-caribbean-green white pointer bg-animate hover-bg-near-black"
      >Get Food List</button>

    </div>
  </section>`
});
