(function(){
    
    let word="tacocat"

    if (word===word.split('').reverse().join('') ){
       document.write('True')
    }else{
       document.write('False')
    }

    console.log(word)
    }
)();