import chalk from 'chalk'

function matrix_fill(rows, cols) { // Заполнение матрицы рандомаными числами от 1 до 3
    var arr = []
    for (let i = 0; i < rows; i++) { 
        arr[i] = []
        for (let j = 0; j < cols; j++) { 
            arr[i][j] = Math.floor(Math.random() * 3) + 1  
        }
    }
    return arr
}

function matrix_print(map, rows, cols) { 
    for (let i = 0; i < rows; i++) { 
        for (let j = 0; j < cols; j++) { 
            if (map[i][j] == 1) { 
                process.stdout.write(chalk.green(map[i][j]) + ' '); // Лес
            } else if (map[i][j] == 2) { 
                process.stdout.write(chalk.gray(map[i][j]) + ' '); // Горы
            } else { 
                process.stdout.write(chalk.yellow(map[i][j]) + ' '); // Пустыни
            }
        }
        console.log("\n") // перенос строки для массива
    }
}


function find_surround(map, i, j, type) { 
    if ((0 < i < 9) && (0 < j < 9)) { // Проверка на корректность координаты 
        if ((map[i - 1][j - 1] == map[i - 1][j]) &&
            (map[i - 1][j] == map[i - 1][j + 1]) &&
            (map[i - 1][j + 1] == map[i][j - 1]) &&
            (map[i][j - 1] == map[i][j + 1]) &&
            (map[i][j + 1] == map[i + 1][j - 1]) &&
            (map[i + 1][j - 1] == map[i + 1][j]) &&
            (map[i + 1][j] == map[i + 1][j + 1]) &&
            (map[i + 1][j + 1] == type)) {
        return true 
        } else { 
        return false }
    } else {
    return false }
}

// Проверка на True так как почти никогда рандомно не выпадает окружение
//let map = [[1, 3, 3, 3, 2], [2, 3, 2, 3, 1], [1, 3, 3, 3, 3], [2, 1, 2, 3, 1], [1, 2, 1, 3, 1]]
//var surroundings = find_surround(map, 1, 2, 3)
//matrix_print(map, 5, 5)

let map = matrix_fill(10, 10)
matrix_print(map, 10, 10)
var surroundings = find_surround(map, 5, 4, 2)

if (surroundings == false) {
    console.log("Местность не окружена заданны типом местности")
} 
else {
    console.log("Местность полностью окружена задананным типом местности")
}
