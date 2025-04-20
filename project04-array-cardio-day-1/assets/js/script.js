const inventors = [
    { first: "アルベルト", last: "アインシュタイン", year: 1879, passed: 1955 },
    { first: "アイザック", last: "ニュートン", year: 1643, passed: 1727 },
    { first: "ガリレオ", last: "ガリレイ", year: 1564, passed: 1642 },
    { first: "マリ", last: "キュリー", year: 1867, passed: 1934 },
    { first: "ニコラ", last: "テスラ", year: 1856, passed: 1943 },
    { first: "トーマス", last: "エジソン", year: 1847, passed: 1931 },
    { first: "レオナルド", last: "ダ・ヴィンチ", year: 1452, passed: 1519 },
    { first: "ジェームズ", last: "ワット", year: 1736, passed: 1819 },
    { first: "アレクサンダー", last: "グラハム・ベル", year: 1847, passed: 1922 }
];

const funcs = {
    ex1: data => data.filter(inv => inv.year >= 1500 && inv.year < 1600),
};

function renderTable(tableId, inventors) {
    const table = document.getElementById(tableId);
    table.innerHTML = `
         <tr>
            <th>First</th>
            <th>Last</th>
            <th>Year</th>
            <th>Passed</th>
        </tr>
    `;

    inventors.forEach(inv => {
        table.innerHTML += `
        <tr>
            <td>${inv.first}</td>
            <td>${inv.last}</td>
            <td>${inv.year}</td>
            <td>${inv.passed}</td>
        </tr>
      `;
    });
}

function updateCheckbox(exNum, func) {
    const checkbox = document.getElementById(`${exNum}Checkbox`);
    if (!checkbox) return;

    const isChecked = checkbox.checked;

    const data = isChecked ? func(inventors) : inventors;
    renderTable(`${exNum}Table`, data);
}

function init() {
    for (const exNum in funcs) {
        const checkbox = document.getElementById(`${exNum}Checkbox`);
        checkbox.addEventListener("change", () => updateCheckbox(exNum, funcs[exNum]));

        // 初期化
        renderTable(`${exNum}Table`, inventors);
    }
}

document.addEventListener("DOMContentLoaded", init);