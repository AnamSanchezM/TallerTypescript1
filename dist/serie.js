// series.ts
// Definición de la clase Serie
var Serie = /** @class */ (function () {
    // Constructor para inicializar los atributos
    function Serie(id, name, channel, seasons, description, link, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
    return Serie;
}());
export { Serie };
