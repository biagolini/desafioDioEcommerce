export interface BlogPostEntity {
  id: string;
  idGame?: string;
  titulo: string;
  conteudo: string;
  youtube?: string;
  referencia?: string;
  dataPostagem: string;
}

export interface CarrinhoEntity {
  itens: (ItensEntity[]) | null;
}

export interface ClienteEntity {
  id: string;
  nome: string;
  rua: string;
  numero?: string;
  cidade: string;
  estado: string;
  cep: string;
}

export interface GameEntity {
  id: string;
  titulo: string;
  genero: number;
  trailer?: string;
  wikipedia?: string;
  nota: number;
  valorPlaystation?: number;
  valorXbox?: number;
  valorNintendo?: number;
  valorPc: number;
  imageUrl?: string;
}

export interface ItensEntity {
  idGame: string;
  idPlataforma: number;
  quantidade: number;
  valorAtualItem: number;
}

export interface EnumModel {
  id: string;
  descricao: string;
}

export interface VendasEntity {
  idCliente: string;
  itens: (ItensEntity[]) | null;
}
