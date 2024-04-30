var courses = [{name:'COMPUTERS FROM HI TO AI',numOfStuds:200,numOfLecs:12,ageRange:'من 8 الي 12 سنوات',methods:['عن طريق الانترنت - ','يوديمي - ','في مكان الدورة'],priceBeforeDiscount:2000,finalPrice:1500,img:'youngCourseImg.jpg'},
               {name:'ADVANCED PROGRAMMING',numOfStuds:109,numOfLecs:16,ageRange:'من 13 الي 17 سنوات',methods:['عن طريق الانترنت - ','يوديمي - ','في مكان الدورة'],priceBeforeDiscount:3000,finalPrice:2250,img:'teenCourseImg.jpg'}
              ];
var selectedTab = 1;

var tabs = document.querySelectorAll(".tab");

var coursesContainer1 = document.getElementById("coursesContainer1");
var coursesContainer2 = document.getElementById("coursesContainer2");
var coursesContainer3 = document.getElementById("coursesContainer3");

function selectAgeCourses(tab,tabNum){
    for(var i=0; i<tabs.length;i++){
        tabs[i].classList.remove('selectedTab');
    }
    tab.classList.add('selectedTab')

    var ageCourses;
    if(tabNum == 1){
        ageCourses = courses[0];
    }
    else{
        ageCourses = courses[1];

    }

    var itemsContainer = ``;
    for(var j = 0;j<3;j++){
        itemsContainer+= `<div class="col-md-4">
        <div class="item rounded-4 mb-4" style="background: #ededed;">
            <img class="w-100 rounded-top-4" height="250px" src="images/${ageCourses.img}" alt="">
            <div class="itemInfo p-3">
                <div class="title d-flex justify-content-between align-items-center mb-3">
                    <h3>${ageCourses.name}</h3>
                    <div class="counter d-flex align-items-center gap-2">
                        <img src="images/manCourse.svg" alt="">
                        <span >${ageCourses.numOfStuds}</span>
                    </div>
                </div>
                <h4 class="mb-2">${ageCourses.numOfLecs + ' محاضرات  - '+ageCourses.ageRange}</h4>
                <p>${ageCourses.methods[0]+ageCourses.methods[1]+ageCourses.methods[2]}</p>
                <div class="price mb-3">
                    <span id="priceNow">${ageCourses.finalPrice} ج.م</span>
                    <span id="priceBefore">${ageCourses.priceBeforeDiscount} ج.م</span>
                </div>
                <button>انضم الأن</button>
            </div>
        </div>
    </div>`
    }
    
    coursesContainer1.innerHTML = itemsContainer;
    coursesContainer2.innerHTML = itemsContainer;
    coursesContainer3.innerHTML = itemsContainer;
}