document.addEventListener("DOMContentLoaded", function () {
  // Store initial values when the page loads
  var initialVar1 = "{{ request.form['var_1'] }}";
  var initialVar2 = "{{ request.form['var_2'] }}";
  var initialOperation = "{{ request.form['operation'] }}";

  // Set initial values to form fields
  document.getElementsByName("var_1")[0].value = initialVar1;
  document.getElementsByName("var_2")[0].value = initialVar2;
  document.getElementsByName("operation")[0].value = initialOperation;

  // Store initial values in a data attribute for later use
  document
    .getElementById("calculatorForm")
    .setAttribute("data-initial-var1", initialVar1);
  document
    .getElementById("calculatorForm")
    .setAttribute("data-initial-var2", initialVar2);
  document
    .getElementById("calculatorForm")
    .setAttribute("data-initial-operation", initialOperation);
});

// Function to reset the form to its initial values
function resetForm() {
  // Get initial values from data attributes
  var initialVar1 = document
    .getElementById("calculatorForm")
    .getAttribute("data-initial-var1");
  var initialVar2 = document
    .getElementById("calculatorForm")
    .getAttribute("data-initial-var2");
  var initialOperation = document
    .getElementById("calculatorForm")
    .getAttribute("data-initial-operation");

  // Set values to form fields
  document.getElementsByName("var_1")[0].value = initialVar1;
  document.getElementsByName("var_2")[0].value = initialVar2;
  document.getElementsByName("operation")[0].value = initialOperation;
}
