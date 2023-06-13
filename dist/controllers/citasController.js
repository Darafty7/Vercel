// postcomentarios() {
//     if (!this.newcomen.comentario) {
//       this.$swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Por favor, completa todos los campos.",
//       });
//     } else {
//       axios
//         .post("http://localhost:4000/api/comentario", this.newcomen)
//         .then((response) => {
//           console.log(response.data);

//           this.$swal.fire({
//             position: "top-center",
//             icon: "success",
//             title: "Comentario creado correctamente.",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         })
//         .catch((error) => {
//           console.error(error);

//           this.$swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "No se pudo crear el comentario correctamente.",
//           });
//         });
//     }
//   }
"use strict";