// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям 
// (наприклад, чи всі значення є числами).
// interface IVarious {
//     [index : string | number] : string | number
// }
function valuesAreNumbers(obj) {
    for (var key in obj) {
        if (typeof obj[key] !== 'number') {
            return false;
        }
    }
    return true;
}
// console.log ( valuesAreNumbers ( { name : 2 , age : 2 } ) || 'not found' )
