const today = new Date();

const year = today.getFullYear(); // 年を取得
const month = today.getMonth() + 1; // 月を取得 (0から11で返されるため、+1する)
const date = today.getDate(); // 日を取得

console.log(`${year}年${month}月${date}日`);