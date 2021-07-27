/*1. Crear todo el código usando ES5.*/
/*2. Crear una función constructora para cada objeto.*/
/*3. Implementar métodos getters y setters para poder acceder y modificar los datos de
los pacientes.*/

/******PACIENTE*****/
//Función contructora con  métodos propios de Object, como el Object.defineProperty
function Paciente(nombre, edad, rut, diagnostico) {
  var _nombre = nombre;
  var _edad = edad;
  var _rut = rut;
  var _diagnostico = diagnostico;
  //Nombre
  Object.defineProperty(this, "_getNombre", {
    get: function () {
      return _nombre;
    }
  });
  Object.defineProperty(this, "_setNombre", {
    set: function (nombre) {
      _nombre = nombre;
    }
  });
  //Edad
  Object.defineProperty(this, "_getEdad", {
    get: function () {
      return _edad;
    }
  });
  Object.defineProperty(this, "_setEdad", {
    set: function (edad) {
      _edad = edad;
    }
  });
  //Rut
  Object.defineProperty(this, "_getRut", {
    get: function () {
      return _rut;
    }
  });
  Object.defineProperty(this, "_setRut", {
    set: function (rut) {
      _rut = rut;
    }
  });
  //Diagnóstico
  Object.defineProperty(this, "_getDiagnostico", {
    get: function () {
      return _diagnostico;
    }
  });
  Object.defineProperty(this, "_setDiagnostico", {
    set: function (diagnostico) {
      _diagnostico = diagnostico;
    }
  });
}
//Métodos getters y setters
//Nombre
Paciente.prototype.getNombre = function () {
  return this._getNombre;
}
Paciente.prototype.setNombre = function (nombre) {
  this._setNombre = nombre;
}
//Edad
Paciente.prototype.getEdad = function () {
  return this._getEdad;
}
Paciente.prototype.setEdad = function (edad) {
  this._setEdad = edad;
}
//Rut
Paciente.prototype.getRut = function () {
  return this._getRut;
}
Paciente.prototype.setRut = function (rut) {
  this._setRut = rut;
}
//Diagnóstico
Paciente.prototype.getDiagnostico = function () {
  return this._getDiagnostico;
}
Paciente.prototype.setDiagnostico = function (diagnostico) {
  this._setDiagnostico = diagnostico;
}
/******FIN PACIENTE*****/

/******CONSULTORIO*****/
//Función contructora con  métodos propios de Object, como el Object.defineProperty
function Consultorio(nombre, pacientes) {
  var _nombre = nombre;
  var _pacientes = pacientes || [];
  //Nombre
  Object.defineProperty(this, "_getNombre", {
    get: function () {
      return _nombre;
    }
  });
  Object.defineProperty(this, "_setNombre", {
    set: function (nombre) {
      _nombre = nombre;
    }
  });
  //Pacientes
  Object.defineProperty(this, "_getPacientes", {
    get: function () {
      return _pacientes;
    }
  });
  Object.defineProperty(this, "_setPaciente", {
    set: function (paciente) {
      _pacientes.push(paciente);
    }
  });
}
//Métodos getters y setters
//Nombre
Consultorio.prototype.getNombre = function () {
  return this._getNombre;
}
Consultorio.prototype.setNombre = function (nombre) {
  this._setNombre = nombre;
}
//Pacientes
Consultorio.prototype.getPacientes = function () {
  return this._getPacientes;
}
Consultorio.prototype.setPaciente = function (paciente) {
  this._setPaciente = paciente;
}
/******FIN CONSULTORIO*****/

