
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    gameingUI: cc.Node,
    card_prefab: cc.Prefab,
    robUI: cc.Node,
    bottom_card_pos_node: cc.Node,
    playingUI_node: cc.Node,
    tipsLabel: cc.Label //玩家出牌不合法的tips

  },
  onLoad: function onLoad() {
    //自己牌列表 
    this.cards_nods = [];
    this.card_width = 0; //当前可以抢地主的accountid

    this.rob_player_accountid = 0; //发牌动画是否结束

    this.fapai_end = false; //底牌数组

    this.bottom_card = []; //底牌的json对象数据

    this.bottom_card_data = [];
    this.choose_card_data = [];
    this.outcar_zone = [];
    this.push_card_tmp = []; //监听服务器:下发牌消息

    _mygolbal["default"].socket.onPushCards(function (data) {
      console.log("onPushCards" + JSON.stringify(data));
      this.card_data = data;
      this.cur_index_card = data.length - 1;
      this.pushCard(data);

      if (isopen_sound) {
        //循环播放发牌音效
        // this.fapai_audioID = cc.audioEngine.play(cc.url.raw("resources/sound/fapai1.mp3"),true)
        console.log("start fapai_audioID" + this.fapai_audioID);
      } //左边移动定时器


      this.scheduleOnce(this._runactive_pushcard.bind(this), 0.3);
      this.node.parent.emit("pushcard_other_event");
    }.bind(this)); //监听服务器:通知抢地主消息,显示相应的UI


    _mygolbal["default"].socket.onCanRobState(function (data) {
      console.log("onCanRobState" + JSON.stringify(data)); //这里需要2个变量条件：自己是下一个抢地主，2发牌动画结束

      this.rob_player_accountid = data;

      if (data == _mygolbal["default"].playerData.accountID && this.fapai_end == true) {
        this.robUI.active = true;
      }
    }.bind(this)); //监听服务器可以出牌消息


    _mygolbal["default"].socket.onCanChuCard(function (data) {
      console.log("onCanRobState" + JSON.stringify(data)); //判断是不是自己能出牌

      if (data == _mygolbal["default"].playerData.accountID) {
        //先清理出牌区域
        this.clearOutZone(_mygolbal["default"].playerData.accountID); //先把自己出牌列表置空
        //this.choose_card_data=[]
        //显示可以出牌的UI

        this.playingUI_node.active = true;
      }
    }.bind(this)); //监听服务器：其他玩家出牌消息


    _mygolbal["default"].socket.onOtherPlayerChuCard(function (data) {
      //{"accountid":"2357540","cards":[{"cardid":4,"card_data":{"index":4,"value":1,"shape":1}}]}
      console.log("onOtherPlayerChuCard" + JSON.stringify(data));
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
    }.bind(this)); //内部事件:显示底牌事件,data是三张底牌数据


    this.node.on("show_bottom_card_event", function (data) {
      console.log("----show_bottom_card_event", +data);
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
      } //this.node.parent.emit("change_room_state_event",RoomState.ROOM_PLAYING)
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


      var sendevent = this.rob_player_accountid;
      this.node.parent.emit("canrob_event", sendevent);
      return;
    } //原有逻辑  
    // var move_node = this.cards_nods[this.cur_index_card]
    // move_node.active = true
    // var newx = move_node.x + (this.card_width * 0.4*this.cur_index_card) - (this.card_width * 0.4)
    // var action = cc.moveTo(0.1, cc.v2(newx, -250));
    // move_node.runAction(action)
    // this.cur_index_card--
    // this.scheduleOnce(this._runactive_pushcard.bind(this),0.3)


    var move_node = this.cards_nods[this.cards_nods.length - this.cur_index_card - 1];
    move_node.active = true;
    this.push_card_tmp.push(move_node);
    this.fapai_audioID = cc.audioEngine.play(cc.url.raw("resources/sound/fapai1.mp3"));

    for (var i = 0; i < this.push_card_tmp.length - 1; i++) {
      var move_node = this.push_card_tmp[i];
      var newx = move_node.x - this.card_width * 0.4;
      var action = cc.moveTo(0.1, cc.v2(newx, -250));
      move_node.runAction(action);
    }

    this.cur_index_card--;
    this.scheduleOnce(this._runactive_pushcard.bind(this), 0.3);
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

    for (var i = 0; i < 17; i++) {
      var card = cc.instantiate(this.card_prefab);
      card.scale = 0.8;
      card.parent = this.node.parent; //card.x = card.width * 0.4 * (17 - 1) * (-0.5) + card.width * 0.4 * 0;

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
      di_card.position = this.bottom_card_pos_node.position; //三张牌，中间坐标就是bottom_card_pos_node节点坐标，
      //0,和2两张牌左右移动windth*0.4

      if (i == 0) {
        di_card.x = di_card.x - di_card.width * 0.4;
      } else if (i == 2) {
        di_card.x = di_card.x + di_card.width * 0.4;
      } //di_card.x = di_card.width-i*di_card.width-20
      //di_card.y=60


      di_card.parent = this.node.parent; //存储在容器里

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
      card.parent = this.node.parent;
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

          this.cards_nods[j].removeFromParent(true);
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
    if (destroy_card.length == 0) {
      return;
    } //先给本次出的牌做一个排序


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

        this.robUI.active = false;

        if (isopen_sound) {
          cc.audioEngine.play(cc.url.raw("resources/sound/woman_jiao_di_zhu.ogg"));
        }

        break;

      case "btn_buqiandz":
        console.log("btn_buqiandz");

        _mygolbal["default"].socket.requestRobState(qian_state.buqiang);

        this.robUI.active = false;

        if (isopen_sound) {
          cc.audioEngine.play(cc.url.raw("resources/sound/woman_bu_jiao.ogg"));
        }

        break;

      case "nopushcard":
        //不出牌
        _mygolbal["default"].socket.request_buchu_card([], null);

        this.playingUI_node.active = false;
        break;

      case "pushcard":
        //出牌
        //先获取本次出牌数据
        if (this.choose_card_data.length == 0) {
          this.tipsLabel.string = "请选择牌!";
          setTimeout(function () {
            this.tipsLabel.string = "";
          }.bind(this), 2000);
        }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVTY2VuZS9nYW1laW5nVUkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJnYW1laW5nVUkiLCJOb2RlIiwiY2FyZF9wcmVmYWIiLCJQcmVmYWIiLCJyb2JVSSIsImJvdHRvbV9jYXJkX3Bvc19ub2RlIiwicGxheWluZ1VJX25vZGUiLCJ0aXBzTGFiZWwiLCJMYWJlbCIsIm9uTG9hZCIsImNhcmRzX25vZHMiLCJjYXJkX3dpZHRoIiwicm9iX3BsYXllcl9hY2NvdW50aWQiLCJmYXBhaV9lbmQiLCJib3R0b21fY2FyZCIsImJvdHRvbV9jYXJkX2RhdGEiLCJjaG9vc2VfY2FyZF9kYXRhIiwib3V0Y2FyX3pvbmUiLCJwdXNoX2NhcmRfdG1wIiwibXlnbG9iYWwiLCJzb2NrZXQiLCJvblB1c2hDYXJkcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNhcmRfZGF0YSIsImN1cl9pbmRleF9jYXJkIiwibGVuZ3RoIiwicHVzaENhcmQiLCJpc29wZW5fc291bmQiLCJmYXBhaV9hdWRpb0lEIiwic2NoZWR1bGVPbmNlIiwiX3J1bmFjdGl2ZV9wdXNoY2FyZCIsImJpbmQiLCJub2RlIiwicGFyZW50IiwiZW1pdCIsIm9uQ2FuUm9iU3RhdGUiLCJwbGF5ZXJEYXRhIiwiYWNjb3VudElEIiwiYWN0aXZlIiwib25DYW5DaHVDYXJkIiwiY2xlYXJPdXRab25lIiwib25PdGhlclBsYXllckNodUNhcmQiLCJhY2NvdW50aWQiLCJnYW1lU2NlbmVfc2NyaXB0IiwiZ2V0Q29tcG9uZW50Iiwib3V0Q2FyZF9ub2RlIiwiZ2V0VXNlck91dENhcmRQb3NCeUFjY291bnQiLCJub2RlX2NhcmRzIiwiaSIsImNhcmRzIiwiY2FyZCIsImluc3RhbnRpYXRlIiwic2hvd0NhcmRzIiwicHVzaCIsImFwcGVuZE90aGVyQ2FyZHNUb091dFpvbmUiLCJvbiIsInNob3dfZGF0YSIsImNhbGxfZGF0YSIsInJ1biIsImNhbGxGdW5jIiwidGFyZ2V0IiwiYWN0aXZlZGF0YSIsInNob3dfY2FyZCIsIm9iaiIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwicm90YXRlQnkiLCJzY2FsZUJ5IiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwidXJsIiwicmF3IiwibWFzdGVyX2FjY291bnRpZCIsInB1c2hUaHJlZUNhcmQiLCJldmVudCIsImRldGFpbCIsImNhcmRpZCIsInNwbGljZSIsInN0YXJ0Iiwic3RvcCIsInNlbmRldmVudCIsIm1vdmVfbm9kZSIsIm5ld3giLCJ4IiwiYWN0aW9uIiwibW92ZVRvIiwidjIiLCJzb3J0Q2FyZCIsInNvcnQiLCJ5IiwiYSIsImIiLCJoYXNPd25Qcm9wZXJ0eSIsInZhbHVlIiwia2luZyIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiekluZGV4Iiwid2lkdGgiLCJzY2FsZSIsImRpX2NhcmQiLCJwb3NpdGlvbiIsInNjaGVkdWxlUHVzaFRocmVlQ2FyZCIsImxhc3RfY2FyZF94IiwiZGVzdG9yeUNhcmQiLCJjaG9vc2VfY2FyZCIsImRlc3Ryb3lfY2FyZCIsImoiLCJjYXJkX2lkIiwicmVtb3ZlRnJvbVBhcmVudCIsImFwcGVuZENhcmRzVG9PdXRab25lIiwidXBkYXRlQ2FyZHMiLCJjaGlsZHJlbiIsImRlc3Ryb3kiLCJyZW1vdmVBbGxDaGlsZHJlbiIsInB1c2hDYXJkU29ydCIsInlvZmZzZXQiLCJhZGRDaGlsZCIsInpQb2ludCIsImNhcmROb2RlIiwiZ2V0Q2hpbGRyZW4iLCJzZXRTY2FsZSIsInNldFBvc2l0aW9uIiwiemVyb1BvaW50IiwicGxheVB1c2hDYXJkU291bmQiLCJjYXJkX25hbWUiLCJDYXJkc1ZhbHVlIiwib25lIiwibmFtZSIsIm9uQnV0dG9uQ2xpY2siLCJjdXN0b21EYXRhIiwicmVxdWVzdFJvYlN0YXRlIiwicWlhbl9zdGF0ZSIsInFpYW4iLCJidXFpYW5nIiwicmVxdWVzdF9idWNodV9jYXJkIiwic3RyaW5nIiwicmVxdWVzdF9jaHVfY2FyZCIsImVyciIsIm1zZyIsImNhcmR2YWx1ZSIsImFjY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBRUosRUFBRSxDQUFDSyxJQUROO0FBRVJDLElBQUFBLFdBQVcsRUFBQ04sRUFBRSxDQUFDTyxNQUZQO0FBR1JDLElBQUFBLEtBQUssRUFBQ1IsRUFBRSxDQUFDSyxJQUhEO0FBSVJJLElBQUFBLG9CQUFvQixFQUFDVCxFQUFFLENBQUNLLElBSmhCO0FBS1JLLElBQUFBLGNBQWMsRUFBQ1YsRUFBRSxDQUFDSyxJQUxWO0FBTVJNLElBQUFBLFNBQVMsRUFBQ1gsRUFBRSxDQUFDWSxLQU5MLENBTVk7O0FBTlosR0FIUDtBQWFMQyxFQUFBQSxNQWJLLG9CQWFLO0FBQ047QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixDQUFsQixDQUhNLENBSU47O0FBQ0EsU0FBS0Msb0JBQUwsR0FBNEIsQ0FBNUIsQ0FMTSxDQU1OOztBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBakIsQ0FQTSxDQVFOOztBQUNBLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkIsQ0FUTSxDQVVOOztBQUNBLFNBQUtDLGdCQUFMLEdBQXNCLEVBQXRCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBc0IsRUFBdEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBRUEsU0FBS0MsYUFBTCxHQUFxQixFQUFyQixDQWZNLENBZ0JOOztBQUNBQyx5QkFBU0MsTUFBVCxDQUFnQkMsV0FBaEIsQ0FBNEIsVUFBU0MsSUFBVCxFQUFjO0FBQ3RDQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBY0MsSUFBSSxDQUFDQyxTQUFMLENBQWVKLElBQWYsQ0FBMUI7QUFDQSxXQUFLSyxTQUFMLEdBQWlCTCxJQUFqQjtBQUNBLFdBQUtNLGNBQUwsR0FBc0JOLElBQUksQ0FBQ08sTUFBTCxHQUFjLENBQXBDO0FBQ0EsV0FBS0MsUUFBTCxDQUFjUixJQUFkOztBQUNBLFVBQUdTLFlBQUgsRUFBZ0I7QUFDWjtBQUNEO0FBQ0NSLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFzQixLQUFLUSxhQUF2QztBQUNILE9BVHFDLENBVXJDOzs7QUFDRCxXQUFLQyxZQUFMLENBQWtCLEtBQUtDLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixJQUE5QixDQUFsQixFQUFzRCxHQUF0RDtBQUNBLFdBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsSUFBakIsQ0FBc0Isc0JBQXRCO0FBRUgsS0FkMkIsQ0FjMUJILElBZDBCLENBY3JCLElBZHFCLENBQTVCLEVBakJNLENBaUNOOzs7QUFDQWhCLHlCQUFTQyxNQUFULENBQWdCbUIsYUFBaEIsQ0FBOEIsVUFBU2pCLElBQVQsRUFBYztBQUN4Q0MsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQWdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosSUFBZixDQUE1QixFQUR3QyxDQUV4Qzs7QUFDQSxXQUFLVixvQkFBTCxHQUE0QlUsSUFBNUI7O0FBQ0EsVUFBR0EsSUFBSSxJQUFFSCxxQkFBU3FCLFVBQVQsQ0FBb0JDLFNBQTFCLElBQXVDLEtBQUs1QixTQUFMLElBQWdCLElBQTFELEVBQStEO0FBQzNELGFBQUtULEtBQUwsQ0FBV3NDLE1BQVgsR0FBb0IsSUFBcEI7QUFDSDtBQUVKLEtBUjZCLENBUTVCUCxJQVI0QixDQVF2QixJQVJ1QixDQUE5QixFQWxDTSxDQTRDTjs7O0FBQ0FoQix5QkFBU0MsTUFBVCxDQUFnQnVCLFlBQWhCLENBQTZCLFVBQVNyQixJQUFULEVBQWM7QUFDdkNDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFnQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLElBQWYsQ0FBNUIsRUFEdUMsQ0FFdkM7O0FBQ0EsVUFBR0EsSUFBSSxJQUFFSCxxQkFBU3FCLFVBQVQsQ0FBb0JDLFNBQTdCLEVBQXVDO0FBQ25DO0FBQ0EsYUFBS0csWUFBTCxDQUFrQnpCLHFCQUFTcUIsVUFBVCxDQUFvQkMsU0FBdEMsRUFGbUMsQ0FHbkM7QUFDQTtBQUNBOztBQUNBLGFBQUtuQyxjQUFMLENBQW9Cb0MsTUFBcEIsR0FBNkIsSUFBN0I7QUFFSDtBQUNKLEtBWjRCLENBWTNCUCxJQVoyQixDQVl0QixJQVpzQixDQUE3QixFQTdDTSxDQTJETjs7O0FBQ0FoQix5QkFBU0MsTUFBVCxDQUFnQnlCLG9CQUFoQixDQUFxQyxVQUFTdkIsSUFBVCxFQUFjO0FBQy9DO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUF1QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLElBQWYsQ0FBbkM7QUFFQSxVQUFJd0IsU0FBUyxHQUFHeEIsSUFBSSxDQUFDd0IsU0FBckI7QUFDQSxVQUFJQyxnQkFBZ0IsR0FBRyxLQUFLWCxJQUFMLENBQVVDLE1BQVYsQ0FBaUJXLFlBQWpCLENBQThCLFdBQTlCLENBQXZCLENBTCtDLENBTS9DOztBQUNBLFVBQUlDLFlBQVksR0FBR0YsZ0JBQWdCLENBQUNHLDBCQUFqQixDQUE0Q0osU0FBNUMsQ0FBbkI7O0FBQ0EsVUFBR0csWUFBWSxJQUFFLElBQWpCLEVBQXNCO0FBQ2xCO0FBQ0g7O0FBRUQsVUFBSUUsVUFBVSxHQUFHLEVBQWpCOztBQUNBLFdBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDOUIsSUFBSSxDQUFDK0IsS0FBTCxDQUFXeEIsTUFBekIsRUFBZ0N1QixDQUFDLEVBQWpDLEVBQW9DO0FBQ2hDLFlBQUlFLElBQUksR0FBRzFELEVBQUUsQ0FBQzJELFdBQUgsQ0FBZSxLQUFLckQsV0FBcEIsQ0FBWDtBQUNBb0QsUUFBQUEsSUFBSSxDQUFDTixZQUFMLENBQWtCLE1BQWxCLEVBQTBCUSxTQUExQixDQUFvQ2xDLElBQUksQ0FBQytCLEtBQUwsQ0FBV0QsQ0FBWCxFQUFjekIsU0FBbEQsRUFBNERSLHFCQUFTcUIsVUFBVCxDQUFvQkMsU0FBaEY7QUFDQVUsUUFBQUEsVUFBVSxDQUFDTSxJQUFYLENBQWdCSCxJQUFoQjtBQUNIOztBQUNELFdBQUtJLHlCQUFMLENBQStCVCxZQUEvQixFQUE0Q0UsVUFBNUMsRUFBdUQsQ0FBdkQ7QUFHSCxLQXJCb0MsQ0FxQm5DaEIsSUFyQm1DLENBcUI5QixJQXJCOEIsQ0FBckMsRUE1RE0sQ0FtRk47OztBQUNBLFNBQUtDLElBQUwsQ0FBVXVCLEVBQVYsQ0FBYSx3QkFBYixFQUFzQyxVQUFTckMsSUFBVCxFQUFjO0FBQ2hEQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWixFQUF5QyxDQUFDRixJQUExQztBQUVBLFdBQUtQLGdCQUFMLEdBQXdCTyxJQUF4Qjs7QUFFQSxXQUFJLElBQUk4QixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUM5QixJQUFJLENBQUNPLE1BQW5CLEVBQTBCdUIsQ0FBQyxFQUEzQixFQUE4QjtBQUMxQixZQUFJRSxJQUFJLEdBQUcsS0FBS3hDLFdBQUwsQ0FBaUJzQyxDQUFqQixDQUFYO0FBQ0EsWUFBSVEsU0FBUyxHQUFHdEMsSUFBSSxDQUFDOEIsQ0FBRCxDQUFwQjtBQUNBLFlBQUlTLFNBQVMsR0FBRztBQUNaLGlCQUFNUCxJQURNO0FBRVosa0JBQU9NO0FBRkssU0FBaEI7QUFJQXJDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFvQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVrQyxTQUFmLENBQWhDO0FBQ0EsWUFBSUUsR0FBRyxHQUFJbEUsRUFBRSxDQUFDbUUsUUFBSCxDQUFZLFVBQVNDLE1BQVQsRUFBZ0JDLFVBQWhCLEVBQTJCO0FBRTlDLGNBQUlDLFNBQVMsR0FBR0QsVUFBVSxDQUFDRSxHQUEzQjtBQUNBLGNBQUlQLFNBQVMsR0FBR0ssVUFBVSxDQUFDM0MsSUFBM0IsQ0FIOEMsQ0FJOUM7O0FBQ0E0QyxVQUFBQSxTQUFTLENBQUNsQixZQUFWLENBQXVCLE1BQXZCLEVBQStCUSxTQUEvQixDQUF5Q0ksU0FBekM7QUFFSCxTQVBVLEVBT1QsSUFQUyxFQU9KQyxTQVBJLENBQVg7QUFTQVAsUUFBQUEsSUFBSSxDQUFDYyxTQUFMLENBQWV4RSxFQUFFLENBQUN5RSxRQUFILENBQVl6RSxFQUFFLENBQUMwRSxRQUFILENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsR0FBaEIsQ0FBWixFQUFpQzFFLEVBQUUsQ0FBQzBFLFFBQUgsQ0FBWSxHQUFaLEVBQWdCLENBQWhCLEVBQWtCLENBQUMsRUFBbkIsQ0FBakMsRUFBeURSLEdBQXpELEVBQ2ZsRSxFQUFFLENBQUMwRSxRQUFILENBQVksR0FBWixFQUFnQixDQUFoQixFQUFrQixDQUFDLEVBQW5CLENBRGUsRUFDUTFFLEVBQUUsQ0FBQzJFLE9BQUgsQ0FBVyxDQUFYLEVBQWMsR0FBZCxDQURSLENBQWY7O0FBR0EsWUFBR3hDLFlBQUgsRUFBZ0I7QUFDWm5DLFVBQUFBLEVBQUUsQ0FBQzRFLFdBQUgsQ0FBZUMsSUFBZixDQUFvQjdFLEVBQUUsQ0FBQzhFLEdBQUgsQ0FBT0MsR0FBUCxDQUFXLDJCQUFYLENBQXBCO0FBQ0Y7QUFDTCxPQTVCK0MsQ0E4QmhEO0FBQ0E7OztBQUNBLFVBQUd4RCxxQkFBU3FCLFVBQVQsQ0FBb0JDLFNBQXBCLElBQStCdEIscUJBQVNxQixVQUFULENBQW9Cb0MsZ0JBQXRELEVBQXVFO0FBQ25FLGFBQUszQyxZQUFMLENBQWtCLEtBQUs0QyxhQUFMLENBQW1CMUMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBbEIsRUFBZ0QsR0FBaEQ7QUFDSDtBQUdKLEtBckNxQyxDQXFDcENBLElBckNvQyxDQXFDL0IsSUFyQytCLENBQXRDLEVBcEZNLENBMkhOOztBQUNBLFNBQUtDLElBQUwsQ0FBVXVCLEVBQVYsQ0FBYSxtQkFBYixFQUFpQyxVQUFTbUIsS0FBVCxFQUFlO0FBQzVDdkQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQXFCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZW9ELEtBQWYsQ0FBakM7QUFDQSxVQUFJQyxNQUFNLEdBQUdELEtBQWI7QUFDQSxXQUFLOUQsZ0JBQUwsQ0FBc0J5QyxJQUF0QixDQUEyQnNCLE1BQTNCO0FBQ0gsS0FKZ0MsQ0FJL0I1QyxJQUorQixDQUkxQixJQUowQixDQUFqQztBQU1BLFNBQUtDLElBQUwsQ0FBVXVCLEVBQVYsQ0FBYSxxQkFBYixFQUFtQyxVQUFTbUIsS0FBVCxFQUFlO0FBQzlDdkQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQXdCc0QsS0FBcEM7QUFDQSxVQUFJQyxNQUFNLEdBQUdELEtBQWI7O0FBQ0EsV0FBSSxJQUFJMUIsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUtwQyxnQkFBTCxDQUFzQmEsTUFBcEMsRUFBMkN1QixDQUFDLEVBQTVDLEVBQStDO0FBQzNDLFlBQUcsS0FBS3BDLGdCQUFMLENBQXNCb0MsQ0FBdEIsRUFBeUI0QixNQUF6QixJQUFpQ0QsTUFBcEMsRUFBMkM7QUFDdkMsZUFBSy9ELGdCQUFMLENBQXNCaUUsTUFBdEIsQ0FBNkI3QixDQUE3QixFQUErQixDQUEvQjtBQUNIO0FBQ0o7QUFDSixLQVJrQyxDQVFqQ2pCLElBUmlDLENBUTVCLElBUjRCLENBQW5DO0FBVUgsR0F6Skk7QUEySkwrQyxFQUFBQSxLQTNKSyxtQkEySkksQ0FFUixDQTdKSTtBQStKTDtBQUNBaEQsRUFBQUEsbUJBaEtLLGlDQWdLZ0I7QUFDakI7QUFDQSxRQUFHLEtBQUtOLGNBQUwsR0FBc0IsQ0FBekIsRUFBMkI7QUFDdkJMLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFEdUIsQ0FFdkI7QUFDQTs7QUFDQSxXQUFLWCxTQUFMLEdBQWlCLElBQWpCOztBQUNBLFVBQUcsS0FBS0Qsb0JBQUwsSUFBMkJPLHFCQUFTcUIsVUFBVCxDQUFvQkMsU0FBbEQsRUFBNEQ7QUFDeEQsYUFBS3JDLEtBQUwsQ0FBV3NDLE1BQVgsR0FBb0IsSUFBcEI7QUFDSDs7QUFFRCxVQUFHWCxZQUFILEVBQWdCO0FBQ1o7QUFDQW5DLFFBQUFBLEVBQUUsQ0FBQzRFLFdBQUgsQ0FBZVcsSUFBZixDQUFvQixLQUFLbkQsYUFBekI7QUFDSCxPQVpzQixDQWVyQjs7O0FBQ0YsVUFBSW9ELFNBQVMsR0FBRyxLQUFLeEUsb0JBQXJCO0FBQ0EsV0FBS3dCLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsSUFBakIsQ0FBc0IsY0FBdEIsRUFBcUM4QyxTQUFyQztBQUVBO0FBQ0gsS0F0QmdCLENBd0JqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxRQUFJQyxTQUFTLEdBQUcsS0FBSzNFLFVBQUwsQ0FBZ0IsS0FBS0EsVUFBTCxDQUFnQm1CLE1BQWhCLEdBQXVCLEtBQUtELGNBQTVCLEdBQTJDLENBQTNELENBQWhCO0FBQ0F5RCxJQUFBQSxTQUFTLENBQUMzQyxNQUFWLEdBQW1CLElBQW5CO0FBQ0EsU0FBS3hCLGFBQUwsQ0FBbUJ1QyxJQUFuQixDQUF3QjRCLFNBQXhCO0FBQ0EsU0FBS3JELGFBQUwsR0FBcUJwQyxFQUFFLENBQUM0RSxXQUFILENBQWVDLElBQWYsQ0FBb0I3RSxFQUFFLENBQUM4RSxHQUFILENBQU9DLEdBQVAsQ0FBVyw0QkFBWCxDQUFwQixDQUFyQjs7QUFDQSxTQUFJLElBQUl2QixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsS0FBS2xDLGFBQUwsQ0FBbUJXLE1BQW5CLEdBQTBCLENBQXhDLEVBQTBDdUIsQ0FBQyxFQUEzQyxFQUE4QztBQUN0QyxVQUFJaUMsU0FBUyxHQUFHLEtBQUtuRSxhQUFMLENBQW1Ca0MsQ0FBbkIsQ0FBaEI7QUFDQSxVQUFJa0MsSUFBSSxHQUFHRCxTQUFTLENBQUNFLENBQVYsR0FBZSxLQUFLNUUsVUFBTCxHQUFrQixHQUE1QztBQUNBLFVBQUk2RSxNQUFNLEdBQUc1RixFQUFFLENBQUM2RixNQUFILENBQVUsR0FBVixFQUFlN0YsRUFBRSxDQUFDOEYsRUFBSCxDQUFNSixJQUFOLEVBQVksQ0FBQyxHQUFiLENBQWYsQ0FBYjtBQUNBRCxNQUFBQSxTQUFTLENBQUNqQixTQUFWLENBQW9Cb0IsTUFBcEI7QUFDUDs7QUFFRCxTQUFLNUQsY0FBTDtBQUNBLFNBQUtLLFlBQUwsQ0FBa0IsS0FBS0MsbUJBQUwsQ0FBeUJDLElBQXpCLENBQThCLElBQTlCLENBQWxCLEVBQXNELEdBQXREO0FBQ0gsR0EvTUk7QUFpTkw7QUFDQXdELEVBQUFBLFFBbE5LLHNCQWtOSztBQUNOLFNBQUtqRixVQUFMLENBQWdCa0YsSUFBaEIsQ0FBcUIsVUFBU0wsQ0FBVCxFQUFXTSxDQUFYLEVBQWE7QUFDOUIsVUFBSUMsQ0FBQyxHQUFHUCxDQUFDLENBQUN2QyxZQUFGLENBQWUsTUFBZixFQUF1QnJCLFNBQS9CO0FBQ0EsVUFBSW9FLENBQUMsR0FBR0YsQ0FBQyxDQUFDN0MsWUFBRixDQUFlLE1BQWYsRUFBdUJyQixTQUEvQjs7QUFFQSxVQUFJbUUsQ0FBQyxDQUFDRSxjQUFGLENBQWlCLE9BQWpCLEtBQTZCRCxDQUFDLENBQUNDLGNBQUYsQ0FBaUIsT0FBakIsQ0FBakMsRUFBNEQ7QUFDeEQsZUFBUUQsQ0FBQyxDQUFDRSxLQUFGLEdBQVFILENBQUMsQ0FBQ0csS0FBbEI7QUFDSDs7QUFDRCxVQUFJSCxDQUFDLENBQUNFLGNBQUYsQ0FBaUIsTUFBakIsS0FBNEIsQ0FBQ0QsQ0FBQyxDQUFDQyxjQUFGLENBQWlCLE1BQWpCLENBQWpDLEVBQTJEO0FBQ3ZELGVBQU8sQ0FBQyxDQUFSO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDRixDQUFDLENBQUNFLGNBQUYsQ0FBaUIsTUFBakIsQ0FBRCxJQUE2QkQsQ0FBQyxDQUFDQyxjQUFGLENBQWlCLE1BQWpCLENBQWpDLEVBQTJEO0FBQ3ZELGVBQU8sQ0FBUDtBQUNIOztBQUNELFVBQUlGLENBQUMsQ0FBQ0UsY0FBRixDQUFpQixNQUFqQixLQUE0QkQsQ0FBQyxDQUFDQyxjQUFGLENBQWlCLE1BQWpCLENBQWhDLEVBQTBEO0FBQ3RELGVBQVFELENBQUMsQ0FBQ0csSUFBRixHQUFPSixDQUFDLENBQUNJLElBQWpCO0FBQ0g7QUFDSixLQWhCRCxFQURNLENBa0JOO0FBQ0E7QUFDQTs7QUFDQSxRQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUNBQyxJQUFBQSxVQUFVLENBQUMsWUFBVTtBQUNqQjtBQUNBLFVBQUliLENBQUMsR0FBRyxLQUFLN0UsVUFBTCxDQUFnQixDQUFoQixFQUFtQjZFLENBQTNCO0FBQ0FoRSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFXK0QsQ0FBdkI7O0FBQ0EsV0FBSyxJQUFJbkMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMUMsVUFBTCxDQUFnQm1CLE1BQXBDLEVBQTRDdUIsQ0FBQyxFQUE3QyxFQUFpRDtBQUM3QyxZQUFJRSxJQUFJLEdBQUcsS0FBSzVDLFVBQUwsQ0FBZ0IwQyxDQUFoQixDQUFYO0FBQ0FFLFFBQUFBLElBQUksQ0FBQytDLE1BQUwsR0FBY2pELENBQWQsQ0FGNkMsQ0FFNUI7O0FBQ2pCRSxRQUFBQSxJQUFJLENBQUNpQyxDQUFMLEdBQVNBLENBQUMsR0FBR2pDLElBQUksQ0FBQ2dELEtBQUwsR0FBYSxHQUFiLEdBQW1CbEQsQ0FBaEM7QUFDSDtBQUNKLEtBVFUsQ0FTVGpCLElBVFMsQ0FTSixJQVRJLENBQUQsRUFTSWdFLE9BVEosQ0FBVjtBQVlILEdBcFBJO0FBdVBMckUsRUFBQUEsUUF2UEssb0JBdVBJUixJQXZQSixFQXVQUztBQUNkLFFBQUlBLElBQUosRUFBVTtBQUNGQSxNQUFBQSxJQUFJLENBQUNzRSxJQUFMLENBQVUsVUFBVUUsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ3RCLFlBQUlELENBQUMsQ0FBQ0UsY0FBRixDQUFpQixPQUFqQixLQUE2QkQsQ0FBQyxDQUFDQyxjQUFGLENBQWlCLE9BQWpCLENBQWpDLEVBQTREO0FBQ3hELGlCQUFPRCxDQUFDLENBQUNFLEtBQUYsR0FBVUgsQ0FBQyxDQUFDRyxLQUFuQjtBQUNIOztBQUNELFlBQUlILENBQUMsQ0FBQ0UsY0FBRixDQUFpQixNQUFqQixLQUE0QixDQUFDRCxDQUFDLENBQUNDLGNBQUYsQ0FBaUIsTUFBakIsQ0FBakMsRUFBMkQ7QUFDdkQsaUJBQU8sQ0FBQyxDQUFSO0FBQ0g7O0FBQ0QsWUFBSSxDQUFDRixDQUFDLENBQUNFLGNBQUYsQ0FBaUIsTUFBakIsQ0FBRCxJQUE2QkQsQ0FBQyxDQUFDQyxjQUFGLENBQWlCLE1BQWpCLENBQWpDLEVBQTJEO0FBQ3ZELGlCQUFPLENBQVA7QUFDSDs7QUFDRCxZQUFJRixDQUFDLENBQUNFLGNBQUYsQ0FBaUIsTUFBakIsS0FBNEJELENBQUMsQ0FBQ0MsY0FBRixDQUFpQixNQUFqQixDQUFoQyxFQUEwRDtBQUN0RCxpQkFBT0QsQ0FBQyxDQUFDRyxJQUFGLEdBQVNKLENBQUMsQ0FBQ0ksSUFBbEI7QUFDSDtBQUNKLE9BYkQ7QUFjSCxLQWhCUyxDQWlCWjs7O0FBQ0EsU0FBS3hGLFVBQUwsR0FBa0IsRUFBbEI7O0FBQ0EsU0FBSSxJQUFJMEMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEVBQWQsRUFBaUJBLENBQUMsRUFBbEIsRUFBcUI7QUFFbkIsVUFBSUUsSUFBSSxHQUFHMUQsRUFBRSxDQUFDMkQsV0FBSCxDQUFlLEtBQUtyRCxXQUFwQixDQUFYO0FBQ0FvRCxNQUFBQSxJQUFJLENBQUNpRCxLQUFMLEdBQVcsR0FBWDtBQUNBakQsTUFBQUEsSUFBSSxDQUFDakIsTUFBTCxHQUFjLEtBQUtELElBQUwsQ0FBVUMsTUFBeEIsQ0FKbUIsQ0FLbkI7O0FBQ0FpQixNQUFBQSxJQUFJLENBQUNpQyxDQUFMLEdBQVNqQyxJQUFJLENBQUNnRCxLQUFMLEdBQWEsR0FBYixHQUFvQixDQUFDLEdBQXJCLEdBQTZCLENBQUMsRUFBOUIsR0FBb0NoRCxJQUFJLENBQUNnRCxLQUFMLEdBQWEsR0FBYixHQUFtQixDQUFoRSxDQU5tQixDQU9uQjs7QUFDQWhELE1BQUFBLElBQUksQ0FBQ3VDLENBQUwsR0FBUyxDQUFDLEdBQVY7QUFDQXZDLE1BQUFBLElBQUksQ0FBQ1osTUFBTCxHQUFjLEtBQWQ7QUFFQVksTUFBQUEsSUFBSSxDQUFDTixZQUFMLENBQWtCLE1BQWxCLEVBQTBCUSxTQUExQixDQUFvQ2xDLElBQUksQ0FBQzhCLENBQUQsQ0FBeEMsRUFBNENqQyxxQkFBU3FCLFVBQVQsQ0FBb0JDLFNBQWhFLEVBWG1CLENBWW5COztBQUNBLFdBQUsvQixVQUFMLENBQWdCK0MsSUFBaEIsQ0FBcUJILElBQXJCO0FBQ0EsV0FBSzNDLFVBQUwsR0FBa0IyQyxJQUFJLENBQUNnRCxLQUF2QjtBQUNELEtBbENXLENBb0NaOzs7QUFDQSxTQUFLeEYsV0FBTCxHQUFtQixFQUFuQjs7QUFDQSxTQUFJLElBQUlzQyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsQ0FBZCxFQUFnQkEsQ0FBQyxFQUFqQixFQUFvQjtBQUNsQixVQUFJb0QsT0FBTyxHQUFHNUcsRUFBRSxDQUFDMkQsV0FBSCxDQUFlLEtBQUtyRCxXQUFwQixDQUFkO0FBQ0FzRyxNQUFBQSxPQUFPLENBQUNELEtBQVIsR0FBYyxHQUFkO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsUUFBUixHQUFtQixLQUFLcEcsb0JBQUwsQ0FBMEJvRyxRQUE3QyxDQUhrQixDQUlsQjtBQUNBOztBQUNBLFVBQUdyRCxDQUFDLElBQUUsQ0FBTixFQUFRO0FBRUpvRCxRQUFBQSxPQUFPLENBQUNqQixDQUFSLEdBQVlpQixPQUFPLENBQUNqQixDQUFSLEdBQVlpQixPQUFPLENBQUNGLEtBQVIsR0FBYyxHQUF0QztBQUNILE9BSEQsTUFHTSxJQUFHbEQsQ0FBQyxJQUFFLENBQU4sRUFBUTtBQUNWb0QsUUFBQUEsT0FBTyxDQUFDakIsQ0FBUixHQUFZaUIsT0FBTyxDQUFDakIsQ0FBUixHQUFZaUIsT0FBTyxDQUFDRixLQUFSLEdBQWMsR0FBdEM7QUFDSCxPQVhpQixDQWNsQjtBQUNBOzs7QUFDQUUsTUFBQUEsT0FBTyxDQUFDbkUsTUFBUixHQUFpQixLQUFLRCxJQUFMLENBQVVDLE1BQTNCLENBaEJrQixDQWlCbEI7O0FBQ0EsV0FBS3ZCLFdBQUwsQ0FBaUIyQyxJQUFqQixDQUFzQitDLE9BQXRCO0FBQ0Q7QUFFRixHQWxUSTtBQW9UTDtBQUNBRSxFQUFBQSxxQkFyVEssbUNBcVRrQjtBQUNuQixTQUFJLElBQUl0RCxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsS0FBSzFDLFVBQUwsQ0FBZ0JtQixNQUE5QixFQUFxQ3VCLENBQUMsRUFBdEMsRUFBeUM7QUFDckMsVUFBSUUsSUFBSSxHQUFHLEtBQUs1QyxVQUFMLENBQWdCMEMsQ0FBaEIsQ0FBWDs7QUFDQSxVQUFHRSxJQUFJLENBQUN1QyxDQUFMLElBQVEsQ0FBQyxHQUFaLEVBQWdCO0FBQ1p2QyxRQUFBQSxJQUFJLENBQUN1QyxDQUFMLEdBQVMsQ0FBQyxHQUFWO0FBQ0g7QUFDSjtBQUNKLEdBNVRJO0FBNlRMO0FBQ0FoQixFQUFBQSxhQTlUSywyQkE4VFU7QUFDWDtBQUNBLFFBQUk4QixXQUFXLEdBQUksS0FBS2pHLFVBQUwsQ0FBZ0IsS0FBS0EsVUFBTCxDQUFnQm1CLE1BQWhCLEdBQXVCLENBQXZDLEVBQTBDMEQsQ0FBN0Q7O0FBQ0EsU0FBSSxJQUFJbkMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUtyQyxnQkFBTCxDQUFzQmMsTUFBcEMsRUFBMkN1QixDQUFDLEVBQTVDLEVBQStDO0FBQzNDLFVBQUlFLElBQUksR0FBRzFELEVBQUUsQ0FBQzJELFdBQUgsQ0FBZSxLQUFLckQsV0FBcEIsQ0FBWDtBQUNBb0QsTUFBQUEsSUFBSSxDQUFDaUQsS0FBTCxHQUFXLEdBQVg7QUFDQWpELE1BQUFBLElBQUksQ0FBQ2pCLE1BQUwsR0FBYyxLQUFLRCxJQUFMLENBQVVDLE1BQXhCO0FBRUFpQixNQUFBQSxJQUFJLENBQUNpQyxDQUFMLEdBQVNvQixXQUFXLEdBQUksQ0FBQ3ZELENBQUMsR0FBQyxDQUFILElBQU0sS0FBS3pDLFVBQVgsR0FBd0IsR0FBaEQ7QUFDQTJDLE1BQUFBLElBQUksQ0FBQ3VDLENBQUwsR0FBUyxDQUFDLEdBQVYsQ0FOMkMsQ0FNNUI7QUFFZjs7QUFDQXZDLE1BQUFBLElBQUksQ0FBQ04sWUFBTCxDQUFrQixNQUFsQixFQUEwQlEsU0FBMUIsQ0FBb0MsS0FBS3pDLGdCQUFMLENBQXNCcUMsQ0FBdEIsQ0FBcEMsRUFBNkRqQyxxQkFBU3FCLFVBQVQsQ0FBb0JDLFNBQWpGO0FBQ0FhLE1BQUFBLElBQUksQ0FBQ1osTUFBTCxHQUFjLElBQWQ7QUFDQSxXQUFLaEMsVUFBTCxDQUFnQitDLElBQWhCLENBQXFCSCxJQUFyQjtBQUNIOztBQUVELFNBQUtxQyxRQUFMLEdBakJXLENBa0JYOztBQUNBLFNBQUsxRCxZQUFMLENBQWtCLEtBQUt5RSxxQkFBTCxDQUEyQnZFLElBQTNCLENBQWdDLElBQWhDLENBQWxCLEVBQXdELENBQXhEO0FBRUgsR0FuVkk7QUFxVkx5RSxFQUFBQSxXQXJWSyx1QkFxVk85RCxTQXJWUCxFQXFWaUIrRCxXQXJWakIsRUFxVjZCO0FBQzlCLFFBQUdBLFdBQVcsQ0FBQ2hGLE1BQVosSUFBb0IsQ0FBdkIsRUFBeUI7QUFDckI7QUFDSDtBQUVEOzs7Ozs7Ozs7O0FBVUE7OztBQUNBLFFBQUlpRixZQUFZLEdBQUcsRUFBbkI7O0FBQ0EsU0FBSSxJQUFJMUQsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDeUQsV0FBVyxDQUFDaEYsTUFBMUIsRUFBaUN1QixDQUFDLEVBQWxDLEVBQXFDO0FBQ2pDLFdBQUksSUFBSTJELENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxLQUFLckcsVUFBTCxDQUFnQm1CLE1BQTlCLEVBQXFDa0YsQ0FBQyxFQUF0QyxFQUF5QztBQUNyQyxZQUFJQyxPQUFPLEdBQUcsS0FBS3RHLFVBQUwsQ0FBZ0JxRyxDQUFoQixFQUFtQi9ELFlBQW5CLENBQWdDLE1BQWhDLEVBQXdDZ0UsT0FBdEQ7O0FBQ0EsWUFBR0EsT0FBTyxJQUFFSCxXQUFXLENBQUN6RCxDQUFELENBQVgsQ0FBZTRCLE1BQTNCLEVBQWtDO0FBQzlCekQsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQW1Cd0YsT0FBL0IsRUFEOEIsQ0FFOUI7O0FBQ0EsZUFBS3RHLFVBQUwsQ0FBZ0JxRyxDQUFoQixFQUFtQkUsZ0JBQW5CLENBQW9DLElBQXBDO0FBQ0FILFVBQUFBLFlBQVksQ0FBQ3JELElBQWIsQ0FBa0IsS0FBSy9DLFVBQUwsQ0FBZ0JxRyxDQUFoQixDQUFsQjtBQUNBLGVBQUtyRyxVQUFMLENBQWdCdUUsTUFBaEIsQ0FBdUI4QixDQUF2QixFQUF5QixDQUF6QjtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxTQUFLRyxvQkFBTCxDQUEwQnBFLFNBQTFCLEVBQW9DZ0UsWUFBcEM7QUFDQSxTQUFLSyxXQUFMO0FBRUgsR0F0WEk7QUF3WEw7QUFDQXZFLEVBQUFBLFlBelhLLHdCQXlYUUUsU0F6WFIsRUF5WGtCO0FBQ25CLFFBQUlDLGdCQUFnQixHQUFHLEtBQUtYLElBQUwsQ0FBVUMsTUFBVixDQUFpQlcsWUFBakIsQ0FBOEIsV0FBOUIsQ0FBdkI7QUFDQSxRQUFJQyxZQUFZLEdBQUdGLGdCQUFnQixDQUFDRywwQkFBakIsQ0FBNENKLFNBQTVDLENBQW5CO0FBQ0EsUUFBSXNFLFFBQVEsR0FBR25FLFlBQVksQ0FBQ21FLFFBQTVCOztBQUNBLFNBQUksSUFBSWhFLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ2dFLFFBQVEsQ0FBQ3ZGLE1BQXZCLEVBQThCdUIsQ0FBQyxFQUEvQixFQUFrQztBQUM5QixVQUFJRSxJQUFJLEdBQUc4RCxRQUFRLENBQUNoRSxDQUFELENBQW5CO0FBQ0FFLE1BQUFBLElBQUksQ0FBQytELE9BQUw7QUFDSDs7QUFDRHBFLElBQUFBLFlBQVksQ0FBQ3FFLGlCQUFiLENBQStCLElBQS9CO0FBQ0gsR0FsWUk7QUFtWUw7QUFDQUMsRUFBQUEsWUFwWUssd0JBb1lRbEUsS0FwWVIsRUFvWWM7QUFDZixRQUFHQSxLQUFLLENBQUN4QixNQUFOLElBQWMsQ0FBakIsRUFBbUI7QUFDZjtBQUNIOztBQUNEd0IsSUFBQUEsS0FBSyxDQUFDdUMsSUFBTixDQUFXLFVBQVNMLENBQVQsRUFBV00sQ0FBWCxFQUFhO0FBQ3BCLFVBQUlDLENBQUMsR0FBR1AsQ0FBQyxDQUFDdkMsWUFBRixDQUFlLE1BQWYsRUFBdUJyQixTQUEvQjtBQUNBLFVBQUlvRSxDQUFDLEdBQUdGLENBQUMsQ0FBQzdDLFlBQUYsQ0FBZSxNQUFmLEVBQXVCckIsU0FBL0I7O0FBRUEsVUFBSW1FLENBQUMsQ0FBQ0UsY0FBRixDQUFpQixPQUFqQixLQUE2QkQsQ0FBQyxDQUFDQyxjQUFGLENBQWlCLE9BQWpCLENBQWpDLEVBQTREO0FBQ3hELGVBQU9ELENBQUMsQ0FBQ0UsS0FBRixHQUFVSCxDQUFDLENBQUNHLEtBQW5CO0FBQ0g7O0FBQ0QsVUFBSUgsQ0FBQyxDQUFDRSxjQUFGLENBQWlCLE1BQWpCLEtBQTRCLENBQUNELENBQUMsQ0FBQ0MsY0FBRixDQUFpQixNQUFqQixDQUFqQyxFQUEyRDtBQUN2RCxlQUFPLENBQUMsQ0FBUjtBQUNIOztBQUNELFVBQUksQ0FBQ0YsQ0FBQyxDQUFDRSxjQUFGLENBQWlCLE1BQWpCLENBQUQsSUFBNkJELENBQUMsQ0FBQ0MsY0FBRixDQUFpQixNQUFqQixDQUFqQyxFQUEyRDtBQUN2RCxlQUFPLENBQVA7QUFDSDs7QUFDRCxVQUFJRixDQUFDLENBQUNFLGNBQUYsQ0FBaUIsTUFBakIsS0FBNEJELENBQUMsQ0FBQ0MsY0FBRixDQUFpQixNQUFqQixDQUFoQyxFQUEwRDtBQUN0RCxlQUFPRCxDQUFDLENBQUNHLElBQUYsR0FBU0osQ0FBQyxDQUFDSSxJQUFsQjtBQUNIO0FBQ0osS0FoQkQ7QUFpQkgsR0F6Wkk7QUEyWkx4QyxFQUFBQSx5QkEzWksscUNBMlpxQlQsWUEzWnJCLEVBMlprQ0ksS0EzWmxDLEVBMlp3Q21FLE9BM1p4QyxFQTJaZ0Q7QUFDbER2RSxJQUFBQSxZQUFZLENBQUNxRSxpQkFBYixDQUErQixJQUEvQixFQURrRCxDQUdsRDtBQUNBOztBQUNBLFNBQUksSUFBSWxFLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ0MsS0FBSyxDQUFDeEIsTUFBcEIsRUFBMkJ1QixDQUFDLEVBQTVCLEVBQStCO0FBQzNCLFVBQUlFLElBQUksR0FBR0QsS0FBSyxDQUFDRCxDQUFELENBQWhCO0FBQ0FILE1BQUFBLFlBQVksQ0FBQ3dFLFFBQWIsQ0FBc0JuRSxJQUF0QixFQUEyQixNQUFJRixDQUEvQixFQUYyQixDQUVPO0FBQ3JDLEtBUmlELENBVWxEO0FBQ0E7OztBQUNBLFFBQUlzRSxNQUFNLEdBQUdyRSxLQUFLLENBQUN4QixNQUFOLEdBQWUsQ0FBNUIsQ0Faa0QsQ0FhbEQ7O0FBQ0EsU0FBSSxJQUFJdUIsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDQyxLQUFLLENBQUN4QixNQUFwQixFQUEyQnVCLENBQUMsRUFBNUIsRUFBK0I7QUFDOUIsVUFBSXVFLFFBQVEsR0FBRzFFLFlBQVksQ0FBQzJFLFdBQWIsR0FBMkJ4RSxDQUEzQixDQUFmO0FBQ0EsVUFBSW1DLENBQUMsR0FBRyxDQUFDbkMsQ0FBQyxHQUFHc0UsTUFBTCxJQUFlLEVBQXZCO0FBQ0EsVUFBSTdCLENBQUMsR0FBRzhCLFFBQVEsQ0FBQzlCLENBQVQsR0FBVzJCLE9BQW5CLENBSDhCLENBR0Y7QUFDNUI7O0FBQ0FHLE1BQUFBLFFBQVEsQ0FBQ0UsUUFBVCxDQUFrQixHQUFsQixFQUF1QixHQUF2QjtBQUNBRixNQUFBQSxRQUFRLENBQUNHLFdBQVQsQ0FBcUJ2QyxDQUFyQixFQUF1Qk0sQ0FBdkI7QUFFQTtBQUNILEdBbGJJO0FBbWJMO0FBQ0E7QUFDQXFCLEVBQUFBLG9CQXJiSyxnQ0FxYmdCcEUsU0FyYmhCLEVBcWIwQmdFLFlBcmIxQixFQXFidUM7QUFDeEMsUUFBR0EsWUFBWSxDQUFDakYsTUFBYixJQUFxQixDQUF4QixFQUEwQjtBQUN0QjtBQUNILEtBSHVDLENBSXhDOzs7QUFDRCxTQUFLMEYsWUFBTCxDQUFrQlQsWUFBbEIsRUFMeUMsQ0FNekM7O0FBQ0EsUUFBSS9ELGdCQUFnQixHQUFHLEtBQUtYLElBQUwsQ0FBVUMsTUFBVixDQUFpQlcsWUFBakIsQ0FBOEIsV0FBOUIsQ0FBdkIsQ0FQeUMsQ0FRekM7O0FBQ0EsUUFBSUMsWUFBWSxHQUFHRixnQkFBZ0IsQ0FBQ0csMEJBQWpCLENBQTRDSixTQUE1QyxDQUFuQjtBQUNBLFNBQUtZLHlCQUFMLENBQStCVCxZQUEvQixFQUE0QzZELFlBQTVDLEVBQXlELEdBQXpELEVBVnlDLENBV3pDO0FBRUYsR0FsY0k7QUFvY0w7QUFDQUssRUFBQUEsV0FyY0sseUJBcWNRO0FBRVQsUUFBSVksU0FBUyxHQUFHLEtBQUtySCxVQUFMLENBQWdCbUIsTUFBaEIsR0FBeUIsQ0FBekMsQ0FGUyxDQUdUOztBQUNBLFNBQUksSUFBSXVCLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxLQUFLMUMsVUFBTCxDQUFnQm1CLE1BQTlCLEVBQXFDdUIsQ0FBQyxFQUF0QyxFQUF5QztBQUNyQyxVQUFJdUUsUUFBUSxHQUFHLEtBQUtqSCxVQUFMLENBQWdCMEMsQ0FBaEIsQ0FBZjtBQUNBLFVBQUltQyxDQUFDLEdBQUcsQ0FBQ25DLENBQUMsR0FBRzJFLFNBQUwsS0FBaUIsS0FBS3BILFVBQUwsR0FBa0IsR0FBbkMsQ0FBUjtBQUNBZ0gsTUFBQUEsUUFBUSxDQUFDRyxXQUFULENBQXFCdkMsQ0FBckIsRUFBd0IsQ0FBQyxHQUF6QjtBQUNIO0FBRUosR0EvY0k7QUFpZEx5QyxFQUFBQSxpQkFqZEssNkJBaWRhQyxTQWpkYixFQWlkdUI7QUFDeEIxRyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBcUJ5RyxTQUFqQzs7QUFFQSxRQUFHQSxTQUFTLElBQUUsRUFBZCxFQUFpQjtBQUNiO0FBQ0g7O0FBRUQsWUFBT0EsU0FBUDtBQUNJLFdBQUtDLFVBQVUsQ0FBQ0MsR0FBWCxDQUFlQyxJQUFwQjtBQUNJOztBQUNKLFdBQUtGLFVBQVUsVUFBVixDQUFrQkUsSUFBdkI7QUFDUSxZQUFHckcsWUFBSCxFQUFnQjtBQUNabkMsVUFBQUEsRUFBRSxDQUFDNEUsV0FBSCxDQUFlQyxJQUFmLENBQW9CN0UsRUFBRSxDQUFDOEUsR0FBSCxDQUFPQyxHQUFQLENBQVcsMkJBQVgsQ0FBcEI7QUFDRjs7QUFDTjtBQVBSO0FBU0gsR0FqZUk7QUFrZUw7QUFDQTBELEVBQUFBLGFBbmVLLHlCQW1lU3ZELEtBbmVULEVBbWVld0QsVUFuZWYsRUFtZTBCO0FBQzNCLFlBQU9BLFVBQVA7QUFDSSxXQUFLLFlBQUw7QUFDSS9HLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7O0FBQ0FMLDZCQUFTQyxNQUFULENBQWdCbUgsZUFBaEIsQ0FBZ0NDLFVBQVUsQ0FBQ0MsSUFBM0M7O0FBQ0EsYUFBS3JJLEtBQUwsQ0FBV3NDLE1BQVgsR0FBb0IsS0FBcEI7O0FBQ0EsWUFBR1gsWUFBSCxFQUFnQjtBQUNabkMsVUFBQUEsRUFBRSxDQUFDNEUsV0FBSCxDQUFlQyxJQUFmLENBQW9CN0UsRUFBRSxDQUFDOEUsR0FBSCxDQUFPQyxHQUFQLENBQVcsdUNBQVgsQ0FBcEI7QUFDRjs7QUFDRjs7QUFDSixXQUFLLGNBQUw7QUFDSXBELFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7O0FBQ0FMLDZCQUFTQyxNQUFULENBQWdCbUgsZUFBaEIsQ0FBZ0NDLFVBQVUsQ0FBQ0UsT0FBM0M7O0FBQ0EsYUFBS3RJLEtBQUwsQ0FBV3NDLE1BQVgsR0FBb0IsS0FBcEI7O0FBQ0EsWUFBR1gsWUFBSCxFQUFnQjtBQUNabkMsVUFBQUEsRUFBRSxDQUFDNEUsV0FBSCxDQUFlQyxJQUFmLENBQW9CN0UsRUFBRSxDQUFDOEUsR0FBSCxDQUFPQyxHQUFQLENBQVcsbUNBQVgsQ0FBcEI7QUFDRjs7QUFDRDs7QUFDSixXQUFLLFlBQUw7QUFBb0I7QUFDaEJ4RCw2QkFBU0MsTUFBVCxDQUFnQnVILGtCQUFoQixDQUFtQyxFQUFuQyxFQUFzQyxJQUF0Qzs7QUFDQSxhQUFLckksY0FBTCxDQUFvQm9DLE1BQXBCLEdBQTZCLEtBQTdCO0FBQ0E7O0FBQ0osV0FBSyxVQUFMO0FBQW1CO0FBQ2Y7QUFDQSxZQUFHLEtBQUsxQixnQkFBTCxDQUFzQmEsTUFBdEIsSUFBOEIsQ0FBakMsRUFBbUM7QUFDaEMsZUFBS3RCLFNBQUwsQ0FBZXFJLE1BQWYsR0FBc0IsT0FBdEI7QUFDQXhDLFVBQUFBLFVBQVUsQ0FBQyxZQUFVO0FBQ2pCLGlCQUFLN0YsU0FBTCxDQUFlcUksTUFBZixHQUFzQixFQUF0QjtBQUNILFdBRlUsQ0FFVHpHLElBRlMsQ0FFSixJQUZJLENBQUQsRUFFSSxJQUZKLENBQVY7QUFHRjs7QUFDRGhCLDZCQUFTQyxNQUFULENBQWdCeUgsZ0JBQWhCLENBQWlDLEtBQUs3SCxnQkFBdEMsRUFBdUQsVUFBUzhILEdBQVQsRUFBYXhILElBQWIsRUFBa0I7QUFFdEUsY0FBR3dILEdBQUgsRUFBTztBQUNIdkgsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQW9Cc0gsR0FBaEM7QUFDQXZILFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFtQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLElBQWYsQ0FBL0I7O0FBQ0EsZ0JBQUcsS0FBS2YsU0FBTCxDQUFlcUksTUFBZixJQUF1QixFQUExQixFQUE2QjtBQUN6QixtQkFBS3JJLFNBQUwsQ0FBZXFJLE1BQWYsR0FBd0J0SCxJQUFJLENBQUN5SCxHQUE3QjtBQUNBM0MsY0FBQUEsVUFBVSxDQUFDLFlBQVU7QUFDakIscUJBQUs3RixTQUFMLENBQWVxSSxNQUFmLEdBQXNCLEVBQXRCO0FBQ0gsZUFGVSxDQUVUekcsSUFGUyxDQUVKLElBRkksQ0FBRCxFQUVJLElBRkosQ0FBVjtBQUdILGFBUkUsQ0FVSDs7O0FBQ0EsaUJBQUksSUFBSWlCLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxLQUFLMUMsVUFBTCxDQUFnQm1CLE1BQTlCLEVBQXFDdUIsQ0FBQyxFQUF0QyxFQUF5QztBQUNyQyxrQkFBSUUsSUFBSSxHQUFHLEtBQUs1QyxVQUFMLENBQWdCMEMsQ0FBaEIsQ0FBWDtBQUNBRSxjQUFBQSxJQUFJLENBQUNoQixJQUFMLENBQVUsaUJBQVY7QUFDSDs7QUFDRCxpQkFBS3RCLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0YsV0FoQkYsTUFnQk07QUFDRDtBQUNBTyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBc0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixJQUFmLENBQWxDO0FBQ0EsaUJBQUtoQixjQUFMLENBQW9Cb0MsTUFBcEIsR0FBNkIsS0FBN0IsQ0FIQyxDQUlEO0FBQ0E7QUFDQTs7QUFDQSxpQkFBS3NGLGlCQUFMLENBQXVCMUcsSUFBSSxDQUFDMEgsU0FBTCxDQUFlWixJQUF0QztBQUNBLGlCQUFLeEIsV0FBTCxDQUFpQnRGLElBQUksQ0FBQzJILE9BQXRCLEVBQThCLEtBQUtqSSxnQkFBbkM7QUFDQSxpQkFBS0EsZ0JBQUwsR0FBd0IsRUFBeEI7QUFFSDtBQUVKLFNBL0JzRCxDQStCckRtQixJQS9CcUQsQ0ErQmhELElBL0JnRCxDQUF2RCxFQVJKLENBd0NJOzs7QUFDQTs7QUFDSixXQUFLLFNBQUw7QUFDSTs7QUFDTDtBQUNJO0FBbEVSO0FBb0VIO0FBeGlCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlnbG9iYWwgZnJvbSBcIi4uL215Z29sYmFsLmpzXCJcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZ2FtZWluZ1VJOiBjYy5Ob2RlLFxuICAgICAgICBjYXJkX3ByZWZhYjpjYy5QcmVmYWIsXG4gICAgICAgIHJvYlVJOmNjLk5vZGUsXG4gICAgICAgIGJvdHRvbV9jYXJkX3Bvc19ub2RlOmNjLk5vZGUsXG4gICAgICAgIHBsYXlpbmdVSV9ub2RlOmNjLk5vZGUsXG4gICAgICAgIHRpcHNMYWJlbDpjYy5MYWJlbCwgLy/njqnlrrblh7rniYzkuI3lkIjms5XnmoR0aXBzXG4gICAgXG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIC8v6Ieq5bex54mM5YiX6KGoIFxuICAgICAgICB0aGlzLmNhcmRzX25vZHMgPSBbXVxuICAgICAgICB0aGlzLmNhcmRfd2lkdGggPSAwXG4gICAgICAgIC8v5b2T5YmN5Y+v5Lul5oqi5Zyw5Li755qEYWNjb3VudGlkXG4gICAgICAgIHRoaXMucm9iX3BsYXllcl9hY2NvdW50aWQgPSAwXG4gICAgICAgIC8v5Y+R54mM5Yqo55S75piv5ZCm57uT5p2fXG4gICAgICAgIHRoaXMuZmFwYWlfZW5kID0gZmFsc2VcbiAgICAgICAgLy/lupXniYzmlbDnu4RcbiAgICAgICAgdGhpcy5ib3R0b21fY2FyZCA9IFtdXG4gICAgICAgIC8v5bqV54mM55qEanNvbuWvueixoeaVsOaNrlxuICAgICAgICB0aGlzLmJvdHRvbV9jYXJkX2RhdGE9W11cbiAgICAgICAgdGhpcy5jaG9vc2VfY2FyZF9kYXRhPVtdXG4gICAgICAgIHRoaXMub3V0Y2FyX3pvbmUgPSBbXVxuXG4gICAgICAgIHRoaXMucHVzaF9jYXJkX3RtcCA9IFtdXG4gICAgICAgIC8v55uR5ZCs5pyN5Yqh5ZmoOuS4i+WPkeeJjOa2iOaBr1xuICAgICAgICBteWdsb2JhbC5zb2NrZXQub25QdXNoQ2FyZHMoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uUHVzaENhcmRzXCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgICB0aGlzLmNhcmRfZGF0YSA9IGRhdGFcbiAgICAgICAgICAgIHRoaXMuY3VyX2luZGV4X2NhcmQgPSBkYXRhLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIHRoaXMucHVzaENhcmQoZGF0YSlcbiAgICAgICAgICAgIGlmKGlzb3Blbl9zb3VuZCl7XG4gICAgICAgICAgICAgICAgLy/lvqrnjq/mkq3mlL7lj5HniYzpn7PmlYhcbiAgICAgICAgICAgICAgIC8vIHRoaXMuZmFwYWlfYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2MudXJsLnJhdyhcInJlc291cmNlcy9zb3VuZC9mYXBhaTEubXAzXCIpLHRydWUpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFydCBmYXBhaV9hdWRpb0lEXCIrdGhpcy5mYXBhaV9hdWRpb0lEKSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAvL+W3pui+ueenu+WKqOWumuaXtuWZqFxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5fcnVuYWN0aXZlX3B1c2hjYXJkLmJpbmQodGhpcyksMC4zKVxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5lbWl0KFwicHVzaGNhcmRfb3RoZXJfZXZlbnRcIilcbiAgICAgICAgICAgXG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgICAvL+ebkeWQrOacjeWKoeWZqDrpgJrnn6XmiqLlnLDkuLvmtojmga8s5pi+56S655u45bqU55qEVUlcbiAgICAgICAgbXlnbG9iYWwuc29ja2V0Lm9uQ2FuUm9iU3RhdGUoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2FuUm9iU3RhdGVcIitKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgICAgICAgIC8v6L+Z6YeM6ZyA6KaBMuS4quWPmOmHj+adoeS7tu+8muiHquW3seaYr+S4i+S4gOS4quaKouWcsOS4u++8jDLlj5HniYzliqjnlLvnu5PmnZ9cbiAgICAgICAgICAgIHRoaXMucm9iX3BsYXllcl9hY2NvdW50aWQgPSBkYXRhXG4gICAgICAgICAgICBpZihkYXRhPT1teWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRCAmJiB0aGlzLmZhcGFpX2VuZD09dHJ1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2JVSS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgXG4gICAgICAgIC8v55uR5ZCs5pyN5Yqh5Zmo5Y+v5Lul5Ye654mM5raI5oGvXG4gICAgICAgIG15Z2xvYmFsLnNvY2tldC5vbkNhbkNodUNhcmQoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2FuUm9iU3RhdGVcIitKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgICAgICAgIC8v5Yik5pat5piv5LiN5piv6Ieq5bex6IO95Ye654mMXG4gICAgICAgICAgICBpZihkYXRhPT1teWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRCl7XG4gICAgICAgICAgICAgICAgLy/lhYjmuIXnkIblh7rniYzljLrln59cbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyT3V0Wm9uZShteWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRClcbiAgICAgICAgICAgICAgICAvL+WFiOaKiuiHquW3seWHuueJjOWIl+ihqOe9ruepulxuICAgICAgICAgICAgICAgIC8vdGhpcy5jaG9vc2VfY2FyZF9kYXRhPVtdXG4gICAgICAgICAgICAgICAgLy/mmL7npLrlj6/ku6Xlh7rniYznmoRVSVxuICAgICAgICAgICAgICAgIHRoaXMucGxheWluZ1VJX25vZGUuYWN0aXZlID0gdHJ1ZVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgICAvL+ebkeWQrOacjeWKoeWZqO+8muWFtuS7lueOqeWutuWHuueJjOa2iOaBr1xuICAgICAgICBteWdsb2JhbC5zb2NrZXQub25PdGhlclBsYXllckNodUNhcmQoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAvL3tcImFjY291bnRpZFwiOlwiMjM1NzU0MFwiLFwiY2FyZHNcIjpbe1wiY2FyZGlkXCI6NCxcImNhcmRfZGF0YVwiOntcImluZGV4XCI6NCxcInZhbHVlXCI6MSxcInNoYXBlXCI6MX19XX1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25PdGhlclBsYXllckNodUNhcmRcIitKU09OLnN0cmluZ2lmeShkYXRhKSlcblxuICAgICAgICAgICAgdmFyIGFjY291bnRpZCA9IGRhdGEuYWNjb3VudGlkXG4gICAgICAgICAgICB2YXIgZ2FtZVNjZW5lX3NjcmlwdCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiZ2FtZVNjZW5lXCIpXG4gICAgICAgICAgICAvL+iOt+WPluWHuueJjOWMuuWfn+iKgueCuVxuICAgICAgICAgICAgdmFyIG91dENhcmRfbm9kZSA9IGdhbWVTY2VuZV9zY3JpcHQuZ2V0VXNlck91dENhcmRQb3NCeUFjY291bnQoYWNjb3VudGlkKVxuICAgICAgICAgICAgaWYob3V0Q2FyZF9ub2RlPT1udWxsKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG5vZGVfY2FyZHMgPSBbXVxuICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxkYXRhLmNhcmRzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIHZhciBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkX3ByZWZhYilcbiAgICAgICAgICAgICAgICBjYXJkLmdldENvbXBvbmVudChcImNhcmRcIikuc2hvd0NhcmRzKGRhdGEuY2FyZHNbaV0uY2FyZF9kYXRhLG15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKVxuICAgICAgICAgICAgICAgIG5vZGVfY2FyZHMucHVzaChjYXJkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hcHBlbmRPdGhlckNhcmRzVG9PdXRab25lKG91dENhcmRfbm9kZSxub2RlX2NhcmRzLDApXG5cbiAgICAgICAgICAgIFxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgICAgLy/lhoXpg6jkuovku7Y65pi+56S65bqV54mM5LqL5Lu2LGRhdGHmmK/kuInlvKDlupXniYzmlbDmja5cbiAgICAgICAgdGhpcy5ub2RlLm9uKFwic2hvd19ib3R0b21fY2FyZF9ldmVudFwiLGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tc2hvd19ib3R0b21fY2FyZF9ldmVudFwiLCtkYXRhKVxuICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5ib3R0b21fY2FyZF9kYXRhID0gZGF0YVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IodmFyIGk9MDtpPGRhdGEubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgdmFyIGNhcmQgPSB0aGlzLmJvdHRvbV9jYXJkW2ldXG4gICAgICAgICAgICAgICAgdmFyIHNob3dfZGF0YSA9IGRhdGFbaV1cbiAgICAgICAgICAgICAgICB2YXIgY2FsbF9kYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm9ialwiOmNhcmQsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOnNob3dfZGF0YSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJib3R0b20gc2hvd19kYXRhOlwiK0pTT04uc3RyaW5naWZ5KHNob3dfZGF0YSkpXG4gICAgICAgICAgICAgICAgdmFyIHJ1biA9ICBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQsYWN0aXZlZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciBzaG93X2NhcmQgPSBhY3RpdmVkYXRhLm9ialxuICAgICAgICAgICAgICAgICAgICB2YXIgc2hvd19kYXRhID0gYWN0aXZlZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYy5jYWxsRnVuYzpcIitKU09OLnN0cmluZ2lmeShzaG93X2RhdGEpKVxuICAgICAgICAgICAgICAgICAgICBzaG93X2NhcmQuZ2V0Q29tcG9uZW50KFwiY2FyZFwiKS5zaG93Q2FyZHMoc2hvd19kYXRhKVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0sdGhpcyxjYWxsX2RhdGEpXG5cbiAgICAgICAgICAgICAgICBjYXJkLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5yb3RhdGVCeSgwLDAsMTgwKSxjYy5yb3RhdGVCeSgwLjIsMCwtOTApLCBydW4sXG4gICAgICAgICAgICAgICAgY2Mucm90YXRlQnkoMC4yLDAsLTkwKSxjYy5zY2FsZUJ5KDEsIDEuMikpKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGlzb3Blbl9zb3VuZCl7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkoY2MudXJsLnJhdyhcInJlc291cmNlcy9zb3VuZC9zdGFydC5tcDNcIikpIFxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLnBhcmVudC5lbWl0KFwiY2hhbmdlX3Jvb21fc3RhdGVfZXZlbnRcIixSb29tU3RhdGUuUk9PTV9QTEFZSU5HKVxuICAgICAgICAgICAgLy/lpoLmnpzoh6rlt7HlnLDkuLvvvIznu5nliqDkuIrkuInlvKDlupXniYxcbiAgICAgICAgICAgIGlmKG15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEPT1teWdsb2JhbC5wbGF5ZXJEYXRhLm1hc3Rlcl9hY2NvdW50aWQpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMucHVzaFRocmVlQ2FyZC5iaW5kKHRoaXMpLDAuMilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgICAgIC8v5rOo5YaM55uR5ZCs5LiA5Liq6YCJ5oup54mM5raI5oGvIFxuICAgICAgICB0aGlzLm5vZGUub24oXCJjaG9vc2VfY2FyZF9ldmVudFwiLGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hvb3NlX2NhcmRfZXZlbnQ6XCIrSlNPTi5zdHJpbmdpZnkoZXZlbnQpKVxuICAgICAgICAgICAgdmFyIGRldGFpbCA9IGV2ZW50XG4gICAgICAgICAgICB0aGlzLmNob29zZV9jYXJkX2RhdGEucHVzaChkZXRhaWwpXG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgICB0aGlzLm5vZGUub24oXCJ1bmNob29zZV9jYXJkX2V2ZW50XCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1bmNob29zZV9jYXJkX2V2ZW50OlwiKyBldmVudClcbiAgICAgICAgICAgIHZhciBkZXRhaWwgPSBldmVudFxuICAgICAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmNob29zZV9jYXJkX2RhdGEubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaG9vc2VfY2FyZF9kYXRhW2ldLmNhcmRpZD09ZGV0YWlsKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VfY2FyZF9kYXRhLnNwbGljZShpLDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICBcbiAgICB9LFxuXG4gICAgLy/lpITnkIblj5HniYznmoTmlYjmnpxcbiAgICBfcnVuYWN0aXZlX3B1c2hjYXJkKCl7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJfcnVuYWN0aXZlX3B1c2hjYXJkOlwiK3RoaXMuY3VyX2luZGV4X2NhcmQpXG4gICAgICAgIGlmKHRoaXMuY3VyX2luZGV4X2NhcmQgPCAwKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHVzaGNhcmQgZW5kXCIpXG4gICAgICAgICAgICAvL+WPkeeJjOWKqOeUu+WujOaIkO+8jOaYvuekuuaKouWcsOS4u+aMiemSrlxuICAgICAgICAgICAgLy90aGlzLnJvYlVJLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuZmFwYWlfZW5kID0gdHJ1ZVxuICAgICAgICAgICAgaWYodGhpcy5yb2JfcGxheWVyX2FjY291bnRpZD09bXlnbG9iYWwucGxheWVyRGF0YS5hY2NvdW50SUQpe1xuICAgICAgICAgICAgICAgIHRoaXMucm9iVUkuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihpc29wZW5fc291bmQpe1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzdGFydCBmYXBhaV9hdWRpb0lEXCIrdGhpcy5mYXBhaV9hdWRpb0lEKSBcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuZmFwYWlfYXVkaW9JRClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgLy/pgJrnn6VnYW1lc2NlbmXoioLngrnvvIzlgJLorqHml7ZcbiAgICAgICAgICAgIHZhciBzZW5kZXZlbnQgPSB0aGlzLnJvYl9wbGF5ZXJfYWNjb3VudGlkXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmVtaXQoXCJjYW5yb2JfZXZlbnRcIixzZW5kZXZlbnQpXG5cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy/ljp/mnInpgLvovpEgIFxuICAgICAgICAvLyB2YXIgbW92ZV9ub2RlID0gdGhpcy5jYXJkc19ub2RzW3RoaXMuY3VyX2luZGV4X2NhcmRdXG4gICAgICAgIC8vIG1vdmVfbm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIC8vIHZhciBuZXd4ID0gbW92ZV9ub2RlLnggKyAodGhpcy5jYXJkX3dpZHRoICogMC40KnRoaXMuY3VyX2luZGV4X2NhcmQpIC0gKHRoaXMuY2FyZF93aWR0aCAqIDAuNClcbiAgICAgICAgLy8gdmFyIGFjdGlvbiA9IGNjLm1vdmVUbygwLjEsIGNjLnYyKG5ld3gsIC0yNTApKTtcbiAgICAgICAgLy8gbW92ZV9ub2RlLnJ1bkFjdGlvbihhY3Rpb24pXG4gICAgICAgIC8vIHRoaXMuY3VyX2luZGV4X2NhcmQtLVxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLl9ydW5hY3RpdmVfcHVzaGNhcmQuYmluZCh0aGlzKSwwLjMpXG5cbiAgICAgICAgXG4gICAgICAgIHZhciBtb3ZlX25vZGUgPSB0aGlzLmNhcmRzX25vZHNbdGhpcy5jYXJkc19ub2RzLmxlbmd0aC10aGlzLmN1cl9pbmRleF9jYXJkLTFdXG4gICAgICAgIG1vdmVfbm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIHRoaXMucHVzaF9jYXJkX3RtcC5wdXNoKG1vdmVfbm9kZSlcbiAgICAgICAgdGhpcy5mYXBhaV9hdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kL2ZhcGFpMS5tcDNcIikpXG4gICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5wdXNoX2NhcmRfdG1wLmxlbmd0aC0xO2krKyl7XG4gICAgICAgICAgICAgICAgdmFyIG1vdmVfbm9kZSA9IHRoaXMucHVzaF9jYXJkX3RtcFtpXVxuICAgICAgICAgICAgICAgIHZhciBuZXd4ID0gbW92ZV9ub2RlLnggLSAodGhpcy5jYXJkX3dpZHRoICogMC40KVxuICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBjYy5tb3ZlVG8oMC4xLCBjYy52MihuZXd4LCAtMjUwKSk7XG4gICAgICAgICAgICAgICAgbW92ZV9ub2RlLnJ1bkFjdGlvbihhY3Rpb24pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3VyX2luZGV4X2NhcmQtLVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLl9ydW5hY3RpdmVfcHVzaGNhcmQuYmluZCh0aGlzKSwwLjMpXG4gICAgfSxcbiBcbiAgICAvL+WvueeJjOaOkuW6j1xuICAgIHNvcnRDYXJkKCl7XG4gICAgICAgIHRoaXMuY2FyZHNfbm9kcy5zb3J0KGZ1bmN0aW9uKHgseSl7XG4gICAgICAgICAgICB2YXIgYSA9IHguZ2V0Q29tcG9uZW50KFwiY2FyZFwiKS5jYXJkX2RhdGE7XG4gICAgICAgICAgICB2YXIgYiA9IHkuZ2V0Q29tcG9uZW50KFwiY2FyZFwiKS5jYXJkX2RhdGE7XG5cbiAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmIGIuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIGIudmFsdWUtYS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KCdraW5nJykgJiYgIWIuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYS5oYXNPd25Qcm9wZXJ0eSgna2luZycpICYmIGIuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSAmJiBiLmhhc093blByb3BlcnR5KCdraW5nJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIGIua2luZy1hLmtpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vdmFyIHggPSB0aGlzLmNhcmRzX25vZHNbMF0ueDtcbiAgICAgICAgLy/ov5nph4zkvb/nlKjlm7rlrprlnZDmoIfvvIzlm6DkuLrlj5Z0aGlzLmNhcmRzX25vZHNbMF0ueGvlj6/og73mjpLluo/kuLrlrozmiJDvvIzlr7zoh7R46ZSZ6K+vXG4gICAgICAgIC8v5omA5Lul5YGaMTAwMOavq+enkueahOW7tuaXtlxuICAgICAgICB2YXIgdGltZW91dCA9IDEwMDBcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy92YXIgeCA9IC00MTcuNiBcbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy5jYXJkc19ub2RzWzBdLng7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvcnQgeDpcIisgeClcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJkc19ub2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhcmQgPSB0aGlzLmNhcmRzX25vZHNbaV07XG4gICAgICAgICAgICAgICAgY2FyZC56SW5kZXggPSBpOyAvL+iuvue9rueJjOeahOWPoOWKoOasoeW6jyx6aW5kZXjotorlpKfmmL7npLrlnKjkuIrpnaJcbiAgICAgICAgICAgICAgICBjYXJkLnggPSB4ICsgY2FyZC53aWR0aCAqIDAuNCAqIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSwgdGltZW91dCk7XG4gICAgICAgIFxuICAgICAgIFxuICAgIH0sXG5cbiAgXG4gICAgcHVzaENhcmQoZGF0YSl7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmIGIuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIudmFsdWUgLSBhLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eSgna2luZycpICYmICFiLmhhc093blByb3BlcnR5KCdraW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWEuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSAmJiBiLmhhc093blByb3BlcnR5KCdraW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KCdraW5nJykgJiYgYi5oYXNPd25Qcm9wZXJ0eSgna2luZycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmtpbmcgLSBhLmtpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIC8v5Yib5bu6Y2FyZOmihOWItuS9k1xuICAgICAgdGhpcy5jYXJkc19ub2RzID0gW11cbiAgICAgIGZvcih2YXIgaT0wO2k8MTc7aSsrKXtcbiAgICAgICAgXG4gICAgICAgIHZhciBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkX3ByZWZhYilcbiAgICAgICAgY2FyZC5zY2FsZT0wLjhcbiAgICAgICAgY2FyZC5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50XG4gICAgICAgIC8vY2FyZC54ID0gY2FyZC53aWR0aCAqIDAuNCAqICgxNyAtIDEpICogKC0wLjUpICsgY2FyZC53aWR0aCAqIDAuNCAqIDA7XG4gICAgICAgIGNhcmQueCA9IGNhcmQud2lkdGggKiAwLjQgKiAoLTAuNSkgKiAoLTE2KSArIGNhcmQud2lkdGggKiAwLjQgKiAwO1xuICAgICAgICAvL+i/memHjOWunueOsOS4uu+8jOavj+WPkeS4gOW8oOeJjO+8jOaUvuWcqOW3sue7j+WPkeeahOeJjOacgOWQju+8jOeEtuWQjuaVtOS9k+enu+WKqFxuICAgICAgICBjYXJkLnkgPSAtMjUwXG4gICAgICAgIGNhcmQuYWN0aXZlID0gZmFsc2VcblxuICAgICAgICBjYXJkLmdldENvbXBvbmVudChcImNhcmRcIikuc2hvd0NhcmRzKGRhdGFbaV0sbXlnbG9iYWwucGxheWVyRGF0YS5hY2NvdW50SUQpXG4gICAgICAgIC8v5a2Y5YKo54mM55qE5L+h5oGvLOeUqOS6juWQjumdouWPkeeJjOaViOaenFxuICAgICAgICB0aGlzLmNhcmRzX25vZHMucHVzaChjYXJkKVxuICAgICAgICB0aGlzLmNhcmRfd2lkdGggPSBjYXJkLndpZHRoXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8v5Yib5bu6M+W8oOW6leeJjFxuICAgICAgdGhpcy5ib3R0b21fY2FyZCA9IFtdXG4gICAgICBmb3IodmFyIGk9MDtpPDM7aSsrKXtcbiAgICAgICAgdmFyIGRpX2NhcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcmRfcHJlZmFiKVxuICAgICAgICBkaV9jYXJkLnNjYWxlPTAuNFxuICAgICAgICBkaV9jYXJkLnBvc2l0aW9uID0gdGhpcy5ib3R0b21fY2FyZF9wb3Nfbm9kZS5wb3NpdGlvbiBcbiAgICAgICAgLy/kuInlvKDniYzvvIzkuK3pl7TlnZDmoIflsLHmmK9ib3R0b21fY2FyZF9wb3Nfbm9kZeiKgueCueWdkOagh++8jFxuICAgICAgICAvLzAs5ZKMMuS4pOW8oOeJjOW3puWPs+enu+WKqHdpbmR0aCowLjRcbiAgICAgICAgaWYoaT09MCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRpX2NhcmQueCA9IGRpX2NhcmQueCAtIGRpX2NhcmQud2lkdGgqMC40XG4gICAgICAgIH1lbHNlIGlmKGk9PTIpe1xuICAgICAgICAgICAgZGlfY2FyZC54ID0gZGlfY2FyZC54ICsgZGlfY2FyZC53aWR0aCowLjRcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAvL2RpX2NhcmQueCA9IGRpX2NhcmQud2lkdGgtaSpkaV9jYXJkLndpZHRoLTIwXG4gICAgICAgIC8vZGlfY2FyZC55PTYwXG4gICAgICAgIGRpX2NhcmQucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudFxuICAgICAgICAvL+WtmOWCqOWcqOWuueWZqOmHjFxuICAgICAgICB0aGlzLmJvdHRvbV9jYXJkLnB1c2goZGlfY2FyZClcbiAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvL+e7meeOqeWutuWPkemAgeS4ieW8oOW6leeJjOWQju+8jOi/hzFzLOaKiueJjOiuvue9ruWIsHk9LTI1MOS9jee9ruaViOaenFxuICAgIHNjaGVkdWxlUHVzaFRocmVlQ2FyZCgpe1xuICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuY2FyZHNfbm9kcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIHZhciBjYXJkID0gdGhpcy5jYXJkc19ub2RzW2ldXG4gICAgICAgICAgICBpZihjYXJkLnk9PS0yMzApe1xuICAgICAgICAgICAgICAgIGNhcmQueSA9IC0yNTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/nu5nlnLDkuLvlj5HkuInlvKDmjpLvvIzlubbmmL7npLrlnKjljp/mnInniYznmoTlkI7pnaJcbiAgICBwdXNoVGhyZWVDYXJkKCl7XG4gICAgICAgIC8v5q+P5byg54mM55qE5YW25a6e5L2N572uIFxuICAgICAgICB2YXIgbGFzdF9jYXJkX3ggPSAgdGhpcy5jYXJkc19ub2RzW3RoaXMuY2FyZHNfbm9kcy5sZW5ndGgtMV0ueFxuICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuYm90dG9tX2NhcmRfZGF0YS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIHZhciBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkX3ByZWZhYilcbiAgICAgICAgICAgIGNhcmQuc2NhbGU9MC44XG4gICAgICAgICAgICBjYXJkLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnRcbiAgICAgICAgICBcbiAgICAgICAgICAgIGNhcmQueCA9IGxhc3RfY2FyZF94ICsgKChpKzEpKnRoaXMuY2FyZF93aWR0aCAqIDAuNClcbiAgICAgICAgICAgIGNhcmQueSA9IC0yMzAgIC8v5YWI5oqK5bqV55uY5pS+5ZyoLTIzMO+8jOWcqOiuvue9ruS4quWumuaXtuWZqOS4i+enu+WIsC0yNTDnmoTkvY3nva5cbiAgICAgICAgICAgXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicHVzaFRocmVlQ2FyZCB4OlwiK2NhcmQueClcbiAgICAgICAgICAgIGNhcmQuZ2V0Q29tcG9uZW50KFwiY2FyZFwiKS5zaG93Q2FyZHModGhpcy5ib3R0b21fY2FyZF9kYXRhW2ldLG15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKVxuICAgICAgICAgICAgY2FyZC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmNhcmRzX25vZHMucHVzaChjYXJkKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zb3J0Q2FyZCgpXG4gICAgICAgIC8v6K6+572u5LiA5Liq5a6a5pe25Zmo77yM5ZyoMnPlkI7vvIzkv67mlLl55Z2Q5qCH5Li6LTI1MFxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnNjaGVkdWxlUHVzaFRocmVlQ2FyZC5iaW5kKHRoaXMpLDIpXG5cbiAgICB9LFxuXG4gICAgZGVzdG9yeUNhcmQoYWNjb3VudGlkLGNob29zZV9jYXJkKXtcbiAgICAgICAgaWYoY2hvb3NlX2NhcmQubGVuZ3RoPT0wKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLyrlh7rniYzpgLvovpFcbiAgICAgICAgICAxLiDlsIbpgInkuK3nmoTniYwg5LuO54i26IqC54K55Lit56e76ZmkXG4gICAgICAgICAgMi4g5LuOdGhpcy5jYXJkc19ub2RzIOaVsOe7hOS4re+8jOWIoOmZpCDpgInkuK3nmoTniYwgXG4gICAgICAgICAgMy4g5bCGIOKAnOmAieS4reeahOeJjOKAnSDmt7vliqDliLDlh7rniYzljLrln59cbiAgICAgICAgICAgICAgMy4xIOa4heepuuWHuueJjOWMuuWfn1xuICAgICAgICAgICAgICAzLjIg5re75Yqg5a2Q6IqC54K5XG4gICAgICAgICAgICAgIDMuMyDorr7nva5zY2FsZVxuICAgICAgICAgICAgICAzLjQg6K6+572ucG9zaXRpb25cbiAgICAgICAgICA0LiAg6YeN5paw6K6+572u5omL5Lit55qE54mM55qE5L2N572uICB0aGlzLnVwZGF0ZUNhcmRzKCk7XG4gICAgICAgICovXG4gICAgICAgIC8vMS8y5q2l6aqk5Yig6Zmk6Ieq5bex5omL5LiK55qEY2FyZOiKgueCuSBcbiAgICAgICAgdmFyIGRlc3Ryb3lfY2FyZCA9IFtdXG4gICAgICAgIGZvcih2YXIgaT0wO2k8Y2hvb3NlX2NhcmQubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBmb3IodmFyIGo9MDtqPHRoaXMuY2FyZHNfbm9kcy5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgICAgICB2YXIgY2FyZF9pZCA9IHRoaXMuY2FyZHNfbm9kc1tqXS5nZXRDb21wb25lbnQoXCJjYXJkXCIpLmNhcmRfaWRcbiAgICAgICAgICAgICAgICBpZihjYXJkX2lkPT1jaG9vc2VfY2FyZFtpXS5jYXJkaWQpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlc3Ryb3kgY2FyZCBpZDpcIitjYXJkX2lkKVxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY2FyZHNfbm9kc1tqXS5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkc19ub2RzW2pdLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGRlc3Ryb3lfY2FyZC5wdXNoKHRoaXMuY2FyZHNfbm9kc1tqXSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkc19ub2RzLnNwbGljZShqLDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcHBlbmRDYXJkc1RvT3V0Wm9uZShhY2NvdW50aWQsZGVzdHJveV9jYXJkKVxuICAgICAgICB0aGlzLnVwZGF0ZUNhcmRzKClcblxuICAgIH0sXG5cbiAgICAvL+a4hemZpOaYvuekuuWHuueJjOiKgueCueWFqOmDqOWtkOiKgueCuSjlsLHmmK/miorlh7rniYznmoTmuIXnqbopXG4gICAgY2xlYXJPdXRab25lKGFjY291bnRpZCl7XG4gICAgICAgIHZhciBnYW1lU2NlbmVfc2NyaXB0ID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJnYW1lU2NlbmVcIilcbiAgICAgICAgdmFyIG91dENhcmRfbm9kZSA9IGdhbWVTY2VuZV9zY3JpcHQuZ2V0VXNlck91dENhcmRQb3NCeUFjY291bnQoYWNjb3VudGlkKVxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBvdXRDYXJkX25vZGUuY2hpbGRyZW47XG4gICAgICAgIGZvcih2YXIgaT0wO2k8Y2hpbGRyZW4ubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICB2YXIgY2FyZCA9IGNoaWxkcmVuW2ldOyBcbiAgICAgICAgICAgIGNhcmQuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgICAgb3V0Q2FyZF9ub2RlLnJlbW92ZUFsbENoaWxkcmVuKHRydWUpO1xuICAgIH0sXG4gICAgLy/lr7nlh7rnmoTniYzlgZrmjpLluo9cbiAgICBwdXNoQ2FyZFNvcnQoY2FyZHMpe1xuICAgICAgICBpZihjYXJkcy5sZW5ndGg9PTEpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY2FyZHMuc29ydChmdW5jdGlvbih4LHkpe1xuICAgICAgICAgICAgdmFyIGEgPSB4LmdldENvbXBvbmVudChcImNhcmRcIikuY2FyZF9kYXRhO1xuICAgICAgICAgICAgdmFyIGIgPSB5LmdldENvbXBvbmVudChcImNhcmRcIikuY2FyZF9kYXRhO1xuXG4gICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiBiLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIudmFsdWUgLSBhLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSAmJiAhYi5oYXNPd25Qcm9wZXJ0eSgna2luZycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhLmhhc093blByb3BlcnR5KCdraW5nJykgJiYgYi5oYXNPd25Qcm9wZXJ0eSgna2luZycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eSgna2luZycpICYmIGIuaGFzT3duUHJvcGVydHkoJ2tpbmcnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiLmtpbmcgLSBhLmtpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIGFwcGVuZE90aGVyQ2FyZHNUb091dFpvbmUob3V0Q2FyZF9ub2RlLGNhcmRzLHlvZmZzZXQpe1xuICAgICAgIG91dENhcmRfbm9kZS5yZW1vdmVBbGxDaGlsZHJlbih0cnVlKTtcblxuICAgICAgIC8vY29uc29sZS5sb2coXCJhcHBlbmRPdGhlckNhcmRzVG9PdXRab25lIGxlbmd0aFwiK2NhcmRzLmxlbmd0aClcbiAgICAgICAvL+a3u+WKoOaWsOeahOWtkOiKgueCuVxuICAgICAgIGZvcih2YXIgaT0wO2k8Y2FyZHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgIHZhciBjYXJkID0gY2FyZHNbaV07IFxuICAgICAgICAgICBvdXRDYXJkX25vZGUuYWRkQ2hpbGQoY2FyZCwxMDAraSkgLy/nrKzkuozkuKrlj4LmlbDmmK96b3JkZXIs5L+d6K+B54mM5LiN6IO96KKr6YGu5L2PXG4gICAgICAgfVxuXG4gICAgICAgLy/lr7nlh7rniYzov5vooYzmjpLluo9cbiAgICAgICAvL+iuvue9ruWHuueJjOiKgueCueeahOWdkOagh1xuICAgICAgIHZhciB6UG9pbnQgPSBjYXJkcy5sZW5ndGggLyAyO1xuICAgICAgIC8vY29uc29sZS5sb2coXCJhcHBlbmRPdGhlckNhcmRzVG9PdXRab25lIHplcm9Qb2ludDpcIit6UG9pbnQpXG4gICAgICAgZm9yKHZhciBpPTA7aTxjYXJkcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgdmFyIGNhcmROb2RlID0gb3V0Q2FyZF9ub2RlLmdldENoaWxkcmVuKClbaV1cbiAgICAgICAgdmFyIHggPSAoaSAtIHpQb2ludCkgKiAzMDtcbiAgICAgICAgdmFyIHkgPSBjYXJkTm9kZS55K3lvZmZzZXQ7IC8v5Zug5Li65q+P5Liq6IqC54K56ZyA6KaB55qEWeS4jeS4gOagt++8jOWBmuWPguaVsOS8oOWFpVxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiLS0tLS1jYXJkTm9kZTogeDpcIit4K1wiIHk6XCIreSlcbiAgICAgICAgY2FyZE5vZGUuc2V0U2NhbGUoMC41LCAwLjUpOyAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgY2FyZE5vZGUuc2V0UG9zaXRpb24oeCx5KTsgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgIH1cbiAgICB9LFxuICAgIC8v5bCGIOKAnOmAieS4reeahOeJjOKAnSDmt7vliqDliLDlh7rniYzljLrln59cbiAgICAvL2Rlc3Ryb3lfY2FyZOaYr+eOqeWutuacrOasoeWHuueahOeJjFxuICAgIGFwcGVuZENhcmRzVG9PdXRab25lKGFjY291bnRpZCxkZXN0cm95X2NhcmQpe1xuICAgICAgICBpZihkZXN0cm95X2NhcmQubGVuZ3RoPT0wKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8v5YWI57uZ5pys5qyh5Ye655qE54mM5YGa5LiA5Liq5o6S5bqPXG4gICAgICAgdGhpcy5wdXNoQ2FyZFNvcnQoZGVzdHJveV9jYXJkKVxuICAgICAgIC8vY29uc29sZS5sb2coXCJhcHBlbmRDYXJkc1RvT3V0Wm9uZVwiKVxuICAgICAgIHZhciBnYW1lU2NlbmVfc2NyaXB0ID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJnYW1lU2NlbmVcIilcbiAgICAgICAvL+iOt+WPluWHuueJjOWMuuWfn+iKgueCuVxuICAgICAgIHZhciBvdXRDYXJkX25vZGUgPSBnYW1lU2NlbmVfc2NyaXB0LmdldFVzZXJPdXRDYXJkUG9zQnlBY2NvdW50KGFjY291bnRpZClcbiAgICAgICB0aGlzLmFwcGVuZE90aGVyQ2FyZHNUb091dFpvbmUob3V0Q2FyZF9ub2RlLGRlc3Ryb3lfY2FyZCwzNjApXG4gICAgICAgLy9zY29uc29sZS5sb2coXCJPdXRab25lOlwiK291dENhcmRfbm9kZS5uYW1lKVxuXG4gICAgfSxcblxuICAgIC8v6YeN5paw5o6S5bqP5omL5LiK55qE54mMLOW5tuenu+WKqFxuICAgIHVwZGF0ZUNhcmRzKCl7XG4gICAgXG4gICAgICAgIHZhciB6ZXJvUG9pbnQgPSB0aGlzLmNhcmRzX25vZHMubGVuZ3RoIC8gMjtcbiAgICAgICAgLy92YXIgbGFzdF9jYXJkX3ggPSB0aGlzLmNhcmRzX25vZHNbdGhpcy5jYXJkc19ub2RzLmxlbmd0aC0xXS54XG4gICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5jYXJkc19ub2RzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgdmFyIGNhcmROb2RlID0gdGhpcy5jYXJkc19ub2RzW2ldXG4gICAgICAgICAgICB2YXIgeCA9IChpIC0gemVyb1BvaW50KSoodGhpcy5jYXJkX3dpZHRoICogMC40KTtcbiAgICAgICAgICAgIGNhcmROb2RlLnNldFBvc2l0aW9uKHgsIC0yNTApOyAgXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgXG4gICAgcGxheVB1c2hDYXJkU291bmQoY2FyZF9uYW1lKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGF5UHVzaENhcmRTb3VuZDpcIitjYXJkX25hbWUpXG4gICAgICAgIFxuICAgICAgICBpZihjYXJkX25hbWU9PVwiXCIpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2goY2FyZF9uYW1lKXtcbiAgICAgICAgICAgIGNhc2UgQ2FyZHNWYWx1ZS5vbmUubmFtZTpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBDYXJkc1ZhbHVlLmRvdWJsZS5uYW1lOlxuICAgICAgICAgICAgICAgICAgICBpZihpc29wZW5fc291bmQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kL2R1aXppLm1wM1wiKSkgXG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWsgIFxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50LGN1c3RvbURhdGEpe1xuICAgICAgICBzd2l0Y2goY3VzdG9tRGF0YSl7XG4gICAgICAgICAgICBjYXNlIFwiYnRuX3FpYW5kelwiOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnRuX3FpYW5kelwiKVxuICAgICAgICAgICAgICAgIG15Z2xvYmFsLnNvY2tldC5yZXF1ZXN0Um9iU3RhdGUocWlhbl9zdGF0ZS5xaWFuKVxuICAgICAgICAgICAgICAgIHRoaXMucm9iVUkuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICBpZihpc29wZW5fc291bmQpe1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvc291bmQvd29tYW5famlhb19kaV96aHUub2dnXCIpKSBcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwiYnRuX2J1cWlhbmR6XCI6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJidG5fYnVxaWFuZHpcIilcbiAgICAgICAgICAgICAgICBteWdsb2JhbC5zb2NrZXQucmVxdWVzdFJvYlN0YXRlKHFpYW5fc3RhdGUuYnVxaWFuZylcbiAgICAgICAgICAgICAgICB0aGlzLnJvYlVJLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgaWYoaXNvcGVuX3NvdW5kKXtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kL3dvbWFuX2J1X2ppYW8ub2dnXCIpKSBcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBicmVhayAgICBcbiAgICAgICAgICAgICBjYXNlIFwibm9wdXNoY2FyZFwiOiAgLy/kuI3lh7rniYxcbiAgICAgICAgICAgICAgICAgbXlnbG9iYWwuc29ja2V0LnJlcXVlc3RfYnVjaHVfY2FyZChbXSxudWxsKVxuICAgICAgICAgICAgICAgICB0aGlzLnBsYXlpbmdVSV9ub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgY2FzZSBcInB1c2hjYXJkXCI6ICAgLy/lh7rniYxcbiAgICAgICAgICAgICAgICAgLy/lhYjojrflj5bmnKzmrKHlh7rniYzmlbDmja5cbiAgICAgICAgICAgICAgICAgaWYodGhpcy5jaG9vc2VfY2FyZF9kYXRhLmxlbmd0aD09MCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlwc0xhYmVsLnN0cmluZz1cIuivt+mAieaLqeeJjCFcIlxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpcHNMYWJlbC5zdHJpbmc9XCJcIlxuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksIDIwMDApO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIG15Z2xvYmFsLnNvY2tldC5yZXF1ZXN0X2NodV9jYXJkKHRoaXMuY2hvb3NlX2NhcmRfZGF0YSxmdW5jdGlvbihlcnIsZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcXVlc3RfY2h1X2NhcmQ6XCIrZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0X2NodV9jYXJkXCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnRpcHNMYWJlbC5zdHJpbmc9PVwiXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlwc0xhYmVsLnN0cmluZyA9IGRhdGEubXNnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpcHNMYWJlbC5zdHJpbmc9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5Ye654mM5aSx6LSl77yM5oqK6YCJ5oup55qE54mM5b2S5L2NXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuY2FyZHNfbm9kcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZCA9IHRoaXMuY2FyZHNfbm9kc1tpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuZW1pdChcInJlc2V0X2NhcmRfZmxhZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VfY2FyZF9kYXRhID0gW11cbiAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Ye654mM5oiQ5YqfXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwX2NodV9jYXJkIGRhdGE6XCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5aW5nVUlfbm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pKt5pS+5Ye654mM55qE5aOw6Z+zXG4gICAgICAgICAgICAgICAgICAgICAgICAgLy9yZXNwX2NodV9jYXJkIGRhdGE6e1wiYWNjb3VudFwiOlwiMjUxOTkwMVwiLFwibXNnXCI6XCJzdWNlc3NcIixcImNhcmR2YWx1ZVwiOntcIm5hbWVcIjpcIkRvdWJsZVwiLFwidmFsdWVcIjoxfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAvL3tcInR5cGVcIjpcIm90aGVyX2NodWNhcmRfbm90aWZ5XCIsXCJyZXN1bHRcIjowLFwiZGF0YVwiOntcImFjY291bnRpZFwiOlwiMjUxOTkwMVwiLFwiY2FyZHNcIjpbe1wiY2FyZGlkXCI6MjQsXCJjYXJkX2RhdGFcIjp7XCJpbmRleFwiOjI0LFwidmFsdWVcIjo2LFwic2hhcGVcIjoxfX0se1wiY2FyZGlkXCI6MjYsXCJjYXJkX2RhdGFcIjp7XCJpbmRleFwiOjI2LFwidmFsdWVcIjo2LFwic2hhcGVcIjozfX1dfSxcImNhbGxCYWNrSW5kZXhcIjowfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVB1c2hDYXJkU291bmQoZGF0YS5jYXJkdmFsdWUubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3RvcnlDYXJkKGRhdGEuYWNjb3VudCx0aGlzLmNob29zZV9jYXJkX2RhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VfY2FyZF9kYXRhID0gW11cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgICAvL3RoaXMucGxheWluZ1VJX25vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICBjYXNlIFwidGlwY2FyZFwiOlxuICAgICAgICAgICAgICAgICBicmVhayAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuXG5cbn0pO1xuIl19