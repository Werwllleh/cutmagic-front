/*export interface ContactTypeObject {
  type: string;
  value: string;
  link: string | null;
  id: string;
  description: string | null;
}*/

export interface PayloadContent {
  id: number;
  globalType: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactTypeObject {
  type: 'phone' | 'timing' | 'email' | 'address';
  value: string;
  label?: string;
  link: string | null;
  id: string;
  description: string | null;
}

export interface CompanyGlobalData {
  id: number;
  globalType: string;
  contactType: ContactTypeObject[];
  createdAt: string;
  updatedAt: string;
}
