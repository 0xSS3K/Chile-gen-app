'use client'

import { useState } from 'react'
import { Copy, ArrowLeft, Code, AlertCircle, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function ApiDocs() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const CodeBlock = ({ 
    code, 
    language = 'bash',
    id 
  }: { 
    code: string
    language?: string
    id: string
  }) => (
    <div className="relative group">
      <pre className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 overflow-x-auto">
        <code className={`text-sm font-mono text-neutral-300`}>
          {code}
        </code>
      </pre>
      <button
        onClick={() => handleCopy(code, id)}
        className="absolute top-3 right-3 p-2 bg-neutral-900 border border-neutral-800 rounded hover:bg-neutral-800 hover:border-neutral-700 transition-colors opacity-0 group-hover:opacity-100"
        title="Copiar código"
      >
        <Copy 
          className={`w-4 h-4 transition-colors ${
            copiedCode === id 
              ? 'text-green-400' 
              : 'text-neutral-400 hover:text-white'
          }`} 
        />
      </button>
      {copiedCode === id && (
        <div className="absolute top-3 right-12 flex items-center gap-1 text-green-400 text-xs">
          <CheckCircle2 className="w-4 h-4" />
          Copiado
        </div>
      )}
    </div>
  )

  const exampleResponse = {
    "success": true,
    "data": [
      {
        "name": "María Fernanda González Silva",
        "rut": "18.234.567-8",
        "age": 32,
        "phone": "+56 9 8765 4321",
        "email": "maria.gonzalez@example.com",
        "address": "Calle Los Aromos 1234, Las Condes, Región Metropolitana",
        "healthInsurance": "FONASA",
        "afp": "Capital",
        "maritalStatus": "Soltero",
        "bloodType": "O+",
        "bankAccount": {
          "bank": "Banco de Chile",
          "accountType": "Cuenta Corriente",
          "accountNumber": "1234567890"
        },
        "creditCard": {
          "brand": "Visa",
          "number": "4532 1234 5678 9010",
          "cvv": "123",
          "expiryMonth": "12",
          "expiryYear": "2025"
        }
      }
    ]
  }

  return (
    <main className="min-h-screen bg-neutral-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors font-sans text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al Generador
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 font-sans tracking-tight">
            API para Desarrolladores
          </h1>
          <p className="text-neutral-400 font-sans">
            Integra identidades chilenas sintéticas en tus aplicaciones gratuitamente
          </p>
        </header>

        {/* Endpoint Section */}
        <div className="mb-6 bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-neutral-400" />
            <h2 className="text-xl font-semibold text-white font-sans">
              Endpoint Principal
            </h2>
          </div>
          <CodeBlock 
            code="GET https://chilegen.cl/api/random"
            language="http"
            id="endpoint"
          />
        </div>

        {/* Parameters Section */}
        <div className="mb-6 bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4 font-sans">
            Parámetros
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-300 font-sans">Parámetro</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-300 font-sans">Tipo</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-300 font-sans">Requerido</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-300 font-sans">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4">
                    <code className="text-sm font-mono text-green-400 bg-neutral-950 px-2 py-1 rounded">mode</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-neutral-400 font-sans">string</td>
                  <td className="py-3 px-4 text-sm text-neutral-400 font-sans">Opcional</td>
                  <td className="py-3 px-4 text-sm text-neutral-300 font-sans">
                    Usa <code className="text-xs font-mono text-green-400 bg-neutral-950 px-1.5 py-0.5 rounded">advanced</code> para obtener datos bancarios y de salud. 
                    Por defecto: modo básico.
                  </td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4">
                    <code className="text-sm font-mono text-green-400 bg-neutral-950 px-2 py-1 rounded">qty</code>
                  </td>
                  <td className="py-3 px-4 text-sm text-neutral-400 font-sans">number</td>
                  <td className="py-3 px-4 text-sm text-neutral-400 font-sans">Opcional</td>
                  <td className="py-3 px-4 text-sm text-neutral-300 font-sans">
                    Cantidad de identidades a generar (1 a 10). Por defecto: 1.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Example Usage Section */}
        <div className="mb-6 bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4 font-sans">
            Ejemplo de Uso
          </h2>
          <CodeBlock 
            code="curl https://chilegen.cl/api/random?mode=advanced&qty=2"
            language="bash"
            id="curl-example"
          />
          <p className="text-sm text-neutral-400 mt-3 font-sans">
            Este ejemplo genera 2 identidades con datos avanzados (bancarios y de salud).
          </p>
        </div>

        {/* Response Example Section */}
        <div className="mb-6 bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4 font-sans">
            Ejemplo de Respuesta
          </h2>
          <CodeBlock 
            code={JSON.stringify(exampleResponse, null, 2)}
            language="json"
            id="response-example"
          />
          <div className="mt-4 p-4 bg-neutral-950 border border-neutral-800 rounded-lg">
            <h3 className="text-sm font-semibold text-white mb-2 font-sans">
              Estructura de la Respuesta:
            </h3>
            <ul className="space-y-2 text-sm text-neutral-300 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span><code className="text-xs font-mono text-green-400 bg-neutral-900 px-1.5 py-0.5 rounded">success</code>: Indica si la solicitud fue exitosa (boolean)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span><code className="text-xs font-mono text-green-400 bg-neutral-900 px-1.5 py-0.5 rounded">data</code>: Array de identidades generadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span><code className="text-xs font-mono text-green-400 bg-neutral-900 px-1.5 py-0.5 rounded">error</code>: Mensaje de error (solo presente si success es false)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rate Limits Section */}
        <div className="mb-6 bg-neutral-900 border border-yellow-600/30 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xl font-semibold text-white mb-2 font-sans">
                Límites de Uso
              </h2>
              <p className="text-sm text-neutral-300 font-sans">
                <strong className="text-yellow-400">Rate Limit:</strong> 10 peticiones cada 10 segundos por IP.
              </p>
              <p className="text-xs text-neutral-400 mt-2 font-sans">
                Si excedes este límite, recibirás un error 429 (Too Many Requests). Por favor, implementa un sistema de reintentos con backoff exponencial.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mb-6 bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4 font-sans">
            Información Adicional
          </h2>
          <div className="space-y-3 text-sm text-neutral-300 font-sans">
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>La API es completamente <strong className="text-white">gratuita</strong> y no requiere autenticación.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Los datos generados son <strong className="text-white">sintéticos</strong> y solo para propósitos de testing y desarrollo.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>La API soporta <strong className="text-white">CORS</strong> y puede ser utilizada desde aplicaciones web del lado del cliente.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>En modo <code className="text-xs font-mono text-green-400 bg-neutral-950 px-1.5 py-0.5 rounded">advanced</code>, se incluyen datos bancarios, de salud y personales adicionales.</span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-200 font-sans text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Generador
          </Link>
        </div>
      </div>
    </main>
  )
}
