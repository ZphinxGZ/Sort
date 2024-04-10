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

  displayData(array){ //แสดงผลข้อมูล
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
//spread operator ("...") จะทำให้คุณสร้างตัวแปรใหม่ที่มีค่าเหมือนกับอาร์เรย์เดิม โดยที่ไม่ได้ทำการอ้างอิงถึงอาร์เรย์เดิมโดยตรง 

//.slice() เป็นเมธอดของอาร์เรย์ใน JavaScript ที่ใช้ในการสร้างสำเนาของอาร์เรย์หรือเลือกส่วนหนึ่งของอาร์เรย์เพื่อสร้างอาร์เรย์ใหม่ โดยไม่เปลี่ยนแปลงอาร์เรย์เดิมตัวเอง

function displayStep(step, array) {
    let stepResult = "รอบที่ " + step + " : " + array.join(" ") + "<br>"
    re.innerHTML += stepResult
}
let sortedData = [] // สร้างตัวแปรเก็บข้อมูลที่เรียงลำดับ

function bubbleS() {
    console.time("BubbleSort :")
    re.innerHTML += "<br>Before Sort (Bubble Sort): " + mySort.displayData(data) + "<br>" // แสดง Before Sort
    sortedData = mySort.bubbleSort([...data]) // เรียกเมธอดการเรียงลำดับและเก็บผลลัพธ์ไว้ใน sortedData
    re.innerHTML += "After Sort (Bubble Sort): " + mySort.displayData(sortedData) + "<br><br>" // แสดง After Sort
    console.timeEnd("BubbleSort :")
}

function insertionS() {
    console.time("InsertionSort :")
    re.innerHTML += "<br>Before Sort (Insertion Sort): " + mySort.displayData(data) + "<br>" // แสดง Before Sort
    sortedData = mySort.insertionSort([...data]) // เรียกเมธอดการเรียงลำดับและเก็บผลลัพธ์ไว้ใน sortedData
    re.innerHTML += "After Sort (Insertion Sort): " + mySort.displayData(sortedData) + "<br><br>" // แสดง After Sort
    console.timeEnd("InsertionSort :")
}

function shellS() {
    console.time("ShellSort :")
    re.innerHTML += "<br>Before Sort (Shell Sort): " + mySort.displayData(data) + "<br>" // แสดง Before Sort
    sortedData = mySort.shellSort([...data]) // เรียกเมธอดการเรียงลำดับและเก็บผลลัพธ์ไว้ใน sortedData
    re.innerHTML += "After Sort (Shell Sort): " + mySort.displayData(sortedData) + "<br><br>" // แสดง After Sort
    console.timeEnd("ShellSort :")
}

function resetData() {
    n.value = ""
    re.innerHTML = ""
    sortedData = [] // รีเซ็ตข้อมูลที่เรียงลำดับ
    console.clear()
}
