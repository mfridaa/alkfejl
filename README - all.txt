WEBSHOP (dokumentáció)

 

Kliensoldali szolgáltatások:

 

-Termékek menüpont:

               -Webshop termékeinek kilistázása

               -Szűrési lehetőség: kategóriánkénti megtekintés

 

-Bejelentkezés menüpont:

               -Bejelentkezés ADMIN felhasználólént

               -Bejelentkezés USER felhasználóként

 

-Regisztráció menüpont:

               -Regisztráviós lehetőség -> USER felhasználóként

              

              

BEJELENKEZVE-USER:

 

-Termékek menüpont:

               -Termékre kattintás: termék adatainak megjelenítése

               -Kosárba helyezés

              

-Rendelések menüpont:

               -Megrendelt termékek megjelenítése

               -Rendelés eltávolítása

               -Fizetési oldalra navigálás -> termék kifizetése

              

-Kijelentkezés menüpont:

               -kijelentkezés

 

              

BEJELENKEZVE-ADMIN:

 

-Összes rendelés menüpont:

               -Az összes eddigi rendelés megtekintése

 

-Termékek menüpont:

               -Webshop termékeinek kilistázása

               -Szűrési lehetőség: kategóriánkénti megtekintés

              

-Rendelések menüpont:

               -Az összes user által termékek megjelenítése + állapot(fizetett vagy sem)

 

-Felhasználók menüpont:

               -Az alkalmazás felhasználóinak megtekintése

              

-Új termék menüpont:

               -Új termék felvétele

              

              

-Kijelentkezés menüpont:

               -kijelentkezés

              

 

              

Kapcsolat a szerverrel:

A szerverrel AJAX kérésekkel valósul meg a kommunikáció.

 

 

Állapot diagramm:

https://github.com/mfridaa/alkfejl/blob/master /allapot.PNG

 

 

Egy funkció folyamatának leírása:

Bejelenkezés:

A kliens oldalon megadott input mezőkben lévő adatok, (felhasználónév, jelszó)

a szerver oldalon validálódnak, azaz megtörténik az ellenőrzés, hogy szerepel-e

a megadott felhasználó az adatbázisban. Ha létezik a felhasználó, a hozzá tartozó

role valamint id szerint jelennek meg, a számára elérhető kliensoldali szolgáltatások.

 

Tesztelés:

Az alkalmazás megfelelő tesztelése érdekében E2E tesztek íródtak. Ezekből pár eredménye az alábbi képen is megtekinhető:

https://github.com/mfridaa/alkfejl/blob/master/tests.PNG

 

 

 

Felhasználói dokumentáció:

-Az alábbi alkalmazás egy webshopot valósít meg, melyben kedvére válogathat a felhasználó

a különböző kategóriákba tartozó termékek közül.

 

-Első képésként, ha még nem történt regisztráció, ezt a Regisztráció gombra kattintva van lehetőség megtenni.

Itt meg kell adni eg felhasználónevet és egy jeszót, majd megnyomni a regisztráció gombot,

így létrejön a webshophoz tartozó új felhasználói fiók.

 

-Következő lépésként be kell jelentkezi a Bejelentkezés menüpontban. Itt a regisztráció során választott felhasználónévvel és jelszóval lehetséges belépni a felhasználói fiókba ami a korábban már megtörtént regisztráció során jött létre.

 

-Bejelnetkezés után lehetőség van nézegetni a termékeket, a kosárra kattintva kosárba helyezni azokat, mindezt a termékek menüpont alatt.

 

-Megrendelés fizetése és törlése a Rendelések menüpontra kattintva történik, a menedzselni kívánt termékhez tartozó, megfelelő ikon (fizetés, törlés) kiválasztásával.

 

-A vásárlás befejeztével a kijelentkezés gomb megnyomásával hagyható el a felhasználói profil.

 
