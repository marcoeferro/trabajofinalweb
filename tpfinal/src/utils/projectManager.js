//GET//
export async function getProjects() {
  const response = await fetch(
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/projects/",
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
      description: item.fields.description.stringValue,
      icon: item.fields.icon.stringValue,
      members: item.fields.members.arrayValue.values,
    });
  });
  return filteredData; //clears data
};

//POST//
const dataBuilder = (name, description, icon) => {
  return {
    fields: {
      name: {
        stringValue: name,
      },
      description: {
        stringValue: description,
      },
      icon: {
        stringValue: icon,
      },
      members: {
        arrayValue: {
          values: [],
        },
      },
    },
  };
};

export async function postProject(name, description, icon,members) {
  const dateID = Date.now();
  const data = dataBuilder(name, description, icon, members);
  const targetUrl =
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/projects/?documentId=" +
    dateID.toString();
  const options = {
    method: "POST",
    body: JSON.stringify(data),
  };
  const response = await fetch(targetUrl, options)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export async function patchProject(name, description, icon, members) {
  const targetUrl =
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/projects/" +
    object.id.toString(); //url objetivo, object.id es la id del documento a reemplazar
  const data = dataBuilder(name, description, icon, members);
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
export async function deleteProject(targetId) {
  const targetUrl =
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/projects/" +
    targetId.toString(); //url objetivo, object.id es la id del documento a eliminar
  const options = {
    //opciones de funcion fetch.
    method: "DELETE",
  };
  let response = await fetch(targetUrl, options)
    .then((response) => response.json())
    .then((data) => console.log(data));
}