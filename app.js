// ----------------------------------------
  // PHOTO PREVIEW
  // ----------------------------------------
  const photoInput = document.getElementById('photo');
  const photoPreview = document.getElementById('photoPreview');

  photoInput.addEventListener('input', () => {
    if (photoInput.value.trim() !== "") {
      photoPreview.src = photoInput.value;
    }
  });

  // ----------------------------------------
  // ADD PROFESSIONAL EXPERIENCE (Dynamic)
  // ----------------------------------------
  const container = document.getElementById("experienceContainer");
  const addBtn = document.getElementById("addExperience");

  addBtn.addEventListener("click", () => {
    const div = document.createElement("div");

    div.className = "flex gap-2 items-center";

    div.innerHTML = `
      <input type="text"
             class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
             placeholder="Experience (ex: 2 years at Google)">
      <button type="button"
              class="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 remove-exp">
        X
      </button>
    `;

    container.appendChild(div);

    // Remove experience
    div.querySelector(".remove-exp").addEventListener("click", () => {
      div.remove();
    });
  });