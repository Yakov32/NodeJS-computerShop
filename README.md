# Description

Пэт-проэкт написаный на Express и sequelize. Представляет из себя смесь блога и магазина. Функционал описан в конце.
___
## Зависимости
+ **linux**
+ **docker-compose**
+ **Make**

## Установка

```bash
git clone https://github.com/Yakov32/NodeJS-computerShop.git

make start

make init_db
```
___
## О проэкте

+ Аунтификация и авторизация с использованием `PassportJS`
+ БД - `Postgres` ORM - `sequelize`, `sequelize-cli`
+ Валидацией покрыты все варианты всех форм проэкта. `express-validation`
+ Используется docker



## Основной функционал
____
+ `/` - главная страница.
    + Поиск система товаров.
    + Поставить лайк товару.
+ `/auth` & `/regist` - регистрация и авторизация.
+ `/profile` профиль пользователя.
    + Сменить аватар.
    + Смотреть избранное, комментарии, лайки, роль.
+ `/items/get/:id` -   страница с 1-м товаром.
    + Написать комментарий.
+ `/items/create` - создать товар.

___
## License
[MIT](https://choosealicense.com/licenses/mit/)
