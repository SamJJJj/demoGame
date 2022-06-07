
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameScene/gamebeforeUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34b69bK3SJBFbE0zzOU1X9M', 'gamebeforeUI');
// scripts/gameScene/gamebeforeUI.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    btn_ready: cc.Node,
    btn_gamestart: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.btn_gamestart.active = false;
    this.btn_ready.active = false; //监听本地的发送的消息

    this.node.on("init", function () {
      console.log("game beforeui init");
      console.log("myglobal.playerData.housemanageid" + _mygolbal["default"].playerData.housemanageid);
      console.log("myglobal.playerData.accountID" + _mygolbal["default"].playerData.accountID);

      if (_mygolbal["default"].playerData.housemanageid == _mygolbal["default"].playerData.accountID) {
        //自己就是房主
        this.btn_gamestart.active = true;
        this.btn_ready.active = false;
      } else {
        this.btn_gamestart.active = false;
        this.btn_ready.active = true;
      }
    }.bind(this)); //监听服务器发送来的消息
    // myglobal.socket.onGameStart(function(){
    //     console.log("gamebrforeUI onGameStart revice")
    //     this.node.active = false
    // }.bind(this))

    _mygolbal["default"].socket.onChangeHouseManage(function (data) {
      console.log("gamebrforeUI onChangeHouseManage revice" + JSON.stringify(data));
      _mygolbal["default"].playerData.housemanageid = data;

      if (_mygolbal["default"].playerData.housemanageid == _mygolbal["default"].playerData.accountID) {
        //自己就是房主
        this.btn_gamestart.active = true;
        this.btn_ready.active = false;
      } else {
        this.btn_gamestart.active = false;
        this.btn_ready.active = true;
      }
    }.bind(this));
  },
  start: function start() {},
  // update (dt) {},
  onButtonClick: function onButtonClick(event, customData) {
    switch (customData) {
      case "btn_ready":
        console.log("btn_ready");

        _mygolbal["default"].socket.requestReady();

        break;

      case "btn_start":
        // if(isopen_sound){
        //    cc.audioEngine.play(cc.url.raw("resources/sound/start_a.ogg")) 
        //  }
        console.log("btn_start");

        _mygolbal["default"].socket.requestStart(function (err, data) {
          if (err != 0) {
            console.log("requestStart err" + err);
          } else {
            console.log("requestStart data" + JSON.stringify(data));
          }
        });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVTY2VuZS9nYW1lYmVmb3JlVUkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJidG5fcmVhZHkiLCJOb2RlIiwiYnRuX2dhbWVzdGFydCIsIm9uTG9hZCIsImFjdGl2ZSIsIm5vZGUiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJteWdsb2JhbCIsInBsYXllckRhdGEiLCJob3VzZW1hbmFnZWlkIiwiYWNjb3VudElEIiwiYmluZCIsInNvY2tldCIsIm9uQ2hhbmdlSG91c2VNYW5hZ2UiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXJ0Iiwib25CdXR0b25DbGljayIsImV2ZW50IiwiY3VzdG9tRGF0YSIsInJlcXVlc3RSZWFkeSIsInJlcXVlc3RTdGFydCIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFDSixFQUFFLENBQUNLLElBREw7QUFFUkMsSUFBQUEsYUFBYSxFQUFDTixFQUFFLENBQUNLO0FBRlQsR0FIUDtBQVFMO0FBRUFFLEVBQUFBLE1BVkssb0JBVUs7QUFFTixTQUFLRCxhQUFMLENBQW1CRSxNQUFuQixHQUE0QixLQUE1QjtBQUNBLFNBQUtKLFNBQUwsQ0FBZUksTUFBZixHQUF3QixLQUF4QixDQUhNLENBS047O0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsTUFBYixFQUFvQixZQUFVO0FBQzFCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBb0NDLHFCQUFTQyxVQUFULENBQW9CQyxhQUFwRTtBQUNBSixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBZ0NDLHFCQUFTQyxVQUFULENBQW9CRSxTQUFoRTs7QUFDQSxVQUFHSCxxQkFBU0MsVUFBVCxDQUFvQkMsYUFBcEIsSUFBbUNGLHFCQUFTQyxVQUFULENBQW9CRSxTQUExRCxFQUFvRTtBQUNoRTtBQUNBLGFBQUtWLGFBQUwsQ0FBbUJFLE1BQW5CLEdBQTRCLElBQTVCO0FBQ0EsYUFBS0osU0FBTCxDQUFlSSxNQUFmLEdBQXdCLEtBQXhCO0FBQ0gsT0FKRCxNQUlLO0FBQ0QsYUFBS0YsYUFBTCxDQUFtQkUsTUFBbkIsR0FBNEIsS0FBNUI7QUFDQSxhQUFLSixTQUFMLENBQWVJLE1BQWYsR0FBd0IsSUFBeEI7QUFDSDtBQUNKLEtBWm1CLENBWWxCUyxJQVprQixDQVliLElBWmEsQ0FBcEIsRUFOTSxDQW9CTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBSix5QkFBU0ssTUFBVCxDQUFnQkMsbUJBQWhCLENBQW9DLFVBQVNDLElBQVQsRUFBYztBQUM5Q1QsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNENBQTBDUyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsSUFBZixDQUF0RDtBQUNBUCwyQkFBU0MsVUFBVCxDQUFvQkMsYUFBcEIsR0FBb0NLLElBQXBDOztBQUNBLFVBQUdQLHFCQUFTQyxVQUFULENBQW9CQyxhQUFwQixJQUFtQ0YscUJBQVNDLFVBQVQsQ0FBb0JFLFNBQTFELEVBQW9FO0FBQ2hFO0FBQ0EsYUFBS1YsYUFBTCxDQUFtQkUsTUFBbkIsR0FBNEIsSUFBNUI7QUFDQSxhQUFLSixTQUFMLENBQWVJLE1BQWYsR0FBd0IsS0FBeEI7QUFDSCxPQUpELE1BSUs7QUFDRCxhQUFLRixhQUFMLENBQW1CRSxNQUFuQixHQUE0QixLQUE1QjtBQUNBLGFBQUtKLFNBQUwsQ0FBZUksTUFBZixHQUF3QixJQUF4QjtBQUNIO0FBRUosS0FabUMsQ0FZbENTLElBWmtDLENBWTdCLElBWjZCLENBQXBDO0FBYUgsR0FqREk7QUFtRExNLEVBQUFBLEtBbkRLLG1CQW1ESSxDQUVSLENBckRJO0FBdURMO0FBRUFDLEVBQUFBLGFBekRLLHlCQXlEU0MsS0F6RFQsRUF5RGVDLFVBekRmLEVBeUQwQjtBQUMzQixZQUFPQSxVQUFQO0FBQ0ksV0FBSyxXQUFMO0FBQ0lmLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7O0FBQ0FDLDZCQUFTSyxNQUFULENBQWdCUyxZQUFoQjs7QUFDQTs7QUFDSixXQUFLLFdBQUw7QUFDSTtBQUNBO0FBQ0E7QUFDQ2hCLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7O0FBQ0FDLDZCQUFTSyxNQUFULENBQWdCVSxZQUFoQixDQUE2QixVQUFTQyxHQUFULEVBQWFULElBQWIsRUFBa0I7QUFDNUMsY0FBR1MsR0FBRyxJQUFFLENBQVIsRUFBVTtBQUNObEIsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQW1CaUIsR0FBL0I7QUFDSCxXQUZELE1BRUs7QUFDRGxCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFxQlMsSUFBSSxDQUFDQyxTQUFMLENBQWVGLElBQWYsQ0FBakM7QUFFSDtBQUNILFNBUEQ7O0FBUUE7O0FBQ0w7QUFDSTtBQXBCUjtBQXNCSDtBQWhGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlnbG9iYWwgZnJvbSBcIi4uL215Z29sYmFsLmpzXCJcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYnRuX3JlYWR5OmNjLk5vZGUsXG4gICAgICAgIGJ0bl9nYW1lc3RhcnQ6Y2MuTm9kZSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuXG4gICAgICAgIHRoaXMuYnRuX2dhbWVzdGFydC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLmJ0bl9yZWFkeS5hY3RpdmUgPSBmYWxzZVxuXG4gICAgICAgIC8v55uR5ZCs5pys5Zyw55qE5Y+R6YCB55qE5raI5oGvXG4gICAgICAgIHRoaXMubm9kZS5vbihcImluaXRcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnYW1lIGJlZm9yZXVpIGluaXRcIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibXlnbG9iYWwucGxheWVyRGF0YS5ob3VzZW1hbmFnZWlkXCIrbXlnbG9iYWwucGxheWVyRGF0YS5ob3VzZW1hbmFnZWlkKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJteWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRFwiK215Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKVxuICAgICAgICAgICAgaWYobXlnbG9iYWwucGxheWVyRGF0YS5ob3VzZW1hbmFnZWlkPT1teWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRCl7XG4gICAgICAgICAgICAgICAgLy/oh6rlt7HlsLHmmK/miL/kuLtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9nYW1lc3RhcnQuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX3JlYWR5LmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9nYW1lc3RhcnQuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9yZWFkeS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgICAvL+ebkeWQrOacjeWKoeWZqOWPkemAgeadpeeahOa2iOaBr1xuICAgICAgICAvLyBteWdsb2JhbC5zb2NrZXQub25HYW1lU3RhcnQoZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZ2FtZWJyZm9yZVVJIG9uR2FtZVN0YXJ0IHJldmljZVwiKVxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIC8vIH0uYmluZCh0aGlzKSlcblxuICAgICAgICBteWdsb2JhbC5zb2NrZXQub25DaGFuZ2VIb3VzZU1hbmFnZShmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZWJyZm9yZVVJIG9uQ2hhbmdlSG91c2VNYW5hZ2UgcmV2aWNlXCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgICBteWdsb2JhbC5wbGF5ZXJEYXRhLmhvdXNlbWFuYWdlaWQgPSBkYXRhXG4gICAgICAgICAgICBpZihteWdsb2JhbC5wbGF5ZXJEYXRhLmhvdXNlbWFuYWdlaWQ9PW15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKXtcbiAgICAgICAgICAgICAgICAvL+iHquW3seWwseaYr+aIv+S4u1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuX2dhbWVzdGFydC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fcmVhZHkuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuX2dhbWVzdGFydC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX3JlYWR5LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbiAgICBcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LGN1c3RvbURhdGEpe1xuICAgICAgICBzd2l0Y2goY3VzdG9tRGF0YSl7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX3JlYWR5XCI6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJidG5fcmVhZHlcIilcbiAgICAgICAgICAgICAgICBteWdsb2JhbC5zb2NrZXQucmVxdWVzdFJlYWR5KClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcImJ0bl9zdGFydFwiOlxuICAgICAgICAgICAgICAgIC8vIGlmKGlzb3Blbl9zb3VuZCl7XG4gICAgICAgICAgICAgICAgLy8gICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kL3N0YXJ0X2Eub2dnXCIpKSBcbiAgICAgICAgICAgICAgICAvLyAgfVxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJ0bl9zdGFydFwiKVxuICAgICAgICAgICAgICAgICBteWdsb2JhbC5zb2NrZXQucmVxdWVzdFN0YXJ0KGZ1bmN0aW9uKGVycixkYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyIT0wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVxdWVzdFN0YXJ0IGVyclwiK2VycilcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcXVlc3RTdGFydCBkYXRhXCIrIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgYnJlYWsgICAgXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==