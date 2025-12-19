# Script para configurar Git y subir el proyecto a GitHub
# Ejecutar: .\setup-git.ps1

Write-Host "=== Configuración de Git para ChileGen ===" -ForegroundColor Cyan
Write-Host ""

# Verificar si Git está instalado
$gitInstalled = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitInstalled) {
    Write-Host "ERROR: Git no está instalado o no está en el PATH." -ForegroundColor Red
    Write-Host ""
    Write-Host "Por favor, instala Git desde: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "O usa: winget install Git.Git" -ForegroundColor Yellow
    exit 1
}

Write-Host "✓ Git está instalado" -ForegroundColor Green
Write-Host ""

# Verificar si ya existe un repositorio Git
if (Test-Path .git) {
    Write-Host "⚠ Ya existe un repositorio Git en este directorio" -ForegroundColor Yellow
    $continue = Read-Host "¿Deseas continuar? (S/N)"
    if ($continue -ne "S" -and $continue -ne "s") {
        exit 0
    }
} else {
    Write-Host "Inicializando repositorio Git..." -ForegroundColor Cyan
    git init
    Write-Host "✓ Repositorio inicializado" -ForegroundColor Green
}

Write-Host ""
Write-Host "Configurando remote origin..." -ForegroundColor Cyan
git remote remove origin 2>$null
git remote add origin https://github.com/0xSS3K/Chile-gen-app.git
Write-Host "✓ Remote origin configurado" -ForegroundColor Green

Write-Host ""
Write-Host "Agregando archivos al staging..." -ForegroundColor Cyan
git add .

Write-Host ""
Write-Host "Creando commit inicial..." -ForegroundColor Cyan
$commitMessage = "Initial commit: ChileGen - Generador de Identidad Sintética Chilena"
git commit -m $commitMessage

Write-Host ""
Write-Host "Verificando rama..." -ForegroundColor Cyan
$currentBranch = git branch --show-current
if (-not $currentBranch) {
    git branch -M main
    $currentBranch = "main"
}

Write-Host ""
Write-Host "=== Listo para hacer push ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Para subir el proyecto a GitHub, ejecuta:" -ForegroundColor Yellow
Write-Host "  git push -u origin $currentBranch" -ForegroundColor White
Write-Host ""
Write-Host "Si es la primera vez, GitHub puede pedirte autenticación." -ForegroundColor Yellow
Write-Host "Puedes usar un Personal Access Token o GitHub CLI." -ForegroundColor Yellow

