export default function Signup() {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-[600px] py-[30px] px-[10px] bg-slate-300'>
        <h2>회원가입</h2>
        <form>
          <ul>
            <li>
              <label htmlFor='userEmail'>이메일</label>
              <input type='text' id='userEmail' data-testid='email-input' />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
