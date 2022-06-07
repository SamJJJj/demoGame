
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
        // if(localStorage.getItem("accountID")!=null){
        // 	myglobal.playerData.accountID=localStorage.getItem("accountID");
        // }
        // localStorage.setItem("accountID",myglobal.playerData.accountID);
        //             myglobal.socket.request_wxLogin({
        //                 uniqueID:myglobal.playerData.uniqueID,
        //                 accountID:myglobal.playerData.accountID,
        //                 nickName:myglobal.playerData.nickName,
        //                 avatarUrl:myglobal.playerData.avatarUrl,
        //             },function(err,result){
        //                 //请求返回
        //                 //先隐藏等待UI
        //                 //this.wait_node.active = false
        //                 if(err!=0){
        //                    console.log("err:"+err)
        //                    return     
        //                 }
        //                 console.log("login sucess" + JSON.stringify(result))
        //                 myglobal.playerData.gobal_count = result.goldcount
        //                 cc.director.loadScene("hallScene")
        //             }.bind(this))

        _mygolbal["default"].api.login(function (data) {
          cc.director.loadScene("hallScene");
        }.bind(this));

        break;

      case "guest_btn":
        cc.director.loadScene("hallScene");
        break;

      default:
        // cc.director.loadScene("hallScene")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xvZ2luc2NlbmUvbG9naW5TY2VuZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIndhaXRfbm9kZSIsIk5vZGUiLCJvbkxvYWQiLCJpc29wZW5fc291bmQiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJ1cmwiLCJyYXciLCJteWdsb2JhbCIsInNvY2tldCIsImluaXRTb2NrZXQiLCJzdGFydCIsIm9uQnV0dG9uQ2lsY2siLCJldmVudCIsImN1c3RvbURhdGEiLCJjb25zb2xlIiwibG9nIiwiYXBpIiwibG9naW4iLCJkYXRhIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNUQyxJQUFBQSxTQUFTLEVBQUNKLEVBQUUsQ0FBQ0s7QUFESixHQUhQO0FBT0w7QUFFQUMsRUFBQUEsTUFUSyxvQkFTSztBQUNOO0FBQ0EsUUFBR0MsWUFBSCxFQUFnQjtBQUNaUCxNQUFBQSxFQUFFLENBQUNRLFdBQUgsQ0FBZUMsSUFBZixDQUFvQlQsRUFBRSxDQUFDVSxHQUFILENBQU9DLEdBQVAsQ0FBVyw4QkFBWCxDQUFwQixFQUErRCxJQUEvRDtBQUNGOztBQUVEQyx5QkFBU0MsTUFBVCxDQUFnQkMsVUFBaEI7QUFDSixHQWhCSTtBQWtCTEMsRUFBQUEsS0FsQkssbUJBa0JJLENBQ1IsQ0FuQkk7QUF1QkxDLEVBQUFBLGFBdkJLLHlCQXVCU0MsS0F2QlQsRUF1QmVDLFVBdkJmLEVBdUIwQjtBQUMzQixZQUFPQSxVQUFQO0FBQ0ksV0FBSyxVQUFMO0FBQ0lDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBREosQ0FHSTtBQUNBO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQVIsNkJBQVNTLEdBQVQsQ0FBYUMsS0FBYixDQUFtQixVQUFTQyxJQUFULEVBQWM7QUFDaEN2QixVQUFBQSxFQUFFLENBQUN3QixRQUFILENBQVlDLFNBQVosQ0FBc0IsV0FBdEI7QUFDQSxTQUZrQixDQUVqQkMsSUFGaUIsQ0FFWixJQUZZLENBQW5COztBQUdZOztBQUNaLFdBQUssV0FBTDtBQUNBMUIsUUFBQUEsRUFBRSxDQUFDd0IsUUFBSCxDQUFZQyxTQUFaLENBQXNCLFdBQXRCO0FBRUE7O0FBQ1E7QUFDSDtBQUVPO0FBdENSO0FBd0NILEdBaEVJLENBaUVMOztBQWpFSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlnbG9iYWwgZnJvbSBcIi4uL215Z29sYmFsLmpzXCJcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgd2FpdF9ub2RlOmNjLk5vZGUsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInFpYW5fc3RhdGUucWlhbjpcIisgcWlhbl9zdGF0ZS5xaWFuKVxuICAgICAgICBpZihpc29wZW5fc291bmQpe1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kL2xvZ2luX2JnLm9nZ1wiKSx0cnVlKSBcbiAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICBteWdsb2JhbC5zb2NrZXQuaW5pdFNvY2tldCgpXG4gICAgfSxcbiAgICBcbiAgICBzdGFydCAoKSB7XG4gICAgfSxcblx0XG5cdFxuICAgIFxuICAgIG9uQnV0dG9uQ2lsY2soZXZlbnQsY3VzdG9tRGF0YSl7XG4gICAgICAgIHN3aXRjaChjdXN0b21EYXRhKXtcbiAgICAgICAgICAgIGNhc2UgXCJ3eF9sb2dpblwiOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3hfbG9naW4gcmVxdWVzdFwiKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vdGhpcy53YWl0X25vZGUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIC8vIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjb3VudElEXCIpIT1udWxsKXtcblx0XHRcdFx0Ly8gXHRteWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRD1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY291bnRJRFwiKTtcblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHQvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY291bnRJRFwiLG15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKTtcbiAgICAvLyAgICAgICAgICAgICBteWdsb2JhbC5zb2NrZXQucmVxdWVzdF93eExvZ2luKHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdW5pcXVlSUQ6bXlnbG9iYWwucGxheWVyRGF0YS51bmlxdWVJRCxcbiAgICAvLyAgICAgICAgICAgICAgICAgYWNjb3VudElEOm15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElELFxuICAgIC8vICAgICAgICAgICAgICAgICBuaWNrTmFtZTpteWdsb2JhbC5wbGF5ZXJEYXRhLm5pY2tOYW1lLFxuICAgIC8vICAgICAgICAgICAgICAgICBhdmF0YXJVcmw6bXlnbG9iYWwucGxheWVyRGF0YS5hdmF0YXJVcmwsXG4gICAgLy8gICAgICAgICAgICAgfSxmdW5jdGlvbihlcnIscmVzdWx0KXtcbiAgICAvLyAgICAgICAgICAgICAgICAgLy/or7fmsYLov5Tlm55cbiAgICAvLyAgICAgICAgICAgICAgICAgLy/lhYjpmpDol4/nrYnlvoVVSVxuICAgIC8vICAgICAgICAgICAgICAgICAvL3RoaXMud2FpdF9ub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmKGVyciE9MCl7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyOlwiK2VycilcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgcmV0dXJuICAgICBcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gc3VjZXNzXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKVxuICAgIC8vICAgICAgICAgICAgICAgICBteWdsb2JhbC5wbGF5ZXJEYXRhLmdvYmFsX2NvdW50ID0gcmVzdWx0LmdvbGRjb3VudFxuICAgIC8vICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJoYWxsU2NlbmVcIilcbiAgICAvLyAgICAgICAgICAgICB9LmJpbmQodGhpcykpXG5cdFx0XHRcdG15Z2xvYmFsLmFwaS5sb2dpbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHRjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJoYWxsU2NlbmVcIilcblx0XHRcdFx0fS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBicmVha1xuXHRcdFx0XHRjYXNlIFwiZ3Vlc3RfYnRuXCI6XG5cdFx0XHRcdGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImhhbGxTY2VuZVwiKVxuXHRcdFx0XHRcblx0XHRcdFx0YnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuXHRcdFx0ICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaGFsbFNjZW5lXCIpXG5cdFx0XHRcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxuXG5cbn0pO1xuIl19