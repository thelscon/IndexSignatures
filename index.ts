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
// interface IVarious {
//     [index : string | number] : string | number
// }
function valuesAreNumbers (obj : /*IVarious*/ { [index : string | number] : string | number }) : boolean {
    for (let key in obj) {
        if (typeof obj[key] !== 'number') {
            return false ;
        }
    }

    return true ;
}
// console.log ( valuesAreNumbers ( { name : 2 , age : 2 } ) || 'not found' )