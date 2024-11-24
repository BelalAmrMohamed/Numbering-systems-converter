function convert() {
    // Get input values
    const input = document.getElementById("input").value.trim();
    const base = parseInt(document.getElementById("base").value);
    const output = document.getElementById("output");
    
    // Validate input
    if (!input) {
        output.innerHTML = "<p style='color: red;'>Please enter a valid number.</p>";
        return;
    }
    
    let decimal;
    try {
        // Convert input to decimal
        decimal = parseInt(input, base);
        if (isNaN(decimal)) throw new Error();
    } catch {
        output.innerHTML = "<p style='color: red;'>Invalid input for the selected base.</p>";
        return;
    }

    // Perform conversions
    const binary = decimal.toString(2).toUpperCase();
    const octal = decimal.toString(8).toUpperCase();
    const hex = decimal.toString(16).toUpperCase();
    
    // Display results
    output.innerHTML = `
        <p><strong>Binary:</strong> ${binary}</p>
        <p><strong>Octal:</strong> ${octal}</p>
        <p><strong>Decimal:</strong> ${decimal}</p>
        <p><strong>Hexadecimal:</strong> ${hex}</p>
    `;
}