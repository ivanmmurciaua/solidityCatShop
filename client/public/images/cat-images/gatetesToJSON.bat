@echo off
FOR /L %%G IN (1,1,360) DO (
    echo { "id": "%%G", "url": "./images/cat-images/%%G.jpg" }, >> %USERPROFILE%\Desktop\gatotos.txt
)