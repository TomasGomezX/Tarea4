const Ropa = class {
    constructor(nombre, tipo, precio) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.precio = precio;
      this.detalles = {
        color: '',
        talla: '',
      };
    }
  
    setDetalles = (color, talla) => {
      this.detalles.color = color;
      this.detalles.talla = talla;
    }
  
    mostrarDetalles = () => {
      console.log(`Detalles de ${this.nombre}: Color ${this.detalles.color}, Talla ${this.detalles.talla}`);
    }
  };
  
  const Camiseta = class extends Ropa {
    constructor(nombre, precio) {
      super(nombre, 'Camiseta', precio);
    }
  
    setEstampado = (estampado) => {
      this.detalles.estampado = estampado;
    }
  
    mostrarEstampado = () => {
      console.log(`${this.nombre} tiene el estampado: ${this.detalles.estampado}`);
    }
  };
  
  const camiseta1 = new Camiseta('Camiseta de rayas', 25);
  camiseta1.setDetalles('Azul', 'M');
  camiseta1.setEstampado('Rayas blancas');
  camiseta1.mostrarDetalles();
  camiseta1.mostrarEstampado();