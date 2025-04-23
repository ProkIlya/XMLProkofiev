/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/add-card-button/index.js":
/*!*********************************************!*\
  !*** ./components/add-card-button/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddCardButtonComponent: () => (/* binding */ AddCardButtonComponent)\n/* harmony export */ });\nclass AddCardButtonComponent {\r\n    constructor(parent) {\r\n        this.parent = parent;\r\n    }\r\n\r\n    getHTML() {\r\n        return `\r\n            <button class=\"btn btn-success\" id=\"add-card-btn\">\r\n                Добавить карточку\r\n            </button>\r\n        `;\r\n    }\r\n\r\n    addListeners(callback) {\r\n        document.getElementById('add-card-btn').addEventListener('click', callback);\r\n    }\r\n\r\n    render(callback) {\r\n        const html = this.getHTML();\r\n        this.parent.insertAdjacentHTML('beforeend', html);\r\n        this.addListeners(callback);\r\n    }\r\n}\n\n//# sourceURL=webpack://lab3files/./components/add-card-button/index.js?");

/***/ }),

/***/ "./components/back-button/index.js":
/*!*****************************************!*\
  !*** ./components/back-button/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BackButtonComponent: () => (/* binding */ BackButtonComponent)\n/* harmony export */ });\nclass BackButtonComponent {\r\n    constructor(parent) {\r\n        this.parent = parent;\r\n    }\r\n\r\n    addListeners(listener) {\r\n        document.getElementById(\"back-button\").addEventListener(\"click\", listener);\r\n    }\r\n\r\n    getHTML() {\r\n        return `<button id=\"back-button\" class=\"btn btn-secondary mb-3\">Назад</button>`;\r\n    }\r\n\r\n    render(listener) {\r\n        const html = this.getHTML();\r\n        this.parent.insertAdjacentHTML('afterbegin', html);\r\n        this.addListeners(listener);\r\n    }\r\n}\n\n//# sourceURL=webpack://lab3files/./components/back-button/index.js?");

/***/ }),

/***/ "./components/discipline-card/index.js":
/*!*********************************************!*\
  !*** ./components/discipline-card/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DisciplineCardComponent: () => (/* binding */ DisciplineCardComponent)\n/* harmony export */ });\nclass DisciplineCardComponent {\r\n    constructor(parent) {\r\n        this.parent = parent;\r\n    }\r\n    \r\n    getHTML(data) {\r\n        return `\r\n            <div class=\"card-container mb-4\" data-title=\"${data.discipline.toLowerCase()}\">\r\n                <div class=\"card\" style=\"width: 24rem;\">\r\n                    <img src=\"${data.imageUrl}\" class=\"card-img-top\" \r\n                         style=\"height: 200px; object-fit: cover; width: 100%;\"\r\n                         alt=\"${data.discipline}\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">${data.discipline}</h5>\r\n                        <p class=\"card-text\">Кафедра: ${data.department}</p>\r\n                        <div class=\"d-flex justify-content-between\">\r\n                            <button class=\"btn btn-primary\" id=\"click-card-${data.id}\" data-id=\"${data.id}\">\r\n                                Подробнее\r\n                            </button>\r\n                            <div>\r\n                                <button class=\"btn btn-warning me-2\" id=\"edit-card-${data.id}\" data-id=\"${data.id}\">\r\n                                    Редактировать\r\n                                </button>\r\n                                <button class=\"btn btn-danger\" id=\"delete-card-${data.id}\" data-id=\"${data.id}\">\r\n                                    Удалить\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        `;\r\n    }\r\n\r\n    addListeners(data, listeners) {\r\n        document.getElementById(`click-card-${data.id}`).addEventListener(\"click\", listeners.details);\r\n        document.getElementById(`edit-card-${data.id}`).addEventListener(\"click\", listeners.edit);\r\n        document.getElementById(`delete-card-${data.id}`).addEventListener(\"click\", listeners.delete);\r\n    }\r\n\r\n    render(data, listeners) {\r\n        const html = this.getHTML(data);\r\n        this.parent.insertAdjacentHTML('beforeend', html);\r\n        this.addListeners(data, listeners);\r\n    }\r\n}\n\n//# sourceURL=webpack://lab3files/./components/discipline-card/index.js?");

/***/ }),

