// Переробити скрипт з уроку 32. Зробити наступне:
// 1. Отримати токен на https://github.com/settings/tokens.
// 2. Створити клас для роботи з api github. Даний клас має приймати токен з п1 та ім'я користувача в конструкторі.
// 3. Написати метод getRepos(), який буде робити запит на сервер та повертати результат. В запиті потрібно додати заголовок з вашим токеном (https://docs.github.com/en/rest/overview/authenticating-to-the-rest-api?apiVersion=2022-11-28#basic-authentication). Документація, як використовувати header в fetch (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
// 4. Створити новий екземпляр класу та використати метод з п3 при завантаженні сторінки.

class GithubApi {
  constructor(token, username) {
    this.token = token;
    this.username = username;
  }
  async getRepos() {
    try {
      const response = await fetch(
        `https://api.github.com/users/${this.username}/repos`,
        {
          headers: {
            Authorization: `token ${this.token}`,
          },
        }
      );
      if (!response.ok) {
        if (response.status === 401) {
          // Повторный запрос на обновление токена
          const newToken = await this.updateToken();
          this.token = newToken;
          return this.getRepos();
        }
        throw new Error("Ошибка при выполнении запроса");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async updateToken() {
    // Запрос на обновление токена
    const response = await fetch(`https://api.github.com/token/update`, {
      headers: {
        Authorization: `token ${this.token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Ошибка при обновлении токена");
    }
    const data = await response.json();
    return data.token;
  }
}

window.addEventListener("load", async () => {
  const token =
    "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";
  const githubApi = new GithubApi(token, "maximyurin");
  const repos = await githubApi.getRepos();
  console.log(repos);
});
