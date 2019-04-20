class romanToInt {
    constructor(x){
        this.x = x;
       
    }
    render(){
        let s = this.x;
        var str = '';
        if(x<0){
            str = ''+Math.abs(x);
            str = +('-'+(str.split('').reverse().join('')));
            
        }else{
            str =''+ x;
             str = +(str.split('').reverse().join(''));
           
        }
        if(str >= Math.pow(2, 31)-1 || str <= Math.pow(-2, 31)){
                str=0;
        }
        console.log(str)
            return str;
    }
}

export default romanToInt;