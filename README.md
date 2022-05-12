# Проект: Mesto
![alt-screenshot](/images/Screenshot1.png)
### Обзор
- [Описание](#Описание)
- [С чего начать](#С_чего_начать)
- [Языки](#Языки)
------------------

**Описание** <a name = "Описание"></a>


Проект [Mesto](https://aleksandranazhestkina.github.io/mesto/index.html)- это интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки.
![alt-screenshot](/images/Screenchot2.png)

**С чего начать** <a name = "С чего начать"></a>

Проект выложен на github.com. Там его можно скачать в виде архива/ просматривать его прямо на сайте/ редактировать его на сайте/ загрузить репозиторий через gitbash.

 Необходимо иметь:
* Браузер;
* Редактор кода например "Visual Studio Code";
* Gitbash;

**Языки** <a name = "Языки"></a>

Проект сделан на HTM, JavaScript и CSS. В работе для позиционирования использованы flex элементы. Ссылки и значки анимированы с помощью :hover. Адаптивных версий страницы 2, под разные устройства.
Popup профиля открывается при нажатии на кнопку "изменить" и при изменении информации в полях ввода, данные сохраняются на странице в соответствующих местах, а popup закрывается.
Все модальные окна закрываюся нажатием на Esc и на область вне окна.
Popup добавления карточки открывается при нажатии на кнопку "плюс" и дает пользователю добавить название и сслыку на картинку, после чего карточка отображается в начале сетки с карточками. Удаление карточек производится нажатием на значок "корзины". Каждой карточке можно потавить лайк.
При нажатии на картинку в карточках открывается рopup с увеличенной картинкой и заголовком.
Все поля формы проходят "живую" валидацию и являются обязательными. С обозначением минимального и максимального количесвта знаков, кроме поля ввода ссылки на картинку, оно проверяется на ввод ссылки. Текст ошибок стандартный браузерный.
Кнопки "сохранить" и "создать" в формах не активны без прохождения всеми полями валидации.
Валидация и закрытие модальных окон реализовано  с помощью JavaScript.