import { replaceValue } from "./utils.js";

let host = "https://wedev-api.sky.pro/api/v2/vlada-krasnova/comments";
const loginHost = 'https://webdev-hw-api.vercel.app/api/user/login';

export function getFetch() {
    return fetch(host, {
        method: 'GET',
      }).then((res) => res.json());
};

export function fetchLogin(login, password) {
  return fetch(loginHost, {
    method: 'POST',
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    return response.json();

  })
}

export function postFetch(textInput, token) {
    return fetch(host, {
        method: 'POST',
        body: JSON.stringify({
          text: replaceValue(textInput.value),
          forceError: false,
        }),
        headers : {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((response) => {
        console.log(response);
  
        if (response.status === 201) {
          response.json();
        } else if (response.status === 500) {
          alert('Сервер сломался, попробуйте позже');
        } else if (response.status === 400) {
          alert('Неверный логин или пароль');
        }
    })
}