
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_reversed_rotateBy');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/scripts/data/player');
require('./assets/scripts/data/socket_ctr');
require('./assets/scripts/gameScene/gameScene');
require('./assets/scripts/gameScene/gamebeforeUI');
require('./assets/scripts/gameScene/gameingUI');
require('./assets/scripts/gameScene/prefabs/card');
require('./assets/scripts/gameScene/prefabs/player_node');
require('./assets/scripts/hallscene/hallScene');
require('./assets/scripts/hallscene/prefabs_script/creatRoom');
require('./assets/scripts/hallscene/prefabs_script/joinRoom');
require('./assets/scripts/loginscene/loginScene');
require('./assets/scripts/mygolbal');
require('./assets/scripts/util/api');
require('./assets/scripts/util/event_lister');
require('./assets/scripts/util/waitnode');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/util/api.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98703S7275J1qUi6zlgq+O6', 'api');
// scripts/util/api.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mygolbal = _interopRequireDefault(require("../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = function api() {
  var that = {};

  that.login = function (callback) {
    if (localStorage.getItem("accountID") != null) {
      _mygolbal["default"].playerData.accountID = localStorage.getItem("accountID");
    }

    localStorage.setItem("accountID", _mygolbal["default"].playerData.accountID);

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
      _mygolbal["default"].playerData.gobal_count = result.gold_count; //  myglobal.playerData.uniqueID=result.unique_id
      //  myglobal.playerData.accountID=result.account_id;
      //  myglobal.playerData.nickName=result.nick_name;
      //  myglobal.playerData.avatarUrl=result.avatar_url;
      //  myglobal.playerData.fkcount=result.fkcount;

      if (callback) {
        callback(result);
      }
    }.bind(this));
  };

  return that;
};

