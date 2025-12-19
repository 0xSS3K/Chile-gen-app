// Chilean Identity Generator Utilities

// Common Chilean first names - Expanded lists
const MALE_NAMES = [
  'Juan', 'Carlos', 'Luis', 'Pedro', 'Diego', 'Andrés', 'Francisco', 'José',
  'Miguel', 'Roberto', 'Fernando', 'Ricardo', 'Sergio', 'Mario', 'Rodrigo',
  'Alejandro', 'Daniel', 'Pablo', 'Manuel', 'Sebastián', 'Cristian', 'Felipe',
  'Gonzalo', 'Patricio', 'Eduardo', 'Jorge', 'Víctor', 'Raúl', 'Mauricio',
  'Héctor', 'Nicolás', 'Ignacio', 'Tomás', 'Matías', 'Benjamín', 'Maximiliano',
  'Javier', 'Álvaro', 'Rafael', 'Antonio', 'Gabriel', 'Esteban', 'Marcelo',
  'Leonardo', 'Óscar', 'Hugo', 'Arturo', 'René', 'Ernesto', 'Alberto',
  'Mateo', 'Agustín', 'Lucas', 'Martín', 'Emilio', 'Simón', 'Vicente',
  'Joaquín', 'Dante', 'Alonso', 'Thiago', 'Matteo', 'Bautista', 'Santino',
  'Maximo', 'Damián', 'Bruno', 'Enzo', 'Liam', 'Noah', 'Samuel', 'David',
  'Isaac', 'Elías', 'Adrián', 'Oliver', 'Axel', 'Ian', 'Diego', 'Santiago'
];

const FEMALE_NAMES = [
  'María', 'Carmen', 'Ana', 'Laura', 'Patricia', 'Sandra', 'Andrea', 'Paula',
  'Claudia', 'Carolina', 'Valentina', 'Francisca', 'Catalina', 'Javiera',
  'Constanza', 'Isidora', 'Amanda', 'Fernanda', 'Daniela', 'Natalia', 'Pamela',
  'Katherine', 'Jessica', 'Nicole', 'Camila', 'Sofía', 'Isabella', 'Martina',
  'Emilia', 'Trinidad', 'Antonia', 'Agustina', 'Florencia', 'Josefa', 'Magdalena',
  'Rocío', 'Macarena', 'Paz', 'Soledad', 'Gabriela', 'Elena', 'Lucía', 'Victoria',
  'Dominga', 'Rosario', 'Esperanza', 'Dolores', 'Mercedes', 'Teresa', 'Cecilia',
  'Emma', 'Olivia', 'Amelia', 'Mía', 'Ava', 'Luna', 'Zoe', 'Lía', 'Mila',
  'Amaia', 'Alma', 'Noa', 'Julia', 'Delfina', 'Helena', 'Renata', 'Maite',
  'Amparo', 'Inés', 'Blanca', 'Rosa', 'Diana', 'Beatriz', 'Margarita', 'Lorena',
  'Pilar', 'Mariana', 'Alejandra', 'Monica', 'Gloria', 'Adriana', 'Silvia', 'Raquel'
];

