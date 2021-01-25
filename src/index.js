module.exports = function check(str, bracketsConfig) {
  const list = [], state = [];

  let flag = true;

  for (let i = 0; i < bracketsConfig.length; i++) {
    list[i] = bracketsConfig[i].join('');
  }
  
  while (flag) {
    for (let j = 0; j < list.length; j++) {
        if(str.indexOf(list[j]) == -1) {
            state.push(0);       
        } else {
            str = str.replace(list[j],'');                
            state.push(1);   
        } 
    }    
    if (state.indexOf(1) == -1) {
        flag = false;
    }      
    state = [];
  }
  return str.length == 0 ? true : false;
}
