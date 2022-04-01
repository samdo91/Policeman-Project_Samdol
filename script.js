const h1=document.querySelector(".hello h1")
console.log(h1)
h1.innerHTML=("당신은 술을 사려한다. 이곳은 미국이다.  걸렸다! 경찰은 이리 오라는 듯 경찰봉 흔들며 손짓한다.(마우스 포인터를 올리세요.)")




function mousOnTheh1(){
    (h1.innerHTML=("헤이 브로 술을 사기에는 너무 어린데? 할렘가에서 뭘하고 있는거지? 나에게 정기적으로 상남금을..... 이런이런 cctv가 있잖아! 잠시 검문있겠습니다. 신분증을 재출해주세요. (이쪽으로와서 경관를 클릭하세요.)"))
}  
    



h1.addEventListener("mouseenter", mousOnTheh1)

function shot(){
    (h1.innerHTML=("도주 하던 당신은 경관의 뉴남부 피스톨에 벌집이 되었습니다. (다시하려면 f5) ")) 
    && 
    (h1.className=("active"))
}

h1.addEventListener("mouseleave" ,shot)
  
function eovls(){
 const checkpoint=("신분증이 없다고? 헤이 브로 블렉 맘바를 맛보고 싶은 겁니까? (허리춤에 검은 뉴남부 권총을 만지작거리며) 말도안되는 소리를 하는군? 당신은 좆되고 싶은겁니까? 당신의 나이를 알려주세요. 뒈지기 싫으면 (클릭, 도망가려면 마우스 위아래로 흔드세요.)")
    if (h1.innerHTML===(checkpoint)){
  
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
        prompt("내가 실수했군 마셔요!!")
    }
    else if(age>80){
        prompt("그만해 이러다 너 죽어!!")
    }

  } 
  
  else{
      (h1.innerHTML=(checkpoint))
  }
  }


h1.addEventListener("click", eovls)
