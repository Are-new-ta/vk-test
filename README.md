<div align="center">
  <img src="https://i.ibb.co/K57tzHj/2024-03-11-15-06-39.png" alt="Скриншот главного экрана сайта VkTest" border="0">
</div>

# Профильное задание - Frontend-разработчик в команду сообществ
Необходимоо создайть простое react приложение, состоящее из одной страницы, которое при открытии будет запрашивать список групп с backend (замокать ответ метода данными из файла `groups.json`).

- Группа может быть закрытой или открытой.
- Группа может иметь аватарку в виде круга диаметром 100px с заливкой цветом, указанным в атрибуте avatar_color.
- Группа может содержать список ваших друзей, состоящих в ней.

После получения списка всех групп список отображается на странице в произвольном виде. В интерфейсе отображается имя группы, аватарка, тип приватности (закрытая / открытая), кол-во подписчиков и друзья.

Над списком групп должен быть набор фильтров, позволяющий выбрать только нужные нам группы. 

Мы должны иметь возможность отфильтровать группы по типу приватности (все / закрытая / открытая), по цвету аватарки (любой / все возможные значения из атрибута avatar_color), наличию друзей в группе

Также нужно учесть, что backend обрабатывает все запросы с задержкой в 1 секунду.

## Усовершенствование кода
При клике на кол-во друзей в блоке группы должен появиться блок с именем и фамилией каждого из друзей, при этотм при стандартном отображении должно быть видно количество друзей.

