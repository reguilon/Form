window.onload = function() {
    var uid = document.getElementById("uid");
    var reg_id = /^[a-z0-9_-]{5,20}$/; // �ҹ��� + ���� + �����/������ ��� 5~20�ڸ�
    var pwd = document.getElementById("pwd");
    var repwd = document.getElementById("repwd");
    var uname = document.getElementById("uname");
    var mail = document.getElementById("mail");

    uid.onblur = function(e) { //uid���� Ŀ�� ����� �� 
        if (uid.value == "") { //�ش� �Է°��� ���� ��� ���� �� : if(!uid.value)
            //id�� �Է� �� ���� �� ���� �޼��� ������
            document.getElementsByClassName('space')[0].style.display = "block";
            uid.focus(); //id�� Ŀ���� �����̰�
            return false; //�ƹ��͵� ��ȯ���� ���ƶ� �Ʒ� �ڵ���� �ƹ��͵� �������� ����
        }
    };
    uid.onblur = function(e) {
        if (uid.value !== reg_id) {
            //5~20���� ���� �ҹ���, ���ڿ� Ư����ȣ(_),(-)�� �� ���������� ���� �޼��� ������
            document.getElementsByClassName('d')[0].style.display = "block";
            uid.focus();
            console.log(reg_id);
            return false;
        }
    };

    if (pwd.value == "") {
        // Ŀ���� ������� �� ���ǿ� ������ �ʷϻ� �̹��� �� ������ ������ �̹���
        pwd.focus();
        return false;
    };

    //��й�ȣ ������+����+Ư������ ���� ( 8~16�ڸ� �Է�) ���Խ�
    // var pwdCheck = /^9?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

    if (!pwdCheck.test(pwd.value)) {
        //��й�ȣ�� Ȯ���̶� �ٸ��� ���� �޼���
        pwd.focus();
        return false;
    };

    if (repwd.value !== pwd.value) {

        repwd.focus();
        return false;
    };
}


// �ʼ� �����Դϴ�. �� �ѹ� ���̸� �ٸ����� �Ѿ�� �� �����.
// id ���Խ� ������ ���� ���� + �´� ���� �Է��ص� �� �Ѿ��
// id ���Խ� Ű�� �ʼ� �����Դϴ�. �� �� ����..