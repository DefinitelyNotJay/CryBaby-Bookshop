export default function Register() {
  return (
    <div>
        <h1>ลงทะเบียน</h1>
      <form action="">
        <div>
          <label htmlFor="">username</label><br/>
          <input type="text" placeholder="username" name="username" />
        </div>
        <div>
          <label htmlFor="">email</label><br/>
          <input type="email" placeholder="email" name="email"/>
        </div>
        <div>
          <label htmlFor="">password</label><br/>
          <input type="password" placeholder="password" name="password"/>
        </div>
        <div>
          <label htmlFor="">role</label><br/>
          <input type="text" placeholder="role" name="role"/>
        </div>
        <button>ยืนยัน</button>
      </form>
    </div>
  );
}