// Common Chilean surnames - Expanded list
const SURNAMES = [
  'González', 'Muñoz', 'Rojas', 'Díaz', 'Pérez', 'Soto', 'Contreras', 'Silva',
  'Martínez', 'Sepúlveda', 'Morales', 'Rodríguez', 'López', 'Fuentes', 'Hernández',
  'Torres', 'Araya', 'Flores', 'Espinoza', 'Valenzuela', 'Castillo', 'Ramírez',
  'Reyes', 'Gutiérrez', 'Castro', 'Vargas', 'Álvarez', 'Tapia', 'Fernández',
  'Sánchez', 'Carrasco', 'Gómez', 'Cortés', 'Herrera', 'Núñez', 'Jara', 'Moreno',
  'Jiménez', 'Vega', 'Medina', 'Sandoval', 'Orellana', 'Zúñiga',
  'Cáceres', 'Navarro', 'Ramos', 'Pizarro', 'Leiva', 'Guerrero', 'Vera',
  'Molina', 'Vidal', 'Salazar', 'Peña', 'Campos', 'Ortega', 'Rivera',
  'Aguilera', 'Bustos', 'Cáceres', 'Carrillo', 'Carvajal', 'Castro', 'Cid',
  'Cisternas', 'Correa', 'Cruz', 'Delgado', 'Díaz', 'Escobar', 'Figueroa',
  'Gallardo', 'García', 'Garrido', 'Guajardo', 'Henríquez', 'Hidalgo', 'Ibáñez',
  'Jara', 'Lagos', 'Lara', 'Maldonado', 'Méndez', 'Miranda', 'Montero', 'Nieto',
  'Olivares', 'Palma', 'Parra', 'Pino', 'Quiroz', 'Riquelme', 'Romero', 'Ruiz',
  'Salinas', 'Sáez', 'Toro', 'Urrutia', 'Vásquez', 'Vega', 'Venegas', 'Vergara'
];

// Chilean regions and communes
export const REGIONS = [
  { name: 'Región de Arica y Parinacota', communes: ['Arica', 'Camarones', 'Putre', 'General Lagos'] },
  { name: 'Región de Tarapacá', communes: ['Iquique', 'Alto Hospicio', 'Pozo Almonte', 'Pica'] },
  { name: 'Región de Antofagasta', communes: ['Antofagasta', 'Calama', 'Tocopilla', 'Mejillones'] },
  { name: 'Región de Atacama', communes: ['Copiapó', 'Vallenar', 'Caldera', 'Chañaral'] },
  { name: 'Región de Coquimbo', communes: ['La Serena', 'Coquimbo', 'Ovalle', 'Illapel'] },
  { name: 'Región de Valparaíso', communes: ['Valparaíso', 'Viña del Mar', 'Quilpué', 'Villa Alemana'] },
  { name: 'Región Metropolitana', communes: ['Santiago', 'Las Condes', 'Providencia', 'Ñuñoa', 'Maipú', 'Puente Alto', 'San Bernardo', 'La Florida'] },
  { name: "Región del Libertador General Bernardo O'Higgins", communes: ['Rancagua', 'San Fernando', 'Rengo', 'Machalí'] },
  { name: 'Región del Maule', communes: ['Talca', 'Curicó', 'Linares', 'Constitución'] },
  { name: 'Región de Ñuble', communes: ['Chillán', 'San Carlos', 'Bulnes', 'Yungay'] },
  { name: 'Región del Biobío', communes: ['Concepción', 'Talcahuano', 'Los Ángeles', 'Coronel'] },
  { name: 'Región de La Araucanía', communes: ['Temuco', 'Villarrica', 'Angol', 'Pucón'] },
  { name: 'Región de Los Ríos', communes: ['Valdivia', 'La Unión', 'Río Bueno', 'Paillaco'] },
  { name: 'Región de Los Lagos', communes: ['Puerto Montt', 'Osorno', 'Castro', 'Ancud'] },
  { name: 'Región de Aysén', communes: ['Coyhaique', 'Aysén', 'Puerto Aysén', 'Chile Chico'] },
  { name: 'Región de Magallanes', communes: ['Punta Arenas', 'Puerto Natales', 'Porvenir', 'Puerto Williams'] }
];

// Common street types and names
const STREET_TYPES = ['Calle', 'Avenida', 'Pasaje', 'Camino', 'Boulevard'];
const STREET_NAMES = [
  'Los Aromos', 'Las Flores', 'El Roble', 'Los Pinos', 'San Martín', 'O\'Higgins',
  'Arturo Prat', 'Manuel Rodríguez', 'Bernardo O\'Higgins', 'Pedro de Valdivia',
  'Santa Rosa', 'San Diego', 'Alameda', 'Providencia', 'Las Condes', 'Vitacura',
  'Apoquindo', 'Nueva Providencia', 'Irarrázaval', 'Macul', 'Grecia', 'Portugal',
  'Ecuador', 'Colombia', 'Argentina', 'Brasil', 'España', 'Italia', 'Francia',
  'Los Carrera', 'Los Leones', 'Los Dominicos', 'Los Rosales', 'Los Olivos',
  'Los Laureles', 'Los Cipreses', 'Los Tilos', 'Los Nogales', 'Los Almendros'
];

