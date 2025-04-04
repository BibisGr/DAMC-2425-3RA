export interface Player {
  evento: string
  fecha: string
  ubicacion: string
  participantes: Participante[]
}

export interface Participante {
  nombre: string
  alias: string
  pais: string
  peso: string
  record: string
  rival: string
  imagen: string
}

//   NombreSquad: string
//   BaseSecreta: string
//   Active: boolean
//   city: string
//   miembro: Miembro[]
//   enemigos: Enemigo[]
// }

// export interface Miembro {
//   Alias: string
//   Nombre: string
//   activo: boolean
//   poderes: string[]
//   enemigos: string[]
// }

// export interface Enemigo {
//   Alias: string
//   Nombre: string
//   activo: boolean
//   poderes: string[]
// }
