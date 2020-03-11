import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDHyF93Z-wGUDe0jwGCo49jZarkqAu6CUc',
    libraries: 'places'
  }
});
