import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Signup() {
  const userName = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const notify = () =>
    toast.success("Erfolgreicher Registriert!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    confirmPassword: Yup.string().when("password", (password, field) =>
      password ? field.required().oneOf([Yup.ref("password")]) : field
    ),
  });

  let navigate = useNavigate();
  const routeChange = () => {};

  return (
    <div className="loginContainer">
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
          notify();
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }}
      >
        {({ errors, touched }) => (
          <Form action="/countpage" className="login">
            <h1>SIGNUP</h1>
            <h2>Hi! {userName}</h2>
            <Field
              className="myField"
              name="username"
              placeholder="Enter your name"
              id="name"
            />
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}
            <Field
              className="myField"
              type="email"
              name="email"
              placeholder="Enter your Email"
              id="email"
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
            <Field
              className="myField"
              name="confirmPassword"
              type="password"
              placeholder="Enter your confirmPassword"
              id="confirmPassword"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div>{errors.confirmPassword}</div>
            ) : null}
            <span>
              Alredy you have a Account? <a href="/login">Login</a>
            </span>
            <button
              className="myButton"
              onClick={() => {
                dispatch(loginAction());
                routeChange();
              }}
              type="submit"
              id="myButton"
            >
              Login
            </button>
            <ToastContainer
              position="top-right"
              autoClose={2000}
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

export default Signup;
