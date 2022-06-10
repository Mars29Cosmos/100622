fetch("Mars.json")
.then(function(response){
	return response.json();
})
.then(function(Mars){
	let placeholder=document.queryselector("#data-output");
	let out="";
	for(let dia of Mars){
		out+=`
		<tr>
          <td>${dia.id}</td>
          <td>${dia.nombre}</td>
          <td>${dia.edad}</td>
          <td>${dia.imagen}</td>
          <td>${dia.identidadsecreta}</td>
          <td>${dia.poderes}</td>
		</tr>
        `;
	}
	placeholder.innerHTML=out;
})