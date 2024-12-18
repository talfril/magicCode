export const mockTask =
  "Напишите программу, которая находит максимальный элемент в массиве чисел и выводит его в консоль";

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

export const mockCorrectSolution = {
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

export const mockResultDescriptionSuccess = "Браво! Задача решена верно!";

export const mockResultDescriptionUnsuccess = "Это решение неверно, попробуйте ещё раз";

export const mockResultText = "Если массив [3, 5, 7, 2, 8, 1] - максимальное число в массиве - 8"
