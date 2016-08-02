const formatParams = (() => {//格式化参数以进行Md5加密

    var Type = {},
        store = {};

    for (var i = 0, type; type = ['Array', 'Object'][i++];) {
        (function(type) {
            Type['is' + type] = function(obj) {
                return Object.prototype.toString.call(obj) == '[object ' + type + ']';
            }
        }(type))
    }

    return function format(params) {
        debugger
        for (var key in params) {
            if (Type.isObject(params[key]) || Type.isArray(params[key])) {
                for (var seckey in params[key]) {
                    store[key + '[' + seckey + ']'] = params[key][seckey];
                }
            } else {
                store[key] = params[key];
            }
        }

        function check(params) {
            for (const key in params) {
                if (Type.isObject(params[key]) || Type.isArray(params[key])) {
                    return format(params);
                }
            }

            return params;
        }

        return check(store);
    }
})();
