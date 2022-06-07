
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/hallscene/prefabs_script/joinRoom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b543i+qr1Px4nfSdBwSJcb', 'joinRoom');
// scripts/hallscene/prefabs_script/joinRoom.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    joinids: {
      type: cc.Label,
      "default": []
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.joinid = "";
    this.cur_input_count = -1;
  },
  start: function start() {},
  //  update (dt) {
  //  },
  onButtonClick: function onButtonClick(event, customData) {
    if (customData.length === 1) {
      this.joinid += customData;
      this.cur_input_count += 1;
      this.joinids[this.cur_input_count].string = customData; //console.log("joinid.length:"+this.joinid.length)

      if (this.joinid.length >= 6) {
        //判断加入房间逻辑
        var room_para = {
          roomid: this.joinid
        };

        _mygolbal["default"].socket.request_jion(room_para, function (err, result) {
          if (err) {
            console.log("err" + err);
          } else {
            console.log("join room sucess" + JSON.stringify(result));
            _mygolbal["default"].playerData.bottom = result.bottom;
            _mygolbal["default"].playerData.rate = result.rate;
            cc.director.loadScene("gameScene");
          }
        });

        return;
      }

      console.log("customData:" + customData);
    }

    switch (customData) {
      case "back":
        if (this.cur_input_count < 0) {
          return;
        }

        this.joinids[this.cur_input_count].string = "";
        this.cur_input_count -= 1;
        this.joinid = this.joinid.substring(0, this.joinid.length - 1);
        break;

      case "clear":
        for (var i = 0; i < 6; ++i) {
          this.joinids[i].string = "";
        }

        this.joinid = "";
        this.cur_input_count = -1;
        break;

      case "close":
        this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hhbGxzY2VuZS9wcmVmYWJzX3NjcmlwdC9qb2luUm9vbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImpvaW5pZHMiLCJ0eXBlIiwiTGFiZWwiLCJvbkxvYWQiLCJqb2luaWQiLCJjdXJfaW5wdXRfY291bnQiLCJzdGFydCIsIm9uQnV0dG9uQ2xpY2siLCJldmVudCIsImN1c3RvbURhdGEiLCJsZW5ndGgiLCJzdHJpbmciLCJyb29tX3BhcmEiLCJyb29taWQiLCJteWdsb2JhbCIsInNvY2tldCIsInJlcXVlc3RfamlvbiIsImVyciIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwicGxheWVyRGF0YSIsImJvdHRvbSIsInJhdGUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInN1YnN0cmluZyIsImkiLCJub2RlIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsT0FBTyxFQUFDO0FBQ0pDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxLQURMO0FBRUosaUJBQVE7QUFGSjtBQURFLEdBSFA7QUFXTDtBQUVBQyxFQUFBQSxNQWJLLG9CQWFLO0FBQ04sU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLENBQUMsQ0FBeEI7QUFDSCxHQWhCSTtBQWtCTEMsRUFBQUEsS0FsQkssbUJBa0JJLENBRVIsQ0FwQkk7QUFzQkw7QUFFQTtBQUVBQyxFQUFBQSxhQTFCSyx5QkEwQlNDLEtBMUJULEVBMEJlQyxVQTFCZixFQTBCMEI7QUFDM0IsUUFBR0EsVUFBVSxDQUFDQyxNQUFYLEtBQW9CLENBQXZCLEVBQXlCO0FBQ3JCLFdBQUtOLE1BQUwsSUFBZUssVUFBZjtBQUNBLFdBQUtKLGVBQUwsSUFBd0IsQ0FBeEI7QUFDQSxXQUFLTCxPQUFMLENBQWEsS0FBS0ssZUFBbEIsRUFBbUNNLE1BQW5DLEdBQTRDRixVQUE1QyxDQUhxQixDQUlyQjs7QUFDQSxVQUFHLEtBQUtMLE1BQUwsQ0FBWU0sTUFBWixJQUFvQixDQUF2QixFQUF5QjtBQUNyQjtBQUNBLFlBQUlFLFNBQVMsR0FBRztBQUNaQyxVQUFBQSxNQUFNLEVBQUMsS0FBS1Q7QUFEQSxTQUFoQjs7QUFHQVUsNkJBQVNDLE1BQVQsQ0FBZ0JDLFlBQWhCLENBQTZCSixTQUE3QixFQUF1QyxVQUFTSyxHQUFULEVBQWFDLE1BQWIsRUFBb0I7QUFDdkQsY0FBSUQsR0FBSixFQUFRO0FBQ0pFLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQU9ILEdBQW5CO0FBQ0gsV0FGRCxNQUVLO0FBQ0RFLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFtQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLE1BQWYsQ0FBL0I7QUFDQUosaUNBQVNTLFVBQVQsQ0FBb0JDLE1BQXBCLEdBQTZCTixNQUFNLENBQUNNLE1BQXBDO0FBQ0FWLGlDQUFTUyxVQUFULENBQW9CRSxJQUFwQixHQUEyQlAsTUFBTSxDQUFDTyxJQUFsQztBQUNBN0IsWUFBQUEsRUFBRSxDQUFDOEIsUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCO0FBQ0g7QUFDSixTQVREOztBQVVBO0FBQ0g7O0FBRURSLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFlWCxVQUEzQjtBQUVIOztBQUNELFlBQU9BLFVBQVA7QUFDSSxXQUFLLE1BQUw7QUFDSSxZQUFHLEtBQUtKLGVBQUwsR0FBcUIsQ0FBeEIsRUFBMEI7QUFDdEI7QUFDSDs7QUFDRCxhQUFLTCxPQUFMLENBQWEsS0FBS0ssZUFBbEIsRUFBbUNNLE1BQW5DLEdBQTRDLEVBQTVDO0FBQ0EsYUFBS04sZUFBTCxJQUF1QixDQUF2QjtBQUNBLGFBQUtELE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVl3QixTQUFaLENBQXNCLENBQXRCLEVBQXdCLEtBQUt4QixNQUFMLENBQVlNLE1BQVosR0FBbUIsQ0FBM0MsQ0FBZDtBQUNBOztBQUNKLFdBQUssT0FBTDtBQUNJLGFBQUksSUFBSW1CLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxDQUFkLEVBQWdCLEVBQUVBLENBQWxCLEVBQW9CO0FBQ2hCLGVBQUs3QixPQUFMLENBQWE2QixDQUFiLEVBQWdCbEIsTUFBaEIsR0FBeUIsRUFBekI7QUFFSDs7QUFDRCxhQUFLUCxNQUFMLEdBQWMsRUFBZDtBQUNBLGFBQUtDLGVBQUwsR0FBdUIsQ0FBQyxDQUF4QjtBQUNBOztBQUNKLFdBQUssT0FBTDtBQUNHLGFBQUt5QixJQUFMLENBQVVDLE9BQVY7QUFDQTs7QUFDSDtBQUNJO0FBckJSO0FBdUJIO0FBNUVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteWdsb2JhbCBmcm9tIFwiLi4vLi4vbXlnb2xiYWwuanNcIlxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGpvaW5pZHM6e1xuICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgIGRlZmF1bHQ6W10sXG4gICAgICB9XG4gICAgXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5qb2luaWQgPSBcIlwiO1xuICAgICAgICB0aGlzLmN1cl9pbnB1dF9jb3VudCA9IC0xXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyAgdXBkYXRlIChkdCkge1xuICAgICAgICBcbiAgICAvLyAgfSxcblxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsY3VzdG9tRGF0YSl7XG4gICAgICAgIGlmKGN1c3RvbURhdGEubGVuZ3RoPT09MSl7XG4gICAgICAgICAgICB0aGlzLmpvaW5pZCArPSBjdXN0b21EYXRhXG4gICAgICAgICAgICB0aGlzLmN1cl9pbnB1dF9jb3VudCArPSAxXG4gICAgICAgICAgICB0aGlzLmpvaW5pZHNbdGhpcy5jdXJfaW5wdXRfY291bnRdLnN0cmluZyA9IGN1c3RvbURhdGFcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJqb2luaWQubGVuZ3RoOlwiK3RoaXMuam9pbmlkLmxlbmd0aClcbiAgICAgICAgICAgIGlmKHRoaXMuam9pbmlkLmxlbmd0aD49Nil7XG4gICAgICAgICAgICAgICAgLy/liKTmlq3liqDlhaXmiL/pl7TpgLvovpFcbiAgICAgICAgICAgICAgICB2YXIgcm9vbV9wYXJhID0ge1xuICAgICAgICAgICAgICAgICAgICByb29taWQ6dGhpcy5qb2luaWQsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG15Z2xvYmFsLnNvY2tldC5yZXF1ZXN0X2ppb24ocm9vbV9wYXJhLGZ1bmN0aW9uKGVycixyZXN1bHQpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIrIGVycilcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImpvaW4gcm9vbSBzdWNlc3NcIitKU09OLnN0cmluZ2lmeShyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgbXlnbG9iYWwucGxheWVyRGF0YS5ib3R0b20gPSByZXN1bHQuYm90dG9tXG4gICAgICAgICAgICAgICAgICAgICAgICBteWdsb2JhbC5wbGF5ZXJEYXRhLnJhdGUgPSByZXN1bHQucmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVNjZW5lXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1c3RvbURhdGE6XCIrIGN1c3RvbURhdGEpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2goY3VzdG9tRGF0YSl7XG4gICAgICAgICAgICBjYXNlIFwiYmFja1wiOlxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY3VyX2lucHV0X2NvdW50PDApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5qb2luaWRzW3RoaXMuY3VyX2lucHV0X2NvdW50XS5zdHJpbmcgPSBcIlwiXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJfaW5wdXRfY291bnQgLT0xXG4gICAgICAgICAgICAgICAgdGhpcy5qb2luaWQgPSB0aGlzLmpvaW5pZC5zdWJzdHJpbmcoMCx0aGlzLmpvaW5pZC5sZW5ndGgtMSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcImNsZWFyXCI6XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7aTw2OysraSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuam9pbmlkc1tpXS5zdHJpbmcgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmpvaW5pZCA9IFwiXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cl9pbnB1dF9jb3VudCA9IC0xXG4gICAgICAgICAgICAgICAgYnJlYWsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcbiAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcbiAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==