'use strict';

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  },
  showAgeAndLangs: function (plan){
    const {age} = plan;
    const {languages} = plan.skills;
      let str = `Мне ${age} и я владею языками: `;
    languages.forEach((item)=>{
      str += `${item.toUpperCase()} `;
    })
    return str;
    },
}

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// 1)

function showExperience(plan) {
  const {exp} = plan.skills;
  return exp;
}

showExperience(personalPlanPeter);

// 2)

function showProgrammingLangs(plan) {
 let resultString = '';
 const {programmingLangs} = plan.skills;
 for (let key in programmingLangs){
      resultString += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
return resultString;
}

showProgrammingLangs(personalPlanPeter);

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

// P.S. Дальше по курсу мы научимся удобно обращаться из метода к самому объекту, в котором он расположен. Но пока делаем это менее удобным способом)


 


