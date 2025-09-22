# Demo

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CosyVoice 3 风格演示</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* 自定义 Tailwind 样式 */
        .card-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
        }

        .card {
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            padding: 1rem;
            background-color: #fff;
        }

        .audio-player {
            width: 100%;
        }

        /* 统一的网格布局样式 */
        .grid-row {
            display: grid;
            grid-template-columns: 100px 1fr 150px;
            align-items: center;
            gap: 1rem;
        }

        /* 隐藏默认的 HTML audio 控件, 保持简洁 */
        audio::-webkit-media-controls-enclosure {
            border-radius: 9999px;
            background-color: #e5e7eb;
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800">

    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-8">Audio LLM Demo</h1>

        <div class="mb-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Contents</h2>
            <ul class="flex space-x-4 text-lg">
                <li><a href="#" class="text-blue-600 hover:text-blue-800">Single-turn</a></li>
                <li><a href="#" class="text-blue-600 hover:text-blue-800">Multi-turn</a></li>
                <li><a href="#wild-dialog" class="text-blue-600 hover:text-blue-800">Wild</a></li>
            </ul>
        </div>
        
        <hr class="my-10 border-gray-200">

        <div id="wild-dialog" class="space-y-6">
            <h2 class="text-2xl font-bold mb-4">Wild</h2>
            <p class="text-lg text-gray-600 mb-8">
                展示在真实、不受约束的场景下，模型对于多轮对话和复杂情绪的生成能力。
            </p>
            <div id="dialog-container" class="space-y-8"></div>
        </div>
    </div>

<script>
async function loadWildDialogs() {
    const res = await fetch("/file/SMD/wild/merged_dialog.json");
    const dialogs = await res.json();
    const container = document.getElementById("dialog-container");

    dialogs.forEach(dialog => {
        // 外层卡片
        const card = document.createElement("div");
        card.className = "card shadow-lg";

        // 患者行
        const patientRow = document.createElement("div");
        patientRow.className = "flex items-center space-x-4 mb-4 border-b border-gray-200 pb-4";
        const patientSpeech = dialog.question.speech ? `/file/SMD/wild/${dialog.question.speech.split('/').pop()}` : "";
        patientRow.innerHTML = `
            <span class="font-semibold text-gray-500 w-24 flex-shrink-0">Patient</span>
            <span class="flex-1 text-lg font-medium text-gray-800">${dialog.question.text}</span>
            ${patientSpeech ? `<audio controls class="audio-player"><source src="${patientSpeech}" type="audio/wav"></audio>` : ""}
        `;
        card.appendChild(patientRow);

        // 模型回答行
        Object.entries(dialog.answers).forEach(([model, ans]) => {
            const modelRow = document.createElement("div");
            modelRow.className = "grid-row py-2 border-t border-gray-100 first:border-t-0";
            const modelSpeech = ans.speech ? `/file/SMD/wild/${ans.speech}` : "";
            modelRow.innerHTML = `
                <span class="font-medium text-gray-500">${model}</span>
                <span class="text-gray-700">${ans.text}</span>
                ${modelSpeech ? `<audio controls class="audio-player"><source src="${modelSpeech}" type="audio/wav"></audio>` : ""}
            `;
            card.appendChild(modelRow);
        });

        container.appendChild(card);
    });
}

loadWildDialogs();
</script>

</body>
</html>