function calculer() {
    // ربط المدخلات
    let valeursInput = document.getElementById('valeurs').value;
    let moyenneCible = parseFloat(document.getElementById('moyenneCible').value);
    let tea = parseFloat(document.getElementById('tea').value);

    // تحويل النص لقائمة أرقام
    let valeurs = valeursInput.split(',').map(v => parseFloat(v.trim()));

    // حساب المتوسط
    let somme = valeurs.reduce((a, b) => a + b, 0);
    let moyenne = somme / valeurs.length;

    // حساب الانحراف المعياري
    let variance = valeurs.reduce((a, b) => a + Math.pow(b - moyenne, 2), 0) / (valeurs.length - 1);
    let ecartType = Math.sqrt(variance);

    // حساب الانحياز
    let biais = moyenne - moyenneCible;

    // حساب 6 Sigma
    let sixSigma = (tea / (Math.abs(biais) + 1.65 * ecartType));

    // إنشاء التفسير
    let interpretation = "";
    if (sixSigma >= 6) {
        interpretation = "Excellente performance ✅";
    } else if (sixSigma >= 4) {
        interpretation = "Bonne performance 🟡";
    } else {
        interpretation = "Performance insuffisante ❌";
    }

    // عرض النتائج
    document.getElementById('resultats').innerHTML = `
        <h3>Résultats:</h3>
        <p><strong>Moyenne:</strong> ${moyenne.toFixed(2)}</p>
        <p><strong>Écart-type:</strong> ${ecartType.toFixed(2)}</p>
        <p><strong>Biais:</strong> ${biais.toFixed(2)}</p>
        <p><strong>Six Sigma:</strong> ${sixSigma.toFixed(2)}</p>
        <p><strong>Interprétation:</strong> ${interpretation}</p>
    `;
}
