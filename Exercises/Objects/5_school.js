function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    
    addCourse(course) {
      this.courses.push(course);
    },
    
    listCourses() {
      return this.courses;
    },
    
    // findCourse(code) {
    //   for (let index = 0; index < this.courses.length; index += 1) {
    //     let course = this.courses[index];
    //     if (course['code'] === code) {
    //       return course;
    //     }
    //   }
    // },
    
    findCourseByCode(code) {
      return this.courses.find(function(course) {return course.code === code});
    }, // what is this callback syntax? => this.courses.filter(({code}) => code === courseCode)[0];
    
    findCourseByName(name) {
      return this.courses.find(function(course) {return course.name === name});
    },
    
    addNote(code, note) {
      let course = this.findCourseByCode(code);
      course.note ? course.note += `; ${note}` : course.note = note;
    },
    
    updateNote(code, note) {
      let course = this.findCourseByCode(code);
      course.note = note;
    },
    
    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) console.log(`${course.name}: ${course.note}`);
      });
    }
  };
}

let school = {
  students: [],
  
  addStudent(name, year) {
    const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];
    
    if (!VALID_YEARS.includes(year)) {
      console.log('Invalid Year.');
      return;
    }
    
    let newStudent = createStudent(name, year);
    this.students.push(newStudent);
    return newStudent;
  },
  
  enrollStudent(studentObj, course) {
    studentObj.addCourse(course);
  },
  
  addGrade() {
    // too vague; enrollStudent requirements are also too vague
  },
  
  getReportCard(studentObj) {
    studentObj.courses.forEach(function(course) {
      console.log(`${course.name}: ${course.grade || 'In Progress'}`);
    });
  },
  
  courseReport(course) {
    console.log(`=${course} Grades=`);
    
    let grades = [];
    
    this.students.forEach(student => {
      let foundCourse = student.findCourseByName(course);
      
      if (!foundCourse) return;
      
      if (foundCourse.grade) {
        console.log(`${student.name}: ${foundCourse.grade}`);
        grades.push(foundCourse.grade);
      }
    });
    
    let average = grades.reduce((a,b) => a + b) / grades.length;
    
    console.log('---');
    console.log(`Course Average: ${average}`);
  },
};

let foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
};

let bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
};

let qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
};

school.students.push(foo);
school.students.push(bar);
school.students.push(qux);

school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

school.courseReport('Math');