const h1=document.querySelector(".hello h1")
console.log(h1)
h1.innerHTML=("당신은 술을 사려한다. 이크! 이곳은 미국이다. 너는 경찰 걸렸다. 경찰은 이리 오라는 듯 경찰봉 흔들며 손짓한다.(문장위에 마무스 포인터를 올리세요.)")




function mousOnTheh1(){
    (h1.innerHTML=("잠시 검문있겠습니다. 신분증을 재출해주세요. (이쪽으로와서 경관를 클릭하세요.)"))
}  
    



h1.addEventListener("mouseenter", mousOnTheh1)

function shot(){
    (h1.innerHTML=("도주 하던 당신은 경관의 뉴난부 피스톨에 벌집이 되었습니다. (다시하려면 f5) ")) 
    && 
    (h1.className=("active"))
}

h1.addEventListener("mouseleave" ,shot)
  
function eovls(){

    if (h1.innerHTML===(("신분증이 없다고? 당신의 나이를 알려주세요. 뒈지기 싫으면 (클릭)"))){
  
    const age =parseInt(prompt('how old are you?'));

    console.log(age)
    console.log(isNaN(age))
    
    if(isNaN(age)|| (age)<0){
        prompt ("plese your ID card. don't make the situation serious")
    }
    else if((age)<19){
        alert("꺼져라 꼬마야")
    }
    else if((age)>50&&(age<=80)){
        prompt("할배 서요??")
    }
    else if((age)>19&&(age)<=50){
        prompt("마셔요!!")
    }
    else if(age>80){
        prompt("그만해 이러다 너 죽어!!")
    }

  } 
  
  else{
      (h1.innerHTML=(("신분증이 없다고? 당신의 나이를 알려주세요. 뒈지기 싫으면 (클릭)")))
  }
  }


h1.addEventListener("click", eovls)
