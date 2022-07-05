let homepage = require('../pages/homepage');

describe('demo calculator', ()=>{

    let nb1 =10;
    let nb2 =20;
    let nb3 =4;
    let nb4 = 5;
    let nb5 = 8;
    let nb6 = 8;
    it('addition test', ()=>{

       const url = 'http://juliemr.github.io/protractor-demo/';

       homepage.get(url);

       let soma = nb1 + nb2;
       


       homepage.enterFirstNumber(nb1.toString());
       homepage.enterSecondNumber(nb2.toString());
       homepage.clickGo();

       homepage.verifyResult(soma.toString())
        browser.sleep(5000);
    });

    it('second addition test', ()=>{

        const url = 'http://juliemr.github.io/protractor-demo/';
 
        homepage.get(url);
 
        let soma = nb3 + nb4;
 
        homepage.enterFirstNumber(nb3.toString());
        homepage.enterSecondNumber(nb4.toString());
        homepage.clickGo();
 
        homepage.verifyResult(soma.toString())
         browser.sleep(5000);
     });

     it('third addition test', ()=>{

        const url = 'http://juliemr.github.io/protractor-demo/';
 
        homepage.get(url);
 
        let soma = nb5 + nb6;
 
        homepage.enterFirstNumber(nb5.toString());
        homepage.enterSecondNumber(nb6.toString());
        homepage.clickGo();
 
        homepage.verifyResult(soma.toString())
         browser.sleep(5000);
     });
    
});