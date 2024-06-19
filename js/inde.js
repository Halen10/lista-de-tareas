let txtCreate = document.getElementById("txtCrear");
let btnCreate = document.getElementById("btnCrear");
let app = document.getElementById("app");

btnCreate.addEventListener("click",(e)=>{
    e.preventDefault()

    if(txtCreate.value !== ""){
        let element = document.createElement("div");
        element.className="item";
        
        let icon = document.createElement("i")
        icon.className = "fas fa-trash"

        icon.addEventListener("click",(e)=>{
            let confirmacion = confirm("¿Estas seguro que quieres eliminar la tarea?");
            if(confirmacion){
                element.remove();    
            }
        });

        element.textContent = txtCreate.value
        
        element.append(icon);
        app.append(element)
        
        
        txtCreate.value = "";
    }  
    else{
        alert("Debe llenar el campo vacio")
    }  
});
