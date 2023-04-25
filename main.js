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
    const response = await fetch(
      `https://api.github.com/users/${this.username}/repos`,
      {
        headers: {
          Authorization: `token ${this.token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Ошибка при обновлении токена");
    }
    const data = await response.json();
    return data.token;
  }
}

/**
 * Добрый день. У меня тут получилась проблемка. Сначала я создал токен пунктом - "Fine-grained personal access tokens"
 * Протестировал всё работало отлично, но после того как я запушил проект на github, сам github обнаружил и онулировал токен
 * (мне на почту пришло такой сообщение - Your GitHub Personal Access Token has been revoked).
 * Соответственно когда вы скажаете проект на проверку он не будет работать.
 * Сейчася создаю 60-ти дневный токен классическим способом и надеюсь проблем с гитхабом не будет в этом случае!
 * update: С классическим токеном такая же проблема. Я решил что создам новый токен и отправлю вам его лично.
 * А вы введёте его в prompt, надеюсь сработает этот механизм.
 * Я добавил ещё один метод для обновления токена на случай если response status будет равен 401. Надебсь сделал это корректно.
 */

window.addEventListener("load", async () => {
  const token = prompt("Введите токен");
  const container = document.querySelector(".container");
  const githubApi = new GithubApi(token, "maximyurin");
  const userRepositories = await githubApi.getRepos();
  let html = `<h3>Список репозиториев пользователя:</h3>`;
  userRepositories.forEach((repository) => {
    html += `<a href="${repository.html_url}" style="display: block;" target="_blank">${repository.full_name}</a>`;
  });
  container.insertAdjacentHTML("beforeend", html);
  console.log(userRepositories);
});
