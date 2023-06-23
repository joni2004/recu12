var formDataList = [];

function renderFormData() {
    var formDataContainer = document.getElementById("formDataContainer");
    formDataContainer.innerHTML = ""; 

    for (var i = 0; i < formDataList.length; i++) {
        var formData = formDataList[i];

        var formDataElement = document.createElement("div");
        formDataElement.classList.add("formData");

        var nameElement = document.createElement("p");
        nameElement.innerHTML = "<strong>Nombre:</strong> " + formData.nombre;
        formDataElement.appendChild(nameElement);

        var emailElement = document.createElement("p");
        emailElement.innerHTML = "<strong>Email:</strong> " + formData.email;
        formDataElement.appendChild(emailElement);

        var messageElement = document.createElement("p");
        messageElement.innerHTML = "<strong>Mensaje:</strong> " + formData.mensaje;
        formDataElement.appendChild(messageElement);

        var currencyElement = document.createElement("p");
        currencyElement.innerHTML = "<strong>Moneda:</strong> " + formData.moneda;
        formDataElement.appendChild(currencyElement);

        var amountElement = document.createElement("p");
        amountElement.innerHTML = "<strong>Sueldo:</strong> " + formData.cantidad;
        formDataElement.appendChild(amountElement);

        formDataContainer.appendChild(formDataElement);
    }
}

var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = {
        nombre: form.nombre.value,
        email: form.email.value,
        mensaje: form.mensaje.value,
        moneda: form.moneda.value,
        cantidad: form.cantidad.value
    };

    formDataList.push(formData);
    renderFormData();

    form.reset();
});
