const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
    // console.log(this.value);
    const suffix = this.dataset.size || "";
    
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
    console.log(this.name, this.value);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
console.log(inputs);