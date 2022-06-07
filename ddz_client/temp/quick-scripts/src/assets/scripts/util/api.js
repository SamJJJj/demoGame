"use strict";
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