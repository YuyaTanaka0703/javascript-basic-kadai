// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// textというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
})