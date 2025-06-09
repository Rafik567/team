import React from "react";

const JoinModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const birthNumber = data.get("birthNumber")?.trim();
    const fullName = data.get("fullName")?.trim();
    const docNumber = data.get("docNumber")?.trim();
    const phone = data.get("phone")?.trim();
    const accepted = data.get("rulesAccepted");

    if (!birthNumber || !fullName || !docNumber || !phone) {
      alert("Խնդրում ենք լրացնել բոլոր դաշտերը։");
      return;
    }

    if (!accepted) {
      alert("Խնդրում ենք հաստատել, որ ծանոթացել եք կանոններին։");
      return;
    }

    alert("Հաջողությամբ ուղարկվեց ✅");
    form.reset();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10">
      <div className="bg-white w-full max-w-md p-6 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-black"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-center mb-4">Տեղափոխվի՛ր Team քո համարով</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full border rounded px-4 py-2"
            name="birthNumber"
            placeholder="Ծննդյան համար"
          />
          <input
            className="w-full border rounded px-4 py-2"
            name="fullName"
            type="text"
            placeholder="Անուն Ազգանուն"
          />
          <input
            className="w-full border rounded px-4 py-2"
            name="docNumber"
            placeholder="Փաստաթղթի համարը"
          />
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="type" defaultChecked />
              <span>Անձնագիր</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="type" />
              <span>ID քարտ</span>
            </label>
          </div>
          <input
            className="w-full border rounded px-4 py-2"
            type="number"
            name="phone"
            placeholder="Հեռախոս"
          />

          <label className="flex items-center gap-2">
            <input type="checkbox" name="rulesAccepted" />
            <span>Ծանոթացել և համաձայն եմ կանոնների հետ</span>
          </label>

          <button
            type="submit"
            className="bg-red-500 text-white w-full py-3 rounded font-bold hover:bg-red-600"
          >
            Միանալ
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinModal;