/*4. Crear un método mediante la propiedad prototype que permita buscar los datos de
los usuarios por nombre y otro método que permita mostrar todos los datos de los
usuarios registrados.*/
//Buscar nombre de paciente en consultorio
Consultorio.prototype.buscarNombrePaciente = function (nombre) {
  var pacienteEncontrado = false;
  var largo = this._getPacientes.length;
  for (var i = 0; i < largo; i++)
    if (this._getPacientes[i].getNombre() == nombre) {
      console.log(`${nombre}, esta registrado en el consultorio sus datos son: \nNombre: ${this._getPacientes[i].getNombre()}, Edad: ${this._getPacientes[i].getEdad()}, Rut: ${this._getPacientes[i].getRut()}, Diagnóstico: ${this._getPacientes[i].getDiagnostico()}`);
      pacienteEncontrado = true;
      break;
    }
  if (pacienteEncontrado == false)
    console.log(`${nombre}, No esta registrado en el consultorio`);
}
//Mostrar todos los datos de los pacientes del consultorio
Consultorio.prototype.mostrarDatosPacientes = function () {
  if (this._getPacientes.length == 0)
    console.log(`No hay pacientes registrados en el consultorio`);
  else
    this._getPacientes.forEach(element => {
      console.log(`Nombre: ${element.getNombre()}, Edad: ${element.getEdad()}, Rut: ${element.getRut()}, Diagnóstico: ${element.getDiagnostico()}`);
    });
}

/*5. Instanciar cada objeto utilizando la instrucción new.*/
//Se crea el objeto p0 instanciando a Paciente, en p0 se realizan modificaciones que luego se muestran por pantalla. 
var p0 = new Paciente("pepe", 100, "00.000.00-0", "loco0");
console.log(`***Objeto p0 instancia Paciente, creado: Nombre:${p0.getNombre()}, Edad:${p0.getEdad()}, Rut:${p0.getRut()}, Diagnóstico:${p0.getDiagnostico()}`);
p0.setNombre("pupu");
p0.setEdad(50);
p0.setRut("22.222.222-2");
p0.setDiagnostico("cuerdo");
console.log(`***Objeto p0 luego de modificaciones con set, Nombre:${p0.getNombre()}, Edad:${p0.getEdad()}, Rut:${p0.getRut()}, Diagnóstico:${p0.getDiagnostico()}`);

//Se crean objetos p1 a p5 instanciando a Paciente
var p1 = new Paciente("lala", 10, "11.111.111-1", "loco1");
var p2 = new Paciente("lele", 20, "22.222.222-2", "loco2");
var p3 = new Paciente("lili", 30, "33.333.333-3", "loco3");
var p4 = new Paciente("lolo", 40, "44.444.444-4", "loco4");
var p5 = new Paciente("lulu", 50, "55.555.555-5", "loco5");
console.log(`\n***Se crean objetos p1 a p5 instancia Paciente\n`)
console.log(`Nombre: ${p2.getNombre()}, Edad: ${p2.getEdad()}, Rut: ${p2.getRut()}, Diagnóstico: ${p2.getDiagnostico()}`);
console.log(`Nombre: ${p1.getNombre()}, Edad: ${p1.getEdad()}, Rut: ${p1.getRut()}, Diagnóstico: ${p1.getDiagnostico()}`);
console.log(`Nombre: ${p3.getNombre()}, Edad: ${p3.getEdad()}, Rut: ${p3.getRut()}, Diagnóstico: ${p3.getDiagnostico()}`);
console.log(`Nombre: ${p4.getNombre()}, Edad: ${p4.getEdad()}, Rut: ${p4.getRut()}, Diagnóstico: ${p4.getDiagnostico()}`);
console.log(`Nombre: ${p5.getNombre()}, Edad: ${p5.getEdad()}, Rut: ${p5.getRut()}, Diagnóstico: ${p5.getDiagnostico()}`);

//Se crea el objeto c instanciando a Consultorio, se indica el nombre y se añaden los pacientes a un array pacientes
var c = new Consultorio("Consultorio Lomata", [p1, p2, p3])
console.log(`\n***Se crea el objeto c instancia de Consultorio`);
console.log(`Nombre del consultorio: "${c.getNombre()}"`);
console.log(`Pacientes registrados en consultorio:`);
//Mostrar los datos de todos los pacientes del consultorio
c.mostrarDatosPacientes();

//Buscar los datos de los usuarios (paciente) por nombre
var nom = "lele";
console.log(`\n***Buscando a ${nom} en el consultorio...`)
c.buscarNombrePaciente(nom);

//Agregar paciente
console.log(`\n***Se agrega paciente: ${p4.getNombre()} en el consultorio...`);
c.setPaciente(p4);
console.log(`Pacientes registrados en consultorio:`);

//Mostrar los datos de todos los pacientes del consultorio
c.mostrarDatosPacientes();