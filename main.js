	const grid = new Muuri('.grid', {
		layout: {
    
          rounding: false
         }
	});

	window.addEventListener('load', () => {
		grid.refreshItems().layout();
		document.getElementById('grid').classList.add('imagenes-cargadas');

       // Agregamos los listener de los enlaces para filtrar por categorias.
		const enlaces = document.querySelectorAll('#categoria a');
		/*en este codigo estamos guardado todas las categotias en la const enlaces
		y asi poder interatuar con ellso */

		enlaces.forEach((elemento) => {
			console.log(elemento);
			elemento.addEventListener('click', (evento) =>{
				evento.preventDefault();
				/* con este codigo sabremo cual elemrnto fue clickeado y asi */
				enlaces.forEach((enlace) => enlace.classList.remove('activo'));
				/* aqui por cada enlace le quitamos el activo*/
				evento.target.classList.add('activo');
				/*le asignamos el activo al enlace asignado*/

				const categoria = evento.target.innerHTML;
				/* EL target gurada el elemento selecionado 
				el tolowerCase pasa el texton en minuscula*/
				 
                categoria === 'Todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria = "${categoria}"]`);  
				/* `` estas comillas es de la nueva version de javascripts */
			});

		});

		//Agregamos el listener para la barra de  busqueda 
        document.querySelector('#barra-busqueda').addEventListener('input',(evento) => {
        	const busqueda = evento.target.value;
        	//cada ves que escriba algo en la barra de busqueda estamos obteniendo 
        	//su valor y sabremos que fue lo que escribio
        	
        	grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda));
        	//solo nos va mostrar los que parescan 

        });

        //Agregamoslistener para las imagenes
        const overlay = document.getElementById('overlay');
        document.querySelectorAll('.grid .item img').forEach((elemento) => {
        	elemento.addEventListener('click', () => {

        	const ruta = elemento.getAttribute('src');
        	const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
        	
        	
        		
        		overlay.classList.add('activo');
        		document.querySelector('#overlay img').src = ruta;
        		document.querySelector('#overlay .descripcion').innerHTML = descripcion;

        	});
        });

        //EventListener del boton de cerrar
        document.querySelector('#btn-cerrar-popup').addEventListener('click',() => {
            overlay.classList.remove('activo');

        });

         //EverListener del over
         overlay.addEventListener('click', (evento) => {
         	
         	evento.target.id === 'overlay' ? overlay.classList.remove('activo'):'';
         });

	}); 