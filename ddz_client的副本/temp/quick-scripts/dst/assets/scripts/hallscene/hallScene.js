
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/hallscene/hallScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9eee7bdCqVB/LXv3XqKAza9', 'hallScene');
// scripts/hallscene/hallScene.js

"use strict";

var _mygolbal = _interopRequireDefault(require("./../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    nickname_label: cc.Label,
    headimage: cc.Sprite,
    gobal_count: cc.Label,
    creatroom_prefabs: cc.Prefab,
    joinroom_prefabs: cc.Prefab
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.nickname_label = _mygolbal["default"].playerData.nickName;
    this.gobal_count.string = ":" + _mygolbal["default"].playerData.gobal_count;
  },
  start: function start() {},
  // update (dt) {},
  onButtonClick: function onButtonClick(event, customData) {
    switch (customData) {
      case "create_room":
        var creator_Room = cc.instantiate(this.creatroom_prefabs);
        creator_Room.parent = this.node;
        creator_Room.zIndex = 100;
        break;

      case "join_room":
        var join_Room = cc.instantiate(this.joinroom_prefabs);
        join_Room.parent = this.node;
        join_Room.zIndex = 100;
        break;

      default:
        break;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hhbGxzY2VuZS9oYWxsU2NlbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJuaWNrbmFtZV9sYWJlbCIsIkxhYmVsIiwiaGVhZGltYWdlIiwiU3ByaXRlIiwiZ29iYWxfY291bnQiLCJjcmVhdHJvb21fcHJlZmFicyIsIlByZWZhYiIsImpvaW5yb29tX3ByZWZhYnMiLCJvbkxvYWQiLCJteWdsb2JhbCIsInBsYXllckRhdGEiLCJuaWNrTmFtZSIsInN0cmluZyIsInN0YXJ0Iiwib25CdXR0b25DbGljayIsImV2ZW50IiwiY3VzdG9tRGF0YSIsImNyZWF0b3JfUm9vbSIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwibm9kZSIsInpJbmRleCIsImpvaW5fUm9vbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsY0FBYyxFQUFDSixFQUFFLENBQUNLLEtBRFY7QUFFUkMsSUFBQUEsU0FBUyxFQUFDTixFQUFFLENBQUNPLE1BRkw7QUFHUkMsSUFBQUEsV0FBVyxFQUFDUixFQUFFLENBQUNLLEtBSFA7QUFJUkksSUFBQUEsaUJBQWlCLEVBQUNULEVBQUUsQ0FBQ1UsTUFKYjtBQUtSQyxJQUFBQSxnQkFBZ0IsRUFBQ1gsRUFBRSxDQUFDVTtBQUxaLEdBSFA7QUFXTDtBQUVBRSxFQUFBQSxNQWJLLG9CQWFLO0FBQ1AsU0FBS1IsY0FBTCxHQUFzQlMscUJBQVNDLFVBQVQsQ0FBb0JDLFFBQTFDO0FBQ0EsU0FBS1AsV0FBTCxDQUFpQlEsTUFBakIsR0FBMEIsTUFBTUgscUJBQVNDLFVBQVQsQ0FBb0JOLFdBQXBEO0FBQ0QsR0FoQkc7QUFrQkxTLEVBQUFBLEtBbEJLLG1CQWtCSSxDQUVSLENBcEJJO0FBc0JMO0FBRUFDLEVBQUFBLGFBeEJLLHlCQXdCU0MsS0F4QlQsRUF3QmVDLFVBeEJmLEVBd0IwQjtBQUMzQixZQUFPQSxVQUFQO0FBQ0ksV0FBSyxhQUFMO0FBQ0ksWUFBSUMsWUFBWSxHQUFHckIsRUFBRSxDQUFDc0IsV0FBSCxDQUFlLEtBQUtiLGlCQUFwQixDQUFuQjtBQUNBWSxRQUFBQSxZQUFZLENBQUNFLE1BQWIsR0FBc0IsS0FBS0MsSUFBM0I7QUFDQUgsUUFBQUEsWUFBWSxDQUFDSSxNQUFiLEdBQXNCLEdBQXRCO0FBQ0E7O0FBQ0osV0FBSyxXQUFMO0FBQ0ksWUFBSUMsU0FBUyxHQUFHMUIsRUFBRSxDQUFDc0IsV0FBSCxDQUFlLEtBQUtYLGdCQUFwQixDQUFoQjtBQUNBZSxRQUFBQSxTQUFTLENBQUNILE1BQVYsR0FBbUIsS0FBS0MsSUFBeEI7QUFDQUUsUUFBQUEsU0FBUyxDQUFDRCxNQUFWLEdBQW1CLEdBQW5CO0FBQ0E7O0FBQ0o7QUFDSTtBQVpSO0FBY0g7QUF2Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15Z2xvYmFsIGZyb20gXCIuLy4uL215Z29sYmFsLmpzXCJcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCwgXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG5pY2tuYW1lX2xhYmVsOmNjLkxhYmVsLFxuICAgICAgICBoZWFkaW1hZ2U6Y2MuU3ByaXRlLFxuICAgICAgICBnb2JhbF9jb3VudDpjYy5MYWJlbCxcbiAgICAgICAgY3JlYXRyb29tX3ByZWZhYnM6Y2MuUHJlZmFiLFxuICAgICAgICBqb2lucm9vbV9wcmVmYWJzOmNjLlByZWZhYixcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgIHRoaXMubmlja25hbWVfbGFiZWwgPSBteWdsb2JhbC5wbGF5ZXJEYXRhLm5pY2tOYW1lXG4gICAgICAgdGhpcy5nb2JhbF9jb3VudC5zdHJpbmcgPSBcIjpcIiArIG15Z2xvYmFsLnBsYXllckRhdGEuZ29iYWxfY291bnRcbiAgICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcblxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsY3VzdG9tRGF0YSl7XG4gICAgICAgIHN3aXRjaChjdXN0b21EYXRhKXtcbiAgICAgICAgICAgIGNhc2UgXCJjcmVhdGVfcm9vbVwiOlxuICAgICAgICAgICAgICAgIHZhciBjcmVhdG9yX1Jvb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNyZWF0cm9vbV9wcmVmYWJzKVxuICAgICAgICAgICAgICAgIGNyZWF0b3JfUm9vbS5wYXJlbnQgPSB0aGlzLm5vZGUgXG4gICAgICAgICAgICAgICAgY3JlYXRvcl9Sb29tLnpJbmRleCA9IDEwMFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwiam9pbl9yb29tXCI6XG4gICAgICAgICAgICAgICAgdmFyIGpvaW5fUm9vbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuam9pbnJvb21fcHJlZmFicylcbiAgICAgICAgICAgICAgICBqb2luX1Jvb20ucGFyZW50ID0gdGhpcy5ub2RlIFxuICAgICAgICAgICAgICAgIGpvaW5fUm9vbS56SW5kZXggPSAxMDBcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=