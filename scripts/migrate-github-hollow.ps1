# Migrate GitHub remote from 7ibin/haven -> 7ibin/hollow
# 1. Push all code to new repo hollow
# 2. Delete old repo haven (only after push succeeds)
#
# Prerequisite (once):  gh auth login
# Run from repo root:  powershell -ExecutionPolicy Bypass -File scripts/migrate-github-hollow.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

gh auth status | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Run: gh auth login" -ForegroundColor Yellow
  exit 1
}

$OldRepo = "7ibin/haven"
$NewRepo = "7ibin/hollow"
$NewUrl = "https://github.com/7ibin/hollow.git"

Write-Host "Checking if $NewRepo exists..."
$null = gh repo view $NewRepo 2>$null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Creating $NewRepo (public)..."
  gh repo create $NewRepo --public --description "Hollow — mobile insurance quote, compare & checkout (static prototype)"
  if ($LASTEXITCODE -ne 0) { throw "Failed to create $NewRepo" }
} else {
  Write-Host "$NewRepo already exists — will push to it."
}

Write-Host "Setting origin to $NewUrl"
git remote set-url origin $NewUrl
git remote -v

Write-Host "Pushing main..."
git push -u origin main
if ($LASTEXITCODE -ne 0) { throw "Push failed — haven was NOT deleted." }

Write-Host "Push OK. Delete old repo $OldRepo? (y/N)"
$confirm = Read-Host
if ($confirm -ne "y" -and $confirm -ne "Y") {
  Write-Host "Skipped delete. You can remove $OldRepo later: gh repo delete $OldRepo --yes"
  exit 0
}

Write-Host "Deleting $OldRepo..."
gh repo delete $OldRepo --yes
Write-Host "Done. New home: https://github.com/7ibin/hollow"
