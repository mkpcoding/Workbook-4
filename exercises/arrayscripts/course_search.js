// declare the courses array
var courses = [
    {
      CourseId: "PROG100",
      Title: "Introduction to HTML/CSS/Git",
      Location: "Classroom 7",
      StartDate: "09/08/22",
      Fee: "100.00",
    },
    {
      CourseId: "PROG200",
      Title: "Introduction to JavaScript",
      Location: "Classroom 9",
      StartDate: "11/22/22",
      Fee: "350.00",
    },
    {
      CourseId: "PROG300",
      Title: "Introduction to Java",
      Location: "Classroom 1",
      StartDate: "01/09/23",
      Fee: "50.00",
    },
    {
      CourseId: "PROG400",
      Title: "Introduction to SQL and Databases",
      Location: "Classroom 7",
      StartDate: "03/16/23",
      Fee: "50.00",
    },
    {
      CourseId: "PROJ500",
      Title: "Introduction to Angular",
      Location: "Classroom 1",
      StartDate: "04/25/23",
      Fee: "50.00",
    }
  ];
  
  // loop through the courses array
  for (var i = 0; i < courses.length; i++) {
    const course = courses[i]
    // check if the CourseId property of the current course matches "PROG200"
    if (courses[i].CourseId == "PROG200") {
      // log the StartDate property of the course
      console.log("The PROG200 course starts on " + courses[i].StartDate);
    }
  }
  