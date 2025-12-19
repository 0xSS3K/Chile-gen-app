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
const REGIONS = [
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
export function generateAddress(): string {
  const region = REGIONS[Math.floor(Math.random() * REGIONS.length)];
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

// Generate a complete Chilean identity
export interface ChileanIdentity {
  name: string;
  rut: string;
  phone: string;
  email: string;
  address: string;
  age: number;
}

export interface GenerationOptions {
  age?: number;
  gender?: Gender;
}

export function generateIdentity(options: GenerationOptions = {}): ChileanIdentity {
  // Default age if not provided: random between 18-70
  const age = options.age ?? Math.floor(Math.random() * (70 - 18 + 1)) + 18;
  const gender = options.gender ?? 'Random';
  
  const name = generateName(gender);
  return {
    name,
    rut: generateRUT(age),
    phone: generatePhone(),
    email: generateEmail(name),
    address: generateAddress(),
    age,
  };
}

