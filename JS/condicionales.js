const user = prompt ("Ingresa tu nombre");
const age = Number(prompt ("Ingresa tu edad"));

if (age >= 18) {
    alert ("¡Bienvenido " + user + "! Esperamos que tengas una buena estadia. Tu edad es suficiente para que entres a la web.");
    
} else {
    alert (user + ", lo lamentamos, no tenés la edad suficiente para entrar a la web. Volvé cuando tengas +18. Tu edad actual es de " + age + " años.");
}