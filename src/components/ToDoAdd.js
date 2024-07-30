// a form using formik

// import { useState } from "react";
import { Formik } from 'formik';

export const ToDoAdd = ({todos, setTodos}) => {

    const initialVals = {
        todo: ""
    }


    return (
        <div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={initialVals}
    //    validate={values => {
    //      const errors = {};
    //      if (!values.email) {
    //        errors.email = 'Required';
    //      } else if (
    //        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //      ) {
    //        errors.email = 'Invalid email address';
    //      }
    //      return errors;
    //    }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);

        const newToDo = {
            todo: values.todo
        }

        setTodos(todos => [...todos, newToDo])

        console.timeLog(todos)

        values.todo = ""

       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type=""
             name="todo"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.todo}
             className="text-black"
           />
           {/* {errors.email && touched.email && errors.email} */}
    
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
    )
}