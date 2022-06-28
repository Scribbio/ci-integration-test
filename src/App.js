import logo from "./logo.svg";
import "./App.css";
import StoreList from "./components/StoreList/StoreList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StoreList
          stores={[
            { id: 1, address: "4 Privet Drive" },
            { id: 2, address: "Bag end, Hobbiton Hill" },
            { id: 3, address: "600 Pennsylvania Avenue" },
            { id: 3, address: "221B Baker St" },
          ]}
          sale={false}
          loadData={() => {}}
        />
      </header>
    </div>
  );
}

export default App;
