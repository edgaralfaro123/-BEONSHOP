import {
  AGREGAR_PREGUNTAS,
  AGREGAR_PREGUNTAS_ERROR,
  AGREGAR_PREGUNTAS_EXITO,
  OBETENER_PREGUNTAS_EXITO,
  COMENZAR_DESCARGA_PREGUNTAS,
} from "../types";
import preguntaAxios from "../config/axios";

//crear nuevas preguntas
export const crearNuevaPregunta = (pregunta) => async (dispatch) => {
  dispatch(agregarPregunta());

  try {
    //insertar en la api
    await preguntaAxios.post("/questions", pregunta);
    //actualizar state
    dispatch(agregarPreguntaExito(pregunta));
  } catch (error) {
    console.log(error);
    dispatch(agregarPreguntaError(true));
  }
};

const agregarPregunta = () => ({
  type: AGREGAR_PREGUNTAS,
  payload: true,
});

const agregarPreguntaExito = (estado) => ({
  type: AGREGAR_PREGUNTAS_EXITO,
  payload: estado,
});

const agregarPreguntaError = (estado) => ({
  type: AGREGAR_PREGUNTAS_ERROR,
  payload: estado,
});

export const obtenerPreguntasAction = () => async (dispatch) => {
  dispatch({
    type: COMENZAR_DESCARGA_PREGUNTAS,
    payload: true,
  });

  try {
    //insertar en la api
    const datos = await preguntaAxios.get("/questions");

    datos.data.map((question) => {
      let arr = [];
      question.fields.map((field) => {
        if (field.options) {
          field.options.map((option) => {
            arr.push({ label: option, value: option });
          });
          field.options = arr;
        }
      });
    });
    //console.log("datos", datos);
    dispatch(obtenerPreguntasExito(datos.data));
  } catch (error) {
    console.log(error);
  }
};

const obtenerPreguntasExito = (datos) => ({
  type: OBETENER_PREGUNTAS_EXITO,
  payload: datos,
});
