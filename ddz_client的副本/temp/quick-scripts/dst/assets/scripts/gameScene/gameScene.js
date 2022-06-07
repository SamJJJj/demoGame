
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