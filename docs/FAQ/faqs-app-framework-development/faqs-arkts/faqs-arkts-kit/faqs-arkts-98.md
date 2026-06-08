---
format: md
title: "如何使用Record"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-98
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-98
last_sync: 2026-06-07
sync_hash: b87ef3a3
---
构造一个对象类型，其属性键为“Keys” ，其属性值为“Type”，可用于将一种类型的属性映射到另一种类型。

示例如下：

```
// Define course types
type Course = 'Math' | 'Chinese' | 'English';

// Define grade types
type Grade = number;

// Define student grade record types
type StudentGrades = Record<Course, Grade>;

// Define the type of class grade record, where the key is the student ID and the value is the student's grade record
type ClassGrades = Record<string, StudentGrades>;

interface StudentCourseGrade {
  Math: number,
  Chinese: number,
  English: number
}

let student1: StudentCourseGrade = {
  Math: 90,
  Chinese: 85,
  English: 92
}
let student2: StudentCourseGrade = {
  Math: 78,
  Chinese: 82,
  English: 85
}
let student3: StudentCourseGrade = {
  Math: 95,
  Chinese: 89,
  English: 90
}

// Initialize class grades
const classGrades: ClassGrades = {
  '001': student1,
  '002': student2,
  '003': student3
};

@Entry
@Component
struct Index {
  // Obtain the average grade of a student
  getAverageGrade(studentId: string, grades: ClassGrades): number | null {
    const studentGrades = grades[studentId]; // Obtain corresponding grade data for students
    if (!studentGrades) {
      console.log(`Student with ID ${studentId} not found.`);
      return null;
    }

    const courses = Object.keys(studentGrades) as Course[]; // Course type array
    // Calculate the total grade of the course
    const total = courses.reduce((sum, course) => sum + studentGrades[course], 0);
    return total / courses.length; // Average score
  }

  build() {
    Row() {
      Column() {
        Button('getAverageGrade')
          .onClick(() => {
            // output: 89
            console.log('student average grade is:', this.getAverageGrade('001', classGrades));
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
