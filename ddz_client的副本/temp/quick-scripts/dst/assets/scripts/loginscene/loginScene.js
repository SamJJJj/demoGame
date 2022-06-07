
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/loginscene/loginScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b05a68gSOpBWr8ddvT03Jpj', 'loginScene');
// scripts/loginscene/loginScene.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    wait_node: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    //console.log("qian_state.qian:"+ qian_state.qian)
    if (isopen_sound) {
      cc.audioEngine.play(cc.url.raw("resources/sound/login_bg.ogg"), true);
    }

    _mygolbal["default"].socket.initSocket();
  },
  start: function start() {},
  onButtonCilck: function onButtonCilck(event, customData) {
    switch (customData) {
      case "wx_login":
        console.log("wx_login request"); //this.wait_node.active = true

        _mygolbal["default"].socket.request_wxLogin({
          uniqueID: _mygolbal["default"].playerData.uniqueID,
          accountID: _mygolbal["default"].playerData.accountID,
          nickName: _mygolbal["default"].playerData.nickName,
          avatarUrl: _mygolbal["default"].playerData.avatarUrl
        }, function (err, result) {
          //请求返回
          //先隐藏等待UI
          //this.wait_node.active = false
          if (err != 0) {
            console.log("err:" + err);
            return;
          }

          console.log("login sucess" + JSON.stringify(result));
          _mygolbal["default"].playerData.gobal_count = result.goldcount;
          cc.director.loadScene("hallScene");
        }.bind(this));

        break;

      default:
        break;
    }
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xvZ2luc2NlbmUvbG9naW5TY2VuZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIndhaXRfbm9kZSIsIk5vZGUiLCJvbkxvYWQiLCJpc29wZW5fc291bmQiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJ1cmwiLCJyYXciLCJteWdsb2JhbCIsInNvY2tldCIsImluaXRTb2NrZXQiLCJzdGFydCIsIm9uQnV0dG9uQ2lsY2siLCJldmVudCIsImN1c3RvbURhdGEiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdF93eExvZ2luIiwidW5pcXVlSUQiLCJwbGF5ZXJEYXRhIiwiYWNjb3VudElEIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJlcnIiLCJyZXN1bHQiLCJKU09OIiwic3RyaW5naWZ5IiwiZ29iYWxfY291bnQiLCJnb2xkY291bnQiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1RDLElBQUFBLFNBQVMsRUFBQ0osRUFBRSxDQUFDSztBQURKLEdBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ047QUFDQSxRQUFHQyxZQUFILEVBQWdCO0FBQ1pQLE1BQUFBLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlQyxJQUFmLENBQW9CVCxFQUFFLENBQUNVLEdBQUgsQ0FBT0MsR0FBUCxDQUFXLDhCQUFYLENBQXBCLEVBQStELElBQS9EO0FBQ0Y7O0FBRURDLHlCQUFTQyxNQUFULENBQWdCQyxVQUFoQjtBQUNKLEdBaEJJO0FBa0JMQyxFQUFBQSxLQWxCSyxtQkFrQkksQ0FDUixDQW5CSTtBQXFCTEMsRUFBQUEsYUFyQksseUJBcUJTQyxLQXJCVCxFQXFCZUMsVUFyQmYsRUFxQjBCO0FBQzNCLFlBQU9BLFVBQVA7QUFDSSxXQUFLLFVBQUw7QUFDSUMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFESixDQUdJOztBQUVBUiw2QkFBU0MsTUFBVCxDQUFnQlEsZUFBaEIsQ0FBZ0M7QUFDNUJDLFVBQUFBLFFBQVEsRUFBQ1YscUJBQVNXLFVBQVQsQ0FBb0JELFFBREQ7QUFFNUJFLFVBQUFBLFNBQVMsRUFBQ1oscUJBQVNXLFVBQVQsQ0FBb0JDLFNBRkY7QUFHNUJDLFVBQUFBLFFBQVEsRUFBQ2IscUJBQVNXLFVBQVQsQ0FBb0JFLFFBSEQ7QUFJNUJDLFVBQUFBLFNBQVMsRUFBQ2QscUJBQVNXLFVBQVQsQ0FBb0JHO0FBSkYsU0FBaEMsRUFLRSxVQUFTQyxHQUFULEVBQWFDLE1BQWIsRUFBb0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsY0FBR0QsR0FBRyxJQUFFLENBQVIsRUFBVTtBQUNQUixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFPTyxHQUFuQjtBQUNBO0FBQ0Y7O0FBRURSLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFpQlMsSUFBSSxDQUFDQyxTQUFMLENBQWVGLE1BQWYsQ0FBN0I7QUFDQWhCLCtCQUFTVyxVQUFULENBQW9CUSxXQUFwQixHQUFrQ0gsTUFBTSxDQUFDSSxTQUF6QztBQUNBaEMsVUFBQUEsRUFBRSxDQUFDaUMsUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCO0FBQ0gsU0FaQyxDQVlBQyxJQVpBLENBWUssSUFaTCxDQUxGOztBQWtCQTs7QUFDSjtBQUNJO0FBMUJSO0FBNEJILEdBbERJLENBbURMOztBQW5ESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlnbG9iYWwgZnJvbSBcIi4uL215Z29sYmFsLmpzXCJcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgd2FpdF9ub2RlOmNjLk5vZGUsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInFpYW5fc3RhdGUucWlhbjpcIisgcWlhbl9zdGF0ZS5xaWFuKVxuICAgICAgICBpZihpc29wZW5fc291bmQpe1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kL2xvZ2luX2JnLm9nZ1wiKSx0cnVlKSBcbiAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICBteWdsb2JhbC5zb2NrZXQuaW5pdFNvY2tldCgpXG4gICAgfSxcbiAgICBcbiAgICBzdGFydCAoKSB7XG4gICAgfSxcbiAgICBcbiAgICBvbkJ1dHRvbkNpbGNrKGV2ZW50LGN1c3RvbURhdGEpe1xuICAgICAgICBzd2l0Y2goY3VzdG9tRGF0YSl7XG4gICAgICAgICAgICBjYXNlIFwid3hfbG9naW5cIjpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInd4X2xvZ2luIHJlcXVlc3RcIilcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL3RoaXMud2FpdF9ub2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBteWdsb2JhbC5zb2NrZXQucmVxdWVzdF93eExvZ2luKHtcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlSUQ6bXlnbG9iYWwucGxheWVyRGF0YS51bmlxdWVJRCxcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudElEOm15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElELFxuICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTpteWdsb2JhbC5wbGF5ZXJEYXRhLm5pY2tOYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdmF0YXJVcmw6bXlnbG9iYWwucGxheWVyRGF0YS5hdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgfSxmdW5jdGlvbihlcnIscmVzdWx0KXtcbiAgICAgICAgICAgICAgICAgICAgLy/or7fmsYLov5Tlm55cbiAgICAgICAgICAgICAgICAgICAgLy/lhYjpmpDol4/nrYnlvoVVSVxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMud2FpdF9ub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmKGVyciE9MCl7XG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyOlwiK2VycilcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gc3VjZXNzXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICBteWdsb2JhbC5wbGF5ZXJEYXRhLmdvYmFsX2NvdW50ID0gcmVzdWx0LmdvbGRjb3VudFxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJoYWxsU2NlbmVcIilcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcblxuXG59KTtcbiJdfQ==