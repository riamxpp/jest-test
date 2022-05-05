import react, { ReactEventHandler, useState } from 'react';

const List = () => {
  const [products, setProducts] = useState<Array<string>>(["Carro", "Camisa"]);
  const [cont, setCont] = useState<number>(0);

  function addProduct(){
    let newValue = "Novo " + cont
    setProducts(prev => [...prev, newValue]);
    setCont(prev => prev += 1)
  }


  return <>
    <div>
      <button onClick={addProduct}>Adicionar</button>
      <ul>
        {products.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  </>
}

export default List;