/***/ "./components/palindrome-button/index.js":
/*!***********************************************!*\
  !*** ./components/palindrome-button/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PalindromeButtonComponent: () => (/* binding */ PalindromeButtonComponent)\n/* harmony export */ });\nclass PalindromeButtonComponent {\r\n    constructor(parent) {\r\n        this.parent = parent;\r\n    }\r\n\r\n    getHTML() {\r\n        return `\r\n            <button class=\"btn btn-primary\" id=\"check-palindrome-btn\">\r\n                Поиск палиндрома\r\n            </button>\r\n        `;\r\n    }\r\n\r\n    addListeners(callback) {\r\n        document.getElementById('check-palindrome-btn').addEventListener('click', callback);\r\n    }\r\n\r\n    render(callback) {\r\n        const html = this.getHTML();\r\n        this.parent.insertAdjacentHTML('beforeend', html);\r\n        this.addListeners(callback);\r\n    }\r\n}\n\n//# sourceURL=webpack://lab3files/./components/palindrome-button/index.js?");

/***/ }),

/***/ "./components/swap-cards-button/index.js":
/*!***********************************************!*\
  !*** ./components/swap-cards-button/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SwapCardsButtonComponent: () => (/* binding */ SwapCardsButtonComponent)\n/* harmony export */ });\nclass SwapCardsButtonComponent {\r\n    constructor(parent) {\r\n        this.parent = parent;\r\n    }\r\n\r\n    getHTML() {\r\n        return `\r\n            <button class=\"btn btn-primary\" id=\"swap-cards-btn\">\r\n                Поменять карточки местами\r\n            </button>\r\n        `;\r\n    }\r\n\r\n    addListeners(callback) {\r\n        document.getElementById('swap-cards-btn').addEventListener('click', callback);\r\n    }\r\n\r\n    render(callback) {\r\n        const html = this.getHTML();\r\n        this.parent.insertAdjacentHTML('beforeend', html);\r\n        this.addListeners(callback);\r\n    }\r\n}\n\n//# sourceURL=webpack://lab3files/./components/swap-cards-button/index.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_main_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main/index.js */ \"./pages/main/index.js\");\n\r\n\r\nfunction checkTimeWithWhile() {\r\n    const now = new Date();\r\n    const hours = now.getHours();\r\n    \r\n    while (hours < 12) {\r\n        console.log(`Еще не 12, сейчас ${hours}:${now.getMinutes()}`);\r\n        break; // Прерываем цикл после одного выполнения (для демонстрации)\r\n    }\r\n    \r\n    if (hours >= 12) {\r\n        console.log(`Уже 12 или позже (${hours}:${now.getMinutes()})`);\r\n    }\r\n}\r\ncheckTimeWithWhile();\r\nconst root = document.getElementById('root');\r\nconst mainPage = new _pages_main_index_js__WEBPACK_IMPORTED_MODULE_0__.MainPage(root);\r\nmainPage.render();\n\n//# sourceURL=webpack://lab3files/./main.js?");

/***/ }),

/***/ "./modules/ajax.js":
/*!*************************!*\
  !*** ./modules/ajax.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ajax: () => (/* binding */ ajax)\n/* harmony export */ });\nclass Ajax {\r\n  async get(url) {\r\n    try {\r\n      const response = await fetch(url, {\r\n        credentials: 'include',\r\n        headers: {\r\n          'Accept': 'application/json'\r\n        }\r\n      });\r\n      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);\r\n      return await response.json();\r\n    } catch (error) {\r\n      console.error('GET Error:', error);\r\n      return null;\r\n    }\r\n  }\r\n\r\n  async post(url, data) {\r\n    try {\r\n      const response = await fetch(url, {\r\n        method: 'POST',\r\n        headers: { \r\n          'Content-Type': 'application/json',\r\n          'Accept': 'application/json'\r\n        },\r\n        body: JSON.stringify(data),\r\n        credentials: 'include'\r\n      });\r\n      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);\r\n      return await response.json();\r\n    } catch (error) {\r\n      console.error('POST Error:', error);\r\n      return null;\r\n    }\r\n  }\r\n\r\n  async patch(url, data) {\r\n    try {\r\n      const response = await fetch(url, {\r\n        method: 'PATCH',\r\n        headers: { \r\n          'Content-Type': 'application/json',\r\n          'Accept': 'application/json'\r\n        },\r\n        body: JSON.stringify(data),\r\n        credentials: 'include'\r\n      });\r\n      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);\r\n      return await response.json();\r\n    } catch (error) {\r\n      console.error('PATCH Error:', error);\r\n      return null;\r\n    }\r\n  }\r\n\r\n  async delete(url) {\r\n    try {\r\n      const response = await fetch(url, {\r\n        method: 'DELETE',\r\n        credentials: 'include'\r\n      });\r\n      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);\r\n      return await response.json();\r\n    } catch (error) {\r\n      console.error('DELETE Error:', error);\r\n      return null;\r\n    }\r\n  }\r\n}\r\n\r\nconst ajax = new Ajax();\n\n//# sourceURL=webpack://lab3files/./modules/ajax.js?");

