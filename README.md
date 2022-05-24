# MapChalk
Output of the terrain map in color format and identification of the specified parameters

This task is done using Node.js and the Chalk module. They require installation on a PC.

1. Open the console
2. Go to the folder with these files
3. Run the command: node app

Task in Russian:
В Node.js, c использованием модуля chalk

Создать и заполнить двухмерный массив (размер 10 x 10) случайными целыми числами.
Использовать числа (1,2,3)

Массив представляет собой условную карту местности, числа в ячейках массива - тип местности.
1 - лес,
2 - горы,
3 - пустыни

Реализовать функцию, принимающую координаты ячейки массива и тип местности (числовой код) и возвращающую логическое значение:
Окружена ли заданная точка заданным типом местности полностью

Вывести на экран сгенерированную карту (соответствующим образом раскрасить ячейки с помощью возможностей модуля chalk)
Пример вывода карты размера 5 х 5:
1 1 2 1 1
1 2 2 2 1
1 3 1 7 1
3 1 3 1 1
1 1 1 1 3

Warning!
The solution does not include the case of a point on the boundary.
