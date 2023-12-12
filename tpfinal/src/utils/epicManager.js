//GET//
export async function getEpics() {
    const response = await fetch(
      "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/epics/",
      { method: "GET" }
    );
    let data = await response.json();
    data = clearData(data.documents);
    return data;
  }

export async function getEpicsByProjectId(TargetId){
  const response = await fetch(
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/epics/",
    { method: "GET" }
  );
  let data = await response.json();
  data = clearData(data.documents);
  console.log(data);
  const filteredData = data.filter((epic) => epic.projectId == TargetId);
  console.log(filteredData)
  return filteredData;
}
  
  const clearData = (data) => {
    let filteredData = [];
    data.map((item) => {
      filteredData.push({
        name: item.fields.name.stringValue,
        id: item.name.split("/").pop(),
        description: item.fields.description.stringValue,
        icon: item.fields.icon.stringValue,
        projectId: item.fields.projectId.integerValue,
      });
    });
    return filteredData; //clears data
  };
  
  //POST//
  const dataBuilder = (name, description, icon, projectId) => {
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
        projectId: {
            integerValue: projectId
        }
      },
    };
  };
  
  export async function postEpic(name, description, icon,projectId) {
    const dateID = Date.now();
    const data = dataBuilder(name, description, icon, projectId);
    const targetUrl =
      "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/epics/?documentId=" +
      dateID.toString();
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };
    const response = await fetch(targetUrl, options)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  
  export async function patchEpic(name, description, icon, projectId,id) {
    const targetUrl =
      "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/epics/" +
      id.toString(); //url objetivo, object.id es la id del documento a reemplazar
    const data = dataBuilder(name, description, icon, projectId);
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
  export async function deleteEpic(targetId) {
    const targetUrl =
      "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/epics/" +
      targetId.toString(); //url objetivo, object.id es la id del documento a eliminar
    const options = {
      //opciones de funcion fetch.
      method: "DELETE",
    };
    let response = await fetch(targetUrl, options)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }