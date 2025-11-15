# AntiFoodWasteApp
Web app to prevent food waste - Web Technologies Project


#  Specificatii Anti Food Waste App


1.Descrierea aplicației
Aplicația este o platformă web care ajută utilizatorii să reducă risipa alimentară. Aceștia pot gestiona alimentele din frigider, pot primi alerte înainte de expirare și pot marca produsele ca disponibile pentru donare. Prietenii sau alți utilizatori pot vedea produsele oferite și pot face claim pe ele. Prin integrarea cu rețele sociale, aplicația facilitează distribuirea rapidă a alimentelor disponibile și încurajează schimbul între membri comunității.


2. Lista funcționalităților
2.1. Gestionarea alimentelor (Food Management)

Ca utilizator:
pot adăuga alimente în lista mea, fiecare având:
nume produs
categorie (fructe, lactate, carne, conserve etc.)
cantitate
dată expirare
poză (opțional)
pot edita sau șterge produse din listă
pot vizualiza produsele organizate pe categorii pentru o navigare mai ușoară




2.2 Notificări de expirare (Expiry Alerts)
Ca utilizator:
primesc notificări atunci când un produs se apropie de expirare (ex.: cu 2 zile înainte)


pot marca un produs ca „disponibil pentru partajare / donare”


pot vedea într-o listă separată toate produsele disponibile




2.3 Prieteni & Grupuri (Friends & Groups)
Ca utilizator:
pot crea grupuri de prieteni (ex.: Colectiv, Familie, Colegi de apartament)


pot eticheta prietenii în funcție de preferințe alimentare:
vegetarian
vegan
carnivor
alte preferințe personalizate

pot invita prieteni să vizualizeze lista mea de produse disponibile



2.4 Claim produse (Product Claiming)
Ca utilizator:
pot vedea produsele disponibile ale altor utilizatori


pot face claim pe un produs (trimit o cerere către proprietar)
proprietarul produsului poate:
aproba cererea
respinge cererea
produsul poate fi apoi marcat ca „rezervat” sau „donat”



2.5 Distribuire pe rețele sociale (Social Media Sharing)
Ca utilizator:
pot posta pe Instagram sau Facebook produsele disponibile pentru donare


pot distribui:


un produs individual


o listă de produse

distribuirea se face prin:

share link

poză + descriere generată automat


3. SPECIFICAȚII TEHNICE
Frontend
HTML5, CSS3, JavaScript


Framework la alegere: React 


Opțional: Tailwind pentru UI
Backend
Node.js + Express
 (ideal pentru API REST simplu)
Deployment
Servicii recomandate cu free tier pentru studenți:


Azure


AWS
Bază de date
MySQL / PostgreSQL
(Bază relațională)
ORMt:
Sequelize


Prisma


Autentificare
JWT (token-based)


Firebase Auth
Notificări
Cron job în backend (verificare zilnică date expirare)


verificare la login a produselor aproape expirate
Integrare social media
Share prin URL pe Facebook / Instagram


Fără necesitatea API-urilor avansate
STRUCTURA APLICAȚIEI

1. Pagina principală (Landing Page)
Descriere scurtă


Login & Register
2. Dashboard utilizator
Lista alimentelor


Buton: „Adaugă produs”


Filtrare pe categorii


Secțiune: „Produse aproape de expirare”


3. Gestionarea prietenilor
Adaugă prieten


Creează grup


Etichete preferințe alimentare


4. Produse disponibile din comunitate
Lista produselor marcate ca disponibile


Buton „Claim produs”

5. Profil utilizator
Date personale


Grupuri


Setări notificări




# 2. Planul de proiect
2.1. Etape și calendar

****Etapa 1 – până la 16.11.2025***


Finalizare „Specificații detaliate”


Definire model de date (tabele, relații)


Definire structură API (liste endpoint-uri)


Creare repository Git + structură minimă /frontend și /backend


Alegerea serviciului de deploy (ex. Render / Azure / Railway)



***Etapa 2 – 16.11–06.12.2025***

Implementare backend (Node.js + Express)

Conectare la baza de date prin ORM

Implementare endpoint-uri pentru:
autentificare
CRUD produse
grupuri de prieteni
claim-uri

Adăugare instrucțiuni de rulare în README
Testare basic cu Postman / browser



***Etapa 3 – ultimul seminar***

Implementare frontend (React )

Integrare frontend cu backend (apeluri API)

Implementare:
dashboard utilizator
gestionare prieteni & grupuri
produse disponibile & claim
notificări expirare (variantă aleasă)
share pe social media
Deploy aplicație pe server
Pregătire demo final



2.2. Împărțirea responsabilităților 

Student 1
Implementare backend (API REST, autentificare, notificări)
Integrare cu baza de date și ORM
Documentarea API-ului în README


Student 2
Implementare frontend (React: pagini, componente, routing)
Integrarea apelurilor către API
Elemente UX/UI + share social media


Responsabilități comune
Definirea interfeței și structurii paginilor (wireframe-uri)
Model de date și schema bazei de date
Scriere și actualizare „Specificații detaliate”
Planul de proiect
Testare și debug
Pregătirea și susținerea demo-ului

Aceasta reprezintă o împărțire orientativă a rolurilor; pe parcursul proiectului, responsabilitățile pot fi ajustate, iar fiecare membru poate contribui și la alte sarcini sau poate oferi suport colegului.




2.3. Workflow de lucru 

Folosim GitHub pentru versionare:
branch principal: main
branch-uri pentru feature-uri: feature/backend-auth, feature/frontend-dashboard etc.

Comunicăm și urmărim task-urile într-un Google Doc / WhatsApp

La fiecare etapă intermediară:
facem code review între noi

actualizăm documentația (specificații + README)





