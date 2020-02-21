var champions = {
    getChampions: function (selectList) {
      var champions = {
        id: 'champions',
        name: '合集',
        items: [
          { id: 'RebornAIO', value: 'RebornAIO' },
          { id: 'DaoHungAIO', value: 'DaoHungAIO' },
          { id: 'DeathGodxAIO', value: 'DeathGodxAIO' },
          { id: 'PortAIO', value: 'PortAIO' },
          { id: 'OlympusAIO', value: 'OlympusAIO' },
          { id: 'FengYue', value: 'FengYue' },
          { id: 'GuanFang', value: 'GuanFang' },
          { id: 'ensAIO', value: 'ensAIO' },
          { id: 'oktw', value: 'oktw' }
        ]
      };
      if (selectList && selectList.length) {
        for (var i = 0, l = champions.items.length; i < l; i++) {
          var item = champions.items[i];
          if (selectList.indexOf(item.id) >= 0) {
            item.checked = true;
          }
        }
      }
      return champions;
    }
  };
  module.exports = champions;