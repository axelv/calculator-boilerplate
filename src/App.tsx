import { Field, Form, Formik, useFormikContext } from 'formik';
import './App.css';

/** 
 * Here your can place the initial values of your calculator. 
 * The key in the detect corresponds to the attribute `name=...` you'll use for the corresponding field.
 */
const INITIAL_VALUES = {
  a: 1,
  b: 2,
  c: false,
}

/**
 * Start editing your calculator here ⬇. 
 * You can but basic JS logic in the body of the function and use the `return` statement for the HTML that should be rendered.
 */
export function Calculator() {

  // 💡 the variable values provides access to all the current values of the form
  const { values } = useFormikContext<typeof INITIAL_VALUES>()

  let result = (values.a + values.b)
  if (values.c) {
    result = result * 2
  }

  // here comes the HTML for your calculator
  return (
    <Form className='sm:text-sm'>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="mt-2">
        <label className='mx-1'>
          Value of <strong>a</strong>:
        </label>
        {/** Notice the `name="a"` attribute! Use this key to retrieve the value of this field: `values.a` */}
        <Field className="rounded-md border-gray-400" type="number" name="a" />
      </div>
      <div className="mt-2">
        <label className='mx-1'>
          Value of <strong>b</strong>:
        </label>
        <Field className="rounded-md border-gray-400" type="number" name="b" />
      </div>
      <div className="mt-2">
        <label className='mx-1'>
          Multiply by two:
        </label>
        <Field className="rounded-md border-gray-400" type="checkbox" name="c" />
      </div>
      <div className="mt-2">
        <label className='mx-1'>
          Value of <strong>c</strong>:
        </label>
        <Field className="rounded-md border-gray-400 disabled:bg-gray-50" type="number" name="d" value={result} disabled />
      </div>
    </Form>
  )
}

/**
 * This App component serves as a container of the calculator and will handle all state updates of the value
 * 
 */
export default function App() {
  return (
    <div id="page-container" className="px-5 py-3">
      <Formik initialValues={INITIAL_VALUES} onSubmit={(values) => window.parent.postMessage(JSON.stringify(values), "*")}>
        <Calculator />
      </Formik>
    </div>
  )
}