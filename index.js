// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям 
// (наприклад, чи всі значення є числами).
// interface IVarious {
//     [index : string | number] : string | number
// }
function valueСhecking(obj) {
    var returnValue = '';
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            if (!returnValue) {
                returnValue = 'number';
            }
            if (returnValue === 'string') {
                returnValue = '';
                break;
            }
        }
        else {
            if (!returnValue) {
                returnValue = 'string';
            }
            if (returnValue === 'number') {
                returnValue = '';
                break;
            }
        }
    }
    if (returnValue) {
        returnValue = "all property is ".concat(returnValue, " type");
    }
    if (typeof obj.name === 'string') {
        returnValue += returnValue ? "\ntype obj.name - string" : "type obj.name - string";
    }
    if (typeof obj.age === 'number') {
        returnValue += returnValue ? "\ntype obj.age - number" : "type obj.age - number";
    }
    return returnValue || false;
}
// console.log ( valueСhecking ( { name : 'name' , age : 2 } ) || 'not found' )
