//GET//
export async function getTasks() {
  const response = await fetch(
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/tasks/",
    { method: "GET" }
  );
  let data = await response.json();
  data = clearData(data.documents);
  return data;
}

const clearData = (data) => {
  let filteredData = [];
  data.map((item) => {
    filteredData.push({
      name: item.fields.name.stringValue,
      id: item.name.split("/").pop(),
      deadline: item.fields.deadline.stringValue,
      created: item.fields.created.stringValue,
    });
  });
  return filteredData; //clears data
};
//POST//
const dataBuilder = (name, deadline, created) => {
  return {
    fields: {
      name: {
        stringValue: name,
      },
      deadline: {
        stringValue: deadline,
      },
      created: {
        stringValue: created,
      },
    },
  };
};

export async function postTask(name, deadline, created) {
  const dateID = Date.now();
  const targetUrl =
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/tasks/?documentId=" +
    dateID.toString();
  const options = {
    method: "POST",
    body: JSON.stringify(data),
  };
  const data = dataBuilder(name, deadline, created);
  const response = await fetch(targetUrl, options)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

//PATCH

export async function patchTask(object) {
  const targetUrl =
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/tasks/" +
    object.id.toString(); //url objetivo, object.id es la id del documento a reemplazar
  const data = dataBuilder(object.name, object.deadline, object.created);
  const options = {
    //opciones de funcion fetch.
    method: "PATCH",
    body: JSON.stringify(data),
  };
  let response = await fetch(targetUrl, options)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

//DELETE
export async function deleteTask(targetId) {
  const targetUrl =
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/tasks/" +
    targetId.toString(); //url objetivo, object.id es la id del documento a eliminar
  const options = {
    //opciones de funcion fetch.
    method: "DELETE",
  };
  let response = await fetch(targetUrl, options)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
