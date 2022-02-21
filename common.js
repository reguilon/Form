window.onload = function() {
    var uid = document.getElementById("uid");
    var pwd = document.getElementById("pwd");
    var repwd = document.getElementById("repwd");
    var uname = document.getElementById("uname");
    var year = document.getElementById("yy");
    var day = document.getElementById("dd");
    var idCheck = /^[a-z0-9_-]{5,20}$/; // ??? + ?? + ???/??? ?? 5~20??
    var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/; // ?? ???? + ?? + ???? 8~16??
    var nameCheck = /^[?-?|?-?|?-?]{2,4}/; //?? 2~4 ??

    uid.onblur = function(e) { // ??? ???? ?
        if (uid.value == "") { // ?? ?? ?? ?
            document.getElementsByClassName('essential')[0].style.display = "block";
            uid.focus(); // id? ??
            return false; // ???? ???? ??? ?? ???? ???? ???? ? ?
        }
        if (!idCheck.test(uid.value)) { // id? ??? ?? ???? ?? ?? ?
            document.getElementsByClassName('announce')[0].style.display = "block";
            uid.focus();
            return false;
        }
    };

    pwd.onblur = function(e) {
        if (pwd.value == "") {
            document.getElementsByClassName('essential')[1].style.display = "block";
            pwd.focus();
            return false;
        }
        if (!pwdCheck.test(pwd.value)) {
            document.getElementsByClassName('announce')[1].style.display = "block";
            pwd.focus();
            return false;
        }
    };

    repwd.onblur = function(e) {
        if (repwd.value !== pwd.value) {
            document.getElementsByClassName('announce')[2].style.display = "block";
            repwd.focus();
            return false;
        }
    };
    
    uname.onblur = function(e) {
        if (uname.value == "") {
            document.getElementsByClassName('essential')[2].style.display = "block";
            uname.focus();
            return false;
        }
        if (!nameCheck.test(uname.value)) {
            document.getElementsByClassName('announce')[3].style.display = "block";
            uname.focus();
            return false;
        }
    };

    year.onblur = function(e) {
        if (year.value == "") {
            document.getElementsByClassName('annouce')[4].style.display = "block";
            year.focus();
            return false;
        }
    }

    day.onblur = function(e) {
        if (day.value == "") {
            document.getElementsByClassName('annouce')[5].style.display = "block";
            day.focus();
            return false;
        }
    }
};

// ?? ??? ????
