import dayjs from "dayjs";

//GET//
export async function getStories() {
  const response = await fetch(
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/stories/",
    { method: "GET" }
  );
  let data = await response.json();
  data = clearData(data.documents);
  return data;
}

const dateToString = (date) => {
  return date.$D.toString()+"/"+date.$M.toString()+"/"+date.$y.toString()
}; //gets the 10 first characters of the timeStamp string.

const clearData = (data) => {
  let filteredData = [];
  data.map((item) => {
    filteredData.push({
      name: item.fields.name.stringValue,
      id: item.name.split("/").pop(),
      description: item.fields.description.stringValue,
      icon: item.fields.icon.stringValue,
      epicId: item.fields.epicId.integerValue,
      state: item.fields.state.stringValue,
      ownerId: item.fields.ownerId.integerValue,
      assignedTo: item.fields.assignedTo.integerValue,
      created: dateToString(dayjs(tem.fields.created.timestampValue)),
      due: dateToString(dayjs(item.fields.due.timestampValue)),
      started: dateToString(dayjs(item.fields.started.timestampValue)),
      finished: dateToString(dayjs(item.fields.finished.timestampValue)),
    });
  });
  return filteredData; //clears data
};
//dayjs(Date.now()).format('YYYY-MM-DDTHH:mm:ss.SSSZ')
//POST//
const dataBuilder = (name, description, icon, epicId,ownerId, state, points, assignedTo,due,created,started,finished) => {
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
      epicId: {
        integerValue: epicId,
      },
      ownerId: {
        integerValue: ownerId,
      },
      assignedTo: {
        integerValue: assignedTo,
      },
      state: {
        stringValue: state,
      },
      points: {
        integerValue: points,
      },
      created: {
        timestampValue: created,
      },
      due: {
        timestampValue: due,
      },
      started: {
        timestampValue: started,
      },
      finished: {
        timestampValue: finished,
      },
    },
  };
};

export async function postStory(name, description, icon, epicId,ownerId, state, points, assignedTo,due,created,started,finished) {
  const dateID = Date.now();
  const data = dataBuilder(name, description, icon, epicId,ownerId, state, points, assignedTo,due,created,started,finished);
  const targetUrl =
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/stories/?documentId=" +
    dateID.toString();
  const options = {
    method: "POST",
    body: JSON.stringify(data),
  };
  const response = await fetch(targetUrl, options)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export async function patchStory(name, description, icon, epicId,ownerId, state, points, assignedTo,due,created,started,finished,id) {
  const targetUrl =
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/stories/" +
    id.toString(); //url objetivo, object.id es la id del documento a reemplazar
  const data = dataBuilder(name, description, icon, epicId,ownerId, state, points, assignedTo,due,created,started,finished);
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
export async function deleteStory(targetId) {
  const targetUrl =
    "https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/stories/" +
    targetId.toString(); //url objetivo, object.id es la id del documento a eliminar
  const options = {
    //opciones de funcion fetch.
    method: "DELETE",
  };
  let response = await fetch(targetUrl, options)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