var _default = api;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWwvYXBpLmpzIl0sIm5hbWVzIjpbImFwaSIsInRoYXQiLCJsb2dpbiIsImNhbGxiYWNrIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm15Z2xvYmFsIiwicGxheWVyRGF0YSIsImFjY291bnRJRCIsInNldEl0ZW0iLCJzb2NrZXQiLCJyZXF1ZXN0X3d4TG9naW4iLCJ1bmlxdWVJRCIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiZXJyIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJnb2JhbF9jb3VudCIsImdvbGRfY291bnQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFNQSxHQUFHLEdBQUMsU0FBSkEsR0FBSSxHQUFVO0FBQ25CLE1BQUlDLElBQUksR0FBQyxFQUFUOztBQUNHQSxFQUFBQSxJQUFJLENBQUNDLEtBQUwsR0FBVyxVQUFTQyxRQUFULEVBQWtCO0FBQy9CLFFBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixLQUFtQyxJQUF0QyxFQUEyQztBQUMxQ0MsMkJBQVNDLFVBQVQsQ0FBb0JDLFNBQXBCLEdBQThCSixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBOUI7QUFDQTs7QUFDREQsSUFBQUEsWUFBWSxDQUFDSyxPQUFiLENBQXFCLFdBQXJCLEVBQWlDSCxxQkFBU0MsVUFBVCxDQUFvQkMsU0FBckQ7O0FBQ0FGLHlCQUFTSSxNQUFULENBQWdCQyxlQUFoQixDQUFnQztBQUM1QkMsTUFBQUEsUUFBUSxFQUFDTixxQkFBU0MsVUFBVCxDQUFvQkssUUFERDtBQUU1QkosTUFBQUEsU0FBUyxFQUFDRixxQkFBU0MsVUFBVCxDQUFvQkMsU0FGRjtBQUc1QkssTUFBQUEsUUFBUSxFQUFDUCxxQkFBU0MsVUFBVCxDQUFvQk0sUUFIRDtBQUk1QkMsTUFBQUEsU0FBUyxFQUFDUixxQkFBU0MsVUFBVCxDQUFvQk87QUFKRixLQUFoQyxFQUtFLFVBQVNDLEdBQVQsRUFBYUMsTUFBYixFQUFvQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxVQUFHRCxHQUFHLElBQUUsQ0FBUixFQUFVO0FBQ1BFLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQU9ILEdBQW5CO0FBQ0E7QUFDRjs7QUFFREUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQWlCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBZixDQUE3QjtBQUNBViwyQkFBU0MsVUFBVCxDQUFvQmMsV0FBcEIsR0FBa0NMLE1BQU0sQ0FBQ00sVUFBekMsQ0FWa0IsQ0FXckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRyxVQUFHbkIsUUFBSCxFQUFZO0FBQ2RBLFFBQUFBLFFBQVEsQ0FBQ2EsTUFBRCxDQUFSO0FBQ0E7QUFDRCxLQW5CQyxDQW1CQU8sSUFuQkEsQ0FtQkssSUFuQkwsQ0FMRjtBQXlCQSxHQTlCRTs7QUErQkgsU0FBT3RCLElBQVA7QUFDQSxDQWxDRDs7ZUFvQ2VEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlnbG9iYWwgZnJvbSBcIi4uL215Z29sYmFsLmpzXCJcblxuY29uc3QgYXBpPWZ1bmN0aW9uKCl7XG5cdHZhciB0aGF0PXt9XG4gICAgdGhhdC5sb2dpbj1mdW5jdGlvbihjYWxsYmFjayl7XG5cdFx0aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2NvdW50SURcIikhPW51bGwpe1xuXHRcdFx0bXlnbG9iYWwucGxheWVyRGF0YS5hY2NvdW50SUQ9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2NvdW50SURcIik7XG5cdFx0fVxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjb3VudElEXCIsbXlnbG9iYWwucGxheWVyRGF0YS5hY2NvdW50SUQpO1xuXHRcdG15Z2xvYmFsLnNvY2tldC5yZXF1ZXN0X3d4TG9naW4oe1xuXHRcdCAgICB1bmlxdWVJRDpteWdsb2JhbC5wbGF5ZXJEYXRhLnVuaXF1ZUlELFxuXHRcdCAgICBhY2NvdW50SUQ6bXlnbG9iYWwucGxheWVyRGF0YS5hY2NvdW50SUQsXG5cdFx0ICAgIG5pY2tOYW1lOm15Z2xvYmFsLnBsYXllckRhdGEubmlja05hbWUsXG5cdFx0ICAgIGF2YXRhclVybDpteWdsb2JhbC5wbGF5ZXJEYXRhLmF2YXRhclVybCxcblx0XHR9LGZ1bmN0aW9uKGVycixyZXN1bHQpe1xuXHRcdCAgICAvL+ivt+axgui/lOWbnlxuXHRcdCAgICAvL+WFiOmakOiXj+etieW+hVVJXG5cdFx0ICAgIC8vdGhpcy53YWl0X25vZGUuYWN0aXZlID0gZmFsc2Vcblx0XHQgICAgaWYoZXJyIT0wKXtcblx0XHQgICAgICAgY29uc29sZS5sb2coXCJlcnI6XCIrZXJyKVxuXHRcdCAgICAgICByZXR1cm4gICAgIFxuXHRcdCAgICB9XG5cdFx0XG5cdFx0ICAgIGNvbnNvbGUubG9nKFwibG9naW4gc3VjZXNzXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKVxuXHRcdCAgICBteWdsb2JhbC5wbGF5ZXJEYXRhLmdvYmFsX2NvdW50ID0gcmVzdWx0LmdvbGRfY291bnRcblx0XHRcdC8vICBteWdsb2JhbC5wbGF5ZXJEYXRhLnVuaXF1ZUlEPXJlc3VsdC51bmlxdWVfaWRcblx0XHRcdC8vICBteWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRD1yZXN1bHQuYWNjb3VudF9pZDtcblx0XHRcdC8vICBteWdsb2JhbC5wbGF5ZXJEYXRhLm5pY2tOYW1lPXJlc3VsdC5uaWNrX25hbWU7XG5cdFx0XHQvLyAgbXlnbG9iYWwucGxheWVyRGF0YS5hdmF0YXJVcmw9cmVzdWx0LmF2YXRhcl91cmw7XG5cdFx0XHQvLyAgbXlnbG9iYWwucGxheWVyRGF0YS5ma2NvdW50PXJlc3VsdC5ma2NvdW50O1xuXHRcdCAgICBpZihjYWxsYmFjayl7XG5cdFx0XHRcdGNhbGxiYWNrKHJlc3VsdCk7XG5cdFx0XHR9XG5cdFx0fS5iaW5kKHRoaXMpKVxuXHR9XG5cdHJldHVybiB0aGF0XG59XG5cdFxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuXHRcblx0Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameScene/gameScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf22aez0/xDaaC1kRqxn/pw', 'gameScene');
// scripts/gameScene/gameScene.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    di_label: cc.Label,
    beishu_label: cc.Label,
    roomid_label: cc.Label,
    player_node_prefabs: cc.Prefab,
    //绑定玩家座位,下面有3个子节点
    players_seat_pos: cc.Node
  },
  //本局结束，做状态清除
  gameEnd: function gameEnd() {},
  onLoad: function onLoad() {
    this.playerNodeList = [];
    this.di_label.string = "底:" + _mygolbal["default"].playerData.bottom;
    this.beishu_label.string = "倍数:" + _mygolbal["default"].playerData.rate;
    this.roomstate = RoomState.ROOM_INVALID; //监听，给其他玩家发牌(内部事件)

    this.node.on("pushcard_other_event", function () {
      console.log("gamescene pushcard_other_event");

      for (var i = 0; i < this.playerNodeList.length; i++) {
        var node = this.playerNodeList[i];

        if (node) {
          //给playernode节点发送事件
          node.emit("push_card_event");
        }
      }
    }.bind(this)); //监听房间状态改变事件

    _mygolbal["default"].socket.onRoomChangeState(function (data) {
      //回调的函数参数是进入房间用户消息
      console.log("onRoomChangeState:" + data);
      this.roomstate = data;
    }.bind(this)); //


    this.node.on("canrob_event", function (event) {
      console.log("gamescene canrob_event:" + event); //通知给playernode子节点

      for (var i = 0; i < this.playerNodeList.length; i++) {
        var node = this.playerNodeList[i];

        if (node) {
          //给playernode节点发送事件
          node.emit("playernode_canrob_event", event);
        }
      }
    }.bind(this));
    this.node.on("choose_card_event", function (event) {
      console.log("--------choose_card_event-----------");
      var gameui_node = this.node.getChildByName("gameingUI");

      if (gameui_node == null) {
        console.log("get childer name gameingUI");
        return;
      }

      gameui_node.emit("choose_card_event", event);
    }.bind(this));
    this.node.on("unchoose_card_event", function (event) {
      console.log("--------unchoose_card_event-----------");
      var gameui_node = this.node.getChildByName("gameingUI");

      if (gameui_node == null) {
        console.log("get childer name gameingUI");
        return;
      }

      gameui_node.emit("unchoose_card_event", event);
    }.bind(this)); //监听给玩家添加三张底牌
    // this.node.on("add_three_card",function(event){
    //     console.log("add_three_card:"+event)
    //     for(var i=0;i<this.playerNodeList.length;i++){
    //         var node = this.playerNodeList[i]
    //         if(node){
    //             //给playernode节点发送事件
    //             node.emit("playernode_add_three_card",event)
    //         }
    //     }
    // }.bind(this))

    _mygolbal["default"].socket.request_enter_room({}, function (err, result) {
      console.log("enter_room_resp" + JSON.stringify(result));

      if (err != 0) {
        console.log("enter_room_resp err:" + err);
      } else {
        //enter_room成功
        //notify ={"seatid":1,"playerdata":[{"accountid":"2117836","nick_name":"tiny543","avatarUrl":"http://xxx","goldcount":1000}]}
        var seatid = result.seatindex; //自己在房间里的seatid

        this.playerdata_list_pos = []; //3个用户创建一个空用户列表

        this.setPlayerSeatPos(seatid);
        var playerdata_list = result.playerdata;
        var roomid = result.roomid;
        this.roomid_label.string = "房间号:" + roomid;
        _mygolbal["default"].playerData.housemanageid = result.housemanageid;

        for (var i = 0; i < playerdata_list.length; i++) {
          //consol.log("this----"+this)
          this.addPlayerNode(playerdata_list[i]);
        }

        if (isopen_sound) {
          cc.audioEngine.stopAll();
          cc.audioEngine.play(cc.url.raw("resources/sound/bg.mp3"), true);
        }
      }

      var gamebefore_node = this.node.getChildByName("gamebeforeUI");
      gamebefore_node.emit("init");
    }.bind(this)); //在进入房间后，注册其他玩家进入房间的事件


    _mygolbal["default"].socket.onPlayerJoinRoom(function (join_playerdata) {
      //回调的函数参数是进入房间用户消息
      console.log("onPlayerJoinRoom:" + JSON.stringify(join_playerdata));
      this.addPlayerNode(join_playerdata);
    }.bind(this)); //回调参数是发送准备消息的accountid


    _mygolbal["default"].socket.onPlayerReady(function (data) {
      console.log("-------onPlayerReady:" + data);

      for (var i = 0; i < this.playerNodeList.length; i++) {
        var node = this.playerNodeList[i];

        if (node) {
          node.emit("player_ready_notify", data);
        }
      }
    }.bind(this));

    _mygolbal["default"].socket.onGameStart(function () {
      for (var i = 0; i < this.playerNodeList.length; i++) {
        var node = this.playerNodeList[i];

        if (node) {
          node.emit("gamestart_event");
        }
      } //隐藏gamebeforeUI节点


      var gamebeforeUI = this.node.getChildByName("gamebeforeUI");

      if (gamebeforeUI) {
        gamebeforeUI.active = false;
      }
    }.bind(this)); //监听服务器玩家抢地主消息


    _mygolbal["default"].socket.onRobState(function (event) {
      console.log("-----onRobState" + JSON.stringify(event)); //onRobState{"accountid":"2162866","state":1}

      for (var i = 0; i < this.playerNodeList.length; i++) {
        var node = this.playerNodeList[i];

        if (node) {
          //给playernode节点发送事件
          node.emit("playernode_rob_state_event", event);
        }
      }
    }.bind(this)); //注册监听服务器确定地主消息


    _mygolbal["default"].socket.onChangeMaster(function (event) {
      console.log("onChangeMaster" + event); //保存一下地主id

      _mygolbal["default"].playerData.master_accountid = event;

      for (var i = 0; i < this.playerNodeList.length; i++) {
        var node = this.playerNodeList[i];

        if (node) {
          //给playernode节点发送事件
          node.emit("playernode_changemaster_event", event);
        }
      }
    }.bind(this)); //注册监听服务器显示底牌消息


    _mygolbal["default"].socket.onShowBottomCard(function (event) {
      console.log("onShowBottomCard---------" + event);
      var gameui_node = this.node.getChildByName("gameingUI");

      if (gameui_node == null) {
        console.log("get childer name gameingUI");
        return;
      }

      gameui_node.emit("show_bottom_card_event", event);
    }.bind(this));
  },
  //seat_index自己在房间的位置id
  setPlayerSeatPos: function setPlayerSeatPos(seat_index) {
    if (seat_index < 1 || seat_index > 3) {
      console.log("seat_index error" + seat_index);
      return;
    }

    console.log("setPlayerSeatPos seat_index:" + seat_index); //界面位置转化成逻辑位置

    switch (seat_index) {
      case 1:
        this.playerdata_list_pos[1] = 0;
        this.playerdata_list_pos[2] = 1;
        this.playerdata_list_pos[3] = 2;
        break;

      case 2:
        this.playerdata_list_pos[2] = 0;
        this.playerdata_list_pos[3] = 1;
        this.playerdata_list_pos[1] = 2;
        break;

      case 3:
        this.playerdata_list_pos[3] = 0;
        this.playerdata_list_pos[1] = 1;
        this.playerdata_list_pos[2] = 2;
        break;

      default:
        break;
    }
  },
  addPlayerNode: function addPlayerNode(player_data) {
    var playernode_inst = cc.instantiate(this.player_node_prefabs);
    playernode_inst.parent = this.node; //创建的节点存储在gamescene的列表中

    this.playerNodeList.push(playernode_inst); //玩家在room里的位置索引(逻辑位置)

    var index = this.playerdata_list_pos[player_data.seatindex];
    console.log("index " + player_data.seatindex + " " + index);
    playernode_inst.position = this.players_seat_pos.children[index].position;
    playernode_inst.getComponent("player_node").init_data(player_data, index);
  },
  start: function start() {},

  /*
   //通过accountid获取用户出牌放在gamescend的位置 
   做法：先放3个节点在gameacene的场景中cardsoutzone(012)
         
  */
  getUserOutCardPosByAccount: function getUserOutCardPosByAccount(accountid) {
    console.log("getUserOutCardPosByAccount accountid:" + accountid);

    for (var i = 0; i < this.playerNodeList.length; i++) {
      var node = this.playerNodeList[i];

      if (node) {
        //获取节点绑定的组件
        var node_script = node.getComponent("player_node"); //如果accountid和player_node节点绑定的accountid相同
        //接获取player_node的子节点

        if (node_script.accountid === accountid) {
          var seat_node = this.players_seat_pos.children[node_script.seat_index];
          var index_name = "cardsoutzone" + node_script.seat_index; //console.log("getUserOutCardPosByAccount index_name:"+index_name)

          var out_card_node = seat_node.getChildByName(index_name); //console.log("OutZone:"+ out_card_node.name)

          return out_card_node;
        }
      }
    }

    return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVTY2VuZS9nYW1lU2NlbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkaV9sYWJlbCIsIkxhYmVsIiwiYmVpc2h1X2xhYmVsIiwicm9vbWlkX2xhYmVsIiwicGxheWVyX25vZGVfcHJlZmFicyIsIlByZWZhYiIsInBsYXllcnNfc2VhdF9wb3MiLCJOb2RlIiwiZ2FtZUVuZCIsIm9uTG9hZCIsInBsYXllck5vZGVMaXN0Iiwic3RyaW5nIiwibXlnbG9iYWwiLCJwbGF5ZXJEYXRhIiwiYm90dG9tIiwicmF0ZSIsInJvb21zdGF0ZSIsIlJvb21TdGF0ZSIsIlJPT01fSU5WQUxJRCIsIm5vZGUiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwiZW1pdCIsImJpbmQiLCJzb2NrZXQiLCJvblJvb21DaGFuZ2VTdGF0ZSIsImRhdGEiLCJldmVudCIsImdhbWV1aV9ub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJyZXF1ZXN0X2VudGVyX3Jvb20iLCJlcnIiLCJyZXN1bHQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VhdGlkIiwic2VhdGluZGV4IiwicGxheWVyZGF0YV9saXN0X3BvcyIsInNldFBsYXllclNlYXRQb3MiLCJwbGF5ZXJkYXRhX2xpc3QiLCJwbGF5ZXJkYXRhIiwicm9vbWlkIiwiaG91c2VtYW5hZ2VpZCIsImFkZFBsYXllck5vZGUiLCJpc29wZW5fc291bmQiLCJhdWRpb0VuZ2luZSIsInN0b3BBbGwiLCJwbGF5IiwidXJsIiwicmF3IiwiZ2FtZWJlZm9yZV9ub2RlIiwib25QbGF5ZXJKb2luUm9vbSIsImpvaW5fcGxheWVyZGF0YSIsIm9uUGxheWVyUmVhZHkiLCJvbkdhbWVTdGFydCIsImdhbWViZWZvcmVVSSIsImFjdGl2ZSIsIm9uUm9iU3RhdGUiLCJvbkNoYW5nZU1hc3RlciIsIm1hc3Rlcl9hY2NvdW50aWQiLCJvblNob3dCb3R0b21DYXJkIiwic2VhdF9pbmRleCIsInBsYXllcl9kYXRhIiwicGxheWVybm9kZV9pbnN0IiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJwdXNoIiwiaW5kZXgiLCJwb3NpdGlvbiIsImNoaWxkcmVuIiwiZ2V0Q29tcG9uZW50IiwiaW5pdF9kYXRhIiwic3RhcnQiLCJnZXRVc2VyT3V0Q2FyZFBvc0J5QWNjb3VudCIsImFjY291bnRpZCIsIm5vZGVfc2NyaXB0Iiwic2VhdF9ub2RlIiwiaW5kZXhfbmFtZSIsIm91dF9jYXJkX25vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBQ0osRUFBRSxDQUFDSyxLQURKO0FBRVJDLElBQUFBLFlBQVksRUFBQ04sRUFBRSxDQUFDSyxLQUZSO0FBR1JFLElBQUFBLFlBQVksRUFBQ1AsRUFBRSxDQUFDSyxLQUhSO0FBSVJHLElBQUFBLG1CQUFtQixFQUFDUixFQUFFLENBQUNTLE1BSmY7QUFLUjtBQUNBQyxJQUFBQSxnQkFBZ0IsRUFBQ1YsRUFBRSxDQUFDVztBQU5aLEdBSFA7QUFZTDtBQUNBQyxFQUFBQSxPQWJLLHFCQWFJLENBRVIsQ0FmSTtBQWdCTEMsRUFBQUEsTUFoQkssb0JBZ0JLO0FBQ04sU0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNBLFNBQUtWLFFBQUwsQ0FBY1csTUFBZCxHQUF1QixPQUFRQyxxQkFBU0MsVUFBVCxDQUFvQkMsTUFBbkQ7QUFDQSxTQUFLWixZQUFMLENBQWtCUyxNQUFsQixHQUEyQixRQUFRQyxxQkFBU0MsVUFBVCxDQUFvQkUsSUFBdkQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQyxTQUFTLENBQUNDLFlBQTNCLENBSk0sQ0FLTjs7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxzQkFBYixFQUFvQyxZQUFVO0FBQzFDQyxNQUFBQSxPQUFPLENBQUND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OztBQTZPTDs7Ozs7QUFLQUMsRUFBQUEsMEJBbFBLLHNDQWtQc0JDLFNBbFB0QixFQWtQZ0M7QUFDakN4RCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQ0FBd0N1RCxTQUFwRDs7QUFDQSxTQUFJLElBQUl0RCxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsS0FBS2IsY0FBTCxDQUFvQmMsTUFBbEMsRUFBeUNELENBQUMsRUFBMUMsRUFBNkM7QUFDekMsVUFBSUosSUFBSSxHQUFHLEtBQUtULGNBQUwsQ0FBb0JhLENBQXBCLENBQVg7O0FBQ0EsVUFBR0osSUFBSCxFQUFRO0FBQ0o7QUFDQSxZQUFJMkQsV0FBVyxHQUFHM0QsSUFBSSxDQUFDc0QsWUFBTCxDQUFrQixhQUFsQixDQUFsQixDQUZJLENBR0o7QUFDQTs7QUFDQSxZQUFHSyxXQUFXLENBQUNELFNBQVosS0FBd0JBLFNBQTNCLEVBQXFDO0FBQ25DLGNBQUlFLFNBQVMsR0FBRyxLQUFLekUsZ0JBQUwsQ0FBc0JrRSxRQUF0QixDQUErQk0sV0FBVyxDQUFDZCxVQUEzQyxDQUFoQjtBQUNBLGNBQUlnQixVQUFVLEdBQUcsaUJBQWVGLFdBQVcsQ0FBQ2QsVUFBNUMsQ0FGbUMsQ0FHbkM7O0FBQ0EsY0FBSWlCLGFBQWEsR0FBR0YsU0FBUyxDQUFDL0MsY0FBVixDQUF5QmdELFVBQXpCLENBQXBCLENBSm1DLENBS25DOztBQUNBLGlCQUFPQyxhQUFQO0FBQ0Q7QUFDSjtBQUNKOztBQUVELFdBQU8sSUFBUDtBQUNILEdBdlFJLENBd1FMOztBQXhRSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlnbG9iYWwgZnJvbSBcIi4uL215Z29sYmFsLmpzXCJcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZGlfbGFiZWw6Y2MuTGFiZWwsXG4gICAgICAgIGJlaXNodV9sYWJlbDpjYy5MYWJlbCxcbiAgICAgICAgcm9vbWlkX2xhYmVsOmNjLkxhYmVsLFxuICAgICAgICBwbGF5ZXJfbm9kZV9wcmVmYWJzOmNjLlByZWZhYixcbiAgICAgICAgLy/nu5HlrprnjqnlrrbluqfkvY0s5LiL6Z2i5pyJM+S4quWtkOiKgueCuVxuICAgICAgICBwbGF5ZXJzX3NlYXRfcG9zOmNjLk5vZGUsXG5cbiAgICB9LFxuICAgIC8v5pys5bGA57uT5p2f77yM5YGa54q25oCB5riF6ZmkXG4gICAgZ2FtZUVuZCgpe1xuXG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnBsYXllck5vZGVMaXN0ID0gW11cbiAgICAgICAgdGhpcy5kaV9sYWJlbC5zdHJpbmcgPSBcIuW6lTpcIiArICBteWdsb2JhbC5wbGF5ZXJEYXRhLmJvdHRvbVxuICAgICAgICB0aGlzLmJlaXNodV9sYWJlbC5zdHJpbmcgPSBcIuWAjeaVsDpcIiArIG15Z2xvYmFsLnBsYXllckRhdGEucmF0ZVxuICAgICAgICB0aGlzLnJvb21zdGF0ZSA9IFJvb21TdGF0ZS5ST09NX0lOVkFMSURcbiAgICAgICAgLy/nm5HlkKzvvIznu5nlhbbku5bnjqnlrrblj5HniYwo5YaF6YOo5LqL5Lu2KVxuICAgICAgICB0aGlzLm5vZGUub24oXCJwdXNoY2FyZF9vdGhlcl9ldmVudFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVzY2VuZSBwdXNoY2FyZF9vdGhlcl9ldmVudFwiKVxuICAgICAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLnBsYXllck5vZGVMaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMucGxheWVyTm9kZUxpc3RbaV1cbiAgICAgICAgICAgICAgICAgICAgaWYobm9kZSl7XG4gICAgICAgICAgICAgICAgICAgIC8v57uZcGxheWVybm9kZeiKgueCueWPkemAgeS6i+S7tlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5lbWl0KFwicHVzaF9jYXJkX2V2ZW50XCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgICAgIC8v55uR5ZCs5oi/6Ze054q25oCB5pS55Y+Y5LqL5Lu2XG4gICAgICAgIG15Z2xvYmFsLnNvY2tldC5vblJvb21DaGFuZ2VTdGF0ZShmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIC8v5Zue6LCD55qE5Ye95pWw5Y+C5pWw5piv6L+b5YWl5oi/6Ze055So5oi35raI5oGvXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uUm9vbUNoYW5nZVN0YXRlOlwiK2RhdGEpXG4gICAgICAgICAgICB0aGlzLnJvb21zdGF0ZSA9IGRhdGFcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAvL1xuICAgICAgICB0aGlzLm5vZGUub24oXCJjYW5yb2JfZXZlbnRcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVzY2VuZSBjYW5yb2JfZXZlbnQ6XCIrZXZlbnQpXG4gICAgICAgICAgICAvL+mAmuefpee7mXBsYXllcm5vZGXlrZDoioLngrlcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5wbGF5ZXJOb2RlTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMucGxheWVyTm9kZUxpc3RbaV1cbiAgICAgICAgICAgICAgICBpZihub2RlKXtcbiAgICAgICAgICAgICAgICAgICAgLy/nu5lwbGF5ZXJub2Rl6IqC54K55Y+R6YCB5LqL5Lu2XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZW1pdChcInBsYXllcm5vZGVfY2Fucm9iX2V2ZW50XCIsZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiY2hvb3NlX2NhcmRfZXZlbnRcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tY2hvb3NlX2NhcmRfZXZlbnQtLS0tLS0tLS0tLVwiKVxuICAgICAgICAgICAgdmFyIGdhbWV1aV9ub2RlID0gIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImdhbWVpbmdVSVwiKVxuICAgICAgICAgICAgaWYoZ2FtZXVpX25vZGU9PW51bGwpe1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXQgY2hpbGRlciBuYW1lIGdhbWVpbmdVSVwiKVxuICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1ldWlfbm9kZS5lbWl0KFwiY2hvb3NlX2NhcmRfZXZlbnRcIixldmVudClcbiAgICAgICAgICAgXG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgICB0aGlzLm5vZGUub24oXCJ1bmNob29zZV9jYXJkX2V2ZW50XCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLXVuY2hvb3NlX2NhcmRfZXZlbnQtLS0tLS0tLS0tLVwiKVxuICAgICAgICAgICAgdmFyIGdhbWV1aV9ub2RlID0gIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImdhbWVpbmdVSVwiKVxuICAgICAgICAgICAgaWYoZ2FtZXVpX25vZGU9PW51bGwpe1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXQgY2hpbGRlciBuYW1lIGdhbWVpbmdVSVwiKVxuICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1ldWlfbm9kZS5lbWl0KFwidW5jaG9vc2VfY2FyZF9ldmVudFwiLGV2ZW50KVxuICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgIC8v55uR5ZCs57uZ546p5a625re75Yqg5LiJ5byg5bqV54mMXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcImFkZF90aHJlZV9jYXJkXCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJhZGRfdGhyZWVfY2FyZDpcIitldmVudClcbiAgICAgICAgLy8gICAgIGZvcih2YXIgaT0wO2k8dGhpcy5wbGF5ZXJOb2RlTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgLy8gICAgICAgICB2YXIgbm9kZSA9IHRoaXMucGxheWVyTm9kZUxpc3RbaV1cbiAgICAgICAgLy8gICAgICAgICBpZihub2RlKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy/nu5lwbGF5ZXJub2Rl6IqC54K55Y+R6YCB5LqL5Lu2XG4gICAgICAgIC8vICAgICAgICAgICAgIG5vZGUuZW1pdChcInBsYXllcm5vZGVfYWRkX3RocmVlX2NhcmRcIixldmVudClcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0uYmluZCh0aGlzKSlcblxuICAgICAgICBteWdsb2JhbC5zb2NrZXQucmVxdWVzdF9lbnRlcl9yb29tKHt9LGZ1bmN0aW9uKGVycixyZXN1bHQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlcl9yb29tX3Jlc3BcIisgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSlcbiAgICAgICAgICAgIGlmKGVyciE9MCl7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyX3Jvb21fcmVzcCBlcnI6XCIrZXJyKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vZW50ZXJfcm9vbeaIkOWKn1xuICAgICAgICAgICAgICAvL25vdGlmeSA9e1wic2VhdGlkXCI6MSxcInBsYXllcmRhdGFcIjpbe1wiYWNjb3VudGlkXCI6XCIyMTE3ODM2XCIsXCJuaWNrX25hbWVcIjpcInRpbnk1NDNcIixcImF2YXRhclVybFwiOlwiaHR0cDovL3h4eFwiLFwiZ29sZGNvdW50XCI6MTAwMH1dfVxuICAgICAgICAgICAgICAgIHZhciBzZWF0aWQgPSByZXN1bHQuc2VhdGluZGV4IC8v6Ieq5bex5Zyo5oi/6Ze06YeM55qEc2VhdGlkXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJkYXRhX2xpc3RfcG9zID0gW10gIC8vM+S4queUqOaIt+WIm+W7uuS4gOS4quepuueUqOaIt+WIl+ihqFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGxheWVyU2VhdFBvcyhzZWF0aWQpXG5cbiAgICAgICAgICAgICAgICB2YXIgcGxheWVyZGF0YV9saXN0ID0gcmVzdWx0LnBsYXllcmRhdGFcbiAgICAgICAgICAgICAgICB2YXIgcm9vbWlkID0gcmVzdWx0LnJvb21pZFxuICAgICAgICAgICAgICAgIHRoaXMucm9vbWlkX2xhYmVsLnN0cmluZyA9IFwi5oi/6Ze05Y+3OlwiICsgcm9vbWlkXG4gICAgICAgICAgICAgICAgbXlnbG9iYWwucGxheWVyRGF0YS5ob3VzZW1hbmFnZWlkID0gcmVzdWx0LmhvdXNlbWFuYWdlaWRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDtpPHBsYXllcmRhdGFfbGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2wubG9nKFwidGhpcy0tLS1cIit0aGlzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFBsYXllck5vZGUocGxheWVyZGF0YV9saXN0W2ldKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGlzb3Blbl9zb3VuZCl7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKVxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvc291bmQvYmcubXAzXCIpLHRydWUpIFxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZ2FtZWJlZm9yZV9ub2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZ2FtZWJlZm9yZVVJXCIpXG4gICAgICAgICAgICBnYW1lYmVmb3JlX25vZGUuZW1pdChcImluaXRcIilcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgICAgIC8v5Zyo6L+b5YWl5oi/6Ze05ZCO77yM5rOo5YaM5YW25LuW546p5a626L+b5YWl5oi/6Ze055qE5LqL5Lu2XG4gICAgICAgIG15Z2xvYmFsLnNvY2tldC5vblBsYXllckpvaW5Sb29tKGZ1bmN0aW9uKGpvaW5fcGxheWVyZGF0YSl7XG4gICAgICAgICAgICAvL+Wbnuiwg+eahOWHveaVsOWPguaVsOaYr+i/m+WFpeaIv+mXtOeUqOaIt+a2iOaBr1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvblBsYXllckpvaW5Sb29tOlwiK0pTT04uc3RyaW5naWZ5KGpvaW5fcGxheWVyZGF0YSkpXG4gICAgICAgICAgICB0aGlzLmFkZFBsYXllck5vZGUoam9pbl9wbGF5ZXJkYXRhKVxuICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgIFxuICAgICAgICAvL+Wbnuiwg+WPguaVsOaYr+WPkemAgeWHhuWkh+a2iOaBr+eahGFjY291bnRpZFxuICAgICAgICBteWdsb2JhbC5zb2NrZXQub25QbGF5ZXJSZWFkeShmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLW9uUGxheWVyUmVhZHk6XCIrZGF0YSlcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5wbGF5ZXJOb2RlTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMucGxheWVyTm9kZUxpc3RbaV1cbiAgICAgICAgICAgICAgICBpZihub2RlKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5lbWl0KFwicGxheWVyX3JlYWR5X25vdGlmeVwiLGRhdGEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgICAgbXlnbG9iYWwuc29ja2V0Lm9uR2FtZVN0YXJ0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMucGxheWVyTm9kZUxpc3QubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnBsYXllck5vZGVMaXN0W2ldXG4gICAgICAgICAgICAgICAgaWYobm9kZSl7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZW1pdChcImdhbWVzdGFydF9ldmVudFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAvL+makOiXj2dhbWViZWZvcmVVSeiKgueCuVxuICAgICAgICB2YXIgZ2FtZWJlZm9yZVVJID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZ2FtZWJlZm9yZVVJXCIpXG4gICAgICAgICAgICBpZihnYW1lYmVmb3JlVUkpe1xuICAgICAgICAgICAgICAgIGdhbWViZWZvcmVVSS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgICAgICAgICAgLy/nm5HlkKzmnI3liqHlmajnjqnlrrbmiqLlnLDkuLvmtojmga9cbiAgICAgICAgbXlnbG9iYWwuc29ja2V0Lm9uUm9iU3RhdGUoZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS1vblJvYlN0YXRlXCIrSlNPTi5zdHJpbmdpZnkoZXZlbnQpKVxuICAgICAgICAgICAgICAgIC8vb25Sb2JTdGF0ZXtcImFjY291bnRpZFwiOlwiMjE2Mjg2NlwiLFwic3RhdGVcIjoxfVxuICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5wbGF5ZXJOb2RlTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnBsYXllck5vZGVMaXN0W2ldXG4gICAgICAgICAgICAgICAgICAgIGlmKG5vZGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/nu5lwbGF5ZXJub2Rl6IqC54K55Y+R6YCB5LqL5Lu2XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmVtaXQoXCJwbGF5ZXJub2RlX3JvYl9zdGF0ZV9ldmVudFwiLGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgICAgLy/ms6jlhoznm5HlkKzmnI3liqHlmajnoa7lrprlnLDkuLvmtojmga9cbiAgICAgICAgbXlnbG9iYWwuc29ja2V0Lm9uQ2hhbmdlTWFzdGVyKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25DaGFuZ2VNYXN0ZXJcIitldmVudClcbiAgICAgICAgICAgIC8v5L+d5a2Y5LiA5LiL5Zyw5Li7aWRcbiAgICAgICAgICAgIG15Z2xvYmFsLnBsYXllckRhdGEubWFzdGVyX2FjY291bnRpZCA9IGV2ZW50XG4gICAgICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMucGxheWVyTm9kZUxpc3QubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnBsYXllck5vZGVMaXN0W2ldXG4gICAgICAgICAgICAgICAgaWYobm9kZSl7XG4gICAgICAgICAgICAgICAgICAgIC8v57uZcGxheWVybm9kZeiKgueCueWPkemAgeS6i+S7tlxuICAgICAgICAgICAgICAgICAgICBub2RlLmVtaXQoXCJwbGF5ZXJub2RlX2NoYW5nZW1hc3Rlcl9ldmVudFwiLGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICBcbiAgICAgICAgLy/ms6jlhoznm5HlkKzmnI3liqHlmajmmL7npLrlupXniYzmtojmga9cbiAgICAgICAgbXlnbG9iYWwuc29ja2V0Lm9uU2hvd0JvdHRvbUNhcmQoZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uU2hvd0JvdHRvbUNhcmQtLS0tLS0tLS1cIitldmVudClcbiAgICAgICAgICAgdmFyIGdhbWV1aV9ub2RlID0gIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImdhbWVpbmdVSVwiKVxuICAgICAgICAgICBpZihnYW1ldWlfbm9kZT09bnVsbCl7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IGNoaWxkZXIgbmFtZSBnYW1laW5nVUlcIilcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgIH1cbiAgICAgICAgICAgZ2FtZXVpX25vZGUuZW1pdChcInNob3dfYm90dG9tX2NhcmRfZXZlbnRcIixldmVudClcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgIH0sXG5cbiAgICAvL3NlYXRfaW5kZXjoh6rlt7HlnKjmiL/pl7TnmoTkvY3nva5pZFxuICAgIHNldFBsYXllclNlYXRQb3Moc2VhdF9pbmRleCl7XG4gICAgICAgIGlmKHNlYXRfaW5kZXggPCAxIHx8IHNlYXRfaW5kZXggPiAzKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VhdF9pbmRleCBlcnJvclwiK3NlYXRfaW5kZXgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0UGxheWVyU2VhdFBvcyBzZWF0X2luZGV4OlwiICsgc2VhdF9pbmRleClcbiAgICAgICBcbiAgICAgICAgLy/nlYzpnaLkvY3nva7ovazljJbmiJDpgLvovpHkvY3nva5cbiAgICAgICAgc3dpdGNoKHNlYXRfaW5kZXgpe1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyZGF0YV9saXN0X3Bvc1sxXSA9IDBcbiAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcmRhdGFfbGlzdF9wb3NbMl0gPSAxIFxuICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyZGF0YV9saXN0X3Bvc1szXSA9IDJcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJkYXRhX2xpc3RfcG9zWzJdID0gMFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcmRhdGFfbGlzdF9wb3NbM10gPSAxXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyZGF0YV9saXN0X3Bvc1sxXSA9IDJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyZGF0YV9saXN0X3Bvc1szXSA9IDAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcmRhdGFfbGlzdF9wb3NbMV0gPSAxXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyZGF0YV9saXN0X3Bvc1syXSA9IDJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgICBicmVhayAgICAgIFxuICAgICAgICB9IFxuXG4gICAgfSxcblxuICAgIGFkZFBsYXllck5vZGUocGxheWVyX2RhdGEpe1xuICAgICAgICB2YXIgcGxheWVybm9kZV9pbnN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF5ZXJfbm9kZV9wcmVmYWJzKVxuICAgICAgICBwbGF5ZXJub2RlX2luc3QucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgIC8v5Yib5bu655qE6IqC54K55a2Y5YKo5ZyoZ2FtZXNjZW5l55qE5YiX6KGo5LitXG4gICAgICAgIHRoaXMucGxheWVyTm9kZUxpc3QucHVzaChwbGF5ZXJub2RlX2luc3QpXG5cbiAgICAgICAgLy/njqnlrrblnKhyb29t6YeM55qE5L2N572u57Si5byVKOmAu+i+keS9jee9rilcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5wbGF5ZXJkYXRhX2xpc3RfcG9zW3BsYXllcl9kYXRhLnNlYXRpbmRleF1cbiAgICAgICAgY29uc29sZS5sb2coXCJpbmRleCBcIitwbGF5ZXJfZGF0YS5zZWF0aW5kZXgrIFwiIFwiK2luZGV4KVxuICAgICAgICBwbGF5ZXJub2RlX2luc3QucG9zaXRpb24gPSB0aGlzLnBsYXllcnNfc2VhdF9wb3MuY2hpbGRyZW5baW5kZXhdLnBvc2l0aW9uXG4gICAgICAgIHBsYXllcm5vZGVfaW5zdC5nZXRDb21wb25lbnQoXCJwbGF5ZXJfbm9kZVwiKS5pbml0X2RhdGEocGxheWVyX2RhdGEsaW5kZXgpXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgLy/pgJrov4dhY2NvdW50aWTojrflj5bnlKjmiLflh7rniYzmlL7lnKhnYW1lc2NlbmTnmoTkvY3nva4gXG4gICAgIOWBmuazle+8muWFiOaUvjPkuKroioLngrnlnKhnYW1lYWNlbmXnmoTlnLrmma/kuK1jYXJkc291dHpvbmUoMDEyKVxuICAgICAgICAgICBcbiAgICAqL1xuICAgIGdldFVzZXJPdXRDYXJkUG9zQnlBY2NvdW50KGFjY291bnRpZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0VXNlck91dENhcmRQb3NCeUFjY291bnQgYWNjb3VudGlkOlwiK2FjY291bnRpZClcbiAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLnBsYXllck5vZGVMaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnBsYXllck5vZGVMaXN0W2ldXG4gICAgICAgICAgICBpZihub2RlKXtcbiAgICAgICAgICAgICAgICAvL+iOt+WPluiKgueCuee7keWumueahOe7hOS7tlxuICAgICAgICAgICAgICAgIHZhciBub2RlX3NjcmlwdCA9IG5vZGUuZ2V0Q29tcG9uZW50KFwicGxheWVyX25vZGVcIilcbiAgICAgICAgICAgICAgICAvL+WmguaenGFjY291bnRpZOWSjHBsYXllcl9ub2Rl6IqC54K557uR5a6a55qEYWNjb3VudGlk55u45ZCMXG4gICAgICAgICAgICAgICAgLy/mjqXojrflj5ZwbGF5ZXJfbm9kZeeahOWtkOiKgueCuVxuICAgICAgICAgICAgICAgIGlmKG5vZGVfc2NyaXB0LmFjY291bnRpZD09PWFjY291bnRpZCl7XG4gICAgICAgICAgICAgICAgICB2YXIgc2VhdF9ub2RlID0gdGhpcy5wbGF5ZXJzX3NlYXRfcG9zLmNoaWxkcmVuW25vZGVfc2NyaXB0LnNlYXRfaW5kZXhdXG4gICAgICAgICAgICAgICAgICB2YXIgaW5kZXhfbmFtZSA9IFwiY2FyZHNvdXR6b25lXCIrbm9kZV9zY3JpcHQuc2VhdF9pbmRleFxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldFVzZXJPdXRDYXJkUG9zQnlBY2NvdW50IGluZGV4X25hbWU6XCIraW5kZXhfbmFtZSlcbiAgICAgICAgICAgICAgICAgIHZhciBvdXRfY2FyZF9ub2RlID0gc2VhdF9ub2RlLmdldENoaWxkQnlOYW1lKGluZGV4X25hbWUpXG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiT3V0Wm9uZTpcIisgb3V0X2NhcmRfbm9kZS5uYW1lKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dF9jYXJkX25vZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH0sXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateBy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35b4cim3btD3LKF6z4FJbaf', 'use_reversed_rotateBy');
// migration/use_reversed_rotateBy.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
cc.RotateBy._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9taWdyYXRpb24vdXNlX3JldmVyc2VkX3JvdGF0ZUJ5LmpzIl0sIm5hbWVzIjpbImNjIiwiUm90YXRlQnkiLCJfcmV2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQUEsRUFBRSxDQUFDQyxRQUFILENBQVlDLFFBQVosR0FBdUIsSUFBdkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIHNjcmlwdCBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBDb2NvcyBDcmVhdG9yIGFuZCBpcyBvbmx5IHVzZWQgZm9yIHByb2plY3RzIGNvbXBhdGlibGUgd2l0aCB2Mi4xLjAvdjIuMS4xL3YyLjMuMC92Mi4zLjEvdjIuMy4yIHZlcnNpb25zLlxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cbiAqIElmIHlvdSBkb24ndCB1c2UgY2MuQWN0aW9uIGluIHlvdXIgcHJvamVjdCwgeW91IGNhbiBkZWxldGUgdGhpcyBzY3JpcHQgZGlyZWN0bHkuXG4gKiBJZiB5b3VyIHByb2plY3QgaXMgaG9zdGVkIGluIFZDUyBzdWNoIGFzIGdpdCwgc3VibWl0IHRoaXMgc2NyaXB0IHRvZ2V0aGVyLlxuICpcbiAqIOatpOiEmuacrOeUsSBDb2NvcyBDcmVhdG9yIOiHquWKqOeUn+aIkO+8jOS7heeUqOS6juWFvOWuuSB2Mi4xLjAvdjIuMS4xL3YyLjMuMC92Mi4zLjEvdjIuMy4yIOeJiOacrOeahOW3peeoi++8jFxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67kuK3msqHnlKjliLAgQWN0aW9u77yM5Y+v55u05o6l5Yig6Zmk6K+l6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxuICovXG5cbmNjLlJvdGF0ZUJ5Ll9yZXZlcnNlID0gdHJ1ZTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
    this.nickname_label.string = _mygolbal["default"].playerData.nickName;
    this.gobal_count.string = "" + _mygolbal["default"].playerData.gobal_count;
    var str = _mygolbal["default"].playerData.avatarUrl; //console.log(str)

    var head_image_path = "UI/headimage/" + str;
    cc.loader.loadRes(head_image_path, cc.SpriteFrame, function (err, spriteFrame) {
      if (err) {
        console.log(err.message || err);
        return;
      }

      this.headimage.spriteFrame = spriteFrame;
    }.bind(this));
  },
  start: function start() {},
  btn_bangzhu: function btn_bangzhu() {
    cc.sys.openURL('https://github.com/whsczl007/ddz_game_cocoscreater_nodejs');
  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hhbGxzY2VuZS9oYWxsU2NlbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJuaWNrbmFtZV9sYWJlbCIsIkxhYmVsIiwiaGVhZGltYWdlIiwiU3ByaXRlIiwiZ29iYWxfY291bnQiLCJjcmVhdHJvb21fcHJlZmFicyIsIlByZWZhYiIsImpvaW5yb29tX3ByZWZhYnMiLCJvbkxvYWQiLCJzdHJpbmciLCJteWdsb2JhbCIsInBsYXllckRhdGEiLCJuaWNrTmFtZSIsInN0ciIsImF2YXRhclVybCIsImhlYWRfaW1hZ2VfcGF0aCIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJiaW5kIiwic3RhcnQiLCJidG5fYmFuZ3podSIsInN5cyIsIm9wZW5VUkwiLCJvbkJ1dHRvbkNsaWNrIiwiZXZlbnQiLCJjdXN0b21EYXRhIiwiY3JlYXRvcl9Sb29tIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJub2RlIiwiekluZGV4Iiwiam9pbl9Sb29tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxjQUFjLEVBQUNKLEVBQUUsQ0FBQ0ssS0FEVjtBQUVSQyxJQUFBQSxTQUFTLEVBQUNOLEVBQUUsQ0FBQ08sTUFGTDtBQUdSQyxJQUFBQSxXQUFXLEVBQUNSLEVBQUUsQ0FBQ0ssS0FIUDtBQUlSSSxJQUFBQSxpQkFBaUIsRUFBQ1QsRUFBRSxDQUFDVSxNQUpiO0FBS1JDLElBQUFBLGdCQUFnQixFQUFDWCxFQUFFLENBQUNVO0FBTFosR0FIUDtBQVdMO0FBRUFFLEVBQUFBLE1BYkssb0JBYUs7QUFDUCxTQUFLUixjQUFMLENBQW9CUyxNQUFwQixHQUE2QkMscUJBQVNDLFVBQVQsQ0FBb0JDLFFBQWpEO0FBQ0EsU0FBS1IsV0FBTCxDQUFpQkssTUFBakIsR0FBMEIsS0FBS0MscUJBQVNDLFVBQVQsQ0FBb0JQLFdBQW5EO0FBQ0gsUUFBSVMsR0FBRyxHQUFHSCxxQkFBU0MsVUFBVCxDQUFvQkcsU0FBOUIsQ0FIVSxDQUlWOztBQUNBLFFBQUlDLGVBQWUsR0FBRyxrQkFBa0JGLEdBQXhDO0FBQ0FqQixJQUFBQSxFQUFFLENBQUNvQixNQUFILENBQVVDLE9BQVYsQ0FBa0JGLGVBQWxCLEVBQWtDbkIsRUFBRSxDQUFDc0IsV0FBckMsRUFBaUQsVUFBU0MsR0FBVCxFQUFhQyxXQUFiLEVBQTBCO0FBQ3ZFLFVBQUlELEdBQUosRUFBUztBQUNMRSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBRyxDQUFDSSxPQUFKLElBQWVKLEdBQTNCO0FBQ0E7QUFDSDs7QUFDQSxXQUFLakIsU0FBTCxDQUFla0IsV0FBZixHQUE2QkEsV0FBN0I7QUFDQSxLQU40QyxDQU0zQ0ksSUFOMkMsQ0FNdEMsSUFOc0MsQ0FBakQ7QUFPRSxHQTFCRztBQTRCTEMsRUFBQUEsS0E1QkssbUJBNEJJLENBRVIsQ0E5Qkk7QUErQkpDLEVBQUFBLFdBL0JJLHlCQStCUztBQUNoQjlCLElBQUFBLEVBQUUsQ0FBQytCLEdBQUgsQ0FBT0MsT0FBUCxDQUFlLDJEQUFmO0FBQ0MsR0FqQ007QUFtQ0w7QUFFQUMsRUFBQUEsYUFyQ0sseUJBcUNTQyxLQXJDVCxFQXFDZUMsVUFyQ2YsRUFxQzBCO0FBQzNCLFlBQU9BLFVBQVA7QUFDSSxXQUFLLGFBQUw7QUFDSSxZQUFJQyxZQUFZLEdBQUdwQyxFQUFFLENBQUNxQyxXQUFILENBQWUsS0FBSzVCLGlCQUFwQixDQUFuQjtBQUNBMkIsUUFBQUEsWUFBWSxDQUFDRSxNQUFiLEdBQXNCLEtBQUtDLElBQTNCO0FBQ0FILFFBQUFBLFlBQVksQ0FBQ0ksTUFBYixHQUFzQixHQUF0QjtBQUNBOztBQUNKLFdBQUssV0FBTDtBQUNJLFlBQUlDLFNBQVMsR0FBR3pDLEVBQUUsQ0FBQ3FDLFdBQUgsQ0FBZSxLQUFLMUIsZ0JBQXBCLENBQWhCO0FBQ0E4QixRQUFBQSxTQUFTLENBQUNILE1BQVYsR0FBbUIsS0FBS0MsSUFBeEI7QUFDQUUsUUFBQUEsU0FBUyxDQUFDRCxNQUFWLEdBQW1CLEdBQW5CO0FBQ0E7O0FBQ0o7QUFDSTtBQVpSO0FBY0g7QUFwREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15Z2xvYmFsIGZyb20gXCIuLy4uL215Z29sYmFsLmpzXCJcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCwgXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG5pY2tuYW1lX2xhYmVsOmNjLkxhYmVsLFxuICAgICAgICBoZWFkaW1hZ2U6Y2MuU3ByaXRlLFxuICAgICAgICBnb2JhbF9jb3VudDpjYy5MYWJlbCxcbiAgICAgICAgY3JlYXRyb29tX3ByZWZhYnM6Y2MuUHJlZmFiLFxuICAgICAgICBqb2lucm9vbV9wcmVmYWJzOmNjLlByZWZhYixcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgIHRoaXMubmlja25hbWVfbGFiZWwuc3RyaW5nID0gbXlnbG9iYWwucGxheWVyRGF0YS5uaWNrTmFtZVxuICAgICAgIHRoaXMuZ29iYWxfY291bnQuc3RyaW5nID0gXCJcIiArIG15Z2xvYmFsLnBsYXllckRhdGEuZ29iYWxfY291bnRcblx0ICAgdmFyIHN0ciA9IG15Z2xvYmFsLnBsYXllckRhdGEuYXZhdGFyVXJsXG5cdCAgIC8vY29uc29sZS5sb2coc3RyKVxuXHQgICB2YXIgaGVhZF9pbWFnZV9wYXRoID0gXCJVSS9oZWFkaW1hZ2UvXCIgKyBzdHJcblx0ICAgY2MubG9hZGVyLmxvYWRSZXMoaGVhZF9pbWFnZV9wYXRoLGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uKGVycixzcHJpdGVGcmFtZSnCoHtcblx0ICAgICAgIGlmIChlcnIpIHtcblx0ICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSB8fCBlcnIpO1xuXHQgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgIH3CoCDCoCDCoCDCoCDCoCBcblx0ICAgICAgICB0aGlzLmhlYWRpbWFnZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO8KgIMKgIMKgIMKgIFxuXHQgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG4gICAgIGJ0bl9iYW5nemh1KCl7XG5cdFx0Y2Muc3lzLm9wZW5VUkwoJ2h0dHBzOi8vZ2l0aHViLmNvbS93aHNjemwwMDcvZGR6X2dhbWVfY29jb3NjcmVhdGVyX25vZGVqcycpOyBcblx0IH0sXG5cdCBcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcblxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsY3VzdG9tRGF0YSl7XG4gICAgICAgIHN3aXRjaChjdXN0b21EYXRhKXtcbiAgICAgICAgICAgIGNhc2UgXCJjcmVhdGVfcm9vbVwiOlxuICAgICAgICAgICAgICAgIHZhciBjcmVhdG9yX1Jvb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNyZWF0cm9vbV9wcmVmYWJzKVxuICAgICAgICAgICAgICAgIGNyZWF0b3JfUm9vbS5wYXJlbnQgPSB0aGlzLm5vZGUgXG4gICAgICAgICAgICAgICAgY3JlYXRvcl9Sb29tLnpJbmRleCA9IDEwMFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwiam9pbl9yb29tXCI6XG4gICAgICAgICAgICAgICAgdmFyIGpvaW5fUm9vbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuam9pbnJvb21fcHJlZmFicylcbiAgICAgICAgICAgICAgICBqb2luX1Jvb20ucGFyZW50ID0gdGhpcy5ub2RlIFxuICAgICAgICAgICAgICAgIGpvaW5fUm9vbS56SW5kZXggPSAxMDBcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/util/waitnode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17318Pv1MxELb6d+o/SHo0s', 'waitnode');
// scripts/util/waitnode.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    loadimage_target: cc.Node,
    _isShow: false,
    lblContent: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.node.active = this._isShow;
  },
  update: function update(dt) {
    this.loadimage_target.rotation = this.loadimage_target.rotation - dt * 45;
  },
  //content为label显示的内容
  show: function show(content) {
    this._isShow = true;

    if (this.node) {
      this.node.active = this._isShow;
    }

    if (this.lblContent) {
      if (content == null) {
        content = "";
      }

      this.lblContent.string = content;
    }
  },
  hide: function hide() {
    this._isShow = false;

    if (this.node) {
      this.node.active = this._isShow;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWwvd2FpdG5vZGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsb2FkaW1hZ2VfdGFyZ2V0IiwiTm9kZSIsIl9pc1Nob3ciLCJsYmxDb250ZW50IiwiTGFiZWwiLCJzdGFydCIsIm5vZGUiLCJhY3RpdmUiLCJ1cGRhdGUiLCJkdCIsInJvdGF0aW9uIiwic2hvdyIsImNvbnRlbnQiLCJzdHJpbmciLCJoaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsZ0JBQWdCLEVBQUNKLEVBQUUsQ0FBQ0ssSUFEWjtBQUVSQyxJQUFBQSxPQUFPLEVBQUMsS0FGQTtBQUdSQyxJQUFBQSxVQUFVLEVBQUNQLEVBQUUsQ0FBQ1E7QUFITixHQUhQO0FBU0w7QUFFQTtBQUVBQyxFQUFBQSxLQWJLLG1CQWFJO0FBQ0wsU0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQUtMLE9BQXhCO0FBQ0gsR0FmSTtBQWlCTE0sRUFBQUEsTUFqQkssa0JBaUJHQyxFQWpCSCxFQWlCTztBQUNSLFNBQUtULGdCQUFMLENBQXNCVSxRQUF0QixHQUFpQyxLQUFLVixnQkFBTCxDQUFzQlUsUUFBdEIsR0FBaUNELEVBQUUsR0FBQyxFQUFyRTtBQUNILEdBbkJJO0FBcUJMO0FBQ0FFLEVBQUFBLElBdEJLLGdCQXNCQUMsT0F0QkEsRUFzQlE7QUFDVCxTQUFLVixPQUFMLEdBQWUsSUFBZjs7QUFDQSxRQUFHLEtBQUtJLElBQVIsRUFBYTtBQUNULFdBQUtBLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUFLTCxPQUF4QjtBQUNIOztBQUNELFFBQUcsS0FBS0MsVUFBUixFQUFtQjtBQUNmLFVBQUdTLE9BQU8sSUFBSSxJQUFkLEVBQW1CO0FBQ2ZBLFFBQUFBLE9BQU8sR0FBRyxFQUFWO0FBQ0g7O0FBQ0QsV0FBS1QsVUFBTCxDQUFnQlUsTUFBaEIsR0FBeUJELE9BQXpCO0FBQ0g7QUFDSixHQWpDSTtBQW1DTEUsRUFBQUEsSUFuQ0ssa0JBbUNDO0FBQ0YsU0FBS1osT0FBTCxHQUFlLEtBQWY7O0FBQ0EsUUFBRyxLQUFLSSxJQUFSLEVBQWE7QUFDVCxXQUFLQSxJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBS0wsT0FBeEI7QUFDSDtBQUNKO0FBeENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbG9hZGltYWdlX3RhcmdldDpjYy5Ob2RlLFxuICAgICAgICBfaXNTaG93OmZhbHNlLFxuICAgICAgICBsYmxDb250ZW50OmNjLkxhYmVsLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMuX2lzU2hvdztcbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICB0aGlzLmxvYWRpbWFnZV90YXJnZXQucm90YXRpb24gPSB0aGlzLmxvYWRpbWFnZV90YXJnZXQucm90YXRpb24gLSBkdCo0NTtcbiAgICB9LFxuXG4gICAgLy9jb250ZW505Li6bGFiZWzmmL7npLrnmoTlhoXlrrlcbiAgICBzaG93KGNvbnRlbnQpe1xuICAgICAgICB0aGlzLl9pc1Nob3cgPSB0cnVlO1xuICAgICAgICBpZih0aGlzLm5vZGUpe1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMuX2lzU2hvdzsgICBcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmxibENvbnRlbnQpe1xuICAgICAgICAgICAgaWYoY29udGVudCA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGJsQ29udGVudC5zdHJpbmcgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGhpZGUoKXtcbiAgICAgICAgdGhpcy5faXNTaG93ID0gZmFsc2U7XG4gICAgICAgIGlmKHRoaXMubm9kZSl7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdGhpcy5faXNTaG93OyAgIFxuICAgICAgICB9XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e273GWxjpOE5RhAyN6doer', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9taWdyYXRpb24vdXNlX3YyLjAueF9jYy5Ub2dnbGVfZXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJUb2dnbGUiLCJfdHJpZ2dlckV2ZW50SW5TY3JpcHRfY2hlY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBWUEsSUFBSUEsRUFBRSxDQUFDQyxNQUFQLEVBQWU7QUFDWDtBQUNBO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQywyQkFBVixHQUF3QyxJQUF4QztBQUNIIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSBjb21wYXRpYmxlIHdpdGggcHJvamVjdHMgcHJpb3IgdG8gdjIuMS4wLlxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cbiAqIElmIHlvdSBkb24ndCB1c2UgY2MuVG9nZ2xlIGluIHlvdXIgcHJvamVjdCwgeW91IGNhbiBkZWxldGUgdGhpcyBzY3JpcHQgZGlyZWN0bHkuXG4gKiBJZiB5b3VyIHByb2plY3QgaXMgaG9zdGVkIGluIFZDUyBzdWNoIGFzIGdpdCwgc3VibWl0IHRoaXMgc2NyaXB0IHRvZ2V0aGVyLlxuICpcbiAqIOatpOiEmuacrOeUsSBDb2NvcyBDcmVhdG9yIOiHquWKqOeUn+aIkO+8jOS7heeUqOS6juWFvOWuuSB2Mi4xLjAg5LmL5YmN54mI5pys55qE5bel56iL77yMXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBUb2dnbGXvvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruacieaJmOeuoeS6jiBnaXQg562J54mI5pys5bqT77yM6K+35bCG5q2k6ISa5pys5LiA5bm25LiK5Lyg44CCXG4gKi9cblxuaWYgKGNjLlRvZ2dsZSkge1xuICAgIC8vIFdoZXRoZXIgdGhlICd0b2dnbGUnIGFuZCAnY2hlY2tFdmVudHMnIGV2ZW50cyBhcmUgZmlyZWQgd2hlbiAndG9nZ2xlLmNoZWNrKCkgLyB0b2dnbGUudW5jaGVjaygpJyBpcyBjYWxsZWQgaW4gdGhlIGNvZGVcbiAgICAvLyDlnKjku6PnoIHkuK3osIPnlKggJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScg5pe25piv5ZCm6Kem5Y+RICd0b2dnbGUnIOS4jiAnY2hlY2tFdmVudHMnIOS6i+S7tlxuICAgIGNjLlRvZ2dsZS5fdHJpZ2dlckV2ZW50SW5TY3JpcHRfY2hlY2sgPSB0cnVlO1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameScene/gameingUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc5fbLb+LFG+rCIt1gYkSVX', 'gameingUI');
// scripts/gameScene/gameingUI.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../mygolbal.js"));

var _socket_ctr = _interopRequireDefault(require("../data/socket_ctr.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    gameingUI: cc.Node,
    card_prefab: cc.Prefab,
    robUI: cc.Node,
    bottom_card_pos_node: cc.Node,
    playingUI_node: cc.Node,
    tipsLabel: cc.Label,
    //玩家出牌不合法的tips
    mypaiview: cc.Node,
    returnroom: cc.Node,
    clock_label: cc.Label,
    playing_clock_label: cc.Label
  },
  ResetUI: function ResetUI() {
    //测试按钮
    Toast.show("测试按钮");

    _mygolbal["default"].socket.requestReady(); //myglobal.socket._socket.close();
    //    myglobal.socket.request_reset(function(data){
    // 	console.log("重置游戏 返回"+data);
    // 	//this.ResetUI_();
    // }.bind(this))	

  },
  ResetUI_: function ResetUI_() {
    //自己牌列表
    this.cards_nods = [];
    this.card_width = 0; //当前可以抢地主的accountid

    this.rob_player_accountid = 0; //发牌动画是否结束

    this.fapai_end = false; //底牌数组

    this.bottom_card = []; //底牌的json对象数据

    this.bottom_card_data = [];
    this.choose_card_data = [];
    this.outcar_zone = [];
    this.push_card_tmp = []; //this.robUI.removeAllChildren();

    this.robUI.active = false;
    this.playingUI_node.active = false; //cc.director.loadScene("gameScene")
    //先清理出牌区域

    this.unscheduleAllCallbacks(); //清除所有定时器

    var gameScene_script = this.node.parent.getComponent("gameScene");

    for (var i = 0; i < gameScene_script.playerNodeList.length; i++) {
      gameScene_script.playerNodeList[i].getChildByName("card_node").removeAllChildren(true); //gameScene_script.playerNodeList[i].unscheduleAllCallbacks()//清除所有定时器

      this.clearOutZone(gameScene_script.playerNodeList[i].getComponent("player_node").accountid);
    }

    this.bottom_card_pos_node.removeAllChildren(true);
    this.mypaiview.removeAllChildren(true); // var gamebefore_node = this.node.parent.getChildByName("gamebeforeUI")
    // if(gameScene_script.roomstate<RoomState.ROOM_GAMESTART){//游戏中
    //     gamebefore_node.active=true;
    // 	gamebefore_node.emit("init")
    // }
    // else{
    //     gamebefore_node.active =  false
    // }

    var gamebefore_node = this.node.parent.getChildByName("gamebeforeUI");
    gamebefore_node.active = true;
    gamebefore_node.emit("init");
  },
  show_mycards: function show_mycards(data) {
    //显示我的手牌
    this.card_data = data;
    this.cur_index_card = data.length - 1;
    this.pushCard(data);

    if (isopen_sound) {} //循环播放发牌音效
    //this.fapai_audioID = cc.audioEngine.play(cc.url.raw("resources/sound/fapai1.mp3"),true)
    // console.log("start fapai_audioID"+this.fapai_audioID) 
    //左边移动定时器


    this.scheduleOnce(this._runactive_pushcard.bind(this), 0.3);
    this.node.parent.emit("pushcard_other_event");
  },
  show_bottom_cards: function show_bottom_cards(data) {
    //显示地主牌
    this.bottom_card_data = data;

    for (var i = 0; i < data.length; i++) {
      var card = this.bottom_card[i];
      var show_data = data[i];
      var call_data = {
        "obj": card,
        "data": show_data
      };
      console.log("bottom show_data:" + JSON.stringify(show_data));
      var run = cc.callFunc(function (target, activedata) {
        var show_card = activedata.obj;
        var show_data = activedata.data; //console.log("cc.callFunc:"+JSON.stringify(show_data))

        show_card.getComponent("card").showCards(show_data);
      }, this, call_data);
      card.runAction(cc.sequence(cc.rotateBy(0, 0, 180), cc.rotateBy(0.2, 0, -90), run, cc.rotateBy(0.2, 0, -90), cc.scaleBy(1, 1.2)));

      if (isopen_sound) {
        cc.audioEngine.play(cc.url.raw("resources/sound/start.mp3"));
      }
    }
  },
  now_whocan_chupai: function now_whocan_chupai(data) {
    // 现在谁出牌
    this.unschedule(this.funUp1);

    if (data._accountID == _mygolbal["default"].playerData.accountID) {
      //显示可以出牌的UI
      this.playingUI_node.active = true; //先清理出牌区域

      this.clearOutZone(_mygolbal["default"].playerData.accountID); //先把自己出牌列表置空
      //this.choose_card_data=[]

      this.playing_clock_label.string = "" + (data.next_time - data.now);
      this.next_time = data.next_time;
      this.now = data.now; // let funUp1 = function(){
      // 	this.now+=1;
      // 	if(this.next_time-this.now>0){
      // 		this.playing_clock_label.string=""+(this.next_time-this.now);
      // 	}else{
      // 		this.playingUI_node.active = false
      // 		//this.unschedule(funUp);
      // 	}
      // }.bind(this);
      // this.unschedule(this.funUp1);

      this.schedule(this.funUp1, 1);
    } else {
      //隐藏可以出牌的UI
      this.playingUI_node.active = false;
    }

    this.node.parent.emit("onCanChuCard_gameScene", data);
  },
  show_chupai: function show_chupai(data) {
    // 显示玩家出牌
    var accountid = data.accountid;
    var gameScene_script = this.node.parent.getComponent("gameScene"); //获取出牌区域节点

    var outCard_node = gameScene_script.getUserOutCardPosByAccount(accountid);

    if (outCard_node == null) {
      return;
    }

    var node_cards = [];

    for (var i = 0; i < data.cards.length; i++) {
      var card = cc.instantiate(this.card_prefab);
      card.getComponent("card").showCards(data.cards[i].card_data, _mygolbal["default"].playerData.accountID);
      node_cards.push(card);
    }

    this.appendOtherCardsToOutZone(outCard_node, node_cards, 0);
  },
  funUp: function funUp() {
    this.now++;

    if (this.next_time - this.now >= 0) {
      this.clock_label.string = "" + (this.next_time - this.now); //this.scheduleOnce(funUp,1) 
    } else {
      this.robUI.active = false;
      this.unschedule(this.funUp);
    }
  },
  funUp1: function funUp1() {
    this.now += 1;

    if (this.next_time - this.now > 0) {
      this.playing_clock_label.string = "" + (this.next_time - this.now);
    } else {
      this.playingUI_node.active = false;
      this.unschedule(this.funUp1);
    }
  },
  onLoad: function onLoad() {
    //自己牌列表 
    // this.cards_nods = []
    // this.card_width = 0
    // //当前可以抢地主的accountid
    // this.rob_player_accountid = 0
    // //发牌动画是否结束
    // this.fapai_end = false
    // //底牌数组
    // this.bottom_card = []
    // //底牌的json对象数据
    // this.bottom_card_data=[]
    // this.choose_card_data=[]
    // this.outcar_zone = []
    // this.push_card_tmp = []
    this.ResetUI_(); //监听服务器:下发牌消息

    _mygolbal["default"].socket.onPushCards(function (data) {
      console.log("onPushCards" + JSON.stringify(data));
      this.show_mycards(data); // this.card_data = data
      // this.cur_index_card = data.length - 1
      // this.pushCard(data)
      // if(isopen_sound){
      //     //循环播放发牌音效
      //    // this.fapai_audioID = cc.audioEngine.play(cc.url.raw("resources/sound/fapai1.mp3"),true)
      //     console.log("start fapai_audioID"+this.fapai_audioID) 
      // }
      //  //左边移动定时器
      // this.scheduleOnce(this._runactive_pushcard.bind(this),0.3)
      // this.node.parent.emit("pushcard_other_event")
    }.bind(this)); //监听服务器:通知抢地主消息,显示相应的UI


    _mygolbal["default"].socket.onCanRobState(function (data) {
      console.log("onCanRobState" + JSON.stringify(data)); //这里需要2个变量条件：自己是下一个抢地主，2发牌动画结束

      this.rob_player_accountid = data._accountID; // if(data._accountID==myglobal.playerData.accountID && this.fapai_end==true){

      if (data._accountID == _mygolbal["default"].playerData.accountID) {
        this.robUI.active = true;
        this.clock_label.string = "" + (data.next_time - data.now);
        this.next_time = data.next_time;
        this.now = data.now; // let funUp = function(){
        // 	data.now++;
        // 	if(data.next_time-data.now>=0){
        // 		this.clock_label.string=""+(data.next_time-data.now);
        // 		//this.scheduleOnce(funUp,1) 
        // 	}else{
        // 		this.robUI.active = false
        // 		//this.unschedule(funUp);
        // 	}
        // }.bind(this);

        this.unschedule(this.funUp);
        this.schedule(this.funUp, 1);
      } else {
        this.robUI.active = false;
      }

      this.node.parent.emit("canrob_event", data);
    }.bind(this)); //监听服务器可以出牌消息


    _mygolbal["default"].socket.onCanChuCard(function (data) {
      console.log("onCanChuCard gameingUI" + JSON.stringify(data));
      console.log("");
      this.now_whocan_chupai(data); //判断是不是自己能出牌
      //          if(data._accountID==myglobal.playerData.accountID){
      // 	//显示可以出牌的UI
      // 	this.playingUI_node.active = true
      //              //先清理出牌区域
      //              this.clearOutZone(myglobal.playerData.accountID)
      //              //先把自己出牌列表置空
      //              //this.choose_card_data=[]
      // 	this.playing_clock_label.string=""+(data.next_time-data.now);
      // 	let funUp = function(){
      // 		data.now+=1;
      // 		if(data.next_time-data.now>0){
      // 			this.playing_clock_label.string=""+(data.next_time-data.now);
      // 		}else{
      // 			this.playingUI_node.active = false
      // 			//this.unschedule(funUp);
      // 		}
      // 	}.bind(this);
      // 	 this.schedule(funUp,1,(data.next_time-data.now));
      // }else{
      // 	//隐藏可以出牌的UI
      // 	this.playingUI_node.active = false
      // }
      // this.node.parent.emit("onCanChuCard_gameScene",data);
    }.bind(this));

    _mygolbal["default"].socket.onGameFinish(function (data) {
      console.log("游戏结束通知 onGameFinish:" + data); //this.tipsLabel.string="winner"+data;

      Alert.show("You " + (data.you_dt_score > 0 ? "win" : "lose") + " " + data.you_dt_score); // if(data.winner==myglobal.playerData.accountID){
      //      Alert.show("You win "+data.you_dt_score)
      // }else{
      //Toast.show("You dt "+data.you_dt_score)
      // }
      //this.gameingUI.active = true;

      this.ResetUI_(); //cc.director.loadScene("gameScene")
    }.bind(this)); //监听服务器：其他玩家出牌消息


    _mygolbal["default"].socket.onOtherPlayerChuCard(function (data) {
      //{"accountid":"2357540","cards":[{"cardid":4,"card_data":{"index":4,"value":1,"shape":1}}]}
      console.log("onOtherPlayerChuCard" + JSON.stringify(data));
      this.show_chupai(data); // var accountid = data.accountid
      // var gameScene_script = this.node.parent.getComponent("gameScene")
      // //获取出牌区域节点
      // var outCard_node = gameScene_script.getUserOutCardPosByAccount(accountid)
      // if(outCard_node==null){
      //     return
      // }
      // var node_cards = []
      // for(var i=0;i<data.cards.length;i++){
      //     var card = cc.instantiate(this.card_prefab)
      //     card.getComponent("card").showCards(data.cards[i].card_data,myglobal.playerData.accountID)
      //     node_cards.push(card)
      // }
      // this.appendOtherCardsToOutZone(outCard_node,node_cards,0)
    }.bind(this)); //内部事件:显示底牌事件,data是三张底牌数据


    this.node.on("show_bottom_card_event", function (data) {
      console.log("----show_bottom_card_event", +data);
      this.show_bottom_cards(data); // this.bottom_card_data = data
      // for(var i=0;i<data.length;i++){
      //     var card = this.bottom_card[i]
      //     var show_data = data[i]
      //     var call_data = {
      //         "obj":card,
      //         "data":show_data,
      //     }
      //     console.log("bottom show_data:"+JSON.stringify(show_data))
      //     var run =  cc.callFunc(function(target,activedata){
      //         var show_card = activedata.obj
      //         var show_data = activedata.data
      //         //console.log("cc.callFunc:"+JSON.stringify(show_data))
      //         show_card.getComponent("card").showCards(show_data)
      //     },this,call_data)
      //     card.runAction(cc.sequence(cc.rotateBy(0,0,180),cc.rotateBy(0.2,0,-90), run,
      //     cc.rotateBy(0.2,0,-90),cc.scaleBy(1, 1.2)));
      //     if(isopen_sound){
      //         cc.audioEngine.play(cc.url.raw("resources/sound/start.mp3")) 
      //      }
      // }
      //this.node.parent.emit("change_room_state_event",RoomState.ROOM_PLAYING)
      //如果自己地主，给加上三张底牌

      if (_mygolbal["default"].playerData.accountID == _mygolbal["default"].playerData.master_accountid) {
        this.scheduleOnce(this.pushThreeCard.bind(this), 0.2);
      }
    }.bind(this)); //注册监听一个选择牌消息 

    this.node.on("choose_card_event", function (event) {
      console.log("choose_card_event:" + JSON.stringify(event));
      var detail = event;
      this.choose_card_data.push(detail);
    }.bind(this));
    this.node.on("unchoose_card_event", function (event) {
      console.log("unchoose_card_event:" + event);
      var detail = event;

      for (var i = 0; i < this.choose_card_data.length; i++) {
        if (this.choose_card_data[i].cardid == detail) {
          this.choose_card_data.splice(i, 1);
        }
      }
    }.bind(this));
  },
  start: function start() {},
  //处理发牌的效果
  _runactive_pushcard: function _runactive_pushcard() {
    //console.log("_runactive_pushcard:"+this.cur_index_card)
    if (this.cur_index_card < 0) {
      console.log("pushcard end"); //发牌动画完成，显示抢地主按钮
      //this.robUI.active = true

      this.fapai_end = true;

      if (this.rob_player_accountid == _mygolbal["default"].playerData.accountID) {
        this.robUI.active = true;
      }

      if (isopen_sound) {
        //console.log("start fapai_audioID"+this.fapai_audioID) 
        cc.audioEngine.stop(this.fapai_audioID);
      } //通知gamescene节点，倒计时


      var sendevent = this.rob_player_accountid; //this.node.parent.emit("canrob_event",sendevent)

      return;
    } //原有逻辑  
    // var move_node = this.cards_nods[this.cur_index_card]
    // move_node.active = true
    // var newx = move_node.x + (this.card_width * 0.4*this.cur_index_card) - (this.card_width * 0.4)
    // var action = cc.moveTo(0.1, cc.v2(newx, -250));
    // move_node.runAction(action)
    // this.cur_index_card--
    // this.scheduleOnce(this._runactive_pushcard.bind(this),0.3)
    // this.cur_index_card=0;


    var move_node = this.cards_nods[this.cards_nods.length - this.cur_index_card - 1];
    if (move_node == null) return;
    move_node.active = true;
    this.push_card_tmp.push(move_node);
    if (isopen_sound) this.fapai_audioID = cc.audioEngine.play(cc.url.raw("resources/sound/fapai1.mp3"));

    for (var i = 0; i < this.push_card_tmp.length - 1; i++) {
      var move_node = this.push_card_tmp[i];
      var newx = move_node.x - this.card_width * 0.4;
      var action = cc.moveTo(0.1, cc.v2(newx, -250));
      move_node.runAction(action);
    }

    this.cur_index_card--; // this._runactive_pushcard.bind(this);

    this.scheduleOnce(this._runactive_pushcard.bind(this), 0.03);
  },
  //对牌排序
  sortCard: function sortCard() {
    this.cards_nods.sort(function (x, y) {
      var a = x.getComponent("card").card_data;
      var b = y.getComponent("card").card_data;

      if (a.hasOwnProperty('value') && b.hasOwnProperty('value')) {
        return b.value - a.value;
      }

      if (a.hasOwnProperty('king') && !b.hasOwnProperty('king')) {
        return -1;
      }

      if (!a.hasOwnProperty('king') && b.hasOwnProperty('king')) {
        return 1;
      }

      if (a.hasOwnProperty('king') && b.hasOwnProperty('king')) {
        return b.king - a.king;
      }
    }); //var x = this.cards_nods[0].x;
    //这里使用固定坐标，因为取this.cards_nods[0].xk可能排序为完成，导致x错误
    //所以做1000毫秒的延时

    var timeout = 1000;
    setTimeout(function () {
      //var x = -417.6 
      var x = this.cards_nods[0].x;
      console.log("sort x:" + x);

      for (var i = 0; i < this.cards_nods.length; i++) {
        var card = this.cards_nods[i];
        card.zIndex = i; //设置牌的叠加次序,zindex越大显示在上面

        card.x = x + card.width * 0.4 * i;
      }
    }.bind(this), timeout);
  },
  pushCard: function pushCard(data) {
    //发牌 
    if (data) {
      data.sort(function (a, b) {
        if (a.hasOwnProperty('value') && b.hasOwnProperty('value')) {
          return b.value - a.value;
        }

        if (a.hasOwnProperty('king') && !b.hasOwnProperty('king')) {
          return -1;
        }

        if (!a.hasOwnProperty('king') && b.hasOwnProperty('king')) {
          return 1;
        }

        if (a.hasOwnProperty('king') && b.hasOwnProperty('king')) {
          return b.king - a.king;
        }
      });
    } //创建card预制体


    this.cards_nods = [];

    for (var i = 0; i < data.length; i++) {
      var card = cc.instantiate(this.card_prefab);
      card.scale = 0.8;
      card.parent = this.mypaiview; //card.x = card.width * 0.4 * (17 - 1) * (-0.5) + card.width * 0.4 * 0;

      card.x = card.width * 0.4 * -0.5 * -16 + card.width * 0.4 * 0; //这里实现为，每发一张牌，放在已经发的牌最后，然后整体移动

      card.y = -250;
      card.active = false;
      card.getComponent("card").showCards(data[i], _mygolbal["default"].playerData.accountID); //存储牌的信息,用于后面发牌效果

      this.cards_nods.push(card);
      this.card_width = card.width;
    } //创建3张底牌


    this.bottom_card = [];

    for (var i = 0; i < 3; i++) {
      var di_card = cc.instantiate(this.card_prefab);
      di_card.scale = 0.4;
      di_card.position.x = this.bottom_card_pos_node.position.x;
      di_card.position.y = 0; //三张牌，中间坐标就是bottom_card_pos_node节点坐标，
      //0,和2两张牌左右移动windth*0.4

      if (i == 0) {
        di_card.x = di_card.x - di_card.width * 0.4;
      } else if (i == 2) {
        di_card.x = di_card.x + di_card.width * 0.4;
      } //di_card.x = di_card.width-i*di_card.width-20
      //di_card.y=60


      di_card.parent = this.bottom_card_pos_node; // this.node.getComponent("gameingUI").dizhupaiview;//this.node.getComponent("dizhupaiview");//  this.node.parent
      //存储在容器里

      this.bottom_card.push(di_card);
    }
  },
  //给玩家发送三张底牌后，过1s,把牌设置到y=-250位置效果
  schedulePushThreeCard: function schedulePushThreeCard() {
    for (var i = 0; i < this.cards_nods.length; i++) {
      var card = this.cards_nods[i];

      if (card.y == -230) {
        card.y = -250;
      }
    }
  },
  //给地主发三张排，并显示在原有牌的后面
  pushThreeCard: function pushThreeCard() {
    //每张牌的其实位置 
    var last_card_x = this.cards_nods[this.cards_nods.length - 1].x;

    for (var i = 0; i < this.bottom_card_data.length; i++) {
      var card = cc.instantiate(this.card_prefab);
      card.scale = 0.8;
      card.parent = this.mypaiview;
      card.x = last_card_x + (i + 1) * this.card_width * 0.4;
      card.y = -230; //先把底盘放在-230，在设置个定时器下移到-250的位置
      //console.log("pushThreeCard x:"+card.x)

      card.getComponent("card").showCards(this.bottom_card_data[i], _mygolbal["default"].playerData.accountID);
      card.active = true;
      this.cards_nods.push(card);
    }

    this.sortCard(); //设置一个定时器，在2s后，修改y坐标为-250

    this.scheduleOnce(this.schedulePushThreeCard.bind(this), 2);
  },
  destoryCard: function destoryCard(accountid, choose_card) {
    if (choose_card.length == 0) {
      return;
    }
    /*出牌逻辑
      1. 将选中的牌 从父节点中移除
      2. 从this.cards_nods 数组中，删除 选中的牌 
      3. 将 “选中的牌” 添加到出牌区域
          3.1 清空出牌区域
          3.2 添加子节点
          3.3 设置scale
          3.4 设置position
      4.  重新设置手中的牌的位置  this.updateCards();
    */
    //1/2步骤删除自己手上的card节点 


    var destroy_card = [];

    for (var i = 0; i < choose_card.length; i++) {
      for (var j = 0; j < this.cards_nods.length; j++) {
        var card_id = this.cards_nods[j].getComponent("card").card_id;

        if (card_id == choose_card[i].cardid) {
          console.log("destroy card id:" + card_id); //this.cards_nods[j].destroy()

          this.cards_nods[j].removeFromParent(true); //this.cards_nods[j].destroy();

          destroy_card.push(this.cards_nods[j]);
          this.cards_nods.splice(j, 1);
        }
      }
    }

    this.appendCardsToOutZone(accountid, destroy_card);
    this.updateCards();
  },
  //清除显示出牌节点全部子节点(就是把出牌的清空)
  clearOutZone: function clearOutZone(accountid) {
    var gameScene_script = this.node.parent.getComponent("gameScene");
    var outCard_node = gameScene_script.getUserOutCardPosByAccount(accountid);

    if (outCard_node == null) {
      return;
    }

    var children = outCard_node.children;

    for (var i = 0; i < children.length; i++) {
      var card = children[i];
      card.destroy();
    }

    outCard_node.removeAllChildren(true);
  },
  //对出的牌做排序
  pushCardSort: function pushCardSort(cards) {
    if (cards.length == 1) {
      return;
    }

    cards.sort(function (x, y) {
      var a = x.getComponent("card").card_data;
      var b = y.getComponent("card").card_data;

      if (a.hasOwnProperty('value') && b.hasOwnProperty('value')) {
        return b.value - a.value;
      }

      if (a.hasOwnProperty('king') && !b.hasOwnProperty('king')) {
        return -1;
      }

      if (!a.hasOwnProperty('king') && b.hasOwnProperty('king')) {
        return 1;
      }

      if (a.hasOwnProperty('king') && b.hasOwnProperty('king')) {
        return b.king - a.king;
      }
    });
  },
  appendOtherCardsToOutZone: function appendOtherCardsToOutZone(outCard_node, cards, yoffset) {
    outCard_node.removeAllChildren(true); //console.log("appendOtherCardsToOutZone length"+cards.length)
    //添加新的子节点

    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      outCard_node.addChild(card, 100 + i); //第二个参数是zorder,保证牌不能被遮住
    } //对出牌进行排序
    //设置出牌节点的坐标


    var zPoint = cards.length / 2; //console.log("appendOtherCardsToOutZone zeroPoint:"+zPoint)

    for (var i = 0; i < cards.length; i++) {
      var cardNode = outCard_node.getChildren()[i];
      var x = (i - zPoint) * 30;
      var y = cardNode.y + yoffset; //因为每个节点需要的Y不一样，做参数传入
      //console.log("-----cardNode: x:"+x+" y:"+y)

      cardNode.setScale(0.5, 0.5);
      cardNode.setPosition(x, y);
    }
  },
  //将 “选中的牌” 添加到出牌区域
  //destroy_card是玩家本次出的牌
  appendCardsToOutZone: function appendCardsToOutZone(accountid, destroy_card) {
    if (destroy_card.length == 0) {} // return
    //先给本次出的牌做一个排序


    this.pushCardSort(destroy_card); //console.log("appendCardsToOutZone")

    var gameScene_script = this.node.parent.getComponent("gameScene"); //获取出牌区域节点

    var outCard_node = gameScene_script.getUserOutCardPosByAccount(accountid);
    this.appendOtherCardsToOutZone(outCard_node, destroy_card, 360); //sconsole.log("OutZone:"+outCard_node.name)
  },
  //重新排序手上的牌,并移动
  updateCards: function updateCards() {
    var zeroPoint = this.cards_nods.length / 2; //var last_card_x = this.cards_nods[this.cards_nods.length-1].x

    for (var i = 0; i < this.cards_nods.length; i++) {
      var cardNode = this.cards_nods[i];
      var x = (i - zeroPoint) * (this.card_width * 0.4);
      cardNode.setPosition(x, -250);
    }
  },
  playPushCardSound: function playPushCardSound(card_name) {
    console.log("playPushCardSound:" + card_name);

    if (card_name == "") {
      return;
    }

    switch (card_name) {
      case CardsValue.one.name:
        break;

      case CardsValue["double"].name:
        if (isopen_sound) {
          cc.audioEngine.play(cc.url.raw("resources/sound/duizi.mp3"));
        }

        break;
    }
  },
  // update (dt) {},
  onButtonClick: function onButtonClick(event, customData) {
    switch (customData) {
      case "btn_qiandz":
        console.log("btn_qiandz");

        _mygolbal["default"].socket.requestRobState(qian_state.qian);

        this.unschedule(this.funUp); //清除 抢地主 定时器

        this.robUI.active = false;

        if (isopen_sound) {
          cc.audioEngine.play(cc.url.raw("resources/sound/woman_jiao_di_zhu.ogg"));
        }

        break;

      case "btn_buqiandz":
        console.log("btn_buqiandz");

        _mygolbal["default"].socket.requestRobState(qian_state.buqiang);

        this.unschedule(this.funUp); //清除 抢地主 定时器

        this.robUI.active = false;

        if (isopen_sound) {
          cc.audioEngine.play(cc.url.raw("resources/sound/woman_bu_jiao.ogg"));
        }

        break;

      case "nopushcard":
        //不出牌
        _mygolbal["default"].socket.request_buchu_card([], null);

        this.playingUI_node.active = false;
        this.unschedule(this.funUp1); // 清除 出牌定时器

        break;

      case "pushcard":
        //出牌
        //先获取本次出牌数据
        if (this.choose_card_data.length == 0) {
          this.tipsLabel.string = "请选择牌!";
          this.playingUI_node.active = true;
          setTimeout(function () {
            this.tipsLabel.string = "";
          }.bind(this), 2000);
          return; // 不出牌 则返回
        }

        this.unschedule(this.funUp1); // 清除 出牌定时器

        _mygolbal["default"].socket.request_chu_card(this.choose_card_data, function (err, data) {
          if (err) {
            console.log("request_chu_card:" + err);
            console.log("request_chu_card" + JSON.stringify(data));

            if (this.tipsLabel.string == "") {
              this.tipsLabel.string = data.msg;
              setTimeout(function () {
                this.tipsLabel.string = "";
              }.bind(this), 2000);
            } //出牌失败，把选择的牌归位


            for (var i = 0; i < this.cards_nods.length; i++) {
              var card = this.cards_nods[i];
              card.emit("reset_card_flag");
            }

            this.choose_card_data = [];
          } else {
            //出牌成功
            console.log("resp_chu_card data:" + JSON.stringify(data));
            this.playingUI_node.active = false; //播放出牌的声音
            //resp_chu_card data:{"account":"2519901","msg":"sucess","cardvalue":{"name":"Double","value":1}}
            //{"type":"other_chucard_notify","result":0,"data":{"accountid":"2519901","cards":[{"cardid":24,"card_data":{"index":24,"value":6,"shape":1}},{"cardid":26,"card_data":{"index":26,"value":6,"shape":3}}]},"callBackIndex":0}

            this.playPushCardSound(data.cardvalue.name);
            this.destoryCard(data.account, this.choose_card_data);
            this.choose_card_data = [];
          }
        }.bind(this)); //this.playingUI_node.active = false


        break;

      case "tipcard":
        break;

      case "returnroom":
        //重新连接
        //   console.log("点击了 重新连接")
        //  myglobal.socket.initSocket(function(){
        // 	  console.log("初始化 成功 initSocket")
        //  myglobal.api.login(function(data){
        //    console.log("自动登录成功")
        //      var gameScene_script = this.node.parent.getComponent("gameScene")
        //         myglobal.socket.request_re_room({"roomid":gameScene_script.roomid},function(err,data){
        // 	  //重新连接
        // 		 if(err==0){
        // 		 this.returnroom.active=false;
        // 		 console.log("重新进入房间 成功"+JSON.stringify(data));
        // 		 }else{
        // 			 console.log("重新进入房间 失败"+err);
        // 		 }
        //      }.bind(this))
        //   }.bind(this))
        //   }.bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVTY2VuZS9nYW1laW5nVUkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJnYW1laW5nVUkiLCJOb2RlIiwiY2FyZF9wcmVmYWIiLCJQcmVmYWIiLCJyb2JVSSIsImJvdHRvbV9jYXJkX3Bvc19ub2RlIiwicGxheWluZ1VJX25vZGUiLCJ0aXBzTGFiZWwiLCJMYWJlbCIsIm15cGFpdmlldyIsInJldHVybnJvb20iLCJjbG9ja19sYWJlbCIsInBsYXlpbmdfY2xvY2tfbGFiZWwiLCJSZXNldFVJIiwiVG9hc3QiLCJzaG93IiwibXlnbG9iYWwiLCJzb2NrZXQiLCJyZXF1ZXN0UmVhZHkiLCJSZXNldFVJXyIsImNhcmRzX25vZHMiLCJjYXJkX3dpZHRoIiwicm9iX3BsYXllcl9hY2NvdW50aWQiLCJmYXBhaV9lbmQiLCJib3R0b21fY2FyZCIsImJvdHRvbV9jYXJkX2RhdGEiLCJjaG9vc2VfY2FyZF9kYXRhIiwib3V0Y2FyX3pvbmUiLCJwdXNoX2NhcmRfdG1wIiwiYWN0aXZlIiwidW5zY2hlZHVsZUFsbENhbGxiYWNrcyIsImdhbWVTY2VuZV9zY3JpcHQiLCJub2RlIiwicGFyZW50IiwiZ2V0Q29tcG9uZW50IiwiaSIsInBsYXllck5vZGVMaXN0IiwibGVuZ3RoIiwiZ2V0Q2hpbGRCeU5hbWUiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImNsZWFyT3V0Wm9uZSIsImFjY291bnRpZCIsImdhbWViZWZvcmVfbm9kZSIsImVtaXQiLCJzaG93X215Y2FyZHMiLCJkYXRhIiwiY2FyZF9kYXRhIiwiY3VyX2luZGV4X2NhcmQiLCJwdXNoQ2FyZCIsImlzb3Blbl9zb3VuZCIsInNjaGVkdWxlT25jZSIsIl9ydW5hY3RpdmVfcHVzaGNhcmQiLCJiaW5kIiwic2hvd19ib3R0b21fY2FyZHMiLCJjYXJkIiwic2hvd19kYXRhIiwiY2FsbF9kYXRhIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJydW4iLCJjYWxsRnVuYyIsInRhcmdldCIsImFjdGl2ZWRhdGEiLCJzaG93X2NhcmQiLCJvYmoiLCJzaG93Q2FyZHMiLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsInJvdGF0ZUJ5Iiwic2NhbGVCeSIsImF1ZGlvRW5naW5lIiwicGxheSIsInVybCIsInJhdyIsIm5vd193aG9jYW5fY2h1cGFpIiwidW5zY2hlZHVsZSIsImZ1blVwMSIsIl9hY2NvdW50SUQiLCJwbGF5ZXJEYXRhIiwiYWNjb3VudElEIiwic3RyaW5nIiwibmV4dF90aW1lIiwibm93Iiwic2NoZWR1bGUiLCJzaG93X2NodXBhaSIsIm91dENhcmRfbm9kZSIsImdldFVzZXJPdXRDYXJkUG9zQnlBY2NvdW50Iiwibm9kZV9jYXJkcyIsImNhcmRzIiwiaW5zdGFudGlhdGUiLCJwdXNoIiwiYXBwZW5kT3RoZXJDYXJkc1RvT3V0Wm9uZSIsImZ1blVwIiwib25Mb2FkIiwib25QdXNoQ2FyZHMiLCJvbkNhblJvYlN0YXRlIiwib25DYW5DaHVDYXJkIiwib25HYW1lRmluaXNoIiwiQWxlcnQiLCJ5b3VfZHRfc2NvcmUiLCJvbk90aGVyUGxheWVyQ2h1Q2FyZCIsIm9uIiwibWFzdGVyX2FjY291bnRpZCIsInB1c2hUaHJlZUNhcmQiLCJldmVudCIsImRldGFpbCIsImNhcmRpZCIsInNwbGljZSIsInN0YXJ0Iiwic3RvcCIsImZhcGFpX2F1ZGlvSUQiLCJzZW5kZXZlbnQiLCJtb3ZlX25vZGUiLCJuZXd4IiwieCIsImFjdGlvbiIsIm1vdmVUbyIsInYyIiwic29ydENhcmQiLCJzb3J0IiwieSIsImEiLCJiIiwiaGFzT3duUHJvcGVydHkiLCJ2YWx1ZSIsImtpbmciLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsInpJbmRleCIsIndpZHRoIiwic2NhbGUiLCJkaV9jYXJkIiwicG9zaXRpb24iLCJzY2hlZHVsZVB1c2hUaHJlZUNhcmQiLCJsYXN0X2NhcmRfeCIsImRlc3RvcnlDYXJkIiwiY2hvb3NlX2NhcmQiLCJkZXN0cm95X2NhcmQiLCJqIiwiY2FyZF9pZCIsInJlbW92ZUZyb21QYXJlbnQiLCJhcHBlbmRDYXJkc1RvT3V0Wm9uZSIsInVwZGF0ZUNhcmRzIiwiY2hpbGRyZW4iLCJkZXN0cm95IiwicHVzaENhcmRTb3J0IiwieW9mZnNldCIsImFkZENoaWxkIiwielBvaW50IiwiY2FyZE5vZGUiLCJnZXRDaGlsZHJlbiIsInNldFNjYWxlIiwic2V0UG9zaXRpb24iLCJ6ZXJvUG9pbnQiLCJwbGF5UHVzaENhcmRTb3VuZCIsImNhcmRfbmFtZSIsIkNhcmRzVmFsdWUiLCJvbmUiLCJuYW1lIiwib25CdXR0b25DbGljayIsImN1c3RvbURhdGEiLCJyZXF1ZXN0Um9iU3RhdGUiLCJxaWFuX3N0YXRlIiwicWlhbiIsImJ1cWlhbmciLCJyZXF1ZXN0X2J1Y2h1X2NhcmQiLCJyZXF1ZXN0X2NodV9jYXJkIiwiZXJyIiwibXNnIiwiY2FyZHZhbHVlIiwiYWNjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFFSixFQUFFLENBQUNLLElBRE47QUFFUkMsSUFBQUEsV0FBVyxFQUFDTixFQUFFLENBQUNPLE1BRlA7QUFHUkMsSUFBQUEsS0FBSyxFQUFDUixFQUFFLENBQUNLLElBSEQ7QUFJUkksSUFBQUEsb0JBQW9CLEVBQUNULEVBQUUsQ0FBQ0ssSUFKaEI7QUFLUkssSUFBQUEsY0FBYyxFQUFDVixFQUFFLENBQUNLLElBTFY7QUFNUk0sSUFBQUEsU0FBUyxFQUFDWCxFQUFFLENBQUNZLEtBTkw7QUFNWTtBQUNwQkMsSUFBQUEsU0FBUyxFQUFDYixFQUFFLENBQUNLLElBUEw7QUFRZFMsSUFBQUEsVUFBVSxFQUFDZCxFQUFFLENBQUNLLElBUkE7QUFTZFUsSUFBQUEsV0FBVyxFQUFDZixFQUFFLENBQUNZLEtBVEQ7QUFVZEksSUFBQUEsbUJB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QUFDSDs7QUFDRCxpQkFBS2pCLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0YsV0FoQkYsTUFnQk07QUFDRDtBQUNBK0IsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQXNCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWYsSUFBZixDQUFsQztBQUNBLGlCQUFLdkMsY0FBTCxDQUFvQnVCLE1BQXBCLEdBQTZCLEtBQTdCLENBSEMsQ0FJRDtBQUNBO0FBQ0E7O0FBQ0EsaUJBQUsrSCxpQkFBTCxDQUF1Qi9HLElBQUksQ0FBQzhILFNBQUwsQ0FBZVgsSUFBdEM7QUFDQSxpQkFBS3ZCLFdBQUwsQ0FBaUI1RixJQUFJLENBQUMrSCxPQUF0QixFQUE4QixLQUFLbEosZ0JBQW5DO0FBQ0EsaUJBQUtBLGdCQUFMLEdBQXdCLEVBQXhCO0FBRUg7QUFFSixTQS9Cc0QsQ0ErQnJEMEIsSUEvQnFELENBK0JoRCxJQS9CZ0QsQ0FBdkQsRUFaSixDQTRDSTs7O0FBQ0E7O0FBQ0osV0FBSyxTQUFMO0FBQ0k7O0FBQ2QsV0FBSyxZQUFMO0FBQWtCO0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQzs7QUFDTztBQUNJO0FBbkdSO0FBcUdIO0FBaDFCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlnbG9iYWwgZnJvbSBcIi4uL215Z29sYmFsLmpzXCJcbmltcG9ydCBzb2NrZXRjdHIgZnJvbSBcIi4uL2RhdGEvc29ja2V0X2N0ci5qc1wiXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBnYW1laW5nVUk6IGNjLk5vZGUsXG4gICAgICAgIGNhcmRfcHJlZmFiOmNjLlByZWZhYixcbiAgICAgICAgcm9iVUk6Y2MuTm9kZSxcbiAgICAgICAgYm90dG9tX2NhcmRfcG9zX25vZGU6Y2MuTm9kZSxcbiAgICAgICAgcGxheWluZ1VJX25vZGU6Y2MuTm9kZSxcbiAgICAgICAgdGlwc0xhYmVsOmNjLkxhYmVsLCAvL+eOqeWutuWHuueJjOS4jeWQiOazleeahHRpcHNcbiAgICAgICAgbXlwYWl2aWV3OmNjLk5vZGUgICxcblx0XHRyZXR1cm5yb29tOmNjLk5vZGUsXG5cdFx0Y2xvY2tfbGFiZWw6Y2MuTGFiZWwsXG5cdFx0cGxheWluZ19jbG9ja19sYWJlbDpjYy5MYWJlbFxuXHRcdFxuICAgIH0sXG4gICAgUmVzZXRVSSgpey8v5rWL6K+V5oyJ6ZKuXG5cdFxuXHQgVG9hc3Quc2hvdyhcIua1i+ivleaMiemSrlwiKTsgXG5cdCBteWdsb2JhbC5zb2NrZXQucmVxdWVzdFJlYWR5KClcblx0Ly9teWdsb2JhbC5zb2NrZXQuX3NvY2tldC5jbG9zZSgpO1xuXHQgLy8gICAgbXlnbG9iYWwuc29ja2V0LnJlcXVlc3RfcmVzZXQoZnVuY3Rpb24oZGF0YSl7XG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhcIumHjee9rua4uOaIjyDov5Tlm55cIitkYXRhKTtcblx0XHQvLyBcdC8vdGhpcy5SZXNldFVJXygpO1xuXHRcdC8vIH0uYmluZCh0aGlzKSlcdFxuXHR9LFxuXHRcblx0UmVzZXRVSV8oKXtcblx0XHQvL+iHquW3seeJjOWIl+ihqFxuXHRcdHRoaXMuY2FyZHNfbm9kcyA9IFtdXG5cdFx0dGhpcy5jYXJkX3dpZHRoID0gMFxuXHRcdC8v5b2T5YmN5Y+v5Lul5oqi5Zyw5Li755qEYWNjb3VudGlkXG5cdFx0dGhpcy5yb2JfcGxheWVyX2FjY291bnRpZCA9IDBcblx0XHQvL+WPkeeJjOWKqOeUu+aYr+WQpue7k+adn1xuXHRcdHRoaXMuZmFwYWlfZW5kID0gZmFsc2Vcblx0XHQvL+W6leeJjOaVsOe7hFxuXHRcdHRoaXMuYm90dG9tX2NhcmQgPSBbXVxuXHRcdC8v5bqV54mM55qEanNvbuWvueixoeaVsOaNrlxuXHRcdHRoaXMuYm90dG9tX2NhcmRfZGF0YT1bXVxuXHRcdHRoaXMuY2hvb3NlX2NhcmRfZGF0YT1bXVxuXHRcdHRoaXMub3V0Y2FyX3pvbmUgPSBbXVxuXHRcdFxuXHRcdHRoaXMucHVzaF9jYXJkX3RtcCA9IFtdXG5cdFx0XG5cdFx0Ly90aGlzLnJvYlVJLnJlbW92ZUFsbENoaWxkcmVuKCk7XG5cdFx0IHRoaXMucm9iVUkuYWN0aXZlPSBmYWxzZTtcblx0XHQgdGhpcy5wbGF5aW5nVUlfbm9kZS5hY3RpdmU9ZmFsc2U7XG5cdFx0Ly9jYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lU2NlbmVcIilcblx0XHRcblx0XHQvL+WFiOa4heeQhuWHuueJjOWMuuWfn1xuXHRcdFxuXHRcdHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpLy/muIXpmaTmiYDmnInlrprml7blmahcblx0XHRcblx0XHR2YXIgZ2FtZVNjZW5lX3NjcmlwdCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiZ2FtZVNjZW5lXCIpXG5cdFx0Zm9yKHZhciBpPTA7aTwgZ2FtZVNjZW5lX3NjcmlwdC5wbGF5ZXJOb2RlTGlzdC5sZW5ndGg7aSsrKXtcblx0XHRcdGdhbWVTY2VuZV9zY3JpcHQucGxheWVyTm9kZUxpc3RbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJjYXJkX25vZGVcIikucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XG5cdFx0XHQvL2dhbWVTY2VuZV9zY3JpcHQucGxheWVyTm9kZUxpc3RbaV0udW5zY2hlZHVsZUFsbENhbGxiYWNrcygpLy/muIXpmaTmiYDmnInlrprml7blmahcblx0XHRcdHRoaXMuY2xlYXJPdXRab25lKGdhbWVTY2VuZV9zY3JpcHQucGxheWVyTm9kZUxpc3RbaV0uZ2V0Q29tcG9uZW50KFwicGxheWVyX25vZGVcIikuYWNjb3VudGlkKVxuXHRcdH1cblx0XHRcblx0XHRcblx0XHRcblx0XHR0aGlzLmJvdHRvbV9jYXJkX3Bvc19ub2RlLnJlbW92ZUFsbENoaWxkcmVuKHRydWUpO1xuXHRcdHRoaXMubXlwYWl2aWV3LnJlbW92ZUFsbENoaWxkcmVuKHRydWUpO1xuXHRcdFxuXHRcdC8vIHZhciBnYW1lYmVmb3JlX25vZGUgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiZ2FtZWJlZm9yZVVJXCIpXG5cdFx0Ly8gaWYoZ2FtZVNjZW5lX3NjcmlwdC5yb29tc3RhdGU8Um9vbVN0YXRlLlJPT01fR0FNRVNUQVJUKXsvL+a4uOaIj+S4rVxuXHRcdC8vICAgICBnYW1lYmVmb3JlX25vZGUuYWN0aXZlPXRydWU7XG5cdFx0Ly8gXHRnYW1lYmVmb3JlX25vZGUuZW1pdChcImluaXRcIilcblx0XHQvLyB9XG5cdFx0Ly8gZWxzZXtcblx0XHQvLyAgICAgZ2FtZWJlZm9yZV9ub2RlLmFjdGl2ZSA9ICBmYWxzZVxuXHRcdC8vIH1cblx0XHR2YXIgZ2FtZWJlZm9yZV9ub2RlID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImdhbWViZWZvcmVVSVwiKVxuXHRcdGdhbWViZWZvcmVfbm9kZS5hY3RpdmU9dHJ1ZTtcblx0XHRnYW1lYmVmb3JlX25vZGUuZW1pdChcImluaXRcIilcblx0XHRcblx0XHRcblx0fSxcblx0XG5cdHNob3dfbXljYXJkcyhkYXRhKXsvL+aYvuekuuaIkeeahOaJi+eJjFxuXHQgICB0aGlzLmNhcmRfZGF0YSA9IGRhdGFcblx0ICAgdGhpcy5jdXJfaW5kZXhfY2FyZCA9IGRhdGEubGVuZ3RoIC0gMVxuXHQgICB0aGlzLnB1c2hDYXJkKGRhdGEpXG5cdCAgIGlmKGlzb3Blbl9zb3VuZCl7XG5cdCAgICAvL+W+queOr+aSreaUvuWPkeeJjOmfs+aViFxuXHQgICAgICAgLy90aGlzLmZhcGFpX2F1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvc291bmQvZmFwYWkxLm1wM1wiKSx0cnVlKVxuXHQgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGFydCBmYXBhaV9hdWRpb0lEXCIrdGhpcy5mYXBhaV9hdWRpb0lEKSBcblx0ICAgIH1cblx0IC8v5bem6L6556e75Yqo5a6a5pe25ZmoXG5cdCAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLl9ydW5hY3RpdmVfcHVzaGNhcmQuYmluZCh0aGlzKSwwLjMpXG5cdCAgICB0aGlzLm5vZGUucGFyZW50LmVtaXQoXCJwdXNoY2FyZF9vdGhlcl9ldmVudFwiKVx0XG5cdH0sXG5cdHNob3dfYm90dG9tX2NhcmRzKGRhdGEpey8v5pi+56S65Zyw5Li754mMXG5cdFx0XG5cdFx0dGhpcy5ib3R0b21fY2FyZF9kYXRhID0gZGF0YVxuXHRcdFxuXHRcdGZvcih2YXIgaT0wO2k8ZGF0YS5sZW5ndGg7aSsrKXtcblx0XHQgICAgdmFyIGNhcmQgPSB0aGlzLmJvdHRvbV9jYXJkW2ldXG5cdFx0ICAgIHZhciBzaG93X2RhdGEgPSBkYXRhW2ldXG5cdFx0ICAgIHZhciBjYWxsX2RhdGEgPSB7XG5cdFx0ICAgICAgICBcIm9ialwiOmNhcmQsXG5cdFx0ICAgICAgICBcImRhdGFcIjpzaG93X2RhdGEsXG5cdFx0ICAgIH1cblx0XHQgICAgY29uc29sZS5sb2coXCJib3R0b20gc2hvd19kYXRhOlwiK0pTT04uc3RyaW5naWZ5KHNob3dfZGF0YSkpXG5cdFx0ICAgIHZhciBydW4gPSAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0LGFjdGl2ZWRhdGEpe1xuXHRcdCAgICAgICBcblx0XHQgICAgICAgIHZhciBzaG93X2NhcmQgPSBhY3RpdmVkYXRhLm9ialxuXHRcdCAgICAgICAgdmFyIHNob3dfZGF0YSA9IGFjdGl2ZWRhdGEuZGF0YVxuXHRcdCAgICAgICAgLy9jb25zb2xlLmxvZyhcImNjLmNhbGxGdW5jOlwiK0pTT04uc3RyaW5naWZ5KHNob3dfZGF0YSkpXG5cdFx0ICAgICAgICBzaG93X2NhcmQuZ2V0Q29tcG9uZW50KFwiY2FyZFwiKS5zaG93Q2FyZHMoc2hvd19kYXRhKVxuXHRcdCAgICAgICBcblx0XHQgICAgfSx0aGlzLGNhbGxfZGF0YSlcblx0XHRcblx0XHQgICAgY2FyZC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Mucm90YXRlQnkoMCwwLDE4MCksY2Mucm90YXRlQnkoMC4yLDAsLTkwKSwgcnVuLFxuXHRcdCAgICBjYy5yb3RhdGVCeSgwLjIsMCwtOTApLGNjLnNjYWxlQnkoMSwgMS4yKSkpO1xuXHRcdCAgIFxuXHRcdCAgICBpZihpc29wZW5fc291bmQpe1xuXHRcdCAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kL3N0YXJ0Lm1wM1wiKSkgXG5cdFx0ICAgICB9XG5cdFx0fVxuXHRcdFxuXHR9LFxuXHRcblx0bm93X3dob2Nhbl9jaHVwYWkoZGF0YSl7Ly8g546w5Zyo6LCB5Ye654mMXG5cdFx0dGhpcy51bnNjaGVkdWxlKHRoaXMuZnVuVXAxKTtcblx0XHRcblx0XHRpZihkYXRhLl9hY2NvdW50SUQ9PW15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKXtcblx0XHRcdC8v5pi+56S65Y+v5Lul5Ye654mM55qEVUlcblx0XHRcdHRoaXMucGxheWluZ1VJX25vZGUuYWN0aXZlID0gdHJ1ZVxuXHRcdCAgICAvL+WFiOa4heeQhuWHuueJjOWMuuWfn1xuXHRcdCAgICB0aGlzLmNsZWFyT3V0Wm9uZShteWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRClcblx0XHQgICAgLy/lhYjmioroh6rlt7Hlh7rniYzliJfooajnva7nqbpcblx0XHQgICAgLy90aGlzLmNob29zZV9jYXJkX2RhdGE9W11cblx0XHRcdFxuXHRcdFx0dGhpcy5wbGF5aW5nX2Nsb2NrX2xhYmVsLnN0cmluZz1cIlwiKyhkYXRhLm5leHRfdGltZS1kYXRhLm5vdyk7XG5cdFx0XHR0aGlzLm5leHRfdGltZT0gZGF0YS5uZXh0X3RpbWVcblx0XHRcdHRoaXMubm93PWRhdGEubm93O1xuXHRcdFx0Ly8gbGV0IGZ1blVwMSA9IGZ1bmN0aW9uKCl7XG5cdFx0XHQvLyBcdHRoaXMubm93Kz0xO1xuXHRcdFx0Ly8gXHRpZih0aGlzLm5leHRfdGltZS10aGlzLm5vdz4wKXtcblx0XHRcdC8vIFx0XHR0aGlzLnBsYXlpbmdfY2xvY2tfbGFiZWwuc3RyaW5nPVwiXCIrKHRoaXMubmV4dF90aW1lLXRoaXMubm93KTtcblx0XHRcdFx0XG5cdFx0XHQvLyBcdH1lbHNle1xuXHRcdFx0Ly8gXHRcdHRoaXMucGxheWluZ1VJX25vZGUuYWN0aXZlID0gZmFsc2Vcblx0XHRcdC8vIFx0XHQvL3RoaXMudW5zY2hlZHVsZShmdW5VcCk7XG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIH0uYmluZCh0aGlzKTtcblx0XHRcdC8vIHRoaXMudW5zY2hlZHVsZSh0aGlzLmZ1blVwMSk7XG5cdFx0XHQgdGhpcy5zY2hlZHVsZSh0aGlzLmZ1blVwMSwxKTtcblx0XHR9ZWxzZXtcblx0XHRcdC8v6ZqQ6JeP5Y+v5Lul5Ye654mM55qEVUlcblx0XHRcdHRoaXMucGxheWluZ1VJX25vZGUuYWN0aXZlID0gZmFsc2Vcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5ub2RlLnBhcmVudC5lbWl0KFwib25DYW5DaHVDYXJkX2dhbWVTY2VuZVwiLGRhdGEpO1xuXHRcdFxuXHRcdFxuXHR9LFxuXHRzaG93X2NodXBhaShkYXRhKXsvLyDmmL7npLrnjqnlrrblh7rniYxcblx0XHR2YXIgYWNjb3VudGlkID0gZGF0YS5hY2NvdW50aWRcblx0XHR2YXIgZ2FtZVNjZW5lX3NjcmlwdCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiZ2FtZVNjZW5lXCIpXG5cdFx0Ly/ojrflj5blh7rniYzljLrln5/oioLngrlcblx0XHR2YXIgb3V0Q2FyZF9ub2RlID0gZ2FtZVNjZW5lX3NjcmlwdC5nZXRVc2VyT3V0Q2FyZFBvc0J5QWNjb3VudChhY2NvdW50aWQpXG5cdFx0aWYob3V0Q2FyZF9ub2RlPT1udWxsKXtcblx0XHQgICAgcmV0dXJuXG5cdFx0fVxuXHRcdFxuXHRcdHZhciBub2RlX2NhcmRzID0gW11cblx0XHRmb3IodmFyIGk9MDtpPGRhdGEuY2FyZHMubGVuZ3RoO2krKyl7XG5cdFx0ICAgIHZhciBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkX3ByZWZhYilcblx0XHQgICAgY2FyZC5nZXRDb21wb25lbnQoXCJjYXJkXCIpLnNob3dDYXJkcyhkYXRhLmNhcmRzW2ldLmNhcmRfZGF0YSxteWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRClcblx0XHQgICAgbm9kZV9jYXJkcy5wdXNoKGNhcmQpXG5cdFx0fVxuXHRcdHRoaXMuYXBwZW5kT3RoZXJDYXJkc1RvT3V0Wm9uZShvdXRDYXJkX25vZGUsbm9kZV9jYXJkcywwKVxuXHR9LFxuXHRmdW5VcCAoKXtcblx0XHRcdFx0XHR0aGlzLm5vdysrO1xuXHRcdFx0XHRcdGlmKHRoaXMubmV4dF90aW1lLXRoaXMubm93Pj0wKXtcblx0XHRcdFx0XHRcdHRoaXMuY2xvY2tfbGFiZWwuc3RyaW5nPVwiXCIrKHRoaXMubmV4dF90aW1lLXRoaXMubm93KTtcblx0XHRcdFx0XHRcdC8vdGhpcy5zY2hlZHVsZU9uY2UoZnVuVXAsMSkgXG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHR0aGlzLnJvYlVJLmFjdGl2ZSA9IGZhbHNlXG5cdFx0XHRcdFx0ICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5mdW5VcCk7XG5cdFx0XHRcdFx0fVxuXHR9LFxuXHRmdW5VcDEoKXtcblx0XHR0aGlzLm5vdys9MTtcblx0XHRpZih0aGlzLm5leHRfdGltZS10aGlzLm5vdz4wKXtcblx0XHRcdHRoaXMucGxheWluZ19jbG9ja19sYWJlbC5zdHJpbmc9XCJcIisodGhpcy5uZXh0X3RpbWUtdGhpcy5ub3cpO1xuXHRcdFxuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5wbGF5aW5nVUlfbm9kZS5hY3RpdmUgPSBmYWxzZVxuXHRcdFx0dGhpcy51bnNjaGVkdWxlKHRoaXMuZnVuVXAxKTtcblx0XHR9XG5cdH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy/oh6rlt7HniYzliJfooaggXG4gICAgICAgIC8vIHRoaXMuY2FyZHNfbm9kcyA9IFtdXG4gICAgICAgIC8vIHRoaXMuY2FyZF93aWR0aCA9IDBcbiAgICAgICAgLy8gLy/lvZPliY3lj6/ku6XmiqLlnLDkuLvnmoRhY2NvdW50aWRcbiAgICAgICAgLy8gdGhpcy5yb2JfcGxheWVyX2FjY291bnRpZCA9IDBcbiAgICAgICAgLy8gLy/lj5HniYzliqjnlLvmmK/lkKbnu5PmnZ9cbiAgICAgICAgLy8gdGhpcy5mYXBhaV9lbmQgPSBmYWxzZVxuICAgICAgICAvLyAvL+W6leeJjOaVsOe7hFxuICAgICAgICAvLyB0aGlzLmJvdHRvbV9jYXJkID0gW11cbiAgICAgICAgLy8gLy/lupXniYznmoRqc29u5a+56LGh5pWw5o2uXG4gICAgICAgIC8vIHRoaXMuYm90dG9tX2NhcmRfZGF0YT1bXVxuICAgICAgICAvLyB0aGlzLmNob29zZV9jYXJkX2RhdGE9W11cbiAgICAgICAgLy8gdGhpcy5vdXRjYXJfem9uZSA9IFtdXG5cbiAgICAgICAgLy8gdGhpcy5wdXNoX2NhcmRfdG1wID0gW11cblx0XHR0aGlzLlJlc2V0VUlfKCk7XG4gICAgICAgIC8v55uR5ZCs5pyN5Yqh5ZmoOuS4i+WPkeeJjOa2iOaBr1xuICAgICAgICBteWdsb2JhbC5zb2NrZXQub25QdXNoQ2FyZHMoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uUHVzaENhcmRzXCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG5cdFx0XHR0aGlzLnNob3dfbXljYXJkcyhkYXRhKVxuICAgICAgICAgICAgLy8gdGhpcy5jYXJkX2RhdGEgPSBkYXRhXG4gICAgICAgICAgICAvLyB0aGlzLmN1cl9pbmRleF9jYXJkID0gZGF0YS5sZW5ndGggLSAxXG4gICAgICAgICAgICAvLyB0aGlzLnB1c2hDYXJkKGRhdGEpXG4gICAgICAgICAgICAvLyBpZihpc29wZW5fc291bmQpe1xuICAgICAgICAgICAgLy8gICAgIC8v5b6q546v5pKt5pS+5Y+R54mM6Z+z5pWIXG4gICAgICAgICAgICAvLyAgICAvLyB0aGlzLmZhcGFpX2F1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvc291bmQvZmFwYWkxLm1wM1wiKSx0cnVlKVxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwic3RhcnQgZmFwYWlfYXVkaW9JRFwiK3RoaXMuZmFwYWlfYXVkaW9JRCkgXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyAgLy/lt6bovrnnp7vliqjlrprml7blmahcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuX3J1bmFjdGl2ZV9wdXNoY2FyZC5iaW5kKHRoaXMpLDAuMylcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5wYXJlbnQuZW1pdChcInB1c2hjYXJkX290aGVyX2V2ZW50XCIpXG4gICAgICAgICAgIFxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgICAgLy/nm5HlkKzmnI3liqHlmag66YCa55+l5oqi5Zyw5Li75raI5oGvLOaYvuekuuebuOW6lOeahFVJXG4gICAgICAgIG15Z2xvYmFsLnNvY2tldC5vbkNhblJvYlN0YXRlKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbkNhblJvYlN0YXRlXCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgICAvL+i/memHjOmcgOimgTLkuKrlj5jph4/mnaHku7bvvJroh6rlt7HmmK/kuIvkuIDkuKrmiqLlnLDkuLvvvIwy5Y+R54mM5Yqo55S757uT5p2fXG4gICAgICAgICAgICB0aGlzLnJvYl9wbGF5ZXJfYWNjb3VudGlkID0gZGF0YS5fYWNjb3VudElEXG4gICAgICAgICAgIC8vIGlmKGRhdGEuX2FjY291bnRJRD09bXlnbG9iYWwucGxheWVyRGF0YS5hY2NvdW50SUQgJiYgdGhpcy5mYXBhaV9lbmQ9PXRydWUpe1xuXHRcdCAgICBpZihkYXRhLl9hY2NvdW50SUQ9PW15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEICl7XG5cdFx0XHRcdFxuICAgICAgICAgICAgICAgIHRoaXMucm9iVUkuYWN0aXZlID0gdHJ1ZVxuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5jbG9ja19sYWJlbC5zdHJpbmc9XCJcIisoZGF0YS5uZXh0X3RpbWUtZGF0YS5ub3cpO1xuXHRcdFx0XHR0aGlzLm5leHRfdGltZT0gZGF0YS5uZXh0X3RpbWU7XG5cdFx0XHRcdHRoaXMubm93PWRhdGEubm93O1xuXHRcdFx0XHQvLyBsZXQgZnVuVXAgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHQvLyBcdGRhdGEubm93Kys7XG5cdFx0XHRcdC8vIFx0aWYoZGF0YS5uZXh0X3RpbWUtZGF0YS5ub3c+PTApe1xuXHRcdFx0XHQvLyBcdFx0dGhpcy5jbG9ja19sYWJlbC5zdHJpbmc9XCJcIisoZGF0YS5uZXh0X3RpbWUtZGF0YS5ub3cpO1xuXHRcdFx0XHQvLyBcdFx0Ly90aGlzLnNjaGVkdWxlT25jZShmdW5VcCwxKSBcblx0XHRcdFx0Ly8gXHR9ZWxzZXtcblx0XHRcdFx0Ly8gXHRcdHRoaXMucm9iVUkuYWN0aXZlID0gZmFsc2Vcblx0XHRcdFx0Ly8gXHRcdC8vdGhpcy51bnNjaGVkdWxlKGZ1blVwKTtcblx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdC8vIH0uYmluZCh0aGlzKTtcblx0XHRcdFx0dGhpcy51bnNjaGVkdWxlKHRoaXMuZnVuVXApO1xuXHRcdFx0XHQgdGhpcy5zY2hlZHVsZSh0aGlzLmZ1blVwLCAxKTtcblxuICAgICAgICAgICAgfWVsc2V7XG5cdFx0XHRcdHRoaXMucm9iVUkuYWN0aXZlID0gZmFsc2Vcblx0XHRcdH1cblx0XHRcdHRoaXMubm9kZS5wYXJlbnQuZW1pdChcImNhbnJvYl9ldmVudFwiLGRhdGEpO1xuXHRcdFx0XG4gICAgICAgICAgXG4gICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgXG4gICAgICAgIC8v55uR5ZCs5pyN5Yqh5Zmo5Y+v5Lul5Ye654mM5raI5oGvXG4gICAgICAgIG15Z2xvYmFsLnNvY2tldC5vbkNhbkNodUNhcmQoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2FuQ2h1Q2FyZCBnYW1laW5nVUlcIitKU09OLnN0cmluZ2lmeShkYXRhKSlcblx0XHRcdGNvbnNvbGUubG9nKFwiXCIpXG5cdFx0XHRcblx0XHRcdHRoaXMubm93X3dob2Nhbl9jaHVwYWkoZGF0YSlcbiAgICAgICAgICAgIC8v5Yik5pat5piv5LiN5piv6Ieq5bex6IO95Ye654mMXG4gICAvLyAgICAgICAgICBpZihkYXRhLl9hY2NvdW50SUQ9PW15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKXtcblx0XHRcdC8vIFx0Ly/mmL7npLrlj6/ku6Xlh7rniYznmoRVSVxuXHRcdFx0Ly8gXHR0aGlzLnBsYXlpbmdVSV9ub2RlLmFjdGl2ZSA9IHRydWVcbiAgIC8vICAgICAgICAgICAgICAvL+WFiOa4heeQhuWHuueJjOWMuuWfn1xuICAgLy8gICAgICAgICAgICAgIHRoaXMuY2xlYXJPdXRab25lKG15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKVxuICAgLy8gICAgICAgICAgICAgIC8v5YWI5oqK6Ieq5bex5Ye654mM5YiX6KGo572u56m6XG4gICAvLyAgICAgICAgICAgICAgLy90aGlzLmNob29zZV9jYXJkX2RhdGE9W11cbiAgICAgICAgICAgICAgICBcbiAgIFxuXHRcdFx0XHRcblx0XHRcdC8vIFx0dGhpcy5wbGF5aW5nX2Nsb2NrX2xhYmVsLnN0cmluZz1cIlwiKyhkYXRhLm5leHRfdGltZS1kYXRhLm5vdyk7XG5cdFx0XHQvLyBcdGxldCBmdW5VcCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHQvLyBcdFx0ZGF0YS5ub3crPTE7XG5cdFx0XHQvLyBcdFx0aWYoZGF0YS5uZXh0X3RpbWUtZGF0YS5ub3c+MCl7XG5cdFx0XHQvLyBcdFx0XHR0aGlzLnBsYXlpbmdfY2xvY2tfbGFiZWwuc3RyaW5nPVwiXCIrKGRhdGEubmV4dF90aW1lLWRhdGEubm93KTtcblx0XHRcdFx0XHRcblx0XHRcdC8vIFx0XHR9ZWxzZXtcblx0XHRcdC8vIFx0XHRcdHRoaXMucGxheWluZ1VJX25vZGUuYWN0aXZlID0gZmFsc2Vcblx0XHRcdFx0XHRcdFxuXHRcdFx0Ly8gXHRcdFx0Ly90aGlzLnVuc2NoZWR1bGUoZnVuVXApO1xuXHRcdFx0Ly8gXHRcdH1cblx0XHRcdC8vIFx0fS5iaW5kKHRoaXMpO1xuXHRcdFx0Ly8gXHQgdGhpcy5zY2hlZHVsZShmdW5VcCwxLChkYXRhLm5leHRfdGltZS1kYXRhLm5vdykpO1xuXHRcdFx0Ly8gfWVsc2V7XG5cdFx0XHQvLyBcdC8v6ZqQ6JeP5Y+v5Lul5Ye654mM55qEVUlcblx0XHRcdC8vIFx0dGhpcy5wbGF5aW5nVUlfbm9kZS5hY3RpdmUgPSBmYWxzZVxuXHRcdFx0Ly8gfVxuXHRcdFx0XG5cdFx0XHQvLyB0aGlzLm5vZGUucGFyZW50LmVtaXQoXCJvbkNhbkNodUNhcmRfZ2FtZVNjZW5lXCIsZGF0YSk7XG5cdFx0XHRcblx0XHRcdFxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgICAgbXlnbG9iYWwuc29ja2V0Lm9uR2FtZUZpbmlzaChmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgXHRjb25zb2xlLmxvZyhcIua4uOaIj+e7k+adn+mAmuefpSBvbkdhbWVGaW5pc2g6XCIrZGF0YSk7XG4gICAgICAgIFx0Ly90aGlzLnRpcHNMYWJlbC5zdHJpbmc9XCJ3aW5uZXJcIitkYXRhO1xuXHRcdFxuXHRcdFx0XG5cdFx0XHRcdCBBbGVydC5zaG93KFwiWW91IFwiKyhkYXRhLnlvdV9kdF9zY29yZT4wP1wid2luXCI6XCJsb3NlXCIpK1wiIFwiK2RhdGEueW91X2R0X3Njb3JlKVxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8vIGlmKGRhdGEud2lubmVyPT1teWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRCl7XG5cdFx0XHQvLyAgICAgIEFsZXJ0LnNob3coXCJZb3Ugd2luIFwiK2RhdGEueW91X2R0X3Njb3JlKVxuXHRcdFx0Ly8gfWVsc2V7XG5cdFx0XHRcdCAvL1RvYXN0LnNob3coXCJZb3UgZHQgXCIrZGF0YS55b3VfZHRfc2NvcmUpXG5cdFx0XHQvLyB9XG5cdFx0XHRcblx0XHRcdC8vdGhpcy5nYW1laW5nVUkuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdHRoaXMuUmVzZXRVSV8oKVxuXHRcdFx0Ly9jYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lU2NlbmVcIilcblx0XHRcdFxuICAgICAgICB9LmJpbmQodGhpcykpOyAgXG5cblxuICAgICAgICAvL+ebkeWQrOacjeWKoeWZqO+8muWFtuS7lueOqeWutuWHuueJjOa2iOaBr1xuICAgICAgICBteWdsb2JhbC5zb2NrZXQub25PdGhlclBsYXllckNodUNhcmQoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAvL3tcImFjY291bnRpZFwiOlwiMjM1NzU0MFwiLFwiY2FyZHNcIjpbe1wiY2FyZGlkXCI6NCxcImNhcmRfZGF0YVwiOntcImluZGV4XCI6NCxcInZhbHVlXCI6MSxcInNoYXBlXCI6MX19XX1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25PdGhlclBsYXllckNodUNhcmRcIitKU09OLnN0cmluZ2lmeShkYXRhKSlcblxuICAgICAgICAgICAgdGhpcy5zaG93X2NodXBhaShkYXRhKTtcbiAgICAgICAgICAgIC8vIHZhciBhY2NvdW50aWQgPSBkYXRhLmFjY291bnRpZFxuICAgICAgICAgICAgLy8gdmFyIGdhbWVTY2VuZV9zY3JpcHQgPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImdhbWVTY2VuZVwiKVxuICAgICAgICAgICAgLy8gLy/ojrflj5blh7rniYzljLrln5/oioLngrlcbiAgICAgICAgICAgIC8vIHZhciBvdXRDYXJkX25vZGUgPSBnYW1lU2NlbmVfc2NyaXB0LmdldFVzZXJPdXRDYXJkUG9zQnlBY2NvdW50KGFjY291bnRpZClcbiAgICAgICAgICAgIC8vIGlmKG91dENhcmRfbm9kZT09bnVsbCl7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuXG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vIHZhciBub2RlX2NhcmRzID0gW11cbiAgICAgICAgICAgIC8vIGZvcih2YXIgaT0wO2k8ZGF0YS5jYXJkcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIC8vICAgICB2YXIgY2FyZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2FyZF9wcmVmYWIpXG4gICAgICAgICAgICAvLyAgICAgY2FyZC5nZXRDb21wb25lbnQoXCJjYXJkXCIpLnNob3dDYXJkcyhkYXRhLmNhcmRzW2ldLmNhcmRfZGF0YSxteWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRClcbiAgICAgICAgICAgIC8vICAgICBub2RlX2NhcmRzLnB1c2goY2FyZClcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIHRoaXMuYXBwZW5kT3RoZXJDYXJkc1RvT3V0Wm9uZShvdXRDYXJkX25vZGUsbm9kZV9jYXJkcywwKVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgICAgIC8v5YaF6YOo5LqL5Lu2OuaYvuekuuW6leeJjOS6i+S7tixkYXRh5piv5LiJ5byg5bqV54mM5pWw5o2uXG4gICAgICAgIHRoaXMubm9kZS5vbihcInNob3dfYm90dG9tX2NhcmRfZXZlbnRcIixmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLXNob3dfYm90dG9tX2NhcmRfZXZlbnRcIiwrZGF0YSlcbiAgICAgICAgICBcblx0XHQgICB0aGlzLnNob3dfYm90dG9tX2NhcmRzKGRhdGEpOyBcbiAgICAgICAgICAgIC8vIHRoaXMuYm90dG9tX2NhcmRfZGF0YSA9IGRhdGFcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZm9yKHZhciBpPTA7aTxkYXRhLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgLy8gICAgIHZhciBjYXJkID0gdGhpcy5ib3R0b21fY2FyZFtpXVxuICAgICAgICAgICAgLy8gICAgIHZhciBzaG93X2RhdGEgPSBkYXRhW2ldXG4gICAgICAgICAgICAvLyAgICAgdmFyIGNhbGxfZGF0YSA9IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJvYmpcIjpjYXJkLFxuICAgICAgICAgICAgLy8gICAgICAgICBcImRhdGFcIjpzaG93X2RhdGEsXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiYm90dG9tIHNob3dfZGF0YTpcIitKU09OLnN0cmluZ2lmeShzaG93X2RhdGEpKVxuICAgICAgICAgICAgLy8gICAgIHZhciBydW4gPSAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0LGFjdGl2ZWRhdGEpe1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICAgICB2YXIgc2hvd19jYXJkID0gYWN0aXZlZGF0YS5vYmpcbiAgICAgICAgICAgIC8vICAgICAgICAgdmFyIHNob3dfZGF0YSA9IGFjdGl2ZWRhdGEuZGF0YVxuICAgICAgICAgICAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2MuY2FsbEZ1bmM6XCIrSlNPTi5zdHJpbmdpZnkoc2hvd19kYXRhKSlcbiAgICAgICAgICAgIC8vICAgICAgICAgc2hvd19jYXJkLmdldENvbXBvbmVudChcImNhcmRcIikuc2hvd0NhcmRzKHNob3dfZGF0YSlcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICB9LHRoaXMsY2FsbF9kYXRhKVxuXG4gICAgICAgICAgICAvLyAgICAgY2FyZC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Mucm90YXRlQnkoMCwwLDE4MCksY2Mucm90YXRlQnkoMC4yLDAsLTkwKSwgcnVuLFxuICAgICAgICAgICAgLy8gICAgIGNjLnJvdGF0ZUJ5KDAuMiwwLC05MCksY2Muc2NhbGVCeSgxLCAxLjIpKSk7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICBpZihpc29wZW5fc291bmQpe1xuICAgICAgICAgICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvc291bmQvc3RhcnQubXAzXCIpKSBcbiAgICAgICAgICAgIC8vICAgICAgfVxuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvL3RoaXMubm9kZS5wYXJlbnQuZW1pdChcImNoYW5nZV9yb29tX3N0YXRlX2V2ZW50XCIsUm9vbVN0YXRlLlJPT01fUExBWUlORylcbiAgICAgICAgICAgIC8v5aaC5p6c6Ieq5bex5Zyw5Li777yM57uZ5Yqg5LiK5LiJ5byg5bqV54mMXG4gICAgICAgICAgICBpZihteWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRD09bXlnbG9iYWwucGxheWVyRGF0YS5tYXN0ZXJfYWNjb3VudGlkKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnB1c2hUaHJlZUNhcmQuYmluZCh0aGlzKSwwLjIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgICAvL+azqOWGjOebkeWQrOS4gOS4qumAieaLqeeJjOa2iOaBryBcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiY2hvb3NlX2NhcmRfZXZlbnRcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNob29zZV9jYXJkX2V2ZW50OlwiK0pTT04uc3RyaW5naWZ5KGV2ZW50KSlcbiAgICAgICAgICAgIHZhciBkZXRhaWwgPSBldmVudFxuICAgICAgICAgICAgdGhpcy5jaG9vc2VfY2FyZF9kYXRhLnB1c2goZGV0YWlsKVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKFwidW5jaG9vc2VfY2FyZF9ldmVudFwiLGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidW5jaG9vc2VfY2FyZF9ldmVudDpcIisgZXZlbnQpXG4gICAgICAgICAgICB2YXIgZGV0YWlsID0gZXZlbnRcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5jaG9vc2VfY2FyZF9kYXRhLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hvb3NlX2NhcmRfZGF0YVtpXS5jYXJkaWQ9PWRldGFpbCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hvb3NlX2NhcmRfZGF0YS5zcGxpY2UoaSwxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgXG4gICAgfSxcblxuICAgIC8v5aSE55CG5Y+R54mM55qE5pWI5p6cXG4gICAgX3J1bmFjdGl2ZV9wdXNoY2FyZCgpe1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiX3J1bmFjdGl2ZV9wdXNoY2FyZDpcIit0aGlzLmN1cl9pbmRleF9jYXJkKVxuICAgICAgICBpZih0aGlzLmN1cl9pbmRleF9jYXJkIDwgMCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInB1c2hjYXJkIGVuZFwiKVxuICAgICAgICAgICAgLy/lj5HniYzliqjnlLvlrozmiJDvvIzmmL7npLrmiqLlnLDkuLvmjInpkq5cbiAgICAgICAgICAgIC8vdGhpcy5yb2JVSS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmZhcGFpX2VuZCA9IHRydWVcbiAgICAgICAgICAgIGlmKHRoaXMucm9iX3BsYXllcl9hY2NvdW50aWQ9PW15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJvYlVJLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoaXNvcGVuX3NvdW5kKXtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic3RhcnQgZmFwYWlfYXVkaW9JRFwiK3RoaXMuZmFwYWlfYXVkaW9JRCkgXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmZhcGFpX2F1ZGlvSUQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuXG4gICAgICAgICAgICAgIC8v6YCa55+lZ2FtZXNjZW5l6IqC54K577yM5YCS6K6h5pe2XG4gICAgICAgICAgICB2YXIgc2VuZGV2ZW50ID0gdGhpcy5yb2JfcGxheWVyX2FjY291bnRpZFxuICAgICAgICAgICAgLy90aGlzLm5vZGUucGFyZW50LmVtaXQoXCJjYW5yb2JfZXZlbnRcIixzZW5kZXZlbnQpXG5cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy/ljp/mnInpgLvovpEgIFxuICAgICAgICAvLyB2YXIgbW92ZV9ub2RlID0gdGhpcy5jYXJkc19ub2RzW3RoaXMuY3VyX2luZGV4X2NhcmRdXG4gICAgICAgIC8vIG1vdmVfbm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIC8vIHZhciBuZXd4ID0gbW92ZV9ub2RlLnggKyAodGhpcy5jYXJkX3dpZHRoICogMC40KnRoaXMuY3VyX2luZGV4X2NhcmQpIC0gKHRoaXMuY2FyZF93aWR0aCAqIDAuNClcbiAgICAgICAgLy8gdmFyIGFjdGlvbiA9IGNjLm1vdmVUbygwLjEsIGNjLnYyKG5ld3gsIC0yNTApKTtcbiAgICAgICAgLy8gbW92ZV9ub2RlLnJ1bkFjdGlvbihhY3Rpb24pXG4gICAgICAgIC8vIHRoaXMuY3VyX2luZGV4X2NhcmQtLVxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLl9ydW5hY3RpdmVfcHVzaGNhcmQuYmluZCh0aGlzKSwwLjMpXG5cbiAgICAgICAvLyB0aGlzLmN1cl9pbmRleF9jYXJkPTA7XG4gICAgICAgIHZhciBtb3ZlX25vZGUgPSB0aGlzLmNhcmRzX25vZHNbdGhpcy5jYXJkc19ub2RzLmxlbmd0aC10aGlzLmN1cl9pbmRleF9jYXJkLTFdXG5cdFx0aWYobW92ZV9ub2RlPT1udWxsKXJldHVyblxuICAgICAgICBtb3ZlX25vZGUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLnB1c2hfY2FyZF90bXAucHVzaChtb3ZlX25vZGUpXG5cdCAgICBpZihpc29wZW5fc291bmQpXG4gICAgICAgIHRoaXMuZmFwYWlfYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2MudXJsLnJhdyhcInJlc291cmNlcy9zb3VuZC9mYXBhaTEubXAzXCIpKVxuICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMucHVzaF9jYXJkX3RtcC5sZW5ndGgtMTtpKyspe1xuICAgICAgICAgICAgICAgIHZhciBtb3ZlX25vZGUgPSB0aGlzLnB1c2hfY2FyZF90bXBbaV1cbiAgICAgICAgICAgICAgICB2YXIgbmV3eCA9IG1vdmVfbm9kZS54IC0gKHRoaXMuY2FyZF93aWR0aCAqIDAuNClcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gY2MubW92ZVRvKDAuMSwgY2MudjIobmV3eCwgLTI1MCkpO1xuICAgICAgICAgICAgICAgIG1vdmVfbm9kZS5ydW5BY3Rpb24oYWN0aW9uKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN1cl9pbmRleF9jYXJkLS1cblx0XHQvLyB0aGlzLl9ydW5hY3RpdmVfcHVzaGNhcmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5fcnVuYWN0aXZlX3B1c2hjYXJkLmJpbmQodGhpcyksMC4wMylcbiAgICB9LFxuIFxuICAgIC8v5a+554mM5o6S5bqPXG4gICAgc29ydENhcmQoKXtcbiAgICAgICAgdGhpcy5jYXJkc19ub2RzLnNvcnQoZnVuY3Rpb24oeCx5KXtcbiAgICAgICAgICAgIHZhciBhID0geC5nZXRDb21wb25lbnQoXCJjYXJkXCIpLmNhcmRfZGF0YTtcbiAgICAgICAgICAgIHZhciBiID0geS5nZXRDb21wb25lbnQoXCJjYXJkXCIpLmNhcmRfZGF0YTtcblxuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgJiYgYi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAgYi52YWx1ZS1hLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSAmJiAhYi5oYXNPd25Qcm9wZXJ0eSgna2luZycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhLmhhc093blByb3BlcnR5KCdraW5nJykgJiYgYi5oYXNPd25Qcm9wZXJ0eSgna2luZycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eSgna2luZycpICYmIGIuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAgYi5raW5nLWEua2luZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLy92YXIgeCA9IHRoaXMuY2FyZHNfbm9kc1swXS54O1xuICAgICAgICAvL+i/memHjOS9v+eUqOWbuuWumuWdkOagh++8jOWboOS4uuWPlnRoaXMuY2FyZHNfbm9kc1swXS54a+WPr+iDveaOkuW6j+S4uuWujOaIkO+8jOWvvOiHtHjplJnor69cbiAgICAgICAgLy/miYDku6XlgZoxMDAw5q+r56eS55qE5bu25pe2XG4gICAgICAgIHZhciB0aW1lb3V0ID0gMTAwMFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvL3ZhciB4ID0gLTQxNy42IFxuICAgICAgICAgICAgdmFyIHggPSB0aGlzLmNhcmRzX25vZHNbMF0ueDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29ydCB4OlwiKyB4KVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcmRzX25vZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FyZCA9IHRoaXMuY2FyZHNfbm9kc1tpXTtcbiAgICAgICAgICAgICAgICBjYXJkLnpJbmRleCA9IGk7IC8v6K6+572u54mM55qE5Y+g5Yqg5qyh5bqPLHppbmRleOi2iuWkp+aYvuekuuWcqOS4iumdolxuICAgICAgICAgICAgICAgIGNhcmQueCA9IHggKyBjYXJkLndpZHRoICogMC40ICogaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpLCB0aW1lb3V0KTtcbiAgICAgICAgXG4gICAgICAgXG4gICAgfSxcblxuICBcbiAgICBwdXNoQ2FyZChkYXRhKXsvL+WPkeeJjCBcbiAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgJiYgYi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi52YWx1ZSAtIGEudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KCdraW5nJykgJiYgIWIuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghYS5oYXNPd25Qcm9wZXJ0eSgna2luZycpICYmIGIuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSAmJiBiLmhhc093blByb3BlcnR5KCdraW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIua2luZyAtIGEua2luZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgLy/liJvlu7pjYXJk6aKE5Yi25L2TXG4gICAgICB0aGlzLmNhcmRzX25vZHMgPSBbXVxuICAgICAgZm9yKHZhciBpPTA7aTxkYXRhLmxlbmd0aDtpKyspe1xuICAgICAgICBcbiAgICAgICAgdmFyIGNhcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcmRfcHJlZmFiKVxuICAgICAgICBjYXJkLnNjYWxlPTAuOFxuICAgICAgICBjYXJkLnBhcmVudCA9IHRoaXMubXlwYWl2aWV3XG4gICAgICAgIC8vY2FyZC54ID0gY2FyZC53aWR0aCAqIDAuNCAqICgxNyAtIDEpICogKC0wLjUpICsgY2FyZC53aWR0aCAqIDAuNCAqIDA7XG4gICAgICAgIGNhcmQueCA9IGNhcmQud2lkdGggKiAwLjQgKiAoLTAuNSkgKiAoLTE2KSArIGNhcmQud2lkdGggKiAwLjQgKiAwO1xuICAgICAgICAvL+i/memHjOWunueOsOS4uu+8jOavj+WPkeS4gOW8oOeJjO+8jOaUvuWcqOW3sue7j+WPkeeahOeJjOacgOWQju+8jOeEtuWQjuaVtOS9k+enu+WKqFxuICAgICAgICBjYXJkLnkgPSAtMjUwXG4gICAgICAgIGNhcmQuYWN0aXZlID0gZmFsc2VcblxuICAgICAgICBjYXJkLmdldENvbXBvbmVudChcImNhcmRcIikuc2hvd0NhcmRzKGRhdGFbaV0sbXlnbG9iYWwucGxheWVyRGF0YS5hY2NvdW50SUQpXG4gICAgICAgIC8v5a2Y5YKo54mM55qE5L+h5oGvLOeUqOS6juWQjumdouWPkeeJjOaViOaenFxuICAgICAgICB0aGlzLmNhcmRzX25vZHMucHVzaChjYXJkKVxuICAgICAgICB0aGlzLmNhcmRfd2lkdGggPSBjYXJkLndpZHRoXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8v5Yib5bu6M+W8oOW6leeJjFxuICAgICAgdGhpcy5ib3R0b21fY2FyZCA9IFtdXG4gICAgICBmb3IodmFyIGk9MDtpPDM7aSsrKXtcbiAgICAgICAgdmFyIGRpX2NhcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcmRfcHJlZmFiKVxuICAgICAgICBkaV9jYXJkLnNjYWxlPTAuNFxuICAgICAgICBkaV9jYXJkLnBvc2l0aW9uLnggPSB0aGlzLmJvdHRvbV9jYXJkX3Bvc19ub2RlLnBvc2l0aW9uLnggXG5cdFx0ZGlfY2FyZC5wb3NpdGlvbi55PTBcbiAgICAgICAgLy/kuInlvKDniYzvvIzkuK3pl7TlnZDmoIflsLHmmK9ib3R0b21fY2FyZF9wb3Nfbm9kZeiKgueCueWdkOagh++8jFxuICAgICAgICAvLzAs5ZKMMuS4pOW8oOeJjOW3puWPs+enu+WKqHdpbmR0aCowLjRcbiAgICAgICAgaWYoaT09MCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRpX2NhcmQueCA9IGRpX2NhcmQueCAtIGRpX2NhcmQud2lkdGgqMC40XG4gICAgICAgIH1lbHNlIGlmKGk9PTIpe1xuICAgICAgICAgICAgZGlfY2FyZC54ID0gZGlfY2FyZC54ICsgZGlfY2FyZC53aWR0aCowLjRcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAvL2RpX2NhcmQueCA9IGRpX2NhcmQud2lkdGgtaSpkaV9jYXJkLndpZHRoLTIwXG4gICAgICAgIC8vZGlfY2FyZC55PTYwXG4gICAgICAgIGRpX2NhcmQucGFyZW50ID0gdGhpcy5ib3R0b21fY2FyZF9wb3Nfbm9kZTsvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFwiZ2FtZWluZ1VJXCIpLmRpemh1cGFpdmlldzsvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoXCJkaXpodXBhaXZpZXdcIik7Ly8gIHRoaXMubm9kZS5wYXJlbnRcbiAgICAgICAgLy/lrZjlgqjlnKjlrrnlmajph4xcbiAgICAgICAgdGhpcy5ib3R0b21fY2FyZC5wdXNoKGRpX2NhcmQpXG4gICAgICB9XG5cbiAgICB9LFxuXG4gICAgLy/nu5nnjqnlrrblj5HpgIHkuInlvKDlupXniYzlkI7vvIzov4cxcyzmiorniYzorr7nva7liLB5PS0yNTDkvY3nva7mlYjmnpxcbiAgICBzY2hlZHVsZVB1c2hUaHJlZUNhcmQoKXtcbiAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmNhcmRzX25vZHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICB2YXIgY2FyZCA9IHRoaXMuY2FyZHNfbm9kc1tpXVxuICAgICAgICAgICAgaWYoY2FyZC55PT0tMjMwKXtcbiAgICAgICAgICAgICAgICBjYXJkLnkgPSAtMjUwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v57uZ5Zyw5Li75Y+R5LiJ5byg5o6S77yM5bm25pi+56S65Zyo5Y6f5pyJ54mM55qE5ZCO6Z2iXG4gICAgcHVzaFRocmVlQ2FyZCgpe1xuICAgICAgICAvL+avj+W8oOeJjOeahOWFtuWunuS9jee9riBcbiAgICAgICAgdmFyIGxhc3RfY2FyZF94ID0gIHRoaXMuY2FyZHNfbm9kc1t0aGlzLmNhcmRzX25vZHMubGVuZ3RoLTFdLnhcbiAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmJvdHRvbV9jYXJkX2RhdGEubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICB2YXIgY2FyZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2FyZF9wcmVmYWIpXG4gICAgICAgICAgICBjYXJkLnNjYWxlPTAuOFxuICAgICAgICAgICAgY2FyZC5wYXJlbnQgPSB0aGlzLm15cGFpdmlld1xuICAgICAgICAgIFxuICAgICAgICAgICAgY2FyZC54ID0gbGFzdF9jYXJkX3ggKyAoKGkrMSkqdGhpcy5jYXJkX3dpZHRoICogMC40KVxuICAgICAgICAgICAgY2FyZC55ID0gLTIzMCAgLy/lhYjmiorlupXnm5jmlL7lnKgtMjMw77yM5Zyo6K6+572u5Liq5a6a5pe25Zmo5LiL56e75YiwLTI1MOeahOS9jee9rlxuICAgICAgICAgICBcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJwdXNoVGhyZWVDYXJkIHg6XCIrY2FyZC54KVxuICAgICAgICAgICAgY2FyZC5nZXRDb21wb25lbnQoXCJjYXJkXCIpLnNob3dDYXJkcyh0aGlzLmJvdHRvbV9jYXJkX2RhdGFbaV0sbXlnbG9iYWwucGxheWVyRGF0YS5hY2NvdW50SUQpXG4gICAgICAgICAgICBjYXJkLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuY2FyZHNfbm9kcy5wdXNoKGNhcmQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNvcnRDYXJkKClcbiAgICAgICAgLy/orr7nva7kuIDkuKrlrprml7blmajvvIzlnKgyc+WQju+8jOS/ruaUuXnlnZDmoIfkuLotMjUwXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuc2NoZWR1bGVQdXNoVGhyZWVDYXJkLmJpbmQodGhpcyksMilcblxuICAgIH0sXG5cbiAgICBkZXN0b3J5Q2FyZChhY2NvdW50aWQsY2hvb3NlX2NhcmQpe1xuICAgICAgICBpZihjaG9vc2VfY2FyZC5sZW5ndGg9PTApe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvKuWHuueJjOmAu+i+kVxuICAgICAgICAgIDEuIOWwhumAieS4reeahOeJjCDku47niLboioLngrnkuK3np7vpmaRcbiAgICAgICAgICAyLiDku450aGlzLmNhcmRzX25vZHMg5pWw57uE5Lit77yM5Yig6ZmkIOmAieS4reeahOeJjCBcbiAgICAgICAgICAzLiDlsIYg4oCc6YCJ5Lit55qE54mM4oCdIOa3u+WKoOWIsOWHuueJjOWMuuWfn1xuICAgICAgICAgICAgICAzLjEg5riF56m65Ye654mM5Yy65Z+fXG4gICAgICAgICAgICAgIDMuMiDmt7vliqDlrZDoioLngrlcbiAgICAgICAgICAgICAgMy4zIOiuvue9rnNjYWxlXG4gICAgICAgICAgICAgIDMuNCDorr7nva5wb3NpdGlvblxuICAgICAgICAgIDQuICDph43mlrDorr7nva7miYvkuK3nmoTniYznmoTkvY3nva4gIHRoaXMudXBkYXRlQ2FyZHMoKTtcbiAgICAgICAgKi9cbiAgICAgICAgLy8xLzLmraXpqqTliKDpmaToh6rlt7HmiYvkuIrnmoRjYXJk6IqC54K5IFxuICAgICAgICB2YXIgZGVzdHJveV9jYXJkID0gW11cbiAgICAgICAgZm9yKHZhciBpPTA7aTxjaG9vc2VfY2FyZC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGZvcih2YXIgaj0wO2o8dGhpcy5jYXJkc19ub2RzLmxlbmd0aDtqKyspe1xuICAgICAgICAgICAgICAgIHZhciBjYXJkX2lkID0gdGhpcy5jYXJkc19ub2RzW2pdLmdldENvbXBvbmVudChcImNhcmRcIikuY2FyZF9pZFxuICAgICAgICAgICAgICAgIGlmKGNhcmRfaWQ9PWNob29zZV9jYXJkW2ldLmNhcmRpZCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVzdHJveSBjYXJkIGlkOlwiK2NhcmRfaWQpXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jYXJkc19ub2RzW2pdLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRzX25vZHNbal0ucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcblx0XHRcdFx0XHQvL3RoaXMuY2FyZHNfbm9kc1tqXS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIGRlc3Ryb3lfY2FyZC5wdXNoKHRoaXMuY2FyZHNfbm9kc1tqXSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkc19ub2RzLnNwbGljZShqLDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcHBlbmRDYXJkc1RvT3V0Wm9uZShhY2NvdW50aWQsZGVzdHJveV9jYXJkKVxuICAgICAgICB0aGlzLnVwZGF0ZUNhcmRzKClcblxuICAgIH0sXG5cbiAgICAvL+a4hemZpOaYvuekuuWHuueJjOiKgueCueWFqOmDqOWtkOiKgueCuSjlsLHmmK/miorlh7rniYznmoTmuIXnqbopXG4gICAgY2xlYXJPdXRab25lKGFjY291bnRpZCl7XG4gICAgICAgIHZhciBnYW1lU2NlbmVfc2NyaXB0ID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJnYW1lU2NlbmVcIilcbiAgICAgICAgdmFyIG91dENhcmRfbm9kZSA9IGdhbWVTY2VuZV9zY3JpcHQuZ2V0VXNlck91dENhcmRQb3NCeUFjY291bnQoYWNjb3VudGlkKVxuXHRcdGlmKG91dENhcmRfbm9kZT09bnVsbCl7cmV0dXJuO31cbiAgICAgICAgdmFyIGNoaWxkcmVuID0gb3V0Q2FyZF9ub2RlLmNoaWxkcmVuO1xuICAgICAgICBmb3IodmFyIGk9MDtpPGNoaWxkcmVuLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgdmFyIGNhcmQgPSBjaGlsZHJlbltpXTsgXG4gICAgICAgICAgICBjYXJkLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICAgIG91dENhcmRfbm9kZS5yZW1vdmVBbGxDaGlsZHJlbih0cnVlKTtcbiAgICB9LFxuICAgIC8v5a+55Ye655qE54mM5YGa5o6S5bqPXG4gICAgcHVzaENhcmRTb3J0KGNhcmRzKXtcbiAgICAgICAgaWYoY2FyZHMubGVuZ3RoPT0xKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNhcmRzLnNvcnQoZnVuY3Rpb24oeCx5KXtcbiAgICAgICAgICAgIHZhciBhID0geC5nZXRDb21wb25lbnQoXCJjYXJkXCIpLmNhcmRfZGF0YTtcbiAgICAgICAgICAgIHZhciBiID0geS5nZXRDb21wb25lbnQoXCJjYXJkXCIpLmNhcmRfZGF0YTtcblxuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgJiYgYi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiLnZhbHVlIC0gYS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KCdraW5nJykgJiYgIWIuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYS5oYXNPd25Qcm9wZXJ0eSgna2luZycpICYmIGIuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSAmJiBiLmhhc093blByb3BlcnR5KCdraW5nJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5raW5nIC0gYS5raW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBhcHBlbmRPdGhlckNhcmRzVG9PdXRab25lKG91dENhcmRfbm9kZSxjYXJkcyx5b2Zmc2V0KXtcbiAgICAgICBvdXRDYXJkX25vZGUucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XG5cbiAgICAgICAvL2NvbnNvbGUubG9nKFwiYXBwZW5kT3RoZXJDYXJkc1RvT3V0Wm9uZSBsZW5ndGhcIitjYXJkcy5sZW5ndGgpXG4gICAgICAgLy/mt7vliqDmlrDnmoTlrZDoioLngrlcbiAgICAgICBmb3IodmFyIGk9MDtpPGNhcmRzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICB2YXIgY2FyZCA9IGNhcmRzW2ldOyBcbiAgICAgICAgICAgb3V0Q2FyZF9ub2RlLmFkZENoaWxkKGNhcmQsMTAwK2kpIC8v56ys5LqM5Liq5Y+C5pWw5pivem9yZGVyLOS/neivgeeJjOS4jeiDveiiq+mBruS9j1xuICAgICAgIH1cblxuICAgICAgIC8v5a+55Ye654mM6L+b6KGM5o6S5bqPXG4gICAgICAgLy/orr7nva7lh7rniYzoioLngrnnmoTlnZDmoIdcbiAgICAgICB2YXIgelBvaW50ID0gY2FyZHMubGVuZ3RoIC8gMjtcbiAgICAgICAvL2NvbnNvbGUubG9nKFwiYXBwZW5kT3RoZXJDYXJkc1RvT3V0Wm9uZSB6ZXJvUG9pbnQ6XCIrelBvaW50KVxuICAgICAgIGZvcih2YXIgaT0wO2k8Y2FyZHMubGVuZ3RoO2krKyl7XG4gICAgICAgIHZhciBjYXJkTm9kZSA9IG91dENhcmRfbm9kZS5nZXRDaGlsZHJlbigpW2ldXG4gICAgICAgIHZhciB4ID0gKGkgLSB6UG9pbnQpICogMzA7XG4gICAgICAgIHZhciB5ID0gY2FyZE5vZGUueSt5b2Zmc2V0OyAvL+WboOS4uuavj+S4quiKgueCuemcgOimgeeahFnkuI3kuIDmoLfvvIzlgZrlj4LmlbDkvKDlhaVcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS0tY2FyZE5vZGU6IHg6XCIreCtcIiB5OlwiK3kpXG4gICAgICAgIGNhcmROb2RlLnNldFNjYWxlKDAuNSwgMC41KTsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGNhcmROb2RlLnNldFBvc2l0aW9uKHgseSk7ICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICB9XG4gICAgfSxcbiAgICAvL+WwhiDigJzpgInkuK3nmoTniYzigJ0g5re75Yqg5Yiw5Ye654mM5Yy65Z+fXG4gICAgLy9kZXN0cm95X2NhcmTmmK/njqnlrrbmnKzmrKHlh7rnmoTniYxcbiAgICBhcHBlbmRDYXJkc1RvT3V0Wm9uZShhY2NvdW50aWQsZGVzdHJveV9jYXJkKXtcbiAgICAgICAgaWYoZGVzdHJveV9jYXJkLmxlbmd0aD09MCl7XG4gICAgICAgICAgIC8vIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8v5YWI57uZ5pys5qyh5Ye655qE54mM5YGa5LiA5Liq5o6S5bqPXG4gICAgICAgdGhpcy5wdXNoQ2FyZFNvcnQoZGVzdHJveV9jYXJkKVxuICAgICAgIC8vY29uc29sZS5sb2coXCJhcHBlbmRDYXJkc1RvT3V0Wm9uZVwiKVxuICAgICAgIHZhciBnYW1lU2NlbmVfc2NyaXB0ID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJnYW1lU2NlbmVcIilcbiAgICAgICAvL+iOt+WPluWHuueJjOWMuuWfn+iKgueCuVxuICAgICAgIHZhciBvdXRDYXJkX25vZGUgPSBnYW1lU2NlbmVfc2NyaXB0LmdldFVzZXJPdXRDYXJkUG9zQnlBY2NvdW50KGFjY291bnRpZClcbiAgICAgICB0aGlzLmFwcGVuZE90aGVyQ2FyZHNUb091dFpvbmUob3V0Q2FyZF9ub2RlLGRlc3Ryb3lfY2FyZCwzNjApXG4gICAgICAgLy9zY29uc29sZS5sb2coXCJPdXRab25lOlwiK291dENhcmRfbm9kZS5uYW1lKVxuXG4gICAgfSxcblxuICAgIC8v6YeN5paw5o6S5bqP5omL5LiK55qE54mMLOW5tuenu+WKqFxuICAgIHVwZGF0ZUNhcmRzKCl7XG4gICAgXG4gICAgICAgIHZhciB6ZXJvUG9pbnQgPSB0aGlzLmNhcmRzX25vZHMubGVuZ3RoIC8gMjtcbiAgICAgICAgLy92YXIgbGFzdF9jYXJkX3ggPSB0aGlzLmNhcmRzX25vZHNbdGhpcy5jYXJkc19ub2RzLmxlbmd0aC0xXS54XG4gICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5jYXJkc19ub2RzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgdmFyIGNhcmROb2RlID0gdGhpcy5jYXJkc19ub2RzW2ldXG4gICAgICAgICAgICB2YXIgeCA9IChpIC0gemVyb1BvaW50KSoodGhpcy5jYXJkX3dpZHRoICogMC40KTtcbiAgICAgICAgICAgIGNhcmROb2RlLnNldFBvc2l0aW9uKHgsIC0yNTApOyAgXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgXG4gICAgcGxheVB1c2hDYXJkU291bmQoY2FyZF9uYW1lKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGF5UHVzaENhcmRTb3VuZDpcIitjYXJkX25hbWUpXG4gICAgICAgIFxuICAgICAgICBpZihjYXJkX25hbWU9PVwiXCIpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2goY2FyZF9uYW1lKXtcbiAgICAgICAgICAgIGNhc2UgQ2FyZHNWYWx1ZS5vbmUubmFtZTpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBDYXJkc1ZhbHVlLmRvdWJsZS5uYW1lOlxuICAgICAgICAgICAgICAgICAgICBpZihpc29wZW5fc291bmQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kL2R1aXppLm1wM1wiKSkgXG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWsgIFxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LGN1c3RvbURhdGEpe1xuXHRcdFxuICAgICAgICBzd2l0Y2goY3VzdG9tRGF0YSl7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX3FpYW5kelwiOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnRuX3FpYW5kelwiKVxuICAgICAgICAgICAgICAgIG15Z2xvYmFsLnNvY2tldC5yZXF1ZXN0Um9iU3RhdGUocWlhbl9zdGF0ZS5xaWFuKVxuXHRcdFx0XHR0aGlzLnVuc2NoZWR1bGUodGhpcy5mdW5VcCkvL+a4hemZpCDmiqLlnLDkuLsg5a6a5pe25ZmoXG5cdFx0XHRcdFxuICAgICAgICAgICAgICAgIHRoaXMucm9iVUkuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICBpZihpc29wZW5fc291bmQpe1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvc291bmQvd29tYW5famlhb19kaV96aHUub2dnXCIpKSBcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2J1cWlhbmR6XCI6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJidG5fYnVxaWFuZHpcIilcbiAgICAgICAgICAgICAgICBteWdsb2JhbC5zb2NrZXQucmVxdWVzdFJvYlN0YXRlKHFpYW5fc3RhdGUuYnVxaWFuZylcblx0XHRcdFx0dGhpcy51bnNjaGVkdWxlKHRoaXMuZnVuVXApLy/muIXpmaQg5oqi5Zyw5Li7IOWumuaXtuWZqFxuXHRcdFx0XHRcbiAgICAgICAgICAgICAgICB0aGlzLnJvYlVJLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgaWYoaXNvcGVuX3NvdW5kKXtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kL3dvbWFuX2J1X2ppYW8ub2dnXCIpKSBcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBicmVhayAgICBcbiAgICAgICAgICAgICBjYXNlIFwibm9wdXNoY2FyZFwiOiAgLy/kuI3lh7rniYxcbiAgICAgICAgICAgICAgICAgbXlnbG9iYWwuc29ja2V0LnJlcXVlc3RfYnVjaHVfY2FyZChbXSxudWxsKVxuICAgICAgICAgICAgICAgICB0aGlzLnBsYXlpbmdVSV9ub2RlLmFjdGl2ZSA9IGZhbHNlXG5cdFx0XHRcdCB0aGlzLnVuc2NoZWR1bGUodGhpcy5mdW5VcDEpLy8g5riF6ZmkIOWHuueJjOWumuaXtuWZqFxuICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgIGNhc2UgXCJwdXNoY2FyZFwiOiAgIC8v5Ye654mMXG4gICAgICAgICAgICAgICAgIC8v5YWI6I635Y+W5pys5qyh5Ye654mM5pWw5o2uXG4gICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hvb3NlX2NhcmRfZGF0YS5sZW5ndGg9PTApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpcHNMYWJlbC5zdHJpbmc9XCLor7fpgInmi6nniYwhXCJcblx0XHRcdFx0XHR0aGlzLnBsYXlpbmdVSV9ub2RlLmFjdGl2ZSA9IHRydWVcblx0XHRcdFx0XHRcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aXBzTGFiZWwuc3RyaW5nPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCAyMDAwKTtcblx0XHRcdFx0XHRyZXR1cm47Ly8g5LiN5Ye654mMIOWImei/lOWbnlxuICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCB0aGlzLnVuc2NoZWR1bGUodGhpcy5mdW5VcDEpLy8g5riF6ZmkIOWHuueJjOWumuaXtuWZqFxuICAgICAgICAgICAgICAgICBteWdsb2JhbC5zb2NrZXQucmVxdWVzdF9jaHVfY2FyZCh0aGlzLmNob29zZV9jYXJkX2RhdGEsZnVuY3Rpb24oZXJyLGRhdGEpe1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0X2NodV9jYXJkOlwiK2VycilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVxdWVzdF9jaHVfY2FyZFwiK0pTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy50aXBzTGFiZWwuc3RyaW5nPT1cIlwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpcHNMYWJlbC5zdHJpbmcgPSBkYXRhLm1zZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aXBzTGFiZWwuc3RyaW5nPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WHuueJjOWksei0pe+8jOaKiumAieaLqeeahOeJjOW9kuS9jVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmNhcmRzX25vZHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmQgPSB0aGlzLmNhcmRzX25vZHNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmVtaXQoXCJyZXNldF9jYXJkX2ZsYWdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hvb3NlX2NhcmRfZGF0YSA9IFtdXG4gICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAvL+WHuueJjOaIkOWKn1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcF9jaHVfY2FyZCBkYXRhOlwiK0pTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWluZ1VJX25vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAvL+aSreaUvuWHuueJjOeahOWjsOmfs1xuICAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVzcF9jaHVfY2FyZCBkYXRhOntcImFjY291bnRcIjpcIjI1MTk5MDFcIixcIm1zZ1wiOlwic3VjZXNzXCIsXCJjYXJkdmFsdWVcIjp7XCJuYW1lXCI6XCJEb3VibGVcIixcInZhbHVlXCI6MX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgLy97XCJ0eXBlXCI6XCJvdGhlcl9jaHVjYXJkX25vdGlmeVwiLFwicmVzdWx0XCI6MCxcImRhdGFcIjp7XCJhY2NvdW50aWRcIjpcIjI1MTk5MDFcIixcImNhcmRzXCI6W3tcImNhcmRpZFwiOjI0LFwiY2FyZF9kYXRhXCI6e1wiaW5kZXhcIjoyNCxcInZhbHVlXCI6NixcInNoYXBlXCI6MX19LHtcImNhcmRpZFwiOjI2LFwiY2FyZF9kYXRhXCI6e1wiaW5kZXhcIjoyNixcInZhbHVlXCI6NixcInNoYXBlXCI6M319XX0sXCJjYWxsQmFja0luZGV4XCI6MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlQdXNoQ2FyZFNvdW5kKGRhdGEuY2FyZHZhbHVlLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0b3J5Q2FyZChkYXRhLmFjY291bnQsdGhpcy5jaG9vc2VfY2FyZF9kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hvb3NlX2NhcmRfZGF0YSA9IFtdXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAgLy90aGlzLnBsYXlpbmdVSV9ub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgY2FzZSBcInRpcGNhcmRcIjpcbiAgICAgICAgICAgICAgICAgYnJlYWsgICBcblx0XHRcdGNhc2UgXCJyZXR1cm5yb29tXCI6Ly/ph43mlrDov57mjqVcblx0XHRcdCAgICAgIFxuXHRcdFx0XHQvLyAgIGNvbnNvbGUubG9nKFwi54K55Ye75LqGIOmHjeaWsOi/nuaOpVwiKVxuXHRcdFx0XHQvLyAgbXlnbG9iYWwuc29ja2V0LmluaXRTb2NrZXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0Ly8gXHQgIGNvbnNvbGUubG9nKFwi5Yid5aeL5YyWIOaIkOWKnyBpbml0U29ja2V0XCIpXG5cdFx0XHRcdC8vICBteWdsb2JhbC5hcGkubG9naW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdC8vICAgIGNvbnNvbGUubG9nKFwi6Ieq5Yqo55m75b2V5oiQ5YqfXCIpXG5cdFx0XHRcdC8vICAgICAgdmFyIGdhbWVTY2VuZV9zY3JpcHQgPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImdhbWVTY2VuZVwiKVxuXHRcdFx0IC8vICAgICAgICAgbXlnbG9iYWwuc29ja2V0LnJlcXVlc3RfcmVfcm9vbSh7XCJyb29taWRcIjpnYW1lU2NlbmVfc2NyaXB0LnJvb21pZH0sZnVuY3Rpb24oZXJyLGRhdGEpe1xuXHRcdFx0XHQvLyBcdCAgLy/ph43mlrDov57mjqVcblx0XHRcdFx0Ly8gXHRcdCBpZihlcnI9PTApe1xuXHRcdFx0XHQvLyBcdFx0IHRoaXMucmV0dXJucm9vbS5hY3RpdmU9ZmFsc2U7XG5cdFx0XHRcdC8vIFx0XHQgY29uc29sZS5sb2coXCLph43mlrDov5vlhaXmiL/pl7Qg5oiQ5YqfXCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRcdFx0XHRcdFx0IFxuXHRcdFx0XHQvLyBcdFx0IH1lbHNle1xuXHRcdFx0XHQvLyBcdFx0XHQgY29uc29sZS5sb2coXCLph43mlrDov5vlhaXmiL/pl7Qg5aSx6LSlXCIrZXJyKTtcblxuXHRcdFx0XHQvLyBcdFx0IH1cblx0XHRcdFx0Ly8gICAgICB9LmJpbmQodGhpcykpXG5cdFx0XHRcdFxuXHRcdFx0XHQvLyAgIH0uYmluZCh0aGlzKSlcblx0XHRcdFx0Ly8gICB9LmJpbmQodGhpcykpO1xuXHRcdFx0XHQgXG5cdFx0XHRcdCBicmVhayBcdFx0ICBcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cblxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameScene/prefabs/player_node.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa64aMZgnFIfLx2Lmi+lbwV', 'player_node');
// scripts/gameScene/prefabs/player_node.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    account_label: cc.Label,
    nickname_label: cc.Label,
    room_touxiang: cc.Sprite,
    globalcount_label: cc.Label,
    headimage: cc.Sprite,
    readyimage: cc.Node,
    offlineimage: cc.Node,
    card_node: cc.Node,
    card_prefab: cc.Prefab,
    //tips_label:cc.Label,
    clockimage: cc.Node,
    qiangdidzhu_node: cc.Node,
    //抢地主的父节点
    time_label: cc.Label,
    robimage_sp: cc.SpriteFrame,
    robnoimage_sp: cc.SpriteFrame,
    robIconSp: cc.Sprite,
    robIcon_Sp: cc.Node,
    robnoIcon_Sp: cc.Node,
    masterIcon: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.readyimage.active = false;
    this.offlineimage.active = false; //监听开始游戏事件(客户端发给客户端)

    this.node.on("gamestart_event", function (event) {
      this.readyimage.active = false;
    }.bind(this)); //给其他玩家发牌事件

    this.node.on("push_card_event", function (event) {
      console.log("on push_card_event"); //自己不再发牌

      if (this.accountid == _mygolbal["default"].playerData.accountID) {
        return;
      }

      this.pushCard();
    }.bind(this));
    this.node.on("playernode_rob_state_event", function (event) {
      //{"accountid":"2162866","state":1}
      var detail = event; //如果是自己在抢，需要隐藏qiangdidzhu_node节点
      //this.accountid表示这个节点挂接的accountid

      if (detail.accountid == this.accountid) {
        //console.log("detail.accountid"+detail.accountid)
        this.qiangdidzhu_node.active = true;
      }

      if (this.accountid == detail.accountid) {
        if (detail.state == qian_state.qian) {
          console.log("this.robIcon_Sp.active = true");
          this.robIcon_Sp.active = true;
        } else if (detail.state == qian_state.buqiang) {
          this.robnoIcon_Sp.active = true;
        } else {
          console.log("get rob value :" + detail.state);
        } //this.qiangdidzhu_node.active = false

      }
    }.bind(this));
    this.node.on("playernode_changemaster_event", function (event) {
      var detail = event;
      this.robIcon_Sp.active = false;
      this.robnoIcon_Sp.active = false;

      if (detail == this.accountid) {
        this.masterIcon.active = true;
      }
    }.bind(this)); // this.node.on("playernode_add_three_card",function(event){
    //   var detail = event //地主的accountid
    //   if(detail==this.accountid){
    //     //给地主发三张排
    //   }
    // }.bind(this))
  },
  start: function start() {},
  funUp2: function funUp2() {
    this.now++;

    if (this.next_time - this.now > 0) {
      this.time_label.string = "" + (this.next_time - this.now); //this.schedule(funUp,1)
    } else {
      this.unschedule(this.funUp2);
    }
  },
  updateGold: function updateGold(infolist) {
    for (var i = 0; i < infolist.length; i++) {
      if (infolist[i].accountID == this.accountid) {
        this.globalcount_label.string = infolist[i].goldcount;
        break;
      }
    }
  },
  //这里初始化房间内位置节点信息(自己和其他玩家)
  //data玩家节点数据
  //index玩家在房间的位置索引
  init_data: function init_data(data, index) {
    console.log("init_data:" + JSON.stringify(data)); //data:{"accountid":"2117836","nick_name":"tiny543","avatarUrl":"http://xxx","goldcount":1000}

    this.accountid = data.accountid;
    this.accountId = data.accountid;
    this.account_label.string = data.accountid;
    this.nickname_label.string = data.nick_name + " s " + data.seatindex + " i" + index;
    this.globalcount_label.string = data.goldcount;
    this.cardlist_node = [];
    this.seat_index = index;

    if (data.isready == true) {
      this.readyimage.active = true;
    }

    this.offlineimage.active = false;

    if (typeof data.isonline != "undefined" && data.isonline == false) {
      this.offlineimage.active = true;
    } //网络图片加载
    //     cc.loader.load({url: data.avatarUrl, type: 'jpg'},  (err, tex)=> {
    //     //cc.log('Should load a texture from RESTful API by specify the type: ' + (tex instanceof cc.Texture2D));
    //     let oldWidth = this.headImage.node.width;
    //     //console.log('old withd' + oldWidth);
    //     this.room_touxiang.spriteFrame = new cc.SpriteFrame(tex);
    //     let newWidth = this.headImage.node.width;
    //     //console.log('old withd' + newWidth);
    //     this.headImage.node.scale = oldWidth / newWidth;
    // });
    //这里根据传入的avarter来获取本地图像


    var str = data.avatarUrl; //console.log(str)

    var head_image_path = "UI/headimage/" + str;
    cc.loader.loadRes(head_image_path, cc.SpriteFrame, function (err, spriteFrame) {
      if (err) {
        console.log(err.message || err);
        return;
      }

      this.headimage.spriteFrame = spriteFrame;
    }.bind(this)); //注册一个player_ready消息

    this.node.on("player_ready_notify", function (event) {
      console.log("player_ready_notify event", event);
      var detail = event;
      console.log("------player_ready_notify detail:" + detail);

      if (detail == this.accountid) {
        this.readyimage.active = true;
      }
    }.bind(this)); //监听内部随可以抢地主消息,这个消息会发给每个playernode节点

    this.node.on("playernode_canrob_event", function (event) {
      var detail = event;
      console.log("------playernode_canrob_event detail:" + detail);
      this.unschedule(this.funUp2);

      if (detail._accountID == this.accountid) {
        this.qiangdidzhu_node.active = true; //this.tips_label.string ="正在抢地主" 
        // this.time_label.string="10"
        //开启一个定时器
        // var now=detail.next_time-detail.now;

        this.next_time = detail.next_time;
        this.now = detail.now;
        this.time_label.string = "" + (this.next_time - this.now); // let funUp2 = function(){
        // 	this.now++;
        // 	if(this.next_time-this.now>0){
        // 		this.time_label.string=""+(this.next_time-this.now);
        // 		//this.schedule(funUp,1)
        // 	}else{
        // 		// this.unschedule(funUp)
        // 	}
        // }.bind(this);

        this.schedule(this.funUp2, 1);
      } else {
        this.qiangdidzhu_node.active = false;
      }
    }.bind(this));
    this.node.on("onCanChuCard_playernode", function (data) {
      console.log("收到通知 等待用户出牌 " + data);
      this.onCardWatting(data);
    }.bind(this)); //?

    if (index == 1) {
      this.card_node.x = -this.card_node.x - 30;
    }
  },
  // update (dt) {},
  pushCard: function pushCard() {
    this.card_node.active = true;

    for (var i = 0; i < 17; i++) {
      var card = cc.instantiate(this.card_prefab);
      card.scale = 0.6;
      console.log(" this.card_node.parent.parent" + this.card_node.parent.parent.name);
      card.parent = this.card_node; //card.parent = this.node

      var height = card.height;
      card.y = (17 - 1) * 0.5 * height * 0.4 * 0.3 - height * 0.4 * 0.3 * i;
      card.x = 0; //console.log("call pushCard x:"+card.x+" y:"+card.y)

      this.cardlist_node.push(card);
    }
  },
  funUp3: function funUp3() {
    this.now++;

    if (this.next_time - this.now > 0) {
      this.time_label.string = "" + (this.next_time - this.now); //this.schedule(funUp,1)
    } else {
      this.qiangdidzhu_node.active = false;
      this.unschedule(this.funUp3);
    }
  },
  onCardWatting: function onCardWatting(data) {
    console.log("等待 出牌:", data._accountID);
    this.unschedule(this.funUp3);

    if (this.accountid == data._accountID) {
      this.qiangdidzhu_node.active = true;
    } else {
      this.qiangdidzhu_node.active = false;
    }

    if (this.accountid != data._accountID) {
      return;
    } //var now=data.next_time-data.now;


    this.next_time = data.next_time;
    this.now = data.now;
    this.time_label.string = "" + data.next_time - data.now;
    ; // let funUp3 = function(){
    // 	this.now++;
    // 	if(this.next_time-this.now>0){
    // 		this.time_label.string=""+(this.next_time-this.now);
    // 		//this.schedule(funUp,1)
    // 	}else{
    // 		this.qiangdidzhu_node.active = false;
    // 		this.unschedule(this.funUp3);
    // 	}
    // }.bind(this);
    // this.schedule(funUp, 1);

    this.schedule(this.funUp3, 1); // this.schedule(function(){
    // 	data.now+=1000;
    // 	if(data.next_time-data.now>0){
    // 		this.time_label.string=""+(data.next_time-data.now)/1000;
    // 	}
    // }.bind(this),1);
    //等待某人出牌
  },
  onOffLine: function onOffLine() {
    console.log("  掉线了 " + this.accountid);
    this.offlineimage.active = true;
  },
  onOnLine: function onOnLine() {
    console.log("  上线了 " + this.accountid);
    this.offlineimage.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVTY2VuZS9wcmVmYWJzL3BsYXllcl9ub2RlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYWNjb3VudF9sYWJlbCIsIkxhYmVsIiwibmlja25hbWVfbGFiZWwiLCJyb29tX3RvdXhpYW5nIiwiU3ByaXRlIiwiZ2xvYmFsY291bnRfbGFiZWwiLCJoZWFkaW1hZ2UiLCJyZWFkeWltYWdlIiwiTm9kZSIsIm9mZmxpbmVpbWFnZSIsImNhcmRfbm9kZSIsImNhcmRfcHJlZmFiIiwiUHJlZmFiIiwiY2xvY2tpbWFnZSIsInFpYW5nZGlkemh1X25vZGUiLCJ0aW1lX2xhYmVsIiwicm9iaW1hZ2Vfc3AiLCJTcHJpdGVGcmFtZSIsInJvYm5vaW1hZ2Vfc3AiLCJyb2JJY29uU3AiLCJyb2JJY29uX1NwIiwicm9ibm9JY29uX1NwIiwibWFzdGVySWNvbiIsIm9uTG9hZCIsImFjdGl2ZSIsIm5vZGUiLCJvbiIsImV2ZW50IiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJhY2NvdW50aWQiLCJteWdsb2JhbCIsInBsYXllckRhdGEiLCJhY2NvdW50SUQiLCJwdXNoQ2FyZCIsImRldGFpbCIsInN0YXRlIiwicWlhbl9zdGF0ZSIsInFpYW4iLCJidXFpYW5nIiwic3RhcnQiLCJmdW5VcDIiLCJub3ciLCJuZXh0X3RpbWUiLCJzdHJpbmciLCJ1bnNjaGVkdWxlIiwidXBkYXRlR29sZCIsImluZm9saXN0IiwiaSIsImxlbmd0aCIsImdvbGRjb3VudCIsImluaXRfZGF0YSIsImRhdGEiLCJpbmRleCIsIkpTT04iLCJzdHJpbmdpZnkiLCJhY2NvdW50SWQiLCJuaWNrX25hbWUiLCJzZWF0aW5kZXgiLCJjYXJkbGlzdF9ub2RlIiwic2VhdF9pbmRleCIsImlzcmVhZHkiLCJpc29ubGluZSIsInN0ciIsImF2YXRhclVybCIsImhlYWRfaW1hZ2VfcGF0aCIsImxvYWRlciIsImxvYWRSZXMiLCJlcnIiLCJzcHJpdGVGcmFtZSIsIm1lc3NhZ2UiLCJfYWNjb3VudElEIiwic2NoZWR1bGUiLCJvbkNhcmRXYXR0aW5nIiwieCIsImNhcmQiLCJpbnN0YW50aWF0ZSIsInNjYWxlIiwicGFyZW50IiwibmFtZSIsImhlaWdodCIsInkiLCJwdXNoIiwiZnVuVXAzIiwib25PZmZMaW5lIiwib25PbkxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGFBQWEsRUFBQ0osRUFBRSxDQUFDSyxLQURUO0FBRVJDLElBQUFBLGNBQWMsRUFBQ04sRUFBRSxDQUFDSyxLQUZWO0FBR1JFLElBQUFBLGFBQWEsRUFBQ1AsRUFBRSxDQUFDUSxNQUhUO0FBSVJDLElBQUFBLGlCQUFpQixFQUFDVCxFQUFFLENBQUNLLEtBSmI7QUFLUkssSUFBQUEsU0FBUyxFQUFDVixFQUFFLENBQUNRLE1BTEw7QUFNUkcsSUFBQUEsVUFBVSxFQUFDWCxFQUFFLENBQUNZLElBTk47QUFPUkMsSUFBQUEsWUFBWSxFQUFDYixFQUFFLENBQUNZLElBUFI7QUFRUkUsSUFBQUEsU0FBUyxFQUFDZCxFQUFFLENBQUNZLElBUkw7QUFTUkcsSUFBQUEsV0FBVyxFQUFDZixFQUFFLENBQUNnQixNQVRQO0FBVVI7QUFDQUMsSUFBQUEsVUFBVSxFQUFDakIsRUFBRSxDQUFDWSxJQVhOO0FBWVJNLElBQUFBLGdCQUFnQixFQUFDbEIsRUFBRSxDQUFDWSxJQVpaO0FBWWtCO0FBQzFCTyxJQUFBQSxVQUFVLEVBQUNuQixFQUFFLENBQUNLLEtBYk47QUFjUmUsSUFBQUEsV0FBVyxFQUFDcEIsRUFBRSxDQUFDcUIsV0FkUDtBQWVSQyxJQUFBQSxhQUFhLEVBQUN0QixFQUFFLENBQUNxQixXQWZUO0FBZ0JSRSxJQUFBQSxTQUFTLEVBQUV2QixFQUFFLENBQUNRLE1BaEJOO0FBaUJSZ0IsSUFB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QUFoQixHQUF1QixLQUFHUSxJQUFJLENBQUNULFNBQVIsR0FBa0JTLElBQUksQ0FBQ1YsR0FBOUM7QUFBa0QsS0FoQmhDLENBaUJsQjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDOztBQUNBLFNBQUs4QixRQUFMLENBQWMsS0FBS1csTUFBbkIsRUFBMEIsQ0FBMUIsRUE3QmlCLENBZ0NsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBeFJPO0FBeVJSQyxFQUFBQSxTQXpSUSx1QkF5Ukc7QUFDVnhELElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVMsS0FBS0MsU0FBMUI7QUFDQSxTQUFLdEIsWUFBTCxDQUFrQmUsTUFBbEIsR0FBeUIsSUFBekI7QUFDQSxHQTVSTztBQTZSUjhELEVBQUFBLFFBN1JRLHNCQTZSRTtBQUNUekQsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBUyxLQUFLQyxTQUExQjtBQUNBLFNBQUt0QixZQUFMLENBQWtCZSxNQUFsQixHQUF5QixLQUF6QjtBQUNBO0FBaFNPLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteWdsb2JhbCBmcm9tIFwiLi4vLi4vbXlnb2xiYWwuanNcIlxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBhY2NvdW50X2xhYmVsOmNjLkxhYmVsLFxuICAgICAgICBuaWNrbmFtZV9sYWJlbDpjYy5MYWJlbCxcbiAgICAgICAgcm9vbV90b3V4aWFuZzpjYy5TcHJpdGUsXG4gICAgICAgIGdsb2JhbGNvdW50X2xhYmVsOmNjLkxhYmVsLFxuICAgICAgICBoZWFkaW1hZ2U6Y2MuU3ByaXRlLFxuICAgICAgICByZWFkeWltYWdlOmNjLk5vZGUsXG4gICAgICAgIG9mZmxpbmVpbWFnZTpjYy5Ob2RlLFxuICAgICAgICBjYXJkX25vZGU6Y2MuTm9kZSxcbiAgICAgICAgY2FyZF9wcmVmYWI6Y2MuUHJlZmFiLFxuICAgICAgICAvL3RpcHNfbGFiZWw6Y2MuTGFiZWwsXG4gICAgICAgIGNsb2NraW1hZ2U6Y2MuTm9kZSxcbiAgICAgICAgcWlhbmdkaWR6aHVfbm9kZTpjYy5Ob2RlLCAvL+aKouWcsOS4u+eahOeItuiKgueCuVxuICAgICAgICB0aW1lX2xhYmVsOmNjLkxhYmVsLFxuICAgICAgICByb2JpbWFnZV9zcDpjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgcm9ibm9pbWFnZV9zcDpjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgcm9iSWNvblNwOiBjYy5TcHJpdGUsXG4gICAgICAgIHJvYkljb25fU3A6Y2MuTm9kZSxcbiAgICAgICAgcm9ibm9JY29uX1NwOmNjLk5vZGUsXG4gICAgICAgIG1hc3Rlckljb246Y2MuTm9kZSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgdGhpcy5yZWFkeWltYWdlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICB0aGlzLm9mZmxpbmVpbWFnZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgXG4gICAgICAvL+ebkeWQrOW8gOWni+a4uOaIj+S6i+S7tijlrqLmiLfnq6/lj5Hnu5nlrqLmiLfnq68pXG4gICAgICB0aGlzLm5vZGUub24oXCJnYW1lc3RhcnRfZXZlbnRcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgIHRoaXMucmVhZHlpbWFnZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgICAvL+e7meWFtuS7lueOqeWutuWPkeeJjOS6i+S7tlxuICAgICAgdGhpcy5ub2RlLm9uKFwicHVzaF9jYXJkX2V2ZW50XCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uIHB1c2hfY2FyZF9ldmVudFwiKVxuICAgICAgICAvL+iHquW3seS4jeWGjeWPkeeJjFxuICAgICAgICBpZih0aGlzLmFjY291bnRpZD09bXlnbG9iYWwucGxheWVyRGF0YS5hY2NvdW50SUQpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wdXNoQ2FyZCgpXG4gICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgIHRoaXMubm9kZS5vbihcInBsYXllcm5vZGVfcm9iX3N0YXRlX2V2ZW50XCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgIC8ve1wiYWNjb3VudGlkXCI6XCIyMTYyODY2XCIsXCJzdGF0ZVwiOjF9XG4gICAgICAgICAgdmFyIGRldGFpbCA9IGV2ZW50XG4gICAgICBcbiAgICAgICAgICAvL+WmguaenOaYr+iHquW3seWcqOaKou+8jOmcgOimgemakOiXj3FpYW5nZGlkemh1X25vZGXoioLngrlcbiAgICAgICAgICAvL3RoaXMuYWNjb3VudGlk6KGo56S66L+Z5Liq6IqC54K55oyC5o6l55qEYWNjb3VudGlkXG4gICAgICAgICAgaWYoZGV0YWlsLmFjY291bnRpZD09dGhpcy5hY2NvdW50aWQpe1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImRldGFpbC5hY2NvdW50aWRcIitkZXRhaWwuYWNjb3VudGlkKVxuICAgICAgICAgICAgdGhpcy5xaWFuZ2RpZHpodV9ub2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYodGhpcy5hY2NvdW50aWQgPT0gZGV0YWlsLmFjY291bnRpZCl7XG4gICAgICAgICAgICBpZihkZXRhaWwuc3RhdGU9PXFpYW5fc3RhdGUucWlhbil7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5yb2JJY29uX1NwLmFjdGl2ZSA9IHRydWVcIilcbiAgICAgICAgICAgICAgdGhpcy5yb2JJY29uX1NwLmFjdGl2ZSA9IHRydWVcblxuICAgICAgICAgICAgfWVsc2UgaWYoZGV0YWlsLnN0YXRlPT1xaWFuX3N0YXRlLmJ1cWlhbmcpe1xuICAgICAgICAgICAgICB0aGlzLnJvYm5vSWNvbl9TcC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXQgcm9iIHZhbHVlIDpcIitkZXRhaWwuc3RhdGUpXG4gICAgICAgICAgICB9XG5cdFx0XHRcblx0XHRcdC8vdGhpcy5xaWFuZ2RpZHpodV9ub2RlLmFjdGl2ZSA9IGZhbHNlXG5cdFx0XHRcblx0XHRcdFxuICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgICB0aGlzLm5vZGUub24oXCJwbGF5ZXJub2RlX2NoYW5nZW1hc3Rlcl9ldmVudFwiLGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgIHZhciBkZXRhaWwgPSBldmVudCBcbiAgICAgICAgIHRoaXMucm9iSWNvbl9TcC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgdGhpcy5yb2Jub0ljb25fU3AuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgIGlmKGRldGFpbD09dGhpcy5hY2NvdW50aWQpe1xuICAgICAgICAgICAgdGhpcy5tYXN0ZXJJY29uLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgIC8vIHRoaXMubm9kZS5vbihcInBsYXllcm5vZGVfYWRkX3RocmVlX2NhcmRcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAvLyAgIHZhciBkZXRhaWwgPSBldmVudCAvL+WcsOS4u+eahGFjY291bnRpZFxuICAgICAgLy8gICBpZihkZXRhaWw9PXRoaXMuYWNjb3VudGlkKXtcbiAgICAgIC8vICAgICAvL+e7meWcsOS4u+WPkeS4ieW8oOaOklxuXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0uYmluZCh0aGlzKSlcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBcbiAgICB9LFxuXHQgZnVuVXAyICgpe1xuXHRcdHRoaXMubm93Kys7XG5cdFx0aWYodGhpcy5uZXh0X3RpbWUtdGhpcy5ub3c+MCl7XG5cdFx0XHR0aGlzLnRpbWVfbGFiZWwuc3RyaW5nPVwiXCIrKHRoaXMubmV4dF90aW1lLXRoaXMubm93KTtcblx0XHRcdC8vdGhpcy5zY2hlZHVsZShmdW5VcCwxKVxuXHRcdH1lbHNle1xuXHRcdFx0IHRoaXMudW5zY2hlZHVsZSh0aGlzLmZ1blVwMilcblx0XHR9XG5cdH0sXG4gICAgdXBkYXRlR29sZChpbmZvbGlzdCl7XG5cdFx0Zm9yKHZhciBpPTA7aTxpbmZvbGlzdC5sZW5ndGg7aSsrKXtcblx0XHRcdGlmKGluZm9saXN0W2ldLmFjY291bnRJRD09dGhpcy5hY2NvdW50aWQpe1xuXHRcdFx0XHR0aGlzLmdsb2JhbGNvdW50X2xhYmVsLnN0cmluZz1pbmZvbGlzdFtpXS5nb2xkY291bnRcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHR9LFxuXHRcblxuICAgIC8v6L+Z6YeM5Yid5aeL5YyW5oi/6Ze05YaF5L2N572u6IqC54K55L+h5oGvKOiHquW3seWSjOWFtuS7lueOqeWutilcbiAgICAvL2RhdGHnjqnlrrboioLngrnmlbDmja5cbiAgICAvL2luZGV4546p5a625Zyo5oi/6Ze055qE5L2N572u57Si5byVXG4gICAgaW5pdF9kYXRhKGRhdGEsaW5kZXgpe1xuICAgICAgY29uc29sZS5sb2coXCJpbml0X2RhdGE6XCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpICBcbiAgICAgIC8vZGF0YTp7XCJhY2NvdW50aWRcIjpcIjIxMTc4MzZcIixcIm5pY2tfbmFtZVwiOlwidGlueTU0M1wiLFwiYXZhdGFyVXJsXCI6XCJodHRwOi8veHh4XCIsXCJnb2xkY291bnRcIjoxMDAwfVxuICAgICAgdGhpcy5hY2NvdW50aWQgPSBkYXRhLmFjY291bnRpZFxuXHQgIHRoaXMuYWNjb3VudElkPWRhdGEuYWNjb3VudGlkXG4gICAgICB0aGlzLmFjY291bnRfbGFiZWwuc3RyaW5nID0gZGF0YS5hY2NvdW50aWRcbiAgICAgIHRoaXMubmlja25hbWVfbGFiZWwuc3RyaW5nID0gZGF0YS5uaWNrX25hbWUgK1wiIHMgXCIrIGRhdGEuc2VhdGluZGV4ICtcIiBpXCIraW5kZXhcbiAgICAgIHRoaXMuZ2xvYmFsY291bnRfbGFiZWwuc3RyaW5nID0gZGF0YS5nb2xkY291bnRcbiAgICAgIHRoaXMuY2FyZGxpc3Rfbm9kZSA9IFtdXG4gICAgICB0aGlzLnNlYXRfaW5kZXggPSBpbmRleFxuICAgICAgaWYoZGF0YS5pc3JlYWR5PT10cnVlKXtcbiAgICAgICAgdGhpcy5yZWFkeWltYWdlLmFjdGl2ZSA9IHRydWVcbiAgICAgIH1cblx0ICAgdGhpcy5vZmZsaW5laW1hZ2UuYWN0aXZlPWZhbHNlIFxuXHQgIGlmKHR5cGVvZihkYXRhLmlzb25saW5lKSE9XCJ1bmRlZmluZWRcIiAmJiBkYXRhLmlzb25saW5lPT1mYWxzZSl7XG5cdFx0ICAgdGhpcy5vZmZsaW5laW1hZ2UuYWN0aXZlPXRydWUgXG5cdCAgfVxuICAgICBcbiAgICAgIC8v572R57uc5Zu+54mH5Yqg6L29XG4gICAgLy8gICAgIGNjLmxvYWRlci5sb2FkKHt1cmw6IGRhdGEuYXZhdGFyVXJsLCB0eXBlOiAnanBnJ30sICAoZXJyLCB0ZXgpPT4ge1xuICAgIC8vICAgICAvL2NjLmxvZygnU2hvdWxkIGxvYWQgYSB0ZXh0dXJlIGZyb20gUkVTVGZ1bCBBUEkgYnkgc3BlY2lmeSB0aGUgdHlwZTogJyArICh0ZXggaW5zdGFuY2VvZiBjYy5UZXh0dXJlMkQpKTtcbiAgICAvLyAgICAgbGV0IG9sZFdpZHRoID0gdGhpcy5oZWFkSW1hZ2Uubm9kZS53aWR0aDtcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZygnb2xkIHdpdGhkJyArIG9sZFdpZHRoKTtcbiAgICAvLyAgICAgdGhpcy5yb29tX3RvdXhpYW5nLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleCk7XG4gICAgLy8gICAgIGxldCBuZXdXaWR0aCA9IHRoaXMuaGVhZEltYWdlLm5vZGUud2lkdGg7XG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coJ29sZCB3aXRoZCcgKyBuZXdXaWR0aCk7XG4gICAgLy8gICAgIHRoaXMuaGVhZEltYWdlLm5vZGUuc2NhbGUgPSBvbGRXaWR0aCAvIG5ld1dpZHRoO1xuICAgIC8vIH0pO1xuICAgIC8v6L+Z6YeM5qC55o2u5Lyg5YWl55qEYXZhcnRlcuadpeiOt+WPluacrOWcsOWbvuWDj1xuICAgIHZhciBzdHIgPSBkYXRhLmF2YXRhclVybFxuICAgIC8vY29uc29sZS5sb2coc3RyKVxuICAgIHZhciBoZWFkX2ltYWdlX3BhdGggPSBcIlVJL2hlYWRpbWFnZS9cIiArIHN0clxuICAgIGNjLmxvYWRlci5sb2FkUmVzKGhlYWRfaW1hZ2VfcGF0aCxjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3ByaXRlRnJhbWUpwqB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH3CoCDCoCDCoCDCoCDCoCBcbiAgICAgICAgIHRoaXMuaGVhZGltYWdlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7wqAgwqAgwqAgwqAgXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAvL+azqOWGjOS4gOS4qnBsYXllcl9yZWFkeea2iOaBr1xuICAgIHRoaXMubm9kZS5vbihcInBsYXllcl9yZWFkeV9ub3RpZnlcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyX3JlYWR5X25vdGlmeSBldmVudFwiLGV2ZW50KVxuICAgICAgICAgICAgdmFyIGRldGFpbCA9IGV2ZW50XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLXBsYXllcl9yZWFkeV9ub3RpZnkgZGV0YWlsOlwiK2RldGFpbClcbiAgICAgICAgICAgIGlmKGRldGFpbD09dGhpcy5hY2NvdW50aWQpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlpbWFnZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgICAvL+ebkeWQrOWGhemDqOmaj+WPr+S7peaKouWcsOS4u+a2iOaBryzov5nkuKrmtojmga/kvJrlj5Hnu5nmr4/kuKpwbGF5ZXJub2Rl6IqC54K5XG4gICAgICAgIHRoaXMubm9kZS5vbihcInBsYXllcm5vZGVfY2Fucm9iX2V2ZW50XCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgdmFyIGRldGFpbCA9IGV2ZW50XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLXBsYXllcm5vZGVfY2Fucm9iX2V2ZW50IGRldGFpbDpcIitkZXRhaWwpXG5cdFx0XHQgdGhpcy51bnNjaGVkdWxlKHRoaXMuZnVuVXAyKVxuICAgICAgICAgICAgaWYoZGV0YWlsLl9hY2NvdW50SUQ9PXRoaXMuYWNjb3VudGlkKXtcbiAgICAgICAgICAgICAgdGhpcy5xaWFuZ2RpZHpodV9ub2RlLmFjdGl2ZT10cnVlXG4gICAgICAgICAgICAgIC8vdGhpcy50aXBzX2xhYmVsLnN0cmluZyA9XCLmraPlnKjmiqLlnLDkuLtcIiBcbiAgICAgICAgICAgICAvLyB0aGlzLnRpbWVfbGFiZWwuc3RyaW5nPVwiMTBcIlxuICAgICAgICAgICAgICAvL+W8gOWQr+S4gOS4quWumuaXtuWZqFxuXHRcdFx0ICAvLyB2YXIgbm93PWRldGFpbC5uZXh0X3RpbWUtZGV0YWlsLm5vdztcblx0XHRcdCAgdGhpcy5uZXh0X3RpbWU9ZGV0YWlsLm5leHRfdGltZTtcblx0XHRcdCAgdGhpcy5ub3c9ZGV0YWlsLm5vdztcblx0XHRcdHRoaXMudGltZV9sYWJlbC5zdHJpbmc9XCJcIisodGhpcy5uZXh0X3RpbWUtdGhpcy5ub3cpO1xuXHRcdFx0Ly8gbGV0IGZ1blVwMiA9IGZ1bmN0aW9uKCl7XG5cdFx0XHQvLyBcdHRoaXMubm93Kys7XG5cdFx0XHQvLyBcdGlmKHRoaXMubmV4dF90aW1lLXRoaXMubm93PjApe1xuXHRcdFx0Ly8gXHRcdHRoaXMudGltZV9sYWJlbC5zdHJpbmc9XCJcIisodGhpcy5uZXh0X3RpbWUtdGhpcy5ub3cpO1xuXHRcdFx0Ly8gXHRcdC8vdGhpcy5zY2hlZHVsZShmdW5VcCwxKVxuXHRcdFx0Ly8gXHR9ZWxzZXtcblx0XHRcdC8vIFx0XHQvLyB0aGlzLnVuc2NoZWR1bGUoZnVuVXApXG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIH0uYmluZCh0aGlzKTtcblx0XHQgICAgXG5cdFx0XHQgdGhpcy5zY2hlZHVsZSh0aGlzLmZ1blVwMiwgMSk7XG4gICAgICAgICAgICBcblx0XHRcdH1lbHNle1xuXHRcdFx0XHQgdGhpcy5xaWFuZ2RpZHpodV9ub2RlLmFjdGl2ZT1mYWxzZVxuXHRcdFx0fVxuXHRcdFx0XG4gICAgICAgIH0uYmluZCh0aGlzKSlcblx0XHR0aGlzLm5vZGUub24oXCJvbkNhbkNodUNhcmRfcGxheWVybm9kZVwiLGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0Y29uc29sZS5sb2coXCLmlLbliLDpgJrnn6Ug562J5b6F55So5oi35Ye654mMIFwiK2RhdGEpO1xuXHRcdFx0dGhpcy5vbkNhcmRXYXR0aW5nKGRhdGEpO1xuXHRcdH0uYmluZCh0aGlzKSk7XG4gICAgICAgIC8vP1xuICAgICAgICBpZihpbmRleD09MSl7XG4gICAgICAgICAgdGhpcy5jYXJkX25vZGUueCA9IC10aGlzLmNhcmRfbm9kZS54IC0gMzBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbiAgICBwdXNoQ2FyZCgpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jYXJkX25vZGUuYWN0aXZlID0gdHJ1ZSBcbiAgICAgICAgZm9yKHZhciBpPTA7aTwxNztpKyspe1xuICAgICAgICAgICAgdmFyIGNhcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcmRfcHJlZmFiKVxuICAgICAgICAgICAgY2FyZC5zY2FsZT0wLjZcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIHRoaXMuY2FyZF9ub2RlLnBhcmVudC5wYXJlbnRcIisgdGhpcy5jYXJkX25vZGUucGFyZW50LnBhcmVudC5uYW1lKVxuICAgICAgICAgICAgY2FyZC5wYXJlbnQgPSB0aGlzLmNhcmRfbm9kZVxuICAgICAgICAgICAgLy9jYXJkLnBhcmVudCA9IHRoaXMubm9kZVxuICAgICAgICAgICAgdmFyIGhlaWdodCA9IGNhcmQuaGVpZ2h0XG4gICAgICAgICAgICBjYXJkLnkgPSAoMTcgLSAxKSAqIDAuNSAqIGhlaWdodCAqIDAuNCAqIDAuMyAtIGhlaWdodCAqIDAuNCAqIDAuMyAqIGk7XG4gICAgICAgICAgICBjYXJkLnggPSAwXG4gICAgICAgICAgIFxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhbGwgcHVzaENhcmQgeDpcIitjYXJkLngrXCIgeTpcIitjYXJkLnkpXG4gICAgICAgICAgICB0aGlzLmNhcmRsaXN0X25vZGUucHVzaChjYXJkKVxuICAgICAgICB9XG4gICAgfSxcblx0ZnVuVXAzKCl7XG5cdFx0XHR0aGlzLm5vdysrO1xuXHRcdFx0aWYodGhpcy5uZXh0X3RpbWUtdGhpcy5ub3c+MCl7XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnRpbWVfbGFiZWwuc3RyaW5nPVwiXCIrKHRoaXMubmV4dF90aW1lLXRoaXMubm93KTtcblx0XHRcdFx0Ly90aGlzLnNjaGVkdWxlKGZ1blVwLDEpXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5xaWFuZ2RpZHpodV9ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLnVuc2NoZWR1bGUodGhpcy5mdW5VcDMpO1xuXHRcdFx0fVxuXHR9LFxuXHRvbkNhcmRXYXR0aW5nKGRhdGEpe1xuXHRcdGNvbnNvbGUubG9nKFwi562J5b6FIOWHuueJjDpcIixkYXRhLl9hY2NvdW50SUQpXG5cdFx0dGhpcy51bnNjaGVkdWxlKHRoaXMuZnVuVXAzKTtcblx0XHRcblx0XHRpZih0aGlzLmFjY291bnRpZD09ZGF0YS5fYWNjb3VudElEKXtcblx0XHQgICAgdGhpcy5xaWFuZ2RpZHpodV9ub2RlLmFjdGl2ZSA9IHRydWU7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHR0aGlzLnFpYW5nZGlkemh1X25vZGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKCB0aGlzLmFjY291bnRpZCE9ZGF0YS5fYWNjb3VudElEKXtcblx0XHRcdHJldHVybiA7XG5cdFx0fVxuXHRcdC8vdmFyIG5vdz1kYXRhLm5leHRfdGltZS1kYXRhLm5vdztcblx0XHR0aGlzLm5leHRfdGltZT1kYXRhLm5leHRfdGltZTtcblx0XHR0aGlzLm5vdz1kYXRhLm5vdztcblx0XHR0aGlzLnRpbWVfbGFiZWwuc3RyaW5nPVwiXCIrZGF0YS5uZXh0X3RpbWUtZGF0YS5ub3c7O1xuXHRcdC8vIGxldCBmdW5VcDMgPSBmdW5jdGlvbigpe1xuXHRcdC8vIFx0dGhpcy5ub3crKztcblx0XHQvLyBcdGlmKHRoaXMubmV4dF90aW1lLXRoaXMubm93PjApe1xuXHRcdFx0XHRcblx0XHQvLyBcdFx0dGhpcy50aW1lX2xhYmVsLnN0cmluZz1cIlwiKyh0aGlzLm5leHRfdGltZS10aGlzLm5vdyk7XG5cdFx0Ly8gXHRcdC8vdGhpcy5zY2hlZHVsZShmdW5VcCwxKVxuXHRcdC8vIFx0fWVsc2V7XG5cdFx0Ly8gXHRcdHRoaXMucWlhbmdkaWR6aHVfbm9kZS5hY3RpdmUgPSBmYWxzZTtcblx0XHQvLyBcdFx0dGhpcy51bnNjaGVkdWxlKHRoaXMuZnVuVXAzKTtcblx0XHQvLyBcdH1cblx0XHQvLyB9LmJpbmQodGhpcyk7XG5cdFx0IC8vIHRoaXMuc2NoZWR1bGUoZnVuVXAsIDEpO1xuXHRcdCB0aGlzLnNjaGVkdWxlKHRoaXMuZnVuVXAzLDEpO1xuXHRcdCBcblx0XG5cdFx0Ly8gdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xuXHRcdC8vIFx0ZGF0YS5ub3crPTEwMDA7XG5cdFx0Ly8gXHRpZihkYXRhLm5leHRfdGltZS1kYXRhLm5vdz4wKXtcblx0XHQvLyBcdFx0dGhpcy50aW1lX2xhYmVsLnN0cmluZz1cIlwiKyhkYXRhLm5leHRfdGltZS1kYXRhLm5vdykvMTAwMDtcblx0XHQvLyBcdH1cblx0XHQvLyB9LmJpbmQodGhpcyksMSk7XG5cdFx0Ly/nrYnlvoXmn5Dkurrlh7rniYxcblx0fSxcblx0b25PZmZMaW5lKCl7XG5cdFx0Y29uc29sZS5sb2coXCIgIOaOiee6v+S6hiBcIit0aGlzLmFjY291bnRpZCk7IFxuXHRcdHRoaXMub2ZmbGluZWltYWdlLmFjdGl2ZT10cnVlXG5cdH0sXG5cdG9uT25MaW5lKCl7XG5cdFx0Y29uc29sZS5sb2coXCIgIOS4iue6v+S6hiBcIit0aGlzLmFjY291bnRpZCk7IFxuXHRcdHRoaXMub2ZmbGluZWltYWdlLmFjdGl2ZT1mYWxzZVxuXHR9XG5cdFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mygolbal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9667atqdBHIb60A67blB9L', 'mygolbal');
// scripts/mygolbal.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _socket_ctr = _interopRequireDefault(require("./data/socket_ctr.js"));

var _player = _interopRequireDefault(require("./data/player.js"));

var _event_lister = _interopRequireDefault(require("./util/event_lister.js"));

var _api = _interopRequireDefault(require("./util/api.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var myglobal = {} || myglobal;
myglobal.socket = (0, _socket_ctr["default"])();
myglobal.playerData = (0, _player["default"])();
myglobal.eventlister = (0, _event_lister["default"])({});
myglobal.api = (0, _api["default"])();
var _default = myglobal;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL215Z29sYmFsLmpzIl0sIm5hbWVzIjpbIm15Z2xvYmFsIiwic29ja2V0IiwicGxheWVyRGF0YSIsImV2ZW50bGlzdGVyIiwiYXBpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsTUFBTUEsUUFBdkI7QUFDQUEsUUFBUSxDQUFDQyxNQUFULEdBQWtCLDZCQUFsQjtBQUNBRCxRQUFRLENBQUNFLFVBQVQsR0FBc0IseUJBQXRCO0FBQ0FGLFFBQVEsQ0FBQ0csV0FBVCxHQUF1Qiw4QkFBWSxFQUFaLENBQXZCO0FBQ0FILFFBQVEsQ0FBQ0ksR0FBVCxHQUFjLHNCQUFkO2VBQ2VKIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc29ja2V0Y3RyIGZyb20gXCIuL2RhdGEvc29ja2V0X2N0ci5qc1wiXG5pbXBvcnQgcGxheWVyZGF0YSBmcm9tIFwiLi9kYXRhL3BsYXllci5qc1wiXG5pbXBvcnQgZXZlbnRsaXN0ZXIgZnJvbSBcIi4vdXRpbC9ldmVudF9saXN0ZXIuanNcIlxuaW1wb3J0IGFwaSBmcm9tIFwiLi91dGlsL2FwaS5qc1wiXG5cbmNvbnN0IG15Z2xvYmFsID0ge30gfHwgbXlnbG9iYWxcbm15Z2xvYmFsLnNvY2tldCA9IHNvY2tldGN0cigpXG5teWdsb2JhbC5wbGF5ZXJEYXRhID0gcGxheWVyZGF0YSgpXG5teWdsb2JhbC5ldmVudGxpc3RlciA9IGV2ZW50bGlzdGVyKHt9KVxubXlnbG9iYWwuYXBpPSBhcGkoKVxuZXhwb3J0IGRlZmF1bHQgbXlnbG9iYWxcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/util/event_lister.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd485eyCsiBLBqweDM7SjVQh', 'event_lister');
// scripts/util/event_lister.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var eventLister = function eventLister(obj) {
  var register = {};

  obj.on = function (type, method) {
    if (register.hasOwnProperty(type)) {
      register[type].push(method);
    } else {
      register[type] = [method];
    }
  };

  obj.fire = function (type) {
    if (register.hasOwnProperty(type)) {
      var methodList = register[type];

      for (var i = 0; i < methodList.length; ++i) {
        var handle = methodList[i];
        var args = [];

        for (var i = 1; i < arguments.length; ++i) {
          args.push(arguments[i]);
        } //handle.call(this,args)


        console.log("handle.call(this,args) type:" + type);
        handle.apply(this, args);
      }
    }
  };

  obj.removeLister = function (type) {
    register[type] = [];
  };

  obj.removeAllLister = function () {
    register = {};
  };

  return obj;
};

var _default = eventLister;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWwvZXZlbnRfbGlzdGVyLmpzIl0sIm5hbWVzIjpbImV2ZW50TGlzdGVyIiwib2JqIiwicmVnaXN0ZXIiLCJvbiIsInR5cGUiLCJtZXRob2QiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJmaXJlIiwibWV0aG9kTGlzdCIsImkiLCJsZW5ndGgiLCJoYW5kbGUiLCJhcmdzIiwiYXJndW1lbnRzIiwiY29uc29sZSIsImxvZyIsImFwcGx5IiwicmVtb3ZlTGlzdGVyIiwicmVtb3ZlQWxsTGlzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBU0MsR0FBVCxFQUFhO0FBQzdCLE1BQUlDLFFBQVEsR0FBRyxFQUFmOztBQUVBRCxFQUFBQSxHQUFHLENBQUNFLEVBQUosR0FBUyxVQUFTQyxJQUFULEVBQWNDLE1BQWQsRUFBcUI7QUFDMUIsUUFBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCRixJQUF4QixDQUFILEVBQWlDO0FBQzdCRixNQUFBQSxRQUFRLENBQUNFLElBQUQsQ0FBUixDQUFlRyxJQUFmLENBQW9CRixNQUFwQjtBQUNILEtBRkQsTUFFSztBQUNESCxNQUFBQSxRQUFRLENBQUNFLElBQUQsQ0FBUixHQUFpQixDQUFDQyxNQUFELENBQWpCO0FBQ0g7QUFDSixHQU5EOztBQVFBSixFQUFBQSxHQUFHLENBQUNPLElBQUosR0FBVyxVQUFTSixJQUFULEVBQWM7QUFDckIsUUFBR0YsUUFBUSxDQUFDSSxjQUFULENBQXdCRixJQUF4QixDQUFILEVBQWtDO0FBQzlCLFVBQUlLLFVBQVUsR0FBR1AsUUFBUSxDQUFDRSxJQUFELENBQXpCOztBQUNBLFdBQUksSUFBSU0sQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDRCxVQUFVLENBQUNFLE1BQXpCLEVBQWdDLEVBQUVELENBQWxDLEVBQW9DO0FBQ2hDLFlBQUlFLE1BQU0sR0FBR0gsVUFBVSxDQUFDQyxDQUFELENBQXZCO0FBQ0EsWUFBSUcsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsYUFBSSxJQUFJSCxDQUFDLEdBQUcsQ0FBWixFQUFjQSxDQUFDLEdBQUNJLFNBQVMsQ0FBQ0gsTUFBMUIsRUFBaUMsRUFBRUQsQ0FBbkMsRUFBcUM7QUFDakNHLFVBQUFBLElBQUksQ0FBQ04sSUFBTCxDQUFVTyxTQUFTLENBQUNKLENBQUQsQ0FBbkI7QUFDSCxTQUwrQixDQU9oQzs7O0FBQ0FLLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUErQlosSUFBM0M7QUFDQVEsUUFBQUEsTUFBTSxDQUFDSyxLQUFQLENBQWEsSUFBYixFQUFrQkosSUFBbEI7QUFDSDtBQUNKO0FBQ0osR0FmRDs7QUFpQkFaLEVBQUFBLEdBQUcsQ0FBQ2lCLFlBQUosR0FBbUIsVUFBU2QsSUFBVCxFQUFjO0FBQzdCRixJQUFBQSxRQUFRLENBQUNFLElBQUQsQ0FBUixHQUFpQixFQUFqQjtBQUNILEdBRkQ7O0FBSUFILEVBQUFBLEdBQUcsQ0FBQ2tCLGVBQUosR0FBc0IsWUFBVTtBQUM1QmpCLElBQUFBLFFBQVEsR0FBRyxFQUFYO0FBQ0gsR0FGRDs7QUFJQSxTQUFPRCxHQUFQO0FBQ0gsQ0FyQ0Q7O2VBdUNlRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXZlbnRMaXN0ZXIgPSBmdW5jdGlvbihvYmope1xuICAgIHZhciByZWdpc3RlciA9IHt9XG5cbiAgICBvYmoub24gPSBmdW5jdGlvbih0eXBlLG1ldGhvZCl7XG4gICAgICAgIGlmKHJlZ2lzdGVyLmhhc093blByb3BlcnR5KHR5cGUpKXtcbiAgICAgICAgICAgIHJlZ2lzdGVyW3R5cGVdLnB1c2gobWV0aG9kKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJlZ2lzdGVyW3R5cGVdID0gW21ldGhvZF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9iai5maXJlID0gZnVuY3Rpb24odHlwZSl7XG4gICAgICAgIGlmKHJlZ2lzdGVyLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG4gICAgICAgICAgICB2YXIgbWV0aG9kTGlzdCA9IHJlZ2lzdGVyW3R5cGVdXG4gICAgICAgICAgICBmb3IodmFyIGk9MDtpPG1ldGhvZExpc3QubGVuZ3RoOysraSl7XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZSA9IG1ldGhvZExpc3RbaV1cbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMTtpPGFyZ3VtZW50cy5sZW5ndGg7KytpKXtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL2hhbmRsZS5jYWxsKHRoaXMsYXJncylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZS5jYWxsKHRoaXMsYXJncykgdHlwZTpcIit0eXBlKVxuICAgICAgICAgICAgICAgIGhhbmRsZS5hcHBseSh0aGlzLGFyZ3MpXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb2JqLnJlbW92ZUxpc3RlciA9IGZ1bmN0aW9uKHR5cGUpe1xuICAgICAgICByZWdpc3Rlclt0eXBlXSA9IFtdXG4gICAgfVxuXG4gICAgb2JqLnJlbW92ZUFsbExpc3RlciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJlZ2lzdGVyID0ge31cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqXG59XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50TGlzdGVyIl19
//------QC-SOURCE-SPLIT------

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

// import socketio from "../lib/socket_io.js"
var socketCtr = function socketCtr() {
  var that = {};
  var respone_map = {};
  var call_index = 0;
  that._socket = null;
  var event = (0, _event_lister["default"])({});

  that._sendmsg = function (cmdtype, req, callindex) {
    if (!that._socket.connected) {
      //that.initSocket();
      event.fire("socket_closed_notify", {});
    }

    that._socket.emit("notify", {
      cmd: cmdtype,
      data: req,
      callindex: callindex
    });
  };

  that._request = function (cmdtype, req, callback) {
    console.log("send cmd:" + cmdtype + "  " + JSON.stringify(req));
    call_index++;
    respone_map[call_index] = callback;

    that._sendmsg(cmdtype, req, call_index);
  };

  that.initSocket = function (callback) {
    var opts = {
      'reconnection': true,
      'force new connection': false,
      'transports': ['websocket', 'polling']
    };

    if (that._socket != null) {
      that._socket.close();

      that._socket = null;
    }

    that._socket = window.io.connect(defines.serverUrl, opts); // new WebSocket(defines.serverUrl);// socketio(defines.serverUrl,opts);//  window.io.connect(defines.serverUrl,opts);

    that._socket.on("connection", function () {
      console.log("connect server success!!");

      if (callback) {
        console.log("有回调");
        callback();
      }
    });

    that._socket.on("disconnect", function () {
      console.log("disconnect from server!");
      event.fire("socket_closed_notify", {});
    });

    that._socket.on("notify", function (res) {
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
    that._request("wxlogin", req, callback);
  };

  that.request_creatroom = function (req, callback) {
    that._request("createroom_req", req, callback);
  };

  that.request_jion = function (req, callback) {
    that._request("joinroom_req", req, callback);
  };

  that.request_reset = function (req, callback) {
    that._request("resetroom_req", req, callback);
  };

  that.request_enter_room = function (req, callback) {
    that._request("enterroom_req", req, callback);
  };

  that.request_re_room = function (req, callback) {
    that._request("reroom_req", req, callback);
  };

  that.request_recovery = function (req, callback) {
    // 请求 恢复牌局信息
    that._request("recovery_req", req, callback);
  }; //发送不出牌信息


  that.request_buchu_card = function (req, callback) {
    that._request("chu_bu_card_req", req, callback);
  };
  /*玩家出牌
    需要判断: 
       出的牌是否符合规则
       和上个出牌玩家比较，是否满足条件
   */


  that.request_chu_card = function (req, callback) {
    that._request("chu_card_req", req, callback);
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
    that._sendmsg("player_ready_notify", {}, null);
  };

  that.requestLeaveRoom = function () {
    that._sendmsg("player_leave_room", {}, null);
  }; //监听 disconnect 消息  玩家 离开房间


  that.onPlayerDisconnect = function (callback) {
    if (callback) {
      event.on("player_disconnect_notify", callback);
    }
  }; //监听 disonline 消息  玩家 游戏中掉线


  that.onPlayerDisonline = function (callback) {
    if (callback) {
      event.on("player_disonline_notify", callback);
    }
  }; //监听 reonline 消息  玩家 游戏中重新连线


  that.onPlayerReonline = function (callback) {
    if (callback) {
      event.on("player_reonline_notify", callback);
    }
  };

  that.onGameFinish = function (callback) {
    if (callback) {
      event.on("gameFinish_notify", callback); //监听服务端 返回消息
    }
  };

  that.requestStart = function (callback) {
    that._request("player_start_notify", {}, callback);
  }; //玩家通知服务器抢地主消息


  that.requestRobState = function (state) {
    that._sendmsg("player_rob_notify", state, null);
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
    // 房间状态改变通知
    if (callback) {
      event.on("room_state_notify", callback);
    }
  };

  that.onOtherPlayerChuCard = function (callback) {
    //其它玩家出牌通知
    if (callback) {
      event.on("other_chucard_notify", callback);
    }
  };

  that.onSocketClosed = function (callback) {
    //玩家掉线通知
    if (callback) {
      event.on("socket_closed_notify", callback);
    }
  };

  that.onNotLogined = function (callback) {
    //玩家 未登录 通知
    event.on("not_logined", callback);
  };

  that.onUpdateinfo = function (callback) {
    //玩家 分数更新
    event.on("updateinfo_notify", callback);
  };

  that._event = event;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGEvc29ja2V0X2N0ci5qcyJdLCJuYW1lcyI6WyJzb2NrZXRDdHIiLCJ0aGF0IiwicmVzcG9uZV9tYXAiLCJjYWxsX2luZGV4IiwiX3NvY2tldCIsImV2ZW50IiwiX3NlbmRtc2ciLCJjbWR0eXBlIiwicmVxIiwiY2FsbGluZGV4IiwiY29ubmVjdGVkIiwiZmlyZSIsImVtaXQiLCJjbWQiLCJkYXRhIiwiX3JlcXVlc3QiLCJjYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiaW5pdFNvY2tldCIsIm9wdHMiLCJjbG9zZSIsIndpbmRvdyIsImlvIiwiY29ubmVjdCIsImRlZmluZXMiLCJzZXJ2ZXJVcmwiLCJvbiIsInJlcyIsImhhc093blByb3BlcnR5IiwiY2FsbEJhY2tJbmRleCIsInJlc3VsdCIsInR5cGUiLCJyZXF1ZXN0X3d4TG9naW4iLCJyZXF1ZXN0X2NyZWF0cm9vbSIsInJlcXVlc3RfamlvbiIsInJlcXVlc3RfcmVzZXQiLCJyZXF1ZXN0X2VudGVyX3Jvb20iLCJyZXF1ZXN0X3JlX3Jvb20iLCJyZXF1ZXN0X3JlY292ZXJ5IiwicmVxdWVzdF9idWNodV9jYXJkIiwicmVxdWVzdF9jaHVfY2FyZCIsIm9uUGxheWVySm9pblJvb20iLCJvblBsYXllclJlYWR5Iiwib25HYW1lU3RhcnQiLCJvbkNoYW5nZUhvdXNlTWFuYWdlIiwicmVxdWVzdFJlYWR5IiwicmVxdWVzdExlYXZlUm9vbSIsIm9uUGxheWVyRGlzY29ubmVjdCIsIm9uUGxheWVyRGlzb25saW5lIiwib25QbGF5ZXJSZW9ubGluZSIsIm9uR2FtZUZpbmlzaCIsInJlcXVlc3RTdGFydCIsInJlcXVlc3RSb2JTdGF0ZSIsInN0YXRlIiwib25QdXNoQ2FyZHMiLCJvbkNhblJvYlN0YXRlIiwib25Sb2JTdGF0ZSIsIm9uQ2hhbmdlTWFzdGVyIiwib25TaG93Qm90dG9tQ2FyZCIsIm9uQ2FuQ2h1Q2FyZCIsIm9uUm9vbUNoYW5nZVN0YXRlIiwib25PdGhlclBsYXllckNodUNhcmQiLCJvblNvY2tldENsb3NlZCIsIm9uTm90TG9naW5lZCIsIm9uVXBkYXRlaW5mbyIsIl9ldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7QUFDQSxJQUFJQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFVO0FBQ3RCLE1BQUlDLElBQUksR0FBRyxFQUFYO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLENBQWpCO0FBRUFGLEVBQUFBLElBQUksQ0FBQ0csT0FBTCxHQUFlLElBQWY7QUFDQSxNQUFJQyxLQUFLLEdBQUcsOEJBQVksRUFBWixDQUFaOztBQUNDSixFQUFBQSxJQUFJLENBQUNLLFFBQUwsR0FBZ0IsVUFBU0MsT0FBVCxFQUFpQkMsR0FBakIsRUFBcUJDLFNBQXJCLEVBQStCO0FBQy9DLFFBQUcsQ0FBQ1IsSUFBSSxDQUFDRyxPQUFMLENBQWFNLFNBQWpCLEVBQTJCO0FBQzdCO0FBQ0FMLE1BQUFBLEtBQUssQ0FBQ00sSUFBTixDQUFXLHNCQUFYLEVBQWtDLEVBQWxDO0FBQ0E7O0FBQ0tWLElBQUFBLElBQUksQ0FBQ0csT0FBTCxDQUFhUSxJQUFiLENBQWtCLFFBQWxCLEVBQTJCO0FBQUNDLE1BQUFBLEdBQUcsRUFBQ04sT0FBTDtBQUFhTyxNQUFBQSxJQUFJLEVBQUNOLEdBQWxCO0FBQXNCQyxNQUFBQSxTQUFTLEVBQUNBO0FBQWhDLEtBQTNCO0FBQ0gsR0FOQTs7QUFRQVIsRUFBQUEsSUFBSSxDQUFDYyxRQUFMLEdBQWdCLFVBQVNSLE9BQVQsRUFBaUJDLEdBQWpCLEVBQXFCUSxRQUFyQixFQUE4QjtBQUMzQ0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWVgsT0FBWixHQUFvQixJQUFwQixHQUEwQlksSUFBSSxDQUFDQyxTQUFMLENBQWVaLEdBQWYsQ0FBdEM7QUFDQUwsSUFBQUEsVUFBVTtBQUNWRCxJQUFBQSxXQUFXLENBQUNDLFVBQUQsQ0FB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eUIsVUFBUy9DLFFBQVQsRUFBa0I7QUFBRTtBQUN6QyxRQUFHQSxRQUFILEVBQVk7QUFDUlgsTUFBQUEsS0FBSyxDQUFDd0IsRUFBTixDQUFTLG1CQUFULEVBQTZCYixRQUE3QjtBQUNIO0FBQ0osR0FKRDs7QUFNQWYsRUFBQUEsSUFBSSxDQUFDK0Qsb0JBQUwsR0FBNEIsVUFBU2hELFFBQVQsRUFBa0I7QUFBQztBQUMzQyxRQUFHQSxRQUFILEVBQVk7QUFDUlgsTUFBQUEsS0FBSyxDQUFDd0IsRUFBTixDQUFTLHNCQUFULEVBQWdDYixRQUFoQztBQUNIO0FBQ0osR0FKRDs7QUFNSGYsRUFBQUEsSUFBSSxDQUFDZ0UsY0FBTCxHQUFvQixVQUFTakQsUUFBVCxFQUFrQjtBQUFFO0FBQ3ZDLFFBQUdBLFFBQUgsRUFBWTtBQUNSWCxNQUFBQSxLQUFLLENBQUN3QixFQUFOLENBQVMsc0JBQVQsRUFBZ0NiLFFBQWhDO0FBQ0g7QUFDRCxHQUpEOztBQUtBZixFQUFBQSxJQUFJLENBQUNpRSxZQUFMLEdBQWtCLFVBQVNsRCxRQUFULEVBQWtCO0FBQUM7QUFDbENYLElBQUFBLEtBQUssQ0FBQ3dCLEVBQU4sQ0FBUyxhQUFULEVBQXVCYixRQUF2QjtBQUNGLEdBRkQ7O0FBSUFmLEVBQUFBLElBQUksQ0FBQ2tFLFlBQUwsR0FBa0IsVUFBU25ELFFBQVQsRUFBa0I7QUFBQztBQUNwQ1gsSUFBQUEsS0FBSyxDQUFDd0IsRUFBTixDQUFTLG1CQUFULEVBQTZCYixRQUE3QjtBQUNBLEdBRkQ7O0FBR0FmLEVBQUFBLElBQUksQ0FBQ21FLE1BQUwsR0FBWS9ELEtBQVo7QUFFRyxTQUFPSixJQUFQO0FBQ0gsQ0FsUEQ7O2VBb1BlRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV2ZW50bGlzdGVyIGZyb20gXCIuLi91dGlsL2V2ZW50X2xpc3Rlci5qc1wiXG4vLyBpbXBvcnQgc29ja2V0aW8gZnJvbSBcIi4uL2xpYi9zb2NrZXRfaW8uanNcIlxudmFyIHNvY2tldEN0ciA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRoYXQgPSB7fVxuICAgIHZhciByZXNwb25lX21hcCA9IHt9IFxuICAgIHZhciBjYWxsX2luZGV4ID0gMFxuXG4gICAgdGhhdC5fc29ja2V0ID0gbnVsbFxuICAgIHZhciBldmVudCA9IGV2ZW50bGlzdGVyKHt9KVxuICAgICB0aGF0Ll9zZW5kbXNnID0gZnVuY3Rpb24oY21kdHlwZSxyZXEsY2FsbGluZGV4KXtcblx0ICAgIGlmKCF0aGF0Ll9zb2NrZXQuY29ubmVjdGVkKXtcblx0XHRcdC8vdGhhdC5pbml0U29ja2V0KCk7XG5cdFx0XHRldmVudC5maXJlKFwic29ja2V0X2Nsb3NlZF9ub3RpZnlcIix7fSk7XG5cdFx0fVxuICAgICAgICB0aGF0Ll9zb2NrZXQuZW1pdChcIm5vdGlmeVwiLHtjbWQ6Y21kdHlwZSxkYXRhOnJlcSxjYWxsaW5kZXg6Y2FsbGluZGV4fSlcbiAgICB9IFxuIFxuICAgICB0aGF0Ll9yZXF1ZXN0ID0gZnVuY3Rpb24oY21kdHlwZSxyZXEsY2FsbGJhY2spe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNlbmQgY21kOlwiK2NtZHR5cGUrXCIgIFwiKyBKU09OLnN0cmluZ2lmeShyZXEpKVxuICAgICAgICBjYWxsX2luZGV4KysgXG4gICAgICAgIHJlc3BvbmVfbWFwW2NhbGxfaW5kZXhdID0gY2FsbGJhY2tcbiAgICAgICAgdGhhdC5fc2VuZG1zZyhjbWR0eXBlLHJlcSxjYWxsX2luZGV4KVxuICAgIH0gXG4gIFxuICAgICAgICBcbiAgICB0aGF0LmluaXRTb2NrZXQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgJ3JlY29ubmVjdGlvbic6dHJ1ZSxcbiAgICAgICAgICAgICdmb3JjZSBuZXcgY29ubmVjdGlvbic6IGZhbHNlLFxuICAgICAgICAgICAgJ3RyYW5zcG9ydHMnOlsnd2Vic29ja2V0JywgJ3BvbGxpbmcnXVxuICAgICAgICB9XG5cdFx0aWYodGhhdC5fc29ja2V0IT1udWxsKXtcblx0XHRcdHRoYXQuX3NvY2tldC5jbG9zZSgpO1xuXHRcdFx0dGhhdC5fc29ja2V0PW51bGw7XG5cdFx0fVxuICAgICAgICB0aGF0Ll9zb2NrZXQgPSB3aW5kb3cuaW8uY29ubmVjdChkZWZpbmVzLnNlcnZlclVybCxvcHRzKTsvLyBuZXcgV2ViU29ja2V0KGRlZmluZXMuc2VydmVyVXJsKTsvLyBzb2NrZXRpbyhkZWZpbmVzLnNlcnZlclVybCxvcHRzKTsvLyAgd2luZG93LmlvLmNvbm5lY3QoZGVmaW5lcy5zZXJ2ZXJVcmwsb3B0cyk7XG5cbiAgICAgICAgdGhhdC5fc29ja2V0Lm9uKFwiY29ubmVjdGlvblwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3Qgc2VydmVyIHN1Y2Nlc3MhIVwiKVxuXHRcdFx0aWYoY2FsbGJhY2spe1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuacieWbnuiwg1wiKVxuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuICAgICAgICAgIH0pXG5cdFx0dGhhdC5fc29ja2V0Lm9uKFwiZGlzY29ubmVjdFwiLGZ1bmN0aW9uKCl7XG5cdFx0XHRjb25zb2xlLmxvZyhcImRpc2Nvbm5lY3QgZnJvbSBzZXJ2ZXIhXCIpXG5cdFx0XHQgZXZlbnQuZmlyZShcInNvY2tldF9jbG9zZWRfbm90aWZ5XCIse30pO1xuXHRcdH0pXG5cdFx0XG5cbiAgICAgICB0aGF0Ll9zb2NrZXQub24oXCJub3RpZnlcIixmdW5jdGlvbihyZXMpe1xuICAgICAgICAgY29uc29sZS5sb2coXCJvbiBub3RpZnkgY21kOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSlcbiAgICAgICAgIGlmKHJlc3BvbmVfbWFwLmhhc093blByb3BlcnR5KHJlcy5jYWxsQmFja0luZGV4KSl7XG4gICAgICAgICAgIHZhciBjYWxsYmFjayA9IHJlc3BvbmVfbWFwW3Jlcy5jYWxsQmFja0luZGV4XVxuICAgICAgICAgICBpZihjYWxsYmFjayl7XG4gICAgICAgICAgICAgICBjYWxsYmFjayhyZXMucmVzdWx0LHJlcy5kYXRhKVxuICAgICAgICAgICB9XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgIC8vaWYocmVzLmNhbGxCYWNrSW5kZXghPTApe1xuICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibm90IGZvdW5kIGNhbGwgaW5kZXhcIixyZXMuY2FsbEJhY2tJbmRleClcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAvL+aPkOS6pOS4gOS4quebkeWQrOeahOS6i+S7tue7meebkeWQrOWZqFxuICAgICAgICAvLyAgb24gbm90aWZ5IGNtZDp7XCJ0eXBlXCI6XCJwbGF5ZXJfam9pbnJvb21fbm90aWZ5XCIsXCJyZXN1bHRcIjowLFwiZGF0YVwiOlxuICAgICAgICAvLyAge1wiYWNjb3VudGlkXCI6XCIyNTg2NDIyXCIsXCJuaWNrX25hbWVcIjpcInRpbnkxMTBcIixcImF2YXRhclVybFwiOlxuICAgICAgICAvLyAgXCJhdmF0YXJfM1wiLFwiZ29sZGNvdW50XCI6MTAwMCxcInNlYXRpbmRleFwiOjJ9LFwiY2FsbEJhY2tJbmRleFwiOm51bGx9XG4gICAgICAgICAgICAgIC8v5rKh5pyJ5om+5Yiw5Zue5Yiw5Ye95pWw77yM5bCx57uZ5LqL5Lu255uR5ZCs5Zmo5o+Q5Lqk5LiA5Liq5LqL5Lu2XG4gICAgICAgICAgICAgIHZhciB0eXBlID0gcmVzLnR5cGVcbiAgICAgICAgICAgICAgZXZlbnQuZmlyZSh0eXBlLHJlcy5kYXRhKVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgXG4gICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHRoYXQucmVxdWVzdF93eExvZ2luID0gZnVuY3Rpb24ocmVxLGNhbGxiYWNrKXtcbiAgICAgICAgdGhhdC5fcmVxdWVzdChcInd4bG9naW5cIixyZXEsY2FsbGJhY2spXG4gICAgfVxuICAgIFxuICAgIHRoYXQucmVxdWVzdF9jcmVhdHJvb20gPSBmdW5jdGlvbihyZXEsY2FsbGJhY2spe1xuICAgICAgICB0aGF0Ll9yZXF1ZXN0KFwiY3JlYXRlcm9vbV9yZXFcIixyZXEsY2FsbGJhY2spXG4gICAgfVxuXG4gICAgdGhhdC5yZXF1ZXN0X2ppb24gPSBmdW5jdGlvbihyZXEsY2FsbGJhY2spe1xuICAgICAgICB0aGF0Ll9yZXF1ZXN0KFwiam9pbnJvb21fcmVxXCIscmVxLGNhbGxiYWNrKVxuICAgIH1cblx0dGhhdC5yZXF1ZXN0X3Jlc2V0ID0gZnVuY3Rpb24ocmVxLGNhbGxiYWNrKXtcblx0ICAgIHRoYXQuX3JlcXVlc3QoXCJyZXNldHJvb21fcmVxXCIscmVxLGNhbGxiYWNrKVxuXHR9XG5cbiAgICB0aGF0LnJlcXVlc3RfZW50ZXJfcm9vbSA9IGZ1bmN0aW9uKHJlcSxjYWxsYmFjayl7XG4gICAgICAgdGhhdC5fcmVxdWVzdChcImVudGVycm9vbV9yZXFcIixyZXEsY2FsbGJhY2spXG4gICAgfVxuXG4gICAgIHRoYXQucmVxdWVzdF9yZV9yb29tID0gZnVuY3Rpb24ocmVxLGNhbGxiYWNrKXtcbiAgICAgICAgIHRoYXQuX3JlcXVlc3QoXCJyZXJvb21fcmVxXCIscmVxLGNhbGxiYWNrKVxuICAgICB9XG5cdCBcblx0IHRoYXQucmVxdWVzdF9yZWNvdmVyeSA9IGZ1bmN0aW9uKHJlcSxjYWxsYmFjayl7Ly8g6K+35rGCIOaBouWkjeeJjOWxgOS/oeaBr1xuXHQgICAgIHRoYXQuX3JlcXVlc3QoXCJyZWNvdmVyeV9yZXFcIixyZXEsY2FsbGJhY2spXG5cdCB9XG4gICAgLy/lj5HpgIHkuI3lh7rniYzkv6Hmga9cbiAgICB0aGF0LnJlcXVlc3RfYnVjaHVfY2FyZCA9ICBmdW5jdGlvbihyZXEsY2FsbGJhY2spe1xuICAgICAgICB0aGF0Ll9yZXF1ZXN0KFwiY2h1X2J1X2NhcmRfcmVxXCIscmVxLGNhbGxiYWNrKVxuICAgIH1cbiAgICAvKueOqeWutuWHuueJjFxuICAgICAg6ZyA6KaB5Yik5patOiBcbiAgICAgICAgIOWHuueahOeJjOaYr+WQpuespuWQiOinhOWImVxuICAgICAgICAg5ZKM5LiK5Liq5Ye654mM546p5a625q+U6L6D77yM5piv5ZCm5ruh6Laz5p2h5Lu2XG5cbiAgICAqL1xuICAgIHRoYXQucmVxdWVzdF9jaHVfY2FyZCA9IGZ1bmN0aW9uKHJlcSxjYWxsYmFjayl7XG4gICAgICAgdGhhdC5fcmVxdWVzdChcImNodV9jYXJkX3JlcVwiLHJlcSxjYWxsYmFjaylcbiAgICB9XG4gICAgLy/nm5HlkKzlhbbku5bnjqnlrrbov5vlhaXmiL/pl7Tmtojmga9cbiAgICB0aGF0Lm9uUGxheWVySm9pblJvb20gPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgICBldmVudC5vbihcInBsYXllcl9qb2lucm9vbV9ub3RpZnlcIixjYWxsYmFjaylcbiAgICB9XG5cbiAgICB0aGF0Lm9uUGxheWVyUmVhZHkgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGV2ZW50Lm9uKFwicGxheWVyX3JlYWR5X25vdGlmeVwiLGNhbGxiYWNrKVxuICAgIH1cblxuICAgIHRoYXQub25HYW1lU3RhcnQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgZXZlbnQub24oXCJnYW1lU3RhcnRfbm90aWZ5XCIsY2FsbGJhY2spXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGF0Lm9uQ2hhbmdlSG91c2VNYW5hZ2UgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwiY2hhbmdlaG91c2VtYW5hZ2Vfbm90aWZ5XCIsY2FsbGJhY2spXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/lj5HpgIFyZWFkeea2iOaBr1xuICAgIHRoYXQucmVxdWVzdFJlYWR5ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdGhhdC5fc2VuZG1zZyhcInBsYXllcl9yZWFkeV9ub3RpZnlcIix7fSxudWxsKVxuICAgIH1cblx0dGhhdC5yZXF1ZXN0TGVhdmVSb29tPWZ1bmN0aW9uKCl7XG5cdFx0dGhhdC5fc2VuZG1zZyhcInBsYXllcl9sZWF2ZV9yb29tXCIse30sbnVsbClcblx0fVxuICAgIC8v55uR5ZCsIGRpc2Nvbm5lY3Qg5raI5oGvICDnjqnlrrYg56a75byA5oi/6Ze0XG5cdHRoYXQub25QbGF5ZXJEaXNjb25uZWN0PWZ1bmN0aW9uKGNhbGxiYWNrKXtcblx0XHRpZihjYWxsYmFjayl7XG5cdFx0XHRldmVudC5vbihcInBsYXllcl9kaXNjb25uZWN0X25vdGlmeVwiLGNhbGxiYWNrKTtcblx0XHR9XG5cdH1cblx0Ly/nm5HlkKwgZGlzb25saW5lIOa2iOaBryAg546p5a62IOa4uOaIj+S4reaOiee6v1xuXHR0aGF0Lm9uUGxheWVyRGlzb25saW5lPWZ1bmN0aW9uKGNhbGxiYWNrKXtcblx0XHRpZihjYWxsYmFjayl7XG5cdFx0XHRldmVudC5vbihcInBsYXllcl9kaXNvbmxpbmVfbm90aWZ5XCIsY2FsbGJhY2spO1xuXHRcdH1cblx0fVxuXHQvL+ebkeWQrCByZW9ubGluZSDmtojmga8gIOeOqeWutiDmuLjmiI/kuK3ph43mlrDov57nur9cblx0dGhhdC5vblBsYXllclJlb25saW5lPWZ1bmN0aW9uKGNhbGxiYWNrKXtcblx0XHRpZihjYWxsYmFjayl7XG5cdFx0XHRldmVudC5vbihcInBsYXllcl9yZW9ubGluZV9ub3RpZnlcIixjYWxsYmFjayk7XG5cdFx0fVxuXHR9XG5cdHRoYXQub25HYW1lRmluaXNoPWZ1bmN0aW9uKGNhbGxiYWNrKXtcblx0XHRpZihjYWxsYmFjayl7XG5cdFx0XHRldmVudC5vbihcImdhbWVGaW5pc2hfbm90aWZ5XCIsY2FsbGJhY2spOy8v55uR5ZCs5pyN5Yqh56uvIOi/lOWbnua2iOaBr1xuXHRcdH1cblx0fVxuXHRcbiBcbiAgICB0aGF0LnJlcXVlc3RTdGFydCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgdGhhdC5fcmVxdWVzdChcInBsYXllcl9zdGFydF9ub3RpZnlcIix7fSxjYWxsYmFjaylcbiAgICB9XG5cbiAgICAvL+eOqeWutumAmuefpeacjeWKoeWZqOaKouWcsOS4u+a2iOaBr1xuICAgIHRoYXQucmVxdWVzdFJvYlN0YXRlID0gZnVuY3Rpb24oc3RhdGUpe1xuICAgICAgICB0aGF0Ll9zZW5kbXNnKFwicGxheWVyX3JvYl9ub3RpZnlcIixzdGF0ZSxudWxsKVxuICAgIH1cbiAgICAvL+acjeWKoeWZqOS4i+WPkeeJjOmAmuefpVxuICAgIHRoYXQub25QdXNoQ2FyZHMgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwicHVzaGNhcmRfbm90aWZ5XCIsY2FsbGJhY2spXG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/nm5HlkKzmnI3liqHlmajpgJrnn6XlvIDlp4vmiqLlnLDkuLvmtojmga9cbiAgICB0aGF0Lm9uQ2FuUm9iU3RhdGUgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwiY2Fucm9iX25vdGlmeVwiLGNhbGxiYWNrKVxuICAgICAgICAgfVxuICAgIH1cblxuICAgIC8v55uR5ZCs5pyN5Yqh5ZmoOumAmuefpeiwgeaKouWcsOS4u+aTjeS9nOa2iOaBr1xuICAgIHRoYXQub25Sb2JTdGF0ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICAgICAgZXZlbnQub24oXCJjYW5yb2Jfc3RhdGVfbm90aWZ5XCIsY2FsbGJhY2spXG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/nm5HlkKzmnI3liqHlmag656Gu5a6a5Zyw5Li75raI5oGvXG4gICAgdGhhdC5vbkNoYW5nZU1hc3RlciA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICAgICAgZXZlbnQub24oXCJjaGFuZ2VfbWFzdGVyX25vdGlmeVwiLGNhbGxiYWNrKVxuICAgICAgICAgfVxuICAgIH1cblxuICAgIC8v55uR5ZCs5pyN5Yqh5ZmoOuaYvuekuuW6leeJjOa2iOaBr1xuICAgIHRoYXQub25TaG93Qm90dG9tQ2FyZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICAgICAgZXZlbnQub24oXCJjaGFuZ2Vfc2hvd2NhcmRfbm90aWZ5XCIsY2FsbGJhY2spXG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/nm5HlkKzmnI3liqHlmag65Y+v5Lul5Ye654mM5raI5oGvXG4gICAgdGhhdC5vbkNhbkNodUNhcmQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwiY2FuX2NodV9jYXJkX25vdGlmeVwiLGNhbGxiYWNrKVxuICAgICAgICB9XG4gICAgfVxuICAgXG4gICAgdGhhdC5vblJvb21DaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKXsgLy8g5oi/6Ze054q25oCB5pS55Y+Y6YCa55+lXG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGV2ZW50Lm9uKFwicm9vbV9zdGF0ZV9ub3RpZnlcIixjYWxsYmFjaylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoYXQub25PdGhlclBsYXllckNodUNhcmQgPSBmdW5jdGlvbihjYWxsYmFjayl7Ly/lhbblroPnjqnlrrblh7rniYzpgJrnn6VcbiAgICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICAgICAgZXZlbnQub24oXCJvdGhlcl9jaHVjYXJkX25vdGlmeVwiLGNhbGxiYWNrKVxuICAgICAgICB9XG4gICAgfVxuXHRcblx0dGhhdC5vblNvY2tldENsb3NlZD1mdW5jdGlvbihjYWxsYmFjayl7IC8v546p5a625o6J57q/6YCa55+lXG5cdFx0aWYoY2FsbGJhY2spe1xuXHRcdCAgICBldmVudC5vbihcInNvY2tldF9jbG9zZWRfbm90aWZ5XCIsY2FsbGJhY2spXG5cdFx0fVxuXHR9XG5cdHRoYXQub25Ob3RMb2dpbmVkPWZ1bmN0aW9uKGNhbGxiYWNrKXsvL+eOqeWutiDmnKrnmbvlvZUg6YCa55+lXG5cdFx0ICBldmVudC5vbihcIm5vdF9sb2dpbmVkXCIsY2FsbGJhY2spXG5cdH1cblxuXHR0aGF0Lm9uVXBkYXRlaW5mbz1mdW5jdGlvbihjYWxsYmFjayl7Ly/njqnlrrYg5YiG5pWw5pu05pawXG5cdFx0ZXZlbnQub24oXCJ1cGRhdGVpbmZvX25vdGlmeVwiLGNhbGxiYWNrKVxuXHR9XG5cdHRoYXQuX2V2ZW50PWV2ZW50O1xuXHRcbiAgICByZXR1cm4gdGhhdFxufVxuXG5leHBvcnQgZGVmYXVsdCBzb2NrZXRDdHIgIl19
//------QC-SOURCE-SPLIT------

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
  _createroom: function _createroom(level, callback) {
    if (level < 0 || level > 4) {
      callback("create room level error" + level);
      console.log("create room level error" + level);
      return;
    } // var global = 0
    // if (rate==1){
    //     global = 10
    // }else if(rate==2){
    //     global = 20
    // }else if(rate==3){
    //     global = 30
    // }else if(rate==4){
    //     global = 40
    // }


    var room_para = {
      // global:global,
      level: level
    }; //播放一个等待动画

    _mygolbal["default"].socket.request_creatroom(room_para, function (err, result) {
      if (err != 0) {
        console.log("create_room err:" + err);
        callback(err, result);
      } else {
        console.log("create_room" + JSON.stringify(result)); //网络数据包

        _mygolbal["default"].playerData.bottom = result.bottom;
        _mygolbal["default"].playerData.rate = result.rate;
        cc.director.loadScene("gameScene");
        callback(0);
      }
    });
  },
  // update (dt) {},
  onButtonClick: function onButtonClick(event, customData) {
    var callback = function (err, result) {
      //
      if (err == 0) {
        this.node.destroy();
      } else {
        Toast.show(result);
      } //

    }.bind(this);

    switch (customData) {
      case "create_room_1":
        this._createroom(1, callback);

        break;

      case "create_room_2":
        this._createroom(2, callback);

        break;

      case "create_room_3":
        this._createroom(3, callback);

        break;

      case "create_room_4":
        this._createroom(4, callback);

        break;

      case "create_room_close":
        this.node.destroy();
        break;

      default:
        break;
    } // this.node.destroy() 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hhbGxzY2VuZS9wcmVmYWJzX3NjcmlwdC9jcmVhdFJvb20uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsIl9jcmVhdGVyb29tIiwibGV2ZWwiLCJjYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJyb29tX3BhcmEiLCJteWdsb2JhbCIsInNvY2tldCIsInJlcXVlc3RfY3JlYXRyb29tIiwiZXJyIiwicmVzdWx0IiwiSlNPTiIsInN0cmluZ2lmeSIsInBsYXllckRhdGEiLCJib3R0b20iLCJyYXRlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJvbkJ1dHRvbkNsaWNrIiwiZXZlbnQiLCJjdXN0b21EYXRhIiwibm9kZSIsImRlc3Ryb3kiLCJUb2FzdCIsInNob3ciLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0w7QUFFQTtBQUVBQyxFQUFBQSxLQVhLLG1CQVdJLENBRVIsQ0FiSTtBQWVMQyxFQUFBQSxXQWZLLHVCQWVPQyxLQWZQLEVBZWFDLFFBZmIsRUFlc0I7QUFDdkIsUUFBR0QsS0FBSyxHQUFDLENBQU4sSUFBV0EsS0FBSyxHQUFDLENBQXBCLEVBQXNCO0FBQzNCQyxNQUFBQSxRQUFRLENBQUMsNEJBQTJCRCxLQUE1QixDQUFSO0FBQ1NFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUEyQkgsS0FBdkM7QUFDQTtBQUNILEtBTHNCLENBT3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxRQUFJSSxTQUFTLEdBQUc7QUFDVDtBQUNDSixNQUFBQSxLQUFLLEVBQUNBO0FBRkUsS0FBaEIsQ0FsQnVCLENBc0JmOztBQUVBSyx5QkFBU0MsTUFBVCxDQUFnQkMsaUJBQWhCLENBQWtDSCxTQUFsQyxFQUE0QyxVQUFTSSxHQUFULEVBQWFDLE1BQWIsRUFBb0I7QUFDNUQsVUFBSUQsR0FBRyxJQUFFLENBQVQsRUFBVztBQUNQTixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBbUJLLEdBQS9CO0FBQ2xCUCxRQUFBQSxRQUFRLENBQUNPLEdBQUQsRUFBS0MsTUFBTCxDQUFSO0FBQ2UsT0FIRCxNQUdLO0FBQ0RQLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFnQk8sSUFBSSxDQUFDQyxTQUFMLENBQWVGLE1BQWYsQ0FBNUIsRUFEQyxDQUVEOztBQUNBSiw2QkFBU08sVUFBVCxDQUFvQkMsTUFBcEIsR0FBNkJKLE1BQU0sQ0FBQ0ksTUFBcEM7QUFDQVIsNkJBQVNPLFVBQVQsQ0FBb0JFLElBQXBCLEdBQTJCTCxNQUFNLENBQUNLLElBQWxDO0FBQ0FwQixRQUFBQSxFQUFFLENBQUNxQixRQUFILENBQVlDLFNBQVosQ0FBc0IsV0FBdEI7QUFDbEJmLFFBQUFBLFFBQVEsQ0FBQyxDQUFELENBQVI7QUFDZTtBQUVKLEtBYkQ7QUFjWCxHQXJESTtBQXVETDtBQUNBZ0IsRUFBQUEsYUF4REsseUJBd0RTQyxLQXhEVCxFQXdEZUMsVUF4RGYsRUF3RDBCO0FBQ2pDLFFBQUlsQixRQUFRLEdBQUMsVUFBU08sR0FBVCxFQUFhQyxNQUFiLEVBQW9CO0FBQUM7QUFDaEMsVUFBR0QsR0FBRyxJQUFFLENBQVIsRUFBVTtBQUNULGFBQUtZLElBQUwsQ0FBVUMsT0FBVjtBQUNBLE9BRkQsTUFFSztBQUNKQyxRQUFBQSxLQUFLLENBQUNDLElBQU4sQ0FBV2QsTUFBWDtBQUNBLE9BTDhCLENBTy9COztBQUNELEtBUlksQ0FRWGUsSUFSVyxDQVFOLElBUk0sQ0FBYjs7QUFTTSxZQUFPTCxVQUFQO0FBQ0ksV0FBSyxlQUFMO0FBQ00sYUFBS3BCLFdBQUwsQ0FBaUIsQ0FBakIsRUFBbUJFLFFBQW5COztBQUNBOztBQUNOLFdBQUssZUFBTDtBQUNNLGFBQUtGLFdBQUwsQ0FBaUIsQ0FBakIsRUFBbUJFLFFBQW5COztBQUNBOztBQUNOLFdBQUssZUFBTDtBQUNNLGFBQUtGLFdBQUwsQ0FBaUIsQ0FBakIsRUFBbUJFLFFBQW5COztBQUNBOztBQUNOLFdBQUssZUFBTDtBQUNNLGFBQUtGLFdBQUwsQ0FBaUIsQ0FBakIsRUFBbUJFLFFBQW5COztBQUNBOztBQUNOLFdBQUssbUJBQUw7QUFDTSxhQUFLbUIsSUFBTCxDQUFVQyxPQUFWO0FBQ0Y7O0FBQ0o7QUFDSTtBQWpCUixLQVYyQixDQTZCNUI7O0FBRUY7QUF2RkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15Z2xvYmFsIGZyb20gXCIuLi8uLi9teWdvbGJhbC5qc1wiXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICBcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgX2NyZWF0ZXJvb20obGV2ZWwsY2FsbGJhY2spe1xuICAgICAgICBpZihsZXZlbDwwIHx8IGxldmVsPjQpe1xuXHRcdFx0Y2FsbGJhY2soXCJjcmVhdGUgcm9vbSBsZXZlbCBlcnJvclwiKyBsZXZlbClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIHJvb20gbGV2ZWwgZXJyb3JcIisgbGV2ZWwpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhciBnbG9iYWwgPSAwXG4gICAgICAgIC8vIGlmIChyYXRlPT0xKXtcbiAgICAgICAgLy8gICAgIGdsb2JhbCA9IDEwXG4gICAgICAgIC8vIH1lbHNlIGlmKHJhdGU9PTIpe1xuICAgICAgICAvLyAgICAgZ2xvYmFsID0gMjBcbiAgICAgICAgLy8gfWVsc2UgaWYocmF0ZT09Myl7XG4gICAgICAgIC8vICAgICBnbG9iYWwgPSAzMFxuICAgICAgICAvLyB9ZWxzZSBpZihyYXRlPT00KXtcbiAgICAgICAgLy8gICAgIGdsb2JhbCA9IDQwXG4gICAgICAgIC8vIH1cblxuICAgICAgICB2YXIgcm9vbV9wYXJhID0ge1xuICAgICAgICAgICAgICAgLy8gZ2xvYmFsOmdsb2JhbCxcbiAgICAgICAgICAgICAgICBsZXZlbDpsZXZlbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL+aSreaUvuS4gOS4quetieW+heWKqOeUu1xuXHRcdFx0XHRcbiAgICAgICAgICAgICAgICBteWdsb2JhbC5zb2NrZXQucmVxdWVzdF9jcmVhdHJvb20ocm9vbV9wYXJhLGZ1bmN0aW9uKGVycixyZXN1bHQpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyIT0wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlX3Jvb20gZXJyOlwiK2Vycilcblx0XHRcdFx0XHRcdGNhbGxiYWNrKGVycixyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVfcm9vbVwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v572R57uc5pWw5o2u5YyFXG4gICAgICAgICAgICAgICAgICAgICAgICBteWdsb2JhbC5wbGF5ZXJEYXRhLmJvdHRvbSA9IHJlc3VsdC5ib3R0b21cbiAgICAgICAgICAgICAgICAgICAgICAgIG15Z2xvYmFsLnBsYXllckRhdGEucmF0ZSA9IHJlc3VsdC5yYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lU2NlbmVcIilcblx0XHRcdFx0XHRcdGNhbGxiYWNrKDApXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxuICAgIG9uQnV0dG9uQ2xpY2soZXZlbnQsY3VzdG9tRGF0YSl7XG5cdFx0dmFyIGNhbGxiYWNrPWZ1bmN0aW9uKGVycixyZXN1bHQpey8vXG5cdFx0XHQgaWYoZXJyPT0wKXtcblx0XHRcdCAgdGhpcy5ub2RlLmRlc3Ryb3koKVxuXHRcdFx0IH1lbHNle1xuXHRcdFx0XHQgVG9hc3Quc2hvdyhyZXN1bHQpO1xuXHRcdFx0IH1cblx0XHRcdCBcblx0XHRcdCAvL1xuXHRcdH0uYmluZCh0aGlzKVxuICAgICAgICBzd2l0Y2goY3VzdG9tRGF0YSl7XG4gICAgICAgICAgICBjYXNlIFwiY3JlYXRlX3Jvb21fMVwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlcm9vbSgxLGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJjcmVhdGVfcm9vbV8yXCI6XG4gICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVyb29tKDIsY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcImNyZWF0ZV9yb29tXzNcIjpcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZXJvb20oMyxjYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwiY3JlYXRlX3Jvb21fNFwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlcm9vbSg0LGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJjcmVhdGVfcm9vbV9jbG9zZVwiOlxuICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKSBcbiAgICAgICAgICAgICAgICBicmVhayAgICAgICBcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCkgXG5cbiAgICB9XG5cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameScene/prefabs/card.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2afe8rz92BOl7CbQfKSCoLh', 'card');
// scripts/gameScene/prefabs/card.js

"use strict";

var _mygolbal = _interopRequireDefault(require("../../mygolbal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    cards_sprite_atlas: cc.SpriteAtlas
  },
  onLoad: function onLoad() {
    this.flag = false;
    this.offset_y = 20;
    this.node.on("reset_card_flag", function (event) {
      if (this, flag == true) {
        this, flag = false;
        this.node.y -= this.offset_y;
      }
    }.bind(this)); // this.node.on("chu_card_succ",function(event){
    //    var chu_card_list = event
    //    for(var i=0;i<chu_card_list.length;i++){
    //     if(chu_card_list[i].card_id==this.card_id){
    //         //this.runToCenter(chu_card_list[i])
    //         //this.node.destory()
    //     }
    //    }
    // }.bind(this))
  },
  runToCenter: function runToCenter() {//移动到屏幕中间，并带一个牌缩小的效果
  },
  start: function start() {},
  init_data: function init_data(data) {},
  // update (dt) {},
  setTouchEvent: function setTouchEvent() {
    if (this.accountid == _mygolbal["default"].playerData.accountID) {
      this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
        var gameScene_node = this.node.parent.parent;
        var room_state = gameScene_node.getComponent("gameScene").roomstate;

        if (room_state == RoomState.ROOM_PLAYING) {
          console.log("TOUCH_START id:" + this.card_id);

          if (this.flag == false) {
            this.flag = true;
            this.node.y += this.offset_y; //通知gameui层选定的牌

            var carddata = {
              "cardid": this.card_id,
              "card_data": this.card_data
            };
            gameScene_node.emit("choose_card_event", carddata);
          } else {
            this.flag = false;
            this.node.y -= this.offset_y; //通知gameUI取消了那张牌

            gameScene_node.emit("unchoose_card_event", this.card_id);
          }
        }
      }.bind(this));
    }
  },
  showCards: function showCards(card, accountid) {
    //card.index是服务器生成card给对象设置的一副牌里唯一id
    this.card_id = card.index; //传入参数 card={"value":5,"shape":1,"index":20}

    this.card_data = card;

    if (accountid) {
      this.accountid = accountid; //标识card属于的玩家
    } //this.node.getComponent(cc.Sprite).spriteFrame = 
    //服务器定义牌的表示
    // const cardvalue = {
    //     "A": 12,
    //     "2": 13,
    //     "3": 1,
    //     "4": 2,
    //     "5": 3,
    //     "6": 4,
    //     "7": 5,
    //     "8": 6,
    //     "9": 7,
    //     "10": 8,
    //     "J": 9,
    //     "Q": 10,
    //     "K": 11,
    // }
    //服务器返回的是key,value对应的是资源的编号


    var CardValue = {
      "12": 1,
      "13": 2,
      "1": 3,
      "2": 4,
      "3": 5,
      "4": 6,
      "5": 7,
      "6": 8,
      "7": 9,
      "8": 10,
      "9": 11,
      "10": 12,
      "11": 13
    }; // 黑桃：spade
    // 红桃：heart
    // 梅花：club
    // 方片：diamond
    // const CardShape = {
    //     "S": 1,
    //     "H": 2,
    //     "C": 3,
    //     "D": 4,
    // };

    var cardShpae = {
      "1": 3,
      "2": 2,
      "3": 1,
      "4": 0
    };
    var Kings = {
      "14": 54,
      "15": 53
    };
    var spriteKey = '';

    if (card.shape) {
      spriteKey = 'card_' + (cardShpae[card.shape] * 13 + CardValue[card.value]);
    } else {
      spriteKey = 'card_' + Kings[card.king];
    } // console.log("spriteKey"+spriteKey)


    this.node.getComponent(cc.Sprite).spriteFrame = this.cards_sprite_atlas.getSpriteFrame(spriteKey);
    this.setTouchEvent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVTY2VuZS9wcmVmYWJzL2NhcmQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjYXJkc19zcHJpdGVfYXRsYXMiLCJTcHJpdGVBdGxhcyIsIm9uTG9hZCIsImZsYWciLCJvZmZzZXRfeSIsIm5vZGUiLCJvbiIsImV2ZW50IiwieSIsImJpbmQiLCJydW5Ub0NlbnRlciIsInN0YXJ0IiwiaW5pdF9kYXRhIiwiZGF0YSIsInNldFRvdWNoRXZlbnQiLCJhY2NvdW50aWQiLCJteWdsb2JhbCIsInBsYXllckRhdGEiLCJhY2NvdW50SUQiLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJnYW1lU2NlbmVfbm9kZSIsInBhcmVudCIsInJvb21fc3RhdGUiLCJnZXRDb21wb25lbnQiLCJyb29tc3RhdGUiLCJSb29tU3RhdGUiLCJST09NX1BMQVlJTkciLCJjb25zb2xlIiwibG9nIiwiY2FyZF9pZCIsImNhcmRkYXRhIiwiY2FyZF9kYXRhIiwiZW1pdCIsInNob3dDYXJkcyIsImNhcmQiLCJpbmRleCIsIkNhcmRWYWx1ZSIsImNhcmRTaHBhZSIsIktpbmdzIiwic3ByaXRlS2V5Iiwic2hhcGUiLCJ2YWx1ZSIsImtpbmciLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImdldFNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNYQyxJQUFBQSxrQkFBa0IsRUFBRUosRUFBRSxDQUFDSztBQURaLEdBSFA7QUFRTEMsRUFBQUEsTUFSSyxvQkFRSztBQUNOLFNBQUtDLElBQUwsR0FBWSxLQUFaO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUVBLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLGlC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N0JxQixDQTZDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBTUMsU0FBUyxHQUFHO0FBQ2QsV0FBSyxDQURTO0FBRWQsV0FBSyxDQUZTO0FBR2QsV0FBSyxDQUhTO0FBSWQsV0FBSztBQUpTLEtBQWxCO0FBTUEsUUFBTUMsS0FBSyxHQUFHO0FBQ1YsWUFBTSxFQURJO0FBRVYsWUFBTTtBQUZJLEtBQWQ7QUFLQSxRQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsUUFBSUwsSUFBSSxDQUFDTSxLQUFULEVBQWU7QUFDWEQsTUFBQUEsU0FBUyxHQUFHLFdBQVdGLFNBQVMsQ0FBQ0gsSUFBSSxDQUFDTSxLQUFOLENBQVQsR0FBd0IsRUFBeEIsR0FBNkJKLFNBQVMsQ0FBQ0YsSUFBSSxDQUFDTyxLQUFOLENBQWpELENBQVo7QUFFSCxLQUhELE1BR007QUFDRkYsTUFBQUEsU0FBUyxHQUFHLFVBQVVELEtBQUssQ0FBQ0osSUFBSSxDQUFDUSxJQUFOLENBQTNCO0FBQ0gsS0F4RW9CLENBMEV0Qjs7O0FBQ0MsU0FBS3ZDLElBQUwsQ0FBVW9CLFlBQVYsQ0FBdUI3QixFQUFFLENBQUNpRCxNQUExQixFQUFrQ0MsV0FBbEMsR0FBZ0QsS0FBSzlDLGtCQUFMLENBQXdCK0MsY0FBeEIsQ0FBdUNOLFNBQXZDLENBQWhEO0FBQ0EsU0FBSzNCLGFBQUw7QUFDSDtBQWxKSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlnbG9iYWwgZnJvbSBcIi4uLy4uL215Z29sYmFsLmpzXCJcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgY2FyZHNfc3ByaXRlX2F0bGFzOiBjYy5TcHJpdGVBdGxhcyxcbiAgICAgXG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuZmxhZyA9IGZhbHNlXG4gICAgICAgIHRoaXMub2Zmc2V0X3kgPSAyMFxuICAgICAgICBcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwicmVzZXRfY2FyZF9mbGFnXCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgaWYodGhpcyxmbGFnPT10cnVlKXtcbiAgICAgICAgICAgICAgICB0aGlzLGZsYWcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMub2Zmc2V0X3lcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcImNodV9jYXJkX3N1Y2NcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgIC8vICAgIHZhciBjaHVfY2FyZF9saXN0ID0gZXZlbnRcbiAgICAgICAgLy8gICAgZm9yKHZhciBpPTA7aTxjaHVfY2FyZF9saXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICAvLyAgICAgaWYoY2h1X2NhcmRfbGlzdFtpXS5jYXJkX2lkPT10aGlzLmNhcmRfaWQpe1xuICAgICAgICAvLyAgICAgICAgIC8vdGhpcy5ydW5Ub0NlbnRlcihjaHVfY2FyZF9saXN0W2ldKVxuICAgICAgICAvLyAgICAgICAgIC8vdGhpcy5ub2RlLmRlc3RvcnkoKVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICB9XG4gICAgICAgIC8vIH0uYmluZCh0aGlzKSlcbiAgICB9LFxuXG4gICAgcnVuVG9DZW50ZXIoKXtcbiAgICAgICAgLy/np7vliqjliLDlsY/luZXkuK3pl7TvvIzlubbluKbkuIDkuKrniYznvKnlsI/nmoTmlYjmnpxcbiAgICB9LFxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICBpbml0X2RhdGEoZGF0YSl7XG5cbiAgICB9LFxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxuICAgIHNldFRvdWNoRXZlbnQoKXtcbiAgICAgICAgaWYodGhpcy5hY2NvdW50aWQ9PW15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKXtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAgICAgdmFyIGdhbWVTY2VuZV9ub2RlID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQgIFxuICAgICAgICAgICAgICAgIHZhciByb29tX3N0YXRlID0gZ2FtZVNjZW5lX25vZGUuZ2V0Q29tcG9uZW50KFwiZ2FtZVNjZW5lXCIpLnJvb21zdGF0ZVxuICAgICAgICAgICAgICAgIGlmKHJvb21fc3RhdGU9PVJvb21TdGF0ZS5ST09NX1BMQVlJTkcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRPVUNIX1NUQVJUIGlkOlwiK3RoaXMuY2FyZF9pZClcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5mbGFnPT1mYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYWcgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLm9mZnNldF95XG4gICAgICAgICAgICAgICAgICAgICAgICAvL+mAmuefpWdhbWV1aeWxgumAieWumueahOeJjFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmRkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZGlkXCI6dGhpcy5jYXJkX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FyZF9kYXRhXCI6dGhpcy5jYXJkX2RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lU2NlbmVfbm9kZS5lbWl0KFwiY2hvb3NlX2NhcmRfZXZlbnRcIixjYXJkZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYWc9ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMub2Zmc2V0X3lcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v6YCa55+lZ2FtZVVJ5Y+W5raI5LqG6YKj5byg54mMXG4gICAgICAgICAgICAgICAgICAgICAgIGdhbWVTY2VuZV9ub2RlLmVtaXQoXCJ1bmNob29zZV9jYXJkX2V2ZW50XCIsdGhpcy5jYXJkX2lkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH0sXG4gICAgc2hvd0NhcmRzKGNhcmQsYWNjb3VudGlkKXtcbiAgICAgICAgLy9jYXJkLmluZGV45piv5pyN5Yqh5Zmo55Sf5oiQY2FyZOe7meWvueixoeiuvue9rueahOS4gOWJr+eJjOmHjOWUr+S4gGlkXG4gICAgICAgIHRoaXMuY2FyZF9pZCA9IGNhcmQuaW5kZXhcbiAgICAgICAgLy/kvKDlhaXlj4LmlbAgY2FyZD17XCJ2YWx1ZVwiOjUsXCJzaGFwZVwiOjEsXCJpbmRleFwiOjIwfVxuICAgICAgICB0aGlzLmNhcmRfZGF0YSA9IGNhcmRcbiAgICAgICAgaWYoYWNjb3VudGlkKXtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudGlkID0gYWNjb3VudGlkIC8v5qCH6K+GY2FyZOWxnuS6jueahOeOqeWutlxuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIC8vdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gXG4gICAgICAgIC8v5pyN5Yqh5Zmo5a6a5LmJ54mM55qE6KGo56S6XG4gICAgICAgIC8vIGNvbnN0IGNhcmR2YWx1ZSA9IHtcbiAgICAgICAgLy8gICAgIFwiQVwiOiAxMixcbiAgICAgICAgLy8gICAgIFwiMlwiOiAxMyxcbiAgICAgICAgLy8gICAgIFwiM1wiOiAxLFxuICAgICAgICAvLyAgICAgXCI0XCI6IDIsXG4gICAgICAgIC8vICAgICBcIjVcIjogMyxcbiAgICAgICAgLy8gICAgIFwiNlwiOiA0LFxuICAgICAgICAvLyAgICAgXCI3XCI6IDUsXG4gICAgICAgIC8vICAgICBcIjhcIjogNixcbiAgICAgICAgLy8gICAgIFwiOVwiOiA3LFxuICAgICAgICAvLyAgICAgXCIxMFwiOiA4LFxuICAgICAgICAvLyAgICAgXCJKXCI6IDksXG4gICAgICAgIC8vICAgICBcIlFcIjogMTAsXG4gICAgICAgIC8vICAgICBcIktcIjogMTEsXG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIC8v5pyN5Yqh5Zmo6L+U5Zue55qE5piva2V5LHZhbHVl5a+55bqU55qE5piv6LWE5rqQ55qE57yW5Y+3XG4gICAgICAgIGNvbnN0IENhcmRWYWx1ZSA9IHtcbiAgICAgICAgICAgIFwiMTJcIjogMSxcbiAgICAgICAgICAgIFwiMTNcIjogMixcbiAgICAgICAgICAgIFwiMVwiOiAzLFxuICAgICAgICAgICAgXCIyXCI6IDQsXG4gICAgICAgICAgICBcIjNcIjogNSxcbiAgICAgICAgICAgIFwiNFwiOiA2LFxuICAgICAgICAgICAgXCI1XCI6IDcsXG4gICAgICAgICAgICBcIjZcIjogOCxcbiAgICAgICAgICAgIFwiN1wiOiA5LFxuICAgICAgICAgICAgXCI4XCI6IDEwLFxuICAgICAgICAgICAgXCI5XCI6IDExLFxuICAgICAgICAgICAgXCIxMFwiOiAxMixcbiAgICAgICAgICAgIFwiMTFcIjogMTNcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDpu5HmoYPvvJpzcGFkZVxuICAgICAgICAvLyDnuqLmoYPvvJpoZWFydFxuICAgICAgICAvLyDmooXoirHvvJpjbHViXG4gICAgICAgIC8vIOaWueeJh++8mmRpYW1vbmRcbiAgICAgICAgLy8gY29uc3QgQ2FyZFNoYXBlID0ge1xuICAgICAgICAvLyAgICAgXCJTXCI6IDEsXG4gICAgICAgIC8vICAgICBcIkhcIjogMixcbiAgICAgICAgLy8gICAgIFwiQ1wiOiAzLFxuICAgICAgICAvLyAgICAgXCJEXCI6IDQsXG4gICAgICAgIC8vIH07XG4gICAgICAgIGNvbnN0IGNhcmRTaHBhZSA9IHtcbiAgICAgICAgICAgIFwiMVwiOiAzLFxuICAgICAgICAgICAgXCIyXCI6IDIsXG4gICAgICAgICAgICBcIjNcIjogMSxcbiAgICAgICAgICAgIFwiNFwiOiAwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IEtpbmdzID0ge1xuICAgICAgICAgICAgXCIxNFwiOiA1NCxcbiAgICAgICAgICAgIFwiMTVcIjogNTNcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc3ByaXRlS2V5ID0gJyc7XG4gICAgICAgIGlmIChjYXJkLnNoYXBlKXtcbiAgICAgICAgICAgIHNwcml0ZUtleSA9ICdjYXJkXycgKyAoY2FyZFNocGFlW2NhcmQuc2hhcGVdICogMTMgKyBDYXJkVmFsdWVbY2FyZC52YWx1ZV0pO1xuXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHNwcml0ZUtleSA9ICdjYXJkXycgKyBLaW5nc1tjYXJkLmtpbmddO1xuICAgICAgICB9XG5cbiAgICAgICAvLyBjb25zb2xlLmxvZyhcInNwcml0ZUtleVwiK3Nwcml0ZUtleSlcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jYXJkc19zcHJpdGVfYXRsYXMuZ2V0U3ByaXRlRnJhbWUoc3ByaXRlS2V5KVxuICAgICAgICB0aGlzLnNldFRvdWNoRXZlbnQoKVxuICAgIH1cbn0pO1xuXG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

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

    _mygolbal["default"].socket.onGameStart(function () {
      console.log("gamebrforeUI onGameStart revice");
      this.node.active = false;
    }.bind(this));

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
            Toast.show(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVTY2VuZS9nYW1lYmVmb3JlVUkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJidG5fcmVhZHkiLCJOb2RlIiwiYnRuX2dhbWVzdGFydCIsIm9uTG9hZCIsImFjdGl2ZSIsIm5vZGUiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJteWdsb2JhbCIsInBsYXllckRhdGEiLCJob3VzZW1hbmFnZWlkIiwiYWNjb3VudElEIiwiYmluZCIsInNvY2tldCIsIm9uR2FtZVN0YXJ0Iiwib25DaGFuZ2VIb3VzZU1hbmFnZSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhcnQiLCJvbkJ1dHRvbkNsaWNrIiwiZXZlbnQiLCJjdXN0b21EYXRhIiwicmVxdWVzdFJlYWR5IiwicmVxdWVzdFN0YXJ0IiwiZXJyIiwiVG9hc3QiLCJzaG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUNKLEVBQUUsQ0FBQ0ssSUFETDtBQUVSQyxJQUFBQSxhQUFhLEVBQUNOLEVBQUUsQ0FBQ0s7QUFGVCxHQUhQO0FBUUw7QUFFQUUsRUFBQUEsTUFWSyxvQkFVSztBQUVOLFNBQUtELGFBQUwsQ0FBbUJFLE1BQW5CLEdBQTRCLEtBQTVCO0FBQ0EsU0FBS0osU0FBTCxDQUFlSSxNQUFmLEdBQXdCLEtBQXhCLENBSE0sQ0FLTjs7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxNQUFiLEVBQW9CLFlBQVU7QUFDMUJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNDQUFvQ0MscUJBQVNDLFVBQVQsQ0FBb0JDLGFBQXBFO0FBQ0FKLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtDQUFnQ0MscUJBQVNDLFVBQVQsQ0FBb0JFLFNBQWhFOztBQUNBLFVBQUdILHFCQUFTQyxVQUFULENBQW9CQyxhQUFwQixJQUFtQ0YscUJBQVNDLFVBQVQsQ0FBb0JFLFNBQTFELEVBQW9FO0FBQ2hFO0FBQ0EsYUFBS1YsYUFBTCxDQUFtQkUsTUFBbkIsR0FBNEIsSUFBNUI7QUFDQSxhQUFLSixTQUFMLENBQWVJLE1BQWYsR0FBd0IsS0FBeEI7QUFDSCxPQUpELE1BSUs7QUFDRCxhQUFLRixhQUFMLENBQW1CRSxNQUFuQixHQUE0QixLQUE1QjtBQUNBLGFBQUtKLFNBQUwsQ0FBZUksTUFBZixHQUF3QixJQUF4QjtBQUNIO0FBQ0osS0FabUIsQ0FZbEJTLElBWmtCLENBWWIsSUFaYSxDQUFwQixFQU5NLENBb0JOOztBQUNBSix5QkFBU0ssTUFBVCxDQUFnQkMsV0FBaEIsQ0FBNEIsWUFBVTtBQUNsQ1IsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQVo7QUFDQSxXQUFLSCxJQUFMLENBQVVELE1BQVYsR0FBbUIsS0FBbkI7QUFDSCxLQUgyQixDQUcxQlMsSUFIMEIsQ0FHckIsSUFIcUIsQ0FBNUI7O0FBS0FKLHlCQUFTSyxNQUFULENBQWdCRSxtQkFBaEIsQ0FBb0MsVUFBU0MsSUFBVCxFQUFjO0FBQzlDVixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0Q0FBMENVLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixJQUFmLENBQXREO0FBQ0FSLDJCQUFTQyxVQUFULENBQW9CQyxhQUFwQixHQUFvQ00sSUFBcEM7O0FBQ0EsVUFBR1IscUJBQVNDLFVBQVQsQ0FBb0JDLGFBQXBCLElBQW1DRixxQkFBU0MsVUFBVCxDQUFvQkUsU0FBMUQsRUFBb0U7QUFDaEU7QUFDQSxhQUFLVixhQUFMLENBQW1CRSxNQUFuQixHQUE0QixJQUE1QjtBQUNBLGFBQUtKLFNBQUwsQ0FBZUksTUFBZixHQUF3QixLQUF4QjtBQUNILE9BSkQsTUFJSztBQUNELGFBQUtGLGFBQUwsQ0FBbUJFLE1BQW5CLEdBQTRCLEtBQTVCO0FBQ0EsYUFBS0osU0FBTCxDQUFlSSxNQUFmLEdBQXdCLElBQXhCO0FBQ0g7QUFFSixLQVptQyxDQVlsQ1MsSUFaa0MsQ0FZN0IsSUFaNkIsQ0FBcEM7QUFhSCxHQWpESTtBQW1ETE8sRUFBQUEsS0FuREssbUJBbURJLENBRVIsQ0FyREk7QUF1REw7QUFFQUMsRUFBQUEsYUF6REsseUJBeURTQyxLQXpEVCxFQXlEZUMsVUF6RGYsRUF5RDBCO0FBQzNCLFlBQU9BLFVBQVA7QUFDSSxXQUFLLFdBQUw7QUFDSWhCLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7O0FBQ0FDLDZCQUFTSyxNQUFULENBQWdCVSxZQUFoQjs7QUFDQTs7QUFDSixXQUFLLFdBQUw7QUFDSTtBQUNBO0FBQ0E7QUFDQ2pCLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7O0FBQ0FDLDZCQUFTSyxNQUFULENBQWdCVyxZQUFoQixDQUE2QixVQUFTQyxHQUFULEVBQWFULElBQWIsRUFBa0I7QUFDNUMsY0FBR1MsR0FBRyxJQUFFLENBQVIsRUFBVTtBQUNObkIsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQW1Ca0IsR0FBL0I7QUFDbEJDLFlBQUFBLEtBQUssQ0FBQ0MsSUFBTixDQUFXWCxJQUFYO0FBQ2UsV0FIRCxNQUdLO0FBQ0RWLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFxQlUsSUFBSSxDQUFDQyxTQUFMLENBQWVGLElBQWYsQ0FBakM7QUFFSDtBQUNILFNBUkQ7O0FBU0E7O0FBQ0w7QUFDSTtBQXJCUjtBQXVCSDtBQWpGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlnbG9iYWwgZnJvbSBcIi4uL215Z29sYmFsLmpzXCJcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYnRuX3JlYWR5OmNjLk5vZGUsXG4gICAgICAgIGJ0bl9nYW1lc3RhcnQ6Y2MuTm9kZSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuXG4gICAgICAgIHRoaXMuYnRuX2dhbWVzdGFydC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLmJ0bl9yZWFkeS5hY3RpdmUgPSBmYWxzZVxuXG4gICAgICAgIC8v55uR5ZCs5pys5Zyw55qE5Y+R6YCB55qE5raI5oGvXG4gICAgICAgIHRoaXMubm9kZS5vbihcImluaXRcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnYW1lIGJlZm9yZXVpIGluaXRcIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibXlnbG9iYWwucGxheWVyRGF0YS5ob3VzZW1hbmFnZWlkXCIrbXlnbG9iYWwucGxheWVyRGF0YS5ob3VzZW1hbmFnZWlkKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJteWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRFwiK215Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKVxuICAgICAgICAgICAgaWYobXlnbG9iYWwucGxheWVyRGF0YS5ob3VzZW1hbmFnZWlkPT1teWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRCl7XG4gICAgICAgICAgICAgICAgLy/oh6rlt7HlsLHmmK/miL/kuLtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9nYW1lc3RhcnQuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX3JlYWR5LmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9nYW1lc3RhcnQuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9yZWFkeS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgICAvL+ebkeWQrOacjeWKoeWZqOWPkemAgeadpeeahOa2iOaBr1xuICAgICAgICBteWdsb2JhbC5zb2NrZXQub25HYW1lU3RhcnQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZWJyZm9yZVVJIG9uR2FtZVN0YXJ0IHJldmljZVwiKVxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgICBteWdsb2JhbC5zb2NrZXQub25DaGFuZ2VIb3VzZU1hbmFnZShmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZWJyZm9yZVVJIG9uQ2hhbmdlSG91c2VNYW5hZ2UgcmV2aWNlXCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgICBteWdsb2JhbC5wbGF5ZXJEYXRhLmhvdXNlbWFuYWdlaWQgPSBkYXRhXG4gICAgICAgICAgICBpZihteWdsb2JhbC5wbGF5ZXJEYXRhLmhvdXNlbWFuYWdlaWQ9PW15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKXtcbiAgICAgICAgICAgICAgICAvL+iHquW3seWwseaYr+aIv+S4u1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuX2dhbWVzdGFydC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fcmVhZHkuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuX2dhbWVzdGFydC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX3JlYWR5LmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbiAgICBcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LGN1c3RvbURhdGEpe1xuICAgICAgICBzd2l0Y2goY3VzdG9tRGF0YSl7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX3JlYWR5XCI6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJidG5fcmVhZHlcIilcbiAgICAgICAgICAgICAgICBteWdsb2JhbC5zb2NrZXQucmVxdWVzdFJlYWR5KClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcImJ0bl9zdGFydFwiOlxuICAgICAgICAgICAgICAgIC8vIGlmKGlzb3Blbl9zb3VuZCl7XG4gICAgICAgICAgICAgICAgLy8gICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kL3N0YXJ0X2Eub2dnXCIpKSBcbiAgICAgICAgICAgICAgICAvLyAgfVxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJ0bl9zdGFydFwiKVxuICAgICAgICAgICAgICAgICBteWdsb2JhbC5zb2NrZXQucmVxdWVzdFN0YXJ0KGZ1bmN0aW9uKGVycixkYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyIT0wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVxdWVzdFN0YXJ0IGVyclwiK2Vycilcblx0XHRcdFx0XHRcdFRvYXN0LnNob3coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0U3RhcnQgZGF0YVwiKyBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgIGJyZWFrICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/data/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec2a0fYPv1ASr8YTOKp3Np/', 'player');
// scripts/data/player.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getRandomStr = function getRandomStr(count) {
  var str = '';

  for (var i = 0; i < count; i++) {
    str += Math.floor(Math.random() * 10);
  }

  return str;
};

var playerData = function playerData() {
  var that = {}; //that.uniqueID = "200000";
  //that.uniqueID = "1328014"

  that.uniqueID = 1 + getRandomStr(6);
  that.accountID = "2" + getRandomStr(6);
  that.nickName = "tiny" + getRandomStr(3);
  var str = "avatar_" + (Math.floor(Math.random() * 3) + 1);
  that.avatarUrl = str; //随机一个头像

  that.gobal_count = 0;
  that.master_accountid = 0;
  return that;
};

var _default = playerData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGEvcGxheWVyLmpzIl0sIm5hbWVzIjpbImdldFJhbmRvbVN0ciIsImNvdW50Iiwic3RyIiwiaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInBsYXllckRhdGEiLCJ0aGF0IiwidW5pcXVlSUQiLCJhY2NvdW50SUQiLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImdvYmFsX2NvdW50IiwibWFzdGVyX2FjY291bnRpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQVVDLEtBQVYsRUFBaUI7QUFDbEMsTUFBSUMsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFpQkEsQ0FBQyxHQUFHRixLQUFyQixFQUE2QkUsQ0FBQyxFQUE5QixFQUFrQztBQUM5QkQsSUFBQUEsR0FBRyxJQUFJRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLENBQVA7QUFDSDs7QUFDRCxTQUFPSixHQUFQO0FBQ0gsQ0FORDs7QUFRQSxJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFVO0FBQ3pCLE1BQUlDLElBQUksR0FBRyxFQUFYLENBRHlCLENBR3pCO0FBQ0E7O0FBQ0FBLEVBQUFBLElBQUksQ0FBQ0MsUUFBTCxHQUFnQixJQUFJVCxZQUFZLENBQUMsQ0FBRCxDQUFoQztBQUNBUSxFQUFBQSxJQUFJLENBQUNFLFNBQUwsR0FBaUIsTUFBTVYsWUFBWSxDQUFDLENBQUQsQ0FBbkM7QUFDQVEsRUFBQUEsSUFBSSxDQUFDRyxRQUFMLEdBQWdCLFNBQVNYLFlBQVksQ0FBQyxDQUFELENBQXJDO0FBQ0EsTUFBSUUsR0FBRyxHQUFHLGFBQWFFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBM0IsSUFBZ0MsQ0FBN0MsQ0FBVjtBQUNBRSxFQUFBQSxJQUFJLENBQUNJLFNBQUwsR0FBaUJWLEdBQWpCLENBVHlCLENBU0Y7O0FBQ3ZCTSxFQUFBQSxJQUFJLENBQUNLLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQUwsRUFBQUEsSUFBSSxDQUFDTSxnQkFBTCxHQUFzQixDQUF0QjtBQUlBLFNBQU9OLElBQVA7QUFDSCxDQWhCRDs7ZUFrQmVEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRSYW5kb21TdHIgPSBmdW5jdGlvbiAoY291bnQpIHtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgY291bnQgOyBpICsrKXtcbiAgICAgICAgc3RyICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn07XG5cbmNvbnN0IHBsYXllckRhdGEgPSBmdW5jdGlvbigpe1xuICAgIHZhciB0aGF0ID0ge31cblxuICAgIC8vdGhhdC51bmlxdWVJRCA9IFwiMjAwMDAwXCI7XG4gICAgLy90aGF0LnVuaXF1ZUlEID0gXCIxMzI4MDE0XCJcbiAgICB0aGF0LnVuaXF1ZUlEID0gMSArIGdldFJhbmRvbVN0cig2KVxuICAgIHRoYXQuYWNjb3VudElEID0gXCIyXCIgKyBnZXRSYW5kb21TdHIoNilcbiAgICB0aGF0Lm5pY2tOYW1lID0gXCJ0aW55XCIgKyBnZXRSYW5kb21TdHIoMylcbiAgICB2YXIgc3RyID0gXCJhdmF0YXJfXCIgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyAxKVxuICAgIHRoYXQuYXZhdGFyVXJsID0gc3RyICAgLy/pmo/mnLrkuIDkuKrlpLTlg49cbiAgICB0aGF0LmdvYmFsX2NvdW50ID0gMFxuICAgIHRoYXQubWFzdGVyX2FjY291bnRpZD0wXG5cdFxuICAgIFxuXHRcbiAgICByZXR1cm4gdGhhdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyRGF0YVxuIl19
//------QC-SOURCE-SPLIT------

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
      if (this.cur_input_count > 6) return;
      this.joinids[this.cur_input_count].string = customData; //console.log("joinid.length:"+this.joinid.length)

      if (this.joinid.length >= 6) {
        //判断加入房间逻辑
        var room_para = {
          roomid: this.joinid
        };

        _mygolbal["default"].socket.request_jion(room_para, function (err, result) {
          if (err) {
            console.log("err" + err);
            Toast.show(err);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hhbGxzY2VuZS9wcmVmYWJzX3NjcmlwdC9qb2luUm9vbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImpvaW5pZHMiLCJ0eXBlIiwiTGFiZWwiLCJvbkxvYWQiLCJqb2luaWQiLCJjdXJfaW5wdXRfY291bnQiLCJzdGFydCIsIm9uQnV0dG9uQ2xpY2siLCJldmVudCIsImN1c3RvbURhdGEiLCJsZW5ndGgiLCJzdHJpbmciLCJyb29tX3BhcmEiLCJyb29taWQiLCJteWdsb2JhbCIsInNvY2tldCIsInJlcXVlc3RfamlvbiIsImVyciIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJUb2FzdCIsInNob3ciLCJKU09OIiwic3RyaW5naWZ5IiwicGxheWVyRGF0YSIsImJvdHRvbSIsInJhdGUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInN1YnN0cmluZyIsImkiLCJub2RlIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsT0FBTyxFQUFDO0FBQ0pDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxLQURMO0FBRUosaUJBQVE7QUFGSjtBQURFLEdBSFA7QUFXTDtBQUVBQyxFQUFBQSxNQWJLLG9CQWFLO0FBQ04sU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLENBQUMsQ0FBeEI7QUFDSCxHQWhCSTtBQWtCTEMsRUFBQUEsS0FsQkssbUJBa0JJLENBRVIsQ0FwQkk7QUFzQkw7QUFFQTtBQUVBQyxFQUFBQSxhQTFCSyx5QkEwQlNDLEtBMUJULEVBMEJlQyxVQTFCZixFQTBCMEI7QUFDM0IsUUFBR0EsVUFBVSxDQUFDQyxNQUFYLEtBQW9CLENBQXZCLEVBQXlCO0FBQ3JCLFdBQUtOLE1BQUwsSUFBZUssVUFBZjtBQUNBLFdBQUtKLGVBQUwsSUFBd0IsQ0FBeEI7QUFDVCxVQUFHLEtBQUtBLGVBQUwsR0FBcUIsQ0FBeEIsRUFBMEI7QUFDakIsV0FBS0wsT0FBTCxDQUFhLEtBQUtLLGVBQWxCLEVBQW1DTSxNQUFuQyxHQUE0Q0YsVUFBNUMsQ0FKcUIsQ0FLckI7O0FBQ0EsVUFBRyxLQUFLTCxNQUFMLENBQVlNLE1BQVosSUFBb0IsQ0FBdkIsRUFBeUI7QUFDckI7QUFDQSxZQUFJRSxTQUFTLEdBQUc7QUFDWkMsVUFBQUEsTUFBTSxFQUFDLEtBQUtUO0FBREEsU0FBaEI7O0FBR0FVLDZCQUFTQyxNQUFULENBQWdCQyxZQUFoQixDQUE2QkosU0FBN0IsRUFBdUMsVUFBU0ssR0FBVCxFQUFhQyxNQUFiLEVBQW9CO0FBQ3ZELGNBQUlELEdBQUosRUFBUTtBQUNKRSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFPSCxHQUFuQjtBQUNsQkksWUFBQUEsS0FBSyxDQUFDQyxJQUFOLENBQVdMLEdBQVg7QUFDZSxXQUhELE1BR0s7QUFDREUsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQW1CRyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sTUFBZixDQUEvQjtBQUNBSixpQ0FBU1csVUFBVCxDQUFvQkMsTUFBcEIsR0FBNkJSLE1BQU0sQ0FBQ1EsTUFBcEM7QUFDQVosaUNBQVNXLFVBQVQsQ0FBb0JFLElBQXBCLEdBQTJCVCxNQUFNLENBQUNTLElBQWxDO0FBQ0EvQixZQUFBQSxFQUFFLENBQUNnQyxRQUFILENBQVlDLFNBQVosQ0FBc0IsV0FBdEI7QUFDSDtBQUNKLFNBVkQ7O0FBV0E7QUFDSDs7QUFFRFYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQWVYLFVBQTNCO0FBRUg7O0FBQ0QsWUFBT0EsVUFBUDtBQUNJLFdBQUssTUFBTDtBQUNJLFlBQUcsS0FBS0osZUFBTCxHQUFxQixDQUF4QixFQUEwQjtBQUN0QjtBQUNIOztBQUNELGFBQUtMLE9BQUwsQ0FBYSxLQUFLSyxlQUFsQixFQUFtQ00sTUFBbkMsR0FBNEMsRUFBNUM7QUFDQSxhQUFLTixlQUFMLElBQXVCLENBQXZCO0FBQ0EsYUFBS0QsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWTBCLFNBQVosQ0FBc0IsQ0FBdEIsRUFBd0IsS0FBSzFCLE1BQUwsQ0FBWU0sTUFBWixHQUFtQixDQUEzQyxDQUFkO0FBQ0E7O0FBQ0osV0FBSyxPQUFMO0FBQ0ksYUFBSSxJQUFJcUIsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLENBQWQsRUFBZ0IsRUFBRUEsQ0FBbEIsRUFBb0I7QUFDaEIsZUFBSy9CLE9BQUwsQ0FBYStCLENBQWIsRUFBZ0JwQixNQUFoQixHQUF5QixFQUF6QjtBQUVIOztBQUNELGFBQUtQLE1BQUwsR0FBYyxFQUFkO0FBQ0EsYUFBS0MsZUFBTCxHQUF1QixDQUFDLENBQXhCO0FBQ0E7O0FBQ0osV0FBSyxPQUFMO0FBQ0csYUFBSzJCLElBQUwsQ0FBVUMsT0FBVjtBQUNBOztBQUNIO0FBQ0k7QUFyQlI7QUF1Qkg7QUE5RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15Z2xvYmFsIGZyb20gXCIuLi8uLi9teWdvbGJhbC5qc1wiXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgXG4gICAgcHJvcGVydGllczoge1xuICAgICAgam9pbmlkczp7XG4gICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgZGVmYXVsdDpbXSxcbiAgICAgIH1cbiAgICBcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLmpvaW5pZCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY3VyX2lucHV0X2NvdW50ID0gLTFcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIC8vICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIFxuICAgIC8vICB9LFxuXG4gICAgb25CdXR0b25DbGljayhldmVudCxjdXN0b21EYXRhKXtcbiAgICAgICAgaWYoY3VzdG9tRGF0YS5sZW5ndGg9PT0xKXtcbiAgICAgICAgICAgIHRoaXMuam9pbmlkICs9IGN1c3RvbURhdGFcbiAgICAgICAgICAgIHRoaXMuY3VyX2lucHV0X2NvdW50ICs9IDFcblx0XHRcdGlmKHRoaXMuY3VyX2lucHV0X2NvdW50PjYpcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5qb2luaWRzW3RoaXMuY3VyX2lucHV0X2NvdW50XS5zdHJpbmcgPSBjdXN0b21EYXRhXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiam9pbmlkLmxlbmd0aDpcIit0aGlzLmpvaW5pZC5sZW5ndGgpXG4gICAgICAgICAgICBpZih0aGlzLmpvaW5pZC5sZW5ndGg+PTYpe1xuICAgICAgICAgICAgICAgIC8v5Yik5pat5Yqg5YWl5oi/6Ze06YC76L6RXG4gICAgICAgICAgICAgICAgdmFyIHJvb21fcGFyYSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcm9vbWlkOnRoaXMuam9pbmlkLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBteWdsb2JhbC5zb2NrZXQucmVxdWVzdF9qaW9uKHJvb21fcGFyYSxmdW5jdGlvbihlcnIscmVzdWx0KXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVyclwiKyBlcnIpXG5cdFx0XHRcdFx0XHRUb2FzdC5zaG93KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJqb2luIHJvb20gc3VjZXNzXCIrSlNPTi5zdHJpbmdpZnkocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIG15Z2xvYmFsLnBsYXllckRhdGEuYm90dG9tID0gcmVzdWx0LmJvdHRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgbXlnbG9iYWwucGxheWVyRGF0YS5yYXRlID0gcmVzdWx0LnJhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVTY2VuZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXN0b21EYXRhOlwiKyBjdXN0b21EYXRhKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoKGN1c3RvbURhdGEpe1xuICAgICAgICAgICAgY2FzZSBcImJhY2tcIjpcbiAgICAgICAgICAgICAgICBpZih0aGlzLmN1cl9pbnB1dF9jb3VudDwwKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuam9pbmlkc1t0aGlzLmN1cl9pbnB1dF9jb3VudF0uc3RyaW5nID0gXCJcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3VyX2lucHV0X2NvdW50IC09MVxuICAgICAgICAgICAgICAgIHRoaXMuam9pbmlkID0gdGhpcy5qb2luaWQuc3Vic3RyaW5nKDAsdGhpcy5qb2luaWQubGVuZ3RoLTEpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJjbGVhclwiOlxuICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8NjsrK2kpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmpvaW5pZHNbaV0uc3RyaW5nID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5qb2luaWQgPSBcIlwiXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJfaW5wdXRfY291bnQgPSAtMVxuICAgICAgICAgICAgICAgIGJyZWFrICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XG4gICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXG4gICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------
