Запусти команды в терминале и сделай отдельный скриншот результата выполнения
каждой команды.

# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://monosnap.com/file/FvoY7nFNAcIbZgEMLqlRgupuBK1aKT

# Получаем контакт по id

node index.js --action get --id 5
https://monosnap.com/file/AK9apvL77dA6yRn8LKQg6Rfg5EE90s

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone
322-22-22 https://monosnap.com/file/jOpk8nKNxmckPiVVWImsbJ4E3Uj7lD

# Удаляем контакт

node index.js --action remove --id=3
https://monosnap.com/file/rrX7giw3pR3ewh5HV7cqnhA0bJZFJ3
