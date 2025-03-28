import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import { moveElement, concatenate, isPalindrome, sumUnique } from "../../utils/functions.js";

export class FunctionsDemoPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('functions-demo-page');
    }

    getHTML() {
        return `
            <div id="functions-demo-page">
                <h2 class="text-center my-4">Демонстрация функций</h2>
                
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="card h-100">
                            <div class="card-header bg-primary text-white">
                                Демонстрация: moveElement()
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label">Массив (через запятую):</label>
                                    <input type="text" class="form-control" id="array-input" value="1, 2, 3, 4">
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label class="form-label">From (индекс):</label>
                                        <input type="number" class="form-control" id="from-input" value="1" min="0">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">To (индекс):</label>
                                        <input type="number" class="form-control" id="to-input" value="3" min="0">
                                    </div>
                                </div>
                                <button id="move-element-btn" class="btn btn-primary">Выполнить</button>
                                <div class="mt-3">
                                    <div id="move-element-result" class="alert alert-secondary"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 mb-4">
                        <div class="card h-100">
                            <div class="card-header bg-primary text-white">
                                Демонстрация: concatenate()
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label">Массив (через запятую):</label>
                                    <input type="text" class="form-control" id="concatenate-input" value="Я, учусь, на, лучшей, кафедре">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Разделитель:</label>
                                    <input type="text" class="form-control" id="delimiter-input" value=" ">
                                </div>
                                <button id="concatenate-btn" class="btn btn-primary">Объединить</button>
                                <div class="mt-3">
                                    <div id="concatenate-result" class="alert alert-secondary"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="card h-100">
                            <div class="card-header bg-primary text-white">
                                Демонстрация: isPalindrome()
                            </div>
                            <div class="card-body">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" id="palindrome-input" placeholder="Введите строку">
                                    <button class="btn btn-primary" id="check-palindrome">Проверить</button>
                                </div>
                                <div id="palindrome-result"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6 mb-4">
                        <div class="card h-100">
                            <div class="card-header bg-primary text-white">
                                Демонстрация: sumUnique()
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label">Числа (через запятую):</label>
                                    <input type="text" class="form-control" id="sum-unique-input" value="1, 2, 2, 3, 4, 4, 5">
                                </div>
                                <button id="sum-unique-btn" class="btn btn-primary">Вычислить</button>
                                <div class="mt-3">
                                    <div id="sum-unique-result" class="alert alert-secondary"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    addMoveElementDemoListeners() {
        document.getElementById('move-element-btn').addEventListener('click', () => {
            try {
                const arrayInput = document.getElementById('array-input').value;
                const from = parseInt(document.getElementById('from-input').value);
                const to = parseInt(document.getElementById('to-input').value);
                
                const arr = arrayInput.split(',').map(item => item.trim()).filter(Boolean);
                
                if (from < 0 || to < 0 || from >= arr.length || to >= arr.length) {
                    throw new Error('Некорректные индексы!');
                }
                
                const arrCopy = [...arr];
                moveElement(arrCopy, from, to);
                
                document.getElementById('move-element-result').innerHTML = `
                    Исходный массив: [${arr.join(', ')}]<br>
                    Новый порядок: [${arrCopy.join(', ')}]
                `;
            } catch (error) {
                document.getElementById('move-element-result').innerHTML = `
                    <span class="text-danger">Ошибка: ${error.message}</span>
                `;
            }
        });
    }

    addConcatenateDemoListeners() {
        document.getElementById('concatenate-btn').addEventListener('click', () => {
            try {
                const arrayStr = document.getElementById('concatenate-input').value;
                const delimiter = document.getElementById('delimiter-input').value;
                
                const arr = arrayStr.split(',').map(item => item.trim());
                const result = concatenate(arr, delimiter);
                
                document.getElementById('concatenate-result').innerHTML = `
                    <strong>Массив:</strong> [${arr.join(', ')}]<br>
                    <strong>Разделитель:</strong> "${delimiter}"<br>
                    <strong>Результат:</strong> "${result}"
                `;
            } catch (error) {
                document.getElementById('concatenate-result').textContent = `Ошибка: ${error.message}`;
            }
        });
    }

    addPalindromeDemoListeners() {
        document.getElementById('check-palindrome').addEventListener('click', () => {
            const input = document.getElementById('palindrome-input').value;
            const result = isPalindrome(input);
            document.getElementById('palindrome-result').innerHTML = `
                <div class="alert alert-${result ? 'success' : 'danger'}">
                    "${input}" - ${result ? 'палиндром' : 'не палиндром'}
                </div>
            `;
        });
    }

    addSumUniqueDemoListeners() {
        document.getElementById('sum-unique-btn').addEventListener('click', () => {
            try {
                const input = document.getElementById('sum-unique-input').value;
                const numbers = input.split(',').map(item => parseFloat(item.trim())).filter(item => !isNaN(item));
                
                const result = sumUnique(numbers);
                const uniqueNumbers = [...new Set(numbers)];
                
                document.getElementById('sum-unique-result').innerHTML = `
                    <strong>Исходные числа:</strong> [${numbers.join(', ')}]<br>
                    <strong>Уникальные числа:</strong> [${uniqueNumbers.join(', ')}]<br>
                    <strong>Сумма уникальных:</strong> ${result}
                `;
            } catch (error) {
                document.getElementById('sum-unique-result').innerHTML = `
                    <span class="text-danger">Ошибка: ${error.message}</span>
                `;
            }
        });
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));

        this.addMoveElementDemoListeners();
        this.addConcatenateDemoListeners();
        this.addPalindromeDemoListeners();
        this.addSumUniqueDemoListeners();
    }
}