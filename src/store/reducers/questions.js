import {
    AGREGAR_PREGUNTAS,
    AGREGAR_PREGUNTAS_ERROR,
    AGREGAR_PREGUNTAS_EXITO,
    COMENZAR_DESCARGA_PREGUNTAS,
    OBETENER_PREGUNTAS_EXITO
  } from "../types";
  //cada reducer tiene su propio state
  const initialState = {
    preguntas: [],
    error: null,
    loading: false,
    productoEliminar: null,
    productoEditar: null,
  };
  export default function (state = initialState, action) {
    switch (action.type) {

      case COMENZAR_DESCARGA_PREGUNTAS:
      case AGREGAR_PREGUNTAS:
        return {
            ...state,
            loading: action.payload,
        };

      case AGREGAR_PREGUNTAS_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };

        case AGREGAR_PREGUNTAS_EXITO:
            return {
                ...state,
                loading: false,
                preguntas: [...state.preguntas, action.payload],
            };

        case OBETENER_PREGUNTAS_EXITO:
            return {
                ...state,
                loading: false,
                preguntas: action.payload,
            };
      default:
        return state;
    }
  }