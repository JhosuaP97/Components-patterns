import { Form, Formik } from "formik";
import { MyTextInput } from "../components";
import * as Yup from "yup";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          firstName: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("Requerido")
            .min(2, "El nombre deber de ser minimo de 3 caracteres o más")
            .max(15, "El nombre deber de ser máximo 15 caracteres"),
          email: Yup.string()
            .required("Requerido")
            .email("El email no tiene un formato válido"),
          password1: Yup.string()
            .required("Requerido")
            .min(6, "La contraseña debe ser mínimo de 6 caracteres"),
          password2: Yup.string()
            .required("Requerido")
            .oneOf([Yup.ref("password1")], "Las contraseñas deben ser iguales"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput
              label="Nombre"
              name="firstName"
              placeholder="First name"
            />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="Email"
              type="email"
            />
            <MyTextInput
              label="Password"
              name="password1"
              placeholder="password"
              type="password"
            />
            <MyTextInput
              label="Repeat password"
              name="password2"
              placeholder="Repeat password"
              type="password"
            />
            <button type="submit">Create</button>
            <button type="submit" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
