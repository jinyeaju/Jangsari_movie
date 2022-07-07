$(document).ready(function(){

    var $epCont = [
        ["ep_top_01.png", "에필로그 이미지1", `“당시 무참히 희생된 어린 영혼들에 대한 미안함이 가장 컸다.”`],
        ["ep_top_02.png", "에필로그 이미지2", `“학도병들은 군번 없는 용사였다.<br>싸우는 줄은 알았지만, 단체로 가서 어려운 작전을 수행한 줄은 몰랐다.”`],
        ["ep_top_03.png", "에필로그 이미지3", `“화려한 영웅의 이야기가 아니라 마이너리티의 희생을 다뤄야 해<br>무엇보다 진정성을 담고자 했다”`],
    ];
    for(v of $epCont){
        console.log(v);
        $(".epilogue").append(`
            <div class="ContBox two">
                <img src="./img/${v[0]}" alt="${v[1]}">
                <p>${v[2]}</p>
            </div>
        `);
    }
    $(".epilogue").append(`
        <div class="ContBox one">
            <img src="./img/ep_bottom.png" alt="하단 에필로그 이미지">
        </div>
    `);









});