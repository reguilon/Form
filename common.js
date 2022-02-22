window.onload = function() {
    let uid = document.getElementById("uid");
    let pwd = document.getElementById("pwd");
    let repwd = document.getElementById("repwd");
    let uname = document.getElementById("uname");
    let year = document.getElementById("yy");
    let day = document.getElementById("dd");
    let umail = document.getElementById("mail");
    let idCheck = /^[a-z0-9_-]{5,20}$/; 
    let pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/; 
    let nameCheck = /^[?-?]{2,4}$/;
    let yearCheck = /^[0-9]{4}/;
    let dayCheck = /^[0-9]{1,2}/;
    let mailCheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    uid.onblur = function(e) {
        if (uid.value === "") {
            document.getElementsByClassName('essential')[0].style.display = "block";
            uid.focus(); 
            return false;
        };
        if (!idCheck.test(uid.value)) {
            document.getElementsByClassName('announce')[0].style.display = "block";
            uid.focus();
            return false;
        };
        if (idCheck.test(uid.value)) {
            document.getElementsByClassName('announce')[0].style.display = "none";
            document.getElementsByClassName('essential')[0].style.display = "none";
        };
    };

    pwd.onblur = function(e) {
        if (pwd.value === "") {
            document.getElementsByClassName('essential')[1].style.display = "block";
            pwd.focus();
            return false;
        };
        if (!pwdCheck.test(pwd.value)) {
            document.getElementsByClassName('announce')[1].style.display = "block";
            pwd.focus();
            return false;
        };
        if (pwdCheck.test(pwd.value)) {
            document.getElementsByClassName('announce')[1].style.display = "none";
            document.getElementsByClassName('essential')[1].style.display = "none";
        };
    };

    repwd.onblur = function(e) {
        if (repwd.value !== pwd.value) {
            document.getElementsByClassName('announce')[2].style.display = "block";
            repwd.focus();
            return false;
        };
        if (repwd.value == pwd.value) {
            document.getElementsByClassName('announce')[2].style.display = "none";
        }
    };
    
    uname.onblur = function(e) {
        if (uname.value === "") {
            document.getElementsByClassName('essential')[2].style.display = "block";
            uname.focus();
            return false;
        };
        if (!nameCheck.test(uname.value)) {
            document.getElementsByClassName('announce')[3].style.display = "block";
            uname.focus();
            return false;
        };
        if (nameCheck.test(uname.value)) {
            document.getElementsByClassName('announce')[3].style.display = "none";
            document.getElementsByClassName('essential')[2].style.display = "none";
        };
    };

    year.onblur = function(e) {
        if (year.value === "") {
            document.getElementsByClassName('announce')[4].style.display = "block";
            year.focus();
            return false;
        };
        if (!yearCheck.test(year.value)) {
            document.getElementsByClassName('announce')[4].style.display = "block";
            year.focus();
            return false;
        };
        if (yearCheck.test(year.value)) {
            document.getElementsByClassName('announce')[4].style.display = "none";
        };
    };

    day.onblur = function(e) {
        if (day.value === "") {
            document.getElementsByClassName('announce')[5].style.display = "block";
            day.focus();
            return false;
        };
        if (!dayCheck.test(day.value)) {
            document.getElementsByClassName('announce')[5].style.display = "block";
            day.focus();
            return false;
        };
        if (dayCheck.test(day.value)) {
            document.getElementsByClassName('announce')[5].style.display = "none";
        };
    };

    umail.onblur = function(e) {
        if (umail.value === "") {
            document.getElementsByClassName('essential')[3].style.display = "block";
            umail.focus();
            return false;
        };
        if (!mailCheck.test(umail.value)) {
            document.getElementsByClassName('announce')[6].style.display = "block";
            umail.focus();
            return false;
        };
        if (mailCheck.test(umail.value)) {
            document.getElementsByClassName('essential')[3].style.display = "none";
            document.getElementsByClassName('announce')[6].style.display = "none";
        };
    };
};
function join_btn() {
    alert("????? ?? ?????");
};