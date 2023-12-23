const button = document.querySelectorAll('.button');
//console.log(button);
const body = document.querySelector('body');

const reverse = document.querySelector('#reverse');
const forward = document.querySelector('#forward');

const pastColor = [];
let reverseLocationNum;

function clickBox(){
    console.log(this.id);
    // if(this.id !== 'reverse'){
    //     pastColor.push(this.id);
    // }
    
    // reverseNum = pastColor.length;
    // console.log(reverseNum);
    // if(this.id === 'reverse'){
    //     reverseNum++;
    //     console.log(reverseNum);
    //     body.style.backgroundColor = pastColor[reverseNum];
    // }
    pastColor.push(this.id);
    reverseLocationNum = pastColor.length;
    console.log(pastColor);
    //console.log([pastColor,reverseLocationNum]);
    if(this.id === 'green'){
        body.style.backgroundColor = 'green'
    }
    if(this.id === 'orange'){
        body.style.backgroundColor = 'orange'
    }
    if(this.id === 'yellow'){
        body.style.backgroundColor = 'yellow'
    }
    if(this.id === 'brown'){
        body.style.backgroundColor = 'brown'
    }
}

button.forEach((e)=>{
    console.log(e.id);
   e.addEventListener('click',clickBox);
})

//seperate reverse array process
reverse.addEventListener('click',()=>{
    if(reverseLocationNum !== 0){
        reverseLocationNum --;
    }
    console.log(pastColor[reverseLocationNum]);
    console.log(reverseLocationNum);
    body.style.backgroundColor = pastColor[reverseLocationNum -1];


})
//deperate forward array process
forward.addEventListener('click',()=>{
    if(reverseLocationNum <= pastColor.length){
        reverseLocationNum ++;
    }else{return}
    body.style.backgroundColor = pastColor[reverseLocationNum];
})