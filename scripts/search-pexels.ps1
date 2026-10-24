$headers = @{ "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" }
$urls = @(
    "https://www.pexels.com/search/indian%20wedding/",
    "https://www.pexels.com/search/wedding%20night%20lights/"
)

$results = @()
foreach ($u in $urls) {
    try {
        $html = (Invoke-WebRequest -Uri $u -Headers $headers -TimeoutSec 15).Content
        $regex = [regex]'https://images\.pexels\.com/photos/\d+/[^"''\s?&]+\.jpeg'
        $matches = $regex.Matches($html)
        foreach ($m in $matches) {
            $results += $m.Value
        }
    } catch {
        Write-Output "Error fetching $u"
    }
}

$results | Select-Object -Unique | Select-Object -First 25 | Out-File -FilePath "scripts/found-pexels.txt"
Write-Output "Found $($results.Count) photos"
