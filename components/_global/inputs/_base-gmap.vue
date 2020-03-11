<template>
  <client-only>
    <gmap-autocomplete
      @place_changed="handleChange"
      :selectFirstOnEnter="true"
      :options="{
        types: ['(cities)']
      }"
    >
      <template v-slot:input="slotProps">
        <input
          ref="input"
          :value="formatted_address"
          class="form-control"
          v-on:listeners="slotProps.listeners"
          v-on:attrs="slotProps.attrs"
        />
      </template>
    </gmap-autocomplete>
  </client-only>
</template>

<script>
export default {
  props: {
    initialValue: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      formatted_address: ''
    };
  },

  watch: {
    initialValue(newValue) {
      this.formatted_address = newValue;
    }
  },

  methods: {
    handleChange(place) {
      //console.log(place);
      if (!place || place == undefined || !place.geometry) {
        this.$emit('no-results-found', place);
        return false;
      }

      if (place.address_components !== undefined) {
        let returnData = {};
        returnData['latitude'] = place.geometry.location.lat();
        returnData['longitude'] = place.geometry.location.lng();
        returnData['formatted_address'] = place.formatted_address;
        this.$emit('address-response', returnData);
      } else {
        this.$emit('no-results-found', place);
      }
    }
  }
};
</script>

<style></style>
