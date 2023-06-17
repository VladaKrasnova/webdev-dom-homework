export const addButton = document.getElementById('add-button');
export const nameInputElement = document.getElementById('name-input');
export const textInputElement = document.getElementById('text-input');
export const listElement = document.getElementById('list');
export const addForm = document.querySelector('.add-form');
export const commentLoading = document.querySelector('.comment-loading');
export const commentsListElements = document.querySelector('.comments-list-loading');

export const getTime = (commentDate) => {
    let date = new Date(commentDate);
    let time = date.toTimeString().slice(0, 5);
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let month =
      date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1;
    let year = Number(String(date.getFullYear()).substring(2));
    return day + '.' + month + '.' + year + ' ' + time;
  };