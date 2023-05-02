
 interface Name {
    source: number
    order: number
    version: number
    registrationDate: string
    endDate: string | null
    name: string
    language: string
  }

 interface auxiliaryNames {
    source: number;
    order: number
    version: number;
    registrationDate: string;
    endDate: string | null;
    name: string;
    language: string;
  }

 interface Address {
    source: number;
    version: number;
    registrationDate: string;
    endDate: string | null;
    careOf: string | null;
    street: string;
    postCode: string;
    city: string;
    language: string;
    type: number;
    country: string | null;
  }

 interface CompanyForm {
    source: number;
    version: number;
    registrationDate: string;
    endDate: string | null;
    name: string;
    language: string;
    type: string | null;
}  

 interface liquidations {
    source: number;
    version: number;
    registrationDate: string;
    endDate: string | null;
    name: string;
    language: string;
    type: string | null;
}

interface RegisteredEntry {
    authority: number;
    register: number;
    status: number;
    registrationDate: string;
    endDate: string | null;
    statusDate: string;
    language: string;
    description: string;
}  


export interface DetailCompany{
    businessId: string;
    name: string;
    registrationDate: string;
    companyForm: string;
    detailsUri: string | null;
    liquidations: liquidations[]; 
    names: Name[];
    auxiliaryNames: auxiliaryNames[];
    addresses: Address[];
    companyForms: CompanyForm[];
    businessLines: any[]; 
    languages: any[]; 
    registedOffices: Name[];
    contactDetails: any[]; 
    registeredEntries: RegisteredEntry[];
    businessIdChanges: any[];
}

export interface BigCompany {
    businessId: string
    name: string
    registrationDate: string
    companyForm: string
    detailsUri: string
}
