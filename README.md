Alkalmazások fejlesztése projektmunka

KÉSZÍTETTE: Mayer Friderika RIIXJI
			Orosz Blanka LVZ4MT
			
TÉMA: Webshop (webalkalmazás)

LEÍRÁS:

Az alábbi alkalmazás egy webáruházat reprezentál, mely lehetőséget biztosít, hogy az alapvető célközönségének tekinthető fiatal felnőttek több kategóriában is válogathassanak az egyedi tervezésű termékek közül. (Ilyen kategóriák pl.: művészeti termékek, otthoni dekoráció / belső design, ruházat stb.) 

A program egy Java nyelven, Spring keretrendszerben íródó, MVC architektúrájú webalkalmazás, Maven build környezetben. A hozzá tartozó adatbázis H2, ebből nyeri a szükséges adatokat.


FUNKCIÓK ÉS FELHASZNÁLÓI JOGOSULTSÁGOK:

Felhasználók szempontjából megkülönböztetünk nem bejelentkezett felhasználókat, valamint adminokat és usereket. 

•	Kezdő felület (Login felület, Regisztrációs lehetőség, Termékek megtekintésének lehetősége) - Nem bejelentkezett felhasználók

•	Regisztrációs felület - Nem bejelentkezett felhasználók

•	Termékek megtekintése kategóriánként - Nem bejelentkezett felhasználók, Bejelentkezett felhasználók (USER)

•	Keresés a termékek között - Nem bejelentkezett felhasználók, Bejelentkezett felhasználók (USER)

•	Adott termék adatainak megtekintése - Nem bejelentkezett felhasználók, Bejelentkezett felhasználók (USER)

•	Termék kosárba helyezése - Bejelentkezett felhasználók (USER)

•	Kosár tartalmának módosítása, megvásárlása - Bejelentkezett felhasználók (USER)

•	Új termékek hozzáadása, meglévők eltávolítása - Bejelentkezett felhasználók (ADMIN)
