# Lab 7(8)
##  Obsługa map + Geolokacja

### Pobieranie lokalizacji i odwrócenie jej przez geolokalizacje.

Do pobrania lokalizacji użyłem pakietu Location z expo-location. Zwraca on pobraną lokalizacje z telefonu z wybranym typem precyzji. Następnie przy pomocy tego samego pakietu  i danych pobranych z lokalizacji użyłem funkcji jej odwrócenia. Proces odwracania przez google maps jest dostępny tylko wtedy kiedy dodamy klucz api gdyż zapytania potrzebne do niego są płatne chociaż google oferuje darmowy budżet. Precyzja samej lokalizacji okazała się wysoka jednak odwrócenie jej dało bardzo nieprecyzyjny rezultat.

![nua](https://github.com/Kiritek/aplikacje-mobilne-21164-195ICA/blob/main/lab7/screenshots/lokalizacja%20i%20geolokalizacja.jpg)

### Wyświetlenie lokalizacji użytkownika na mapie i dodane pinezki reprezentujące wybrane restauracje w pobliżu

Mapa pochodzi z pakietu react-native-maps. Pozwala nam na ustawienie domyślnej pozycji mapy jak i na oznaczenie na mapie punktów w postaci pinezek jako mapmarkery z opisem i tytułem. Poza tym posiada własny moduł do lokalizacji dzięki któremu możemy jeszcze raz scentrować mape na obecnej lokacji. Bazuje na wbudowanych google maps.

![nua](https://github.com/Kiritek/aplikacje-mobilne-21164-195ICA/blob/main/lab7/screenshots/lokalizacja%20z%20restauracjami.jpg)


