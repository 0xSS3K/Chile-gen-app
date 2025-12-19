'use client'

import { useState } from 'react'
import { Copy, RefreshCw, User, Hash, Phone, Mail, MapPin, Calendar, CreditCard, Building2, Heart, Users, FileJson, Download, CreditCard as CardIcon } from 'lucide-react'
import { generateIdentity, type ChileanIdentity, type Gender, REGIONS } from '@/utils/chilean-data'
import * as XLSX from 'xlsx'

export default function Home() {
  const [identity, setIdentity] = useState<ChileanIdentity | null>(null)
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [gender, setGender] = useState<Gender>('Random')
  const [age, setAge] = useState<number>(30)
  const [advancedMode, setAdvancedMode] = useState<boolean>(false)
  const [selectedRegion, setSelectedRegion] = useState<string>('')
  const [bulkCount, setBulkCount] = useState<number>(10)

  const handleGenerate = () => {
    const newIdentity = generateIdentity({ 
      age, 
      gender, 
      region: selectedRegion || undefined,
      includeAdvanced: advancedMode 
    })
    setIdentity(newIdentity)
    setCopiedField(null)
  }

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleCopyJSON = async () => {
    if (!identity) return
    try {
      await navigator.clipboard.writeText(JSON.stringify(identity, null, 2))
      setCopiedField('json')
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy JSON:', err)
    }
  }

  const handleBulkExport = () => {
    const identities: ChileanIdentity[] = []
    
    for (let i = 0; i < bulkCount; i++) {
      identities.push(generateIdentity({ 
        age, 
        gender, 
        region: selectedRegion || undefined,
        includeAdvanced: advancedMode 
      }))
    }

    // Prepare data for Excel
    const excelData = identities.map(id => ({
      'Nombre': id.name,
      'RUT': id.rut,
      'Edad': id.age,
      'Teléfono': id.phone,
      'Email': id.email,
      'Dirección': id.address,
      'Previsión': id.healthInsurance || '',
      'AFP': id.afp || '',
      'Estado Civil': id.maritalStatus || '',
      'Grupo Sanguíneo': id.bloodType || '',
      'Banco': id.bankAccount?.bank || '',
      'Tipo Cuenta': id.bankAccount?.accountType || '',
      'Número Cuenta': id.bankAccount?.accountNumber || '',
      'Tarjeta Marca': id.creditCard?.brand || '',
      'Tarjeta Número': id.creditCard?.number || '',
      'Tarjeta CVV': id.creditCard?.cvv || '',
      'Tarjeta Vencimiento': id.creditCard ? `${id.creditCard.expiryMonth}/${id.creditCard.expiryYear}` : ''
    }))

    // Create workbook and worksheet
    const ws = XLSX.utils.json_to_sheet(excelData)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Identidades')

    // Generate Excel file
    XLSX.writeFile(wb, `identidades_chilenas_${new Date().getTime()}.xlsx`)
  }

  const FieldRow = ({ 
    icon: Icon, 
    label, 
    value, 
    fieldKey 
  }: { 
    icon: any
    label: string
    value: string
    fieldKey: string
  }) => (
    <div className="flex items-start gap-3 p-4 border-b border-neutral-800 last:border-b-0">
      <div className="flex-shrink-0 mt-1">
        <Icon className="w-5 h-5 text-neutral-400" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1 font-sans">
          {label}
        </div>
        <div className="text-sm font-mono text-white break-all">
          {value}
        </div>
      </div>
      <button
        onClick={() => handleCopy(value, fieldKey)}
        className="flex-shrink-0 p-2 hover:bg-neutral-800 rounded transition-colors group"
        title="Copiar al portapapeles"
      >
        <Copy 
          className={`w-4 h-4 transition-colors ${
            copiedField === fieldKey 
              ? 'text-green-400' 
              : 'text-neutral-500 group-hover:text-white'
          }`} 
        />
      </button>
    </div>
  )

  return (
    <main className="min-h-screen bg-neutral-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2 font-sans tracking-tight">
            ChileGen
          </h1>
          <p className="text-sm text-neutral-500 font-sans">
            Generador de Identidad Chilena
          </p>
        </header>

        {/* Configuration Section */}
        <div className="mb-6 bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-white mb-4 font-sans">
            Configuración
          </h2>
          
          <div className="space-y-6">
            {/* Mode Toggle */}
            <div>
              <label className="block text-sm text-neutral-400 mb-3 font-sans">
                Modo de Operación
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setAdvancedMode(false)}
                  className={`flex-1 py-2.5 px-4 rounded-lg border transition-all font-sans text-sm font-medium ${
                    !advancedMode
                      ? 'bg-neutral-800 border-neutral-700 text-white'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-300'
                  }`}
                >
                  Modo Básico
                </button>
                <button
                  onClick={() => setAdvancedMode(true)}
                  className={`flex-1 py-2.5 px-4 rounded-lg border transition-all font-sans text-sm font-medium ${
                    advancedMode
                      ? 'bg-neutral-800 border-neutral-700 text-white'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-300'
                  }`}
                >
                  Modo Avanzado
                </button>
              </div>
            </div>

            {/* Gender Selector */}
            <div>
              <label className="block text-sm text-neutral-400 mb-3 font-sans">
                Género
              </label>
              <div className="flex gap-2">
                {(['Male', 'Female', 'Random'] as Gender[]).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`flex-1 py-2.5 px-4 rounded-lg border transition-all font-sans text-sm font-medium ${
                      gender === g
                        ? 'bg-neutral-800 border-neutral-700 text-white'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-300'
                    }`}
                  >
                    {g === 'Male' ? 'Masculino' : g === 'Female' ? 'Femenino' : 'Aleatorio'}
                  </button>
                ))}
              </div>
            </div>

            {/* Age Input */}
            <div>
              <label className="block text-sm text-neutral-400 mb-3 font-sans">
                Edad: <span className="text-white font-mono">{age} años</span>
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="18"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="flex-1 h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-neutral-600"
                />
                <input
                  type="number"
                  min="18"
                  max="80"
                  value={age}
                  onChange={(e) => {
                    const val = Number(e.target.value)
                    if (val >= 18 && val <= 80) setAge(val)
                  }}
                  className="w-20 px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-neutral-700"
                />
              </div>
            </div>

            {/* Region Selector (Advanced Mode Only) */}
            {advancedMode && (
              <div>
                <label className="block text-sm text-neutral-400 mb-3 font-sans">
                  Región
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-white font-sans text-sm focus:outline-none focus:border-neutral-700"
                >
                  <option value="">Aleatorio</option>
                  {REGIONS.map((region) => (
                    <option key={region.name} value={region.name}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Generate Button */}
        <div className="mb-6">
          <button
            onClick={handleGenerate}
            className="w-full py-4 px-6 bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-200 flex items-center justify-center gap-2 group font-sans"
          >
            <RefreshCw className="w-5 h-5 text-white group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-white font-medium">Generar Nueva Identidad</span>
          </button>
        </div>

        {/* Result Card */}
        {identity && (
          <div className="mb-6">
            {/* Basic Data Card */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden shadow-lg mb-4">
              <div className="p-6 border-b border-neutral-800">
                <h2 className="text-xl font-semibold text-white font-sans">
                  Datos Básicos
                </h2>
              </div>
              
              <div className="divide-y divide-neutral-800">
                <FieldRow
                  icon={User}
                  label="Nombre Completo"
                  value={identity.name}
                  fieldKey="name"
                />
                <FieldRow
                  icon={Hash}
                  label="RUT"
                  value={identity.rut}
                  fieldKey="rut"
                />
                <FieldRow
                  icon={Calendar}
                  label="Edad"
                  value={`${identity.age} años`}
                  fieldKey="age"
                />
                <FieldRow
                  icon={Phone}
                  label="Teléfono"
                  value={identity.phone}
                  fieldKey="phone"
                />
                <FieldRow
                  icon={Mail}
                  label="Email"
                  value={identity.email}
                  fieldKey="email"
                />
                <FieldRow
                  icon={MapPin}
                  label="Dirección"
                  value={identity.address}
                  fieldKey="address"
                />
              </div>
            </div>

            {/* Advanced Data Cards */}
            {advancedMode && identity.healthInsurance && (
              <>
                {/* Health & Personal Data */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden shadow-lg mb-4">
                  <div className="p-6 border-b border-neutral-800">
                    <h2 className="text-xl font-semibold text-white font-sans flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Datos de Salud y Personales
                    </h2>
                  </div>
                  
                  <div className="divide-y divide-neutral-800">
                    {identity.healthInsurance && (
                      <FieldRow
                        icon={Heart}
                        label="Previsión"
                        value={identity.healthInsurance}
                        fieldKey="healthInsurance"
                      />
                    )}
                    {identity.afp && (
                      <FieldRow
                        icon={Building2}
                        label="AFP"
                        value={identity.afp}
                        fieldKey="afp"
                      />
                    )}
                    {identity.maritalStatus && (
                      <FieldRow
                        icon={Users}
                        label="Estado Civil"
                        value={identity.maritalStatus}
                        fieldKey="maritalStatus"
                      />
                    )}
                    {identity.bloodType && (
                      <FieldRow
                        icon={Heart}
                        label="Grupo Sanguíneo"
                        value={identity.bloodType}
                        fieldKey="bloodType"
                      />
                    )}
                  </div>
                </div>

                {/* Financial Data */}
                {(identity.bankAccount || identity.creditCard) && (
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden shadow-lg mb-4">
                    <div className="p-6 border-b border-neutral-800">
                      <h2 className="text-xl font-semibold text-white font-sans flex items-center gap-2">
                        <Building2 className="w-5 h-5" />
                        Datos Financieros
                      </h2>
                    </div>
                    
                    <div className="divide-y divide-neutral-800">
                      {identity.bankAccount && (
                        <>
                          <FieldRow
                            icon={Building2}
                            label="Banco"
                            value={identity.bankAccount.bank}
                            fieldKey="bank"
                          />
                          <FieldRow
                            icon={Building2}
                            label="Tipo de Cuenta"
                            value={identity.bankAccount.accountType}
                            fieldKey="accountType"
                          />
                          <FieldRow
                            icon={Building2}
                            label="Número de Cuenta"
                            value={identity.bankAccount.accountNumber}
                            fieldKey="accountNumber"
                          />
                        </>
                      )}
                      {identity.creditCard && (
                        <>
                          <FieldRow
                            icon={CardIcon}
                            label="Tarjeta de Crédito"
                            value={`${identity.creditCard.brand} ${identity.creditCard.number}`}
                            fieldKey="creditCardNumber"
                          />
                          <FieldRow
                            icon={CardIcon}
                            label="CVV"
                            value={identity.creditCard.cvv}
                            fieldKey="cvv"
                          />
                          <FieldRow
                            icon={CardIcon}
                            label="Vencimiento"
                            value={`${identity.creditCard.expiryMonth}/${identity.creditCard.expiryYear}`}
                            fieldKey="expiry"
                          />
                        </>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Copy JSON Button */}
            <div className="mb-6">
              <button
                onClick={handleCopyJSON}
                className="w-full py-3 px-6 bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-200 flex items-center justify-center gap-2 group font-sans"
              >
                <FileJson className={`w-5 h-5 transition-colors ${
                  copiedField === 'json' 
                    ? 'text-green-400' 
                    : 'text-white group-hover:text-neutral-300'
                }`} />
                <span className={`font-medium transition-colors ${
                  copiedField === 'json' 
                    ? 'text-green-400' 
                    : 'text-white'
                }`}>
                  {copiedField === 'json' ? 'JSON Copiado!' : 'Copiar JSON'}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!identity && (
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-12 text-center mb-6">
            <div className="text-neutral-600 mb-2">
              <User className="w-12 h-12 mx-auto mb-4 opacity-50" />
            </div>
            <p className="text-neutral-500 font-sans text-sm">
              Haz clic en el botón para generar una identidad
            </p>
          </div>
        )}

        {/* Bulk Generation Section */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-white mb-4 font-sans">
            Herramientas para Desarrolladores
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-neutral-400 mb-3 font-sans">
                Generación Masiva: <span className="text-white font-mono">{bulkCount} identidades</span>
              </label>
              <div className="flex items-center gap-4 mb-4">
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={bulkCount}
                  onChange={(e) => setBulkCount(Number(e.target.value))}
                  className="flex-1 h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-neutral-600"
                />
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={bulkCount}
                  onChange={(e) => {
                    const val = Number(e.target.value)
                    if (val >= 1 && val <= 50) setBulkCount(val)
                  }}
                  className="w-20 px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-neutral-700"
                />
              </div>
            </div>
            
            <button
              onClick={handleBulkExport}
              className="w-full py-3 px-6 bg-neutral-800 border border-neutral-700 rounded-lg hover:bg-neutral-700 hover:border-neutral-600 transition-all duration-200 flex items-center justify-center gap-2 group font-sans"
            >
              <Download className="w-5 h-5 text-white" />
              <span className="text-white font-medium">
                Descargar Excel ({bulkCount} identidades)
              </span>
            </button>
            
            <p className="text-xs text-neutral-500 font-sans text-center">
              Los datos generados incluirán {advancedMode ? 'todos los campos avanzados' : 'solo los datos básicos'}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
