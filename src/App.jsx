import "./App.css";

import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header";
import JournalList from "./components/JournalList/JournalList";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";
import { useLocalStorage } from "./hooks/use-localstorage.hook";

function App() {
  const [items, setItems] = useLocalStorage("data");

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
    if (!item.id) {
      setItems([
        ...mapItems(items),
        {
          ...item,
          date: new Date(item.date),
          id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
        },
      ]);
    } else {
      setItems(
        [...mapItems(items)].map((i) => {
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

  return (
    
      <div className="app">
        <div className="col">
          <div className="header">
            <Header />
            <JournalAddButton />
          </div>
          <LeftPanel>
            <JournalList items={mapItems(items)} />
          </LeftPanel>
        </div>
        <Body>
          <JournalForm onSubmit={addItem} />
        </Body>
      </div>
    
  );
}

export default App;
