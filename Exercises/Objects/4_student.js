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
    
    findCourse(code) {
      return this.courses.find(function(course) {return course.code === code});
    }, // what is this callback syntax? => this.courses.filter(({code}) => code === courseCode)[0];
    
    addNote(code, note) {
      let course = this.findCourse(code);
      course.note ? course.note += `; ${note}` : course.note = note;
    },
    
    updateNote(code, note) {
      let course = this.findCourse(code);
      course.note = note;
    },
    
    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) console.log(`${course.name}: ${course.note}`);
      });
    }
  };
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
console.log('//');
foo.updateNote(101, 'Fun course');
foo.viewNotes();