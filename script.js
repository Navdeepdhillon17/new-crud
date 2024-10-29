const apiBaseURL = "http://localhost:3002";

// Create a new item
async function createItem() {
    const name = document.getElementById('createName').value;
    const description = document.getElementById('createDescription').value;
    const id = 2

    const response = await fetch(`${apiBaseURL}/item/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id, name, description })
    });

    if (response.ok) {
        alert("Item created successfully");
        getItems(); // Refresh item list
    } else {
        alert("Failed to create item");
    }
}

// Get and display all items
async function getItems() {
    const response = await fetch(`${apiBaseURL}/item/get/`, { method: "GET" });
    
    const items = await response.json();

    const itemList = document.getElementById("itemList");
    itemList.innerHTML = ""; // Clear the list

    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `ID: ${item.id}, Name: ${item.name}, Description: ${item.description}`;
        itemList.appendChild(listItem);
    });
}

// Update an existing item
async function updateItem() {
    const id = document.getElementById('updateId').value;
    const name = document.getElementById('updateName').value;
    const description = document.getElementById('updateDescription').value;

    const response = await fetch(`${apiBaseURL}/item/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name, description })
    });

    if (response.ok) {
        alert("Item updated successfully");
        getItems(); // Refresh item list
    } else {
        alert("Failed to update item");
    }
}

// Delete an item
async function deleteItem() {
    const id = document.getElementById('deleteId').value;

    const response = await fetch(`${apiBaseURL}/delete/${id}`, { method: "DELETE" });

    if (response.ok) {
        alert("Item deleted successfully");
        getItems(); // Refresh item list
    } else {
        alert("Failed to delete item");
    }
}