// RUT Modulo 11 verification digit algorithm
function calculateRUTVerificationDigit(rut: number): string {
  const rutStr = rut.toString();
  let sum = 0;
  let multiplier = 2;

  // Calculate from right to left
  for (let i = rutStr.length - 1; i >= 0; i--) {
    sum += parseInt(rutStr[i]) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }

  const remainder = sum % 11;
  const verificationDigit = 11 - remainder;

  if (verificationDigit === 11) return '0';
  if (verificationDigit === 10) return 'K';
  return verificationDigit.toString();
}

// Format RUT as XX.XXX.XXX-X
function formatRUT(rut: number, verificationDigit: string): string {
  const rutStr = rut.toString();
  let formatted = '';

  // Add dots every 3 digits from right to left
  for (let i = rutStr.length - 1, count = 0; i >= 0; i--, count++) {
    if (count > 0 && count % 3 === 0) {
      formatted = '.' + formatted;
    }
    formatted = rutStr[i] + formatted;
  }

  return `${formatted}-${verificationDigit}`;
}

// Generate a valid Chilean RUT based on age
export function generateRUT(age: number): string {
  let minRUT: number;
  let maxRUT: number;

  // Age-RUT correlation based on historical ranges
  if (age >= 18 && age <= 25) {
    // Young adults: RUTs ~ 20.000.000 - 21.999.999
    minRUT = 20000000;
    maxRUT = 21999999;
  } else if (age >= 26 && age <= 40) {
    // Adults: RUTs ~ 15.000.000 - 19.999.999
    minRUT = 15000000;
    maxRUT = 19999999;
  } else if (age >= 41 && age <= 60) {
    // Middle-aged: RUTs ~ 10.000.000 - 14.999.999
    minRUT = 10000000;
    maxRUT = 14999999;
  } else if (age > 60) {
    // Seniors: RUTs ~ 4.000.000 - 9.999.999
    minRUT = 4000000;
    maxRUT = 9999999;
  } else {
    // Under 18: Use a wider range for minors
    minRUT = 20000000;
    maxRUT = 21999999;
  }

  const rut = Math.floor(Math.random() * (maxRUT - minRUT + 1)) + minRUT;
  const verificationDigit = calculateRUTVerificationDigit(rut);
  return formatRUT(rut, verificationDigit);
}

// Generate a random Chilean name with gender selection
export type Gender = 'Male' | 'Female' | 'Random';

export function generateName(gender: Gender = 'Random'): string {
  let firstName: string;
  
  if (gender === 'Random') {
    const isMale = Math.random() > 0.5;
    firstName = isMale
      ? MALE_NAMES[Math.floor(Math.random() * MALE_NAMES.length)]
      : FEMALE_NAMES[Math.floor(Math.random() * FEMALE_NAMES.length)];
  } else if (gender === 'Male') {
    firstName = MALE_NAMES[Math.floor(Math.random() * MALE_NAMES.length)];
  } else {
    firstName = FEMALE_NAMES[Math.floor(Math.random() * FEMALE_NAMES.length)];
  }
  
  const firstSurname = SURNAMES[Math.floor(Math.random() * SURNAMES.length)];
  const secondSurname = SURNAMES[Math.floor(Math.random() * SURNAMES.length)];
  
  return `${firstName} ${firstSurname} ${secondSurname}`;
}

// Generate a random Chilean address
export function generateAddress(regionName?: string): string {
  let region;
  if (regionName) {
    region = REGIONS.find(r => r.name === regionName);
  }
  if (!region) {
    region = REGIONS[Math.floor(Math.random() * REGIONS.length)];
  }
  
  const commune = region.communes[Math.floor(Math.random() * region.communes.length)];
  const streetType = STREET_TYPES[Math.floor(Math.random() * STREET_TYPES.length)];
  const streetName = STREET_NAMES[Math.floor(Math.random() * STREET_NAMES.length)];
  const streetNumber = Math.floor(Math.random() * 9999) + 1;
  
  // Sometimes add apartment number
  const hasApartment = Math.random() > 0.7;
  const apartment = hasApartment ? ` Depto. ${Math.floor(Math.random() * 200) + 1}` : '';
  
  return `${streetType} ${streetName} ${streetNumber}${apartment}, ${commune}, ${region.name}`;
}

