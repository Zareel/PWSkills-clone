export const courseItems = [
  {
    id: 1,
    title: "Web Development",
  },
  {
    id: 2,
    title: "Data Science",
  },
  {
    id: 3,
    title: "Java",
  },
  {
    id: 4,
    title: "C++",
  },
  {
    id: 5,
    title: "Finance",
  },
];

export const moreItems = [
  {
    id: 11,
    title: "About Us",
  },
  {
    id: 12,
    title: "FAQs",
  },
  {
    id: 13,
    title: "Privacy Policy",
  },
  {
    id: 14,
    title: "Contact Us",
  },
  {
    id: 15,
    title: "Job Assistance",
  },
  {
    id: 16,
    title: "Terms and Conditions",
  },
];

let number = 1;

export const statsContant = [
  {
    id: 111,
    title: "Different Courses",
    image: "../assets/books.svg",
    count: setInterval(() => {
      if (number < 600) {
        number++;
        document.querySelector(".statdiv .statp").innerHTML = number;
      }
    }, 10),
  },

  {
    id: 112,
    title: "Students Enrolled",
    image: "../assets/graduate.svg",
    count: 700000,
  },
  {
    id: 113,
    title: "Successful Transition",
    image: "../assets/transition.svg",
    count: 10000,
  },
];

export const cardContents = [
  {
    id: 1111,
    image: "../assets/cardone.jpg",
    title: "Business Analytics Foundation",
    teacher: "Gopal Sharma",
    status: "FREE",
  },
  {
    id: 1112,
    image: "../assets/cardtwo.jpg",
    title: "C++ Foundation",
    teacher: "Urvi Goel",
    status: "FREE",
  },
  {
    id: 1113,
    image: "../assets/cardthree.jpg",
    title: "Cracking the coding interview in Java - Foundation",
    teacher: "Vishwa Mohan",
    status: "FREE",
  },
];
