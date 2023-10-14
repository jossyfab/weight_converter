var overall = document.querySelector(".overall");
            overall.style.visibility = 'hidden';
         let input = document.getElementById("input");
         input.addEventListener('input',calculate);
         function calculate(e){
            let value = e.target.value;
         if( isNaN(value) ){
            overall.style.visibility = 'hidden';
        let nanBoard = document.querySelector('.nan-board');
        nanBoard.style.display = 'block'
        setTimeout(function(){
            nanBoard.style.display = 'none';
        },2000);

    }else{
        overall.style.visibility = 'visible';
        let gramOutPut = document.querySelector('.gram-output');
        let kiloOutPut = document.querySelector('.kilo-output');
        let ounceOutPut = document.querySelector('.ounce-output');
        gramOutPut.innerHTML = value/0.0022046;
        kiloOutPut.innerHTML = value/2.2046;
        ounceOutPut.innerHTML = value*16;
    }
} 