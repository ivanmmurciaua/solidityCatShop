#! /bin/bash
# Download 50 cats in client/public/images/cat-images

for c in {1..48}
do
    curl https://thiscatdoesnotexist.com > ../client/public/images/cat-images/cat$c.jpg
    sleep 2
done