const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [ {
      sectionOne:{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
      sectionTwo:{ sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    }]
  };

 


function setCourse()
{
    let name = aCourse.name;
    let number=aCourse.code;
    document.getElementById("courseName").innerHTML=name;
    document.getElementById("courseCode").innerHTML=number;
}

function setSection()
{
  let sectionNum= aSection.sectionOne.sectionNum;
  let roomNum= aSection.sectionOne.roomNum;
  document.getElementById("sections").innerHTML=sectionNum;
  document.getElementById("sections").innerHTML=roomNum;

}

setCourse();
setSection();