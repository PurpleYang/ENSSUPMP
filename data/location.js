var location = {
    getLocation: function (selectList) {
      var location = {
        id: 'location',
        name: '位置',
        items: [
          { id: 'Adc', value: 'Adc' },
          { id: 'Mid', value: 'Mid' },
          { id: 'Top', value: 'Top' },
          { id: 'Sup', value: 'Sup' },
          { id: 'Jg', value: 'Jg' }
        ]
      };
      if (selectList && selectList.length) {
        for (var i = 0, l = location.items.length; i < l; i++) {
          var item = location.items[i];
          if (selectList.indexOf(item.id) >= 0) {
            item.checked = true;
          }
        }
      }
      return location;
    }
  };
  module.exports = location;