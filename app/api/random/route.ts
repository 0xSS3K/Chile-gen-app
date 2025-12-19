import { NextRequest, NextResponse } from 'next/server'
import { generateIdentity, type ChileanIdentity } from '@/utils/chilean-data'

export interface ApiResponse {
  success: boolean
  data: ChileanIdentity[]
  error?: string
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams
    const mode = searchParams.get('mode')
    const qtyParam = searchParams.get('qty')

    // Parse quantity (default: 1, max: 10)
    let qty = 1
    if (qtyParam) {
      const parsedQty = parseInt(qtyParam, 10)
      if (!isNaN(parsedQty) && parsedQty > 0 && parsedQty <= 10) {
        qty = parsedQty
      } else if (parsedQty > 10) {
        return NextResponse.json(
          {
            success: false,
            data: [],
            error: 'La cantidad máxima permitida es 10 identidades por solicitud',
          } as ApiResponse,
          {
            status: 400,
            headers: corsHeaders,
          }
        )
      } else if (parsedQty <= 0) {
        return NextResponse.json(
          {
            success: false,
            data: [],
            error: 'La cantidad debe ser mayor a 0',
          } as ApiResponse,
          {
            status: 400,
            headers: corsHeaders,
          }
        )
      }
    }

    // Determine if advanced mode
    const includeAdvanced = mode === 'advanced'

    // Generate identities
    const identities: ChileanIdentity[] = []
    for (let i = 0; i < qty; i++) {
      identities.push(generateIdentity({ includeAdvanced }))
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        data: identities,
      } as ApiResponse,
      {
        status: 200,
        headers: corsHeaders,
      }
    )
  } catch (error) {
    // Handle errors
    console.error('Error generating identities:', error)
    return NextResponse.json(
      {
        success: false,
        data: [],
        error: error instanceof Error ? error.message : 'Error interno del servidor',
      } as ApiResponse,
      {
        status: 500,
        headers: corsHeaders,
      }
    )
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders })
}

