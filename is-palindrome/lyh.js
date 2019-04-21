/**
*  other： 刘毅豪 
*  github: https://github.com/yihaoliu
*  blog:   http://yihaoliu.github.io
*/
class isPalindrome {
    constructor(x){
        this.x = x;
       
    }
    render(){
        let x = this.x;
        let arr = [];
        let flag = true;
        if(x<0){
            return false;
        }else {
            for(let i=10;x>0;){
                arr.push(x%i);
                x= (x-x%i)/10;
               
            }
            let len = arr.length;
            for(let j=0;j<len;j++){
                if(arr[j]!==arr[len-1-j]){
                    return false;
                }
                if(len-1-j<=j){
                    break;
                }
                
            }
            return true;
        }
    }
}

export default isPalindrome;