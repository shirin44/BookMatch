import React, { useState } from "react";

const categories = ["Fiction", "Science", "Fantasy", "Mystery", "History"];
const languages = [
  { code: "en", name: "English" },
  { code: "vi", name: "Vietnamese" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" }
];

const Questionnaire = ({ onSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [minRating, setMinRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedCategory, selectedLanguage, minRating);
  };

  return (
    <form className="flex flex-col space-y-4 p-6 bg-gray-100 rounded-md" onSubmit={handleSubmit}>
      {/* Category Selection */}
      <label className="font-bold">Choose a Category:</label>
      <select
        className="p-2 border rounded"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Any</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      {/* Language Selection */}
      <label className="font-bold">Choose a Language:</label>
      <select
        className="p-2 border rounded"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        <option value="">Any</option>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>{lang.name}</option>
        ))}
      </select>

      {/* Minimum Rating */}
      <label className="font-bold">Minimum Rating:</label>
      <input
        type="number"
        className="p-2 border rounded"
        min="0"
        max="5"
        step="0.1"
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
      />

      {/* Submit Button */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Find Books
      </button>
    </form>
  );
};

export default Questionnaire;
