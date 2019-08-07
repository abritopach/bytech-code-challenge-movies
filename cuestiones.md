## Haz una breve exposición acerca de JavaScript y la interpretación que hace del paradigma de la Orientación a Objetos. En tu exposición, incluye ejemplos que ilustren tus argumentos.

JavaScript es un lenguaje de programación interpretado. Se define como orientado a objetos,​ basado en prototipos, imperativo, débilmente tipado y dinámico.

La programación orientada a objetos es un paradigma de programación que utiliza la abstracción para crear modelos basados ​​en el mundo real. Utiliza diversas técnicas de paradigmas previamente establecidas, incluyendo la modularidad, polimorfismo y encapsulamiento.

Terminología POO
    - Clase: define las características del Objeto.
    - Objeto: una instancia de una Clase.
    - Propiedad: Una característica del Objeto, como el color.
    - Método: Una capacidad del Objeto, como caminar.
    - Constructor: Es un método llamado en el momento de la creación de instancias.
    - Herencia: Una Clase puede heredar características de otra Clase.
    - Encapsulamiento: Una Clase sólo define las características del Objeto, un Método sólo define cómo se ejecuta el Método.
    - Abstracción: La conjunción de herencia compleja, métodos y propiedades que un objeto debe ser capaz de simular en un modelo de la realidad.
    Polimorfismo: Diferentes Clases podrían definir el mismo método o propiedad.

Simulando Programación orientada a objetos en JavaScript 

- Namespace: Un espacio de nombres es un contenedor que permite asociar toda la funcionalidad de un determinado objeto con un nombre único. En JavaScript un espacio de nombres es un objeto que permite a métodos, propiedades y objetos asociarse. La idea de crear espacios de nombres en JavaScript es simple: Crear un único objeto global para las variables, métodos, funciones convirtiendolos en propiedades de ese objeto.

```bash
    // namespace global

    var MIAPLICACION = MIAPLICACION || {};
```

- Objetos: JavaScript tiene varios objetos incluidos en su núcleo, como Math, Object, Array y String.

- Clase: JavaScript es un lenguaje basado en prototipos que no contiene ninguna declaración de clase, como se encuentra, por ejemplo, en C + + o Java. En su lugar, JavaScript utiliza funciones como clases. Definir una clase es tan fácil como definir una función.

```bash
    function Movie() { }
```

- El objeto (ejemplo de clase)

```bash
    function Movie() {
}

var movie1 = new Movie();
var movie2 = new Movie();
```

- Constructor: En JavaScript, la función sirve como el constructor del objeto, por lo tanto, no hay necesidad de definir explícitamente un método constructor. Cada acción declarada en la clase es ejecutada en el momento de la creación de la instancia.

```bash
function Movie() {
  alert('Una instancia de Movie');
}

var movie1 = new Movie();
var movie2 = new Movie();
```

- Propiedad: Las propiedades son variables contenidas en la clase, cada instancia del objeto tiene dichas propiedades.

```bash
function Movie(title) {
  this.title = title;  
  alert('Una instancia de Movie');
}

var movie1 = new Movie();
var movie2 = new Movie();
```

- Métodos: Los métodos siguen la misma lógica que las propiedades, la diferencia es que son funciones y se definen como funciones.

```bash
function Movie(title) {
  this.title = title;  
  alert('Una instancia de Movie');
}

Movie.prototype.getTitle = function() {
  alert ('Title ' + this.title);
};

var movie1 = new Movie();
var movie2 = new Movie();
```

- Herencia: La herencia es una manera de crear una clase como una versión especializada de una o más clases (JavaScript sólo permite herencia simple). La clase especializada comúnmente se llama hija o secundaria, y la otra clase se le llama padre o primaria. En JavaScript la herencia se logra mediante la asignación de una instancia de la clase primaria a  la clase secundaria, y luego se hace la especialización. 

```bash
// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
}
 
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
};
 
// Rectangle - subclass
function Rectangle() {
    Shape.call(this); //call super constructor.
}
 
Rectangle.prototype = Object.create(Shape.prototype);
 
var rect = new Rectangle();
 
rect instanceof Rectangle   // true.
rect instanceof Shape       // true.
 
rect.move(); // Outputs, "Shape moved."
```

## Qué diferencias sustanciales existen respecto a Java o .Net.

- JavaScript no es un lenguaje compilado. JavaScript se integra directamente en las páginas HTML y es interpretado (sin estar compilado) por el cliente (navegador).

- JavaScript está basado en prototipos por lo que debe simular una gran cantidad de características de orientación a objetos que poseen la mayoría de los lenguajes, mientras que Java es un lenguaje de programación orientado a objetos (OOP). JavaScript no utiliza clases, herencias o técnicas habituales en la OOP. No existe la declaración de tipos de variables a utilizar. JavaScript se encarga de ello automáticamente.

- Las referencias a los objetos se comprueban en tiempo real durante la ejecución. En los lenguajes compilados como Java o .Net esa comprobación se efectúa al compilarse.

- En Java la depuración se realiza en dos fases, mientras que en Javascript se realiza en una sola fase, esto implica que en este lenguaje solo el programador se da cuenta si existen errores de sintaxis en el momento en que se ejecuta el programa para realizar una prueba, aunque vale destacar que se pueden emplear herramientas especializadas que permiten interpretar el código en segundo plano.

- Java o .Net son lenguajes fuertemente tipados que no permiten cambios o violaciones en los tipos de datos definidos, es decir, las variables deben ser de un tipo definido y una vez han sido declaradas no se pueden cambiar, lo que lo convierte en un lenguaje no muy flexible.

- En Javascript, por se un lenguaje de tipado débil, una variable puede contener diversos tipos de datos, lo que lo hace un lenguaje muy flexible, sin embargo esta cualidad también puede ser causa de muchos errores si no se tiene bastante cuidado a la hora de escribir y estructurar el código.


## ¿Es posible tener polimorfismo en JavaScript?

Se puede simular el polimorfismo en Javascript de la siguiente forma:

```bash
    function Person(age, weight) {
    this.age=age;
    this.weight=weight;
    this.getInfo=function() {
      return "I am " + this.age + " years old " +
        "and weighs " + this.weight +" kilo.";
    }
  }
 
  function Employee(age, weight, salary){
    this.salary=salary;
    this.age=age;
    this.weight=weight;
    this.getInfo=function() {
      return "I am " + this.age + " years old " +
        "and weighs " + this.weight +" kilo " +
        "and earns " + this.salary + " euros.";
    }
  }
 
  Employee.prototype= new Person();
  Employee.prototype.constructor=Employee;
    // The argument, 'obj', can be of any kind
    // which method, getInfo(), to be executed depend on the object
    // that 'obj' refer to.
  function showInfo(obj) {
    document.write(obj.getInfo()+"<br>");
  }
 
  var person = new Person(50,90);
  var employee = new Employee(43,80,50000);
  showInfo(person);
  showInfo(employee);
```

