import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./redux/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Login() {
  const userName = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const notify = () =>
    toast.success("Erfolgreicher Eingeloggt!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
          notify();
        }}
      >
        {({ errors, touched }) => (
          <Form action="/countpage" className="login">
            <h1>LOGIN</h1>
            <h2>Hi! {userName}</h2>
            <Field
              className="myField"
              name="firstName"
              placeholder="Enter your name"
              id="name"
            />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field
              className="myField"
              name="email"
              placeholder="Enter your password"
              id="password"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field
              className="myField"
              name="password"
              type="password"
              placeholder="Enter your password"
              id="password"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button
              className="myButton"
              onClick={() => {
                dispatch(loginAction());
              }}
              type="submit"
              id="myButton"
            >
              Login
            </button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            ;
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
