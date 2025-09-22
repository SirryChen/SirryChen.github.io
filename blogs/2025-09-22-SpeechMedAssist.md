### Demo

<div id="wild-dialog" class="space-y-6">

  <h2 class="text-2xl font-bold mb-4">Wild</h2>
  <div id="dialog-container" class="space-y-8"></div>

</div>

<script>
async function loadWildDialogs() {
  const res = await fetch("/file/SMD/wild/merged_dialog.json");
  const dialogs = await res.json();
  const container = document.getElementById("dialog-container");

  dialogs.forEach(dialog => {
    // 外层卡片
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-xl shadow";

    // 患者行
    const patientRow = document.createElement("div");
    patientRow.className = "mb-4";
    const patientSpeech = dialog.question.speech ? `/file/SMD/wild/${dialog.question.speech.split('/').pop()}` : "";
    patientRow.innerHTML = `
      <div class="flex items-center space-x-4">
        <span class="font-semibold w-24">Patient</span>
        <span class="flex-1">${dialog.question.text}</span>
        ${patientSpeech ? `<audio controls class="w-40"><source src="${patientSpeech}" type="audio/wav"></audio>` : ""}
      </div>
    `;
    card.appendChild(patientRow);

    // 模型回答行
    Object.entries(dialog.answers).forEach(([model, ans]) => {
      const modelRow = document.createElement("div");
      modelRow.className = "grid grid-cols-3 gap-4 items-center border-t py-2";
      const modelSpeech = ans.speech ? `/file/SMD/wild/${ans.speech}` : "";
      modelRow.innerHTML = `
        <span class="font-medium">${model}</span>
        <span>${ans.text}</span>
        ${modelSpeech ? `<audio controls class="w-40"><source src="${modelSpeech}" type="audio/wav"></audio>` : ""}
      `;
      card.appendChild(modelRow);
    });

    container.appendChild(card);
  });
}

loadWildDialogs();
</script>

<style>
/* Tailwind 样式已经在博客主 CSS 中，如果没有，可以用下面的简化样式 */
#wild-dialog {
  font-family: sans-serif;
}
#wild-dialog audio {
  outline: none;
}
</style>
