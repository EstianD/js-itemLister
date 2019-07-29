var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// FORM SUBMIT EVENT
form.addEventListener('submit', addItem);

// DELETE EVENT
itemList.addEventListener('click', removeItem);

// FILTER EVENT
filter.addEventListener('keyup', filterItems);

// ADD ITEM FUNCTION
function addItem(e){
    e.preventDefault();

    // GET INPUT VALUE
    var newItem = document.getElementById('item').value;

    // CREATE NEW LI ELEMENT
    var li = document.createElement('li');
    // ADD CLASS
    li.className = 'list-group-item';
    // ADD TEXT NODE WITH INPUT VALUE
    li.appendChild(document.createTextNode(newItem));
    
    // CREATE DELETE BUTTON ELEMENT
    var deleteButton = document.createElement('button');

    // ADD CLASSES TO DELETE BUTTON
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    // APPEND TEXT NODE
    deleteButton.appendChild(document.createTextNode('X'));

    // APPEND BUTTON TO LI
    li.appendChild(deleteButton);

    // APPEND LI TO LIST
    itemList.appendChild(li);
}

// REMOVE ITEM FUNCTION
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// FILTER ITEMS FUNCTION
function filterItems(e){
    // CONVERTS TO LOWERCASE
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    
    // CONVERTS TO ARRAY
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}