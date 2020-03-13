<template>
  <div>
    <!-- Start Filters -->
    <section class="filters-block shadow-sm">
      <div class="container">
        <form @submit.prevent="search">
          <div class="filters d-flex justify-content-between align-items-center">
            <ul class="filters-dropdown">
              <li class="dropdown">
                <select
                  v-model="filters.orderBy"
                  class="custom-select"
                  style="width: 200px;"
                  @change="search"
                >
                  <option value="latest">Latest First</option>
                  <option value="likes">Most Liked First</option>
                </select>
              </li>
            </ul>

            <div class="d-flex align-items-center">
              <div class="custom-control mr-3 custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="hasComments"
                  true-value="1"
                  false-value="0"
                  v-model="filters.has_comments"
                />
                <label class="custom-control-label" for="hasComments">Has Comments</label>
              </div>

              <div class="custom-control custom-checkbox mr-3">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="hasTeam"
                  true-value="1"
                  false-value="0"
                  v-model="filters.has_team"
                />
                <label class="custom-control-label" for="hasTeam">By Team</label>
              </div>

              <div>
                <div class="input-group mb-0">
                  <input
                    type="text"
                    class="form-control"
                    v-model="filters.q"
                    placeholder="Search..."
                  />
                  <div class="input-group-append">
                    <button
                      :disabled="searching"
                      class="btn rounded primary-bg-color text-white"
                      type="submit"
                    >
                      <span v-if="searching">
                        <i class="fas fa-spinner fa-spin"></i>
                      </span>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    <!-- End Filters -->

    <section class="cards-block">
      <div class="container">
        <div class="row">
          <base-design v-for="design in designs" :key="design.id" :design="design"></base-design>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      designs: [],
      searching: false,
      filters: {
        has_team: 0,
        has_comments: 0,
        q: '',
        orderBy: 'likes'
      }
    };
  },

  computed: {
    queryString() {
      return Object.keys(this.filters)
        .map(k => `${k}=${this.filters[k]}`)
        .join('&');
    }
  },
  methods: {
    search() {
      this.searching = true;
      this.$axios
        .$get(`/search/designs?${this.queryString}`)
        .then(res => (this.designs = res.data))
        .catch(e => console.log(e))
        .finally(() => (this.searching = false));
    }
  },

  beforeMount() {
    this.search();
  }
};
</script>

<style></style>
