// ------------------------- テンプレート切替 -------------------------
let currentTemplate = 'default';

window.addEventListener('DOMContentLoaded', () => {
  const savedTemplate = localStorage.getItem('template');
  currentTemplate = savedTemplate || 'default';
  document.body.setAttribute('data-template', currentTemplate);
  document.getElementById('templateSelect').value = currentTemplate;

  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});

// ------------------------- ToDoリスト（保存なし） -------------------------
function addTodo() {
  const ul = document.getElementById('todo');
  const li = document.createElement('li');
  li.setAttribute('contenteditable', 'true');
  li.innerHTML = '<input type="checkbox"> 新しい項目 <button onclick="removeTodo(this)">❌</button>';
  ul.appendChild(li);
}

function removeTodo(button) {
  button.parentElement.remove();
}

// ------------------------- テンプレート切替（見た目のみ） -------------------------
function switchTemplate(template) {
  localStorage.setItem('template', template);
  document.body.setAttribute('data-template', template);
}

// ------------------------- ダークモード切替 -------------------------
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}
