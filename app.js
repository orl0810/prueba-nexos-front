var app = angular.module("app", ["ngResource", "components"])

app.controller("tarjeta-controller", ["$scope", "$http", "$locale", ($scope, $http) => {
    $http.get("http://localhost:8080/tarjetas/all")
        .success((data) => {
            console.log(data)
            $scope.tarjetas= data})
        .error((e) => {console.log(e)})

   /*  $scope.tarjetas = [
        {
            PAN: 123456789876,
            titular: "Orlando",
            cedula: 1018,
            tipo: "Débito",
            telefono: 319429,
        },
        {
            PAN: 123452323276,
            titular: "Alvaro",
            cedula: 487957,
            tipo: "Crédito",
            telefono: 6182,
        }
    ]; */
}])

app.controller("transaccion-controller", ["$scope", "$http", ($scope, $http) => {
    $http.get("http://localhost:8080/transactions/all")
        .success((data) => {
            console.log(data)
            $scope.transacciones= data})
        .error((e) => {console.log(e)})

   /*  $scope.transacciones = [
        {
            PAN: 123456789876,
            referencia: 123456,
            total_compra: 23000,
            direccion: "Calle 7 # 92",
            estado: "Aprobada",
            fecha: "hoy"
        },
        {
            PAN: 1234567876,
            referencia: 654321,
            total_compra: 200000,
            direccion: "Calle 7 # 92",
            estado: "Rechazada",
            fecha: "Ayer"
        }
    ]; */
}])