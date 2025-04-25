import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { z } from "zod";

const noteSchema = z.object({
  name: z.string().min(1, "Name is required"),
  topic: z.string().min(1, "Topic is required"),
  description: z.string().min(1, "Description is required"),
});

const validate = (values) => {
  try {
    noteSchema.parse(values);
    return {};
  } catch (error) {
    const errors = {};
    error.errors.forEach((err) => {
      errors[err.path[0]] = err.message;
    });
    return errors;
  }
};

export default function NoteForm() {
  const [submittedNote, setSubmittedNote] = useState(null);

  const initialValues = {
    name: "",
    topic: "",
    description: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Note submitted:", values);
    setSubmittedNote(values);
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Create Note</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4">
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" className="border p-1 w-full" />
            <ErrorMessage name="name" component="div" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="topic">Topic</label>
            <Field name="topic" className="border p-1 w-full" />
            <ErrorMessage name="topic" component="div" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Field as="textarea" name="description" className="border p-1 w-full" />
            <ErrorMessage name="description" component="div" className="text-red-500" />
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
            Submit Note
          </button>
        </Form>
      </Formik>

      {submittedNote && (
        <div className="mt-6 p-4 border-t">
          <h3 className="text-lg font-semibold">Submitted Note</h3>
          <p><strong>Name:</strong> {submittedNote.name}</p>
          <p><strong>Topic:</strong> {submittedNote.topic}</p>
          <p><strong>Description:</strong> {submittedNote.description}</p>
        </div>
      )}
    </div>
  );
}
