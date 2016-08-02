var formatParams = (function() {
	var Type = {}

    for (var i = 0, type; type = ['Array', 'Object'][i++];) {
        (function(type) {
            Type['is' + type] = function(obj) {
                return Object.prototype.toString.call(obj) == '[object ' + type + ']'
            }
        }(type))
    }

    return function format(params) {
		var store = {}
		
        for (var key in params) {
            if (Type.isObject(params[key]) || Type.isArray(params[key])) {
                for (var innerKey in params[key]) {
                    if (params[key].hasOwnProperty(innerKey)) {
						store[key + '[' + innerKey + ']'] = params[key][innerKey]
					}
                }
            } else {
                store[key] = params[key]
            }
        }

        function check() {
            for (var key in store) {
				if (store.hasOwnProperty(key)) {
					if (Type.isObject(store[key]) || Type.isArray(store[key])) {
						return format(store)
					}
				}
            }

            return store
        }

        return check()
    }
}())
