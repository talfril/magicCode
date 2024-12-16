export const mockTask =
  "Напишите программу, которая находит максимальный элемент в массиве чисел и выводит его в консоль";

// export const mockTaskExample =
//   "Массив [1, 66, 7, 2, 10, 1], максимальное значение - 66";

export const mockLanguages = ["JavaScript", "Python", "C++"];

export const mockProblemSolution = {
  JavaScript: `function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const array = [3, 5, 7, 2, 8, 1];
console.log(findMax(array));
`,
  Python: `def find_max(arr):
    max_value = arr[0]
    for num in arr[1:]:
        if num > max_value:
            max_value = num
    return max_value

array = [3, 5, 7, 2, 8, 1]
print(find_max(array))`,
  "C++": `#include <iostream>
#include <vector>
using namespace std;

int findMax(const vector<int>& arr) {
    int max = arr[0];
    for (int i = 1; i < arr.size(); i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

int main() {
    vector<int> arr = {3, 5, 7, 2, 8, 1};
    cout << << findMax(arr) << endl;
    return 0;
}
`,
};

export const mockResultDescription = "Браво! Задача решена верно!";

export const mockResultText = "Максимальное число в массиве - 8"
