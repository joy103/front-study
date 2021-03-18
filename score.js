var addscore; //합격 여부에서 addscore를 사용할 것이기에 미리 변수로 선언하는 센스?
function ttscore() {                                  //합계 버튼누르는 실행
    var kor=document.getElementById("kor");                //kor인 input박스를 가져오는 것                            
    var eng=document.getElementById("eng");
    var math=document.getElementById("math");
    addscore=parseInt(kor.value)+parseInt(eng.value)+parseInt(math.value); //parseInt는 괄호안의 값을 숫자로 변환해줌
    var total=document.getElementById("total");
    total.innerHTML=addscore + `점`;               //total인 span박스에 값을 넣는 것, 숫자값 옆에 텍스트를 넣고 싶을때는 ``사용
}
              
function passss() {                               //합격 여부 버튼 누르는 실행
    if (addscore>=250) {
        var pass1=document.getElementById("pass");  //pass인 span 박스를 가져오는 것
        alert("합격을 축하합니다!");
        pass1.innerHTML="합격";
        pass1.style.color="blue";
    }
    else if(addscore==undefined) {
        alert("합계 점수를 확인해주세요!");
    }
    else {
        pass1=document.getElementById("pass");
        alert("아쉽지만 불합격입니다.");
        pass1.innerHTML="불합격";
        pass1.style.color="red";
    } 

    var kor1=document.getElementById("kor1"); // id가 kor1인 span박스를 가져오는 것
    if (kor.value>=90) {  //kor인 input박스 안의 값
        kor1.innerHTML="A 학점"; // kor1인 span박스에 값을 넣는 것
    }
    else if (kor.value>=80) {
        kor1.innerHTML="B 학점";
    }
    else if (kor.value>=70) {
        kor1.innerHTML="C 학점";
    }
    else if (kor.value>=60) {
        kor1.innerHTML="D 학점";
    }
    else {
        kor1.innerHTML="F 학점";
    }

    var eng1=document.getElementById("eng1"); 
    if (eng.value>=90) {  
        eng1.innerHTML="A 학점"; 
    }
    else if (eng.value>=80) {
        eng1.innerHTML="B 학점";
    }
    else if (eng.value>=70) {
        eng1.innerHTML="C 학점";
    }
    else if (eng.value>=60) {
        eng1.innerHTML="D 학점";
    }
    else {
        eng1.innerHTML="F 학점";
    }

    var math1=document.getElementById("math1"); 
    if (math.value>=90) { 
        math1.innerHTML="A 학점"; 
    }
    else if (math.value>=80) {
        math1.innerHTML="B 학점";
    }
    else if (math.value>=70) {
        math1.innerHTML="C 학점";
    }
    else if (math.value>=60) {
        math1.innerHTML="D 학점";
    }
    else {
        math1.innerHTML="F 학점";
    }
}

var title=document.getElementById("title");
function input() {
    
    var title1=document.getElementById("title1");
    var kor2=document.getElementById("kor2");
    var eng2=document.getElementById("eng2");
    var math2=document.getElementById("math2");
    var total1=document.getElementById("total1");
    var pass2=document.getElementById("pass2");
    title1.innerHTML=document.getElementById("title").value;
    kor2.innerHTML=kor.value + `점`;
    eng2.innerHTML=eng.value + `점`;
    math2.innerHTML=math.value + `점`;
    total1.innerHTML=document.getElementById("total").innerHTML; //total은 합계박스에서 이미 정의, 박스형태이므로 total 박스의 값을 가져오려면 innerHTML로 불러와야 한다(total.value가 안 먹히는 이유)
    pass2.innerHTML=document.getElementById("pass").innerHTML; // 이것도 박스형태이기 때문에 값을 불러오거나 넣고 싶으면 innerHTML 사용
    
    // 박스형태, div/td/span 등 값을 접근(입력 및 가져오기)에는 innerHTML, input 형식은 value를 사용
}