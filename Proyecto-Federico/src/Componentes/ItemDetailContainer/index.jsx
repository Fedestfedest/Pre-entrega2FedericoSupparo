import React, { useEffect, useState } from 'react';
import { getProducts } from '../../mock/FakeApi';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
const ItemDetailContainer = () => {
  const [detalleProducto, setDetalleProducto] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts()
      .then((res) => setDetalleProducto(res.find((item) => item.id === '03')))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? <Loader /> : <ItemDetail detalleProducto={detalleProducto} />}
    </div>
  );
};
