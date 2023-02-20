var form = document.getElementById('addForm');
var itemList =document.getElementById('items');
var descr = document.getElementById('des')
var filter =document.getElementById('filter')


// form submit event 
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click',removeItem)
// filter event
filter.addEventListener('keyup',filterItems)


function addItem(e){
    e.preventDefault();
    // Get input value
    var newItem =  document.getElementById('item').value;
    var description =  document.getElementById('des').value;
     // create new li element
    var li = document.createElement('li')
    li.className ='list-group-item';
    // add text node with input value
    const newText = document.createTextNode(newItem)
   const desriptionNode= document.createTextNode(' '+ description)
    li.appendChild(newText);
    li.appendChild(desriptionNode);

    // create del button

    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deletebtn.appendChild(document.createTextNode('x'));
    //append button to li    
    li.appendChild(deletebtn);
    
     var editbtn =document.createElement('button')
     editbtn.className='btn   btn-info   btn-lg float-right edit'
     editbtn.appendChild(document.createTextNode("edit"));
     li.appendChild(editbtn)
    // append li to list
    itemList.appendChild(li);
   
}

// remove item
function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm('are u ready ?'))
        {
            var li =e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}
// filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
//console.log(text)
var items = itemList.getElementsByTagName('li')

//console.log(items);
Array.from(items).forEach(function(item)
{  
   var itemName =item.firstChild.textContent;
   var description1 =item.childNodes[1].textContent;

   //console.log(itemName);
if(itemName.toLowerCase().indexOf(text) != -1 || description1.toLowerCase().indexOf(text) != -1){
    item.style.display ="block";
}
else{
    item.style.display ="none";
    }
});


}
  