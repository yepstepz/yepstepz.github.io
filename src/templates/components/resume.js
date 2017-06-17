function findWorkOfDream( vacancy ){
    if ( vacancy.salary == 'good' &&
        vacancy.team == 'professionals' &&
        vacancy.work == 'interesting'){
        return true;
    }
    return false;
}

const goodVacancy = {
    name : 'good vacancy',
    salary : 'good',
    team : 'professionals',
    work : 'interesting'
}

let vacancies = new Set([]);

vacancies.add(goodVacancy);

let workThatIwant = [];
workThatIwant = [...vacancies].filter( (vacancy) => {
    return findWorkOfDream(vacancy);
})

var result = workThatIwant.reduce(function(sum, current, i) {
    if (i>0){
        sum += ', '
    }
    return sum + current.name;
}, '');
console.log('I want ' + result);
// I want good vacancy





