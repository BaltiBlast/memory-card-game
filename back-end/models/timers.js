// Structuration de notre objet Timer en enumérant ses propriétés dans le constructeur
// Dans le cadre de la POO (Programmation Orientée Objet), il est préférable de structurer ses données à travers des class
class Timer {
  constructor(time) {
    this.time = time;
  }
}

// Export de notre module Timer
module.exports = Timer;
