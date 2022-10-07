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
      question:'Select 1:',
      a:'1',
      b:'2',
      c:'3',
      d:'4',
      correct:'a'
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

/* function thirdIndex(question,a,b,c,d){
   this.question=question;
   this.a=a;
   this.b=b;
   this.c=c;
   this.d=d;
   let correct=this.d;
   Object.defineProperty(this,'correct',{
      get:function(){
         return correct
      },
      set:function(newValue){
         if(!newValue){
            throw new Error('Check the newValue')
         }
         correct=newValue
      }
   })
} */

let checkQuestion=document.querySelector('.check');
let nextQuestion=document.querySelector('.next');

let questionMarkup=document.querySelector('.question');

let inputs=document.querySelectorAll('.answer')
let alert=document.querySelector('.alert');

let firstAnswer_text=document.querySelector('.a');
let secondAnswer_text=document.querySelector('.b');
let thirdAnswer_text=document.querySelector('.c');
let forthAnswer_text=document.querySelector('.d');
let arrayOfSpans=[firstAnswer_text,secondAnswer_text,thirdAnswer_text,forthAnswer_text];

function randomNumberGenerator(){
   let num=Math.floor(Math.random()*questions.length);
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

function displayAlert(text,status){
   alert.textContent=text;
   alert.classList.add(status);
   setTimeout(()=>{
      alert.textContent='';
      alert.classList.remove(status);
   },1569)
}

checkQuestion.addEventListener('click',()=>{
   let myId=correctAnswer();
   let obj=objForCheck;
   if(myId===questions[obj].correct){
      for(let i=0;i<arrayOfSpans.length;i++){
         if(arrayOfSpans[i].className===myId){
            arrayOfSpans[i].setAttribute('style','color:green')
            displayAlert('Nailed it','correct')
            setTimeout(()=>{
               const anotherIndex=randomNumberGenerator();
               const anotherSelectedQuestion=questions[anotherIndex];
               fill(anotherSelectedQuestion);
               link(anotherIndex);
               reset();
            },1569)
         }
      }
   }else{
      let selected=document.getElementsByClassName(myId);
      selected[0].setAttribute('style','color:red')
      displayAlert('Incorrect','incorrect')
      setTimeout(()=>{
         selected[0].setAttribute('style','color:black')
      },1569)
   }
})