// Переробити скрипт з уроку 32. Зробити наступне:
// 1. Отримати токен на https://github.com/settings/tokens.
// 2. Створити клас для роботи з api github. Даний клас має приймати токен з п1 та ім'я користувача в конструкторі.
// 3. Написати метод getRepos(), який буде робити запит на сервер та повертати результат. В запиті потрібно додати заголовок з вашим токеном (https://docs.github.com/en/rest/overview/authenticating-to-the-rest-api?apiVersion=2022-11-28#basic-authentication). Документація, як використовувати header в fetch (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
// 4. Створити новий екземпляр класу та використати метод з п3 при завантаженні сторінки.

const token = "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";

class GithubApi {
  constructor(token, username) {
    this.token = token;
    this.userName = username;
  }
  async getRepos() {
    const response = await fetch(
      `https://api.github.com/users/${this.userName}/repos`,
      {
        headers: {
          Authorization: `token ${this.token}`,
        },
      }
    );
    return await response.json();
  }
}

window.addEventListener("load", async () => {
  const githubApi = new GithubApi(token, "maximyurin");
  const repositories = await githubApi.getRepos();
  console.log(repositories);
});
