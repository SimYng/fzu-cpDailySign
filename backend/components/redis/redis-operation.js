class RedisOP {
    #instance = null
    constructor(instance) {
        this.#instance = instance
    }

    /**
     * 判断指定的key是否存在
     * 
     * @param {string} key 
     */
    isKeyExists(key) {
        return new Promise((resolve, reject) => {
            this.#instance.exists(key, (err, result) => {
                if (err) reject(err)
                else
                    resolve(result)
            })
        })
    }
    
    /**
     * 创建一个具有秒级TTL的string类型Key
     * 
     * @param {string} key 
     * @param {string} value 
     * @param {number} secTTL 
     */
    createKeyWithSecTTL(key, value, secTTL){
        return new Promise((resolve, reject) => {
            this.#instance.set(key, value, 'EX', secTTL, (err, result) => {
                if(err) reject(err)
                else
                    resolve(result)
            })
        })
    }

    /**
     * 判断hash类型key中指定的field是否存在
     * 
     * @param {string} key 
     * @param {string} field 
     */
    isFieldExists(key, field) {
        return new Promise((resolve, reject) => {
            this.#instance.hexists(key, field, (err, result) => {
                if (err) reject(err)
                else
                    resolve(result)
            })
        })
    }

    /**
     * 设定hash类型key中多个field的值
     * 
     * @param {string} key 
     * @param {array} valueArray 
     */
    setValue(key, valueArray) {
        return new Promise((resolve, reject) => {
            this.#instance.hmset(key, valueArray, (err, result) => {
                if (err) reject(err)
                else
                    resolve(result)
            })
        })
    }


    /**
     * 获取hash类型key中指定field的值
     * 
     * @param {string} key 
     * @param {array} field 
     */
    getValue(key, field) {
        return new Promise((resolve, reject) => {
            this.#instance.hmget(key, field, (err, result) => {
                if (err) reject(err)
                else
                    resolve(result)
            })
        })
    }

}


exports.RedisOP = RedisOP