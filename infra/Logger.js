let logger = null
class Logger{
  constructor(){
      if(!logger){
          logger=this
      }
  }  

formatTag(tag){
return  `[${tag}]`

}

  info(tag,msg){
    console.log(this.formatTag(tag),msg)
  }

  erro(tag,msg){
      console.error(this.formatTag(tag),msg)
  }
  
}

module.exports = Logger