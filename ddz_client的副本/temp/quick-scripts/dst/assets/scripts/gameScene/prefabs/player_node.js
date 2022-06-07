
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
        this.qiangdidzhu_node.active = false;
      }

      if (this.accountid == detail.accountid) {
        if (detail.state == qian_state.qian) {
          console.log("this.robIcon_Sp.active = true");
          this.robIcon_Sp.active = true;
        } else if (detail.state == qian_state.buqiang) {
          this.robnoIcon_Sp.active = true;
        } else {
          console.log("get rob value :" + detail.state);
        }
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
  //这里初始化房间内位置节点信息(自己和其他玩家)
  //data玩家节点数据
  //index玩家在房间的位置索引
  init_data: function init_data(data, index) {
    console.log("init_data:" + JSON.stringify(data)); //data:{"accountid":"2117836","nick_name":"tiny543","avatarUrl":"http://xxx","goldcount":1000}

    this.accountid = data.accountid;
    this.account_label.string = data.accountid;
    this.nickname_label.string = data.nick_name;
    this.globalcount_label.string = data.goldcount;
    this.cardlist_node = [];
    this.seat_index = index;

    if (data.isready == true) {
      this.readyimage.active = true;
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

      if (detail == this.accountid) {
        this.qiangdidzhu_node.active = true; //this.tips_label.string ="正在抢地主" 

        this.time_label.string = "10"; //开启一个定时器
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVTY2VuZS9wcmVmYWJzL3BsYXllcl9ub2RlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYWNjb3VudF9sYWJlbCIsIkxhYmVsIiwibmlja25hbWVfbGFiZWwiLCJyb29tX3RvdXhpYW5nIiwiU3ByaXRlIiwiZ2xvYmFsY291bnRfbGFiZWwiLCJoZWFkaW1hZ2UiLCJyZWFkeWltYWdlIiwiTm9kZSIsIm9mZmxpbmVpbWFnZSIsImNhcmRfbm9kZSIsImNhcmRfcHJlZmFiIiwiUHJlZmFiIiwiY2xvY2tpbWFnZSIsInFpYW5nZGlkemh1X25vZGUiLCJ0aW1lX2xhYmVsIiwicm9iaW1hZ2Vfc3AiLCJTcHJpdGVGcmFtZSIsInJvYm5vaW1hZ2Vfc3AiLCJyb2JJY29uU3AiLCJyb2JJY29uX1NwIiwicm9ibm9JY29uX1NwIiwibWFzdGVySWNvbiIsIm9uTG9hZCIsImFjdGl2ZSIsIm5vZGUiLCJvbiIsImV2ZW50IiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJhY2NvdW50aWQiLCJteWdsb2JhbCIsInBsYXllckRhdGEiLCJhY2NvdW50SUQiLCJwdXNoQ2FyZCIsImRldGFpbCIsInN0YXRlIiwicWlhbl9zdGF0ZSIsInFpYW4iLCJidXFpYW5nIiwic3RhcnQiLCJpbml0X2RhdGEiLCJkYXRhIiwiaW5kZXgiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RyaW5nIiwibmlja19uYW1lIiwiZ29sZGNvdW50IiwiY2FyZGxpc3Rfbm9kZSIsInNlYXRfaW5kZXgiLCJpc3JlYWR5Iiwic3RyIiwiYXZhdGFyVXJsIiwiaGVhZF9pbWFnZV9wYXRoIiwibG9hZGVyIiwibG9hZFJlcyIsImVyciIsInNwcml0ZUZyYW1lIiwibWVzc2FnZSIsIngiLCJpIiwiY2FyZCIsImluc3RhbnRpYXRlIiwic2NhbGUiLCJwYXJlbnQiLCJuYW1lIiwiaGVpZ2h0IiwieSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7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c0JBLE1BQXRCLENBQTZCQyxJQUExRTtBQUNBSixNQUFBQSxJQUFJLENBQUNHLE1BQUwsR0FBYyxLQUFLeEQsU0FBbkIsQ0FKaUIsQ0FLakI7O0FBQ0EsVUFBSTBELE1BQU0sR0FBR0wsSUFBSSxDQUFDSyxNQUFsQjtBQUNBTCxNQUFBQSxJQUFJLENBQUNNLENBQUwsR0FBUyxDQUFDLEtBQUssQ0FBTixJQUFXLEdBQVgsR0FBaUJELE1BQWpCLEdBQTBCLEdBQTFCLEdBQWdDLEdBQWhDLEdBQXNDQSxNQUFNLEdBQUcsR0FBVCxHQUFlLEdBQWYsR0FBcUJOLENBQXBFO0FBQ0FDLE1BQUFBLElBQUksQ0FBQ0YsQ0FBTCxHQUFTLENBQVQsQ0FSaUIsQ0FVakI7O0FBQ0EsV0FBS1gsYUFBTCxDQUFtQm9CLElBQW5CLENBQXdCUCxJQUF4QjtBQUNIO0FBQ0o7QUFuTEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15Z2xvYmFsIGZyb20gXCIuLi8uLi9teWdvbGJhbC5qc1wiXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGFjY291bnRfbGFiZWw6Y2MuTGFiZWwsXG4gICAgICAgIG5pY2tuYW1lX2xhYmVsOmNjLkxhYmVsLFxuICAgICAgICByb29tX3RvdXhpYW5nOmNjLlNwcml0ZSxcbiAgICAgICAgZ2xvYmFsY291bnRfbGFiZWw6Y2MuTGFiZWwsXG4gICAgICAgIGhlYWRpbWFnZTpjYy5TcHJpdGUsXG4gICAgICAgIHJlYWR5aW1hZ2U6Y2MuTm9kZSxcbiAgICAgICAgb2ZmbGluZWltYWdlOmNjLk5vZGUsXG4gICAgICAgIGNhcmRfbm9kZTpjYy5Ob2RlLFxuICAgICAgICBjYXJkX3ByZWZhYjpjYy5QcmVmYWIsXG4gICAgICAgIC8vdGlwc19sYWJlbDpjYy5MYWJlbCxcbiAgICAgICAgY2xvY2tpbWFnZTpjYy5Ob2RlLFxuICAgICAgICBxaWFuZ2RpZHpodV9ub2RlOmNjLk5vZGUsIC8v5oqi5Zyw5Li755qE54i26IqC54K5XG4gICAgICAgIHRpbWVfbGFiZWw6Y2MuTGFiZWwsXG4gICAgICAgIHJvYmltYWdlX3NwOmNjLlNwcml0ZUZyYW1lLFxuICAgICAgICByb2Jub2ltYWdlX3NwOmNjLlNwcml0ZUZyYW1lLFxuICAgICAgICByb2JJY29uU3A6IGNjLlNwcml0ZSxcbiAgICAgICAgcm9iSWNvbl9TcDpjYy5Ob2RlLFxuICAgICAgICByb2Jub0ljb25fU3A6Y2MuTm9kZSxcbiAgICAgICAgbWFzdGVySWNvbjpjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICB0aGlzLnJlYWR5aW1hZ2UuYWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMub2ZmbGluZWltYWdlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICBcbiAgICAgIC8v55uR5ZCs5byA5aeL5ri45oiP5LqL5Lu2KOWuouaIt+err+WPkee7meWuouaIt+errylcbiAgICAgIHRoaXMubm9kZS5vbihcImdhbWVzdGFydF9ldmVudFwiLGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgdGhpcy5yZWFkeWltYWdlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgIC8v57uZ5YW25LuW546p5a625Y+R54mM5LqL5Lu2XG4gICAgICB0aGlzLm5vZGUub24oXCJwdXNoX2NhcmRfZXZlbnRcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gcHVzaF9jYXJkX2V2ZW50XCIpXG4gICAgICAgIC8v6Ieq5bex5LiN5YaN5Y+R54mMXG4gICAgICAgIGlmKHRoaXMuYWNjb3VudGlkPT1teWdsb2JhbC5wbGF5ZXJEYXRhLmFjY291bnRJRCl7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnB1c2hDYXJkKClcbiAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgdGhpcy5ub2RlLm9uKFwicGxheWVybm9kZV9yb2Jfc3RhdGVfZXZlbnRcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgLy97XCJhY2NvdW50aWRcIjpcIjIxNjI4NjZcIixcInN0YXRlXCI6MX1cbiAgICAgICAgICB2YXIgZGV0YWlsID0gZXZlbnRcbiAgICAgIFxuICAgICAgICAgIC8v5aaC5p6c5piv6Ieq5bex5Zyo5oqi77yM6ZyA6KaB6ZqQ6JePcWlhbmdkaWR6aHVfbm9kZeiKgueCuVxuICAgICAgICAgIC8vdGhpcy5hY2NvdW50aWTooajnpLrov5nkuKroioLngrnmjILmjqXnmoRhY2NvdW50aWRcbiAgICAgICAgICBpZihkZXRhaWwuYWNjb3VudGlkPT10aGlzLmFjY291bnRpZCl7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGV0YWlsLmFjY291bnRpZFwiK2RldGFpbC5hY2NvdW50aWQpXG4gICAgICAgICAgICB0aGlzLnFpYW5nZGlkemh1X25vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYodGhpcy5hY2NvdW50aWQgPT0gZGV0YWlsLmFjY291bnRpZCl7XG4gICAgICAgICAgICBpZihkZXRhaWwuc3RhdGU9PXFpYW5fc3RhdGUucWlhbil7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5yb2JJY29uX1NwLmFjdGl2ZSA9IHRydWVcIilcbiAgICAgICAgICAgICAgdGhpcy5yb2JJY29uX1NwLmFjdGl2ZSA9IHRydWVcblxuICAgICAgICAgICAgfWVsc2UgaWYoZGV0YWlsLnN0YXRlPT1xaWFuX3N0YXRlLmJ1cWlhbmcpe1xuICAgICAgICAgICAgICB0aGlzLnJvYm5vSWNvbl9TcC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXQgcm9iIHZhbHVlIDpcIitkZXRhaWwuc3RhdGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgIHRoaXMubm9kZS5vbihcInBsYXllcm5vZGVfY2hhbmdlbWFzdGVyX2V2ZW50XCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgdmFyIGRldGFpbCA9IGV2ZW50IFxuICAgICAgICAgdGhpcy5yb2JJY29uX1NwLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICB0aGlzLnJvYm5vSWNvbl9TcC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgaWYoZGV0YWlsPT10aGlzLmFjY291bnRpZCl7XG4gICAgICAgICAgICB0aGlzLm1hc3Rlckljb24uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgICAgLy8gdGhpcy5ub2RlLm9uKFwicGxheWVybm9kZV9hZGRfdGhyZWVfY2FyZFwiLGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIC8vICAgdmFyIGRldGFpbCA9IGV2ZW50IC8v5Zyw5Li755qEYWNjb3VudGlkXG4gICAgICAvLyAgIGlmKGRldGFpbD09dGhpcy5hY2NvdW50aWQpe1xuICAgICAgLy8gICAgIC8v57uZ5Zyw5Li75Y+R5LiJ5byg5o6SXG5cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfS5iaW5kKHRoaXMpKVxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICAvL+i/memHjOWIneWni+WMluaIv+mXtOWGheS9jee9ruiKgueCueS/oeaBryjoh6rlt7Hlkozlhbbku5bnjqnlrrYpXG4gICAgLy9kYXRh546p5a626IqC54K55pWw5o2uXG4gICAgLy9pbmRleOeOqeWutuWcqOaIv+mXtOeahOS9jee9rue0ouW8lVxuICAgIGluaXRfZGF0YShkYXRhLGluZGV4KXtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5pdF9kYXRhOlwiK0pTT04uc3RyaW5naWZ5KGRhdGEpKSAgXG4gICAgICAvL2RhdGE6e1wiYWNjb3VudGlkXCI6XCIyMTE3ODM2XCIsXCJuaWNrX25hbWVcIjpcInRpbnk1NDNcIixcImF2YXRhclVybFwiOlwiaHR0cDovL3h4eFwiLFwiZ29sZGNvdW50XCI6MTAwMH1cbiAgICAgIHRoaXMuYWNjb3VudGlkID0gZGF0YS5hY2NvdW50aWRcbiAgICAgIHRoaXMuYWNjb3VudF9sYWJlbC5zdHJpbmcgPSBkYXRhLmFjY291bnRpZFxuICAgICAgdGhpcy5uaWNrbmFtZV9sYWJlbC5zdHJpbmcgPSBkYXRhLm5pY2tfbmFtZVxuICAgICAgdGhpcy5nbG9iYWxjb3VudF9sYWJlbC5zdHJpbmcgPSBkYXRhLmdvbGRjb3VudFxuICAgICAgdGhpcy5jYXJkbGlzdF9ub2RlID0gW11cbiAgICAgIHRoaXMuc2VhdF9pbmRleCA9IGluZGV4XG4gICAgICBpZihkYXRhLmlzcmVhZHk9PXRydWUpe1xuICAgICAgICB0aGlzLnJlYWR5aW1hZ2UuYWN0aXZlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICAvL+e9kee7nOWbvueJh+WKoOi9vVxuICAgIC8vICAgICBjYy5sb2FkZXIubG9hZCh7dXJsOiBkYXRhLmF2YXRhclVybCwgdHlwZTogJ2pwZyd9LCAgKGVyciwgdGV4KT0+IHtcbiAgICAvLyAgICAgLy9jYy5sb2coJ1Nob3VsZCBsb2FkIGEgdGV4dHVyZSBmcm9tIFJFU1RmdWwgQVBJIGJ5IHNwZWNpZnkgdGhlIHR5cGU6ICcgKyAodGV4IGluc3RhbmNlb2YgY2MuVGV4dHVyZTJEKSk7XG4gICAgLy8gICAgIGxldCBvbGRXaWR0aCA9IHRoaXMuaGVhZEltYWdlLm5vZGUud2lkdGg7XG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coJ29sZCB3aXRoZCcgKyBvbGRXaWR0aCk7XG4gICAgLy8gICAgIHRoaXMucm9vbV90b3V4aWFuZy5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXgpO1xuICAgIC8vICAgICBsZXQgbmV3V2lkdGggPSB0aGlzLmhlYWRJbWFnZS5ub2RlLndpZHRoO1xuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKCdvbGQgd2l0aGQnICsgbmV3V2lkdGgpO1xuICAgIC8vICAgICB0aGlzLmhlYWRJbWFnZS5ub2RlLnNjYWxlID0gb2xkV2lkdGggLyBuZXdXaWR0aDtcbiAgICAvLyB9KTtcbiAgICAvL+i/memHjOagueaNruS8oOWFpeeahGF2YXJ0ZXLmnaXojrflj5bmnKzlnLDlm77lg49cbiAgICB2YXIgc3RyID0gZGF0YS5hdmF0YXJVcmxcbiAgICAvL2NvbnNvbGUubG9nKHN0cilcbiAgICB2YXIgaGVhZF9pbWFnZV9wYXRoID0gXCJVSS9oZWFkaW1hZ2UvXCIgKyBzdHJcbiAgICBjYy5sb2FkZXIubG9hZFJlcyhoZWFkX2ltYWdlX3BhdGgsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLHNwcml0ZUZyYW1lKcKge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9wqAgwqAgwqAgwqAgwqAgXG4gICAgICAgICB0aGlzLmhlYWRpbWFnZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO8KgIMKgIMKgIMKgIFxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgLy/ms6jlhozkuIDkuKpwbGF5ZXJfcmVhZHnmtojmga9cbiAgICB0aGlzLm5vZGUub24oXCJwbGF5ZXJfcmVhZHlfbm90aWZ5XCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllcl9yZWFkeV9ub3RpZnkgZXZlbnRcIixldmVudClcbiAgICAgICAgICAgIHZhciBkZXRhaWwgPSBldmVudFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS1wbGF5ZXJfcmVhZHlfbm90aWZ5IGRldGFpbDpcIitkZXRhaWwpXG4gICAgICAgICAgICBpZihkZXRhaWw9PXRoaXMuYWNjb3VudGlkKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5aW1hZ2UuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICAgICAgLy/nm5HlkKzlhoXpg6jpmo/lj6/ku6XmiqLlnLDkuLvmtojmga8s6L+Z5Liq5raI5oGv5Lya5Y+R57uZ5q+P5LiqcGxheWVybm9kZeiKgueCuVxuICAgICAgICB0aGlzLm5vZGUub24oXCJwbGF5ZXJub2RlX2NhbnJvYl9ldmVudFwiLGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIHZhciBkZXRhaWwgPSBldmVudFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS1wbGF5ZXJub2RlX2NhbnJvYl9ldmVudCBkZXRhaWw6XCIrZGV0YWlsKVxuICAgICAgICAgICAgaWYoZGV0YWlsPT10aGlzLmFjY291bnRpZCl7XG4gICAgICAgICAgICAgIHRoaXMucWlhbmdkaWR6aHVfbm9kZS5hY3RpdmU9dHJ1ZVxuICAgICAgICAgICAgICAvL3RoaXMudGlwc19sYWJlbC5zdHJpbmcgPVwi5q2j5Zyo5oqi5Zyw5Li7XCIgXG4gICAgICAgICAgICAgIHRoaXMudGltZV9sYWJlbC5zdHJpbmc9XCIxMFwiXG4gICAgICAgICAgICAgIC8v5byA5ZCv5LiA5Liq5a6a5pe25ZmoXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAvLz9cbiAgICAgICAgaWYoaW5kZXg9PTEpe1xuICAgICAgICAgIHRoaXMuY2FyZF9ub2RlLnggPSAtdGhpcy5jYXJkX25vZGUueCAtIDMwXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG4gICAgcHVzaENhcmQoKXtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FyZF9ub2RlLmFjdGl2ZSA9IHRydWUgXG4gICAgICAgIGZvcih2YXIgaT0wO2k8MTc7aSsrKXtcbiAgICAgICAgICAgIHZhciBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkX3ByZWZhYilcbiAgICAgICAgICAgIGNhcmQuc2NhbGU9MC42XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiB0aGlzLmNhcmRfbm9kZS5wYXJlbnQucGFyZW50XCIrIHRoaXMuY2FyZF9ub2RlLnBhcmVudC5wYXJlbnQubmFtZSlcbiAgICAgICAgICAgIGNhcmQucGFyZW50ID0gdGhpcy5jYXJkX25vZGVcbiAgICAgICAgICAgIC8vY2FyZC5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBjYXJkLmhlaWdodFxuICAgICAgICAgICAgY2FyZC55ID0gKDE3IC0gMSkgKiAwLjUgKiBoZWlnaHQgKiAwLjQgKiAwLjMgLSBoZWlnaHQgKiAwLjQgKiAwLjMgKiBpO1xuICAgICAgICAgICAgY2FyZC54ID0gMFxuICAgICAgICAgICBcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYWxsIHB1c2hDYXJkIHg6XCIrY2FyZC54K1wiIHk6XCIrY2FyZC55KVxuICAgICAgICAgICAgdGhpcy5jYXJkbGlzdF9ub2RlLnB1c2goY2FyZClcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==