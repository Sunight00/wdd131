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

function setSection(section)
{
  return `<tr>
  <td>${section.sectionNum}</td>
  <td>${section.roomNum}</td>
  <td>${section.enrolled}</td>
  <td>${section.days}</td>
  <td>${section.instructor}</td></tr>`

}

function renderSections(sections) {
  const html = sections.map(setSection);
  document.getElementById("sections").innerHTML = html.join("");
}

setCourse(aCourse);
renderSections(aCourse.sections);
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];


const nameB=names.filter(x=> x.charAt(0)=="B");
//document.getElementById("oh").innerHTML=nameB;

const len=names.map(lent => lent.length)
//document.getElementById("oh").innerHTML=len;








//  arrays.js

// example 2
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
document.getElementById("oh").innerHTML=gpaPoints;