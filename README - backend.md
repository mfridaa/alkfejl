# Alkalmazások fejlesztése

## Backend megvalósítsa - dokumentáció

### Fejlesztői környezet bemutatása

Az alkalmazás egy Java nyelven, Spring Boot (1.5.8) keretrendszerben íródott, MVC architektúrájú Maven projekt. A program által használt dependenciák, többek között JPA, H2 (adatbázis), Devtools, Lombok, Thymeleaf.

#### Táblák adatkapcsolati diagrammgja

Az uml a következő linken érhető el:
https://github.com/mfridaa/alkfejl/blob/master/database.png

#### Alkalmazott könyvtárstruktúra

Az MVC architektúra logikája alapján épül fel az alkalmazás könyvtárstruktúrája. A projekt az osztályok funkciójának megfelelően  package-ekre  van osztva, a következő féle képpen:

#### Source packages:
- ```Főkönyvtár:``` hu.elte.alkfejl (ez tartalmazza a main class-t, azaz AlkfejlApplication.java)
- ```Controllerek:``` hu.elte.alkfejl.controller
- ```Repository-k:``` hu.elte.alkfejl.repository
- ```Entity-k:``` elte.alkfejl.entity
- ```Saját annotációk implementációja:``` elte.alkfejl.annotation
- ```Interceptor:``` elte.alkfejl.interceptor
- ```Service:``` elte.alkfejl.service (pl  User session: Session.java)

#### Végpontok

* ```orders/orders:``` rendelések listázása, bárki számára elérhető
* ```orders/addOrder:``` rendelés felvétele, user vagy admin jogosultsággal
* ```orders/deleteOrder:``` rendelés törlése, user vagy admin jogosultsággal
* ```orders/updateOrder:``` rendelés módosítása, user vagy admin jogosultsággal
* ```product/allProducts:``` összes termék listázása, bárki számára elérhető
* ```product/productByName:``` termékek név szerinti listázása, bárki számára elérhető
* ```product/addProduct:``` termék felvétele, admin jogosultsággal
* ```product/delteProduct:``` termék törlése, admin jogosultsággal
* ```product/updateProduct:``` termék módosítása, admin jogosultsággal
* ```users/users:``` felhasználók listázása, admin jogosultsággal
* ```users/registration:``` regisztráció, bárki számára elérhető
* ```users/login:``` bejelentkezés, bárki számára elérhető