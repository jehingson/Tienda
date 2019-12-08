	const grid = new Muuri('.grid', {
		layout: {
    
          rounding: false
         }
	});

	window.addEventListener('load', () => {
		grid.refreshItems().layout();
		document.getElementById('grid').classList.add('imagenes-cargadas');


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
			});

		});

	}); 