/***/ }),

/***/ "./modules/examUrls.js":
/*!*****************************!*\
  !*** ./modules/examUrls.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   examUrls: () => (/* binding */ examUrls)\n/* harmony export */ });\nclass ExamUrls {\r\n    constructor() {\r\n      this.baseUrl = 'http://localhost:3000';\r\n    }\r\n    getExams() {\r\n      return `${this.baseUrl}/exams`;\r\n    }\r\n    getExamById(id) {\r\n      return `${this.baseUrl}/exams/${id}`;\r\n    }\r\n    createExam() {\r\n      return `${this.baseUrl}/exams`;\r\n    }\r\n    removeExamById(id) {\r\n      return `${this.baseUrl}/exams/${id}`;\r\n    }\r\n    updateExamById(id) {\r\n      return `${this.baseUrl}/exams/${id}`;\r\n    }\r\n    searchExams(query) {\r\n      return `${this.baseUrl}/exams?search=${encodeURIComponent(query)}`;\r\n    }\r\n  }\r\n  const examUrls = new ExamUrls();\n\n//# sourceURL=webpack://lab3files/./modules/examUrls.js?");

/***/ }),

/***/ "./pages/add-edit-exam/index.js":
/*!**************************************!*\
  !*** ./pages/add-edit-exam/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddEditExamPage: () => (/* binding */ AddEditExamPage)\n/* harmony export */ });\n/* harmony import */ var _components_back_button_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/back-button/index.js */ \"./components/back-button/index.js\");\n/* harmony import */ var _main_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/index.js */ \"./pages/main/index.js\");\n/* harmony import */ var _modules_examUrls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/examUrls.js */ \"./modules/examUrls.js\");\n/* harmony import */ var _modules_ajax_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/ajax.js */ \"./modules/ajax.js\");\n\r\n\r\n\r\n\r\n\r\nclass AddEditExamPage {\r\n  constructor(parent, examData = null) {\r\n    this.parent = parent;\r\n    this.examData = examData;\r\n    this.isEditMode = !!examData;\r\n  }\r\n\r\n  getHTML() {\r\n    return `\r\n      <div id=\"add-edit-page\" class=\"container\">\r\n        <h2>${this.isEditMode ? 'Редактирование' : 'Добавление'} карточки</h2>\r\n        <form id=\"exam-form\">\r\n          <div class=\"mb-3\">\r\n            <label>Название дисциплины</label>\r\n            <input type=\"text\" id=\"discipline\" class=\"form-control\" \r\n                   value=\"${this.examData?.discipline || ''}\" required>\r\n          </div>\r\n          <div class=\"mb-3\">\r\n            <label>Кафедра</label>\r\n            <input type=\"text\" id=\"department\" class=\"form-control\" \r\n                   value=\"${this.examData?.department || ''}\" required>\r\n          </div>\r\n          <div class=\"mb-3\">\r\n            <label>Ссылка на изображение</label>\r\n            <input type=\"text\" id=\"imageUrl\" class=\"form-control\" \r\n                   value=\"${this.examData?.imageUrl || ''}\" required>\r\n          </div>\r\n          <div class=\"mb-3\">\r\n            <label>Дата экзамена</label>\r\n            <input type=\"date\" id=\"date\" class=\"form-control\" \r\n                   value=\"${this.examData?.date || ''}\" required>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-primary\">\r\n            ${this.isEditMode ? 'Сохранить' : 'Добавить'}\r\n          </button>\r\n        </form>\r\n      </div>\r\n    `;\r\n  }\r\n\r\n  async handleSubmit(e) {\r\n    e.preventDefault();\r\n    \r\n    const formData = {\r\n        discipline: document.getElementById('discipline').value,\r\n        department: document.getElementById('department').value,\r\n        imageUrl: document.getElementById('imageUrl').value,\r\n        date: document.getElementById('date').value,\r\n        groupGrades: this.examData?.groupGrades || [3, 3, 3, 3, 3]\r\n    };\r\n\r\n    try {\r\n        if (this.isEditMode) {\r\n            await _modules_ajax_js__WEBPACK_IMPORTED_MODULE_3__.ajax.patch(_modules_examUrls_js__WEBPACK_IMPORTED_MODULE_2__.examUrls.updateExamById(this.examData.id), formData);\r\n        } else {\r\n            await _modules_ajax_js__WEBPACK_IMPORTED_MODULE_3__.ajax.post(_modules_examUrls_js__WEBPACK_IMPORTED_MODULE_2__.examUrls.createExam(), formData);\r\n        }\r\n        this.returnToMain();\r\n    } catch (error) {\r\n        console.error('Ошибка при сохранении:', error);\r\n        alert('Произошла ошибка при сохранении данных');\r\n    }\r\n  }\r\n\r\n  returnToMain() {\r\n    const mainPage = new _main_index_js__WEBPACK_IMPORTED_MODULE_1__.MainPage(this.parent);\r\n    mainPage.render();\r\n  }\r\n\r\n  render() {\r\n    this.parent.innerHTML = this.getHTML();\r\n    new _components_back_button_index_js__WEBPACK_IMPORTED_MODULE_0__.BackButtonComponent(this.parent.querySelector('#add-edit-page'))\r\n      .render(this.returnToMain.bind(this));\r\n    document.getElementById('exam-form')\r\n      .addEventListener('submit', this.handleSubmit.bind(this));\r\n  }\r\n}\n\n//# sourceURL=webpack://lab3files/./pages/add-edit-exam/index.js?");

