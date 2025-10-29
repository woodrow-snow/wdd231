const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
// getting div and p from document
const courseSection = document.querySelector("#class-part");
const creditWords = document.querySelector('#total-credits');

displayCards(courses);

function displayCards(fCourses){
    let creditsTotal = 0;

    // making sure everything is cleared first
    deleteCurrentCards();

    fCourses.forEach(course => {
        // getting course number and credit count
        let courseNum = `${course.subject} ${course.number}`;
        creditsTotal += course.credits;

        // getting completed
        let isCompleted = course.completed

        // creating card and storeing in var
        const courseCard = createCard(courseNum,isCompleted);
        
        // adding course to courseSection
        courseSection.appendChild(courseCard);
    });

    // adding credit information
    creditWords.textContent = `The total creadits for course listed above is ${creditsTotal}`;
}

function deleteCurrentCards(){
    // getting all displayed cards
    const allDisplayedCards = document.querySelectorAll('.courseCard');

    allDisplayedCards.forEach(card => {
        card.remove();
    });
}

function createCard(num,comp){
    const card = document.createElement('p');
    card.classList.add('courseCard');
    
    if (comp) {
        card.textContent = `✓ ${num}`;
        card.classList.add('completed');
    }
    else{
        // creating element to contain info
        card.textContent = num;
    }

    return card;
}

function checkSubject(course, subject){
    return course.subject === subject;
}

// Making buttons work
// geting buttons
const allBtn = document.getElementById('all');
const cseBtn = document.getElementById('cse');
const wddBtn = document.getElementById('wdd');

// adding event listeners to buttons
allBtn.addEventListener('click', () => {
    displayCards(courses);
});

cseBtn.addEventListener('click', () => {
    displayCards(courses.filter(course => checkSubject(course, "CSE")));
});

wddBtn.addEventListener('click', () => {
    displayCards(courses.filter(course => checkSubject(course, "WDD")));
});