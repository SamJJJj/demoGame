
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
        var gameScene_node = this.node.parent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVTY2VuZS9wcmVmYWJzL2NhcmQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjYXJkc19zcHJpdGVfYXRsYXMiLCJTcHJpdGVBdGxhcyIsIm9uTG9hZCIsImZsYWciLCJvZmZzZXRfeSIsIm5vZGUiLCJvbiIsImV2ZW50IiwieSIsImJpbmQiLCJydW5Ub0NlbnRlciIsInN0YXJ0IiwiaW5pdF9kYXRhIiwiZGF0YSIsInNldFRvdWNoRXZlbnQiLCJhY2NvdW50aWQiLCJteWdsb2JhbCIsInBsYXllckRhdGEiLCJhY2NvdW50SUQiLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJnYW1lU2NlbmVfbm9kZSIsInBhcmVudCIsInJvb21fc3RhdGUiLCJnZXRDb21wb25lbnQiLCJyb29tc3RhdGUiLCJSb29tU3RhdGUiLCJST09NX1BMQVlJTkciLCJjb25zb2xlIiwibG9nIiwiY2FyZF9pZCIsImNhcmRkYXRhIiwiY2FyZF9kYXRhIiwiZW1pdCIsInNob3dDYXJkcyIsImNhcmQiLCJpbmRleCIsIkNhcmRWYWx1ZSIsImNhcmRTaHBhZSIsIktpbmdzIiwic3ByaXRlS2V5Iiwic2hhcGUiLCJ2YWx1ZSIsImtpbmciLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImdldFNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNYQyxJQUFBQSxrQkFBa0IsRUFBRUosRUFBRSxDQUFDSztBQURaLEdBSFA7QUFRTEMsRUFBQUEsTUFSSyxvQkFRSztBQUNOLFNBQUtDLElBQUwsR0FBWSxLQUFaO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUVBLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLGlC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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBTUMsU0FBUyxHQUFHO0FBQ2QsV0FBSyxDQURTO0FBRWQsV0FBSyxDQUZTO0FBR2QsV0FBSyxDQUhTO0FBSWQsV0FBSztBQUpTLEtBQWxCO0FBTUEsUUFBTUMsS0FBSyxHQUFHO0FBQ1YsWUFBTSxFQURJO0FBRVYsWUFBTTtBQUZJLEtBQWQ7QUFLQSxRQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsUUFBSUwsSUFBSSxDQUFDTSxLQUFULEVBQWU7QUFDWEQsTUFBQUEsU0FBUyxHQUFHLFdBQVdGLFNBQVMsQ0FBQ0gsSUFBSSxDQUFDTSxLQUFOLENBQVQsR0FBd0IsRUFBeEIsR0FBNkJKLFNBQVMsQ0FBQ0YsSUFBSSxDQUFDTyxLQUFOLENBQWpELENBQVo7QUFFSCxLQUhELE1BR007QUFDRkYsTUFBQUEsU0FBUyxHQUFHLFVBQVVELEtBQUssQ0FBQ0osSUFBSSxDQUFDUSxJQUFOLENBQTNCO0FBQ0gsS0F4RW9CLENBMEV0Qjs7O0FBQ0MsU0FBS3ZDLElBQUwsQ0FBVW9CLFlBQVYsQ0FBdUI3QixFQUFFLENBQUNpRCxNQUExQixFQUFrQ0MsV0FBbEMsR0FBZ0QsS0FBSzlDLGtCQUFMLENBQXdCK0MsY0FBeEIsQ0FBdUNOLFNBQXZDLENBQWhEO0FBQ0EsU0FBSzNCLGFBQUw7QUFDSDtBQWxKSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlnbG9iYWwgZnJvbSBcIi4uLy4uL215Z29sYmFsLmpzXCJcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgY2FyZHNfc3ByaXRlX2F0bGFzOiBjYy5TcHJpdGVBdGxhcyxcbiAgICAgXG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuZmxhZyA9IGZhbHNlXG4gICAgICAgIHRoaXMub2Zmc2V0X3kgPSAyMFxuICAgICAgICBcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwicmVzZXRfY2FyZF9mbGFnXCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgaWYodGhpcyxmbGFnPT10cnVlKXtcbiAgICAgICAgICAgICAgICB0aGlzLGZsYWcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMub2Zmc2V0X3lcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihcImNodV9jYXJkX3N1Y2NcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgIC8vICAgIHZhciBjaHVfY2FyZF9saXN0ID0gZXZlbnRcbiAgICAgICAgLy8gICAgZm9yKHZhciBpPTA7aTxjaHVfY2FyZF9saXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICAvLyAgICAgaWYoY2h1X2NhcmRfbGlzdFtpXS5jYXJkX2lkPT10aGlzLmNhcmRfaWQpe1xuICAgICAgICAvLyAgICAgICAgIC8vdGhpcy5ydW5Ub0NlbnRlcihjaHVfY2FyZF9saXN0W2ldKVxuICAgICAgICAvLyAgICAgICAgIC8vdGhpcy5ub2RlLmRlc3RvcnkoKVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICB9XG4gICAgICAgIC8vIH0uYmluZCh0aGlzKSlcbiAgICB9LFxuXG4gICAgcnVuVG9DZW50ZXIoKXtcbiAgICAgICAgLy/np7vliqjliLDlsY/luZXkuK3pl7TvvIzlubbluKbkuIDkuKrniYznvKnlsI/nmoTmlYjmnpxcbiAgICB9LFxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICBpbml0X2RhdGEoZGF0YSl7XG5cbiAgICB9LFxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxuICAgIHNldFRvdWNoRXZlbnQoKXtcbiAgICAgICAgaWYodGhpcy5hY2NvdW50aWQ9PW15Z2xvYmFsLnBsYXllckRhdGEuYWNjb3VudElEKXtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAgICAgdmFyIGdhbWVTY2VuZV9ub2RlID0gdGhpcy5ub2RlLnBhcmVudCAgXG4gICAgICAgICAgICAgICAgdmFyIHJvb21fc3RhdGUgPSBnYW1lU2NlbmVfbm9kZS5nZXRDb21wb25lbnQoXCJnYW1lU2NlbmVcIikucm9vbXN0YXRlXG4gICAgICAgICAgICAgICAgaWYocm9vbV9zdGF0ZT09Um9vbVN0YXRlLlJPT01fUExBWUlORyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVE9VQ0hfU1RBUlQgaWQ6XCIrdGhpcy5jYXJkX2lkKVxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZsYWc9PWZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhZyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMub2Zmc2V0X3lcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v6YCa55+lZ2FtZXVp5bGC6YCJ5a6a55qE54mMXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXJkaWRcIjp0aGlzLmNhcmRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXJkX2RhdGFcIjp0aGlzLmNhcmRfZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTY2VuZV9ub2RlLmVtaXQoXCJjaG9vc2VfY2FyZF9ldmVudFwiLGNhcmRkYXRhKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhZz1mYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5vZmZzZXRfeVxuICAgICAgICAgICAgICAgICAgICAgICAgLy/pgJrnn6VnYW1lVUnlj5bmtojkuobpgqPlvKDniYxcbiAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVNjZW5lX25vZGUuZW1pdChcInVuY2hvb3NlX2NhcmRfZXZlbnRcIix0aGlzLmNhcmRfaWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICB9XG4gICAgICAgXG4gICAgfSxcbiAgICBzaG93Q2FyZHMoY2FyZCxhY2NvdW50aWQpe1xuICAgICAgICAvL2NhcmQuaW5kZXjmmK/mnI3liqHlmajnlJ/miJBjYXJk57uZ5a+56LGh6K6+572u55qE5LiA5Ymv54mM6YeM5ZSv5LiAaWRcbiAgICAgICAgdGhpcy5jYXJkX2lkID0gY2FyZC5pbmRleFxuICAgICAgICAvL+S8oOWFpeWPguaVsCBjYXJkPXtcInZhbHVlXCI6NSxcInNoYXBlXCI6MSxcImluZGV4XCI6MjB9XG4gICAgICAgIHRoaXMuY2FyZF9kYXRhID0gY2FyZFxuICAgICAgICBpZihhY2NvdW50aWQpe1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50aWQgPSBhY2NvdW50aWQgLy/moIfor4ZjYXJk5bGe5LqO55qE546p5a62XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBcbiAgICAgICAgLy/mnI3liqHlmajlrprkuYnniYznmoTooajnpLpcbiAgICAgICAgLy8gY29uc3QgY2FyZHZhbHVlID0ge1xuICAgICAgICAvLyAgICAgXCJBXCI6IDEyLFxuICAgICAgICAvLyAgICAgXCIyXCI6IDEzLFxuICAgICAgICAvLyAgICAgXCIzXCI6IDEsXG4gICAgICAgIC8vICAgICBcIjRcIjogMixcbiAgICAgICAgLy8gICAgIFwiNVwiOiAzLFxuICAgICAgICAvLyAgICAgXCI2XCI6IDQsXG4gICAgICAgIC8vICAgICBcIjdcIjogNSxcbiAgICAgICAgLy8gICAgIFwiOFwiOiA2LFxuICAgICAgICAvLyAgICAgXCI5XCI6IDcsXG4gICAgICAgIC8vICAgICBcIjEwXCI6IDgsXG4gICAgICAgIC8vICAgICBcIkpcIjogOSxcbiAgICAgICAgLy8gICAgIFwiUVwiOiAxMCxcbiAgICAgICAgLy8gICAgIFwiS1wiOiAxMSxcbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICAgICBcbiAgICAgICAgLy/mnI3liqHlmajov5Tlm57nmoTmmK9rZXksdmFsdWXlr7nlupTnmoTmmK/otYTmupDnmoTnvJblj7dcbiAgICAgICAgY29uc3QgQ2FyZFZhbHVlID0ge1xuICAgICAgICAgICAgXCIxMlwiOiAxLFxuICAgICAgICAgICAgXCIxM1wiOiAyLFxuICAgICAgICAgICAgXCIxXCI6IDMsXG4gICAgICAgICAgICBcIjJcIjogNCxcbiAgICAgICAgICAgIFwiM1wiOiA1LFxuICAgICAgICAgICAgXCI0XCI6IDYsXG4gICAgICAgICAgICBcIjVcIjogNyxcbiAgICAgICAgICAgIFwiNlwiOiA4LFxuICAgICAgICAgICAgXCI3XCI6IDksXG4gICAgICAgICAgICBcIjhcIjogMTAsXG4gICAgICAgICAgICBcIjlcIjogMTEsXG4gICAgICAgICAgICBcIjEwXCI6IDEyLFxuICAgICAgICAgICAgXCIxMVwiOiAxM1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOm7keahg++8mnNwYWRlXG4gICAgICAgIC8vIOe6ouahg++8mmhlYXJ0XG4gICAgICAgIC8vIOaiheiKse+8mmNsdWJcbiAgICAgICAgLy8g5pa554mH77yaZGlhbW9uZFxuICAgICAgICAvLyBjb25zdCBDYXJkU2hhcGUgPSB7XG4gICAgICAgIC8vICAgICBcIlNcIjogMSxcbiAgICAgICAgLy8gICAgIFwiSFwiOiAyLFxuICAgICAgICAvLyAgICAgXCJDXCI6IDMsXG4gICAgICAgIC8vICAgICBcIkRcIjogNCxcbiAgICAgICAgLy8gfTtcbiAgICAgICAgY29uc3QgY2FyZFNocGFlID0ge1xuICAgICAgICAgICAgXCIxXCI6IDMsXG4gICAgICAgICAgICBcIjJcIjogMixcbiAgICAgICAgICAgIFwiM1wiOiAxLFxuICAgICAgICAgICAgXCI0XCI6IDBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgS2luZ3MgPSB7XG4gICAgICAgICAgICBcIjE0XCI6IDU0LFxuICAgICAgICAgICAgXCIxNVwiOiA1M1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBzcHJpdGVLZXkgPSAnJztcbiAgICAgICAgaWYgKGNhcmQuc2hhcGUpe1xuICAgICAgICAgICAgc3ByaXRlS2V5ID0gJ2NhcmRfJyArIChjYXJkU2hwYWVbY2FyZC5zaGFwZV0gKiAxMyArIENhcmRWYWx1ZVtjYXJkLnZhbHVlXSk7XG5cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgc3ByaXRlS2V5ID0gJ2NhcmRfJyArIEtpbmdzW2NhcmQua2luZ107XG4gICAgICAgIH1cblxuICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3ByaXRlS2V5XCIrc3ByaXRlS2V5KVxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmNhcmRzX3Nwcml0ZV9hdGxhcy5nZXRTcHJpdGVGcmFtZShzcHJpdGVLZXkpXG4gICAgICAgIHRoaXMuc2V0VG91Y2hFdmVudCgpXG4gICAgfVxufSk7XG5cblxuIl19