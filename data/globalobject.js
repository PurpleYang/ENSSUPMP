import spriteList from './sprites/spriteList.js';
var globalObject = {
  // 精灵列表
  spriteList: spriteList,
  // id查询精灵
  getItemById: function (id) {
    for (var i = 0, size = this.spriteList.length; i < size; i++) {
      var item = this.spriteList[i];
      if (id == item.id) {
        return item;
      }
    }
  },
  getItemsByAbility: function (ability) {
    if (!ability) return null;
    var results = [];
    for (var i = 0, size = this.spriteList.length; i < size; i++) {
      var item = this.spriteList[i];
      if (item.ability && item.ability.length && item.ability.indexOf(ability) >= 0) {
        results.push(item);
      }
    }
    return results;
  },
  // 多属性查询精灵
  search: function (key, queryString) {
    var results = [];
    var keys = key.split(',');
    for (var i = 0, size = this.spriteList.length; i < size; i++) {
      var item = this.spriteList[i];
      for (var j = 0, jsize = keys.length; j < jsize; j++) {
        if (item[keys[j]].toLowerCase().indexOf(queryString.toLowerCase()) >= 0) {
          results.push(item);
          break;
        }
      }
    }
    return results;
  },
  filter: function (queryObject) {
    if (!queryObject) {
      return this.spriteList;
    }
    var results = [];
    //Object.assign({}, this.spriteList);;location,herochampion
    var qlocation = queryObject.location;
    var qchampions = queryObject.champions;
    //var qtype = queryObject.type;
    var qgeneration = queryObject.generation;
    var qeggGroup = queryObject.eggGroup;
    for (let i = 0, size = this.spriteList.length; i < size; i++) {
      var sprite = this.spriteList[i];
      var location = sprite.location;
      var champions = sprite.champions;
      var generation = sprite.generation;
      var eggGroup = sprite.eggGroup;
      var isLocationOk = qlocation && qlocation.length ? false : true;
      var isChampionsOk = qchampions && qchampions.length ? false : true;
      var isGenerationOk = qgeneration && qgeneration.length ? false : true;
      var isEggGroupOk = qeggGroup && qeggGroup.length ? false : true;
      if (!isLocationOk) {
        for (let j = 0, l = qlocation.length; j < l; j++) {
          if (location.indexOf(qlocation[j]) >= 0) {
            isLocationOk = true;
          } else {
            isLocationOk = false;
            break;
          }
        }
      }
      if (isLocationOk && !isChampionsOk) {
        for (let j = 0, l = qchampions.length; j < l; j++) {
          if (champions.indexOf(qchampions[j]) >= 0) {
            isChampionsOk = true;
          } else {
            isChampionsOk = false;
            break;
          }
        }
      }
      if (isLocationOk && isChampionsOk && !isGenerationOk) {
        for (let j = 0, l = qgeneration.length; j < l; j++) {
          if (generation == qgeneration[j]) {
            isGenerationOk = true;
            break;
          } else {
            isGenerationOk = false;
          }
        }
      }
      if (isLocationOk && isChampionsOk && isGenerationOk && !isEggGroupOk) {
        for (let j = 0, l = qeggGroup.length; j < l; j++) {
          if (eggGroup.indexOf(qeggGroup[j]) >= 0) {
            isEggGroupOk = true;
          } else {
            isEggGroupOk = false;
            break;
          }
        }
      }
      if (isLocationOk && isChampionsOk && isGenerationOk && isEggGroupOk) {
        results.push(sprite);
      }
    }
    return results;
  }
};
module.exports = globalObject;