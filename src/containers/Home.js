import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerPreguntasAction } from "../store/actions/questionsActions";
import Select from "react-select";

const Home = () => {
  const preguntas = useSelector((state) => state.questions.preguntas);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(obtenerPreguntasAction());
  }, []);

  const [datos, setdatos] = useState({});

  const leerDatos = (value, name) => {
    console.log("escribiendo ", value, " en ", name);

    setdatos({ ...datos, [name]: value });
  };

  const validarEstados = () => {
    //first_name;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div class="form-group">
            {preguntas.length > 0 &&
              preguntas.map((pregunta, key) => (
                <>
                  <h2>{pregunta.title}</h2>
                  <div key={key}>
                    {pregunta.fields.map((input) =>
                      input.type === "text" ? (
                        <>
                          <label>{input.label}</label>
                          <input
                            name={`${input.name}`}
                            type="text"
                            className="form-control"
                            placeholder={input.label}
                            maxLength={30}
                            onChange={(e) =>
                              leerDatos(e.target.value, input.name)
                            }
                          />
                        </>
                      ) : (
                        input.type === "dropdown" && (
                          <>
                            <label>{input.label}</label>
                            <Select
                              defaultValue={input.options[0]}
                              name={input.name}
                              options={input.options} // set list of the data
                              onChange={(e) => leerDatos(e.value, input.name)}
                            />
                          </>
                        )
                      )
                    )}
                  </div>
                  <hr></hr>
                </>
              ))}
          </div>
        </div>
        <div className="col-6 pt-3 ">
          <button className="btn btn-primary">Mostrar dom</button>
          <code></code>
        </div>
      </div>
    </div>
  );
};

export default Home;
