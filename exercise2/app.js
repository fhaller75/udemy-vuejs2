new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    myAlert: function() {
      alert('Alert!');
    },
    setValue: function(event) {
      this.value = event.target.value;
    }
  }
});