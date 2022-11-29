/*
  Se dispara un evento de Node.js
  Requerimos leer un archivo.
  Requerimos enviar una solicitud HTTPs.
  Requerimos modificar el archivo previamente existente.
*/

function readFile(success, error) {
  const hasError = Math.random() > 0.9;
  if (hasError) error({ msg: "Read failed" });

  console.log("Leyendo archivo");

  setTimeout(function () {
    success({});
  }, 1000);
}

function sendHTTP(data, success, error) {
  const hasError = Math.random() > 0.95;
  if (hasError) error({ msg: "HTTP request failed" });

  console.log("Enviado solicitud HTTP");
  setTimeout(function () {
    success({});
  }, 2000);
}

function writeFile(reponse, success, error) {
  const hasError = Math.random() > 0.95;
  if (hasError) error({ msg: "Write failed" });

  console.log("Escribiendo Archivo");
  setTimeout(function () {
    success({});
  }, 2000);
}

function errorHandler(error) {
  console.error(error);
}

// readFile(success, error)
readFile(
  function (data) {
    // sendHTTP(data, success, error)
    sendHTTP(
      data,

      // success
      function (response) {
        writeFile(
          response,
          function (message) {
            console.log("Archivo escrito");
          },
          function (error) {
            errorHandler(error);
          }
        );
      },

      // error
      function (error) {
        errorHandler(error);
      }
    );
  },

  function (error) {
    errorHandler(error);
  }
);
