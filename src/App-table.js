import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import MaterialDatatable from "material-datatable";
export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const [item, setItem] = useState([]);

  const columns = [
    {
     name: "Libro",
     field: "nombre",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Autor",
     field: "autor",
     options: {
      filter: true,
      sort: true,
     }},
      {
      name: "Año",
      field: "año",
      options: {
       filter: true,
       sort: true,
      }},
      {
        name: "Idioma",
        field: "idioma",
        options: {
         filter: true,
         sort: true,
      }}
    
  
   ];

  const onSubmit = data => {
    
    axios
      .post("http://localhost:5000/api/guardarlibro",data)
      .then(
        (response) => {
          console.log(response.data);
        }
      )
      .catch((error) => {
        console.log(error);
      });
      
    

  }
  
  useEffect(() => {
    cargar();
  }, []);

  const cargar = async() =>{
    const { data } = await axios.get("http://localhost:5000/api/mostrarlibros");

    //const { data } = await axios.get("/api/zona/listar");
    console.log(data);
    setItem(data.libro);
    return null;
  }
  console.log(errors);
  cargar();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="nombre" name="nombre" ref={register} />
      <input type="text" placeholder="autor" name="autor" ref={register} />
      <input type="number" placeholder="año" name="año" ref={register} />
      <input type="text" placeholder="idioma" name="idioma" ref={register} />

      <input type="submit" />
      <br></br>
      <div><h1>Tabla libros</h1></div>
      <div>
      <MaterialDatatable
      title={""}
      data={item}
      columns={columns}
      options={{
  selectableRows: false,
  print: false,
  onlyOneRowCanBeSelected: false,
  textLabels: {
    body: {
      noMatch: "Lo sentimos, no se encuentran registros",
      toolTip: "Sort",
    },
    pagination: {
      next: "Siguiente",
      previous: "Página Anterior",
      rowsPerPage: "Filas por página:",
      displayRows: "de",
    },
  },
  download: false,
  pagination: true,
  rowsPerPage: 10,
  usePaperPlaceholder: true,
  rowsPerPageOptions: [5, 10, 25],
  sortColumnDirection: "desc",
}}

/>
</div>
      
  </form>
  );
}


