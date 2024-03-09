export default function Login() {
  return (
    <div>
      <form>
        <label>Email: </label>
        <input type="email" name="email"></input>
        <br />
        <br />
        <label>Password: </label>
        <input type="password" name="password" />
        <br />
        <br />

        <a href="/forgot password">forgotpassword</a>

        <br />
        <br />
        <input type="submit" value="Login" />
        <br />
        <br />
      </form>
    </div>
  );
}
