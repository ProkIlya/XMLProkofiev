import {MainPage} from "./pages/main/index.js";

function checkTimeWithWhile() {
    const now = new Date();
    const hours = now.getHours();
    
    while (hours < 12) {
        console.log(`Еще не 12, сейчас ${hours}:${now.getMinutes()}`);
        break; // Прерываем цикл после одного выполнения (для демонстрации)
    }
    
    if (hours >= 12) {
        console.log(`Уже 12 или позже (${hours}:${now.getMinutes()})`);
    }
}
checkTimeWithWhile();
const root = document.getElementById('root');
const mainPage = new MainPage(root);
mainPage.render();