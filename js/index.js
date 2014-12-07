var jsStudy = jsStudy || {};

/**
 * @method check_id
 * @namespace jsStudy
 * @param {String} id
 * @return {Boolean} if returns true, then id checking successed
 */
jsStudy.check_id = function (id) {
console.log("===============[ jsStudy.check_id called ]===============");
var elem_id, strid, elem_msg;
  if (id) {
    elem_id = document.getElementById(id);
  } else {
    elem_id = document.getElementById("id");
  }

  elem_msg = document.getElementById("msg_id");
  elem_msg.innerHTML = "";
  strid = elem_id.value;
 
  // 입력값이 없을 때
  if (strid.length === 0) {
    elem_msg.innerHTML = "아이디를 입력하세요.";
    elem_id.focus();
    return false;
  }

  // 영문으로 시작하기
  if (strid.search(/^[a-z]/i) === -1) {
    elem_msg.innerHTML = "사용할 수 없는 아이디 입니다.";
    elem_id.focus();
    return false;
  }

  //글자길이 8자리
  if (strid.length > 8) {
    elem_msg.innerHTML = "8자리 아이디입니다.";
    elem_id.focus();
    return false;
  }

  return true;
};

/**
 * @method check_pw
 * @namespace jsStudy
 * @param {String} pw
 * @return {Boolean} if returns true, then id checking successed
 */
jsStudy.check_pw = function (pw) {
console.log("===============[ jsStudy.check_pw called ]===============");
  var elem_pw1, elem_pw2, elem_msg;
  elem_pw1 = document.getElementById("pw1").value;
  elem_pw2 = document.getElementById("pw2").value;
  elem_msg1 = document.getElementById("msg_pw1");
  elem_msg1.innerHTML = "";
  elem_msg2 = document.getElementById("msg_pw2");
  elem_msg2.innerHTML = "";

  if (elem_pw1.length === 0) {
    elem_msg1.innerHTML = "비밀 번호를 입력해주세요.";
    elem_pw1.focus();
    return false;
  }

  if (elem_pw2.length === 0) {
    elem_msg1.innerHTML = "비밀 번호 확인해주세요.";
    elem_pw1.focus();
    return false;
  }

  if (elem_pw1 !== elem_pw2) {
    elem_msg2.innerHTML = "비밀 번호가 일치하지 않습니다.";
    elem_pw2.focus();
    return false;
  }

  return true;
};



jsStudy.join = function () {
console.log("===============[ jsStudy.join called ]===============");
this.check_id();
this.check_pw();
};
