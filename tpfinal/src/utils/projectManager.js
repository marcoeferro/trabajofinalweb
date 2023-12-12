import dayjs from "dayjs";

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
export default getProjects;

const clearData = (data) => {
  let filteredData = [];
  data.map((item) => {
    filteredData.push({
      name: item.fields.name.stringValue,
      id: item.name.split("/").pop(),
      description: item.fields.description.stringValue,
      icon: item.fields.icon.stringValue,
      members: item.fields.members.arrayValue.values,
      state: item.fields.state.stringValue,
      dueDate: item.fields.dueDate.timestampValue
    });
  });
  return filteredData; //clears data
};

//POST//
const dataBuilder = (name, description, icon, members, dueDate) => {
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
      state: {
        stringValue: "todo",
      },
      dueDate: {
        stringValue: dueDate.format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      },
      members: {
        arrayValue: {
          values: members,
        },
      },
    },
  };
};

export async function postProject(name, description, icon, members, dueDate) {
  const dateID = Date.now();
  const data = dataBuilder(name, description, icon, members, dueDate);
  const targetUrl =
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/projects/?documentId=" +
    dateID.toString();
  const options = {
    method: "POST",
    body: JSON.stringify(data),
  };
  const response = await fetch(targetUrl, options)
}

export async function patchProject(name, description, icon, members, dueDate, id) {
  const targetUrl =
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/projects/" +
    id.toString(); //url objetivo, object.id es la id del documento a reemplazar
  const data = dataBuilder(name, description, icon, members, dueDate);
  const options = {
    //opciones de funcion fetch.
    method: "PATCH",
    body: JSON.stringify(data),
  };
  let response = await fetch(targetUrl, options)
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
}