// Generate a Chilean phone number (+569 format)
export function generatePhone(): string {
  // Chilean mobile numbers: +569 followed by 8 digits
  const areaCode = '+569';
  const number = Math.floor(Math.random() * 90000000) + 10000000; // 8 digits
  return `${areaCode}${number}`;
}

// Generate an email based on name
export function generateEmail(name: string): string {
  const emailDomains = [
    'gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'live.com',
    'icloud.com', 'protonmail.com', 'mail.com', 'yandex.com'
  ];
  
  // Clean name for email
  const cleanName = name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/\s+/g, '.')
    .replace(/[^a-z.]/g, '');
  
  const domain = emailDomains[Math.floor(Math.random() * emailDomains.length)];
  const randomNum = Math.random() > 0.5 ? Math.floor(Math.random() * 9999) : '';
  
  return `${cleanName}${randomNum}@${domain}`;
}

// Health insurance (Previsión)
const HEALTH_INSURANCES = ['Fonasa A', 'Fonasa B', 'Fonasa C', 'Fonasa D'];
const ISAPRES = ['Colmena', 'Consalud', 'Cruz Blanca', 'Banmédica', 'Vida Tres', 'Nueva Masvida', 'Río Blanco'];

export function generateHealthInsurance(): string {
  const isFonasa = Math.random() > 0.4; // 60% Fonasa, 40% Isapre
  if (isFonasa) {
    return HEALTH_INSURANCES[Math.floor(Math.random() * HEALTH_INSURANCES.length)];
  }
  return `Isapre ${ISAPRES[Math.floor(Math.random() * ISAPRES.length)]}`;
}

// AFP (Pension funds)
const AFPS = ['Capital', 'Cuprum', 'Habitat', 'Modelo', 'Planvital', 'Provida', 'Uno'];

export function generateAFP(): string {
  return AFPS[Math.floor(Math.random() * AFPS.length)];
}

// Marital status
export type MaritalStatus = 'Soltero' | 'Casado' | 'Divorciado' | 'Viudo' | 'AUC';

export function generateMaritalStatus(): MaritalStatus {
  const statuses: MaritalStatus[] = ['Soltero', 'Casado', 'Divorciado', 'Viudo', 'AUC'];
  // Weighted probabilities (more single and married)
  const weights = [0.35, 0.40, 0.10, 0.05, 0.10];
  const random = Math.random();
  let cumulative = 0;
  
  for (let i = 0; i < statuses.length; i++) {
    cumulative += weights[i];
    if (random < cumulative) {
      return statuses[i];
    }
  }
  return statuses[0];
}

// Blood type
const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export function generateBloodType(): string {
  return BLOOD_TYPES[Math.floor(Math.random() * BLOOD_TYPES.length)];
}

// Banks
const BANKS = ['BancoEstado', 'Santander', 'Banco de Chile', 'BCI'];
const ACCOUNT_TYPES = ['Cuenta Corriente', 'Cuenta Vista', 'Cuenta RUT'];

export interface BankAccount {
  bank: string;
  accountType: string;
  accountNumber: string;
}

export function generateBankAccount(rut: string): BankAccount {
  const bank = BANKS[Math.floor(Math.random() * BANKS.length)];
  const accountType = ACCOUNT_TYPES[Math.floor(Math.random() * ACCOUNT_TYPES.length)];
  
  let accountNumber: string;
  
  // Special rule: BancoEstado + Cuenta RUT = RUT without verification digit
  if (bank === 'BancoEstado' && accountType === 'Cuenta RUT') {
    // Extract RUT number without verification digit
    const rutNumber = rut.split('-')[0].replace(/\./g, '');
    accountNumber = rutNumber;
  } else {
    // Generate random account number (10-12 digits)
    const length = Math.floor(Math.random() * 3) + 10; // 10, 11, or 12 digits
    accountNumber = Math.floor(Math.random() * Math.pow(10, length)).toString().padStart(length, '0');
  }
  
  return {
    bank,
    accountType,
    accountNumber
  };
}

