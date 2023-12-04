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

export async function postProject(name, description, icon) {
  const dateID = Date.now();
  const data = dataBuilder(name, description, icon);
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
