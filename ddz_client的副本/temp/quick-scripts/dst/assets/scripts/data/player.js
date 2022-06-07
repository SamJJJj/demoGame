
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGEvcGxheWVyLmpzIl0sIm5hbWVzIjpbImdldFJhbmRvbVN0ciIsImNvdW50Iiwic3RyIiwiaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInBsYXllckRhdGEiLCJ0aGF0IiwidW5pcXVlSUQiLCJhY2NvdW50SUQiLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImdvYmFsX2NvdW50IiwibWFzdGVyX2FjY291bnRpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQVVDLEtBQVYsRUFBaUI7QUFDbEMsTUFBSUMsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFpQkEsQ0FBQyxHQUFHRixLQUFyQixFQUE2QkUsQ0FBQyxFQUE5QixFQUFrQztBQUM5QkQsSUFBQUEsR0FBRyxJQUFJRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLENBQVA7QUFDSDs7QUFDRCxTQUFPSixHQUFQO0FBQ0gsQ0FORDs7QUFRQSxJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFVO0FBQ3pCLE1BQUlDLElBQUksR0FBRyxFQUFYLENBRHlCLENBR3pCO0FBQ0E7O0FBQ0FBLEVBQUFBLElBQUksQ0FBQ0MsUUFBTCxHQUFnQixJQUFJVCxZQUFZLENBQUMsQ0FBRCxDQUFoQztBQUNBUSxFQUFBQSxJQUFJLENBQUNFLFNBQUwsR0FBaUIsTUFBTVYsWUFBWSxDQUFDLENBQUQsQ0FBbkM7QUFDQVEsRUFBQUEsSUFBSSxDQUFDRyxRQUFMLEdBQWdCLFNBQVNYLFlBQVksQ0FBQyxDQUFELENBQXJDO0FBQ0EsTUFBSUUsR0FBRyxHQUFHLGFBQWFFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBM0IsSUFBZ0MsQ0FBN0MsQ0FBVjtBQUNBRSxFQUFBQSxJQUFJLENBQUNJLFNBQUwsR0FBaUJWLEdBQWpCLENBVHlCLENBU0Y7O0FBQ3ZCTSxFQUFBQSxJQUFJLENBQUNLLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQUwsRUFBQUEsSUFBSSxDQUFDTSxnQkFBTCxHQUFzQixDQUF0QjtBQUNBLFNBQU9OLElBQVA7QUFDSCxDQWJEOztlQWVlRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0UmFuZG9tU3RyID0gZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwIDsgaSA8IGNvdW50IDsgaSArKyl7XG4gICAgICAgIHN0ciArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59O1xuXG5jb25zdCBwbGF5ZXJEYXRhID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgdGhhdCA9IHt9XG5cbiAgICAvL3RoYXQudW5pcXVlSUQgPSBcIjIwMDAwMFwiO1xuICAgIC8vdGhhdC51bmlxdWVJRCA9IFwiMTMyODAxNFwiXG4gICAgdGhhdC51bmlxdWVJRCA9IDEgKyBnZXRSYW5kb21TdHIoNilcbiAgICB0aGF0LmFjY291bnRJRCA9IFwiMlwiICsgZ2V0UmFuZG9tU3RyKDYpXG4gICAgdGhhdC5uaWNrTmFtZSA9IFwidGlueVwiICsgZ2V0UmFuZG9tU3RyKDMpXG4gICAgdmFyIHN0ciA9IFwiYXZhdGFyX1wiICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpICsgMSlcbiAgICB0aGF0LmF2YXRhclVybCA9IHN0ciAgIC8v6ZqP5py65LiA5Liq5aS05YOPXG4gICAgdGhhdC5nb2JhbF9jb3VudCA9IDBcbiAgICB0aGF0Lm1hc3Rlcl9hY2NvdW50aWQ9MFxuICAgIHJldHVybiB0aGF0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXJEYXRhXG4iXX0=