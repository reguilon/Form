let idToken = false
let pwdToken = false
let rePwdToken = false
let nameToken = false
let yearToken = false
let dayToken = false
let mailToken = false
let target = document.getElementById('joinBtn');




function validate() {

    let uid = document.getElementById("uid");
    let pwd = document.getElementById("pwd");
    let repwd = document.getElementById("repwd");
    let uname = document.getElementById("uname");
    let year = document.getElementById("yy");
    let day = document.getElementById("dd");
    let umail = document.getElementById("mail");
    let idCheck = /^[a-z0-9_-]{5,20}$/;
    let pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    let nameCheck = /^[가-힣]{2,4}$/;
    let yearCheck = /^[0-9]{4}/;
    let dayCheck = /^[0-9]{1,2}/;
    let mailCheck = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let tokenType = idToken && pwdToken && rePwdToken && nameToken && yearToken && dayToken && mailToken

    uid.onkeyup = () => {
        if (!idCheck.test(document.getElementById('uid').value)) {
            document.getElementById('idError').innerText = "아이디는 영 소문자, 숫자 5~20자리로 입력해주세요."
            document.getElementById('idError').style.color = 'red'
            idToken = false;
            target.disabled = true;
        } else {
            let idE = document.getElementById('idError')
            idE.innerText = '사용가능'
            idE.style.color = 'green'
            idToken = true;
            target.disabled = false;
        }
    };
    pwd.onkeyup = () => {
        if (!pwdCheck.test(document.getElementById('pwd').value)) {
            document.getElementById('pwdError').innerText = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."
            document.getElementById('pwdError').style.color = 'red'
            pwdToken = false;
            target.disabled = true;
        } else {
            let pwdE = document.getElementById('pwdError')
            pwdE.innerText = '사용가능'
            pwdE.style.color = 'green'
            pwdToken = true;
            target.disabled = false;
        }
    };
    repwd.onkeyup = () => {
        if (repwd.value !== pwd.value) {
            document.getElementById('rePwderror').innerText = "비밀번호가 일치하지 않습니다."
            document.getElementById('rePwderror').style.color = 'red'
            rePwdToken = false;
            target.disabled = true;
        } else {
            document.getElementById('rePwderror').innerText = "사용가능"
            document.getElementById('rePwderror').style.color = 'green'
            rePwdToken = true;
            target.disabled = false;
        }
    };
    uname.onkeyup = () => {
        if (!nameCheck.test(document.getElementById('uname').value)) {
            document.getElementById('nameError').innerText = "2~4글자의 한글만 입력하세요."
            document.getElementById('nameError').style.color = 'red'
            nameToken = false;
            target.disabled = true;
        } else {
            document.getElementById('nameError').innerText = "사용가능"
            document.getElementById('nameError').style.color = 'green'
            nameToken = true;
            target.disabled = false;
        }
    };
    year.onkeyup = () => {
        if (!yearCheck.test(document.getElementById('yy').value)) {
            document.getElementById('yyError').innerText = "태어난 년도 4자리를 정확하게 입력하세요."
            document.getElementById('yyError').style.color = 'red'
            yearToken = false;
            target.disabled = true;
        } else {
            document.getElementById('yyError').innerText = ""
            yearToken = true;
            target.disabled = false;
        }
    };
    day.onkeyup = () => {
        if (!dayCheck.test(document.getElementById('dd').value)) {
            document.getElementById('ddError').innerText = "태어난 일(날짜) 를 정확하게 입력하세요."
            document.getElementById('ddError').style.color = 'red'
            dayToken = false;
            target.disabled = true;
        } else {
            document.getElementById('ddError').innerText = ""
            dayToken = true;
            target.disabled = false;
        }
    };
    umail.onkeyup = () => {
        if (!mailCheck.test(document.getElementById('mail').value)) {
            document.getElementById('mailError').innerText = "이메일 주소를 다시 확인해주세요.."
            document.getElementById('mailError').style.color = 'red'
            mailToken = false;
            target.disabled = true;
        } else {
            let idE = document.getElementById('mailError')
            idE.innerText = '사용가능'
            idE.style.color = 'green'
            mailToken = true;
            target.disabled = false;
        }
    };


    // if (tokenType == true) {
    //     target.disabled = false;
    //     console.log(tokenType)
    // } else {
    //     target.disabled = true;
    //     console.log(tokenType)
    // }

    // switch (tokenType == true) {
    //     case 'true':
    //         target.disabled = false;
    //         console.log(tokenType)
    //         break;

    //     case 'false':
    //         target.disabled = true;
    //         console.log(tokenType)
    //         break;
    // }
    console.log(tokenType)
};

validate();
