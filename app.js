const categoria= document.getElementById("categoria")
const otraCategoria = document.getElementById("otra")
const agregarTarea= document.getElementById("agregarTarea")
const tarea = document.getElementById("tarea")
const errorTarea= document.getElementById("errorTarea")
const errorCategoria=document.getElementById("errorCategoria")
const errorOtra= document.getElementById("errorOtra")
const listaTareas= document.getElementById("listaTareas")
const completadas=document.getElementById("completadas")
const total= document.getElementById("total")

categoria.addEventListener("change", function(){
    if (categoria.value == "otra"){
        otraCategoria.style.display = "block"
    } else {
        otraCategoria.style.display = "none"
    }
})

agregarTarea.addEventListener("click", function(){
     if (tarea.value == ""){
        errorTarea.style.display = "block"
    } else {
        errorTarea.style.display = "none"
    }
    if (categoria.value == "categoría") {
        errorCategoria.style.display = "block"
    } else {
        errorCategoria.style.display = "none"
    }
     if (otraCategoria.value == "" && categoria.value == "otra" ){
        errorOtra.style.display = "block"
     } else {
        errorOtra.style.display = "none"
     }
        
     if (tarea.value != "" && categoria.value != "categoría" || (otraCategoria.value != "" && categoria.value == "otra")) {
        const nuevaTarjeta = document.createElement('div');
        nuevaTarjeta.classList.add('tarjetaTareas');
        nuevaTarjeta.innerHTML += `
            <div>
                <button type="button" class="categoria">${categoria.value}</button>
                <p class="textoTarea">${tarea.value}</p>
            </div>
            <div class="botones">
                <button class="btn-hecha">✅ Hecha</button>
                <button class="btn-urgente">🔴 Urgente</button>
                <button class="btn-eliminar">❌ Eliminar</button>
            </div>
        `
        nuevaTarjeta.querySelector('.btn-hecha').addEventListener("click", function(){
            nuevaTarjeta.classList.toggle('hecha');
            nuevaTarjeta.classList.remove('urgente');
            completadas.innerText = listaTareas.querySelectorAll('.hecha').length;
        })
        nuevaTarjeta.querySelector('.btn-urgente').addEventListener("click", function(){
            nuevaTarjeta.classList.toggle('urgente');
            nuevaTarjeta.classList.remove('hecha');
        })
        nuevaTarjeta.querySelector('.btn-eliminar').addEventListener("click", function(){
            if(confirm("¿Está seguro de eliminar la tarea?")){
                nuevaTarjeta.remove()
                total.innerText = listaTareas.children.length;
                completadas.innerText = listaTareas.querySelectorAll('.hecha').length;
            }

        })
        listaTareas.append(nuevaTarjeta)
        total.innerText = listaTareas.children.length
        tarea.value = ""
        categoria.value="categoría" 
    }

})

