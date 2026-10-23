export interface Article {
  id: number;
  slug: string;          
  title: string;
  excerpt: string;
  content: string;       
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  date: string;    
  readTimeMinutes: string;      
  readTime: string;      
  featured: boolean;
  tags: string[];        
}

export interface Category {
  icon: string;
  number: string;
  categoryName: string;
}

export interface Describe {
  title: string;
}

export interface Value {
  icon: string;
  name: string;
  categoryName: string;
}