import React from "react";
import NoteForm from "./components/NoteForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="w-10 h-10" />
          <h1 className="ml-4 text-2xl font-bold">Notes Application</h1>
        </div>
        <div className="flex space-x-4">
          <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500">
            Авторизація
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">
            Створити записку
          </button>
        </div>
      </header>

      <main className="p-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Welcome to Notes Application</h2>
          <p className="text-lg text-gray-600 mt-4">
            This platform helps you manage your notes. Create, edit, and delete notes effortlessly.
          </p>
        </div>
        <NoteForm />
      </main>

    </div>
  );
}
