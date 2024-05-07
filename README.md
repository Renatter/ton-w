# Vue Ton ()

## Quick Start

```bash
1. Заходим на cайт  https://firebase.google.com/  и жмем Get started
2. Шаг (1 из 3) Жмем кнопку Create a project выбераем название например "ton-web" и принимаем соглашение
3. Шаг (2 из 3) Жмем кнопку Continue
4. Шаг (3 из 3) Нажимаем на галочку I accept the Google Analytics terms и жмем кнопку Create project
5. Когда проект создан жмем continue
6. Внизу текста Get started by adding Firebase to your app есть кнопка Web, нажимаем на неё
7. Пишем название приложения, например: ton-web, и жмем галочку, после этого кликаем на Register app
8. Нужно скопировать конфиг firebaseConfig:
apiKey: "***",
authDomain: "***",
projectId: "***",
storageBucket: "***",
messagingSenderId: "***",
appId: "***",
measurementId: "***",
и вставить в  файл проекта src/firebase/firebase.js, сохраняем файл после переходим обратно на страницу и кликаем Next, Next, Continue to console
9. С левой стороны экрана будет меню кнопок, кликаем на Build -> Firestore Database и Create database. 
10.В открывшемся окне кликаем на Next, Create и ждем
11. С левой стороны экрана появится кнопка Firestore Database, нажимаем и переходим на страницу базы, это наша база данных.
12. Сверху будет кнопка Rules, кликаем по ней и в allow read, write: if false; меняем на allow read, write: if true и кликаем на Publish
13. Заходим на наше приложение в терминале пишем 1) npm install 2) npm run dev, после можно использовать.

```
