@ECHO OFF
SET output = %USERPROFILE%\Desktop\Cats\
FOR /L %%G IN (1,1,50) DO (
    echo Creando Catdroide Numero %%G
    timeout 2 > nul
    curl https://thiscatdoesnotexist.com > %USERPROFILE%\Desktop\Cats\%%G.jpg
)