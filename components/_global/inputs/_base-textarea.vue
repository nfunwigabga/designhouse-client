<template>
  <div>
    <textarea
      class="form-control form-control-lg font-14 fw-300"
      :rows="rows"
      :value="value"
      :readonly="readonly"
      :placeholder="placeholder"
      :class="{ 'is-invalid': form.errors.has(field) }"
      @input="handleInput"
    />
    <has-error :form="form" :field="field"></has-error>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 3
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    }
  },

  mounted() {
    //console.log(this.$attrs);
  }
};
</script>

<style></style>