/***/ }),

/***/ "./pages/exam-details/index.js":
/*!*************************************!*\
  !*** ./pages/exam-details/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExamDetailsPage: () => (/* binding */ ExamDetailsPage)\n/* harmony export */ });\n/* harmony import */ var _components_back_button_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/back-button/index.js */ \"./components/back-button/index.js\");\n/* harmony import */ var _main_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/index.js */ \"./pages/main/index.js\");\n/* harmony import */ var _utils_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/functions.js */ \"./utils/functions.js\");\n\r\n\r\n\r\n\r\nclass ExamDetailsPage {\r\n    constructor(parent) {\r\n        this.parent = parent;\r\n    }\r\n\r\n    get pageRoot() {\r\n        return document.getElementById('exam-details-page');\r\n    }\r\n\r\n    getHTML(examData) {\r\n        const groups = [\"ИУ5-41Б\", \"ИУ5-42Б\", \"ИУ5-43Б\", \"ИУ5-44Б\", \"РТ5-41Б\"];\r\n        const gradesInfo = (0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_2__.concatenate)(\r\n            examData.groupGrades.map((grade, i) => `${groups[i]}: ${grade}`),\r\n            \", \"\r\n        );\r\n\r\n        return `\r\n            <div id=\"exam-details-page\" class=\"container\">\r\n                <div class=\"card mb-4\">\r\n                    <img src=\"${examData.imageUrl}\" class=\"card-img-top\" alt=\"${examData.discipline}\" style=\"max-height: 500px; object-fit: cover;\">\r\n                    <div class=\"card-body\">\r\n                        <h2 class=\"card-title\">${examData.discipline}</h2>\r\n                        <p class=\"card-text\">Кафедра: ${examData.department}</p>\r\n                        <p class=\"card-text\">Дата первого экзамена: ${examData.date}</p>\r\n                        <p class=\"card-text\">Средние оценки по группам: ${gradesInfo}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        `;\r\n    }\r\n\r\n    clickBack() {\r\n        const mainPage = new _main_index_js__WEBPACK_IMPORTED_MODULE_1__.MainPage(this.parent);\r\n        mainPage.render();\r\n    }\r\n\r\n    render(examData) {\r\n        this.parent.innerHTML = '';\r\n        const html = this.getHTML(examData);\r\n        this.parent.insertAdjacentHTML('beforeend', html);\r\n\r\n        const backButton = new _components_back_button_index_js__WEBPACK_IMPORTED_MODULE_0__.BackButtonComponent(this.pageRoot);\r\n        backButton.render(this.clickBack.bind(this));\r\n    }\r\n}\n\n//# sourceURL=webpack://lab3files/./pages/exam-details/index.js?");

/***/ }),

