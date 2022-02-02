import { Field, Form, Formik, useFormikContext } from 'formik';
import './App.css';

const INITIAL_VALUES = {
  a: 1,
  b: 2,
}
export function Calculator() {
  const {values} = useFormikContext<typeof INITIAL_VALUES>()
  return (
    <Form className='sm:text-sm'>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="mt-2">
        <label className='mx-1'>
          Value of <strong>a</strong>:
        </label>
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
          Value of <strong>c</strong>:
        </label>
        <Field className="rounded-md border-gray-400 disabled:bg-gray-50" type="number" name="c" value={values.a + values.b} disabled />
      </div>
    </Form>
  )
}

export default function App() {
  return (
    <div id="page-container" className="px-5 py-3">
      <Formik initialValues={INITIAL_VALUES} onSubmit={(values) => console.log(values)}>
        <Calculator />
      </Formik>
    </div>
  )
}