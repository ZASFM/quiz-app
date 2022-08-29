const questions=[
   {
      question:'What does HTML means:',
      a:'HyperText Markup Language',
      b:'Hyper tremendous mega large',
      c:'Horse takes my lasagna ',
      d:'None',
      correct:'a'
   },

   {
      question:'2+2:',
      a:'3',
      b:'4',
      c:'5',
      d:'1',
      correct:'b'
   },

   {
      question:'Select correct:',
      a:'Incorrect',
      b:'Incorrect',
      c:'Correct',
      d:'Incorrect',
      correct:'c'
   },

   {
      question:'Describe bitcoin:',
      a:'scam scam scam',
      b:'Lambo Lambo Lambo',
      c:'moon moon moon',
      d:'untractable nonforfeitable blockchain',
      correct:'d'
   },

   {
      question:'Select incorrect:',
      a:'incorrect',
      b:'correct',
      c:'correct',
      d:'correct',
      correct:'a'
   },
];

let checkQuestion=document.querySelector('.check');
let nextQuestion=document.querySelector('.next');

let questionMarkup=document.querySelector('.question');

let inputs=document.querySelectorAll('.answer')

let firstAnswer_text=document.querySelector('.a');
let secondAnswer_text=document.querySelector('.b');
let thirdAnswer_text=document.querySelector('.c');
let forthAnswer_text=document.querySelector('.d');
let arrayOfSpans=[firstAnswer_text,secondAnswer_text,thirdAnswer_text,firstAnswer_text];

function randomNumberGenerator(){
   let num=Math.floor(Math.random()*6);
   return num;
};

function reset(){
   for(let i=0;i<arrayOfSpans.length;i++){
      arrayOfSpans[i].setAttribute('style','border:none;')
   }
}

nextQuestion.addEventListener('click',()=>{
   const index=randomNumberGenerator();
   const selectedQuestion=questions[index];
   fill(selectedQuestion);
   link(index)
   reset()
})

let objForCheck;
function link(number){
   objForCheck=number;
}

function fill(theQuestion){
   reset()
   unselectRadio()
   questionMarkup.textContent=theQuestion.question;
   firstAnswer_text.innerHTML=theQuestion.a;
   secondAnswer_text.innerHTML=theQuestion.b;
   thirdAnswer_text.innerHTML=theQuestion.c;
   forthAnswer_text.innerHTML=theQuestion.d;
}

function correctAnswer(){
   let answer;
   inputs.forEach((element)=>{
      if(element.checked){
         answer=element.id;
      }
   })
   return answer;
}

function unselectRadio(){
   inputs.forEach((element)=>{
      if(element.checked){
         element.checked=false;
      }
   })
}

checkQuestion.addEventListener('click',()=>{
   let myId=correctAnswer();
   let obj=objForCheck;
   if(myId===questions[obj].correct){
      for(let i=0;i<arrayOfSpans.length;i++){
         if(arrayOfSpans[i].className===myId){
            arrayOfSpans[i].setAttribute('style','border:1px solid green;')
            setTimeout(()=>{
               const anotherIndex=randomNumberGenerator();
               const anotherSelectedQuestion=questions[anotherIndex];
               fill(anotherSelectedQuestion);
            },1500)
         }
      }
   }else{
      let selected=document.getElementsByClassName(myId);
      selected[0].setAttribute('style','border:1px solid red')
      setTimeout(()=>{},1500)
   }
})