/***/ "./pages/main/index.js":
/*!*****************************!*\
  !*** ./pages/main/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainPage: () => (/* binding */ MainPage)\n/* harmony export */ });\n/* harmony import */ var _components_discipline_card_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/discipline-card/index.js */ \"./components/discipline-card/index.js\");\n/* harmony import */ var _exam_details_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exam-details/index.js */ \"./pages/exam-details/index.js\");\n/* harmony import */ var _components_swap_cards_button_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/swap-cards-button/index.js */ \"./components/swap-cards-button/index.js\");\n/* harmony import */ var _components_palindrome_button_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/palindrome-button/index.js */ \"./components/palindrome-button/index.js\");\n/* harmony import */ var _components_add_card_button_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/add-card-button/index.js */ \"./components/add-card-button/index.js\");\n/* harmony import */ var _utils_functions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/functions.js */ \"./utils/functions.js\");\n/* harmony import */ var _modules_examUrls_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/examUrls.js */ \"./modules/examUrls.js\");\n/* harmony import */ var _modules_ajax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/ajax.js */ \"./modules/ajax.js\");\n/* harmony import */ var _add_edit_exam_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-edit-exam/index.js */ \"./pages/add-edit-exam/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass MainPage {\r\n    constructor(parent) {\r\n        this.parent = parent;\r\n        this.examsData = [];\r\n    }\r\n\r\n    get pageRoot() {\r\n        return document.getElementById('main-page');\r\n    }\r\n\r\n    async loadExams(search = '') {\r\n        const url = search ? _modules_examUrls_js__WEBPACK_IMPORTED_MODULE_6__.examUrls.searchExams(search) : _modules_examUrls_js__WEBPACK_IMPORTED_MODULE_6__.examUrls.getExams();\r\n        try {\r\n            const data = await _modules_ajax_js__WEBPACK_IMPORTED_MODULE_7__.ajax.get(url);\r\n            if (data) {\r\n                this.examsData = data;\r\n                this.renderCards();\r\n            } else {\r\n                this.examsData = [];\r\n                this.renderCards();\r\n            }\r\n        } catch (error) {\r\n            console.error('Ошибка загрузки данных:', error);\r\n            this.examsData = [];\r\n            this.renderCards();\r\n        }\r\n    }\r\n\r\n    showDetails(e) {\r\n        const cardId = parseInt(e.target.dataset.id);\r\n        const examData = this.examsData.find(item => item.id === cardId);\r\n        \r\n        if(examData) {\r\n            const examDetailsPage = new _exam_details_index_js__WEBPACK_IMPORTED_MODULE_1__.ExamDetailsPage(this.parent);\r\n            examDetailsPage.render(examData);\r\n        }\r\n    }\r\n\r\n    handleEditCard(e) {\r\n        const cardId = parseInt(e.target.dataset.id);\r\n        const examData = this.examsData.find(item => item.id === cardId);\r\n        \r\n        if(examData) {\r\n            const editPage = new _add_edit_exam_index_js__WEBPACK_IMPORTED_MODULE_8__.AddEditExamPage(this.parent, examData);\r\n            editPage.render();\r\n        }\r\n    }\r\n\r\n    async handleDeleteCard(e) {\r\n        const cardId = parseInt(e.target.dataset.id);\r\n        if (confirm('Вы уверены, что хотите удалить эту карточку?')) {\r\n            try {\r\n                await _modules_ajax_js__WEBPACK_IMPORTED_MODULE_7__.ajax.delete(_modules_examUrls_js__WEBPACK_IMPORTED_MODULE_6__.examUrls.removeExamById(cardId));\r\n                await this.loadExams();\r\n            } catch (error) {\r\n                console.error('Ошибка при удалении:', error);\r\n            }\r\n        }\r\n    }\r\n\r\n    handleAddCard() {\r\n        const addPage = new _add_edit_exam_index_js__WEBPACK_IMPORTED_MODULE_8__.AddEditExamPage(this.parent);\r\n        addPage.render();\r\n    }\r\n\r\n    handleSwapCards() {\r\n        if (this.examsData.length < 2) return;\r\n        (0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_5__.moveElement)(this.examsData, 0, this.examsData.length - 1);\r\n        this.renderCards();\r\n    }\r\n\r\n    handlePalindromeCheck() {\r\n        const palindromes = this.examsData\r\n            .filter(exam => (0,_utils_functions_js__WEBPACK_IMPORTED_MODULE_5__.isPalindrome)(exam.discipline.toLowerCase().replace(/\\s+/g, '')))\r\n            .map(exam => exam.discipline);\r\n        \r\n        if (palindromes.length > 0) {\r\n            alert(`Найдены палиндромы:\\n${palindromes.join('\\n')}`);\r\n        } else {\r\n            alert('Палиндромы не найдены');\r\n        }\r\n    }\r\n\r\n    renderCards() {\r\n        const container = document.getElementById('cards-container');\r\n        container.innerHTML = '';\r\n        \r\n        this.examsData.forEach((item) => {\r\n            const card = new _components_discipline_card_index_js__WEBPACK_IMPORTED_MODULE_0__.DisciplineCardComponent(container);\r\n            card.render(item, {\r\n                details: (e) => this.showDetails(e),\r\n                edit: (e) => this.handleEditCard(e),\r\n                delete: (e) => this.handleDeleteCard(e)\r\n            });\r\n        });\r\n    }\r\n\r\n    render() {\r\n        this.parent.innerHTML = `\r\n            <div id=\"main-page\" class=\"container\">\r\n                <h1 class=\"text-center my-4\">Учебный портал МГТУ им Н.Э. Баумана</h1>\r\n                <div class=\"mb-4\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"search-input\" placeholder=\"Поиск по названию...\">\r\n                </div>\r\n                <div id=\"buttons-container\" class=\"mb-4 d-flex flex-wrap gap-2\"></div>\r\n                <div id=\"cards-container\" class=\"row\"></div>\r\n            </div>\r\n        `;\r\n\r\n        const buttonsContainer = document.getElementById('buttons-container');\r\n        \r\n        // Добавляем все кнопки как было в lab3\r\n        const swapButton = new _components_swap_cards_button_index_js__WEBPACK_IMPORTED_MODULE_2__.SwapCardsButtonComponent(buttonsContainer);\r\n        swapButton.render(this.handleSwapCards.bind(this));\r\n\r\n        const palindromeButton = new _components_palindrome_button_index_js__WEBPACK_IMPORTED_MODULE_3__.PalindromeButtonComponent(buttonsContainer);\r\n        palindromeButton.render(this.handlePalindromeCheck.bind(this));\r\n\r\n        const addButton = new _components_add_card_button_index_js__WEBPACK_IMPORTED_MODULE_4__.AddCardButtonComponent(buttonsContainer);\r\n        addButton.render(this.handleAddCard.bind(this));\r\n\r\n        // Настройка поиска\r\n        document.getElementById('search-input').addEventListener('input', (e) => {\r\n            this.loadExams(e.target.value);\r\n        });\r\n\r\n        // Первоначальная загрузка данных\r\n        this.loadExams();\r\n    }\r\n}\n\n//# sourceURL=webpack://lab3files/./pages/main/index.js?");

