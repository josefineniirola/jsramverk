const editorModel = {
    baseUrl: window.location.href.includes("localhost") ?
    "http://localhost:1337" :
    "https://jsramverk-editor-jona20.azurewebsites.net/",
    getAllEdits: async function getAllEdits() {
        const response = await fetch(`${editorModel.baseUrl}/editor`);
        const editors = await response.json();
        return editors.data;
    },
    saveEdit: async function saveEdit(object) {
        const response = await fetch(`${editorModel.baseUrl}/editor`, {
            body: JSON.stringify(object),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        });

        const result = await response.json();

        console.log("result", result);
    },
    editEdits: async function editEdits(updateName) {
        // console.log("updatename: ", updateName);
        // console.log("updatenameID", updateName._id);
        const response = await fetch(`${editorModel.baseUrl}/editor`, {
            body: JSON.stringify(updateName),
            headers: {
              'content-type': 'application/json'
            },
            method: 'PUT'
        });
        const result = await response.json();
        console.log("editEdits Frontend Result", result);

    },
    // deleteEdit: async function deleteEdit(deleteId) {
    //     console.log("deletedId: ", deleteId);
    //     const response = await fetch(`${editorModel.baseUrl}/editor`, {
    //         body: JSON.stringify(deleteId),
    //         headers: {
    //           'content-type': 'application/json'
    //         },
    //         method: 'DELETE'
    //     });
    //     const result = await response.json();

    //     console.log("Result from delete", result);
    // }
};


export default editorModel;
