//joinform_check �Լ��� ��ȿ�� �˻�
function joinform_check() {
    var uid = document.getElementById("uid");
    var pwd = document.getElementById("pwd");
    var repwd = document.getElementById("repwd");
    var uname = document.getElementById("uname");
    var mail = document.getElementById("mail");



    if (uid.value == "") { //�ش� �Է°��� ���� ��� ���� �� : if(!uid.value)
        //id�� �Է� �� �ưų� 5~20���� ���� �ҹ���, ���ڿ� Ư����ȣ(_),(-)�� �� ���������� ���� �޼��� ������
        uid.focus(); //id�� Ŀ���� �����̰�
        return false; //�ƹ��͵� ��ȯ���� ���ƶ� �Ʒ� �ڵ���� �ƹ��͵� �������� ����
    };

    if (pwd.value == "") {
        // Ŀ���� ������� �� ���ǿ� ������ �ʷϻ� �̹��� �� ������ ������ �̹���
        pwd.focus();
        return false;
    };

    //��й�ȣ ������+����+Ư������ ���� ( 8~16�ڸ� �Է�) ���Խ�
    var pwdCheck = /^9?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

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