/***/ }),

/***/ "./utils/functions.js":
/*!****************************!*\
  !*** ./utils/functions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   concatenate: () => (/* binding */ concatenate),\n/* harmony export */   isPalindrome: () => (/* binding */ isPalindrome),\n/* harmony export */   moveElement: () => (/* binding */ moveElement),\n/* harmony export */   sumUnique: () => (/* binding */ sumUnique)\n/* harmony export */ });\n// 1. Функция перемещения элемента в массиве\r\nfunction moveElement(arr, from, to) {\r\n    const element = arr[from];\r\n    arr.splice(from, 1);\r\n    arr.splice(to, 0, element);\r\n    return arr;\r\n}\r\n\r\n// 2. Функция склеивания строк\r\nfunction concatenate(arr, separator) {\r\n    return arr.join(separator);\r\n}\r\n\r\n// 3. Функция суммы уникальных элементов\r\nfunction sumUnique(arr) {\r\n    const unique = new Set(arr);\r\n    return [...unique].reduce((sum, num) => sum + num, 0);\r\n}\r\n\r\n// 4. Функция проверки палиндрома (2 решения)\r\nfunction isPalindrome(str) {\r\n    // Решение 1: с использованием методов строки и массива\r\n    const cleanStr = String(str).toLowerCase().replace(/\\s+/g, '');\r\n    return cleanStr === cleanStr.split('').reverse().join('');\r\n\r\n    // Решение 2: с использованием цикла\r\n    // const cleanStr = String(str).toLowerCase().replace(/\\s+/g, '');\r\n    // const len = cleanStr.length;\r\n    // for (let i = 0; i < len / 2; i++) {\r\n    //     if (cleanStr[i] !== cleanStr[len - 1 - i]) {\r\n    //         return false;\r\n    //     }\r\n    // }\r\n    // return true;\r\n}\n\n//# sourceURL=webpack://lab3files/./utils/functions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;