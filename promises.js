/*
  Se dispara un evento de Node.js
  Requerimos leer un archivo.
  Requerimos enviar una solicitud HTTPs.
  Requerimos modificar el archivo previamente existente.
*/

const readFile = () =>
  new Promise((resolve, reject) => {
    const hasError = Math.random() > 0.9;
    if (hasError) reject(Error("Read failed"));

    console.log("Leyendo archivo");
    setTimeout(() => resolve({}), 1000);
  });

const sendHTTP = (data) =>
  new Promise((resolve, reject) => {
    const hasError = Math.random() > 0.95;
    // if (hasError) reject({});
    if (hasError) reject(Error("HTTP request failed"));

    console.log("Enviado solicitud HTTP");
    setTimeout(() => resolve({}), 2000);
  });

const writeFile = (reponse) =>
  new Promise((resolve, reject) => {
    const hasError = Math.random() > 0.95;

    if (hasError) reject(Error("Write failed"));

    console.log("Escribiendo Archivo");
    setTimeout(() => resolve({}), 2000);
  });

function errorHandler(error) {
  console.error(error);
}

const callFunction = (funcion, duracion) => {
  setTimeout(() => console.log("Ejecutando la funcion: " + funcion), duracion);
};

readFile()
  .then((data) => sendHTTP(data))
  .then((response) => writeFile(response))
  .then(() => console.log("Archivo escrito"))
  .catch((error) => errorHandler(error));

// callFunction("A", 0);
// callFunction("B", 0);
// callFunction("C", 0);
// callFunction("D", 1000);
