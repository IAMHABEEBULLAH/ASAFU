
export enum ServiceCategory {
  ARCHITECTURE = 'Architecture',
  CONSTRUCTION = 'Construction',
  LOGISTICS = 'Logistics',
  ESTATE_MANAGEMENT = 'Estate Management'
}

export interface Project {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  imageUrl: string;
  year: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
