let n = document.getElementById("randd")
let re = document.getElementById("result")

class Sort{
bubbleSort(array) {
    let temp;
    let size = array.length;

    for (let i = 0; i < (size - 1); i++) {
        for (let j = 0; j < (size - i) - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        displayStep(i + 1, array);
    }
    return array;
}
insertionSort(array) {
    let key, j;

    for (let i = 0; i < array.length; i++) {
        key = array[i];
        j = i - 1;

        while (j >= 0 && key < array[j]) {
            array[j + 1] = array[j];
            j = j - 1;
        }

        array[j + 1] = key;
       
        displayStep(i + 1, array);
    }

    return array;
}
shellSort(array) {
    let gap = Math.floor(array.length / 2)
    let temp, j
    let majorIteration = 1

    while (gap > 0) {
        re.innerHTML += "<br> รอบใหญ่ที่ " + "("+ majorIteration + ")"+": " + array.join(" ") + "<br>"
        majorIteration++
        
        for (let i = 0; i < array.length; i++) {
            temp = array[i]
            j = i

            while (j >= gap && array[j - gap] > temp) {
                array[j] = array[j - gap]
                j = j - gap
            }
            array[j] = temp
            re.innerHTML += "รอบย่อยที่ " + (i + 1) + ": " + array.join(" ") + "<br>"
        }
        gap = Math.floor(gap / 2)
    }
    return array
}

  displayData(array){ 
    let str = ""

    for(let i = 0;i < array.length;i++){
      str = str + array[i] + " "
    }
    return str
  }
}
let data = []
let mySort = new Sort()

function DisP() {
    data = []
    for (let i = 0; i < n.value; i++) {
        data.push(Math.floor(Math.random() * 100))
    }
    re.innerHTML = "ตัวเลข : " + mySort.displayData(data)+"<br>"
}

function displayStep(step, array) {
    let stepResult = "รอบที่ " + step + " : " + array.join(" ") + "<br>"
    re.innerHTML += stepResult
}
let sortedData = [] 

function bubbleS() {
    console.time("BubbleSort :")
    re.innerHTML += "<br>Before Sort (Bubble Sort): " + mySort.displayData(data) + "<br>" 
    sortedData = mySort.bubbleSort([...data]) 
    re.innerHTML += "After Sort (Bubble Sort): " + mySort.displayData(sortedData) + "<br><br>" 
    console.timeEnd("BubbleSort :")
}

function insertionS() {
    console.time("InsertionSort :")
    re.innerHTML += "<br>Before Sort (Insertion Sort): " + mySort.displayData(data) + "<br>" 
    sortedData = mySort.insertionSort([...data]) 
    re.innerHTML += "After Sort (Insertion Sort): " + mySort.displayData(sortedData) + "<br><br>" 
    console.timeEnd("InsertionSort :")
}

function shellS() {
    console.time("ShellSort :")
    re.innerHTML += "<br>Before Sort (Shell Sort): " + mySort.displayData(data) + "<br>" 
    sortedData = mySort.shellSort([...data]) 
    re.innerHTML += "After Sort (Shell Sort): " + mySort.displayData(sortedData) + "<br><br>" 
    console.timeEnd("ShellSort :")
}

function resetData() {
    n.value = ""
    re.innerHTML = ""
    sortedData = [] 
    console.clear()
}
