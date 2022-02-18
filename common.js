window.onload = function() {
    var uid = document.getElementById("uid");
    var reg_id = /^[a-z0-9_-]{5,20}$/; // 소문자 + 숫자 + 언더바/하이픈 허용 5~20자리
    var pwd = document.getElementById("pwd");
    var repwd = document.getElementById("repwd");
    var uname = document.getElementById("uname");
    var mail = document.getElementById("mail");

    uid.onblur = function(e) { //uid에서 커서 벗어났을 때 
        if (uid.value == "") { //해당 입력값이 없을 경우 같은 말 : if(!uid.value)
            //id가 입력 안 됐을 때 에러 메세지 나오게
            document.getElementsByClassName('space')[0].style.display = "block";
            uid.focus(); //id에 커서가 깜빡이게
            return false; //아무것도 반환하지 말아라 아래 코드부터 아무것도 진행하지 말것
        }
    };
    uid.onblur = function(e) {
        if (uid.value !== reg_id) {
            //5~20자의 영문 소문자, 숫자와 특수기호(_),(-)로 안 적혀있으면 에러 메세지 나오게
            document.getElementsByClassName('d')[0].style.display = "block";
            uid.focus();
            console.log(reg_id);
            return false;
        }
    };

    if (pwd.value == "") {
        // 커서가 사라졌을 때 조건에 맞으면 초록색 이미지 안 맞으면 빨간색 이미지
        pwd.focus();
        return false;
    };

    //비밀번호 영문자+숫자+특수문자 조합 ( 8~16자리 입력) 정규식
    // var pwdCheck = /^9?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

    if (!pwdCheck.test(pwd.value)) {
        //비밀번호랑 확인이랑 다르면 에러 메세지
        pwd.focus();
        return false;
    };

    if (repwd.value !== pwd.value) {

        repwd.focus();
        return false;
    };
}


// 필수 정보입니다. 가 한번 보이면 다른데로 넘어가도 안 사라짐.
// id 정규식 공백일 때는 제외 + 맞는 값을 입력해도 안 넘어가짐
// id 정규식 키면 필수 정보입니다. 가 안 먹음..