import React, { Fragment } from "react";
import "../../pages/Inicio.scss";
import "../Formulario/Formulario.css";
import { Button, Textarea } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";

const Formulario = () => {
  const Formik = useFormik({
    initialValues: {
      nombre: "",
      asunto: "",
      mail: "",
      ciudad: "",
      telefono: "",
      pedido: "",
    },
    //
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El campo nombre es requerido")
        .min(3, "El campo nombre minimo ha de tener 3 caracteres")
        .max(15, "El campo nombre tiene como maximo 15 caracteres"),
      asunto: Yup.string().min(5, "minimo tiene que tener 5 caracteres"),
      mail: Yup.string()
        .required("Campo requerido")
        .email("El formato de email es incorrecto"),
      ciudad: Yup.string(),
      telefono: Yup.number().required("El campo telefono es obligatorio"),
      pedido: Yup.string(),
    }),
    onSubmit: (Values) => {
      console.log(Values);
    },
  });

  return (
    <Fragment>
      <form
        action="https://formsubmit.co/tucorreo@gmail.com"
        method="POST"
        className="form-react"
        margin={"0"}
      >
        <div className="formulario-ori shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <FormControl> 
            <FormControl isRequired>
              <h1 className="fs-2 text-info fw-semibold">PEDIDO</h1>
              <FormLabel className="texto">Nombre</FormLabel>
              <Input
                type="text"
                placeholder="nombre completo"
                name="nombre"
                className="texto"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                value={Formik.values.nombre}
              />
              {Formik.touched.nombre && Formik.errors.nombre ? (
                <div className="error">{Formik.errors.nombre}</div>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel className="texto">Email</FormLabel>
              <Input
                type="email"
                name="mail"
                className="texto"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                value={Formik.values.mail}
              />
              {Formik.touched.mail && Formik.errors.mail ? (
                <div className="error">{Formik.errors.mail}</div>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel className="texto">Ciudad</FormLabel>
              <Input
                type="text"
                name="ciudad"
                className="texto"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                value={Formik.values.ciudad}
              />
            </FormControl>
            <FormControl>
              <FormLabel className="texto">Telefono</FormLabel>
              <Input
                type="number"
                name="telefono"
                className="texto"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                value={Formik.values.telefono}
              />
              {Formik.touched.telefono && Formik.errors.telefono ? (
                <div className="error">{Formik.errors.telefono}</div>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel className="texto">Mensaje</FormLabel>
              <Textarea
                tape="text"
                name="pedido"
                className="texto"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                value={Formik.values.pedido}
              />
            </FormControl>
            <Button
              colorScheme=""
              className="boton"
              type="submit"
              value={Formik.values}
            >
              Enviar
            </Button>
          </FormControl>
        </div>
      </form>
    </Fragment>
  );
};
export default Formulario;
