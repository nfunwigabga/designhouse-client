<template>
  <li class="clearfix">
    <div class="comment-thumb float-left">
      <a href="#">
        <img :src="comment.user.photo_url" />
      </a>
    </div>
    <div class="comment-meta">
      <h3 class="font-16 fw-500 mb-2">
        <a href="#" title="Neba">{{ comment.user.name }}</a>
      </h3>
      <p class="font-14 fw-300 mb-2">
        {{ comment.body }}
      </p>
      <span class="font-14 fw-300 d-flex justify-content-between">
        <a href="#">{{ comment.created_at_dates.created_at_human }}</a>
        <span v-if="$auth.loggedIn && $auth.user.id == comment.user.id">
          <a href="#" @click.prevent="destroyComment" class="text-danger">
            Delete
          </a>
        </span>
      </span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },

  methods: {
    destroyComment() {
      this.$axios
        .delete(`/comments/${this.comment.id}`)
        .then(res => this.$emit('deleted', this.comment.id))
        .catch(e => console.log(e));
    }
  }
};
</script>

<style></style>
