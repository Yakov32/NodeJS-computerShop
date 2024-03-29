# Описание

Пэт-проэкт написаный на NodeJS Express. Представляет из себя смесь блога и магазина. Функционал описан ниже.
___
## Зависимости:
+ **docker**
+ **docker-compose**
+ **Make**

## Установка

```bash
git clone https://github.com/Yakov32/NodeJS-computerShop.git

make start

make init_db
```

## Запуск тестов
``` bash

make goin

npm test
```
___
## О проекте

+ Аунтификация и авторизация с использованием `PassportJS`
+ БД - `Postgres` ORM - `sequelize`, `sequelize-cli`
+ Валидацией покрыты все варианты всех форм проэкта. `express-validation`
+ загрузка файлов с помощью `multer`
+ Контейнеризирован. `docker`
+ Тесты сделаны с помощью `mocha`, `chai`, `sinon`



## Навигация
____
+ `/` - главная страница.
    + Поиск система товаров.
    + Поставить лайк товару.
+ `/auth` & `/regist` - регистрация и авторизация.
+ `/profile` профиль пользователя.
    + Сменить аватар.
    + Смотреть избранное, комментарии, лайки, роль.
+ `/items/get/:id` -   страница с 1-м товаром.
    + Смотреть комментарии.
    + Написать комментарий.
    + Поставить лайк.
+ `/items/create` - создать товар.

___
## License
[MIT](https://choosealicense.com/licenses/mit/)
