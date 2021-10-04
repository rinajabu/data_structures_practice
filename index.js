///////////////////////////////
//////////// CLASSES //////////
///////////////////////////////

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}.`
    }

    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return "YOU'RE EXPELLED!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} time/s.`
    }

    addScore(score) {
        this.scores.push(score);
        return `Your scores are ${this.scores}.`
    }

    calculateAverage() {
        // let average = 0;
        // this.scores.map(score => average = average + score);
        let sum = this.scores.reduce((a,b) => a + b);
        return sum / this.scores.length;
    }
    // static class method (NOT OFTEN USED)
    static EnrollStudents() {
        return "ENROLLING STUDENTS!"
    }
}

let firstStudent = new Student("Rina", "Abu", 4)

// console.log(firstStudent)
// console.log(firstStudent.fullName());
// console.log(firstStudent.markLate());
// console.log(firstStudent.markLate());
// console.log(firstStudent.markLate());
// console.log(firstStudent.addScore(100));
// console.log(firstStudent.addScore(98));
// console.log(firstStudent.calculateAverage());

///////////////////////////////
//////////// SINGLY LINKED LISTS //////////
///////////////////////////////

// What is a linked list? //
// A data structure that contains a head, tail, and length property
// Consist of nodes, and each node has a value and a pointer to another node or null