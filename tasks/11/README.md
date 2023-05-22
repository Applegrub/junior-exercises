## Бинарный поиск

Реализуйте функцию, которая ищет телефонный номер по имени. Телефонная книга отсортирована по именам. Решите это упражнение, используя бинарный поиск.

Функция принимает два параметра phoneBook и name. Первый - это телефонная книга, а второй — имя, которое нужно найти.

Если имени нет в телефонной книге, то функция должна вернуть строку Name not found!, а если телефонная книга пуста, то Phonebook is empty!.

```javascript
const phonebook = [
  { name: 'Alex Bowman', number: '48-2002' },
  { name: 'Aric Almirola', number: '16-1001' },
  { name: 'Bubba Wallace', number: '23-1111' },
];
 
solution(phonebook, 'Alex Bowman'); // '48-2002'
solution(phonebook, 'None'); // 'Name not found!'
solution([], 'Alex Bowman'); // 'Phonebook is empty!'
```