export const getAuthForm = () => {
  return `
          <form class="mui-form" id="auth-form">
            <div class="mui-textfield mui-textfield--float-label">
              <input type="email" id="email" required>
              <label for="email">Е-майл</label>
            </div>
            <div class="mui-textfield mui-textfield--float-label">
              <input type="password" id="password" required>
              <label for="password">Пароль</label>
            </div>
            <button 
            type="submit"
            class="mui-btn mui-btn--raised mui-btn--primary"
            >
              Войти
            </button>
          </form>
`;
};

export const authWithEmailPassword = (email, password) => {
  const apiKey = 'AIzaSyAJMUo05rgPRXw_8c6wlKwkn2E6im50_g0'
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
  method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    }),
    headers: {
    'Content-Type': 'application/json'
    }
  })
      .then(response => response)
      .then(data => data.idToken)
}
