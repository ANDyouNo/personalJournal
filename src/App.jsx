
import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header";
import JournalList from "./components/JournalList/JournalList";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";
import { useLocalStorage } from "./hooks/use-localstorage.hook";
import { useState } from "react";
function App() {
  const [items, setItems] = useLocalStorage("data");
	const [selectedItem, setSelectedItem] = useState(null);

  function mapItems(items) {
    if (!items) {
      return [];
    }
    return items.map((i) => ({
      ...i,
      date: new Date(i.date),
    }));
  }

  const addItem = (item) => {
    const mappedItems = mapItems(items);
    const newId =
      mappedItems.length > 0
        ? Math.max(...mappedItems.map((i) => i.id)) + 1
        : 1;

    if (!item.id) {
      setItems([
        ...mappedItems,
        {
          ...item,
          date: new Date(item.date),
          id: newId,
        },
      ]);
    } else {
      setItems(
        mappedItems.map((i) => {
          if (i.id === item.id) {
            return {
              ...item,
            };
          }
          return i;
        })
      );
    }
  };


	const deleteItem = (id) => {
		setItems([...items.filter(i => i.id !== id)])

	}

	const clearForm = () => {
    setSelectedItem(null)
  }

  return (
    <div className="flex p-8 bg-zinc-900 text-white">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-7">
          <Header />
          <JournalAddButton clearForm={clearForm} />
        </div>
        <LeftPanel>
          <JournalList
            items={mapItems(items)}
            setItem={setSelectedItem}
            selectedItem={selectedItem}
          />
        </LeftPanel>
      </div>
      <Body>
        <JournalForm
          onSubmit={addItem}
          data={selectedItem}
          onDelete={deleteItem}
        />
      </Body>
    </div>
  );
}

export default App;
