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
      description: item.fields.description.stringValue,
      storyId: item.fields.storyId.integerValue,
      id: item.name.split("/").pop(),
      dueDate: item.fields.dueDate.timestampValue,
      createdDate: item.fields.createdDate.timestampValue,
    });
  });
  return filteredData; //clears data
};
//POST//
const dataBuilder = (name, description, storyId,createdDate,dueDate) => {
  return {
    fields: {
      name: {
        stringValue: name,
      },
      description: {
        stringValue: description,
      },
      storyId: {
        integerValue: storyId,
      },
      createdDate: {
        timestampValue: createdDate.format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      },
      dueDate: {
        timestampValue: dueDate.format('YYYY-MM-DDTHH:mm:ss.SSSZ')
      }
    },
  };
};

export async function postTask(name, description, storyId,createdDate,dueDate) {
  const dateID = Date.now();
  const data = dataBuilder(name, description, storyId,createdDate,dueDate);
  const targetUrl =
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/tasks/?documentId=" +
    dateID.toString();
  const options = {
    method: "POST",
    body: JSON.stringify(data),
  };
  const response = await fetch(targetUrl, options)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

//PATCH

export async function patchTask(name, description, storyId,createdDate,dueDate,id) {
  const targetUrl =
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/tasks/" +
    id.toString(); //url objetivo, object.id es la id del documento a reemplazar
  const data = dataBuilder(name, description, storyId,createdDate,dueDate);
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
