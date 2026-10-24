# Download and update images according to Google Maps location (The Mountain Front Resort & Spa) and real Indian destination wedding themes

# 1. Update destination-palace.jpg with actual The Mountain Front Resort & Spa photo
Copy-Item "public\images\destination-resort-actual.jpg" "public\images\destination-palace.jpg" -Force
Write-Output "Updated destination-palace.jpg with actual resort photo"

# 2. Hero Mandap - Traditional Indian Wedding Mandap Decorated with Flowers
curl.exe -L "https://images.pexels.com/photos/33417236/pexels-photo-33417236/free-photo-of-traditional-indian-wedding-mandap-decorated-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1600" -o "public\images\hero-mandap.jpg"
Write-Output "Downloaded hero-mandap.jpg"

# 3. Haldi Ceremony - Vibrant Outdoor Haldi Ceremony with Bride and Groom
curl.exe -L "https://images.pexels.com/photos/33078527/pexels-photo-33078527/free-photo-of-vibrant-haldi-ceremony-with-bride-and-groom.jpeg?auto=compress&cs=tinysrgb&w=1600" -o "public\images\event-haldi.jpg"
Write-Output "Downloaded event-haldi.jpg"

# 4. DJ & Sangeet Night - Vibrant Indian Wedding Dance Celebration
curl.exe -L "https://images.pexels.com/photos/35328204/pexels-photo-35328204/free-photo-of-vibrant-indian-wedding-dance-celebration.jpeg?auto=compress&cs=tinysrgb&w=1600" -o "public\images\event-sangeet.jpg"
Write-Output "Downloaded event-sangeet.jpg"

# 5. Sagai Rasm (Ring Ceremony) - Bride & Groom Hands with Wedding Rings
curl.exe -L "https://images.pexels.com/photos/17794569/pexels-photo-17794569/free-photo-of-bride-and-groom-hands-with-wedding-rings.jpeg?auto=compress&cs=tinysrgb&w=1600" -o "public\images\event-mehendi.jpg"
Write-Output "Downloaded event-mehendi.jpg (Sagai)"

# 6. Couple Moment - Traditional Indian Wedding Couple Outdoors in Nature
curl.exe -L "https://images.pexels.com/photos/35069916/pexels-photo-35069916/free-photo-of-traditional-indian-wedding-couple-embracing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1600" -o "public\images\couple-moment.jpg"
Write-Output "Downloaded couple-moment.jpg"

# 7. Reception - Elegant Outdoor Wedding Reception Decor
curl.exe -L "https://images.pexels.com/photos/32994462/pexels-photo-32994462/free-photo-of-elegant-outdoor-wedding-reception-decor.jpeg?auto=compress&cs=tinysrgb&w=1600" -o "public\images\event-reception.jpg"
Write-Output "Downloaded event-reception.jpg"
