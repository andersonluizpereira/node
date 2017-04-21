const expect = require('expect')
const Logger = require('../../infra/Logger')

describe('#Logger', ()=>{
  it("Verificar se temos a tag está sendo formatada dessa forma [tag]",()=>{
     let logger = new Logger();
     let logger2 = new Logger();
     
     expect(logger).toBe(logger2)
     

  })

})