/**
 *  other： 刘毅豪 
 *  github: https://github.com/yihaoliu
 *  blog:   http://yihaoliu.github.io
 */

class twoSum {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    render(){
        let nums = [].concat(this.x);
        let target = this.y;
        let arr = [];
        for(var i = 0; i < nums.length; i++){
            var key = nums.indexOf(target-nums[i]);
            if(key>=0 && key!==i && arr.indexOf(i)<0 && arr.indexOf(key)<0){
                arr.push(i);
                arr.push(key);
            }
            
        }
        console.log(arr)
        return arr;
    }
}

export default twoSum;