// Credit card generation using Luhn algorithm
export interface CreditCard {
  number: string;
  brand: 'Visa' | 'Mastercard';
  cvv: string;
  expiryMonth: string;
  expiryYear: string;
}

// Luhn algorithm for credit card validation
function luhnCheck(digits: string): boolean {
  let sum = 0;
  let isEven = false;
  
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}

// Generate a valid credit card number using Luhn algorithm
function generateLuhnCardNumber(prefix: string, length: number): string {
  let cardNumber = prefix;
  
  // Generate random digits except the last one
  while (cardNumber.length < length - 1) {
    cardNumber += Math.floor(Math.random() * 10).toString();
  }
  
  // Calculate check digit using Luhn algorithm
  let sum = 0;
  let isEven = false;
  
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  const checkDigit = (10 - (sum % 10)) % 10;
  cardNumber += checkDigit.toString();
  
  return cardNumber;
}

export function generateCreditCard(): CreditCard {
  const isVisa = Math.random() > 0.5;
  const brand: 'Visa' | 'Mastercard' = isVisa ? 'Visa' : 'Mastercard';
  
  // Visa starts with 4, Mastercard with 51-55
  const prefix = isVisa 
    ? '4' 
    : `5${Math.floor(Math.random() * 5) + 1}`; // 51-55
  
  const cardNumber = generateLuhnCardNumber(prefix, 16);
  
  // Format card number with spaces every 4 digits
  const formattedNumber = cardNumber.match(/.{1,4}/g)?.join(' ') || cardNumber;
  
  // Generate CVV (3 digits)
  const cvv = Math.floor(Math.random() * 900 + 100).toString();
  
  // Generate expiry date (next 1-5 years)
  const currentYear = new Date().getFullYear();
  const expiryYear = currentYear + Math.floor(Math.random() * 5) + 1;
  const expiryMonth = Math.floor(Math.random() * 12) + 1;
  
  return {
    number: formattedNumber,
    brand,
    cvv,
    expiryMonth: expiryMonth.toString().padStart(2, '0'),
    expiryYear: expiryYear.toString().slice(-2)
  };
}

// Generate a complete Chilean identity
export interface ChileanIdentity {
  // Basic data
  name: string;
  rut: string;
  phone: string;
  email: string;
  address: string;
  age: number;
  
  // Advanced data (optional)
  healthInsurance?: string;
  afp?: string;
  maritalStatus?: MaritalStatus;
  bloodType?: string;
  bankAccount?: BankAccount;
  creditCard?: CreditCard;
}

export interface GenerationOptions {
  age?: number;
  gender?: Gender;
  region?: string;
  includeAdvanced?: boolean;
}

export function generateIdentity(options: GenerationOptions = {}): ChileanIdentity {
  // Default age if not provided: random between 18-70
  const age = options.age ?? Math.floor(Math.random() * (70 - 18 + 1)) + 18;
  const gender = options.gender ?? 'Random';
  const includeAdvanced = options.includeAdvanced ?? false;
  
  const name = generateName(gender);
  const rut = generateRUT(age);
  const address = generateAddress(options.region);
  
  const identity: ChileanIdentity = {
    name,
    rut,
    phone: generatePhone(),
    email: generateEmail(name),
    address,
    age,
  };
  
  // Add advanced data if requested
  if (includeAdvanced) {
    identity.healthInsurance = generateHealthInsurance();
    identity.afp = generateAFP();
    identity.maritalStatus = generateMaritalStatus();
    identity.bloodType = generateBloodType();
    identity.bankAccount = generateBankAccount(rut);
    identity.creditCard = generateCreditCard();
  }
  
  return identity;
}

