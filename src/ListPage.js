import { useState, useEffect } from 'react';
import { deleteAllItems, getListItems } from './services/fetch-utils';
import ListItemForm from './ListItemForm';
import ListItem from './ListItem';

export default function ListPage() {
  const [listItems, setShoppingList] = useState([]);

  // on load, call the fetchItems function (remember: useEffect)
  useEffect(() => {
    async function fetchItems() {
      const items = await getListItems();
      // fetch the list items and inject them into state
      setShoppingList(items);
    }
    fetchItems();
  }, [listItems]);


  async function handleDeleteClick() {
    // delete all items

    // then call your fetchItems function to fetch and re-display
  }

  return (
    <div className="list-page">
      <button onClick={handleDeleteClick}>New List</button>
      {/* pass fetchItems to the ListItemForm component */}
      <div className='item-list'>
        {/* map through all the list items and render them here */}
        {
          listItems.map((item, i) =>
            <ListItem key={item + i} item={ item }/>
          )
        }
      </div>

    </div>
  );
}
