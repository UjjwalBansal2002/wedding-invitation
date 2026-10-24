$url = "https://www.goibibo.com/hotels/the-mountain-front-hotel-in-jim-corbett-ramnagar-263d957b518240a8aa91611d18781b5e/"
$headers = @{ "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" }
$response = Invoke-WebRequest -Uri $url -Headers $headers
$regex = [regex]'https://[^"''\s<>]+?\.(?:jpg|jpeg|png)'
$matches = $regex.Matches($response.Content)
$unique = $matches | ForEach-Object { $_.Value } | Where-Object { $_ -match 'mmtcdn|goibibo|hotel' } | Select-Object -Unique
$unique | Out-File -FilePath "scripts/photo-urls.txt"
Write-Output "Found $($unique.Count) photo URLs"
