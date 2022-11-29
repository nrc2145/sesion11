/*
  Se dispara un evento de Node.js
  Requerimos leer un archivo.
  Requerimos enviar una solicitud HTTPs.
  Requerimos modificar el archivo previamente existente.
*/

const readFile = async () => {
  const hasError = Math.random() > 0.9;
  if (hasError) throw new Error("Read failed");

  console.log("Leyendo archivo");
  await delay(1000); // simulamos una actividad asincrona
  return "123456 **** (&% ";
};

const sendHTTP = async (data) => {
  const hasError = Math.random() > 0.95;
  if (hasError) throw new Error("HTTP request failed");

  console.log("Enviado solicitud HTTP: " + data);

  await delay(2000); // simulamos una actividad asincrona
  return "content-type JSON, error 500";
};

const writeFile = async (reponse) => {
  const hasError = Math.random() > 0.95;
  if (hasError) throw new Error("Write failed");

  console.log("Escribiendo Archivo");
  await delay(2000); // simulamos una actividad asíncrona
  return {};
};

const errorHandler = (error) => console.error(error);

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const callFunction = (funcion, duracion) => {
  setTimeout(() => console.log("Ejecutando la funcion: " + funcion), duracion);
};

const proccess = async () => {
  try {
    const data = await readFile();
    console.log("Contenido archivo: " + data);

    const response = await sendHTTP(data);
    console.log("Respuesta servidor http: " + response);

    await writeFile(response);
    console.log("Archivo escrito");
  } catch (error) {
    errorHandler(error);
  }
};

proccess();

// callFunction("A", 0);
// callFunction("B", 0);
// callFunction("C", 0);
// callFunction("D", 1000);
