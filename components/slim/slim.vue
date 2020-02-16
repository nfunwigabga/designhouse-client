<template>
  <div class="slim">
    <client-only>
      <slot></slot>
    </client-only>
  </div>
</template>

<script>
import Slim from './slim.module.js';

var instance = null;

export default {
  props: ['options'],
  name: 'slim-cropper',
  mounted: function() {
    if (this.options.initialImage) {
      var img = document.createElement('img');
      img.setAttribute('alt', '');
      img.src = this.options.initialImage;
      this.$el.appendChild(img);
    }
    instance = new Slim(this.$el, this.options);
  },
  beforeDestroy: function() {
    instance.destroy();
  }
};
</script>
<style lang="css">
@import './slim.min.css';
</style>
