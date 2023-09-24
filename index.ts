// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. 
// Наприклад, тип значення для кожного ключа може бути число | рядок.
interface IFirstTask {
    [index : number] : number | string
}


// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. 
// Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
interface ISecondTask {
    [index : string] : (value : unknown) => void
}

// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. 
// Ключі повинні бути числами, а значення - певного типу.
interface IThirdTask {
    [index : number] : number
}

// Створіть інтерфейс з певними властивостями та індексною сигнатурою. 
// Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
interface IFourthTask {
    [index : string] : string | boolean

    name : string
}

// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
type typesOfFunctions = ((value : string) => string) | ((value : number) => number) | ((value : boolean) => boolean)
interface IIndexSignature {
    [property : string] : string | number | boolean | typesOfFunctions
}
interface IFifthTask extends IIndexSignature {
    name : string ,
    age : number ,
    badРabits : boolean ,

    showProperty : (property : string | number | boolean) => boolean
}


// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям 
// (наприклад, чи всі значення є числами).
interface IVarious {
    [index : string | number] : string | number
}
function valueСhecking (obj : IVarious) : string | false {
    let returnValue : string = '' ;
    let stringValues : boolean | null = null ;
    let numberValues : boolean | null = null ;
    for (let key in obj) {

        // если свойство число
        if (typeof obj[key] === 'number') {

            // и это первое вхождение
            if (numberValues === null) {

                // но уже есть строковое ствойство, тогда все свойства и не строки, и не числа
                if (stringValues) {
                    stringValues = false ;
                    break ;
                }

                // или тогда ок
                else {
                    numberValues = true ;
                    stringValues = false ;
                }
            }
            else  {

                // но уже есть строковое ствойство, которое изменило состояние numberValues, тогда все свойства и не строки, и не числа
                if (numberValues === false) {
                    stringValues = false ;
                    break ;
                }
            }
        }

        // если свойство строка
        if (typeof obj[key] === 'string'){

            // и это первое вхождение
            if (stringValues === null) {

                // но уже есть числовое ствойство, тогда все свойства и не строки, и не числа
                if (numberValues) {
                    numberValues = false ;
                    break ;
                }

                // или тогда ок
                else {
                    stringValues = true ;
                    numberValues = false ;
                }
            }
            else {

                // но уже есть числовое ствойство, которое изменило состояние stringValues, тогда все свойства и не строки, и не числа
                if (stringValues === false) {
                    numberValues = false ;
                    break ;
                }
            }
        }
    }

    if (stringValues)
        returnValue = `all property is string type\n` ;
    if (numberValues)
        returnValue = `all property is number type\n` ;
        
    if (typeof obj.name === 'string')
        returnValue += `type obj.name - string\n`
    if (typeof obj.age === 'number')
        returnValue += `type obj.age - number\n`

    return returnValue || false;
}
// console.log ( valueСhecking ( { name : 'tst' , age : 2 } ) || 'not found' )