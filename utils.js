export const replaceValue = (value) => {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll('QUOTE_BEGIN', '<div class="quote">')
        .replaceAll('QUOTE_END', '</div>');
};

export function correctDate({ date }) {
    let year = editYear((new Date(date)).getFullYear());
    let month = addZeroBefore((new Date(date)).getMonth() + 1);
    let day = addZeroBefore((new Date(date)).getDate());
    let hours = addZeroBefore((new Date(date)).getHours());
    let minutes = addZeroBefore((new Date(date)).getMinutes());

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}
