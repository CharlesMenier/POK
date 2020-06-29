import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import axios from 'axios';
import Pokemon from "./Pokemon";
import {List} from "antd";

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=999')
        .then(response => {
          setPokemons(response.data.results);
          setLoading(false);
        })
  }, []);

  return (
    <div className="App">
      <List
          header={<div>Pokemon list</div>}
          bordered
          loading={loading}
          dataSource={pokemons}
          renderItem={pokemon => <Pokemon {...pokemon}/>}
          grid={{gutter: 16, column: 4}}
      />
    </div>
  );
}

export default App;
