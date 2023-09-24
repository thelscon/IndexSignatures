function valueСhecking(obj) {
    var returnValue = '';
    var stringValues = null;
    var numberValues = null;
    for (var key in obj) {
        // если свойство число
        if (typeof obj[key] === 'number') {
            // и это первое вхождение
            if (numberValues === null) {
                // но уже есть строковое ствойство, тогда все свойства и не строки, и не числа
                if (stringValues) {
                    stringValues = false;
                    break;
                }
                // или тогда ок
                else {
                    numberValues = true;
                    stringValues = false;
                }
            }
            else {
                // но уже есть строковое ствойство, которое изменило состояние numberValues, тогда все свойства и не строки, и не числа
                if (numberValues === false) {
                    stringValues = false;
                    break;
                }
            }
        }
        // если свойство строка
        if (typeof obj[key] === 'string') {
            // и это первое вхождение
            if (stringValues === null) {
                // но уже есть числовое ствойство, тогда все свойства и не строки, и не числа
                if (numberValues) {
                    numberValues = false;
                    break;
                }
                // или тогда ок
                else {
                    stringValues = true;
                    numberValues = false;
                }
            }
            else {
                // но уже есть числовое ствойство, которое изменило состояние stringValues, тогда все свойства и не строки, и не числа
                if (stringValues === false) {
                    numberValues = false;
                    break;
                }
            }
        }
    }
    if (stringValues)
        returnValue = "all property is string type\n";
    if (numberValues)
        returnValue = "all property is number type\n";
    if (typeof obj.name === 'string')
        returnValue += "type obj.name - string\n";
    if (typeof obj.age === 'number')
        returnValue += "type obj.age - number\n";
    return returnValue || false;
}
// console.log ( valueСhecking ( { name : 'tst' , age : 2 } ) || 'not found' )
