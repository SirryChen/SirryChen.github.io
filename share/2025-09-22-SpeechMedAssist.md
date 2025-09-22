# Demo of LLM & SpeechLMs in Medical Consultation




<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* 自定义 Tailwind 样式 */
        .demo-container {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .dialog-card {
            background-color: #fff;
            padding: 1rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .speech-player {
            width: 100%;
        }

        /* 统一的网格布局样式，两列 */
        .dialog-row {
            display: grid;
            grid-template-columns: 120px 1fr; /* 模型名固定宽度，内容区自适应 */
            align-items: flex-start; /* 顶部对齐 */
            gap: 1rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            border-top: 1px solid #e5e7eb;
        }

        .dialog-row:first-of-type {
            border-top: none; /* 移除第一行的上边框 */
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800">

    <div class="demo-container py-12">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-8">Audio LLM Demo</h1>

        <div id="wild-dialog" class="space-y-6">
            <h2 class="text-2xl font-bold mb-4">Wild</h2>
            <div id="dialog-container" class="space-y-8"></div>
        </div>
    </div>

    <script>
        // Wild部分的加载函数
        async function loadWildDialogs() {
            const res = await fetch("/file/SMD/wild/merged_dialog.json");
            const dialogs = await res.json();
            const container = document.getElementById("dialog-container");

            dialogs.forEach(dialog => {
                const card = document.createElement("div");
                card.className = "dialog-card shadow-lg";

                const patientRow = document.createElement("div");
                patientRow.className = "flex items-center space-x-4 mb-4 border-b border-gray-200 pb-4";
                const patientSpeech = dialog.question.speech ? `/file/SMD/wild/${dialog.question.speech.split('/').pop()}` : "";
                patientRow.innerHTML = `
                    <span class="font-semibold text-gray-500 w-24 flex-shrink-0">Patient</span>
                    <span class="flex-1 text-lg font-medium text-gray-800">${dialog.question.text}</span>
                    ${patientSpeech ? `<audio controls class="speech-player"><source src="${patientSpeech}" type="audio/wav"></audio>` : ""}
                `;
                card.appendChild(patientRow);

                Object.entries(dialog.answers).forEach(([model, ans]) => {
                    const modelRow = document.createElement("div");
                    modelRow.className = "dialog-row";
                    const modelSpeech = ans.speech ? `/file/SMD/wild/${ans.speech}` : "";
                    modelRow.innerHTML = `
                        <span class="font-medium text-gray-500">${model}</span>
                        <div class="flex flex-col space-y-2">
                            <span class="text-gray-700">${ans.text}</span>
                            ${modelSpeech ? `<audio controls class="speech-player"><source src="${modelSpeech}" type="audio/wav"></audio>` : ""}
                        </div>
                    `;
                    card.appendChild(modelRow);
                });

                container.appendChild(card);
            });
        }

        // 页面加载完成后调用函数
        document.addEventListener('DOMContentLoaded', () => {
            loadWildDialogs();
        });
    </script>
</body>
</html>