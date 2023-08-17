import { useEffect, useState } from "react";

let userInfo = {
  userEmail: '',
  userPw: '',
}

let checkEmailMessage = {
  emailFlag: false,
  emailMessage: '이메일에는 @ 가 포함되어야합니다',
}

let checkPwMessage = {
  pwFlag: false,
  pdMessage: '비밀번호는 8자 이상이어야합니다.',
}

export default function Signup() {
  const [info, setInfo] = useState(userInfo)
  const {userEmail, userPw} = info

  const [checkEmail, setCheckEmail] = useState(checkEmailMessage)
  const {emailFlag, emailMessage} = checkEmail
  const [checkPw, setCheckPw] = useState(checkPwMessage)
  const {pwFlag, pdMessage} = checkPw

  const [checkSubmit, setCheckSubmit] = useState(true)

  function getUserInfo(e) {
    const {id, value} = e.target
    if(id === 'userEmail'){
      emailRegex(value)
    }
    if(id === 'userPw'){
      pwRegex(value)
    }
    userInfo = {
      ...userInfo,
      [id]: value,
    }
    setInfo(userInfo)
  }

  useEffect(() => {
    if(!emailFlag && !pwFlag){
      setCheckSubmit(false)
    }
  }, [emailFlag, pwFlag])

  function emailRegex(value){ // 이메일 유효성 검사
    const str = value
    const regex = /[@]/g
    checkEmailMessage = {
      ...checkEmailMessage,
      emailFlag: !regex.test(str) ? true : false,
    }
    setCheckEmail(checkEmailMessage)
  }

  function pwRegex(value){ // 패스워드 유효성 검사
    const str = value
    checkPwMessage = {
      ...checkPwMessage,
      pwFlag: str.length < 8 ? true : false
    }
    setCheckPw(checkPwMessage)
  }
  function sendUserInfo(e){
    e.preventDefault()
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-[600px] py-[30px] px-[10px]'>
        <h2>회원가입</h2>
        <form>
          <ul>
            <li>
              <label htmlFor='userEmail'>이메일</label>
              <input type='text' id='userEmail' data-testid='email-input' className='border border-[#333]' onChange={getUserInfo} value={userEmail}  />
            </li>
            {emailFlag && <li className='text-[#9b111e]'>{emailMessage}</li>}
            <li>
              <label htmlFor='userPw'>비밀번호</label>
              <input type='text' id='userPw' data-testid='password-input' className='border border-[#333]' onChange={getUserInfo} value={userPw} />
            </li>
            {pwFlag && <li className='text-[#9b111e]'>{pdMessage}</li>}
            <li>
              <button type='submit' id='userPw' data-testid='signup-button' onClick={sendUserInfo} disabled={checkSubmit}>회원가입</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
