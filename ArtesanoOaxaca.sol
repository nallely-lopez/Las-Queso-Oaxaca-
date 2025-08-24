// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ArtesanoOaxaca{
    struct Artesano{
        uint256 id;
        string nombre;
        string lugarOrigen;
        string telefono;
        string producto;
        string descripcion;
        address DireccionA;
    }

    struct Artesania {
        uint256 id; 
        string nombre;
        string producto;
        string descripcion;
        int precioArtesano;
        int precioPublico; 
        uint256 idArtesano;
    }

    
    // 📌 Almacenamiento de artesanos y artesanías
    mapping (uint256 => Artesano) public artesanos;
    Artesano[] listaArtesano; 

    mapping (uint256 => Artesania) public artesania;
    Artesania[] listaArtesania;

    uint256 public idArtesano = 0;
    uint256 public idArtesania = 0;

    // 🔹 Alta de artesano usando struct completo
    function altaArtesano(Artesano memory inputArtesano) public {
        idArtesano++;
        artesanos[idArtesano] = inputArtesano;
        listaArtesano.push(artesanos[idArtesano]);
    }

    // 🔹 Alta de artesanía usando struct completo
    function altaArtesania(Artesania memory inputArtesania) public {
        idArtesania++;
        artesania[idArtesania] = inputArtesania;
        listaArtesania.push(artesania[idArtesania]);
    }

    // 🔹 Alta de artesano con parámetros individuales
    function altaArtesano(
        string memory _nombre,
        string memory _lugarOrigen,
        string memory _telefono,
        string memory _producto,
        string memory _descripcion,
        address _direccionA
    ) public {
        idArtesano++;
        Artesano memory nuevo = Artesano(
            idArtesano,
            _nombre,
            _lugarOrigen,
            _telefono,
            _producto,
            _descripcion,
            _direccionA
        );
        artesanos[idArtesano] = nuevo;
        listaArtesano.push(nuevo);
    }

    // 🔹 Alta de artesanía (pasando el precio calculado manualmente)
    function altaArtesania(
        string memory _nombre,
        string memory _producto,
        string memory _descripcion,
        int _precioArtesano,
        int _precioPublico,
        uint256 _idArtesano
    ) public {
        require(artesanos[_idArtesano].id != 0, "El artesano no existe");
        idArtesania++;
        Artesania memory nueva = Artesania(
            idArtesania,
            _nombre,
            _producto,
            _descripcion,
            _precioArtesano,
            _precioPublico,
            _idArtesano
        );
        artesania[idArtesania] = nueva;
        listaArtesania.push(nueva);
    }

    // 🔹 Nueva función: alta de artesanía con cálculo automático del precio público (+15%)
    function altaArtesaniaConCalculo(
        string memory _nombre,
        string memory _producto,
        string memory _descripcion,
        int _precioArtesano,
        uint256 _idArtesano
    ) public {
        require(artesanos[_idArtesano].id != 0, "El artesano no existe");
        idArtesania++;

        // Calcular el precio público = precio del artesano + 15%
        // Usamos enteros con decimales simulados (x100) para precisión
        int precioPublico = (_precioArtesano * 115) / 100;

        Artesania memory nueva = Artesania(
            idArtesania,
            _nombre,
            _producto,
            _descripcion,
            _precioArtesano,
            precioPublico,
            _idArtesano
        );
        artesania[idArtesania] = nueva;
        listaArtesania.push(nueva);
    }

    // 🔹 Obtener un artesano por ID
    function verArtesano(uint256 _id) public view returns (Artesano memory) {
        require(artesanos[_id].id != 0, "Artesano no existe");
        return artesanos[_id];
    }

    // 🔹 Obtener una artesanía por ID
    function verArtesania(uint256 _id) public view returns (Artesania memory) {
        require(artesania[_id].id != 0, "Artesania no existe");
        return artesania[_id];
    }

    // 🔹 Listar todos los artesanos
    function listarArtesanos() public view returns (Artesano[] memory) {
        return listaArtesano;
    }

    // 🔹 Listar todas las artesanías
    function listarArtesanias() public view returns (Artesania[] memory) {
        return listaArtesania;
    }

    // 🔹 Modificar datos de un artesano
    function modificarArtesano(
        uint256 _id,
        string memory _nombre,
        string memory _lugarOrigen,
        string memory _telefono,
        string memory _producto,
        string memory _descripcion,
        address _direccionA
    ) public {
        require(artesanos[_id].id != 0, "Artesano no existe");
        Artesano storage art = artesanos[_id];
        art.nombre = _nombre;
        art.lugarOrigen = _lugarOrigen;
        art.telefono = _telefono;
        art.producto = _producto;
        art.descripcion = _descripcion;
        art.DireccionA = _direccionA;
    }

    // 🔹 Modificar precio de una artesanía
    function modificarPrecioArtesania(uint256 _id, int _nuevoPrecioArtesano) public {
        require(artesania[_id].id != 0, "Artesania no existe");
        Artesania storage art = artesania[_id];
        art.precioArtesano = _nuevoPrecioArtesano;
        // Recalcula automáticamente el precio público (+15%)
        art.precioPublico = (_nuevoPrecioArtesano * 115) / 100;
    }
}