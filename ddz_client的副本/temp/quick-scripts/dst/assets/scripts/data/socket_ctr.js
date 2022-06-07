
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/data/socket_ctr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ce03TvsElJsaLzLDlseCff', 'socket_ctr');
// scripts/data/socket_ctr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _event_lister = _interopRequireDefault(require("../util/event_lister.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var socketCtr = function socketCtr() {
  var that = {};
  var respone_map = {};
  var call_index = 0;
  var _socket = null;
  var event = (0, _event_lister["default"])({});

  var _sendmsg = function _sendmsg(cmdtype, req, callindex) {
    _socket.emit("notify", {
      cmd: cmdtype,
      data: req,
      callindex: callindex
    });
  };

  var _request = function _request(cmdtype, req, callback) {
    console.log("send cmd:" + cmdtype + "  " + JSON.stringify(req));
    call_index++;
    respone_map[call_index] = callback;

    _sendmsg(cmdtype, req, call_index);
  };

  that.initSocket = function () {
    var opts = {
      'reconnection': false,
      'force new connection': true,
      'transports': ['websocket', 'polling']
    };
    _socket = window.io.connect(defines.serverUrl, opts);

    _socket.on("connection", function () {
      console.log("connect server success!!");
    });

    _socket.on("notify", function (res) {
      console.log("on notify cmd:" + JSON.stringify(res));

      if (respone_map.hasOwnProperty(res.callBackIndex)) {
        var callback = respone_map[res.callBackIndex];

        if (callback) {
          callback(res.result, res.data);
        }
      } else {
        //if(res.callBackIndex!=0){
        //console.log("not found call index",res.callBackIndex)
        //提交一个监听的事件给监听器
        //  on notify cmd:{"type":"player_joinroom_notify","result":0,"data":
        //  {"accountid":"2586422","nick_name":"tiny110","avatarUrl":
        //  "avatar_3","goldcount":1000,"seatindex":2},"callBackIndex":null}
        //没有找到回到函数，就给事件监听器提交一个事件
        var type = res.type;
        event.fire(type, res.data); // }
      }
    });
  };

  that.request_wxLogin = function (req, callback) {
    _request("wxlogin", req, callback);
  };

  that.request_creatroom = function (req, callback) {
    _request("createroom_req", req, callback);
  };

  that.request_jion = function (req, callback) {
    _request("joinroom_req", req, callback);
  };

  that.request_enter_room = function (req, callback) {
    _request("enterroom_req", req, callback);
  }; //发送不出牌信息


  that.request_buchu_card = function (req, callback) {
    _request("chu_bu_card_req", req, callback);
  };
  /*玩家出牌
    需要判断: 
       出的牌是否符合规则
       和上个出牌玩家比较，是否满足条件
   */


  that.request_chu_card = function (req, callback) {
    _request("chu_card_req", req, callback);
  }; //监听其他玩家进入房间消息


  that.onPlayerJoinRoom = function (callback) {
    event.on("player_joinroom_notify", callback);
  };

  that.onPlayerReady = function (callback) {
    event.on("player_ready_notify", callback);
  };

  that.onGameStart = function (callback) {
    if (callback) {
      event.on("gameStart_notify", callback);
    }
  };

  that.onChangeHouseManage = function (callback) {
    if (callback) {
      event.on("changehousemanage_notify", callback);
    }
  }; //发送ready消息


  that.requestReady = function () {
    _sendmsg("player_ready_notify", {}, null);
  };

  that.requestStart = function (callback) {
    _request("player_start_notify", {}, callback);
  }; //玩家通知服务器抢地主消息


  that.requestRobState = function (state) {
    _sendmsg("player_rob_notify", state, null);
  }; //服务器下发牌通知


  that.onPushCards = function (callback) {
    if (callback) {
      event.on("pushcard_notify", callback);
    }
  }; //监听服务器通知开始抢地主消息


  that.onCanRobState = function (callback) {
    if (callback) {
      event.on("canrob_notify", callback);
    }
  }; //监听服务器:通知谁抢地主操作消息


  that.onRobState = function (callback) {
    if (callback) {
      event.on("canrob_state_notify", callback);
    }
  }; //监听服务器:确定地主消息


  that.onChangeMaster = function (callback) {
    if (callback) {
      event.on("change_master_notify", callback);
    }
  }; //监听服务器:显示底牌消息


  that.onShowBottomCard = function (callback) {
    if (callback) {
      event.on("change_showcard_notify", callback);
    }
  }; //监听服务器:可以出牌消息


  that.onCanChuCard = function (callback) {
    if (callback) {
      event.on("can_chu_card_notify", callback);
    }
  };

  that.onRoomChangeState = function (callback) {
    if (callback) {
      event.on("room_state_notify", callback);
    }
  };

  that.onOtherPlayerChuCard = function (callback) {
    if (callback) {
      event.on("other_chucard_notify", callback);
    }
  };

  return that;
};

