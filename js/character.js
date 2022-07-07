// character.js
$(document).ready(function(){
    var $arr_profile = [
        ["cha_01.jpg", "대위 이명준 역 &#40;김명민&#41;", `만약 그들이 전쟁터에 가지 않았더라면,<br>아마 지금쯤 살아서 멋지게 인생을 살았을 청춘들입니다!<br>제 목숨을 바꿔서라도! 사람들이, 죽은 그 학도병들을<br>기억하게 할수 있도록 제가 꼭 만들고 싶습니다!<br>`],
        ["cha_02.jpg", "학도병 최성필 역 &#40;최민호&#41;", `같이 집에 가야지!`],
        ["cha_04.jpg", "중대장 박찬년 역 &#40;곽시양&#41;", `기간병은 남고 학도병은 퇴각해!`],
        ["cha_05.jpg", "종군기자 매기 역 &#40;매간폭스&#41;", `하지만 구할 수 있는 사람을 못 구하면 우리는 뭐가 될까요?`],
    ];
    for(v of $arr_profile){
        console.log(v);
        $(".character").append(`
            <div class="ch_box">
                <div class="img_part" style="background-image: url(./img/${v[0]});"></div>
                <div class="text_part">
                    <p>${v[1]}</p>
                    <span>${v[2]}</span>
                </div>
            </div>
        `);
    }

});