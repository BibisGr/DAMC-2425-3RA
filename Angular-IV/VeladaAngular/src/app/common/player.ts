export interface Player {
  NombreSquad: string
  BaseSecreta: string
  Active: boolean
  city: string
  miembro: Miembro[]
  enemigos: Enemigo[]
}

export interface Miembro {
  Alias: string
  Nombre: string
  activo: boolean
  poderes: string[]
  enemigos: string[]
}

export interface Enemigo {
  Alias: string
  Nombre: string
  activo: boolean
  poderes: string[]
}
