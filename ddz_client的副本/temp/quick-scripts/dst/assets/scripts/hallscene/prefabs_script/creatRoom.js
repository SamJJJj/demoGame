
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/hallscene/prefabs_script/creatRoom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e85c8xPVuxKX5zdxLJ1e12h', 'creatRoom');
// scripts/hallscene/prefabs_script/creatRoom.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  _createroom: function _createroom(rate) {
    if (rate < 0 || rate > 4) {
      console.log("create room rate error" + rate);
      return;
    }

    var global = 0;

    if (rate == 1) {
      global = 10;
    } else if (rate == 2) {
      global = 20;
    } else if (rate == 3) {
      global = 30;
    } else if (rate == 4) {
      global = 40;
    }

    var room_para = {
      global: global,
      rate: rate
    }; //播放一个等待动画

    _mygolbal["default"].socket.request_creatroom(room_para, function (err, result) {
      if (err != 0) {
        console.log("create_room err:" + err);
      } else {
        console.log("create_room" + JSON.stringify(result)); //网络数据包

        _mygolbal["default"].playerData.bottom = result.bottom;
        _mygolbal["default"].playerData.rate = result.rate;
        cc.director.loadScene("gameScene");
      }
    });
  },
  // update (dt) {},
  onButtonClick: function onButtonClick(event, customData) {
    switch (customData) {
      case "create_room_1":
        this._createroom(1);

        break;

      case "create_room_2":
        this._createroom(2);

        break;

      case "create_room_3":
        this._createroom(3);

        break;

      case "create_room_4":
        this._createroom(4);

        break;

      case "create_room_close":
        this.node.destroy();
        break;

      default:
        break;
    }

    this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hhbGxzY2VuZS9wcmVmYWJzX3NjcmlwdC9jcmVhdFJvb20uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsIl9jcmVhdGVyb29tIiwicmF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnbG9iYWwiLCJyb29tX3BhcmEiLCJteWdsb2JhbCIsInNvY2tldCIsInJlcXVlc3RfY3JlYXRyb29tIiwiZXJyIiwicmVzdWx0IiwiSlNPTiIsInN0cmluZ2lmeSIsInBsYXllckRhdGEiLCJib3R0b20iLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm9uQnV0dG9uQ2xpY2siLCJldmVudCIsImN1c3RvbURhdGEiLCJub2RlIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MO0FBRUE7QUFFQUMsRUFBQUEsS0FYSyxtQkFXSSxDQUVSLENBYkk7QUFlTEMsRUFBQUEsV0FmSyx1QkFlT0MsSUFmUCxFQWVZO0FBQ2IsUUFBR0EsSUFBSSxHQUFDLENBQUwsSUFBVUEsSUFBSSxHQUFDLENBQWxCLEVBQW9CO0FBQ2hCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBMEJGLElBQXRDO0FBQ0E7QUFDSDs7QUFFRCxRQUFJRyxNQUFNLEdBQUcsQ0FBYjs7QUFDQSxRQUFJSCxJQUFJLElBQUUsQ0FBVixFQUFZO0FBQ1JHLE1BQUFBLE1BQU0sR0FBRyxFQUFUO0FBQ0gsS0FGRCxNQUVNLElBQUdILElBQUksSUFBRSxDQUFULEVBQVc7QUFDYkcsTUFBQUEsTUFBTSxHQUFHLEVBQVQ7QUFDSCxLQUZLLE1BRUEsSUFBR0gsSUFBSSxJQUFFLENBQVQsRUFBVztBQUNiRyxNQUFBQSxNQUFNLEdBQUcsRUFBVDtBQUNILEtBRkssTUFFQSxJQUFHSCxJQUFJLElBQUUsQ0FBVCxFQUFXO0FBQ2JHLE1BQUFBLE1BQU0sR0FBRyxFQUFUO0FBQ0g7O0FBRUQsUUFBSUMsU0FBUyxHQUFHO0FBQ1JELE1BQUFBLE1BQU0sRUFBQ0EsTUFEQztBQUVSSCxNQUFBQSxJQUFJLEVBQUNBO0FBRkcsS0FBaEIsQ0FqQmEsQ0FxQkw7O0FBQ0FLLHlCQUFTQyxNQUFULENBQWdCQyxpQkFBaEIsQ0FBa0NILFNBQWxDLEVBQTRDLFVBQVNJLEdBQVQsRUFBYUMsTUFBYixFQUFvQjtBQUM1RCxVQUFJRCxHQUFHLElBQUUsQ0FBVCxFQUFXO0FBQ1BQLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFtQk0sR0FBL0I7QUFDSCxPQUZELE1BRUs7QUFDRFAsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQWdCUSxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsTUFBZixDQUE1QixFQURDLENBRUQ7O0FBQ0FKLDZCQUFTTyxVQUFULENBQW9CQyxNQUFwQixHQUE2QkosTUFBTSxDQUFDSSxNQUFwQztBQUNBUiw2QkFBU08sVUFBVCxDQUFvQlosSUFBcEIsR0FBMkJTLE1BQU0sQ0FBQ1QsSUFBbEM7QUFDQU4sUUFBQUEsRUFBRSxDQUFDb0IsUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCO0FBQ0g7QUFFSixLQVhEO0FBWVgsR0FqREk7QUFtREw7QUFDQUMsRUFBQUEsYUFwREsseUJBb0RTQyxLQXBEVCxFQW9EZUMsVUFwRGYsRUFvRDBCO0FBQzNCLFlBQU9BLFVBQVA7QUFDSSxXQUFLLGVBQUw7QUFDTSxhQUFLbkIsV0FBTCxDQUFpQixDQUFqQjs7QUFDQTs7QUFDTixXQUFLLGVBQUw7QUFDTSxhQUFLQSxXQUFMLENBQWlCLENBQWpCOztBQUNBOztBQUNOLFdBQUssZUFBTDtBQUNNLGFBQUtBLFdBQUwsQ0FBaUIsQ0FBakI7O0FBQ0E7O0FBQ04sV0FBSyxlQUFMO0FBQ00sYUFBS0EsV0FBTCxDQUFpQixDQUFqQjs7QUFDQTs7QUFDTixXQUFLLG1CQUFMO0FBQ00sYUFBS29CLElBQUwsQ0FBVUMsT0FBVjtBQUNGOztBQUNKO0FBQ0k7QUFqQlI7O0FBbUJBLFNBQUtELElBQUwsQ0FBVUMsT0FBVjtBQUVIO0FBMUVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteWdsb2JhbCBmcm9tIFwiLi4vLi4vbXlnb2xiYWwuanNcIlxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIF9jcmVhdGVyb29tKHJhdGUpe1xuICAgICAgICBpZihyYXRlPDAgfHwgcmF0ZT40KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIHJvb20gcmF0ZSBlcnJvclwiKyByYXRlKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZ2xvYmFsID0gMFxuICAgICAgICBpZiAocmF0ZT09MSl7XG4gICAgICAgICAgICBnbG9iYWwgPSAxMFxuICAgICAgICB9ZWxzZSBpZihyYXRlPT0yKXtcbiAgICAgICAgICAgIGdsb2JhbCA9IDIwXG4gICAgICAgIH1lbHNlIGlmKHJhdGU9PTMpe1xuICAgICAgICAgICAgZ2xvYmFsID0gMzBcbiAgICAgICAgfWVsc2UgaWYocmF0ZT09NCl7XG4gICAgICAgICAgICBnbG9iYWwgPSA0MFxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJvb21fcGFyYSA9IHtcbiAgICAgICAgICAgICAgICBnbG9iYWw6Z2xvYmFsLFxuICAgICAgICAgICAgICAgIHJhdGU6cmF0ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL+aSreaUvuS4gOS4quetieW+heWKqOeUu1xuICAgICAgICAgICAgICAgIG15Z2xvYmFsLnNvY2tldC5yZXF1ZXN0X2NyZWF0cm9vbShyb29tX3BhcmEsZnVuY3Rpb24oZXJyLHJlc3VsdCl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIhPTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVfcm9vbSBlcnI6XCIrZXJyKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlX3Jvb21cIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+e9kee7nOaVsOaNruWMhVxuICAgICAgICAgICAgICAgICAgICAgICAgbXlnbG9iYWwucGxheWVyRGF0YS5ib3R0b20gPSByZXN1bHQuYm90dG9tXG4gICAgICAgICAgICAgICAgICAgICAgICBteWdsb2JhbC5wbGF5ZXJEYXRhLnJhdGUgPSByZXN1bHQucmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVNjZW5lXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsY3VzdG9tRGF0YSl7XG4gICAgICAgIHN3aXRjaChjdXN0b21EYXRhKXtcbiAgICAgICAgICAgIGNhc2UgXCJjcmVhdGVfcm9vbV8xXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVyb29tKDEpXG4gICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcImNyZWF0ZV9yb29tXzJcIjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZXJvb20oMilcbiAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwiY3JlYXRlX3Jvb21fM1wiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlcm9vbSgzKVxuICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJjcmVhdGVfcm9vbV80XCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVyb29tKDQpXG4gICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcImNyZWF0ZV9yb29tX2Nsb3NlXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpIFxuICAgICAgICAgICAgICAgIGJyZWFrICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCkgXG5cbiAgICB9XG5cbn0pO1xuIl19