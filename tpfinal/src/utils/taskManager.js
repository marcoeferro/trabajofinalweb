 //https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/tasks/1rFHytqiTqHMxmuF6vfr

export default async function getTasks(){
    let response = await fetch("https://firestore.googleapis.com/v1/projects/p-manager-1a182/databases/(default)/documents/tasks/",{method:'GET'})
    let data = await response.json();
    data = await clearDocTasks(data.documents);
    return data;
}

const clearDocTasks = (data) => {
    let filteredData = [];
    data.map((item) => {
      filteredData.push({
        name: item.fields.name.stringValue,
        id: item.fields.id.integerValue,
        deadline: item.fields.deadline.stringValue,
        created: item.fields.created.stringValue
      });
    });
    return filteredData; //clears data
};