var _default = socketCtr;
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGEvc29ja2V0X2N0ci5qcyJdLCJuYW1lcyI6WyJzb2NrZXRDdHIiLCJ0aGF0IiwicmVzcG9uZV9tYXAiLCJjYWxsX2luZGV4IiwiX3NvY2tldCIsImV2ZW50IiwiX3NlbmRtc2ciLCJjbWR0eXBlIiwicmVxIiwiY2FsbGluZGV4IiwiZW1pdCIsImNtZCIsImRhdGEiLCJfcmVxdWVzdCIsImNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbml0U29ja2V0Iiwib3B0cyIsIndpbmRvdyIsImlvIiwiY29ubmVjdCIsImRlZmluZXMiLCJzZXJ2ZXJVcmwiLCJvbiIsInJlcyIsImhhc093blByb3BlcnR5IiwiY2FsbEJhY2tJbmRleCIsInJlc3VsdCIsInR5cGUiLCJmaXJlIiwicmVxdWVzdF93eExvZ2luIiwicmVxdWVzdF9jcmVhdHJvb20iLCJyZXF1ZXN0X2ppb24iLCJyZXF1ZXN0X2VudGVyX3Jvb20iLCJyZXF1ZXN0X2J1Y2h1X2NhcmQiLCJyZXF1ZXN0X2NodV9jYXJkIiwib25QbGF5ZXJKb2luUm9vbSIsIm9uUGxheWVyUmVhZHkiLCJvbkdhbWVTdGFydCIsIm9uQ2hhbmdlSG91c2VNYW5hZ2UiLCJyZXF1ZXN0UmVhZHkiLCJyZXF1ZXN0U3RhcnQiLCJyZXF1ZXN0Um9iU3RhdGUiLCJzdGF0ZSIsIm9uUHVzaENhcmRzIiwib25DYW5Sb2JTdGF0ZSIsIm9uUm9iU3RhdGUiLCJvbkNoYW5nZU1hc3RlciIsIm9uU2hvd0JvdHRvbUNhcmQiLCJvbkNhbkNodUNhcmQiLCJvblJvb21DaGFuZ2VTdGF0ZSIsIm9uT3RoZXJQbGF5ZXJDaHVDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFVO0FBQ3hCLE1BQUlDLElBQUksR0FBRyxFQUFYO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0Es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U0FBT2IsSUFBUDtBQUNILENBN0tEOztlQStLZUQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBldmVudGxpc3RlciBmcm9tIFwiLi4vdXRpbC9ldmVudF9saXN0ZXIuanNcIlxuXG5jb25zdCBzb2NrZXRDdHIgPSBmdW5jdGlvbigpe1xuICAgIHZhciB0aGF0ID0ge31cbiAgICB2YXIgcmVzcG9uZV9tYXAgPSB7fSBcbiAgICB2YXIgY2FsbF9pbmRleCA9IDBcblxuICAgIHZhciBfc29ja2V0ID0gbnVsbFxuICAgIHZhciBldmVudCA9IGV2ZW50bGlzdGVyKHt9KVxuICAgIGNvbnN0IF9zZW5kbXNnID0gZnVuY3Rpb24oY21kdHlwZSxyZXEsY2FsbGluZGV4KXtcbiAgICAgICAgX3NvY2tldC5lbWl0KFwibm90aWZ5XCIse2NtZDpjbWR0eXBlLGRhdGE6cmVxLGNhbGxpbmRleDpjYWxsaW5kZXh9KVxuICAgIH0gXG4gXG4gICAgY29uc3QgX3JlcXVlc3QgPSBmdW5jdGlvbihjbWR0eXBlLHJlcSxjYWxsYmFjayl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VuZCBjbWQ6XCIrY21kdHlwZStcIiAgXCIrIEpTT04uc3RyaW5naWZ5KHJlcSkpXG4gICAgICAgIGNhbGxfaW5kZXgrKyBcbiAgICAgICAgcmVzcG9uZV9tYXBbY2FsbF9pbmRleF0gPSBjYWxsYmFja1xuICAgICAgICBfc2VuZG1zZyhjbWR0eXBlLHJlcSxjYWxsX2luZGV4KVxuICAgIH0gXG4gIFxuICAgICAgICBcbiAgICB0aGF0LmluaXRTb2NrZXQgPSBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgb3B0cyA9IHtcbiAgICAgICAgICAgICdyZWNvbm5lY3Rpb24nOmZhbHNlLFxuICAgICAgICAgICAgJ2ZvcmNlIG5ldyBjb25uZWN0aW9uJzogdHJ1ZSxcbiAgICAgICAgICAgICd0cmFuc3BvcnRzJzpbJ3dlYnNvY2tldCcsICdwb2xsaW5nJ11cbiAgICAgICAgfVxuICAgICAgICBfc29ja2V0ID0gd2luZG93LmlvLmNvbm5lY3QoZGVmaW5lcy5zZXJ2ZXJVcmwsb3B0cyk7XG5cbiAgICAgICAgX3NvY2tldC5vbihcImNvbm5lY3Rpb25cIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb25uZWN0IHNlcnZlciBzdWNjZXNzISFcIilcbiAgICAgICAgICB9KVxuXG4gICAgICAgX3NvY2tldC5vbihcIm5vdGlmeVwiLGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIm9uIG5vdGlmeSBjbWQ6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKVxuICAgICAgICAgaWYocmVzcG9uZV9tYXAuaGFzT3duUHJvcGVydHkocmVzLmNhbGxCYWNrSW5kZXgpKXtcbiAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gcmVzcG9uZV9tYXBbcmVzLmNhbGxCYWNrSW5kZXhdXG4gICAgICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcy5yZXN1bHQscmVzLmRhdGEpXG4gICAgICAgICAgIH1cbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgLy9pZihyZXMuY2FsbEJhY2tJbmRleCE9MCl7XG4gICAgICAgICAgIC8vY29uc29sZS5sb2coXCJub3QgZm91bmQgY2FsbCBpbmRleFwiLHJlcy5jYWxsQmFja0luZGV4KVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIC8v5o+Q5Lqk5LiA5Liq55uR5ZCs55qE5LqL5Lu257uZ55uR5ZCs5ZmoXG4gICAgICAgIC8vICBvbiBub3RpZnkgY21kOntcInR5cGVcIjpcInBsYXllcl9qb2lucm9vbV9ub3RpZnlcIixcInJlc3VsdFwiOjAsXCJkYXRhXCI6XG4gICAgICAgIC8vICB7XCJhY2NvdW50aWRcIjpcIjI1ODY0MjJcIixcIm5pY2tfbmFtZVwiOlwidGlueTExMFwiLFwiYXZhdGFyVXJsXCI6XG4gICAgICAgIC8vICBcImF2YXRhcl8zXCIsXCJnb2xkY291bnRcIjoxMDAwLFwic2VhdGluZGV4XCI6Mn0sXCJjYWxsQmFja0luZGV4XCI6bnVsbH1cbiAgICAgICAgICAgICAgLy/msqHmnInmib7liLDlm57liLDlh73mlbDvvIzlsLHnu5nkuovku7bnm5HlkKzlmajmj5DkuqTkuIDkuKrkuovku7ZcbiAgICAgICAgICAgICAgdmFyIHR5cGUgPSByZXMudHlwZVxuICAgICAgICAgICAgICBldmVudC5maXJlKHR5cGUscmVzLmRhdGEpXG4gICAgICAgICAgLy8gfVxuICAgICAgICAgICBcbiAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgdGhhdC5yZXF1ZXN0X3d4TG9naW4gPSBmdW5jdGlvbihyZXEsY2FsbGJhY2spe1xuICAgICAgICBfcmVxdWVzdChcInd4bG9naW5cIixyZXEsY2FsbGJhY2spXG4gICAgfVxuICAgIFxuICAgIHRoYXQucmVxdWVzdF9jcmVhdHJvb20gPSBmdW5jdGlvbihyZXEsY2FsbGJhY2spe1xuICAgICAgICBfcmVxdWVzdChcImNyZWF0ZXJvb21fcmVxXCIscmVxLGNhbGxiYWNrKVxuICAgIH1cblxuICAgIHRoYXQucmVxdWVzdF9qaW9uID0gZnVuY3Rpb24ocmVxLGNhbGxiYWNrKXtcbiAgICAgICAgX3JlcXVlc3QoXCJqb2lucm9vbV9yZXFcIixyZXEsY2FsbGJhY2spXG4gICAgfVxuXG4gICAgdGhhdC5yZXF1ZXN0X2VudGVyX3Jvb20gPSBmdW5jdGlvbihyZXEsY2FsbGJhY2spe1xuICAgICAgICBfcmVxdWVzdChcImVudGVycm9vbV9yZXFcIixyZXEsY2FsbGJhY2spXG4gICAgfVxuXG4gICAgLy/lj5HpgIHkuI3lh7rniYzkv6Hmga9cbiAgICB0aGF0LnJlcXVlc3RfYnVjaHVfY2FyZCA9ICBmdW5jdGlvbihyZXEsY2FsbGJhY2spe1xuICAgICAgICBfcmVxdWVzdChcImNodV9idV9jYXJkX3JlcVwiLHJlcSxjYWxsYmFjaylcbiAgICB9XG4gICAgLyrnjqnlrrblh7rniYxcbiAgICAgIOmcgOimgeWIpOaWrTogXG4gICAgICAgICDlh7rnmoTniYzmmK/lkKbnrKblkIjop4TliJlcbiAgICAgICAgIOWSjOS4iuS4quWHuueJjOeOqeWutuavlOi+g++8jOaYr+WQpua7oei2s+adoeS7tlxuXG4gICAgKi9cbiAgICB0aGF0LnJlcXVlc3RfY2h1X2NhcmQgPSBmdW5jdGlvbihyZXEsY2FsbGJhY2spe1xuICAgICAgICBfcmVxdWVzdChcImNodV9jYXJkX3JlcVwiLHJlcSxjYWxsYmFjaylcbiAgICB9XG4gICAgLy/nm5HlkKzlhbbku5bnjqnlrrbov5vlhaXmiL/pl7Tmtojmga9cbiAgICB0aGF0Lm9uUGxheWVySm9pblJvb20gPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgICBldmVudC5vbihcInBsYXllcl9qb2lucm9vbV9ub3RpZnlcIixjYWxsYmFjaylcbiAgICB9XG5cbiAgICB0aGF0Lm9uUGxheWVyUmVhZHkgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGV2ZW50Lm9uKFwicGxheWVyX3JlYWR5X25vdGlmeVwiLGNhbGxiYWNrKVxuICAgIH1cblxuICAgIHRoYXQub25HYW1lU3RhcnQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgZXZlbnQub24oXCJnYW1lU3RhcnRfbm90aWZ5XCIsY2FsbGJhY2spXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGF0Lm9uQ2hhbmdlSG91c2VNYW5hZ2UgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwiY2hhbmdlaG91c2VtYW5hZ2Vfbm90aWZ5XCIsY2FsbGJhY2spXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/lj5HpgIFyZWFkeea2iOaBr1xuICAgIHRoYXQucmVxdWVzdFJlYWR5ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgX3NlbmRtc2coXCJwbGF5ZXJfcmVhZHlfbm90aWZ5XCIse30sbnVsbClcbiAgICB9XG5cbiAgICB0aGF0LnJlcXVlc3RTdGFydCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgX3JlcXVlc3QoXCJwbGF5ZXJfc3RhcnRfbm90aWZ5XCIse30sY2FsbGJhY2spXG4gICAgfVxuXG4gICAgLy/njqnlrrbpgJrnn6XmnI3liqHlmajmiqLlnLDkuLvmtojmga9cbiAgICB0aGF0LnJlcXVlc3RSb2JTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKXtcbiAgICAgICAgX3NlbmRtc2coXCJwbGF5ZXJfcm9iX25vdGlmeVwiLHN0YXRlLG51bGwpXG4gICAgfVxuICAgIC8v5pyN5Yqh5Zmo5LiL5Y+R54mM6YCa55+lXG4gICAgdGhhdC5vblB1c2hDYXJkcyA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICAgICAgZXZlbnQub24oXCJwdXNoY2FyZF9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+ebkeWQrOacjeWKoeWZqOmAmuefpeW8gOWni+aKouWcsOS4u+a2iOaBr1xuICAgIHRoYXQub25DYW5Sb2JTdGF0ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICAgICAgZXZlbnQub24oXCJjYW5yb2Jfbm90aWZ5XCIsY2FsbGJhY2spXG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/nm5HlkKzmnI3liqHlmag66YCa55+l6LCB5oqi5Zyw5Li75pON5L2c5raI5oGvXG4gICAgdGhhdC5vblJvYlN0YXRlID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICBpZihjYWxsYmFjayl7XG4gICAgICAgICAgICBldmVudC5vbihcImNhbnJvYl9zdGF0ZV9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+ebkeWQrOacjeWKoeWZqDrnoa7lrprlnLDkuLvmtojmga9cbiAgICB0aGF0Lm9uQ2hhbmdlTWFzdGVyID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICBpZihjYWxsYmFjayl7XG4gICAgICAgICAgICBldmVudC5vbihcImNoYW5nZV9tYXN0ZXJfbm90aWZ5XCIsY2FsbGJhY2spXG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/nm5HlkKzmnI3liqHlmag65pi+56S65bqV54mM5raI5oGvXG4gICAgdGhhdC5vblNob3dCb3R0b21DYXJkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICBpZihjYWxsYmFjayl7XG4gICAgICAgICAgICBldmVudC5vbihcImNoYW5nZV9zaG93Y2FyZF9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+ebkeWQrOacjeWKoeWZqDrlj6/ku6Xlh7rniYzmtojmga9cbiAgICB0aGF0Lm9uQ2FuQ2h1Q2FyZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICAgICAgZXZlbnQub24oXCJjYW5fY2h1X2NhcmRfbm90aWZ5XCIsY2FsbGJhY2spXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGF0Lm9uUm9vbUNoYW5nZVN0YXRlID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICBpZihjYWxsYmFjayl7XG4gICAgICAgICAgICBldmVudC5vbihcInJvb21fc3RhdGVfbm90aWZ5XCIsY2FsbGJhY2spXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGF0Lm9uT3RoZXJQbGF5ZXJDaHVDYXJkID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICBpZihjYWxsYmFjayl7XG4gICAgICAgICAgICBldmVudC5vbihcIm90aGVyX2NodWNhcmRfbm90aWZ5XCIsY2FsbGJhY2spXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoYXRcbn1cblxuZXhwb3J0IGRlZmF1bHQgc29ja2V0Q3RyICJdfQ==